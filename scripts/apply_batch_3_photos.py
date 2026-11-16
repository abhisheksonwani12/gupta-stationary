#!/usr/bin/env python3
"""
Process Batch 3 user photos and sync to catalog and Supabase DB.
"""

import os
import re
import json
import subprocess
import requests
from PIL import Image

UPLOAD_DIR = "/Users/abhisheksonwani/.gemini/antigravity/brain/e53ff338-f2d7-4c18-9b79-18d88018aa12/.user_uploaded"
OUTPUT_DIR = "public/images/products"
PRODUCTS_FILE = "src/data/products.ts"

SUPABASE_URL = "https://ggumahzbwhgvgortfnvz.supabase.co"
SERVICE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdndW1haHpid2hndmdvcnRmbnZ6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc5MTI4Mjk5OSwiZXhwIjoyMTA2ODU4OTk5fQ.jsxlZeC_6BEJKCmDtpkFF077CYbmVHS0k0n_pG-0Y3o"

def save_square_image(src_file: str, dest_name: str, target_size=(800, 800)):
    src_path = os.path.join(UPLOAD_DIR, src_file)
    img = Image.open(src_path)
    if img.mode != "RGB":
        img = img.convert("RGB")
    
    # If not square, center on square canvas
    if img.width != img.height:
        side = max(img.width, img.height)
        canvas = Image.new("RGB", (side, side), (255, 255, 255))
        canvas.paste(img, ((side - img.width) // 2, (side - img.height) // 2))
        img = canvas
        
    resized = img.resize(target_size, Image.Resampling.LANCZOS)
    dest_path = os.path.join(OUTPUT_DIR, dest_name)
    resized.save(dest_path, "JPEG", quality=92, progressive=True)
    print(f"  [+] Saved {dest_path} ({resized.size})")

def process_photos():
    print("Processing Batch 3 images...")
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    
    # 1. Classmate Octane Ball Box
    save_square_image("media_1794825439032_beaeee2b.jpg", "classmate-octane-ball-box.jpg")
    
    # 2. Flair SRX Stand
    save_square_image("media_1794825439036_bbe7a91b.jpg", "flair-srx-stand.jpg")
    
    # 3. Fevicol MR Spider-Man edition
    save_square_image("media_1794825439037_7253f82e.jpg", "fevicol-mr-spiderman.jpg")
    
    # 4. Linc Pentonic Gel Pen Black
    save_square_image("media_1794825515828_2f94f007.jpg", "linc-pentonic-gel-pen-black.jpg")
    
    # 5. Linc Pentonic Gel 0.6 Box
    save_square_image("media_1794825515828_b987b26a.jpg", "linc-pentonic-gel-06-box.jpg")
    
    # 6. Linc Glycer Blue Pack 10
    save_square_image("media_1794825515828_1a912c30.jpg", "linc-glycer-blue-pack-10.jpg")
    
    # 7. Linc Pentonic G-RT Desk
    save_square_image("media_1794825515874_3ea12ce9.jpg", "linc-pentonic-grt-desk.jpg")
    
    # 8. Linc Pentonic G-RT Box
    save_square_image("media_1794825515884_9c0d8a79.jpg", "linc-pentonic-grt-box.jpg")

PRODUCT_UPDATES = {
    "classmate-octane-ball-pen-pack-of-10-3": [
        "/images/products/classmate-octane-ball-box.jpg"
    ],
    "flair-srx-ball-pen-pack-of-10-3": [
        "/images/products/flair-srx-stand.jpg"
    ],
    "linc-pentonic-gel-pack-of-10-3": [
        "/images/products/linc-pentonic-gel-06-box.jpg",
        "/images/products/linc-pentonic-gel-pen-black.jpg"
    ],
    "linc-glycer-gel-pack-of-10-3": [
        "/images/products/linc-glycer-blue-pack-10.jpg"
    ],
    "linc-glycer-ball-pen-pack-of-10-3": [
        "/images/products/linc-glycer-blue-pack-10.jpg"
    ],
    "linc-grt-gel-pen-1-piece-3": [
        "/images/products/linc-pentonic-grt-box.jpg",
        "/images/products/linc-pentonic-grt-desk.jpg"
    ],
    # Add Spider-Man edition to Fevicol MR gallery
    "fevicol-mr-general-purpose-adhesive-10g-squeezy-bottle-3": [
        "/images/products/fevicol-mr-bottle.png",
        "/images/products/fevicol-mr-nozzle.jpg",
        "/images/products/fevicol-mr-spiderman.jpg"
    ],
    "fevicol-mr-general-purpose-adhesive-22-5g-squeezy-bottle-3": [
        "/images/products/fevicol-mr-bottle.png",
        "/images/products/fevicol-mr-nozzle.jpg",
        "/images/products/fevicol-mr-spiderman.jpg"
    ],
    "fevicol-mr-general-purpose-adhesive-50g-bottle-3": [
        "/images/products/fevicol-mr-bottle.png",
        "/images/products/fevicol-mr-nozzle.jpg",
        "/images/products/fevicol-mr-spiderman.jpg"
    ],
    "fevicol-mr-general-purpose-adhesive-100g-bottle-3": [
        "/images/products/fevicol-mr-bottle.png",
        "/images/products/fevicol-mr-nozzle.jpg",
        "/images/products/fevicol-mr-spiderman.jpg"
    ],
    "fevicol-mr-general-purpose-adhesive-200g-jar-3": [
        "/images/products/fevicol-mr-bottle.png",
        "/images/products/fevicol-mr-nozzle.jpg",
        "/images/products/fevicol-mr-spiderman.jpg"
    ],
    "fevicol-mr-general-purpose-adhesive-500g-dispenser-jar-3": [
        "/images/products/fevicol-mr-bottle.png",
        "/images/products/fevicol-mr-nozzle.jpg",
        "/images/products/fevicol-mr-spiderman.jpg"
    ]
}

def update_products_file():
    print("Updating products.ts...")
    with open(PRODUCTS_FILE, "r", encoding="utf-8") as f:
        content = f.read()

    match = re.search(r"export const PRODUCTS: Product\[\] = (\[[\s\S]*?\]);\s*$", content)
    if not match:
        raise ValueError("Could not extract PRODUCTS from products.ts")

    products = json.loads(re.sub(r",\s*([\]}])", r"\1", match.group(1)))

    updated_count = 0
    for p in products:
        slug = p["slug"]
        if slug in PRODUCT_UPDATES:
            p["images"] = PRODUCT_UPDATES[slug]
            updated_count += 1

    prefix = content[:match.start(1)]
    suffix = content[match.end(1):]
    new_json = json.dumps(products, indent=2)
    new_content = prefix + new_json + suffix

    with open(PRODUCTS_FILE, "w", encoding="utf-8") as f:
        f.write(new_content)

    print(f"[+] Updated {updated_count} products in {PRODUCTS_FILE}")

def sync_supabase():
    print("Syncing with Supabase DB...")
    headers = {
        "apikey": SERVICE_KEY,
        "Authorization": f"Bearer {SERVICE_KEY}",
        "Content-Type": "application/json",
        "Prefer": "return=minimal"
    }
    for slug, imgs in PRODUCT_UPDATES.items():
        url = f"{SUPABASE_URL}/rest/v1/products?slug=eq.{slug}"
        payload = {"images": imgs}
        r = requests.patch(url, headers=headers, json=payload, timeout=8)
        print(f"  [+] Supabase {slug}: {r.status_code}")

def refresh_seed_sql():
    print("Regenerating supabase/seed_products.sql...")
    res = subprocess.run(["node", "scripts/seed_products.js"], capture_output=True, text=True)
    if res.returncode == 0:
        print("  [+] seed_products.sql refreshed successfully")
    else:
        print(f"  [-] Failed to refresh seed sql: {res.stderr}")

if __name__ == "__main__":
    process_photos()
    update_products_file()
    sync_supabase()
    refresh_seed_sql()
