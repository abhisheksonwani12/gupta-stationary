#!/usr/bin/env python3
"""
Sync authentic product images and multi-image arrays with local products.ts and Supabase DB.
"""

import os
import re
import json
import requests

SUPABASE_URL = "https://ggumahzbwhgvgortfnvz.supabase.co"
SERVICE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdndW1haHpid2hndmdvcnRmbnZ6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc5MTI4Mjk5OSwiZXhwIjoyMTA2ODU4OTk5fQ.jsxlZeC_6BEJKCmDtpkFF077CYbmVHS0k0n_pG-0Y3o"
PRODUCTS_FILE = "src/data/products.ts"

UPDATES = {
    # 1. Copier Papers - replaced industrial paper mill rolls with authentic 500-sheet ream packshots + secondary shot
    "orient-copier-paper-ream": [
        "/images/products/orient-copier-paper-ream.jpg",
        "/images/products/copier-paper.jpg"
    ],
    "jk-copier-paper-75-gsm": [
        "/images/products/jk-red-copier-paper-75-gsm.jpg",
        "/images/products/copier-paper.jpg"
    ],
    "jk-ecorise-copier-paper-70-gsm": [
        "/images/products/jk-ecorise-copier-paper.jpg",
        "/images/products/copier-paper.jpg"
    ],
    "jk-cedar-digital-paper-100-gsm": [
        "/images/products/jk-cedar-copier-paper.jpg",
        "/images/products/copier-paper.jpg"
    ],
    "jk-excel-bond-paper-super-white-85-gsm": [
        "/images/products/jk-bond-paper-100-sheets.jpg",
        "/images/products/copier-paper.jpg"
    ],
    "sirpur-paper-green-ledger-paper-80-gsm-500-sheets": [
        "/images/products/sirpur-ledger-paper-ream.jpg",
        "/images/products/copier-paper.jpg"
    ],

    # 2. Fevicol MR Products - user uploaded high-res bottle & precision nozzle
    "fevicol-mr-general-purpose-adhesive-10g-squeezy-bottle-3": [
        "/images/products/fevicol-mr-bottle.png",
        "/images/products/fevicol-mr-nozzle.jpg"
    ],
    "fevicol-mr-general-purpose-adhesive-22-5g-squeezy-bottle-3": [
        "/images/products/fevicol-mr-bottle.png",
        "/images/products/fevicol-mr-nozzle.jpg"
    ],
    "fevicol-mr-general-purpose-adhesive-50g-bottle-3": [
        "/images/products/fevicol-mr-bottle.png",
        "/images/products/fevicol-mr-nozzle.jpg"
    ],
    "fevicol-mr-general-purpose-adhesive-100g-bottle-3": [
        "/images/products/fevicol-mr-bottle.png",
        "/images/products/fevicol-mr-nozzle.jpg"
    ],
    "fevicol-mr-general-purpose-adhesive-200g-jar-3": [
        "/images/products/fevicol-mr-bottle.png",
        "/images/products/fevicol-mr-nozzle.jpg"
    ],
    "fevicol-mr-general-purpose-adhesive-500g-dispenser-jar-3": [
        "/images/products/fevicol-mr-bottle.png",
        "/images/products/fevicol-mr-nozzle.jpg"
    ],

    # 3. Kangaro Staplers & Pins - user uploaded authentic packs & staplers
    "kangaro-stapler-no-10": [
        "/images/products/kangaro-stapler-no-10-combo.jpg",
        "/images/products/kangaro-stapler-pin-no-10-carton.jpg",
        "/images/products/kangaro-stapler-no-10.jpg"
    ],
    "kangaro-stapler-pin-no-10": [
        "/images/products/kangaro-stapler-pin-no-10-carton.jpg",
        "/images/products/kangaro-stapler-no-10-combo.jpg",
        "/images/products/kangaro-stapler-pin-no-10.jpg"
    ],
    "kangaro-stapler-pin-24-6": [
        "/images/products/kangaro-stapler-pin-24-6.jpg",
        "/images/products/kangaro-stapler-pin-26-6.jpg"
    ],
}

def update_products_file():
    with open(PRODUCTS_FILE, "r", encoding="utf-8") as f:
        content = f.read()

    match = re.search(r"export const PRODUCTS: Product\[\] = (\[[\s\S]*?\]);\s*$", content)
    if not match:
        raise ValueError("Could not extract PRODUCTS from products.ts")

    products = json.loads(re.sub(r",\s*([\]}])", r"\1", match.group(1)))

    updated_count = 0
    for p in products:
        slug = p["slug"]
        if slug in UPDATES:
            p["images"] = UPDATES[slug]
            updated_count += 1

    # Re-serialize products nicely
    prefix = content[:match.start(1)]
    suffix = content[match.end(1):]
    new_json = json.dumps(products, indent=2)
    # Ensure correct TS formatting
    new_content = prefix + new_json + suffix

    with open(PRODUCTS_FILE, "w", encoding="utf-8") as f:
        f.write(new_content)

    print(f"[+] Updated {updated_count} products in {PRODUCTS_FILE}")

def update_supabase():
    headers = {
        "apikey": SERVICE_KEY,
        "Authorization": f"Bearer {SERVICE_KEY}",
        "Content-Type": "application/json",
        "Prefer": "return=minimal"
    }

    success = 0
    for slug, images in UPDATES.items():
        url = f"{SUPABASE_URL}/rest/v1/products?slug=eq.{slug}"
        payload = {"images": images}
        try:
            r = requests.patch(url, headers=headers, json=payload, timeout=8)
            if r.status_code in (200, 204):
                print(f"  [+] Supabase updated: {slug} -> {len(images)} photos")
                success += 1
            else:
                print(f"  [-] Supabase update returned {r.status_code} for {slug}: {r.text}")
        except Exception as e:
            print(f"  [!] Supabase error for {slug}: {e}")

    print(f"[+] Successfully synced {success}/{len(UPDATES)} products in Supabase DB.")

if __name__ == "__main__":
    update_products_file()
    update_supabase()
