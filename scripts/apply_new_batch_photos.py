#!/usr/bin/env python3
"""
Process user-uploaded stationery photos and update the catalog and Supabase database.
"""

import os
import re
import json
import requests
from PIL import Image

UPLOAD_DIR = "/Users/abhisheksonwani/.gemini/antigravity/brain/e53ff338-f2d7-4c18-9b79-18d88018aa12/.user_uploaded"
OUTPUT_DIR = "public/images/products"
PRODUCTS_FILE = "src/data/products.ts"

SUPABASE_URL = "https://ggumahzbwhgvgortfnvz.supabase.co"
SERVICE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdndW1haHpid2hndmdvcnRmbnZ6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc5MTI4Mjk5OSwiZXhwIjoyMTA2ODU4OTk5fQ.jsxlZeC_6BEJKCmDtpkFF077CYbmVHS0k0n_pG-0Y3o"

def center_on_canvas(src_path: str, dest_path: str, target_size=(800, 800), bg_color=(255, 255, 255)):
    img = Image.open(src_path)
    if img.mode != "RGB":
        img = img.convert("RGB")
    
    canvas = Image.new("RGB", target_size, bg_color)
    max_w = int(target_size[0] * 0.92)
    max_h = int(target_size[1] * 0.92)
    
    scale = min(max_w / img.width, max_h / img.height)
    new_w = max(1, int(img.width * scale))
    new_h = max(1, int(img.height * scale))
    
    resized = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
    offset_x = (target_size[0] - new_w) // 2
    offset_y = (target_size[1] - new_h) // 2
    canvas.paste(resized, (offset_x, offset_y))
    canvas.save(dest_path, "JPEG", quality=92, progressive=True)
    print(f"  [+] Saved {dest_path} ({canvas.size})")

PHOTO_MAPPING = {
    # 1. Classmate Octane Gel (Pack of 10)
    "classmate-octane-gel-pack-10.jpg": ("media_1794824546938_5e32a841.jpg", (255, 255, 255)),
    "classmate-octane-gel-detail.jpg": ("media_1794824546945_3370e44a.jpg", (255, 255, 255)),
    
    # 2. Hauser XO Jumbo Gel (1 Piece)
    "hauser-xo-jumbo-gel-poster.jpg": ("media_1794824546938_c1a5676e.jpg", (255, 255, 255)),
    "hauser-xo-jumbo-gel-body.jpg": ("media_1794824546950_8a9ab88e.jpg", (255, 255, 255)),
    "hauser-xo-jumbo-gel-display.jpg": ("media_1794824546940_45589bb0.jpg", (255, 255, 255)),
    
    # 3. Hauser XO Click Gel (1 Piece)
    "hauser-xo-click-gel-pen.jpg": ("media_1794824546974_57dff3ec.jpg", (245, 245, 245)),
    "hauser-xo-click-gel-display.jpg": ("media_1794824546977_c6ebef64.jpg", (255, 255, 255)),
    
    # 4. Linc Ocean Gel (Pack of 10)
    "linc-ocean-gel-pack-10.jpg": ("media_1794824546946_524075b8.jpg", (255, 255, 255)),
    "linc-ocean-gel-pens-spread.jpg": ("media_1794824546953_e7be0cf4.jpg", (255, 255, 255)),
    
    # 5. Linc Pentonic EVO (Pack of 10)
    "linc-pentonic-evo-box.jpg": ("media_1794824546974_9ce9fa56.jpg", (255, 255, 255)),
    "linc-pentonic-evo-pens.jpg": ("media_1794824589449_befed32e.jpg", (255, 255, 255)),
}

PRODUCT_UPDATES = {
    "classmate-octane-gel-pack-of-10-3": [
        "/images/products/classmate-octane-gel-pack-10.jpg",
        "/images/products/classmate-octane-gel-detail.jpg"
    ],
    "hauser-jumbo-gel-1-piece-3": [
        "/images/products/hauser-xo-jumbo-gel-poster.jpg",
        "/images/products/hauser-xo-jumbo-gel-body.jpg",
        "/images/products/hauser-xo-jumbo-gel-display.jpg"
    ],
    "hauser-click-gel-1-piece-3": [
        "/images/products/hauser-xo-click-gel-pen.jpg",
        "/images/products/hauser-xo-click-gel-display.jpg"
    ],
    "linc-ocean-gel-pack-of-10-3": [
        "/images/products/linc-ocean-gel-pack-10.jpg",
        "/images/products/linc-ocean-gel-pens-spread.jpg"
    ],
    "linc-pentonic-gel-pack-of-10-3": [
        "/images/products/linc-pentonic-evo-box.jpg",
        "/images/products/linc-pentonic-evo-pens.jpg"
    ]
}

def process_photos():
    print("Processing and centering user photos...")
    for out_name, (src_name, bg) in PHOTO_MAPPING.items():
        src_path = os.path.join(UPLOAD_DIR, src_name)
        dest_path = os.path.join(OUTPUT_DIR, out_name)
        center_on_canvas(src_path, dest_path, (800, 800), bg)

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

if __name__ == "__main__":
    process_photos()
    update_products_file()
    sync_supabase()
