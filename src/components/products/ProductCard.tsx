"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Heart, ShoppingBag, Eye, Star } from "lucide-react";
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
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const isFavorited = isInWishlist(product.id);
  const secondImage = product.images[1] || product.images[0];
  const isOutOfStock = (product.stock ?? 0) <= 0;
  const isLowStock = !isOutOfStock && (product.stock ?? 0) <= (product.lowStockThreshold ?? 10);

  const highestBulkDiscount =
    product.bulkPricing && product.bulkPricing.length > 1
      ? product.bulkPricing[product.bulkPricing.length - 1].discountPercent
      : 0;

  return (
    <div
      className={`group relative bg-white border border-[#E8E3DA] flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-luxury hover:border-[#1C1C1C]/40 ${
        isOutOfStock ? "opacity-75" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Image Container */}
      <div className="relative aspect-square bg-[#FAF8F5] overflow-hidden">
        {/* Badges */}
        <div className="absolute top-2.5 left-2.5 z-10 flex flex-col gap-1 items-start">
          {isOutOfStock ? (
            <span className="bg-red-700 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5">
              Out of Stock
            </span>
          ) : isLowStock ? (
            <span className="bg-amber-700 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 animate-pulse">
              Only {product.stock} Left!
            </span>
          ) : (
            product.isBestseller && (
              <span className="bg-[#1C1C1C] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5">
                Bestseller
              </span>
            )
          )}
          {product.isEcoFriendly && !isOutOfStock && (
            <span className="bg-emerald-800 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5">
              Eco 🌱
            </span>
          )}
          {highestBulkDiscount > 0 && !isOutOfStock && (
            <span className="bg-[#B38E5D] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5">
              Up to {highestBulkDiscount}% Off Bulk
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product);
          }}
          aria-label="Add to Wishlist"
          className={`absolute top-2.5 right-2.5 z-10 p-2 rounded-full border transition-all duration-200 ${
            isFavorited
              ? "bg-red-50 border-red-200 text-red-600 shadow-sm"
              : "bg-white/90 border-[#E8E3DA] text-gray-600 hover:text-black hover:bg-white"
          }`}
        >
          <Heart className={`w-4 h-4 ${isFavorited ? "fill-red-600" : ""}`} />
        </button>

        {/* Product Image Link */}
        <Link href={`/product/${product.slug}`} className="block w-full h-full">
          <img
            src={isHovered ? secondImage : product.images[0]}
            alt={product.name}
            className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
              isOutOfStock ? "grayscale contrast-75" : ""
            }`}
          />
        </Link>

        {/* Quick Add Overlay on Desktop */}
        {!isOutOfStock ? (
          <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 hidden sm:flex gap-2">
            <button
              onClick={() => addToCart(product, 1)}
              className="flex-1 py-2 bg-white text-[#1C1C1C] text-xs font-bold uppercase tracking-wider hover:bg-[#B38E5D] hover:text-white transition-colors flex items-center justify-center gap-1.5 shadow-sm"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Quick Add</span>
            </button>
            <Link
              href={`/product/${product.slug}`}
              className="p-2 bg-white text-[#1C1C1C] hover:bg-black hover:text-white transition-colors flex items-center justify-center"
              title="View Details"
            >
              <Eye className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="absolute inset-x-0 bottom-0 p-3 bg-black/60 text-white text-[11px] font-bold uppercase tracking-wider text-center hidden sm:block">
            Out of Stock
          </div>
        )}
      </div>

      {/* Product Content Details */}
      <div className="p-4 flex flex-col flex-1 justify-between bg-white">
        <div>
          {/* Category & SKU */}
          <div className="flex items-center justify-between text-[11px] text-[#706E6B] uppercase tracking-wider mb-1">
            <span>{product.sku}</span>
            <div className="flex items-center gap-1 text-amber-500 font-bold">
              <Star className="w-3 h-3 fill-amber-400" />
              <span>{product.rating}</span>
              <span className="text-gray-400 font-normal">({product.reviewCount})</span>
            </div>
          </div>

          {/* Product Title */}
          <Link
            href={`/product/${product.slug}`}
            className="block text-sm font-semibold text-gray-900 group-hover:text-[#B38E5D] transition-colors line-clamp-1"
          >
            {product.name}
          </Link>

          {/* Short Description */}
          <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Pricing Area */}
        <div className="pt-3 mt-3 border-t border-gray-100 flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-base font-bold text-[#1C1C1C]">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-gray-400 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
            {product.bulkPricing && product.bulkPricing.length > 1 && (
              <span className="text-[10px] text-emerald-700 font-semibold block">
                Wholesale from {formatPrice(product.bulkPricing[product.bulkPricing.length - 1].pricePerUnit)}
              </span>
            )}
          </div>

          {/* Mobile Add to Cart Button */}
          {!isOutOfStock ? (
            <button
              onClick={() => addToCart(product, 1)}
              className="sm:hidden p-2 bg-[#FAF8F5] border border-[#E8E3DA] text-black hover:bg-black hover:text-white transition-colors"
              aria-label="Add to cart"
            >
              <ShoppingBag className="w-4 h-4" />
            </button>
          ) : (
            <span className="sm:hidden text-[10px] font-bold text-red-600 uppercase border border-red-200 px-2 py-1">
              Out
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
