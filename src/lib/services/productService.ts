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
        const loadedProducts: Product[] = data.map((item: any) => {
          if (item.data && typeof item.data === "object") {
            return { ...item.data, id: item.id };
          }
          return item as Product;
        });
        this.saveProducts(loadedProducts);
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
              description: prod.description,
              sku: prod.sku,
              stock: prod.stock,
              price: prod.price,
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
