#!/usr/bin/env python3
"""
Batch fetch, background-clean, and update product photos for Gupta / Instant Stationery e-commerce.
"""

import sys
import os
import re
import json
import time
import argparse
import urllib.parse
import urllib.request
import requests
from PIL import Image
import numpy as np

SUPABASE_URL = "https://ggumahzbwhgvgortfnvz.supabase.co"
SERVICE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdndW1haHpid2hndmdvcnRmbnZ6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc5MTI4Mjk5OSwiZXhwIjoyMTA2ODU4OTk5fQ.jsxlZeC_6BEJKCmDtpkFF077CYbmVHS0k0n_pG-0Y3o"
OUTPUT_DIR = "public/images/products"
PRODUCTS_FILE = "src/data/products.ts"

HEADERS_DESKTOP = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

def clean_query(name: str, brand: str) -> str:
    # Remove unit descriptions in parentheses like (1 Packet / Ream - 500 Sheets) for cleaner search
    cleaned = re.sub(r"\(.*?\)", "", name).strip()
    # Remove redundant punctuation
    cleaned = re.sub(r"[,/]+", " ", cleaned)
    if brand and brand.lower() not in cleaned.lower():
        return f"{brand} {cleaned}".strip()
    return cleaned.strip()

def search_candidate_images(query: str, max_candidates: int = 6) -> list[str]:
    encoded = urllib.parse.quote(query + " product")
    url = f"https://yandex.com/images/search?text={encoded}"
    try:
        r = requests.get(url, headers=HEADERS_DESKTOP, timeout=8)
        if r.status_code != 200:
            return []
        raw_urls = re.findall(r'img_url=([^&\"\'\s]+)', r.text)
        candidates = []
        for u in raw_urls:
            dec = urllib.parse.unquote(u)
            lower = dec.lower()
            if any(bad in lower for bad in ["favicon", "icon", "banner", "sprite", "avatar", "logo", ".by/", ".ru/"]):
                continue
            if not any(ext in lower for ext in [".jpg", ".jpeg", ".png", ".webp"]):
                continue
            candidates.append(dec)
            if len(candidates) >= max_candidates:
                break
        
        # Sort candidates preferring reliable e-commerce & retail CDNs
        def rank_score(u):
            ul = u.lower()
            if "media-amazon" in ul or "imimg.com" in ul: return 0
            if ".in/" in ul or "flipkart" in ul: return 1
            if "shopify" in ul or "myshopline" in ul or "cdn" in ul: return 2
            return 3
        candidates.sort(key=rank_score)
        return candidates
    except Exception as e:
        print(f"  [Search Error] {e}")
        return []

def download_and_process_image(url: str, target_size=(600, 600)) -> Image.Image | None:
    try:
        # Fast connection timeout so slow hosts don't block
        resp = requests.get(url, headers={"User-Agent": "Mozilla/5.0"}, timeout=(3.0, 4.0))
        if resp.status_code != 200 or len(resp.content) < 1000:
            return None
        
        raw_img = Image.open(urllib.request.io.BytesIO(resp.content))
        
        # If RGBA with transparency
        if raw_img.mode in ("RGBA", "LA") or (raw_img.mode == "P" and "transparency" in raw_img.info):
            raw_img = raw_img.convert("RGBA")
            bbox = raw_img.getbbox()
            cropped = raw_img.crop(bbox) if bbox else raw_img
            
            # Scale to fit inside target with 15% margin
            canvas = Image.new("RGB", target_size, (255, 255, 255))
            max_w = int(target_size[0] * 0.85)
            max_h = int(target_size[1] * 0.85)
            scale = min(max_w / max(1, cropped.width), max_h / max(1, cropped.height))
            new_w = max(1, int(cropped.width * scale))
            new_h = max(1, int(cropped.height * scale))
            
            resized = cropped.resize((new_w, new_h), Image.Resampling.LANCZOS)
            offset_x = (target_size[0] - new_w) // 2
            offset_y = (target_size[1] - new_h) // 2
            canvas.paste(resized, (offset_x, offset_y), mask=resized.split()[3])
            return canvas

        # RGB or Greyscale image
        img = raw_img.convert("RGB")
        if img.width < 100 or img.height < 100:
            return None
            
        arr = np.array(img, dtype=np.uint8)
        
        # Detect content bounding box (pixels darker than near-white)
        mask = np.any(arr < 235, axis=-1)
        if not np.any(mask):
            return None
            
        y_indices, x_indices = np.where(mask)
        x0, x1 = max(0, x_indices.min() - 4), min(img.width, x_indices.max() + 4)
        y0, y1 = max(0, y_indices.min() - 4), min(img.height, y_indices.max() + 4)
        
        cropped = img.crop((x0, y0, x1, y1))
        
        # Scale to fit into 600x600 canvas with 15% padding
        canvas = Image.new("RGB", target_size, (255, 255, 255))
        max_w = int(target_size[0] * 0.85)
        max_h = int(target_size[1] * 0.85)
        scale = min(max_w / max(1, cropped.width), max_h / max(1, cropped.height))
        new_w = max(1, int(cropped.width * scale))
        new_h = max(1, int(cropped.height * scale))
        
        resized = cropped.resize((new_w, new_h), Image.Resampling.LANCZOS)
        
        # Clean up light edge fringes to pure white 255
        resized_arr = np.array(resized)
        near_white_mask = np.all(resized_arr >= 238, axis=-1)
        resized_arr[near_white_mask] = 255
        cleaned = Image.fromarray(resized_arr)
        
        offset_x = (target_size[0] - new_w) // 2
        offset_y = (target_size[1] - new_h) // 2
        canvas.paste(cleaned, (offset_x, offset_y))
        return canvas
        
    except Exception as e:
        return None

