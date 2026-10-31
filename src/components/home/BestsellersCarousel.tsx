"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/products/ProductCard";
import { PRODUCTS } from "@/data/products";
import { useInventory } from "@/context/InventoryContext";

export default function BestsellersCarousel() {
  const { products } = useInventory();
  const [activeTab, setActiveTab] = useState<"bestsellers" | "eco" | "all">("bestsellers");

  const liveList = products.length > 0 ? products : PRODUCTS;
  const bestsellers = liveList.filter((p) => p.isBestseller);
  const ecoProducts = liveList.filter((p) => p.isEcoFriendly);

  const displayedProducts =
    activeTab === "bestsellers"
      ? (bestsellers.length > 0 ? bestsellers.slice(0, 8) : liveList.slice(0, 8))
      : activeTab === "eco"
      ? (ecoProducts.length > 0 ? ecoProducts.slice(0, 8) : liveList.slice(0, 8))
      : liveList.slice(0, 8);

  return (
    <section className="py-16 sm:py-20 bg-[#FBFBFA] border-y border-[#EAE6DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6 border-b border-[#EAE6DF] pb-5">
          <div>
            <span className="text-[11px] uppercase tracking-[0.18em] font-medium text-[#967448]">
              Verified Favorites
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#141416] mt-1.5">
              Bestselling Stationery
            </h2>
          </div>

          {/* Minimalist Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <button
              onClick={() => setActiveTab("bestsellers")}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all whitespace-nowrap ${
                activeTab === "bestsellers"
                  ? "bg-[#18181B] text-white shadow-xs"
                  : "bg-white text-[#57534E] hover:text-black border border-[#EAE6DF]"
              }`}
            >
              Top Bestsellers
            </button>
            <button
              onClick={() => setActiveTab("eco")}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all whitespace-nowrap ${
                activeTab === "eco"
                  ? "bg-[#18181B] text-white shadow-xs"
                  : "bg-white text-[#57534E] hover:text-black border border-[#EAE6DF]"
              }`}
            >
              Eco-Friendly
            </button>
            <button
              onClick={() => setActiveTab("all")}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all whitespace-nowrap ${
                activeTab === "all"
                  ? "bg-[#18181B] text-white shadow-xs"
                  : "bg-white text-[#57534E] hover:text-black border border-[#EAE6DF]"
              }`}
            >
              All Essentials
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Footer CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#18181B] hover:bg-[#967448] text-white text-xs font-semibold uppercase tracking-wider transition-colors rounded-sm shadow-sm"
          >
            <span>Browse Full 142 Products Catalog</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
