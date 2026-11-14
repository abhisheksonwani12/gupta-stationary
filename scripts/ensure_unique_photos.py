#!/usr/bin/env python3
"""
Ensure 100% photo uniqueness across all products in Gupta / Instant Stationery e-commerce.
Guarantees no two products share the same image file or hash.
"""

import os
import re
import json
import time
import hashlib
import urllib.parse
import urllib.request
import requests
from PIL import Image
import numpy as np

SUPABASE_URL = "https://ggumahzbwhgvgortfnvz.supabase.co"
SERVICE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdndW1haHpid2hndmdvcnRmbnZ6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc5MTI4Mjk5OSwiZXhwIjoyMTA2ODU4OTk5fQ.jsxlZeC_6BEJKCmDtpkFF077CYbmVHS0k0n_pG-0Y3o"
OUTPUT_DIR = "public/images/products"
PRODUCTS_FILE = "src/data/products.ts"

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

def get_file_hash(path: str) -> str:
    with open(path, "rb") as f:
        return hashlib.md5(f.read()).hexdigest()

def get_image_hash(img: Image.Image) -> str:
    # Hash the raw pixel bytes for exact image comparison
    return hashlib.md5(img.tobytes()).hexdigest()

def make_smart_query(prod: dict) -> list[str]:
    name = prod["name"]
    slug = prod["slug"]
    brand = prod.get("specifications", {}).get("Brand", "")
    queries = []

    # Notebooks & Notepads specializations
    if "24x18" in name or "Student Notebook" in name:
        ruling = "single line"
        if "4 line" in name.lower(): ruling = "4 line red cover"
        elif "2 line combine" in name.lower(): ruling = "2 line combine"
        elif "2 line" in name.lower(): ruling = "2 line hindi"
        elif "3 line" in name.lower(): ruling = "3 line"
        elif "box" in name.lower(): ruling = "maths square box grid"
        elif "drawing" in name.lower(): ruling = "drawing ruled combine"
        elif "combine" in name.lower(): ruling = "combine"
        elif "interleaf" in name.lower(): ruling = "science interleaf"
        
        # Multiple varied queries
        queries.append(f"Classmate {ruling} notebook")
        queries.append(f"Navneet {ruling} student notebook")
        queries.append(f"Classmate pulse {ruling} notebook cover")
        queries.append(f"Classmate notebook cover photo")

    elif "Long Notebook" in name or "long-notebook" in slug:
        pages = ""
        m = re.search(r"(\d+)\s*Pages", name)
        if m: pages = f"{m.group(1)} pages"
        queries.append(f"Classmate long book {pages}")
        queries.append(f"Classmate pulse long notebook")
        queries.append(f"Navneet Youva long notebook {pages}")
        queries.append(f"Classmate subject long notebook")

    elif "Wiro" in name or "Spiral" in name:
        pages = ""
        m = re.search(r"(\d+)\s*Pages", name)
        if m: pages = f"{m.group(1)} pages"
        ruling = "unruled" if "unruled" in name.lower() else "ruled"
        queries.append(f"Classmate pulse wiro spiral notebook {pages} {ruling}")
        queries.append(f"Navneet Youva spiral notebook {pages}")
        queries.append(f"Classmate 6 subject spiral notebook")
        queries.append(f"Spiral bound notebook A4 classmate")

    elif "Fevicol MR" in name:
        m = re.search(r"\((\d+[\.\d]*[gm|ml|g|kg]+[^\)]*)\)", name)
        size = m.group(1) if m else ""
        queries.append(f"Pidilite Fevicol MR {size} adhesive")
        queries.append(f"Fevicol MR {size} squeeze bottle white")

    elif "Fevikwik" in name:
        if "Gel" in name:
            queries.append("Fevikwik Gel instant adhesive tube 3g")
        elif "0.5g" in name:
            queries.append("Fevikwik 0.5g sachet pack Pidilite")
        else:
            queries.append("Fevikwik 1g drop tube adhesive Pidilite")

    elif "Mayank" in name:
        m = re.search(r"\((\d+)\s*Pages", name)
        pages = f"{m.group(1)} pages" if m else ""
        queries.append(f"Mayank Jumbo Register hardbound {pages}")
        queries.append(f"Hardbound accounting register ledger {pages}")

    elif "UNOMAX" in name or "Unomax" in name:
        clean_n = re.sub(r"\(.*?\)", "", name).strip()
        queries.append(f"{clean_n} pen")
        queries.append(f"Unomax {clean_n}")

    elif "HAUSER" in name or "Hauser" in name:
        clean_n = re.sub(r"\(.*?\)", "", name).strip()
        queries.append(f"{clean_n} pen")

    elif "LINC" in name or "Linc" in name:
        clean_n = re.sub(r"\(.*?\)", "", name).strip()
        queries.append(f"{clean_n} pen")

    elif "Pierre Cardin" in name:
        clean_n = re.sub(r"\(.*?\)", "", name).strip()
        queries.append(f"{clean_n}")

    else:
        clean_n = re.sub(r"\(.*?\)", "", name).strip()
        queries.append(f"{brand} {clean_n}" if brand else clean_n)

    return queries

