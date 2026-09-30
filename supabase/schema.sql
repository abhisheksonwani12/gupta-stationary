-- ============================================================================
-- GUPTA STATIONERY - SUPABASE DATABASE SCHEMA
-- Est. 1990 | Raipur, Chhattisgarh
-- ============================================================================

-- 1. Enable Required Extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 2. Drop Existing Tables in Reverse Dependency Order (For Clean Re-runs)
DROP TABLE IF EXISTS public.reviews CASCADE;
DROP TABLE IF EXISTS public.order_items CASCADE;
DROP TABLE IF EXISTS public.orders CASCADE;
DROP TABLE IF EXISTS public.cart_items CASCADE;
DROP TABLE IF EXISTS public.wishlists CASCADE;
DROP TABLE IF EXISTS public.bulk_quotes CASCADE;
DROP TABLE IF EXISTS public.coupons CASCADE;
DROP TABLE IF EXISTS public.addresses CASCADE;
DROP TABLE IF EXISTS public.products CASCADE;
DROP TABLE IF EXISTS public.categories CASCADE;
DROP TABLE IF EXISTS public.profiles CASCADE;

-- ============================================================================
-- 3. PROFILES TABLE (Linked with Supabase Auth auth.users)
-- ============================================================================
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  full_name TEXT NOT NULL,
  phone TEXT,
  email TEXT NOT NULL UNIQUE,
  avatar_url TEXT,
  company_name TEXT,
  gst_number TEXT,
  role TEXT DEFAULT 'customer' CHECK (role IN ('customer', 'admin', 'wholesale_partner', 'staff')),
  loyalty_points INTEGER DEFAULT 100 CHECK (loyalty_points >= 0),
  pending_reward_cash NUMERIC(10,2) DEFAULT 10.00,
  is_wholesale_verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

COMMENT ON TABLE public.profiles IS 'User profile information synced with Supabase auth users.';

