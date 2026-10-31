"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Heart, ShoppingBag, Check } from "lucide-react";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { formatPrice } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [justAdded, setJustAdded] = useState(false);
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const isFavorited = isInWishlist(product.id);
  const secondImage = product.images[1] || product.images[0];
  const isOutOfStock = (product.stock ?? 0) <= 0;

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isOutOfStock) return;
    addToCart(product, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  // Determine single clean badge if applicable
  const badge = isOutOfStock
    ? { label: "Out of Stock", style: "bg-gray-100 text-gray-600 border-gray-200" }
    : product.isBestseller
    ? { label: "Bestseller", style: "bg-[#18181B] text-white border-transparent" }
    : product.isEcoFriendly
    ? { label: "Eco-Friendly", style: "bg-emerald-50 text-emerald-800 border-emerald-200" }
    : null;

  return (
    <div
      className={`group relative bg-white border border-[#EAE6DF] rounded-md flex flex-col justify-between overflow-hidden transition-all duration-300 hover:border-[#1C1C1C]/30 hover:shadow-luxury ${
        isOutOfStock ? "opacity-75" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Image Container */}
      <div className="relative aspect-square bg-[#F7F5F0]/70 overflow-hidden">
        {/* Single Minimal Badge */}
        {badge && (
          <div className="absolute top-3 left-3 z-10">
            <span
              className={`text-[10px] font-medium tracking-wider uppercase px-2.5 py-1 rounded-sm border shadow-xs ${badge.style}`}
            >
              {badge.label}
            </span>
          </div>
        )}

        {/* Wishlist Button - Subtle & Elegant */}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product);
          }}
          aria-label={isFavorited ? "Remove from Wishlist" : "Add to Wishlist"}
          className={`absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 border ${
            isFavorited
              ? "bg-white border-red-200 text-red-600 shadow-sm opacity-100"
              : "bg-white/90 border-transparent text-gray-500 hover:text-black opacity-0 group-hover:opacity-100 shadow-xs"
          }`}
        >
          <Heart className={`w-3.5 h-3.5 ${isFavorited ? "fill-red-600" : ""}`} />
        </button>

        {/* Product Image Link */}
        <Link href={`/product/${product.slug}`} className="block w-full h-full">
          <img
            src={isHovered ? secondImage : product.images[0]}
            alt={product.name}
            className={`w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 ${
              isOutOfStock ? "grayscale contrast-75" : ""
            }`}
          />
        </Link>

        {/* Quick Add Overlay on Desktop */}
        {!isOutOfStock ? (
          <div className="absolute inset-x-3 bottom-3 z-10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-200 hidden sm:block">
            <button
              onClick={handleQuickAdd}
              disabled={justAdded}
              className={`w-full py-2.5 px-4 text-xs font-semibold tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 rounded-sm shadow-md ${
                justAdded
                  ? "bg-emerald-700 text-white"
                  : "bg-[#18181B] text-white hover:bg-[#967448]"
              }`}
            >
              {justAdded ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Added</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Quick Add</span>
                </>
              )}
            </button>
          </div>
        ) : null}
      </div>

      {/* Product Content Details */}
      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          {/* Brand or Category Label */}
          <div className="text-[10px] font-medium text-[#8A8780] uppercase tracking-[0.12em] mb-1">
            {product.specifications?.Brand || product.subCategory || (typeof product.category === "string" ? product.category.replace(/-/g, " ") : "") || "Stationery"}
          </div>

          {/* Product Title */}
          <Link
            href={`/product/${product.slug}`}
            className="block text-[13px] sm:text-sm font-medium text-[#18181B] group-hover:text-[#967448] transition-colors line-clamp-1 leading-snug"
          >
            {product.name}
          </Link>
        </div>

        {/* Pricing Area */}
        <div className="pt-2.5 mt-2.5 border-t border-[#F0ECE4] flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-sm sm:text-base font-semibold text-[#18181B]">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && product.originalPrice > product.price && (
                <span className="text-xs text-gray-400 line-through font-normal">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
            {product.bulkPricing && product.bulkPricing.length > 1 && (
              <span className="text-[10px] text-[#7A6B53] font-medium block mt-0.5">
                Bulk from {formatPrice(product.bulkPricing[product.bulkPricing.length - 1].pricePerUnit)}
              </span>
            )}
          </div>

          {/* Mobile Quick Add Button */}
          {!isOutOfStock ? (
            <button
              onClick={handleQuickAdd}
              aria-label="Add to cart"
              className={`sm:hidden p-2 rounded border transition-colors ${
                justAdded
                  ? "bg-emerald-700 text-white border-emerald-700"
                  : "bg-[#F7F5F0] border-[#EAE6DF] text-[#18181B] active:bg-[#18181B] active:text-white"
              }`}
            >
              {justAdded ? <Check className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
            </button>
          ) : (
            <span className="sm:hidden text-[10px] font-medium text-gray-400 uppercase">
              Sold out
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
