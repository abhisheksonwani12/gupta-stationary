"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS, CATEGORIES } from "@/data/products";
import { useInventory } from "@/context/InventoryContext";
import ProductCard from "@/components/products/ProductCard";
import { ArrowLeft, Sparkles } from "lucide-react";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = use(params);
  const categorySlug = resolvedParams.category;
  const { products } = useInventory();
  
  const category = CATEGORIES.find((c) => c.slug === categorySlug);

  if (!category) {
    notFound();
  }

  const liveList = products.length > 0 ? products : PRODUCTS;
  const categoryProducts = liveList.filter((p) => p.category === categorySlug);

  return (
    <div className="bg-white min-h-screen selection:bg-[#B38E5D] selection:text-white">
      {/* Category Hero Header */}
      <div className="bg-[#FAF8F5] border-b border-[#E8E3DA] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-[#706E6B] mb-3 uppercase tracking-wider">
            <Link href="/" className="hover:text-black">
              Home
            </Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-black">
              Catalog
            </Link>
            <span>/</span>
            <span className="text-[#1C1C1C] font-semibold">{category.name}</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#B38E5D]">
                Instant Collection
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#1C1C1C] mt-1">
                {category.name}
              </h1>
              <p className="text-xs sm:text-sm text-[#706E6B] mt-2 leading-relaxed">
                {category.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.subcategories.map((sub: string) => (
                <span
                  key={sub}
                  className="px-3 py-1.5 bg-white border border-[#E8E3DA] text-xs font-semibold text-gray-800"
                >
                  {sub}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#E8E3DA]">
          <Link
            href="/shop"
            className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-600 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Collections</span>
          </Link>
          <span className="text-xs text-gray-500 font-medium">
            Showing {categoryProducts.length} Items
          </span>
        </div>

        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#FAF8F5] border border-[#E8E3DA] p-8">
            <p className="font-serif text-lg text-gray-800">No products found in this category yet.</p>
            <Link
              href="/shop"
              className="mt-4 inline-block px-6 py-2.5 bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-[#B38E5D]"
            >
              Browse All Products
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