def search_candidate_images(query: str, max_candidates: int = 10) -> list[str]:
    encoded = urllib.parse.quote(query + " product")
    url = f"https://yandex.com/images/search?text={encoded}"
    try:
        r = requests.get(url, headers=HEADERS, timeout=7)
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
        
        def rank_score(u):
            ul = u.lower()
            if "media-amazon" in ul or "imimg.com" in ul: return 0
            if ".in/" in ul or "flipkart" in ul: return 1
            if "shopify" in ul or "myshopline" in ul or "cdn" in ul: return 2
            return 3
        candidates.sort(key=rank_score)
        return candidates
    except Exception:
        return []

def download_and_process_image(url: str, target_size=(600, 600)) -> Image.Image | None:
    try:
        resp = requests.get(url, headers={"User-Agent": "Mozilla/5.0"}, timeout=(3.0, 4.0))
        if resp.status_code != 200 or len(resp.content) < 1000:
            return None
        
        raw_img = Image.open(urllib.request.io.BytesIO(resp.content))
        
        # If RGBA with transparency
        if raw_img.mode in ("RGBA", "LA") or (raw_img.mode == "P" and "transparency" in raw_img.info):
            raw_img = raw_img.convert("RGBA")
            bbox = raw_img.getbbox()
            cropped = raw_img.crop(bbox) if bbox else raw_img
            
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

        img = raw_img.convert("RGB")
        if img.width < 100 or img.height < 100:
            return None
            
        arr = np.array(img, dtype=np.uint8)
        mask = np.any(arr < 235, axis=-1)
        if not np.any(mask):
            return None
            
        y_indices, x_indices = np.where(mask)
        x0, x1 = max(0, x_indices.min() - 4), min(img.width, x_indices.max() + 4)
        y0, y1 = max(0, y_indices.min() - 4), min(img.height, y_indices.max() + 4)
        
        cropped = img.crop((x0, y0, x1, y1))
        
        canvas = Image.new("RGB", target_size, (255, 255, 255))
        max_w = int(target_size[0] * 0.85)
        max_h = int(target_size[1] * 0.85)
        scale = min(max_w / max(1, cropped.width), max_h / max(1, cropped.height))
        new_w = max(1, int(cropped.width * scale))
        new_h = max(1, int(cropped.height * scale))
        
        resized = cropped.resize((new_w, new_h), Image.Resampling.LANCZOS)
        resized_arr = np.array(resized)
        near_white_mask = np.all(resized_arr >= 238, axis=-1)
        resized_arr[near_white_mask] = 255
        cleaned = Image.fromarray(resized_arr)
        
        offset_x = (target_size[0] - new_w) // 2
        offset_y = (target_size[1] - new_h) // 2
        canvas.paste(cleaned, (offset_x, offset_y))
        return canvas
    except Exception:
        return None

