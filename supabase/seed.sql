-- ============================================================================
-- GUPTA STATIONERY - SUPABASE SEED DATA (Valid Hex UUIDs)
-- ============================================================================

-- 1. Insert Categories
INSERT INTO public.categories (id, name, slug, description, image_url, display_order, subcategories)
VALUES
  ('c0000000-0000-0000-0000-000000000001', 'Pens & Pencils', 'pens-pencils', 'Ball pens, gel pens, wooden & mechanical pencils, highlighters', 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=800', 1, '["Ball Pens", "Gel Pens", "Wooden Pencils", "Mechanical Pencils", "Highlighters"]'::jsonb),
  ('c0000000-0000-0000-0000-000000000002', 'Notebooks & Notepads', 'notebooks-notepads', 'School notebooks, office notepads, diaries, planners & sticky notes', 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800', 2, '["School Notebooks", "Office Notebooks", "Sticky Notes", "Diaries & Planners"]'::jsonb),
  ('c0000000-0000-0000-0000-000000000003', 'Paper Products', 'paper-products', 'A4 copy paper, heavy cardstock, cardboard sheets, tissue paper', 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=800', 3, '["Copy Paper (A4)", "Cardstock & Board", "Tissue Paper"]'::jsonb),
  ('c0000000-0000-0000-0000-000000000004', 'Office Supplies', 'office-supplies', 'Staplers, metal paper clips, elastic bands, folders & files', 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=800', 4, '["Staplers & Pins", "Clips & Bands", "Folders & Files"]'::jsonb),
  ('c0000000-0000-0000-0000-000000000005', 'School Supplies', 'school-supplies', 'Geometry boxes, erasers, sharpeners, pencil boxes, compasses', 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=800', 5, '["Geometry Sets", "Erasers & Sharpeners", "Pencil Boxes", "Compasses"]'::jsonb),
  ('c0000000-0000-0000-0000-000000000006', 'Eco-Friendly Range', 'eco-friendly-range', 'Biodegradable pens, recycled paper, natural rubber erasers, bamboo pencils', 'https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=800', 6, '["Biodegradable Pens", "Natural Rubber Erasers", "Recycled Notebooks", "Bamboo Pencils"]'::jsonb)
ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  subcategories = EXCLUDED.subcategories;

-- 2. Insert Coupons
INSERT INTO public.coupons (code, discount_percent, min_order_amount, is_active)
VALUES
  ('GUPTA10', 10.00, 200.00, true),
  ('WELCOME15', 15.00, 500.00, true),
  ('BULKEXTRA5', 5.00, 2000.00, true)
ON CONFLICT (code) DO NOTHING;
