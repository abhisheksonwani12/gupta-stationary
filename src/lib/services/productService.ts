import { Product } from "@/types";
import { PRODUCTS as INITIAL_PRODUCTS } from "@/data/products";
import { supabase } from "@/lib/supabase/client";

const STORAGE_KEY = "instant_live_products";
const EVENT_KEY = "instant_inventory_updated";

function sanitizeForDb<T>(obj: T): T {
  return JSON.parse(
    JSON.stringify(obj, (k, v) => (v === undefined ? null : v))
  );
}

let supabaseInitialized = false;

export const productService = {
  getProducts(): Product[] {
    if (typeof window === "undefined") {
      return INITIAL_PRODUCTS;
    }
    try {
      const stored = localStorage.getItem(STORAGE_KEY) || localStorage.getItem("gupta_live_products");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          let hasImageUpdates = false;
          const initialMap = new Map(INITIAL_PRODUCTS.map(p => [p.slug, p]));
          
          // Ensure stored items use valid category, bulkPricing and updated product images
          const updated = parsed.map((p: Product) => {
            const initial = initialMap.get(p.slug);
            let item = { ...p };
            if (!item.category && initial?.category) {
              item.category = initial.category;
            }
            if (!item.bulkPricing) {
              item.bulkPricing = initial?.bulkPricing || [];
            }
            if (initial && initial.images && initial.images[0] && (!item.images || !item.images[0] || item.images[0].includes("unsplash.com"))) {
              hasImageUpdates = true;
              item.images = initial.images;
            }
            return item;
          });

          // If stored catalog is missing new initial products, merge them in automatically
          if (updated.length < INITIAL_PRODUCTS.length) {
            const storedSlugs = new Set(updated.map((p: Product) => p.slug));
            const newToAdd = INITIAL_PRODUCTS.filter(p => !storedSlugs.has(p.slug));
            const merged = [...updated, ...newToAdd];
            localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
            return merged;
          }

          if (hasImageUpdates) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
            return updated;
          }

          return parsed;
        }
      }
    } catch (e) {
      console.error("Failed to read products from storage:", e);
    }
    // Initialize storage if empty
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_PRODUCTS));
      } catch (e) {
        console.error("Failed to seed initial products:", e);
      }
    }
    return INITIAL_PRODUCTS;
  },

  getProductBySlug(slug: string): Product | undefined {
    const products = this.getProducts();
    return products.find((p) => p.slug === slug);
  },

  getProductById(id: string): Product | undefined {
    const products = this.getProducts();
    return products.find((p) => p.id === id);
  },

  saveProducts(products: Product[]): void {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
      window.dispatchEvent(new CustomEvent(EVENT_KEY, { detail: { products } }));
    } catch (e) {
      console.error("Failed to save products:", e);
    }
  },

  async syncWithSupabase(): Promise<void> {
    if (typeof window === "undefined" || !supabase || supabaseInitialized) return;
    supabaseInitialized = true;

    try {
      // 1. Fetch live products from Supabase
      const { data, error } = await supabase
        .from("products")
        .select("*");

      if (error) {
        console.warn("Supabase products fetch note (using local cache):", error.message);
      } else if (data && data.length > 0) {
        // Map data from Supabase records
        const catMap: Record<string, string> = {
          "c0000000-0000-0000-0000-000000000001": "pens-pencils",
          "c0000000-0000-0000-0000-000000000002": "notebooks-notepads",
          "c0000000-0000-0000-0000-000000000003": "paper-products",
          "c0000000-0000-0000-0000-000000000004": "office-supplies",
          "c0000000-0000-0000-0000-000000000005": "school-supplies",
          "c0000000-0000-0000-0000-000000000006": "eco-friendly-range",
        };

        const dbProductMap = new Map<string, Product>();
        data.forEach((item: any) => {
          const raw = item.data && typeof item.data === "object" ? { ...item.data, id: item.id } : (item as Product);
          const images = Array.isArray(item.images) && item.images.length > 0
            ? item.images
            : Array.isArray(raw.images) && raw.images.length > 0
            ? raw.images
            : [`/images/products/${item.slug || raw.slug}.jpg`];

          const category = raw.category || item.category || catMap[item.category_id] || "office-stationery";

          const prod: Product = {
            ...raw,
            id: item.id || raw.id,
            name: item.name || raw.name,
            slug: item.slug || raw.slug,
            price: Number(item.price ?? raw.price ?? 0),
            originalPrice: Number(item.original_price ?? raw.originalPrice ?? item.price ?? 0),
            stock: Number(item.stock_quantity ?? item.stock ?? raw.stock ?? 100),
            isBestseller: Boolean(item.is_bestseller ?? raw.isBestseller),
            isEcoFriendly: Boolean(item.is_eco_friendly ?? raw.isEcoFriendly),
            isNew: Boolean(item.is_new ?? raw.isNew),
            rating: Number(item.rating ?? raw.rating ?? 4.8),
            reviewCount: Number(item.review_count ?? raw.reviewCount ?? 0),
            shortDescription: item.short_description || raw.shortDescription || "",
            description: item.description || raw.description || "",
            highlights: item.highlights || raw.highlights || [],
            specifications: item.specifications || raw.specifications || {},
            category,
            subCategory: raw.subCategory || (raw as any).sub_category || item.sub_category || "",
            bulkPricing: Array.isArray(raw.bulkPricing) ? raw.bulkPricing : Array.isArray(item.bulk_pricing) ? item.bulk_pricing : [],
            images,
          };
          dbProductMap.set(prod.slug, prod);
        });

        // Merge INITIAL_PRODUCTS with DB products so newly added catalog items are seeded
        const mergedList: Product[] = [];
        const initialSlugs = new Set(INITIAL_PRODUCTS.map((p) => p.slug));

        for (const initProd of INITIAL_PRODUCTS) {
          if (dbProductMap.has(initProd.slug)) {
            mergedList.push(dbProductMap.get(initProd.slug)!);
          } else {
            mergedList.push(initProd);
            // Upsert new initial product to Supabase so it's persisted in the DB
            supabase.from("products").upsert({
              id: initProd.id,
              name: initProd.name,
              slug: initProd.slug,
              category: initProd.category,
              sub_category: initProd.subCategory,
              description: initProd.description,
              brand: initProd.specifications?.Brand,
              sku: initProd.sku,
              stock: initProd.stock,
              price: initProd.price,
              original_price: initProd.originalPrice || initProd.price,
              mrp: initProd.originalPrice || initProd.price,
              data: sanitizeForDb(initProd),
            }).then(() => {});
          }
        }

        // Include any custom products created by user in admin panel
        for (const [slug, prod] of dbProductMap.entries()) {
          if (!initialSlugs.has(slug)) {
            mergedList.push(prod);
          }
        }

        this.saveProducts(mergedList);
      } else {
        // Seed initial spreadsheet products into Supabase
        const currentProducts = this.getProducts();
        for (const prod of currentProducts) {
          try {
            await supabase.from("products").upsert({
              id: prod.id,
              name: prod.name,
              slug: prod.slug,
              category: prod.category,
              sub_category: prod.subCategory,
              description: prod.description,
              brand: prod.specifications?.Brand,
              sku: prod.sku,
              stock: prod.stock,
              price: prod.price,
              original_price: prod.originalPrice || prod.price,
              mrp: prod.originalPrice || prod.price,
              data: sanitizeForDb(prod),
            });
          } catch (seedErr) {
            console.warn("Supabase product seed notice:", prod.id, seedErr);
          }
        }
      }

      // 2. Setup Realtime subscription for instant multi-tab & storefront updates
      supabase
        .channel("public:products")
        .on(
          "postgres_changes",
          { event: "*", schema: "public", table: "products" },
          (payload: any) => {
            const current = this.getProducts();
            if (payload.eventType === "INSERT") {
              const newProd = (payload.new.data || payload.new) as Product;
              if (!current.some((p) => p.id === newProd.id)) {
                this.saveProducts([newProd, ...current]);
              }
            } else if (payload.eventType === "UPDATE") {
              const updatedProd = (payload.new.data || payload.new) as Product;
              const idx = current.findIndex((p) => p.id === updatedProd.id);
              if (idx > -1) {
                current[idx] = { ...current[idx], ...updatedProd };
                this.saveProducts([...current]);
              }
            } else if (payload.eventType === "DELETE") {
              const deletedId = payload.old.id;
              this.saveProducts(current.filter((p) => p.id !== deletedId));
            }
          }
        )
        .subscribe();
    } catch (e) {
      console.warn("Supabase products sync note:", e);
    }
  },

  // Alias for backward compatibility
  async syncWithFirestore(): Promise<void> {
    return this.syncWithSupabase();
  },

  createProduct(productData: Omit<Product, "id">): Product {
    const products = this.getProducts();
    const newProduct: Product = {
      ...productData,
      id: `prod-${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    const updated = [newProduct, ...products];
    this.saveProducts(updated);

    // Save to Supabase asynchronously
    if (typeof window !== "undefined" && supabase) {
      supabase
        .from("products")
        .upsert({
          id: newProduct.id,
          name: newProduct.name,
          slug: newProduct.slug,
          category: newProduct.category,
          description: newProduct.description,
          sku: newProduct.sku,
          stock: newProduct.stock,
          price: newProduct.price,
          data: sanitizeForDb(newProduct),
        })
        .then(({ error }: { error: any }) => {
          if (error) console.warn("Supabase product write warning:", error.message);
        });
    }

    return newProduct;
  },

  updateProduct(id: string, updates: Partial<Product>): Product | undefined {
    const products = this.getProducts();
    const index = products.findIndex((p) => p.id === id);
    if (index === -1) return undefined;

    const updatedProduct = {
      ...products[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    products[index] = updatedProduct;
    this.saveProducts([...products]);

    // Update Supabase asynchronously
    if (typeof window !== "undefined" && supabase) {
      supabase
        .from("products")
        .update({
          ...(updates.name && { name: updates.name }),
          ...(updates.price !== undefined && { price: updates.price }),
          ...(updates.stock !== undefined && { stock: updates.stock }),
          ...(updates.category && { category: updates.category }),
          data: sanitizeForDb(updatedProduct),
        })
        .eq("id", id)
        .then(({ error }: { error: any }) => {
          if (error) console.warn("Supabase product update warning:", error.message);
        });
    }

    return updatedProduct;
  },

  deleteProduct(id: string): boolean {
    const products = this.getProducts();
    const filtered = products.filter((p) => p.id !== id);
    if (filtered.length !== products.length) {
      this.saveProducts(filtered);

      // Delete from Supabase
      if (typeof window !== "undefined" && supabase) {
        supabase
          .from("products")
          .delete()
          .eq("id", id)
          .then(({ error }: { error: any }) => {
            if (error) console.warn("Supabase product delete warning:", error.message);
          });
      }
      return true;
    }
    return false;
  },

  updateStock(id: string, newStock: number): Product | undefined {
    return this.updateProduct(id, { stock: Math.max(0, newStock) });
  },

  adjustStock(id: string, delta: number): Product | undefined {
    const product = this.getProductById(id);
    if (!product) return undefined;
    const nextStock = Math.max(0, (product.stock || 0) + delta);
    return this.updateStock(id, nextStock);
  },

  decrementStockForOrder(items: { productId: string; quantity: number }[]): void {
    const products = this.getProducts();
    let hasChanges = false;

    items.forEach(({ productId, quantity }) => {
      const idx = products.findIndex((p) => p.id === productId);
      if (idx > -1) {
        const currentStock = products[idx].stock || 0;
        const newStock = Math.max(0, currentStock - quantity);
        products[idx] = {
          ...products[idx],
          stock: newStock,
          updatedAt: new Date().toISOString(),
        };
        hasChanges = true;

        if (typeof window !== "undefined" && supabase) {
          supabase
            .from("products")
            .update({
              stock: newStock,
              data: sanitizeForDb(products[idx]),
            })
            .eq("id", productId)
            .then(({ error }: { error: any }) => {
              if (error) console.warn("Supabase stock decrement warning:", error.message);
            });
        }
      }
    });

    if (hasChanges) {
      this.saveProducts([...products]);
    }
  },
};
