"use client";

import React, { use, useState, useMemo } from "react";
import Link from "next/link";
import { PRODUCTS, CATEGORIES } from "@/data/products";
import { useInventory } from "@/context/InventoryContext";
import ProductCard from "@/components/products/ProductCard";
import { ArrowLeft, ChevronDown } from "lucide-react";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

const CATEGORY_ALIASES: Record<string, string> = {
  "paper-products": "copier-paper",
  "office-supplies": "office-stationery",
  "school-supplies": "notebooks-notepads",
};

export default function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = use(params);
  const rawSlug = resolvedParams.category;
  const categorySlug = CATEGORY_ALIASES[rawSlug] || rawSlug;
  const { products } = useInventory();
  const [selectedSub, setSelectedSub] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("featured");

  const category = CATEGORIES.find((c) => c.slug === categorySlug);

  const liveList = products.length > 0 ? products : PRODUCTS;
  const baseCategoryProducts = useMemo(() => {
    return liveList.filter(
      (p) => p.category === categorySlug || (rawSlug && p.category === rawSlug)
    );
  }, [liveList, categorySlug, rawSlug]);

  const displayedProducts = useMemo(() => {
    let list = [...baseCategoryProducts];
    if (selectedSub !== "all") {
      list = list.filter(
        (p) => p.subCategory?.toLowerCase() === selectedSub.toLowerCase()
      );
    }
    if (sortBy === "price-asc") {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      list.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }
    return list;
  }, [baseCategoryProducts, selectedSub, sortBy]);

  if (!category) {
    return (
      <div className="bg-[#FAF8F5] min-h-[70vh] flex flex-col items-center justify-center px-4 py-16 text-center">
        <div className="max-w-md mx-auto space-y-4">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#8A8780]">
            Catalog
          </span>
          <h1 className="text-2xl sm:text-3xl font-medium text-[#18181B] tracking-tight">
            Category Not Found
          </h1>
          <p className="text-xs sm:text-sm text-[#706E6B] leading-relaxed">
            This collection may have moved or been consolidated into our primary catalog.
          </p>
          <div className="pt-2">
            <Link
              href="/shop"
              className="inline-block px-6 py-2.5 bg-[#18181B] text-white text-xs font-medium uppercase tracking-wider hover:bg-[#967448] transition-colors rounded-sm"
            >
              Browse All Collections
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FDFCFB] min-h-screen">
      {/* Category Hero Header */}
      <div className="bg-white border-b border-[#EAE6DF] py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-xs text-[#8A8780] mb-3">
            <Link href="/" className="hover:text-[#18181B] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-[#18181B] transition-colors">
              Catalog
            </Link>
            <span>/</span>
            <span className="text-[#18181B] font-medium">{category.name}</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#8A8780] block mb-1">
                Collection
              </span>
              <h1 className="text-2xl sm:text-4xl font-serif text-[#18181B] tracking-tight">
                {category.name}
              </h1>
              <p className="text-xs sm:text-sm text-[#706E6B] mt-2 leading-relaxed">
                {category.description}
              </p>
            </div>

            {/* Subcategory Filter Pills */}
            {category.subcategories && category.subcategories.length > 0 && (
              <div className="flex flex-wrap gap-1.5 items-center">
                <button
                  onClick={() => setSelectedSub("all")}
                  className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                    selectedSub === "all"
                      ? "bg-[#18181B] text-white border-[#18181B]"
                      : "bg-[#F7F5F0] text-[#706E6B] border-[#EAE6DF] hover:border-gray-400"
                  }`}
                >
                  All ({baseCategoryProducts.length})
                </button>
                {category.subcategories.map((sub: string) => {
                  const count = baseCategoryProducts.filter(
                    (p) => p.subCategory?.toLowerCase() === sub.toLowerCase()
                  ).length;
                  return (
                    <button
                      key={sub}
                      onClick={() => setSelectedSub(sub)}
                      className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                        selectedSub.toLowerCase() === sub.toLowerCase()
                          ? "bg-[#18181B] text-white border-[#18181B]"
                          : "bg-[#F7F5F0] text-[#706E6B] border-[#EAE6DF] hover:border-gray-400"
                      }`}
                    >
                      {sub} {count > 0 ? `(${count})` : ""}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Controls bar */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#EAE6DF]">
          <Link
            href="/shop"
            className="flex items-center gap-1.5 text-xs font-medium text-[#706E6B] hover:text-[#18181B] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Collections</span>
          </Link>

          <div className="flex items-center gap-4">
            <span className="text-xs text-[#8A8780]">
              Showing {displayedProducts.length} of {baseCategoryProducts.length} Items
            </span>

            {/* Sort selector */}
            <div className="relative">
              <select
                aria-label="Sort products by"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-[#F7F5F0] border border-[#EAE6DF] text-xs text-[#18181B] pl-2.5 pr-7 py-1 rounded-sm focus:outline-none focus:border-[#18181B] cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown className="w-3 h-3 text-[#706E6B] absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {displayedProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {displayedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white border border-[#EAE6DF] p-8 rounded-md">
            <p className="text-sm text-gray-700">No products found matching this filter.</p>
            <button
              onClick={() => setSelectedSub("all")}
              className="mt-3 px-4 py-2 bg-[#18181B] text-white text-xs font-medium uppercase tracking-wider hover:bg-[#967448] transition-colors rounded-sm"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
