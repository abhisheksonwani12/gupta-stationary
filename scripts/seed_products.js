const https = require("https");
const fs = require("fs");

// Read product data directly
const raw = fs.readFileSync("src/data/products.ts", "utf8");

// Convert TS export to JSON
const productsMatch = raw.match(/export const PRODUCTS: Product\[\] = (\[[\s\S]*?\]);\s*export const CATEGORIES/);

if (!productsMatch) {
  console.error("Could not parse products.ts");
  process.exit(1);
}

// Clean up TypeScript specific types if any and parse
let jsonStr = productsMatch[1];
const products = eval(jsonStr);

console.log(`Parsed ${products.length} products to seed.`);

const catMap = {
  "pens-pencils": "c0000000-0000-0000-0000-000000000001",
  "notebooks-notepads": "c0000000-0000-0000-0000-000000000002",
  "paper-products": "c0000000-0000-0000-0000-000000000003",
  "office-supplies": "c0000000-0000-0000-0000-000000000004",
  "school-supplies": "c0000000-0000-0000-0000-000000000005",
  "eco-friendly-range": "c0000000-0000-0000-0000-000000000006"
};

let sql = "INSERT INTO public.products (category_id, name, slug, sku, price, original_price, stock_quantity, is_bestseller, is_eco_friendly, is_new, rating, review_count, short_description, description, highlights, specifications, bulk_pricing, images, colors) VALUES \n";

const values = products.map(p => {
  const catId = catMap[p.category] || "c0000000-0000-0000-0000-000000000001";
  const name = p.name.replace(/'/g, "''");
  const slug = p.slug.replace(/'/g, "''");
  const sku = p.sku.replace(/'/g, "''");
  const price = p.price;
  const origPrice = p.originalPrice ? p.originalPrice : price;
  const stock = p.stock || 100;
  const isBest = p.isBestseller ? "TRUE" : "FALSE";
  const isEco = p.isEcoFriendly ? "TRUE" : "FALSE";
  const isNew = p.isNew ? "TRUE" : "FALSE";
  const rating = p.rating || 5.0;
  const reviewCount = p.reviewCount || 0;
  const shortDesc = (p.shortDescription || "").replace(/'/g, "''");
  const desc = (p.description || "").replace(/'/g, "''");
  const highlights = JSON.stringify(p.highlights || []).replace(/'/g, "''");
  const specs = JSON.stringify(p.specifications || {}).replace(/'/g, "''");
  const bulk = JSON.stringify(p.bulkPricing || []).replace(/'/g, "''");
  const images = JSON.stringify(p.images || []).replace(/'/g, "''");
  const colors = JSON.stringify(p.colors || []).replace(/'/g, "''");

  return `('${catId}', '${name}', '${slug}', '${sku}', ${price}, ${origPrice}, ${stock}, ${isBest}, ${isEco}, ${isNew}, ${rating}, ${reviewCount}, '${shortDesc}', '${desc}', '${highlights}'::jsonb, '${specs}'::jsonb, '${bulk}'::jsonb, '${images}'::jsonb, '${colors}'::jsonb)`;
});

sql += values.join(",\n");
sql += " ON CONFLICT (slug) DO UPDATE SET price = EXCLUDED.price, stock_quantity = EXCLUDED.stock_quantity;\n";

fs.writeFileSync("supabase/seed_products.sql", sql);
console.log("Wrote supabase/seed_products.sql successfully");

// Execute via Supabase API
const postData = JSON.stringify({ query: sql });
const req = https.request({
  hostname: "api.supabase.com",
  path: "/v1/projects/xfqnksvzeervymfxvvsk/database/query",
  method: "POST",
  headers: {
    "Authorization": `Bearer ${process.env.SUPABASE_ACCESS_TOKEN || ""}`,
    "Content-Type": "application/json",
    "Content-Length": Buffer.byteLength(postData)
  }
}, res => {
  let body = "";
  res.on("data", d => body += d);
  res.on("end", () => {
    console.log("Product Seeding Status:", res.statusCode, body);
  });
});

req.on("error", e => console.error("Error:", e));
req.write(postData);
req.end();
