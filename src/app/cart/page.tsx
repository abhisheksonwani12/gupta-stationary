"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  Truck,
  CheckCircle2,
  ShieldCheck,
  Tag,
  ArrowLeft,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";

export default function CartPage() {
  const {
    items,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    bulkDiscount,
    finalTotal,
    freeShippingThreshold,
    deliveryFee,
    amountNeededForFreeShipping,
    totalItems,
  } = useCart();

  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [orderNotes, setOrderNotes] = useState("");

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.toUpperCase() === "INSTANT10" || couponCode.toUpperCase() === "GUPTA10") {
      const discount = Math.round((subtotal - bulkDiscount) * 0.1);
      setCouponDiscount(discount);
      setCouponApplied(true);
    } else {
      alert("Invalid coupon code. Try 'INSTANT10' for 10% off!");
    }
  };

  const calculatedTotal = Math.max(0, finalTotal - couponDiscount);

  if (items.length === 0) {
    return (
      <div className="min-h-[70vh] bg-white flex flex-col items-center justify-center p-6 text-center">
        <div className="w-20 h-20 bg-[#FAF8F5] border border-[#E8E3DA] rounded-full flex items-center justify-center mb-6">
          <ShoppingBag className="w-10 h-10 text-gray-400" />
        </div>
        <h1 className="font-serif text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#1C1C1C]">
          Your Shopping Bag is Empty
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 max-w-md mt-2 mb-8">
          Explore our signature pens, notebooks, paper reams, geometry boxes, and eco-friendly supplies with direct-from-manufacturer wholesale rates.
        </p>
        <Link
          href="/shop"
          className="px-8 py-4 bg-[#1C1C1C] text-white text-xs font-bold uppercase tracking-luxury hover:bg-[#B38E5D] transition-colors shadow-lg"
        >
          Explore Catalog Now
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#E8E3DA]">
          <div>
            <h1 className="font-serif text-2xl sm:text-4xl font-bold uppercase tracking-tight text-[#1C1C1C]">
              Shopping Cart & Review
            </h1>
            <p className="text-xs text-gray-500 mt-1">
              You have <strong>{totalItems}</strong> items in your order
            </p>
          </div>
          <button
            onClick={clearCart}
            className="text-xs text-red-600 hover:underline font-medium"
          >
            Clear Entire Cart
          </button>
        </div>

        {/* Free Delivery Bar */}
        <div className="bg-[#FAF8F5] border border-[#E8E3DA] p-4 mb-8 text-xs">
          {amountNeededForFreeShipping > 0 ? (
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#B38E5D]" />
                <span>
                  Add <strong>{formatPrice(amountNeededForFreeShipping)}</strong> more to get <strong>FREE Same-Day Delivery in Raipur!</strong>
                </span>
              </span>
              <Link href="/shop" className="font-bold text-[#B38E5D] hover:underline">
                + Add More Items
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-emerald-800 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Great! Your order qualifies for FREE Same-Day Delivery in Raipur.</span>
            </div>
          )}
        </div>

        {/* 2-Column Cart Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Table of Items */}
          <div className="lg:col-span-8 space-y-4">
            <div className="border border-[#E8E3DA] divide-y divide-[#E8E3DA]">
              {items.map((item) => (
                <div
                  key={item.product.id + (item.selectedColor || "")}
                  className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white"
                >
                  {/* Thumbnail & Title */}
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-[#FAF8F5] border border-[#E8E3DA] flex-shrink-0 overflow-hidden">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <Link
                        href={`/product/${item.product.slug}`}
                        className="font-bold text-sm text-gray-900 hover:text-[#B38E5D] transition-colors"
                      >
                        {item.product.name}
                      </Link>
                      <div className="text-xs text-gray-500 mt-0.5">
                        <span>SKU: {item.product.sku}</span>
                        {item.selectedColor && <span> • Color: {item.selectedColor}</span>}
                      </div>
                      {item.discountPercentage > 0 && (
                        <div className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 mt-1 inline-block">
                          {item.discountPercentage}% Wholesale Tier Discount Active
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Quantity Stepper & Price */}
                  <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
                    {/* Stepper */}
                    <div className="flex items-center border border-[#E8E3DA] bg-[#FAF8F5]">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="px-3 py-1.5 text-gray-600 hover:bg-[#E8E3DA]"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-4 text-xs font-bold min-w-[32px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="px-3 py-1.5 text-gray-600 hover:bg-[#E8E3DA]"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Subtotal */}
                    <div className="text-right min-w-[90px]">
                      <div className="font-bold text-sm text-gray-900">
                        {formatPrice(item.unitPrice * item.quantity)}
                      </div>
                      <div className="text-[11px] text-gray-400">
                        ({formatPrice(item.unitPrice)} / unit)
                      </div>
                    </div>

                    {/* Delete */}
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-gray-400 hover:text-red-600 p-1"
                      title="Remove"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Note */}
            <div className="bg-[#FAF8F5] border border-[#E8E3DA] p-4 text-xs">
              <label className="block font-bold uppercase tracking-wider text-gray-700 mb-1">
                Order Notes / Special Delivery Instructions:
              </label>
              <textarea
                rows={2}
                value={orderNotes}
                onChange={(e) => setOrderNotes(e.target.value)}
                placeholder="e.g. Please deliver to reception desk, or call before arriving..."
                className="w-full bg-white border border-[#E8E3DA] p-2.5 text-xs focus:outline-none focus:border-black"
              />
            </div>
          </div>

          {/* Right Summary Box */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#FAF8F5] border border-[#E8E3DA] p-6 space-y-4">
              <h3 className="font-bold text-xs uppercase tracking-luxury text-[#1C1C1C] border-b border-[#E8E3DA] pb-3">
                Order Breakdown
              </h3>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-gray-600">
                  <span>Retail Subtotal</span>
                  <span className="font-semibold text-gray-900">{formatPrice(subtotal)}</span>
                </div>

                {bulkDiscount > 0 && (
                  <div className="flex justify-between text-emerald-800 font-bold">
                    <span>Bulk Wholesale Discount</span>
                    <span>-{formatPrice(bulkDiscount)}</span>
                  </div>
                )}

                {couponApplied && (
                  <div className="flex justify-between text-emerald-800 font-bold">
                    <span>Coupon Discount (10%)</span>
                    <span>-{formatPrice(couponDiscount)}</span>
                  </div>
                )}

                <div className="flex justify-between text-gray-600">
                  <span>Delivery (Raipur)</span>
                  <span>{deliveryFee === 0 ? <strong className="text-emerald-700">FREE</strong> : formatPrice(deliveryFee)}</span>
                </div>

                <div className="pt-3 border-t border-[#E8E3DA] flex justify-between text-base font-bold text-gray-900">
                  <span>Total Payable</span>
                  <span className="text-xl text-[#1C1C1C]">{formatPrice(calculatedTotal)}</span>
                </div>
              </div>

              {/* Coupon Form */}
              <form onSubmit={handleApplyCoupon} className="pt-2 border-t border-[#E8E3DA]">
                <label className="block text-[11px] font-bold uppercase text-gray-700 mb-1">
                  Have a Coupon Code?
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="e.g. INSTANT10"
                    className="w-full bg-white border border-[#E8E3DA] p-2 text-xs uppercase focus:outline-none focus:border-black font-semibold"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#1C1C1C] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#B38E5D] transition-colors flex-shrink-0"
                  >
                    Apply
                  </button>
                </div>
              </form>

              {/* Checkout Button */}
              <div className="pt-2">
                <Link
                  href="/checkout"
                  className="w-full py-4 bg-[#1C1C1C] text-white text-xs font-bold uppercase tracking-luxury hover:bg-[#B38E5D] transition-colors flex items-center justify-center gap-2 shadow-lg block text-center"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-gray-500 pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>SSL Encrypted Checkout • Free 7-Day Returns</span>
              </div>
            </div>

            <Link
              href="/shop"
              className="flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-600 hover:text-black"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Continue Shopping</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