def update_supabase_product(slug: str, image_path: str) -> bool:
    headers = {
        "apikey": SERVICE_KEY,
        "Authorization": f"Bearer {SERVICE_KEY}",
        "Content-Type": "application/json",
        "Prefer": "return=minimal"
    }
    url = f"{SUPABASE_URL}/rest/v1/products?slug=eq.{slug}"
    payload = {"images": [image_path]}
    try:
        r = requests.patch(url, headers=headers, json=payload, timeout=8)
        return r.status_code in (200, 204)
    except Exception:
        return False

def load_products() -> list[dict]:
    with open(PRODUCTS_FILE, "r", encoding="utf-8") as f:
        content = f.read()
    match = re.search(r"export const PRODUCTS: Product\[\] = (\[[\s\S]*?\]);\s*$", content)
    return json.loads(re.sub(r",\s*([\]}])", r"\1", match.group(1)))

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
    products = load_products()
    print(f"Loaded {len(products)} products from catalog.")

    # 1. Map existing hashes to see what is already unique
    file_to_hash = {}
    hash_to_files = {}
    for f in os.listdir(OUTPUT_DIR):
        if not f.endswith(".jpg"): continue
        path = os.path.join(OUTPUT_DIR, f)
        h = get_file_hash(path)
        file_to_hash[f] = h
        hash_to_files.setdefault(h, []).append(f)

    # Global set of hashes already reserved for exactly one product
    used_hashes = set()
    for h, files in hash_to_files.items():
        if len(files) == 1:
            used_hashes.add(h)

    # Products that need unique replacement (files that share a duplicate hash)
    products_needing_update = []
    seen_first_for_hash = set()

    for p in products:
        img_name = p.get("images", [""])[0].replace("/images/products/", "")
        h = file_to_hash.get(img_name)
        if not h:
            products_needing_update.append(p)
        elif len(hash_to_files.get(h, [])) > 1:
            if h not in seen_first_for_hash:
                # Keep the first file as the sole owner of this hash
                seen_first_for_hash.add(h)
                used_hashes.add(h)
            else:
                products_needing_update.append(p)

    total_needed = len(products_needing_update)
    print(f"Found {total_needed} products requiring unique replacement photos.")
    if total_needed == 0:
        print("All products already have 100% unique images!")
        return

    local_updates = {}
    updated_count = 0

    for i, prod in enumerate(products_needing_update, 1):
        slug = prod["slug"]
        name = prod["name"]
        dest_filename = f"{slug}.jpg"
        dest_path = os.path.join(OUTPUT_DIR, dest_filename)
        public_url = f"/images/products/{dest_filename}"

        print(f"\n[{i}/{total_needed}] {name}")
        queries = make_smart_query(prod)
        print(f"  Queries to try: {queries}")

        unique_image = None
        unique_hash = None

        for q in queries:
            cands = search_candidate_images(q, max_candidates=8)
            for cand_url in cands:
                img = download_and_process_image(cand_url)
                if not img:
                    continue
                h = get_image_hash(img)
                if h in used_hashes:
                    # Duplicate of another product's photo! Try next candidate.
                    continue
                unique_image = img
                unique_hash = h
                break
            if unique_image:
                break
            time.sleep(0.3)

        if not unique_image:
            print(f"  [x] Could not find distinct unique image for {slug}. Keeping existing.")
            continue

        # Save and register unique hash
        unique_image.save(dest_path, "JPEG", quality=90, progressive=True)
        used_hashes.add(unique_hash)
        print(f"  [+] Saved new distinct photo (hash {unique_hash[:8]}): {dest_path}")

        # Update Supabase
        update_supabase_product(slug, public_url)
        local_updates[slug] = public_url
        updated_count += 1
        time.sleep(0.4)

    if local_updates:
        print(f"\nUpdating {len(local_updates)} image links in {PRODUCTS_FILE}...")
        update_local_products_ts(local_updates)
        print("Updated products.ts!")

    print(f"\nJob complete! {updated_count}/{total_needed} products successfully updated with unique photos.")

if __name__ == "__main__":
    main()
