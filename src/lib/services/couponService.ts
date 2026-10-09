import { Coupon } from "@/types";
import { supabase } from "@/lib/supabase/client";

const COUPONS_STORAGE_KEY = "instant_live_coupons";
const COUPONS_EVENT_KEY = "instant_coupons_updated";

const INITIAL_COUPONS: Coupon[] = [
  {
    id: "coup-1",
    code: "WELCOME10",
    description: "Flat 10% discount on first order for new customers",
    discountType: "percentage",
    discountValue: 10,
    minOrderValue: 299,
    maxDiscount: 150,
    expiryDate: "2026-12-31",
    usageLimit: 1000,
    usedCount: 142,
    isActive: true,
    createdAt: "2026-01-01",
  },
  {
    id: "coup-2",
    code: "OFFICE200",
    description: "Flat ₹200 OFF on corporate and bulk stationery orders over ₹2500",
    discountType: "fixed",
    discountValue: 200,
    minOrderValue: 2500,
    expiryDate: "2026-12-31",
    usageLimit: 500,
    usedCount: 78,
    isActive: true,
    createdAt: "2026-02-15",
  },
  {
    id: "coup-3",
    code: "INSTANTFREESHIP",
    description: "Free shipping on orders above ₹300",
    discountType: "fixed",
    discountValue: 50,
    minOrderValue: 300,
    expiryDate: "2026-12-31",
    usageLimit: 2000,
    usedCount: 412,
    isActive: true,
    createdAt: "2026-03-01",
  },
  {
    id: "coup-4",
    code: "INSTANT10",
    description: "Instant 10% off for store members and reviews",
    discountType: "percentage",
    discountValue: 10,
    minOrderValue: 199,
    maxDiscount: 200,
    expiryDate: "2026-12-31",
    usageLimit: 5000,
    usedCount: 89,
    isActive: true,
    createdAt: "2026-04-01",
  },
];

let supabaseCouponsInitialized = false;

function sanitizeForDb<T>(obj: T): T {
  return JSON.parse(
    JSON.stringify(obj, (k, v) => (v === undefined ? null : v))
  );
}

