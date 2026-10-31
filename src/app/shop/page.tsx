"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { SlidersHorizontal, RotateCcw, X } from "lucide-react";
import ProductCard from "@/components/products/ProductCard";
import { CATEGORIES } from "@/data/products";
import { useInventory } from "@/context/InventoryContext";

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

  // Quick Category Pills
  const quickPills = [
    { label: "All", slug: "all", count: liveProducts.length },
    { label: "Pens & Writing", slug: "pens-pencils" },
    { label: "Notebooks", slug: "notebooks-notepads" },
    { label: "Copier Paper", slug: "copier-paper" },
    { label: "Office Supplies", slug: "office-stationery" },
    { label: "Registers", slug: "registers-notebooks" },
  ];

  // Filtering Logic
  const filteredProducts = useMemo(() => {
    let list = [...liveProducts];

    // Search query
    if (initialSearch.trim()) {
      const q = initialSearch.toLowerCase();
      list = list.filter(
        (p) =>
          p.name?.toLowerCase().includes(q) ||
          p.category?.toLowerCase().includes(q) ||
          p.sku?.toLowerCase().includes(q) ||
          p.description?.toLowerCase().includes(q)
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
      list.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
    }

    return list;
  }, [liveProducts, initialSearch, selectedCategory, onlyEcoFriendly, selectedPriceRange, selectedRating, sortBy]);

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
      <div className="bg-[#FBFBFA] border-b border-[#EAE6DF] py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-[#8A8780] mb-2">
            <Link href="/" className="hover:text-black">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#18181B] font-medium">Catalog</span>
            {initialSearch && <span>/ Search: &quot;{initialSearch}&quot;</span>}
          </div>

          <h1 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-[#141416]">
            Stationery & Supplies Catalog
          </h1>
          <p className="text-xs sm:text-sm text-[#78716C] mt-1.5 max-w-xl">
            Explore {liveProducts.length} certified stationery items, pens, notebooks, paper reams, and institutional office supplies at direct manufacturer rates.
          </p>

          {/* Quick Category Chips */}
          <div className="flex items-center gap-2 mt-6 overflow-x-auto pb-1 scrollbar-none">
            {quickPills.map((pill) => {
              const isActive = selectedCategory === pill.slug;
              return (
                <button
                  key={pill.slug}
                  onClick={() => setSelectedCategory(pill.slug)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all whitespace-nowrap ${
                    isActive
                      ? "bg-[#18181B] text-white shadow-xs"
                      : "bg-white text-[#57534E] hover:text-black border border-[#EAE6DF]"
                  }`}
                >
                  {pill.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {/* Filter Controls Bar */}
        <div className="flex flex-wrap items-center justify-between pb-5 mb-8 border-b border-[#EAE6DF] gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-1.5 px-3.5 py-1.5 border border-[#EAE6DF] bg-[#FBFBFA] text-xs font-medium rounded"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Filters</span>
            </button>
            <span className="text-xs text-[#78716C]">
              Showing <strong className="text-[#18181B] font-semibold">{filteredProducts.length}</strong> items
            </span>
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-[#8A8780]">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#FBFBFA] border border-[#EAE6DF] px-3 py-1.5 text-xs font-medium text-[#18181B] rounded focus:outline-none focus:border-[#18181B] cursor-pointer"
            >
              <option value="bestselling">Best Selling</option>
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
            <div className="flex items-center justify-between pb-3 border-b border-[#EAE6DF]">
              <span className="font-semibold uppercase tracking-wider text-[#18181B]">
                Filters
              </span>
              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="flex items-center gap-1 text-[11px] text-[#967448] hover:underline font-medium"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="space-y-2">
              <h4 className="font-semibold uppercase tracking-wider text-[#18181B] text-[11px]">
                Category
              </h4>
              <div className="space-y-1">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`w-full text-left py-1.5 px-2.5 text-xs flex justify-between rounded transition-colors ${
                    selectedCategory === "all"
                      ? "bg-[#18181B] text-white font-medium"
                      : "text-[#57534E] hover:bg-[#FBFBFA]"
                  }`}
                >
                  <span>All Categories</span>
                  <span>{liveProducts.length}</span>
                </button>
                {CATEGORIES.slice(0, 7).map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.slug)}
                    className={`w-full text-left py-1.5 px-2.5 text-xs flex justify-between rounded transition-colors ${
                      selectedCategory === cat.slug
                        ? "bg-[#18181B] text-white font-medium"
                        : "text-[#57534E] hover:bg-[#FBFBFA]"
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span>{cat.itemCount}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Eco Filter */}
            <div className="pt-4 border-t border-[#EAE6DF]">
              <label className="flex items-center gap-2.5 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={onlyEcoFriendly}
                  onChange={(e) => setOnlyEcoFriendly(e.target.checked)}
                  className="w-4 h-4 rounded text-black focus:ring-0 cursor-pointer"
                />
                <span className="font-medium text-emerald-800">
                  Eco-Friendly Only
                </span>
              </label>
            </div>

            {/* Price Range */}
            <div className="pt-4 border-t border-[#EAE6DF] space-y-2">
              <h4 className="font-semibold uppercase tracking-wider text-[#18181B] text-[11px]">
                Price
              </h4>
              <div className="space-y-1">
                {PRICE_RANGES.map((r) => (
                  <label key={r.value} className="flex items-center gap-2 text-[#57534E] cursor-pointer py-1">
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

            {/* Bulk Assistance Box */}
            <div className="p-4 bg-[#FBFBFA] border border-[#EAE6DF] rounded text-xs space-y-1.5">
              <span className="text-[10px] uppercase font-semibold text-[#967448] tracking-wider block">
                Wholesale Desk
              </span>
              <p className="text-[#57534E]">
                Need cartons or institutional supply? Get quotes with GST invoice in 2 hours.
              </p>
              <Link
                href="/bulk-orders"
                className="inline-block pt-1 font-semibold text-[#18181B] hover:text-[#967448]"
              >
                Request Custom Quote →
              </Link>
            </div>
          </div>

          {/* Product Grid Area */}
          <div className="lg:col-span-3">
            {filteredProducts.length === 0 ? (
              <div className="bg-[#FBFBFA] border border-[#EAE6DF] p-12 text-center rounded">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">No products found</h3>
                <p className="text-xs text-gray-500 mb-5 max-w-sm mx-auto">
                  No products matched your filter selection. Try clearing filters to see all available items.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-5 py-2.5 bg-[#18181B] hover:bg-[#967448] text-white text-xs font-semibold uppercase tracking-wider transition-colors rounded-sm"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 flex justify-end">
          <div className="w-80 max-w-full bg-white h-full p-6 overflow-y-auto space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#EAE6DF]">
              <span className="font-semibold text-sm">Filters</span>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="p-1 hover:text-black text-gray-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Category Select */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Category
              </h4>
              <div className="space-y-1">
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setMobileFilterOpen(false);
                  }}
                  className={`w-full text-left py-2 px-3 text-xs rounded ${
                    selectedCategory === "all" ? "bg-black text-white font-medium" : "bg-gray-50"
                  }`}
                >
                  All Categories ({liveProducts.length})
                </button>
                {CATEGORIES.slice(0, 7).map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.slug);
                      setMobileFilterOpen(false);
                    }}
                    className={`w-full text-left py-2 px-3 text-xs rounded ${
                      selectedCategory === cat.slug ? "bg-black text-white font-medium" : "bg-gray-50"
                    }`}
                  >
                    {cat.name} ({cat.itemCount})
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                resetFilters();
                setMobileFilterOpen(false);
              }}
              className="w-full py-2.5 bg-gray-100 text-gray-800 text-xs font-medium rounded hover:bg-gray-200"
            >
              Reset All Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-sm text-gray-500">Loading catalog...</div>}>
      <ShopContent />
    </Suspense>
  );
}
