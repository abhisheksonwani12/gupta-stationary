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

-- 6. User Profiles Table (Synced with auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
    full_name TEXT NOT NULL DEFAULT 'Customer',
    phone TEXT,
    email TEXT NOT NULL UNIQUE,
    avatar_url TEXT DEFAULT 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    company_name TEXT,
    gst_number TEXT,
    role TEXT DEFAULT 'customer' CHECK (role IN ('customer', 'admin', 'wholesale_partner', 'staff')),
    loyalty_points INTEGER DEFAULT 100 CHECK (loyalty_points >= 0),
    pending_rewards NUMERIC(10,2) DEFAULT 50.00,
    member_discount_percent INTEGER DEFAULT 5,
    addresses JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quotes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.coupons ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

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

-- Profiles RLS Policies
DROP POLICY IF EXISTS "Users can view own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can insert own profile" ON public.profiles;
DROP POLICY IF EXISTS "Service role full access to profiles" ON public.profiles;

CREATE POLICY "Users can view own profile" ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can insert own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "Service role full access to profiles" ON public.profiles FOR ALL USING (true) WITH CHECK (true);

-- Admin Full Access Policies
CREATE POLICY "Full access to products" ON public.products FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Full access to coupons" ON public.coupons FOR ALL USING (true) WITH CHECK (true);

-- Automated User Profile Trigger
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (
    id,
    full_name,
    email,
    phone,
    avatar_url,
    role,
    company_name,
    gst_number,
    loyalty_points,
    member_discount_percent
  )
  VALUES (
    new.id,
    COALESCE(
      new.raw_user_meta_data->>'full_name',
      new.raw_user_meta_data->>'name',
      split_part(new.email, '@', 1),
      'Customer'
    ),
    COALESCE(new.email, concat(COALESCE(new.phone, new.id::text), '@instantstationary.user')),
    COALESCE(new.raw_user_meta_data->>'phone', new.phone, ''),
    COALESCE(
      new.raw_user_meta_data->>'avatar_url',
      new.raw_user_meta_data->>'picture',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop'
    ),
    COALESCE(new.raw_user_meta_data->>'role', 'customer'),
    new.raw_user_meta_data->>'company_name',
    new.raw_user_meta_data->>'gst_number',
    CASE WHEN (new.raw_user_meta_data->>'is_wholesale')::boolean = true THEN 150 ELSE 100 END,
    CASE WHEN (new.raw_user_meta_data->>'is_wholesale')::boolean = true THEN 15 ELSE 5 END
  )
  ON CONFLICT (id) DO UPDATE SET
    full_name = EXCLUDED.full_name,
    email = EXCLUDED.email,
    phone = COALESCE(NULLIF(EXCLUDED.phone, ''), public.profiles.phone),
    avatar_url = COALESCE(NULLIF(EXCLUDED.avatar_url, ''), public.profiles.avatar_url),
    updated_at = NOW();
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- Enable Realtime for all tables
ALTER PUBLICATION supabase_realtime ADD TABLE public.products;
ALTER PUBLICATION supabase_realtime ADD TABLE public.orders;
ALTER PUBLICATION supabase_realtime ADD TABLE public.quotes;
ALTER PUBLICATION supabase_realtime ADD TABLE public.coupons;
