#!/usr/bin/env python3
"""
Process Batch 2 user photos and sync to catalog and Supabase DB.
"""

import os
import re
import json
import requests
from PIL import Image
import numpy as np

UPLOAD_DIR = "/Users/abhisheksonwani/.gemini/antigravity/brain/e53ff338-f2d7-4c18-9b79-18d88018aa12/.user_uploaded"
OUTPUT_DIR = "public/images/products"
PRODUCTS_FILE = "src/data/products.ts"

SUPABASE_URL = "https://ggumahzbwhgvgortfnvz.supabase.co"
SERVICE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdndW1haHpid2hndmdvcnRmbnZ6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc5MTI4Mjk5OSwiZXhwIjoyMTA2ODU4OTk5fQ.jsxlZeC_6BEJKCmDtpkFF077CYbmVHS0k0n_pG-0Y3o"

def center_on_canvas(img: Image.Image, dest_path: str, target_size=(800, 800), bg_color=(255, 255, 255)):
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

def process_photos():
    print("Processing Batch 2 images...")
    
    # 1. Linc Pentonic 10u box + pen tips
    img_ac6 = Image.open(os.path.join(UPLOAD_DIR, "media_1794825166120_ac6189d7.jpg"))
    center_on_canvas(img_ac6, os.path.join(OUTPUT_DIR, "linc-pentonic-10u-box.jpg"))
    
    # 2. Linc Pentonic Ball Pen 10 N purple
    img_6e8 = Image.open(os.path.join(UPLOAD_DIR, "media_1794825166120_6e8ba69b.jpg"))
    center_on_canvas(img_6e8, os.path.join(OUTPUT_DIR, "linc-pentonic-ball-pen-purple.jpg"))
    
    # 3. Flair YOLO Ball Pen banner
    img_f56 = Image.open(os.path.join(UPLOAD_DIR, "media_1794825166120_f56f1849.jpg"))
    center_on_canvas(img_f56, os.path.join(OUTPUT_DIR, "flair-yolo-ball-pen-banner.jpg"))
    
    # 4. Hauser Auto-Click retail stand
    img_098 = Image.open(os.path.join(UPLOAD_DIR, "media_1794825166126_09835856.jpg"))
    center_on_canvas(img_098, os.path.join(OUTPUT_DIR, "hauser-autoclick-retail-stand.jpg"))
    
    # 5. Hauser Auto-Click hand rotating mechanism
    img_772 = Image.open(os.path.join(UPLOAD_DIR, "media_1794825166123_772ba0fc.jpg"))
    center_on_canvas(img_772, os.path.join(OUTPUT_DIR, "hauser-autoclick-hand-rotating.jpg"))
    
    # 6. Hauser Auto-Click pens detail
    img_815 = Image.open(os.path.join(UPLOAD_DIR, "media_1794825166123_8154f786.jpg"))
    center_on_canvas(img_815, os.path.join(OUTPUT_DIR, "hauser-autoclick-pens-detail.jpg"))
    
    # 7. Classmate Hook 10-pen pack
    img_495 = Image.open(os.path.join(UPLOAD_DIR, "media_1794825166123_4955b963.jpg"))
    center_on_canvas(img_495, os.path.join(OUTPUT_DIR, "classmate-hook-pack-10.jpg"))
    
    # 8. Classmate Hook limited colors
    img_fcb = Image.open(os.path.join(UPLOAD_DIR, "media_1794825166124_fcbcf563.jpg"))
    center_on_canvas(img_fcb, os.path.join(OUTPUT_DIR, "classmate-hook-limited-colors.jpg"))
    
    # 9. Flair Ezee-click 20 Pcs pack
    img_70f = Image.open(os.path.join(UPLOAD_DIR, "media_1794825178811_70ff8d9a.jpg"))
    center_on_canvas(img_70f, os.path.join(OUTPUT_DIR, "flair-ezee-click-box.jpg"))
    
    # 10. Pidilite Fevibond exact crop
    fevibond_raw = Image.open(os.path.join(UPLOAD_DIR, "media_1794825166124_7e3cba4a.jpg"))
    arr = np.array(fevibond_raw)
    diff = np.abs(arr[300:650, :, :3].astype(int) - 255).sum(axis=2)
    non_white_rows = np.where(diff.max(axis=1) > 30)[0] + 300
    non_white_cols = np.where(diff.max(axis=0) > 30)[0]
    fevibond_crop = fevibond_raw.crop((
        max(0, non_white_cols[0] - 10),
        max(0, non_white_rows[0] - 10),
        min(fevibond_raw.width, non_white_cols[-1] + 10),
        min(fevibond_raw.height, non_white_rows[-1] + 10)
    ))
    center_on_canvas(fevibond_crop, os.path.join(OUTPUT_DIR, "pidilite-fevibond-adhesive.jpg"))

PRODUCT_UPDATES = {
    # Replace strawberry cake with authentic Linc Pentonic EVO & Pentonic packshots!
    "linc-evo-gel-1-piece-3": [
        "/images/products/linc-pentonic-evo-box.jpg",
        "/images/products/linc-pentonic-evo-pens.jpg",
        "/images/products/linc-pentonic-10u-box.jpg"
    ],
    "linc-pentonic-ball-pen-pack-of-10-3": [
        "/images/products/linc-pentonic-10u-box.jpg",
        "/images/products/linc-pentonic-ball-pen-purple.jpg",
        "/images/products/linc-pentonic-evo-pens.jpg"
    ],
    "flair-yolo-ball-pen-pack-of-10-3": [
        "/images/products/flair-yolo-ball-pen-banner.jpg"
    ],
    "hauser-autoclick-ball-pen-pack-of-10-3": [
        "/images/products/hauser-autoclick-retail-stand.jpg",
        "/images/products/hauser-autoclick-hand-rotating.jpg",
        "/images/products/hauser-autoclick-pens-detail.jpg"
    ],
    "classmate-hook-ball-pen-pack-of-10-3": [
        "/images/products/classmate-hook-pack-10.jpg",
        "/images/products/classmate-hook-limited-colors.jpg"
    ],
    "flair-click-ball-pen-pack-of-10-3": [
        "/images/products/flair-ezee-click-box.jpg"
    ],
    "pidilite-bondfix-multipurpose-adhesive-20ml-3": [
        "/images/products/pidilite-fevibond-adhesive.jpg"
    ],
    "pidilite-bondfix-multipurpose-adhesive-30ml-3": [
        "/images/products/pidilite-fevibond-adhesive.jpg"
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

if __name__ == "__main__":
    process_photos()
    update_products_file()
    sync_supabase()