-- ============================================================================
-- 4. CATEGORIES TABLE
-- ============================================================================
CREATE TABLE public.categories (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  image_url TEXT,
  display_order INTEGER DEFAULT 0,
  subcategories JSONB DEFAULT '[]'::jsonb,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE INDEX idx_categories_slug ON public.categories(slug);

-- ============================================================================
-- 5. PRODUCTS TABLE
-- ============================================================================
CREATE TABLE public.products (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  category_id UUID REFERENCES public.categories(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  sku TEXT UNIQUE NOT NULL,
  price NUMERIC(10,2) NOT NULL CHECK (price >= 0),
  original_price NUMERIC(10,2) CHECK (original_price >= price),
  stock_quantity INTEGER DEFAULT 100 NOT NULL CHECK (stock_quantity >= 0),
  is_bestseller BOOLEAN DEFAULT FALSE,
  is_eco_friendly BOOLEAN DEFAULT FALSE,
  is_new BOOLEAN DEFAULT FALSE,
  is_active BOOLEAN DEFAULT TRUE,
  rating NUMERIC(3,2) DEFAULT 5.00 CHECK (rating >= 1.0 AND rating <= 5.0),
  review_count INTEGER DEFAULT 0 CHECK (review_count >= 0),
  short_description TEXT,
  description TEXT,
  highlights JSONB DEFAULT '[]'::jsonb,
  specifications JSONB DEFAULT '{}'::jsonb,
  bulk_pricing JSONB DEFAULT '[]'::jsonb,
  images JSONB DEFAULT '[]'::jsonb,
  colors JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE INDEX idx_products_slug ON public.products(slug);
CREATE INDEX idx_products_sku ON public.products(sku);
CREATE INDEX idx_products_category ON public.products(category_id);
CREATE INDEX idx_products_bestseller ON public.products(is_bestseller) WHERE is_bestseller = TRUE;
CREATE INDEX idx_products_eco ON public.products(is_eco_friendly) WHERE is_eco_friendly = TRUE;

-- ============================================================================
-- 6. ADDRESSES TABLE
-- ============================================================================
CREATE TABLE public.addresses (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  label TEXT DEFAULT 'Home' CHECK (label IN ('Home', 'Office', 'School', 'Warehouse', 'Other')),
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  address_line1 TEXT NOT NULL,
  address_line2 TEXT,
  city TEXT DEFAULT 'Raipur' NOT NULL,
  state TEXT DEFAULT 'Chhattisgarh' NOT NULL,
  pincode TEXT DEFAULT '492001' NOT NULL,
  is_default BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE INDEX idx_addresses_user_id ON public.addresses(user_id);

-- ============================================================================
-- 7. COUPONS TABLE
-- ============================================================================
CREATE TABLE public.coupons (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  code TEXT UNIQUE NOT NULL,
  discount_percent NUMERIC(5,2) DEFAULT 10.00,
  min_order_amount NUMERIC(10,2) DEFAULT 0.00,
  max_discount_amount NUMERIC(10,2),
  valid_from TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  valid_until TIMESTAMP WITH TIME ZONE,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ============================================================================
-- 8. ORDERS TABLE
-- ============================================================================
CREATE TABLE public.orders (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  order_number TEXT UNIQUE NOT NULL,
  user_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  shipping_address JSONB NOT NULL,
  delivery_time_slot TEXT DEFAULT 'evening' CHECK (delivery_time_slot IN ('morning', 'evening', 'express_immediate')),
  delivery_type TEXT DEFAULT 'standard' CHECK (delivery_type IN ('standard', 'express')),
  delivery_fee NUMERIC(10,2) DEFAULT 0.00,
  subtotal NUMERIC(10,2) NOT NULL,
  bulk_discount NUMERIC(10,2) DEFAULT 0.00,
  coupon_code TEXT,
  coupon_discount NUMERIC(10,2) DEFAULT 0.00,
  total NUMERIC(10,2) NOT NULL,
  payment_method TEXT NOT NULL CHECK (payment_method IN ('upi', 'card', 'netbanking', 'wallet', 'cod')),
  payment_status TEXT DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid', 'failed', 'refunded')),
  order_status TEXT DEFAULT 'processing' CHECK (order_status IN ('processing', 'dispatched', 'in_transit', 'delivered', 'cancelled')),
  tracking_number TEXT,
  customer_notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE INDEX idx_orders_user_id ON public.orders(user_id);
CREATE INDEX idx_orders_order_number ON public.orders(order_number);
CREATE INDEX idx_orders_status ON public.orders(order_status);

-- ============================================================================
-- 9. ORDER ITEMS TABLE
-- ============================================================================
CREATE TABLE public.order_items (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  order_id UUID REFERENCES public.orders(id) ON DELETE CASCADE NOT NULL,
  product_id UUID REFERENCES public.products(id) ON DELETE SET NULL,
  product_name TEXT NOT NULL,
  sku TEXT NOT NULL,
  quantity INTEGER NOT NULL CHECK (quantity > 0),
  unit_price NUMERIC(10,2) NOT NULL,
  discount_percentage NUMERIC(5,2) DEFAULT 0.00,
  total_price NUMERIC(10,2) NOT NULL,
  selected_color TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE INDEX idx_order_items_order_id ON public.order_items(order_id);

-- ============================================================================
-- 10. WISHLISTS TABLE
-- ============================================================================
CREATE TABLE public.wishlists (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  product_id UUID REFERENCES public.products(id) ON DELETE CASCADE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  UNIQUE (user_id, product_id)
);

CREATE INDEX idx_wishlist_user ON public.wishlists(user_id);

-- ============================================================================
-- 11. REVIEWS TABLE
-- ============================================================================
CREATE TABLE public.reviews (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  product_id UUID REFERENCES public.products(id) ON DELETE CASCADE,
  user_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  author_name TEXT NOT NULL,
  author_role TEXT,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  title TEXT NOT NULL,
  comment TEXT NOT NULL,
  is_verified_buyer BOOLEAN DEFAULT TRUE,
  is_published BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE INDEX idx_reviews_product_id ON public.reviews(product_id);

-- ============================================================================
-- 12. BULK QUOTES TABLE (Institutional Inquiries)
-- ============================================================================
CREATE TABLE public.bulk_quotes (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  company_name TEXT NOT NULL,
  contact_person TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  gst_number TEXT,
  business_type TEXT NOT NULL CHECK (business_type IN ('school', 'corporate', 'retailer', 'event', 'other')),
  product_list TEXT NOT NULL,
  delivery_date DATE,
  delivery_location TEXT NOT NULL,
  special_requirements TEXT,
  payment_preference TEXT,
  status TEXT DEFAULT 'received' CHECK (status IN ('received', 'contacted', 'quoted', 'invoiced', 'fulfilled', 'closed')),
  assigned_agent TEXT,
  internal_notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE INDEX idx_bulk_quotes_status ON public.bulk_quotes(status);

-- ============================================================================
-- 13. AUTOMATED PROFILE TRIGGER (Sync on Supabase User Signup)
-- ============================================================================
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, email, phone)
  VALUES (
    new.id,
    COALESCE(new.raw_user_meta_data->>'full_name', 'Customer'),
    new.email,
    new.raw_user_meta_data->>'phone'
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- ============================================================================
-- 14. ROW LEVEL SECURITY (RLS) POLICIES
-- ============================================================================
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.addresses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.wishlists ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bulk_quotes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.coupons ENABLE ROW LEVEL SECURITY;

-- Category & Product Policies (Public Read)
CREATE POLICY "Public Read Categories" ON public.categories FOR SELECT USING (is_active = TRUE);
CREATE POLICY "Public Read Products" ON public.products FOR SELECT USING (is_active = TRUE);
CREATE POLICY "Public Read Coupons" ON public.coupons FOR SELECT USING (is_active = TRUE);
CREATE POLICY "Public Read Reviews" ON public.reviews FOR SELECT USING (is_published = TRUE);

-- Profile Policies
CREATE POLICY "Users can view own profile" ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- Address Policies
CREATE POLICY "Users can view own addresses" ON public.addresses FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own addresses" ON public.addresses FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own addresses" ON public.addresses FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own addresses" ON public.addresses FOR DELETE USING (auth.uid() = user_id);

-- Wishlist Policies
CREATE POLICY "Users can manage own wishlist" ON public.wishlists FOR ALL USING (auth.uid() = user_id);

-- Order & Items Policies
CREATE POLICY "Users can view own orders" ON public.orders FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own orders" ON public.orders FOR INSERT WITH CHECK (true);
CREATE POLICY "Users can view own order items" ON public.order_items FOR SELECT USING (
  EXISTS (
    SELECT 1 FROM public.orders
    WHERE orders.id = order_items.order_id
    AND orders.user_id = auth.uid()
  )
);
CREATE POLICY "Allow public insert order items" ON public.order_items FOR INSERT WITH CHECK (true);

-- Bulk Quotes (Public Insert)
CREATE POLICY "Public can submit bulk quotes" ON public.bulk_quotes FOR INSERT WITH CHECK (true);

-- Reviews (Public Insert)
CREATE POLICY "Public can submit product reviews" ON public.reviews FOR INSERT WITH CHECK (true);
