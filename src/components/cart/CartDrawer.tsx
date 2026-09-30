"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, Truck, CheckCircle2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";

export default function CartDrawer() {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    subtotal,
    bulkDiscount,
    finalTotal,
    freeShippingThreshold,
    deliveryFee,
    amountNeededForFreeShipping,
    totalItems,
  } = useCart();

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  const freeShippingProgress = Math.min(
    100,
    Math.round(((freeShippingThreshold - amountNeededForFreeShipping) / freeShippingThreshold) * 100)
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity animate-fadeIn"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l border-[#E8E3DA] flex flex-col shadow-2xl animate-slideInRight">
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-[#E8E3DA] flex items-center justify-between bg-[#FAF8F5]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#1C1C1C]" />
              <h3 className="text-base font-bold uppercase tracking-wider text-[#1C1C1C]">
                Shopping Bag ({totalItems})
              </h3>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 hover:bg-gray-200 rounded-full transition-colors text-gray-600 hover:text-black"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Delivery Meter */}
          <div className="bg-[#F6EFE4] border-b border-[#E8E3DA] p-3 text-xs">
            {amountNeededForFreeShipping > 0 ? (
              <div className="space-y-1.5">
                <div className="flex items-center justify-between font-medium text-gray-800">
                  <span className="flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-[#B38E5D]" />
                    Add <strong className="text-black">{formatPrice(amountNeededForFreeShipping)}</strong> more for <strong className="text-emerald-800 font-bold">FREE Delivery</strong> in Raipur!
                  </span>
                  <span>{freeShippingProgress}%</span>
                </div>
                <div className="w-full bg-[#E5D8C6] h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-[#B38E5D] h-full transition-all duration-500 rounded-full"
                    style={{ width: `${freeShippingProgress}%` }}
                  />
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-1.5 text-emerald-800 font-semibold justify-center">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>You qualify for FREE Same-Day Raipur Delivery!</span>
              </div>
            )}
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 divide-y divide-[#E8E3DA]">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#FAF8F5] border border-[#E8E3DA] flex items-center justify-center mb-4">
                  <ShoppingBag className="w-8 h-8 text-[#A09D96]" />
                </div>
                <h4 className="text-base font-bold text-gray-900 mb-1">Your bag is empty</h4>
                <p className="text-xs text-gray-500 max-w-xs mb-6">
                  Discover our bestselling pens, notebooks, paper products, and eco-friendly essentials.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-3 bg-[#1C1C1C] text-white text-xs font-semibold tracking-luxury uppercase hover:bg-[#333333] transition-colors"
                >
                  Explore Catalog
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.product.id + (item.selectedColor || "")} className="py-4 flex gap-4 group">
                  <div className="relative w-20 h-20 bg-[#FAF8F5] border border-[#E8E3DA] flex-shrink-0 overflow-hidden">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <Link
                        href={`/product/${item.product.slug}`}
                        onClick={() => setIsCartOpen(false)}
                        className="text-sm font-semibold text-gray-900 hover:text-[#B38E5D] transition-colors line-clamp-1"
                      >
                        {item.product.name}
                      </Link>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-gray-400 hover:text-red-600 transition-colors p-1"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="text-xs text-gray-500 mt-0.5 flex items-center gap-2">
                      <span>SKU: {item.product.sku}</span>
                      {item.selectedColor && (
                        <span>• Color: {item.selectedColor}</span>
                      )}
                    </div>

                    {item.discountPercentage > 0 && (
                      <div className="mt-1">
                        <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5">
                          {item.discountPercentage}% Wholesale Tier Applied
                        </span>
                      </div>
                    )}

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-[#E8E3DA] bg-[#FAF8F5]">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="px-2.5 py-1 text-gray-600 hover:bg-[#E8E3DA] transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-xs font-bold text-gray-900 min-w-[28px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2.5 py-1 text-gray-600 hover:bg-[#E8E3DA] transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <div className="text-sm font-bold text-gray-900">
                          {formatPrice(item.unitPrice * item.quantity)}
                        </div>
                        {item.unitPrice < item.product.price && (
                          <div className="text-[11px] text-gray-400 line-through">
                            {formatPrice(item.product.price * item.quantity)}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Summary & Checkout */}
          {items.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-[#E8E3DA] bg-[#FAF8F5] space-y-3">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-semibold">{formatPrice(subtotal)}</span>
                </div>

                {bulkDiscount > 0 && (
                  <div className="flex justify-between text-emerald-800 font-medium">
                    <span>Bulk Tier Savings</span>
                    <span>-{formatPrice(bulkDiscount)}</span>
                  </div>
                )}

                <div className="flex justify-between text-gray-600">
                  <span>Delivery (Raipur)</span>
                  <span>{deliveryFee === 0 ? <strong className="text-emerald-700">FREE</strong> : formatPrice(deliveryFee)}</span>
                </div>

                <div className="pt-2 border-t border-[#E8E3DA] flex justify-between text-sm font-bold text-gray-900">
                  <span>Estimated Total</span>
                  <span className="text-base">{formatPrice(finalTotal)}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <Link
                  href="/cart"
                  onClick={() => setIsCartOpen(false)}
                  className="w-full py-3 bg-white border border-[#1C1C1C] text-[#1C1C1C] text-center text-xs font-semibold tracking-luxury uppercase hover:bg-gray-100 transition-colors"
                >
                  View Bag
                </Link>
                <Link
                  href="/checkout"
                  onClick={() => setIsCartOpen(false)}
                  className="w-full py-3 bg-[#1C1C1C] text-white text-center text-xs font-semibold tracking-luxury uppercase hover:bg-[#333333] transition-colors flex items-center justify-center gap-1"
                >
                  <span>Checkout</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <p className="text-[10px] text-gray-500 text-center">
                Taxes calculated at checkout • Same-Day Dispatch before 5 PM
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