def update_supabase_product(slug: str, image_path: str) -> bool:
    headers = {
        "apikey": SERVICE_KEY,
        "Authorization": f"Bearer {SERVICE_KEY}",
        "Content-Type": "application/json",
        "Prefer": "return=minimal"
    }
    url = f"{SUPABASE_URL}/rest/v1/products?slug=eq.{slug}"
    payload = {
        "images": [image_path]
    }
    try:
        r = requests.patch(url, headers=headers, json=payload, timeout=8)
        return r.status_code in (200, 204)
    except Exception as e:
        print(f"  [Supabase Update Error] {e}")
        return False

def get_placeholder_products() -> list[dict]:
    with open(PRODUCTS_FILE, "r", encoding="utf-8") as f:
        content = f.read()
    
    match = re.search(r"export const PRODUCTS: Product\[\] = (\[[\s\S]*?\]);\s*$", content)
    if not match:
        raise ValueError("Could not extract PRODUCTS from products.ts")
    
    products = json.loads(re.sub(r",\s*([\]}])", r"\1", match.group(1)))
    
    # Identify shared placeholder images
    counts = {}
    for p in products:
        img = p.get("images", [""])[0]
        counts[img] = counts.get(img, 0) + 1
        
    placeholders = [p for p in products if counts.get(p.get("images", [""])[0], 0) > 1]
    return placeholders

def update_local_products_ts(updates: dict[str, str]):
    with open(PRODUCTS_FILE, "r", encoding="utf-8") as f:
        content = f.read()
        
    for slug, new_img in updates.items():
        pattern = rf'("slug":\s*"{re.escape(slug)}",[\s\S]*?"images":\s*\[)[^\]]*(\])'
        replacement = rf'\1\n      "{new_img}"\n    \2'
        content = re.sub(pattern, replacement, content, count=1)
        
    with open(PRODUCTS_FILE, "w", encoding="utf-8") as f:
        f.write(content)

def main():
    parser = argparse.ArgumentParser(description="Batch update stationery product photos")
    parser.add_argument("--batch-size", type=int, default=10, help="Number of products per batch")
    parser.add_argument("--batch-index", type=int, default=0, help="Batch index (0-based)")
    parser.add_argument("--all", action="store_true", help="Process all placeholder products")
    args = parser.parse_args()

    os.makedirs(OUTPUT_DIR, exist_ok=True)
    all_placeholders = get_placeholder_products()
    total = len(all_placeholders)
    print(f"Found {total} products using placeholder images.")

    start_idx = 0 if args.all else args.batch_index * args.batch_size
    end_idx = total if args.all else min(start_idx + args.batch_size, total)

    batch = all_placeholders[start_idx:end_idx]
    print(f"\nProcessing Batch #{args.batch_index + 1}: products {start_idx + 1} to {end_idx} (Total in batch: {len(batch)})")

    updated_count = 0
    local_updates = {}

    for i, prod in enumerate(batch, 1):
        slug = prod["slug"]
        name = prod["name"]
        brand = prod.get("specifications", {}).get("Brand", "")
        dest_filename = f"{slug}.jpg"
        dest_path = os.path.join(OUTPUT_DIR, dest_filename)
        public_url = f"/images/products/{dest_filename}"

        print(f"\n[{start_idx + i}/{end_idx}] {name}")
        search_term = clean_query(name, brand)
        print(f"  Searching: '{search_term}'...")

        candidates = search_candidate_images(search_term)
        if not candidates:
            print("  [x] No candidate images found.")
            continue

        processed_img = None
        for candidate_url in candidates:
            processed_img = download_and_process_image(candidate_url)
            if processed_img:
                break
            time.sleep(0.3)

        if not processed_img:
            print("  [x] Could not process any candidate image.")
            continue

        # Save cleaned product image
        processed_img.save(dest_path, "JPEG", quality=90, progressive=True)
        print(f"  [+] Saved clean photo: {dest_path}")

        # Update Supabase
        db_ok = update_supabase_product(slug, public_url)
        if db_ok:
            print(f"  [+] Updated Supabase database record for {slug}")
        else:
            print(f"  [-] Note: Supabase update skipped or returned non-200")

        local_updates[slug] = public_url
        updated_count += 1
        time.sleep(0.5)

    if local_updates:
        print(f"\nUpdating {len(local_updates)} product image references in {PRODUCTS_FILE}...")
        update_local_products_ts(local_updates)
        print("Local products.ts updated successfully!")

    print(f"\nBatch completed! {updated_count}/{len(batch)} photos successfully added and synced.")

if __name__ == "__main__":
    main()
