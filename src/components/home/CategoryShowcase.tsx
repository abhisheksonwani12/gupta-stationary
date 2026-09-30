import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES } from "@/data/products";

export default function CategoryShowcase() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#B38E5D]">
              Curated Catalog
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold uppercase tracking-tight text-[#1C1C1C] mt-2">
              Explore Our Collections
            </h2>
          </div>
          <Link
            href="/shop"
            className="text-xs font-bold uppercase tracking-luxury text-[#1C1C1C] hover:text-[#B38E5D] transition-colors inline-flex items-center gap-1 border-b border-black pb-0.5 self-start sm:self-auto"
          >
            <span>View All Categories</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6 Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              href={`/shop/${category.slug}`}
              className="group flex flex-col items-center text-center"
            >
              {/* Image Circle / Card Container */}
              <div className="relative w-full aspect-square bg-[#FAF8F5] border border-[#E8E3DA] overflow-hidden transition-all duration-300 group-hover:shadow-luxury group-hover:border-[#1C1C1C]">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />
                
                {/* Count Badge */}
                <span className="absolute bottom-2 right-2 bg-white/90 text-black text-[10px] font-bold px-1.5 py-0.5">
                  {category.itemCount} Items
                </span>
              </div>

              {/* Title & Subcategory Summary */}
              <h3 className="mt-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-900 group-hover:text-[#B38E5D] transition-colors">
                {category.name}
              </h3>
              <p className="text-[11px] text-gray-500 line-clamp-1 mt-0.5 hidden sm:block">
                {category.subcategories.slice(0, 2).join(", ")} & more
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
