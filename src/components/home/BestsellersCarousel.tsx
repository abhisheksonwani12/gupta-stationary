"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import ProductCard from "@/components/products/ProductCard";
import { PRODUCTS } from "@/data/products";

export default function BestsellersCarousel() {
  const [activeTab, setActiveTab] = useState<"bestsellers" | "eco" | "all">("bestsellers");

  const bestsellers = PRODUCTS.filter((p) => p.isBestseller);
  const ecoProducts = PRODUCTS.filter((p) => p.isEcoFriendly);

  const displayedProducts =
    activeTab === "bestsellers"
      ? bestsellers.slice(0, 8)
      : activeTab === "eco"
      ? ecoProducts.slice(0, 8)
      : PRODUCTS.slice(0, 8);

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 border-b border-[#E8E3DA] pb-6">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#B38E5D]">
              Most Loved Products
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold uppercase tracking-tight text-[#1C1C1C] mt-1">
              Raipur&apos;s Bestsellers
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto pb-1">
            <button
              onClick={() => setActiveTab("bestsellers")}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-luxury transition-all whitespace-nowrap ${
                activeTab === "bestsellers"
                  ? "bg-[#1C1C1C] text-white"
                  : "bg-[#FAF8F5] text-gray-700 hover:bg-gray-200 border border-[#E8E3DA]"
              }`}
            >
              ⭐ Top Bestsellers
            </button>
            <button
              onClick={() => setActiveTab("eco")}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-luxury transition-all whitespace-nowrap ${
                activeTab === "eco"
                  ? "bg-[#1C1C1C] text-white"
                  : "bg-[#FAF8F5] text-gray-700 hover:bg-gray-200 border border-[#E8E3DA]"
              }`}
            >
              🌱 Eco-Friendly Range
            </button>
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-luxury transition-all whitespace-nowrap ${
                activeTab === "all"
                  ? "bg-[#1C1C1C] text-white"
                  : "bg-[#FAF8F5] text-gray-700 hover:bg-gray-200 border border-[#E8E3DA]"
              }`}
            >
              All Essentials
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Footer CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1C1C1C] text-white text-xs font-bold uppercase tracking-luxury hover:bg-[#B38E5D] transition-colors shadow-md"
          >
            <span>Browse Full 24+ Product Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
