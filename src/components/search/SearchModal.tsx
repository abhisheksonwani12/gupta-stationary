"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, X, ArrowRight, TrendingUp } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { useInventory } from "@/context/InventoryContext";
import { formatPrice } from "@/lib/utils";
import { Product } from "@/types";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const { products } = useInventory();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setQuery("");
    }
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const liveList = products.length > 0 ? products : PRODUCTS;
    const q = query.toLowerCase();
    const filtered = liveList.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
    setResults(filtered);
  }, [query, products]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex flex-col justify-start items-center p-4 sm:p-6 animate-fadeIn">
      <div className="w-full max-w-3xl bg-white shadow-2xl border border-[#E8E3DA] mt-12 overflow-hidden flex flex-col max-h-[85vh]">
        {/* Search Header */}
        <div className="p-4 sm:p-6 border-b border-[#E8E3DA] flex items-center justify-between gap-4">
          <div className="flex items-center flex-1 gap-3">
            <Search className="w-6 h-6 text-[#706E6B]" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by product name, category, SKU (e.g. ball pen, notebook, copy paper)..."
              className="w-full text-base sm:text-lg focus:outline-none placeholder:text-[#A09D96] font-medium"
            />
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500 hover:text-black"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Results Area */}
        <div className="overflow-y-auto p-4 sm:p-6 divide-y divide-gray-100 flex-1">
          {query.trim() === "" ? (
            <div className="py-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#706E6B] tracking-wider uppercase mb-3">
                <TrendingUp className="w-4 h-4 text-[#B38E5D]" /> Popular Searches
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Instant Premium Ball Pen",
                  "A4 Copy Paper Ream",
                  "Eco-Friendly Notebook",
                  "Geometry Box",
                  "Plantable Seed Pens",
                  "School Notebooks",
                  "Wholesale Pens"
                ].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3.5 py-1.5 bg-[#FAF8F5] border border-[#E8E3DA] text-xs font-medium hover:border-black transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length > 0 ? (
            <div className="space-y-3">
              <div className="text-xs font-semibold text-[#706E6B] tracking-wider uppercase mb-2">
                Found {results.length} results
              </div>
              {results.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.slug}`}
                  onClick={onClose}
                  className="flex items-center gap-4 py-3 group hover:bg-[#FAF8F5] px-3 transition-colors border border-transparent hover:border-[#E8E3DA]"
                >
                  <div className="relative w-16 h-16 bg-gray-100 flex-shrink-0 overflow-hidden border border-[#E8E3DA]">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] uppercase tracking-wider text-[#B38E5D] font-semibold">
                        {product.sku}
                      </span>
                      {product.isEcoFriendly && (
                        <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 font-medium">
                          Eco-Friendly
                        </span>
                      )}
                    </div>
                    <h4 className="text-sm font-semibold text-gray-900 truncate group-hover:text-[#B38E5D] transition-colors">
                      {product.name}
                    </h4>
                    <p className="text-xs text-gray-500 truncate">{product.shortDescription}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-sm font-bold text-gray-900">{formatPrice(product.price)}</div>
                    {product.bulkPricing.length > 1 && (
                      <div className="text-[10px] text-emerald-700 font-medium">
                        Bulk from {formatPrice(product.bulkPricing[product.bulkPricing.length - 1].pricePerUnit)}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-sm">
                No products found matching &ldquo;<span className="font-semibold">{query}</span>&rdquo;.
              </p>
              <p className="text-xs text-gray-400 mt-1">Try checking for spelling or searching generic terms like &apos;pen&apos;, &apos;paper&apos;, or &apos;notebook&apos;.</p>
            </div>
          )}
        </div>

        {/* Search Footer */}
        <div className="p-4 bg-[#FAF8F5] border-t border-[#E8E3DA] flex items-center justify-between text-xs text-gray-500">
          <span>Press ESC or click outside to close</span>
          <Link
            href={`/shop?q=${encodeURIComponent(query)}`}
            onClick={onClose}
            className="flex items-center gap-1 font-semibold text-black hover:text-[#B38E5D] transition-colors"
          >
            <span>View all products</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
