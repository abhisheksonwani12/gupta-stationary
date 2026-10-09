-- =========================================================
-- INSTANT STATIONERY - SUPABASE POSTGRESQL SCHEMA
-- =========================================================

-- 1. Enable UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Products Table
CREATE TABLE IF NOT EXISTS public.products (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    category TEXT NOT NULL,
    sub_category TEXT,
    description TEXT,
    brand TEXT,
    sku TEXT,
    stock INTEGER DEFAULT 100,
    unit TEXT DEFAULT 'Unit',
    price NUMERIC NOT NULL,
    original_price NUMERIC,
    mrp NUMERIC,
    rating NUMERIC DEFAULT 4.8,
    review_count INTEGER DEFAULT 0,
    is_bestseller BOOLEAN DEFAULT false,
    is_eco_friendly BOOLEAN DEFAULT false,
    is_new BOOLEAN DEFAULT false,
    data JSONB,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Orders Table
CREATE TABLE IF NOT EXISTS public.orders (
    id TEXT PRIMARY KEY,
    order_number TEXT UNIQUE NOT NULL,
    customer_name TEXT,
    customer_email TEXT,
    customer_phone TEXT,
    total NUMERIC NOT NULL,
    subtotal NUMERIC,
    bulk_discount NUMERIC DEFAULT 0,
    coupon_discount NUMERIC DEFAULT 0,
    delivery_fee NUMERIC DEFAULT 0,
    tax_amount NUMERIC DEFAULT 0,
    payment_method TEXT DEFAULT 'cod',
    payment_status TEXT DEFAULT 'pending',
    order_status TEXT DEFAULT 'processing',
    delivery_slot TEXT,
    tracking_number TEXT,
    courier_partner TEXT,
    data JSONB,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Quotes / Bulk Leads Table
CREATE TABLE IF NOT EXISTS public.quotes (
    id TEXT PRIMARY KEY,
    company_name TEXT NOT NULL,
    contact_person TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT NOT NULL,
    gst_number TEXT,
    business_type TEXT,
    product_list TEXT,
    delivery_date DATE,
    delivery_location TEXT,
    special_requirements TEXT,
    payment_preference TEXT,
    status TEXT DEFAULT 'received',
    estimated_value NUMERIC,
    internal_notes TEXT,
    data JSONB,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Coupons Table
CREATE TABLE IF NOT EXISTS public.coupons (
    id TEXT PRIMARY KEY,
    code TEXT UNIQUE NOT NULL,
    description TEXT,
    discount_type TEXT NOT NULL,
    discount_value NUMERIC NOT NULL,
    min_order_value NUMERIC DEFAULT 0,
    max_discount NUMERIC,
    expiry_date DATE,
    usage_limit INTEGER DEFAULT 1000,
    used_count INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    data JSONB,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quotes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.coupons ENABLE ROW LEVEL SECURITY;

-- Allow Public Read Access for Storefront
CREATE POLICY "Public products are viewable by everyone" ON public.products FOR SELECT USING (true);
CREATE POLICY "Public coupons are viewable by everyone" ON public.coupons FOR SELECT USING (true);

-- Allow Public Inserts for Orders & Quote Inquiries
CREATE POLICY "Public can insert orders" ON public.orders FOR INSERT WITH CHECK (true);
CREATE POLICY "Public can view own orders" ON public.orders FOR SELECT USING (true);
CREATE POLICY "Public can update orders" ON public.orders FOR UPDATE USING (true);
CREATE POLICY "Public can insert quotes" ON public.quotes FOR INSERT WITH CHECK (true);
CREATE POLICY "Public can view quotes" ON public.quotes FOR SELECT USING (true);
CREATE POLICY "Public can update quotes" ON public.quotes FOR UPDATE USING (true);

-- Admin Full Access Policies
CREATE POLICY "Full access to products" ON public.products FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Full access to coupons" ON public.coupons FOR ALL USING (true) WITH CHECK (true);

-- Enable Realtime for all tables
ALTER PUBLICATION supabase_realtime ADD TABLE public.products;
ALTER PUBLICATION supabase_realtime ADD TABLE public.orders;
ALTER PUBLICATION supabase_realtime ADD TABLE public.quotes;
ALTER PUBLICATION supabase_realtime ADD TABLE public.coupons;
