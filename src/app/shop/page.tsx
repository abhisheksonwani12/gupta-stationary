"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Filter, SlidersHorizontal, ChevronDown, Check, X, RotateCcw } from "lucide-react";
import ProductCard from "@/components/products/ProductCard";
import { CATEGORIES } from "@/data/products";
import { useInventory } from "@/context/InventoryContext";
import { Product } from "@/types";

function ShopContent() {
  const { products: liveProducts } = useInventory();
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get("q") || "";
  const initialCategory = searchParams.get("category") || "all";

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("all");
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [sortBy, setSortBy] = useState<string>("bestselling");
  const [onlyEcoFriendly, setOnlyEcoFriendly] = useState<boolean>(false);
  const [mobileFilterOpen, setMobileFilterOpen] = useState<boolean>(false);

  const PRICE_RANGES = [
    { label: "All Prices", value: "all", min: 0, max: 99999 },
    { label: "Under ₹50", value: "0-50", min: 0, max: 50 },
    { label: "₹50 - ₹150", value: "50-150", min: 50, max: 150 },
    { label: "₹150 - ₹500", value: "150-500", min: 150, max: 500 },
    { label: "₹500 & Above", value: "500+", min: 500, max: 99999 },
  ];

  // Filtering Logic
  const filteredProducts = useMemo(() => {
    let list = [...liveProducts];

    // Search query
    if (initialSearch.trim()) {
      const q = initialSearch.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.sku.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    // Category filter
    if (selectedCategory !== "all") {
      list = list.filter((p) => p.category === selectedCategory);
    }

    // Eco filter
    if (onlyEcoFriendly) {
      list = list.filter((p) => p.isEcoFriendly);
    }

    // Price range filter
    if (selectedPriceRange !== "all") {
      const range = PRICE_RANGES.find((r) => r.value === selectedPriceRange);
      if (range) {
        list = list.filter((p) => p.price >= range.min && p.price <= range.max);
      }
    }

    // Rating filter
    if (selectedRating > 0) {
      list = list.filter((p) => p.rating >= selectedRating);
    }

    // Sorting
    if (sortBy === "price-low") {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      list.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "reviews") {
      list.sort((a, b) => b.reviewCount - a.reviewCount);
    } else {
      // Default: bestsellers first
      list.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
    }

    return list;
  }, [initialSearch, selectedCategory, onlyEcoFriendly, selectedPriceRange, selectedRating, sortBy]);

  const resetFilters = () => {
    setSelectedCategory("all");
    setSelectedPriceRange("all");
    setSelectedRating(0);
    setOnlyEcoFriendly(false);
    setSortBy("bestselling");
  };

  const hasActiveFilters =
    selectedCategory !== "all" ||
    selectedPriceRange !== "all" ||
    selectedRating > 0 ||
    onlyEcoFriendly;

  return (
    <div className="bg-white min-h-screen">
      {/* Catalog Banner Header */}
      <div className="bg-[#FAF8F5] border-b border-[#E8E3DA] py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-[#706E6B] mb-2 uppercase tracking-wider">
            <Link href="/" className="hover:text-black">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#1C1C1C] font-semibold">Catalog</span>
            {initialSearch && <span>/ Search: &quot;{initialSearch}&quot;</span>}
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#1C1C1C]">
            All Stationery Products & Supplies
          </h1>
          <p className="text-xs sm:text-sm text-[#706E6B] mt-2 max-w-2xl">
            Explore 24+ high quality writing instruments, notebooks, paper reams, office filing systems, school geometry sets, and eco-friendly products at direct-from-manufacturer prices.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Filter Controls Bar (Mobile & Desktop Top) */}
        <div className="flex flex-wrap items-center justify-between pb-6 mb-8 border-b border-[#E8E3DA] gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-1.5 px-4 py-2 border border-[#E8E3DA] bg-[#FAF8F5] text-xs font-bold uppercase tracking-wider"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Filters</span>
            </button>
            <span className="text-xs font-semibold text-[#706E6B]">
              Showing <strong className="text-black">{filteredProducts.length}</strong> of {liveProducts.length} products
            </span>
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 text-xs font-medium">
            <span className="text-gray-500 uppercase tracking-wider">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#FAF8F5] border border-[#E8E3DA] px-3 py-1.5 text-xs font-semibold text-gray-900 focus:outline-none focus:border-black cursor-pointer"
            >
              <option value="bestselling">⭐ Best Selling</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="reviews">Most Reviewed</option>
            </select>
          </div>
        </div>

        {/* Main 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Desktop Filter Sidebar */}
          <div className="hidden lg:block space-y-6 text-xs">
            {/* Header / Clear */}
            <div className="flex items-center justify-between pb-3 border-b border-[#E8E3DA]">
              <span className="font-bold uppercase tracking-luxury text-[#1C1C1C]">
                Filter Products
              </span>
              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="flex items-center gap-1 text-[11px] text-[#B38E5D] hover:underline font-medium"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset All</span>
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="space-y-2">
              <h4 className="font-bold uppercase tracking-wider text-gray-900">Categories</h4>
              <div className="space-y-1">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`w-full text-left py-1.5 px-2 text-xs flex justify-between rounded transition-colors ${
                    selectedCategory === "all"
                      ? "bg-[#1C1C1C] text-white font-bold"
                      : "text-gray-700 hover:bg-[#FAF8F5]"
                  }`}
                >
                  <span>All Categories</span>
                  <span>{liveProducts.length}</span>
                </button>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.slug)}
                    className={`w-full text-left py-1.5 px-2 text-xs flex justify-between rounded transition-colors ${
                      selectedCategory === cat.slug
                        ? "bg-[#1C1C1C] text-white font-bold"
                        : "text-gray-700 hover:bg-[#FAF8F5]"
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span>{cat.itemCount}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Eco-Friendly Toggle */}
            <div className="pt-4 border-t border-[#E8E3DA]">
              <label className="flex items-center gap-2.5 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={onlyEcoFriendly}
                  onChange={(e) => setOnlyEcoFriendly(e.target.checked)}
                  className="w-4 h-4 rounded text-black focus:ring-0 cursor-pointer"
                />
                <span className="font-semibold text-emerald-800">
                  🌱 Eco-Friendly Range Only
                </span>
              </label>
            </div>

            {/* Price Range Filter */}
            <div className="pt-4 border-t border-[#E8E3DA] space-y-2">
              <h4 className="font-bold uppercase tracking-wider text-gray-900">Price Range</h4>
              <div className="space-y-1">
                {PRICE_RANGES.map((r) => (
                  <label key={r.value} className="flex items-center gap-2 text-gray-700 cursor-pointer py-1">
                    <input
                      type="radio"
                      name="price-range"
                      checked={selectedPriceRange === r.value}
                      onChange={() => setSelectedPriceRange(r.value)}
                      className="cursor-pointer"
                    />
                    <span>{r.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Rating Filter */}
            <div className="pt-4 border-t border-[#E8E3DA] space-y-2">
              <h4 className="font-bold uppercase tracking-wider text-gray-900">Customer Rating</h4>
              <div className="space-y-1">
                {[
                  { label: "4.5★ and above", val: 4.5 },
                  { label: "4.0★ and above", val: 4.0 },
                  { label: "3.5★ and above", val: 3.5 },
                  { label: "All Ratings", val: 0 },
                ].map((rate) => (
                  <label key={rate.val} className="flex items-center gap-2 text-gray-700 cursor-pointer py-1">
                    <input
                      type="radio"
                      name="rating-filter"
                      checked={selectedRating === rate.val}
                      onChange={() => setSelectedRating(rate.val)}
                      className="cursor-pointer"
                    />
                    <span>{rate.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Bulk Banner Card */}
            <div className="p-4 bg-[#FAF8F5] border border-[#E8E3DA] text-xs space-y-2">
              <span className="text-[10px] uppercase font-bold text-[#B38E5D] tracking-wider block">
                Wholesale Orders
              </span>
              <h5 className="font-bold text-gray-900">Buying 50+ Units?</h5>
              <p className="text-gray-500">
                Get up to 60% off retail pricing plus same-day delivery in Raipur.
              </p>
              <Link
                href="/bulk-orders"
                className="inline-block mt-2 font-bold text-black hover:underline"
              >
                Request Bulk Quote →
              </Link>
            </div>
          </div>

          {/* Product Grid Area */}
          <div className="lg:col-span-3">
            {filteredProducts.length === 0 ? (
              <div className="bg-[#FAF8F5] border border-[#E8E3DA] p-12 text-center rounded-none">
                <h3 className="text-base font-bold text-gray-900 mb-2">No products found</h3>
                <p className="text-xs text-gray-500 mb-6 max-w-sm mx-auto">
                  No products matched your active filters. Try clearing some filters to see all available stationery items.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-6 py-3 bg-[#1C1C1C] text-white text-xs font-bold uppercase tracking-luxury hover:bg-[#333333] transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center">Loading catalog...</div>}>
      <ShopContent />
    </Suspense>
  );
}
