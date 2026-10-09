import { Order, OrderStatus, PaymentStatus } from "@/types";
import { supabase } from "@/lib/supabase/client";

const ORDERS_STORAGE_KEY = "instant_live_orders";
const ORDERS_EVENT_KEY = "instant_orders_updated";

const INITIAL_ORDERS: Order[] = [
  {
    id: "ord-101",
    orderNumber: "IS-2026-89456",
    createdAt: new Date(Date.now() - 3600 * 1000 * 3).toISOString(), // 3 hours ago
    customerName: "Anmol Sharma",
    customerEmail: "anmol.sharma@raipur.edu.in",
    customerPhone: "+91 8839715995",
    shippingAddress: {
      fullName: "Anmol Sharma",
      phone: "+91 8839715995",
      email: "anmol.sharma@raipur.edu.in",
      addressLine1: "House No 42, Dubey Colony, Near Durga Temple",
      addressLine2: "Mowa",
      city: "Raipur",
      state: "Chhattisgarh",
      pincode: "492001",
      landmark: "Opposite State Bank ATM",
    },
    items: [
      {
        id: "item-1",
        productId: "prod-jk-red-75",
        productName: "JK Red Copier Paper 75 GSM",
        sku: "JK-COP-75-RED",
        quantity: 10,
        unitPrice: 270,
        totalPrice: 2700,
      },
      {
        id: "item-2",
        productId: "prod-kangaro-pins-10",
        productName: "Kangaro No. 10 Stapler Pins (1000/Box)",
        sku: "KG-PIN-10",
        quantity: 5,
        unitPrice: 11,
        totalPrice: 55,
      },
    ],
    subtotal: 2755,
    bulkDiscount: 100,
    couponDiscount: 0,
    deliveryFee: 0,
    taxAmount: 318,
    total: 2655,
    paymentMethod: "upi",
    paymentStatus: "paid",
    orderStatus: "processing",
    deliverySlot: "morning",
    trackingNumber: "DL-982347101",
    courierPartner: "Delhivery Surface",
    customerNotes: "Please deliver before 1 PM at residential address.",
  },
  {
    id: "ord-102",
    orderNumber: "IS-2026-89412",
    createdAt: new Date(Date.now() - 3600 * 1000 * 24).toISOString(), // 1 day ago
    customerName: "Pooja Verma",
    customerEmail: "pooja.verma@vedantagroup.com",
    customerPhone: "+91 9425201992",
    shippingAddress: {
      fullName: "Pooja Verma",
      phone: "+91 9425201992",
      email: "pooja.verma@vedantagroup.com",
      addressLine1: "Vedanta Tower, Floor 4, Pandri Commercial Hub",
      city: "Raipur",
      state: "Chhattisgarh",
      pincode: "492004",
    },
    items: [
      {
        id: "item-3",
        productId: "prod-luxor-whiteboard-set",
        productName: "Luxor / Doms Whiteboard Marker (Set of 4 Colors)",
        sku: "LX-WBM-SET4",
        quantity: 10,
        unitPrice: 140,
        totalPrice: 1400,
      },
      {
        id: "item-4",
        productId: "prod-kangaro-hd10d",
        productName: "Kangaro HD-10D Desk Stapler",
        sku: "KG-STP-HD10D",
        quantity: 4,
        unitPrice: 125,
        totalPrice: 500,
      },
    ],
    subtotal: 1900,
    bulkDiscount: 100,
    couponDiscount: 0,
    deliveryFee: 0,
    taxAmount: 216,
    total: 1800,
    paymentMethod: "card",
    paymentStatus: "paid",
    orderStatus: "in_transit",
    deliverySlot: "evening",
    trackingNumber: "BD-887192304",
    courierPartner: "BlueDart Express",
  },
  {
    id: "ord-103",
    orderNumber: "IS-2026-89300",
    createdAt: new Date(Date.now() - 3600 * 1000 * 48).toISOString(), // 2 days ago
    customerName: "Rajesh Agrawal",
    customerEmail: "rajesh.agrawal@dpsraipur.ac.in",
    customerPhone: "+91 9827104921",
    shippingAddress: {
      fullName: "Rajesh Agrawal (DPS Raipur)",
      phone: "+91 9827104921",
      email: "rajesh.agrawal@dpsraipur.ac.in",
      addressLine1: "Delhi Public School Campus, Semariya Road",
      city: "Raipur",
      state: "Chhattisgarh",
      pincode: "492005",
    },
    items: [
      {
        id: "item-5",
        productId: "prod-mayank-jumbo-170",
        productName: "Mayank Jumbo Register (170 Pages / Ruled)",
        sku: "MYK-REG-170",
        quantity: 20,
        unitPrice: 62,
        totalPrice: 1240,
      },
    ],
    subtotal: 1240,
    bulkDiscount: 50,
    couponDiscount: 0,
    deliveryFee: 0,
    taxAmount: 142,
    total: 1190,
    paymentMethod: "cod",
    paymentStatus: "pending",
    orderStatus: "delivered",
    trackingNumber: "SR-998124501",
    courierPartner: "Shiprocket Xpress",
  },
];

let supabaseOrdersInitialized = false;

function sanitizeForDb<T>(obj: T): T {
  return JSON.parse(
    JSON.stringify(obj, (k, v) => (v === undefined ? null : v))
  );
}

