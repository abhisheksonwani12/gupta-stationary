export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          full_name: string;
          phone: string | null;
          email: string;
          avatar_url: string | null;
          company_name: string | null;
          gst_number: string | null;
          role: "customer" | "admin" | "wholesale_partner" | "staff";
          loyalty_points: number;
          pending_reward_cash: number;
          is_wholesale_verified: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          full_name: string;
          phone?: string | null;
          email: string;
          avatar_url?: string | null;
          company_name?: string | null;
          gst_number?: string | null;
          role?: "customer" | "admin" | "wholesale_partner" | "staff";
          loyalty_points?: number;
          pending_reward_cash?: number;
          is_wholesale_verified?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["profiles"]["Insert"]>;
      };
      categories: {
        Row: {
          id: string;
          name: string;
          slug: string;
          description: string | null;
          image_url: string | null;
          display_order: number;
          subcategories: Json;
          is_active: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          description?: string | null;
          image_url?: string | null;
          display_order?: number;
          subcategories?: Json;
          is_active?: boolean;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["categories"]["Insert"]>;
      };
      products: {
        Row: {
          id: string;
          category_id: string | null;
          name: string;
          slug: string;
          sku: string;
          price: number;
          original_price: number | null;
          stock_quantity: number;
          is_bestseller: boolean;
          is_eco_friendly: boolean;
          is_new: boolean;
          is_active: boolean;
          rating: number;
          review_count: number;
          short_description: string | null;
          description: string | null;
          highlights: Json;
          specifications: Json;
          bulk_pricing: Json;
          images: Json;
          colors: Json;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          category_id?: string | null;
          name: string;
          slug: string;
          sku: string;
          price: number;
          original_price?: number | null;
          stock_quantity?: number;
          is_bestseller?: boolean;
          is_eco_friendly?: boolean;
          is_new?: boolean;
          is_active?: boolean;
          rating?: number;
          review_count?: number;
          short_description?: string | null;
          description?: string | null;
          highlights?: Json;
          specifications?: Json;
          bulk_pricing?: Json;
          images?: Json;
          colors?: Json;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["products"]["Insert"]>;
      };
      orders: {
        Row: {
          id: string;
          order_number: string;
          user_id: string | null;
          customer_name: string;
          customer_email: string;
          customer_phone: string;
          shipping_address: Json;
          delivery_time_slot: "morning" | "evening" | "express_immediate";
          delivery_type: "standard" | "express";
          delivery_fee: number;
          subtotal: number;
          bulk_discount: number;
          coupon_code: string | null;
          coupon_discount: number;
          total: number;
          payment_method: "upi" | "card" | "netbanking" | "wallet" | "cod";
          payment_status: "pending" | "paid" | "failed" | "refunded";
          order_status: "processing" | "dispatched" | "in_transit" | "delivered" | "cancelled";
          tracking_number: string | null;
          customer_notes: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          order_number: string;
          user_id?: string | null;
          customer_name: string;
          customer_email: string;
          customer_phone: string;
          shipping_address: Json;
          delivery_time_slot?: "morning" | "evening" | "express_immediate";
          delivery_type?: "standard" | "express";
          delivery_fee?: number;
          subtotal: number;
          bulk_discount?: number;
          coupon_code?: string | null;
          coupon_discount?: number;
          total: number;
          payment_method: "upi" | "card" | "netbanking" | "wallet" | "cod";
          payment_status?: "pending" | "paid" | "failed" | "refunded";
          order_status?: "processing" | "dispatched" | "in_transit" | "delivered" | "cancelled";
          tracking_number?: string | null;
          customer_notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["orders"]["Insert"]>;
      };
      order_items: {
        Row: {
          id: string;
          order_id: string;
          product_id: string | null;
          product_name: string;
          sku: string;
          quantity: number;
          unit_price: number;
          discount_percentage: number;
          total_price: number;
          selected_color: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          order_id: string;
          product_id?: string | null;
          product_name: string;
          sku: string;
          quantity: number;
          unit_price: number;
          discount_percentage?: number;
          total_price: number;
          selected_color?: string | null;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["order_items"]["Insert"]>;
      };
      bulk_quotes: {
        Row: {
          id: string;
          company_name: string;
          contact_person: string;
          phone: string;
          email: string;
          gst_number: string | null;
          business_type: "school" | "corporate" | "retailer" | "event" | "other";
          product_list: string;
          delivery_date: string | null;
          delivery_location: string;
          special_requirements: string | null;
          payment_preference: string | null;
          status: "received" | "contacted" | "quoted" | "invoiced" | "fulfilled" | "closed";
          assigned_agent: string | null;
          internal_notes: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          company_name: string;
          contact_person: string;
          phone: string;
          email: string;
          gst_number?: string | null;
          business_type: "school" | "corporate" | "retailer" | "event" | "other";
          product_list: string;
          delivery_date?: string | null;
          delivery_location: string;
          special_requirements?: string | null;
          payment_preference?: string | null;
          status?: "received" | "contacted" | "quoted" | "invoiced" | "fulfilled" | "closed";
          assigned_agent?: string | null;
          internal_notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["bulk_quotes"]["Insert"]>;
      };
    };
  };
}