export const couponService = {
  getCoupons(): Coupon[] {
    if (typeof window === "undefined") {
      return INITIAL_COUPONS;
    }
    try {
      const stored = localStorage.getItem(COUPONS_STORAGE_KEY) || localStorage.getItem("gupta_live_coupons");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error("Failed to load coupons from storage:", e);
    }
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(COUPONS_STORAGE_KEY, JSON.stringify(INITIAL_COUPONS));
      } catch (e) {
        console.error("Failed to seed coupons:", e);
      }
    }
    return INITIAL_COUPONS;
  },

  saveCoupons(coupons: Coupon[]): void {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(COUPONS_STORAGE_KEY, JSON.stringify(coupons));
      window.dispatchEvent(new CustomEvent(COUPONS_EVENT_KEY, { detail: { coupons } }));
    } catch (e) {
      console.error("Failed to save coupons:", e);
    }
  },

  async syncWithSupabase(): Promise<void> {
    if (typeof window === "undefined" || !supabase || supabaseCouponsInitialized) return;
    supabaseCouponsInitialized = true;

    try {
      const { data, error } = await supabase
        .from("coupons")
        .select("*");

      if (error) {
        console.warn("Supabase coupons fetch note (using local coupons):", error.message);
      } else if (data && data.length > 0) {
        const loadedCoupons: Coupon[] = data.map((item: any) => {
          if (item.data && typeof item.data === "object") {
            return { ...item.data, id: item.id };
          }
          return item as Coupon;
        });
        this.saveCoupons(loadedCoupons);
      } else {
        const currentCoupons = this.getCoupons();
        for (const c of currentCoupons) {
          try {
            await supabase.from("coupons").upsert({
              id: c.id,
              code: c.code,
              description: c.description,
              discount_type: c.discountType,
              discount_value: c.discountValue,
              min_order_value: c.minOrderValue,
              is_active: c.isActive,
              data: sanitizeForDb(c),
            });
          } catch (seedErr) {
            console.warn("Supabase coupon seed notice:", c.id, seedErr);
          }
        }
      }

      // Realtime listener
      supabase
        .channel("public:coupons")
        .on(
          "postgres_changes",
          { event: "*", schema: "public", table: "coupons" },
          (payload: any) => {
            const current = this.getCoupons();
            if (payload.eventType === "INSERT") {
              const newCoup = (payload.new.data || payload.new) as Coupon;
              if (!current.some((c) => c.id === newCoup.id)) {
                this.saveCoupons([newCoup, ...current]);
              }
            } else if (payload.eventType === "UPDATE") {
              const updatedCoup = (payload.new.data || payload.new) as Coupon;
              const idx = current.findIndex((c) => c.id === updatedCoup.id);
              if (idx > -1) {
                current[idx] = { ...current[idx], ...updatedCoup };
                this.saveCoupons([...current]);
              }
            } else if (payload.eventType === "DELETE") {
              const deletedId = payload.old.id;
              this.saveCoupons(current.filter((c) => c.id !== deletedId));
            }
          }
        )
        .subscribe();
    } catch (e) {
      console.warn("Supabase coupons sync note:", e);
    }
  },

  async syncWithFirestore(): Promise<void> {
    return this.syncWithSupabase();
  },

  createCoupon(couponData: Omit<Coupon, "id" | "usedCount" | "createdAt">): Coupon {
    const coupons = this.getCoupons();
    const newCoupon: Coupon = {
      ...couponData,
      id: `coup-${Date.now()}`,
      usedCount: 0,
      createdAt: new Date().toISOString(),
    };
    const updated = [newCoupon, ...coupons];
    this.saveCoupons(updated);

    if (typeof window !== "undefined" && supabase) {
      supabase
        .from("coupons")
        .upsert({
          id: newCoupon.id,
          code: newCoupon.code,
          description: newCoupon.description,
          discount_type: newCoupon.discountType,
          discount_value: newCoupon.discountValue,
          min_order_value: newCoupon.minOrderValue,
          is_active: newCoupon.isActive,
          data: sanitizeForDb(newCoupon),
        })
        .then(({ error }: { error: any }) => {
          if (error) console.warn("Supabase coupon create warning:", error.message);
        });
    }

    return newCoupon;
  },

  toggleCouponStatus(id: string): Coupon | undefined {
    const coupons = this.getCoupons();
    const idx = coupons.findIndex((c) => c.id === id);
    if (idx === -1) return undefined;

    const updated = {
      ...coupons[idx],
      isActive: !coupons[idx].isActive,
    };
    coupons[idx] = updated;
    this.saveCoupons([...coupons]);

    if (typeof window !== "undefined" && supabase) {
      supabase
        .from("coupons")
        .update({
          is_active: updated.isActive,
          data: sanitizeForDb(updated),
        })
        .eq("id", id)
        .then(({ error }: { error: any }) => {
          if (error) console.warn("Supabase coupon toggle warning:", error.message);
        });
    }

    return updated;
  },

  deleteCoupon(id: string): boolean {
    const coupons = this.getCoupons();
    const filtered = coupons.filter((c) => c.id !== id);
    if (filtered.length !== productsLength(filtered, coupons)) {
      this.saveCoupons(filtered);

      if (typeof window !== "undefined" && supabase) {
        supabase
          .from("coupons")
          .delete()
          .eq("id", id)
          .then(({ error }: { error: any }) => {
            if (error) console.warn("Supabase coupon delete warning:", error.message);
          });
      }
      return true;
    }
    return false;
  },

  validateCoupon(code: string, cartTotal: number): { valid: boolean; discount: number; message: string } {
    const coupons = this.getCoupons();
    const coupon = coupons.find((c) => c.code.toUpperCase() === code.trim().toUpperCase() && c.isActive);

    if (!coupon) {
      return { valid: false, discount: 0, message: "Invalid or inactive promo code." };
    }

    if (cartTotal < coupon.minOrderValue) {
      return {
        valid: false,
        discount: 0,
        message: `Minimum order value for ${coupon.code} is ₹${coupon.minOrderValue}.`,
      };
    }

    let discount = 0;
    if (coupon.discountType === "percentage") {
      discount = Math.round((cartTotal * coupon.discountValue) / 100);
      if (coupon.maxDiscount && discount > coupon.maxDiscount) {
        discount = coupon.maxDiscount;
      }
    } else {
      discount = coupon.discountValue;
    }

    return {
      valid: true,
      discount: Math.min(discount, cartTotal),
      message: `Coupon ${coupon.code} applied successfully!`,
    };
  },
};

function productsLength(filtered: Coupon[], coupons: Coupon[]) {
  return filtered.length !== coupons.length ? coupons.length : -1;
}