export const orderService = {
  getOrders(): Order[] {
    if (typeof window === "undefined") {
      return INITIAL_ORDERS;
    }
    try {
      const stored = localStorage.getItem(ORDERS_STORAGE_KEY) || localStorage.getItem("gupta_live_orders");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error("Failed to load orders from storage:", e);
    }
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(INITIAL_ORDERS));
      } catch (e) {
        console.error("Failed to seed initial orders:", e);
      }
    }
    return INITIAL_ORDERS;
  },

  getOrderById(id: string): Order | undefined {
    const orders = this.getOrders();
    return orders.find((o) => o.id === id || o.orderNumber === id);
  },

  saveOrders(orders: Order[]): void {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));
      window.dispatchEvent(new CustomEvent(ORDERS_EVENT_KEY, { detail: { orders } }));
    } catch (e) {
      console.error("Failed to save orders:", e);
    }
  },

  async syncWithSupabase(): Promise<void> {
    if (typeof window === "undefined" || !supabase || supabaseOrdersInitialized) return;
    supabaseOrdersInitialized = true;

    try {
      // 1. Fetch live orders from Supabase
      const { data, error } = await supabase
        .from("orders")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.warn("Supabase orders fetch note (using local orders):", error.message);
      } else if (data && data.length > 0) {
        const loadedOrders: Order[] = data.map((item: any) => {
          if (item.data && typeof item.data === "object") {
            return { ...item.data, id: item.id };
          }
          return item as Order;
        });
        this.saveOrders(loadedOrders);
      } else {
        // Seed initial orders into Supabase
        const currentOrders = this.getOrders();
        for (const ord of currentOrders) {
          try {
            await supabase.from("orders").upsert({
              id: ord.id,
              order_number: ord.orderNumber,
              customer_name: ord.customerName,
              customer_email: ord.customerEmail,
              total: ord.total,
              order_status: ord.orderStatus,
              payment_status: ord.paymentStatus,
              data: sanitizeForDb(ord),
            });
          } catch (seedErr) {
            console.warn("Supabase order seed notice:", ord.id, seedErr);
          }
        }
      }

      // 2. Realtime subscription for instant orders updates across admin & user tabs
      supabase
        .channel("public:orders")
        .on(
          "postgres_changes",
          { event: "*", schema: "public", table: "orders" },
          (payload: any) => {
            const current = this.getOrders();
            if (payload.eventType === "INSERT") {
              const newOrd = (payload.new.data || payload.new) as Order;
              if (!current.some((o) => o.id === newOrd.id)) {
                this.saveOrders([newOrd, ...current]);
              }
            } else if (payload.eventType === "UPDATE") {
              const updatedOrd = (payload.new.data || payload.new) as Order;
              const idx = current.findIndex((o) => o.id === updatedOrd.id);
              if (idx > -1) {
                current[idx] = { ...current[idx], ...updatedOrd };
                this.saveOrders([...current]);
              }
            } else if (payload.eventType === "DELETE") {
              const deletedId = payload.old.id;
              this.saveOrders(current.filter((o) => o.id !== deletedId));
            }
          }
        )
        .subscribe();
    } catch (e) {
      console.warn("Supabase orders sync note:", e);
    }
  },

  // Backward compatibility alias
  async syncWithFirestore(): Promise<void> {
    return this.syncWithSupabase();
  },

  createOrder(orderData: Omit<Order, "id" | "orderNumber" | "createdAt">): Order {
    const orders = this.getOrders();
    const count = orders.length + 89460;
    const rawOrder: Order = {
      ...orderData,
      id: `ord-${Date.now()}`,
      orderNumber: `IS-2026-${count}`,
      createdAt: new Date().toISOString(),
    };
    const newOrder = sanitizeForDb(rawOrder);
    const updated = [newOrder, ...orders];
    this.saveOrders(updated);

    // Save to Supabase asynchronously
    if (typeof window !== "undefined" && supabase) {
      supabase
        .from("orders")
        .upsert({
          id: newOrder.id,
          order_number: newOrder.orderNumber,
          customer_name: newOrder.customerName,
          customer_email: newOrder.customerEmail,
          total: newOrder.total,
          order_status: newOrder.orderStatus,
          payment_status: newOrder.paymentStatus,
          data: sanitizeForDb(newOrder),
        })
        .then(({ error }: { error: any }) => {
          if (error) console.warn("Supabase order write warning:", error.message);
        });
    }

    return newOrder;
  },

  updateOrderStatus(
    orderId: string,
    status: OrderStatus,
    trackingNumber?: string,
    courierPartner?: string
  ): Order | undefined {
    const orders = this.getOrders();
    const idx = orders.findIndex((o) => o.id === orderId);
    if (idx === -1) return undefined;

    const updatedOrder: Order = {
      ...orders[idx],
      orderStatus: status,
      ...(trackingNumber !== undefined && { trackingNumber }),
      ...(courierPartner !== undefined && { courierPartner }),
    };

    orders[idx] = updatedOrder;
    this.saveOrders([...orders]);

    // Update in Supabase
    if (typeof window !== "undefined" && supabase) {
      supabase
        .from("orders")
        .update({
          order_status: status,
          data: sanitizeForDb(updatedOrder),
        })
        .eq("id", orderId)
        .then(({ error }: { error: any }) => {
          if (error) console.warn("Supabase order status update warning:", error.message);
        });
    }

    return updatedOrder;
  },

  updatePaymentStatus(orderId: string, status: PaymentStatus): Order | undefined {
    const orders = this.getOrders();
    const idx = orders.findIndex((o) => o.id === orderId);
    if (idx === -1) return undefined;

    const updatedOrder: Order = {
      ...orders[idx],
      paymentStatus: status,
    };

    orders[idx] = updatedOrder;
    this.saveOrders([...orders]);

    // Update in Supabase
    if (typeof window !== "undefined" && supabase) {
      supabase
        .from("orders")
        .update({
          payment_status: status,
          data: sanitizeForDb(updatedOrder),
        })
        .eq("id", orderId)
        .then(({ error }: { error: any }) => {
          if (error) console.warn("Supabase payment status update warning:", error.message);
        });
    }

    return updatedOrder;
  },
};
