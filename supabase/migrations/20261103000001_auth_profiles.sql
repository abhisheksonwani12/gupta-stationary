-- ============================================================================
-- GUPTA STATIONERY - SUPABASE AUTH & USER PROFILES SCHEMA
-- ============================================================================

-- 1. Enable Required Extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 2. Create Profiles Table (Synced with Supabase auth.users)
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

COMMENT ON TABLE public.profiles IS 'User profiles automatically synchronized with Supabase Auth users.';

-- 3. Row Level Security (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Clean up any existing policies
DROP POLICY IF EXISTS "Users can view own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can insert own profile" ON public.profiles;
DROP POLICY IF EXISTS "Service role full access to profiles" ON public.profiles;
DROP POLICY IF EXISTS "Public can view profiles" ON public.profiles;

-- RLS Policies
CREATE POLICY "Users can view own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON public.profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Service role full access to profiles"
  ON public.profiles FOR ALL
  USING (true)
  WITH CHECK (true);

-- 4. Automated User Profile Trigger
-- Syncs data from auth.users (email, phone, metadata) into public.profiles on signup
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

-- Trigger assignment
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- Enable Realtime
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables 
    WHERE pubname = 'supabase_realtime' AND schemaname = 'public' AND tablename = 'profiles'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.profiles;
  END IF;
EXCEPTION
  WHEN OTHERS THEN NULL;
END $$;
