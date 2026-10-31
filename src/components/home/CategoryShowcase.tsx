import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES } from "@/data/products";

export default function CategoryShowcase() {
  const coreCategories = CATEGORIES.slice(0, 6);

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-[11px] uppercase tracking-[0.18em] font-medium text-[#967448]">
              Curated Catalog
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#141416] mt-1.5">
              Shop by Category
            </h2>
          </div>
          <Link
            href="/shop"
            className="text-xs font-semibold uppercase tracking-wider text-[#18181B] hover:text-[#967448] transition-colors inline-flex items-center gap-1 self-start sm:self-auto"
          >
            <span>All 142 Products</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 6 Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {coreCategories.map((category) => (
            <Link
              key={category.id}
              href={`/shop/${category.slug}`}
              className="group flex flex-col"
            >
              <div className="relative aspect-square bg-[#F7F5F0] border border-[#EAE6DF] rounded-md overflow-hidden transition-all duration-300 group-hover:border-[#18181B] group-hover:shadow-luxury">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              <div className="mt-2.5">
                <h3 className="text-xs sm:text-sm font-medium text-[#18181B] group-hover:text-[#967448] transition-colors line-clamp-1">
                  {category.name}
                </h3>
                <span className="text-[11px] text-[#8A8780] lowercase">
                  {category.itemCount} items
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
