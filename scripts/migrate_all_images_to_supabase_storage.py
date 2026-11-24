#!/usr/bin/env python3
"""
Upload all product images to Supabase Storage bucket 'product-images'
and update database records and data files to use the cloud storage URLs.
"""

import os
import re
import json
import mimetypes
from concurrent.futures import ThreadPoolExecutor, as_completed
import requests

SUPABASE_URL = "https://ggumahzbwhgvgortfnvz.supabase.co"
SERVICE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdndW1haHpid2hndmdvcnRmbnZ6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc5MTI4Mjk5OSwiZXhwIjoyMTA2ODU4OTk5fQ.jsxlZeC_6BEJKCmDtpkFF077CYbmVHS0k0n_pG-0Y3o"
BUCKET = "product-images"
STORAGE_BASE_URL = f"{SUPABASE_URL}/storage/v1/object/public/{BUCKET}"
PRODUCTS_DIR = "public/images/products"
PRODUCTS_FILE = "src/data/products.ts"

def upload_single_file(filename: str) -> tuple[str, bool, str]:
    filepath = os.path.join(PRODUCTS_DIR, filename)
    mime_type, _ = mimetypes.guess_type(filepath)
    if not mime_type:
        mime_type = "image/jpeg"

    url = f"{SUPABASE_URL}/storage/v1/object/{BUCKET}/{filename}"
    headers = {
        "apikey": SERVICE_KEY,
        "Authorization": f"Bearer {SERVICE_KEY}",
        "Content-Type": mime_type,
        "x-upsert": "true"
    }

    try:
        with open(filepath, "rb") as f:
            data = f.read()
        res = requests.post(url, headers=headers, data=data, timeout=15)
        if res.status_code in (200, 201):
            return filename, True, "OK"
        else:
            return filename, False, f"HTTP {res.status_code}: {res.text}"
    except Exception as e:
        return filename, False, str(e)

def main():
    print(f"Step 1: Uploading all images from {PRODUCTS_DIR} to Supabase bucket '{BUCKET}'...")
    files = [f for f in sorted(os.listdir(PRODUCTS_DIR)) if f.endswith(('.jpg', '.png', '.webp', '.jpeg'))]
    print(f"Found {len(files)} files to upload.")

    success_count = 0
    fail_count = 0

    with ThreadPoolExecutor(max_workers=10) as executor:
        futures = {executor.submit(upload_single_file, f): f for f in files}
        for future in as_completed(futures):
            fname, success, msg = future.result()
            if success:
                success_count += 1
                if success_count % 25 == 0 or success_count == len(files):
                    print(f"  [+] Uploaded {success_count}/{len(files)} images...")
            else:
                fail_count += 1
                print(f"  [-] Failed {fname}: {msg}")

    print(f"Upload complete: {success_count} succeeded, {fail_count} failed.\n")

    print("Step 2: Fetching all products from Supabase and updating image URLs...")
    headers = {
        "apikey": SERVICE_KEY,
        "Authorization": f"Bearer {SERVICE_KEY}",
        "Content-Type": "application/json",
        "Prefer": "return=minimal"
    }

    # Fetch all products
    fetch_url = f"{SUPABASE_URL}/rest/v1/products?select=id,slug,images"
    r = requests.get(fetch_url, headers=headers)
    if r.status_code != 200:
        print(f"Failed to fetch products: {r.status_code} {r.text}")
        return

    db_products = r.json()
    print(f"Fetched {len(db_products)} products from Supabase.")

    updated_db = 0
    for prod in db_products:
        slug = prod["slug"]
        old_images = prod.get("images") or []
        new_images = []
        for img in old_images:
            if img.startswith("/images/products/"):
                basename = img.replace("/images/products/", "")
                new_images.append(f"{STORAGE_BASE_URL}/{basename}")
            elif img.startswith(STORAGE_BASE_URL):
                new_images.append(img)
            else:
                # Keep external or other URLs as is
                new_images.append(img)

        if new_images != old_images:
            patch_url = f"{SUPABASE_URL}/rest/v1/products?slug=eq.{slug}"
            patch_res = requests.patch(patch_url, headers=headers, json={"images": new_images}, timeout=5)
            if patch_res.status_code in (200, 204):
                updated_db += 1

    print(f"Updated {updated_db} products in Supabase to use {STORAGE_BASE_URL}.\n")

    print(f"Step 3: Updating {PRODUCTS_FILE}...")
    with open(PRODUCTS_FILE, "r") as f:
        code = f.read()

    # Replace relative /images/products/ paths with Supabase Storage base URL
    updated_code = code.replace('"/images/products/', f'"{STORAGE_BASE_URL}/')

    with open(PRODUCTS_FILE, "w") as f:
        f.write(updated_code)
    print(f"Updated {PRODUCTS_FILE} successfully.\n")

    print("Step 4: Verification sample:")
    verify_res = requests.get(f"{SUPABASE_URL}/rest/v1/products?select=slug,images&limit=3", headers=headers)
    for p in verify_res.json():
        print(" ", p["slug"], "->", p["images"])

if __name__ == "__main__":
    main()
