# Gupta Stationery — Supabase Integration Guide

This directory contains the database structure, schema migrations, and seed data for **Gupta Stationery**.

---

## 🗄️ Database Architecture

The schema is configured with 10 tables, triggers, indexes, and Row Level Security (RLS):
1. **`profiles`**: User profiles linked to Supabase Auth (`auth.users`) with loyalty points tracking, reward credits, and wholesale verification flags.
2. **`categories`**: Catalog taxonomy with subcategories JSON array.
3. **`products`**: 24 items with specifications, bulk tier discount JSON, and inventory count.
4. **`addresses`**: Saved delivery addresses (Home, Office, etc.) per customer.
5. **`orders`**: Orders with Raipur delivery time slot selection, delivery type, and payment status.
6. **`order_items`**: Line items per order with snapshot pricing and discounts.
7. **`wishlists`**: Saved products per user.
8. **`reviews`**: Verified customer ratings & reviews.
9. **`bulk_quotes`**: Institutional B2B quotation requests.
10. **`coupons`**: Discount promo codes (e.g. `GUPTA10`, `WELCOME15`).

---

## 🚀 Setting Up in Supabase

### Option 1: Supabase Web Dashboard (Recommended & Instant)
1. Go to your [Supabase Dashboard](https://supabase.com/dashboard) and create a new project.
2. Navigate to **SQL Editor** on the left navigation panel.
3. Open [`supabase/schema.sql`](./schema.sql), copy the entire SQL script, paste it into the SQL Editor, and click **Run**.
4. Open [`supabase/seed.sql`](./seed.sql), copy the seed data, paste it into the SQL Editor, and click **Run**.

### Option 2: Supabase CLI
```bash
# Login to Supabase CLI
npx supabase login

# Link your remote project
npx supabase link --project-ref <your-project-ref>

# Push the schema
npx supabase db push
```

---

## 🔑 Environment Variables Configuration

Copy `.env.local.example` to `.env.local`:
```bash
cp .env.local.example .env.local
```

Fill in your project credentials from **Project Settings -> API**:
```env
NEXT_PUBLIC_SUPABASE_URL=https://<your-project-ref>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6...
```
