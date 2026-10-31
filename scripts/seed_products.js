const https = require("https");
const fs = require("fs");

// Read product data directly
const raw = fs.readFileSync("src/data/products.ts", "utf8");

// Convert TS export to JSON
const productsMatch = raw.match(/export const PRODUCTS: Product\[\] = (\[[\s\S]*?\]);\s*$/);

if (!productsMatch) {
  console.error("Could not parse products.ts");
  process.exit(1);
}

// Clean up TypeScript specific types if any and parse
let jsonStr = productsMatch[1];
const products = eval(jsonStr);

console.log(`Parsed ${products.length} products to seed.`);

let sql = "-- =========================================================\n";
sql += "-- INSTANT STATIONERY - SUPABASE PRODUCTS SEED DATA\n";
sql += `-- Total Products: ${products.length} (Excludes red records)\n`;
sql += "-- =========================================================\n\n";
sql += "INSERT INTO public.products (\n";
sql += "    id, name, slug, category, sub_category, description, brand, sku, stock, unit, price, original_price, mrp, rating, review_count, is_bestseller, is_eco_friendly, is_new, data\n";
sql += ") VALUES \n";

const values = products.map(p => {
  const id = p.id.replace(/'/g, "''");
  const name = p.name.replace(/'/g, "''");
  const slug = p.slug.replace(/'/g, "''");
  const category = p.category.replace(/'/g, "''");
  const subCategory = (p.subCategory || "").replace(/'/g, "''");
  const description = (p.description || "").replace(/'/g, "''");
  const brand = (p.specifications && p.specifications.Brand ? p.specifications.Brand : "").replace(/'/g, "''");
  const sku = (p.sku || "").replace(/'/g, "''");
  const stock = p.stock || 100;
  const unit = "Unit";
  const price = p.price;
  const origPrice = p.originalPrice ? p.originalPrice : price;
  const mrp = origPrice;
  const rating = p.rating || 4.8;
  const reviewCount = p.reviewCount || 0;
  const isBest = p.isBestseller ? "TRUE" : "FALSE";
  const isEco = p.isEcoFriendly ? "TRUE" : "FALSE";
  const isNew = p.isNew ? "TRUE" : "FALSE";
  const data = JSON.stringify(p).replace(/'/g, "''");

  return `('${id}', '${name}', '${slug}', '${category}', '${subCategory}', '${description}', '${brand}', '${sku}', ${stock}, '${unit}', ${price}, ${origPrice}, ${mrp}, ${rating}, ${reviewCount}, ${isBest}, ${isEco}, ${isNew}, '${data}'::jsonb)`;
});

sql += values.join(",\n");
sql += `\nON CONFLICT (slug) DO UPDATE SET
    name = EXCLUDED.name,
    category = EXCLUDED.category,
    sub_category = EXCLUDED.sub_category,
    description = EXCLUDED.description,
    brand = EXCLUDED.brand,
    sku = EXCLUDED.sku,
    stock = EXCLUDED.stock,
    price = EXCLUDED.price,
    original_price = EXCLUDED.original_price,
    mrp = EXCLUDED.mrp,
    rating = EXCLUDED.rating,
    review_count = EXCLUDED.review_count,
    is_bestseller = EXCLUDED.is_bestseller,
    is_eco_friendly = EXCLUDED.is_eco_friendly,
    is_new = EXCLUDED.is_new,
    data = EXCLUDED.data,
    updated_at = NOW();
`;

fs.writeFileSync("supabase/seed_products.sql", sql);
console.log("Wrote supabase/seed_products.sql successfully");

// Execute via Supabase API if token is provided
if (process.env.SUPABASE_ACCESS_TOKEN) {
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
}
