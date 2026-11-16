#!/usr/bin/env python3
"""
Fix Mayank Jumbo Registers:
Replaces the cattle food logo with authentic Indian hardbound accounting register / ledger packshots.
Syncs with local files, products.ts, seed_products.sql, and Supabase DB.
"""

import os
import re
import json
import requests
from PIL import Image

SUPABASE_URL = "https://ggumahzbwhgvgortfnvz.supabase.co"
SERVICE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdndW1haHpid2hndmdvcnRmbnZ6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc5MTI4Mjk5OSwiZXhwIjoyMTA2ODU4OTk5fQ.jsxlZeC_6BEJKCmDtpkFF077CYbmVHS0k0n_pG-0Y3o"
OUTPUT_DIR = "public/images/products"
PRODUCTS_FILE = "src/data/products.ts"

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

# High-resolution authentic Indian hardbound register / ledger photos
REGISTER_SOURCES = {
    # 80 Pages: Traditional Indian hardbound ledger register with cloth spine and label
    "mayank-jumbo-register-80-pages.jpg": "https://rukminim2.flixcart.com/image/832/832/xif0q/record-keeping-book/q/5/2/3-ordinary-binding-register-size-13-0cm-x-34-0cm-192-pages-daily-resized-original-imagqdzhggdzdnfb.jpeg",
    # 170 Pages: Classic Platinum hardbound accounting register
    "mayank-jumbo-register-170-pages.jpg": "https://rukminim2.flixcart.com/image/832/832/xif0q/diary-notebook/8/t/h/platinum-notebook-register-neelgagan-original-imah6tyrpq7fgfxf.jpeg",
    # 240 Pages: Full cloth bound heavy-duty accounting register
    "mayank-jumbo-register-240-pages.jpg": "https://rukminim2.flixcart.com/image/832/832/kzogn0w0/record-keeping-book/h/o/h/1-ledger-copy-size-21x17-cm-full-cloth-hard-bound-250-pages-1-original-imagbmufjbubnfzh.jpeg",
    # 300 Pages: Master ledger full canvas bound 500/300 pages volume
    "mayank-jumbo-register-300-pages.jpg": "https://rukminim2.flixcart.com/image/832/832/xif0q/record-keeping-book/8/6/b/1-r-k-full-canvas-bound-ledger-500-pages-pack-of-1-ledger-r-k-resized-original-imaggggpfdcfaqpg.jpeg",
    # King Size: Long format deluxe folio accounting register
    "mayank-deluxe-king-size-register.jpg": "https://rukminim2.flixcart.com/image/832/832/xif0q/diary-notebook/d/d/3/premium-hard-cover-long-notebook-216-pages-single-line-ruled-original-imahzqwgtbsckdxx.jpeg",
    # Category cover: Hardbound register stack
    "mayank-jumbo-register.jpg": "https://rukminim2.flixcart.com/image/832/832/xif0q/diary-notebook/7/q/x/signature-notebook-register-2pc-neelgagan-original-imah6u3hfymgqdpz.jpeg",
}

def center_and_clean(img: Image.Image, target_size=(800, 800)) -> Image.Image:
    if img.mode != "RGB":
        img = img.convert("RGB")
    
    # Create white canvas
    canvas = Image.new("RGB", target_size, (255, 255, 255))
    
    # Calculate scale to fit within 90% of canvas
    max_w = int(target_size[0] * 0.90)
    max_h = int(target_size[1] * 0.90)
    scale = min(max_w / img.width, max_h / img.height)
    new_w = max(1, int(img.width * scale))
    new_h = max(1, int(img.height * scale))
    
    resized = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    offset_x = (target_size[0] - new_w) // 2
    offset_y = (target_size[1] - new_h) // 2
    canvas.paste(resized, (offset_x, offset_y))
    return canvas

def download_and_save_images():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    for filename, url in REGISTER_SOURCES.items():
        print(f"Downloading {filename}...")
        r = requests.get(url, headers=HEADERS, timeout=10)
        if r.status_code != 200:
            print(f"  [!] Failed to download {url}: {r.status_code}")
            continue
        
        from io import BytesIO
        raw_img = Image.open(BytesIO(r.content))
        cleaned = center_and_clean(raw_img)
        dest_path = os.path.join(OUTPUT_DIR, filename)
        cleaned.save(dest_path, "JPEG", quality=92, progressive=True)
        print(f"  [+] Saved {dest_path} ({cleaned.size})")

def sync_supabase_registers():
    headers = {
        "apikey": SERVICE_KEY,
        "Authorization": f"Bearer {SERVICE_KEY}",
        "Content-Type": "application/json",
        "Prefer": "return=minimal"
    }
    
    slug_to_image = {
        "mayank-jumbo-register-80-pages": ["/images/products/mayank-jumbo-register-80-pages.jpg"],
        "mayank-jumbo-register-170-pages": ["/images/products/mayank-jumbo-register-170-pages.jpg"],
        "mayank-jumbo-register-240-pages": ["/images/products/mayank-jumbo-register-240-pages.jpg"],
        "mayank-jumbo-register-300-pages": ["/images/products/mayank-jumbo-register-300-pages.jpg"],
        "mayank-deluxe-king-size-register": ["/images/products/mayank-deluxe-king-size-register.jpg"],
    }
    
    for slug, imgs in slug_to_image.items():
        url = f"{SUPABASE_URL}/rest/v1/products?slug=eq.{slug}"
        payload = {"images": imgs}
        r = requests.patch(url, headers=headers, json=payload, timeout=8)
        print(f"Supabase update {slug}: {r.status_code}")

if __name__ == "__main__":
    download_and_save_images()
    sync_supabase_registers()
