"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Plus,
  Trash2,
  Save,
  Image as ImageIcon,
  Sparkles,
  Info,
  Check,
} from "lucide-react";
import AdminHeader from "@/components/admin/AdminHeader";
import { useInventory } from "@/context/InventoryContext";
import { BulkTier } from "@/types";

export default function AdminNewProductPage() {
  const router = useRouter();
  const { addProduct } = useInventory();

  // Basic Information
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [sku, setSku] = useState("");
  const [category, setCategory] = useState("pens-pencils");
  const [subCategory, setSubCategory] = useState("ball-pens");

  // Pricing & Stock
  const [price, setPrice] = useState<number>(25);
  const [originalPrice, setOriginalPrice] = useState<number>(30);
  const [stock, setStock] = useState<number>(100);
  const [lowStockThreshold, setLowStockThreshold] = useState<number>(10);

  // Flags
  const [isBestseller, setIsBestseller] = useState(false);
  const [isEcoFriendly, setIsEcoFriendly] = useState(false);
  const [isNew, setIsNew] = useState(true);

  // Images
  const [images, setImages] = useState<string[]>([
    "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=900&auto=format&fit=crop",
  ]);

  // Descriptions & Highlights
  const [shortDescription, setShortDescription] = useState("");
  const [description, setDescription] = useState("");
  const [highlights, setHighlights] = useState<string[]>([
    "Premium quality stationery crafted for daily performance",
    "Durable & smooth writing experience",
  ]);

  // Bulk Pricing Tiers
  const [bulkPricing, setBulkPricing] = useState<BulkTier[]>([
    { minQty: 1, maxQty: 9, discountPercent: 0, pricePerUnit: 25 },
    { minQty: 10, maxQty: 49, discountPercent: 15, pricePerUnit: 21 },
    { minQty: 50, discountPercent: 30, pricePerUnit: 17 },
  ]);

  // Specifications
  const [specs, setSpecs] = useState<Array<{ key: string; value: string }>>([
    { key: "Brand", value: "Instant Stationary" },
    { key: "Origin", value: "Made in India" },
  ]);

  // Auto slug generator
  const handleNameChange = (val: string) => {
    setName(val);
    if (!slug || slug === name.toLowerCase().replace(/[^a-z0-9]+/g, "-")) {
      setSlug(
        val
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, "")
      );
    }
  };

  const handleAddImage = () => {
    setImages([...images, ""]);
  };

  const handleImageChange = (index: number, val: string) => {
    const updated = [...images];
    updated[index] = val;
    setImages(updated);
  };

  const handleRemoveImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleAddHighlight = () => setHighlights([...highlights, ""]);
  const handleHighlightChange = (index: number, val: string) => {
    const updated = [...highlights];
    updated[index] = val;
    setHighlights(updated);
  };
  const handleRemoveHighlight = (index: number) => {
    setHighlights(highlights.filter((_, i) => i !== index));
  };

  const handleAddSpec = () => setSpecs([...specs, { key: "", value: "" }]);
  const handleSpecChange = (index: number, field: "key" | "value", val: string) => {
    const updated = [...specs];
    updated[index][field] = val;
    setSpecs(updated);
  };
  const handleRemoveSpec = (index: number) => {
    setSpecs(specs.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !sku || !slug) {
      alert("Please fill in the Product Name, Slug, and SKU.");
      return;
    }

    const specificationsObj: Record<string, string> = {};
    specs.forEach((s) => {
      if (s.key.trim()) specificationsObj[s.key.trim()] = s.value.trim();
    });

    addProduct({
      name,
      slug,
      sku,
      category,
      subCategory,
      price: Number(price),
      originalPrice: originalPrice ? Number(originalPrice) : undefined,
      stock: Number(stock),
      lowStockThreshold: Number(lowStockThreshold),
      rating: 5.0,
      reviewCount: 1,
      isBestseller,
      isEcoFriendly,
      isNew,
      images: images.filter((img) => img.trim() !== ""),
      shortDescription: shortDescription || `${name} by Instant Stationary.`,
      description: description || shortDescription,
      highlights: highlights.filter((h) => h.trim() !== ""),
      specifications: specificationsObj,
      bulkPricing,
    });

    router.push("/admin/products");
  };

  return (
    <div className="pb-16">
      <AdminHeader
        title="Add New Stationery Item"
        subtitle="Create a new catalog item with live inventory, bulk discounts, and specifications"
        actions={
          <Link
            href="/admin/products"
            className="px-3.5 py-2 bg-white border border-[#E8E3DA] text-gray-700 text-xs font-bold uppercase tracking-wider hover:bg-gray-50 transition-colors flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Cancel</span>
          </Link>
        }
      />

      <form onSubmit={handleSubmit} className="p-4 sm:p-8 space-y-8 max-w-5xl mx-auto">
        {/* Section 1: Basic Information */}
        <div className="bg-white border border-[#E8E3DA] p-6 sm:p-8 shadow-soft space-y-4">
          <h3 className="font-serif font-bold text-base uppercase text-gray-900 border-b border-gray-100 pb-3">
            1. Basic Information
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="sm:col-span-2">
              <label className="block font-bold text-gray-700 mb-1">Product Title *</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => handleNameChange(e.target.value)}
                placeholder="e.g. Instant Premium Executive Hardbound Journal A5"
                className="w-full p-2.5 bg-[#FAF8F5] border border-[#E8E3DA] focus:outline-none focus:border-black font-semibold text-gray-900"
              />
            </div>

            <div>
              <label className="block font-bold text-gray-700 mb-1">URL Slug (URL Address) *</label>
              <input
                type="text"
                required
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="instant-premium-executive-journal-a5"
                className="w-full p-2.5 bg-[#FAF8F5] border border-[#E8E3DA] focus:outline-none focus:border-black font-mono text-[11px]"
              />
            </div>

            <div>
              <label className="block font-bold text-gray-700 mb-1">SKU Barcode / Item Code *</label>
              <input
                type="text"
                required
                value={sku}
                onChange={(e) => setSku(e.target.value)}
                placeholder="GS-NB-05"
                className="w-full p-2.5 bg-[#FAF8F5] border border-[#E8E3DA] focus:outline-none focus:border-black font-mono text-[11px]"
              />
            </div>

            <div>
              <label className="block font-bold text-gray-700 mb-1">Category *</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-2.5 bg-[#FAF8F5] border border-[#E8E3DA] focus:outline-none font-semibold"
              >
                <option value="pens-pencils">Pens & Pencils</option>
                <option value="notebooks-registers">Notebooks & Registers</option>
                <option value="art-craft">Art & Craft</option>
                <option value="office-supplies">Office Supplies</option>
                <option value="school-college">School & College</option>
                <option value="festive-gifts">Festive & Gifts</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-gray-700 mb-1">Subcategory</label>
              <input
                type="text"
                value={subCategory}
                onChange={(e) => setSubCategory(e.target.value)}
                placeholder="e.g. executive-journals"
                className="w-full p-2.5 bg-[#FAF8F5] border border-[#E8E3DA] focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Pricing & Live Inventory */}
        <div className="bg-white border border-[#E8E3DA] p-6 sm:p-8 shadow-soft space-y-4">
          <h3 className="font-serif font-bold text-base uppercase text-gray-900 border-b border-gray-100 pb-3">
            2. Pricing & Live Warehouse Stock
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs">
            <div>
              <label className="block font-bold text-gray-700 mb-1">Selling Price (₹) *</label>
              <input
                type="number"
                min="1"
                required
                value={price}
                onChange={(e) => setPrice(parseFloat(e.target.value) || 0)}
                className="w-full p-2.5 bg-[#FAF8F5] border border-[#E8E3DA] font-bold text-base text-gray-900 focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-bold text-gray-700 mb-1">Original M.R.P (₹)</label>
              <input
                type="number"
                min="1"
                value={originalPrice}
                onChange={(e) => setOriginalPrice(parseFloat(e.target.value) || 0)}
                className="w-full p-2.5 bg-[#FAF8F5] border border-[#E8E3DA] text-gray-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-bold text-gray-700 mb-1">Initial Stock Units *</label>
              <input
                type="number"
                min="0"
                required
                value={stock}
                onChange={(e) => setStock(parseInt(e.target.value) || 0)}
                className="w-full p-2.5 bg-[#FAF8F5] border border-black font-bold text-base text-gray-900 focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-bold text-gray-700 mb-1">Low Stock Alert Threshold</label>
              <input
                type="number"
                min="1"
                value={lowStockThreshold}
                onChange={(e) => setLowStockThreshold(parseInt(e.target.value) || 10)}
                className="w-full p-2.5 bg-[#FAF8F5] border border-[#E8E3DA] text-gray-700 focus:outline-none"
              />
            </div>
          </div>

          {/* Badges Toggles */}
          <div className="pt-2 flex flex-wrap gap-4 text-xs">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={isBestseller}
                onChange={(e) => setIsBestseller(e.target.checked)}
                className="rounded text-black"
              />
              <span className="font-semibold text-gray-800">Mark as Bestseller ⭐</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={isEcoFriendly}
                onChange={(e) => setIsEcoFriendly(e.target.checked)}
                className="rounded text-emerald-800"
              />
              <span className="font-semibold text-emerald-800">Eco-Friendly Certified 🌱</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={isNew}
                onChange={(e) => setIsNew(e.target.checked)}
                className="rounded text-black"
              />
              <span className="font-semibold text-gray-800">New Arrival Badge</span>
            </label>
          </div>
        </div>

        {/* Section 3: Product Photography */}
        <div className="bg-white border border-[#E8E3DA] p-6 sm:p-8 shadow-soft space-y-4">
          <div className="flex items-center justify-between border-b border-gray-100 pb-3">
            <h3 className="font-serif font-bold text-base uppercase text-gray-900">
              3. Product Photography (Image URLs)
            </h3>
            <button
              type="button"
              onClick={handleAddImage}
              className="text-xs font-bold text-[#B38E5D] hover:underline flex items-center gap-1"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Image URL</span>
            </button>
          </div>

          <div className="space-y-3">
            {images.map((img, idx) => (
              <div key={idx} className="flex items-center gap-3 text-xs">
                <div className="w-12 h-12 bg-[#FAF8F5] border border-gray-200 shrink-0 overflow-hidden flex items-center justify-center">
                  {img ? (
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  ) : (
                    <ImageIcon className="w-4 h-4 text-gray-400" />
                  )}
                </div>
                <input
                  type="url"
                  value={img}
                  onChange={(e) => handleImageChange(idx, e.target.value)}
                  placeholder="https://images.unsplash.com/photo-..."
                  className="flex-1 p-2.5 bg-[#FAF8F5] border border-[#E8E3DA] focus:outline-none focus:border-black font-mono text-[11px]"
                />
                {images.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(idx)}
                    className="p-2 text-gray-400 hover:text-red-600"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Descriptions & Specifications */}
        <div className="bg-white border border-[#E8E3DA] p-6 sm:p-8 shadow-soft space-y-4">
          <h3 className="font-serif font-bold text-base uppercase text-gray-900 border-b border-gray-100 pb-3">
            4. Descriptions & Highlights
          </h3>

          <div className="space-y-4 text-xs">
            <div>
              <label className="block font-bold text-gray-700 mb-1">Short Description (for Cards & PDP summary)</label>
              <input
                type="text"
                value={shortDescription}
                onChange={(e) => setShortDescription(e.target.value)}
                placeholder="Smooth writing, refillable, high-grade polymer body."
                className="w-full p-2.5 bg-[#FAF8F5] border border-[#E8E3DA] focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-bold text-gray-700 mb-1">Detailed Long Description</label>
              <textarea
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Full product background, manufacturing quality, paper GSM, and use cases..."
                className="w-full p-2.5 bg-[#FAF8F5] border border-[#E8E3DA] focus:outline-none"
              />
            </div>

            {/* Highlights */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-between">
                <label className="font-bold text-gray-700">Key Highlights Bullet Points</label>
                <button
                  type="button"
                  onClick={handleAddHighlight}
                  className="text-[11px] font-bold text-[#B38E5D] hover:underline flex items-center gap-1"
                >
                  <Plus className="w-3 h-3" />
                  <span>Add Highlight</span>
                </button>
              </div>
              {highlights.map((h, i) => (
                <div key={i} className="flex gap-2">
                  <input
                    type="text"
                    value={h}
                    onChange={(e) => handleHighlightChange(i, e.target.value)}
                    placeholder="e.g. 70 GSM thick paper prevents ink bleed"
                    className="flex-1 p-2 bg-[#FAF8F5] border border-[#E8E3DA] text-xs focus:outline-none"
                  />
                  {highlights.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveHighlight(i)}
                      className="p-2 text-gray-400 hover:text-red-600"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Specifications */}
            <div className="space-y-2 pt-2 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <label className="font-bold text-gray-700">Technical Specifications (Key - Value)</label>
                <button
                  type="button"
                  onClick={handleAddSpec}
                  className="text-[11px] font-bold text-[#B38E5D] hover:underline flex items-center gap-1"
                >
                  <Plus className="w-3 h-3" />
                  <span>Add Spec</span>
                </button>
              </div>
              {specs.map((s, i) => (
                <div key={i} className="flex gap-2">
                  <input
                    type="text"
                    value={s.key}
                    onChange={(e) => handleSpecChange(i, "key", e.target.value)}
                    placeholder="Specification Name (e.g. GSM)"
                    className="w-1/3 p-2 bg-[#FAF8F5] border border-[#E8E3DA] text-xs focus:outline-none font-bold"
                  />
                  <input
                    type="text"
                    value={s.value}
                    onChange={(e) => handleSpecChange(i, "value", e.target.value)}
                    placeholder="Value (e.g. 80 GSM Acid-Free)"
                    className="flex-1 p-2 bg-[#FAF8F5] border border-[#E8E3DA] text-xs focus:outline-none"
                  />
                  {specs.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveSpec(i)}
                      className="p-2 text-gray-400 hover:text-red-600"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Submit Actions */}
        <div className="flex justify-end gap-3 pt-4 border-t border-[#E8E3DA]">
          <Link
            href="/admin/products"
            className="px-6 py-3 bg-white border border-[#E8E3DA] text-gray-700 text-xs font-bold uppercase tracking-wider hover:bg-gray-100"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="px-8 py-3 bg-[#1C1C1C] text-white text-xs font-bold uppercase tracking-luxury hover:bg-[#B38E5D] transition-colors flex items-center gap-2 shadow-lg"
          >
            <Save className="w-4 h-4" />
            <span>Publish Product to Store</span>
          </button>
        </div>
      </form>
    </div>
  );
}
