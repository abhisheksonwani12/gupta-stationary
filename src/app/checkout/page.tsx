"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ShieldCheck,
  Truck,
  CreditCard,
  Building,
  CheckCircle2,
  Lock,
  ArrowLeft,
  Clock,
  MapPin,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, subtotal, bulkDiscount, finalTotal, deliveryFee, clearCart } = useCart();

  const [addressMode, setAddressMode] = useState<"home" | "office" | "new">("home");
  const [deliverySlot, setDeliverySlot] = useState<"morning" | "evening">("evening");
  const [deliveryMethod, setDeliveryMethod] = useState<"standard" | "express">("standard");
  const [paymentMethod, setPaymentMethod] = useState<string>("upi");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Address fields
  const [formData, setFormData] = useState({
    name: "Anmol Sharma",
    phone: "8839715995",
    address: "Mowa, Dubey Colony, Near Durga Temple",
    city: "Raipur",
    pincode: "492001",
  });

  const effectiveDeliveryFee = deliveryMethod === "express" ? deliveryFee + 50 : deliveryFee;
  const effectiveTotal = finalTotal + (deliveryMethod === "express" ? 50 : 0);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      clearCart();
      router.push("/checkout/success");
    }, 1200);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] bg-white flex flex-col items-center justify-center p-6 text-center">
        <h2 className="font-serif text-2xl font-bold uppercase text-gray-900 mb-2">
          Your Cart is Empty
        </h2>
        <p className="text-xs text-gray-500 mb-6">
          Please add items to your cart before proceeding to checkout.
        </p>
        <Link
          href="/shop"
          className="px-6 py-3 bg-[#1C1C1C] text-white text-xs font-bold uppercase tracking-luxury hover:bg-[#B38E5D] transition-colors"
        >
          Return to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF8F5] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Header */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#E8E3DA]">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#B38E5D]">
              Secure Transaction
            </span>
            <h1 className="font-serif text-2xl sm:text-4xl font-bold uppercase tracking-tight text-[#1C1C1C] mt-1">
              Checkout & Delivery Details
            </h1>
          </div>
          <Link
            href="/cart"
            className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-gray-600 hover:text-black"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Modify Cart</span>
          </Link>
        </div>

        <form onSubmit={handlePlaceOrder}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Delivery Address, Slot, Payment */}
            <div className="lg:col-span-8 space-y-8">
              {/* Step 1: Delivery Address */}
              <div className="bg-white border border-[#E8E3DA] p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-2 border-b border-[#E8E3DA] pb-3">
                  <span className="w-6 h-6 rounded-full bg-[#1C1C1C] text-white text-xs font-bold flex items-center justify-center">
                    1
                  </span>
                  <h3 className="font-bold text-sm uppercase tracking-wider text-gray-900">
                    Delivery Address
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <label
                    onClick={() => {
                      setAddressMode("home");
                      setFormData({
                        name: "Anmol Sharma",
                        phone: "8839715995",
                        address: "Mowa, Dubey Colony, Near Durga Temple",
                        city: "Raipur",
                        pincode: "492001",
                      });
                    }}
                    className={`p-4 border cursor-pointer transition-all ${
                      addressMode === "home"
                        ? "border-black bg-[#FAF8F5] ring-1 ring-black"
                        : "border-[#E8E3DA] hover:border-gray-400"
                    }`}
                  >
                    <div className="font-bold text-gray-900 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#B38E5D]" />
                      <span>Home (Default)</span>
                    </div>
                    <p className="text-gray-500 mt-1 leading-relaxed">
                      Mowa, Dubey Colony, Near Durga Temple, Raipur - 492001
                    </p>
                  </label>

                  <label
                    onClick={() => {
                      setAddressMode("office");
                      setFormData({
                        name: "TechVision Operations",
                        phone: "8839715995",
                        address: "Business Park, Pandri Industrial Area",
                        city: "Raipur",
                        pincode: "492004",
                      });
                    }}
                    className={`p-4 border cursor-pointer transition-all ${
                      addressMode === "office"
                        ? "border-black bg-[#FAF8F5] ring-1 ring-black"
                        : "border-[#E8E3DA] hover:border-gray-400"
                    }`}
                  >
                    <div className="font-bold text-gray-900 flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-[#B38E5D]" />
                      <span>Office</span>
                    </div>
                    <p className="text-gray-500 mt-1 leading-relaxed">
                      Business Park, Pandri, Raipur - 492004
                    </p>
                  </label>

                  <label
                    onClick={() => {
                      setAddressMode("new");
                      setFormData({ name: "", phone: "", address: "", city: "Raipur", pincode: "" });
                    }}
                    className={`p-4 border cursor-pointer transition-all ${
                      addressMode === "new"
                        ? "border-black bg-[#FAF8F5] ring-1 ring-black"
                        : "border-[#E8E3DA] hover:border-gray-400"
                    }`}
                  >
                    <div className="font-bold text-gray-900">+ Enter New Address</div>
                    <p className="text-gray-500 mt-1">Add a custom delivery location</p>
                  </label>
                </div>

                {/* Address Form Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Recipient Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-[#E8E3DA] p-2.5 focus:outline-none focus:border-black"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-[#E8E3DA] p-2.5 focus:outline-none focus:border-black"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block font-bold text-gray-700 mb-1">Street Address *</label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full bg-white border border-[#E8E3DA] p-2.5 focus:outline-none focus:border-black"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">City *</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-white border border-[#E8E3DA] p-2.5 focus:outline-none focus:border-black"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Pincode *</label>
                    <input
                      type="text"
                      required
                      value={formData.pincode}
                      onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                      className="w-full bg-white border border-[#E8E3DA] p-2.5 focus:outline-none focus:border-black"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2: Delivery Time Slot & Speed */}
              <div className="bg-white border border-[#E8E3DA] p-6 sm:p-8 space-y-4 text-xs">
                <div className="flex items-center gap-2 border-b border-[#E8E3DA] pb-3">
                  <span className="w-6 h-6 rounded-full bg-[#1C1C1C] text-white text-xs font-bold flex items-center justify-center">
                    2
                  </span>
                  <h3 className="font-bold text-sm uppercase tracking-wider text-gray-900">
                    Delivery Options & Preferred Time Slot
                  </h3>
                </div>

                <div className="space-y-3">
                  <span className="font-bold uppercase tracking-wider text-gray-700 block">
                    Choose Delivery Window (Raipur):
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label
                      onClick={() => setDeliverySlot("morning")}
                      className={`p-3.5 border cursor-pointer flex items-center gap-3 ${
                        deliverySlot === "morning"
                          ? "border-black bg-[#FAF8F5] ring-1 ring-black"
                          : "border-[#E8E3DA]"
                      }`}
                    >
                      <Clock className="w-4 h-4 text-[#B38E5D]" />
                      <div>
                        <div className="font-bold text-gray-900">Morning Slot</div>
                        <div className="text-gray-500">10:00 AM - 1:00 PM</div>
                      </div>
                    </label>

                    <label
                      onClick={() => setDeliverySlot("evening")}
                      className={`p-3.5 border cursor-pointer flex items-center gap-3 ${
                        deliverySlot === "evening"
                          ? "border-black bg-[#FAF8F5] ring-1 ring-black"
                          : "border-[#E8E3DA]"
                      }`}
                    >
                      <Clock className="w-4 h-4 text-[#B38E5D]" />
                      <div>
                        <div className="font-bold text-gray-900">Evening Slot</div>
                        <div className="text-gray-500">4:00 PM - 7:00 PM</div>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <span className="font-bold uppercase tracking-wider text-gray-700 block">
                    Delivery Speed:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label
                      onClick={() => setDeliveryMethod("standard")}
                      className={`p-3.5 border cursor-pointer flex items-center justify-between ${
                        deliveryMethod === "standard"
                          ? "border-black bg-[#FAF8F5] ring-1 ring-black"
                          : "border-[#E8E3DA]"
                      }`}
                    >
                      <div>
                        <div className="font-bold text-gray-900">Standard Delivery</div>
                        <div className="text-gray-500">Same-Day / Next Morning</div>
                      </div>
                      <span className="text-emerald-800 font-bold">
                        {deliveryFee === 0 ? "FREE" : formatPrice(deliveryFee)}
                      </span>
                    </label>

                    <label
                      onClick={() => setDeliveryMethod("express")}
                      className={`p-3.5 border cursor-pointer flex items-center justify-between ${
                        deliveryMethod === "express"
                          ? "border-black bg-[#FAF8F5] ring-1 ring-black"
                          : "border-[#E8E3DA]"
                      }`}
                    >
                      <div>
                        <div className="font-bold text-gray-900">Express Priority Delivery</div>
                        <div className="text-gray-500">Guaranteed within 3 hours</div>
                      </div>
                      <span className="font-bold text-gray-900">+₹50</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Step 3: Payment Method Selection */}
              <div className="bg-white border border-[#E8E3DA] p-6 sm:p-8 space-y-4 text-xs">
                <div className="flex items-center gap-2 border-b border-[#E8E3DA] pb-3">
                  <span className="w-6 h-6 rounded-full bg-[#1C1C1C] text-white text-xs font-bold flex items-center justify-center">
                    3
                  </span>
                  <h3 className="font-bold text-sm uppercase tracking-wider text-gray-900">
                    Payment Method Selection
                  </h3>
                </div>

                <div className="space-y-2.5">
                  {[
                    { id: "upi", title: "UPI (Google Pay, PhonePe, Paytm, BHIM)", desc: "Instant QR code or UPI ID verification" },
                    { id: "card", title: "Credit / Debit Card (Visa, Mastercard, RuPay)", desc: "256-bit encrypted card gateway" },
                    { id: "netbanking", title: "Net Banking", desc: "All major Indian banks supported" },
                    { id: "wallet", title: "Digital Wallets (Paytm, Mobikwik, Amazon Pay)", desc: "Fast one-tap wallet payment" },
                    { id: "cod", title: "Cash On Delivery (COD)", desc: "Pay cash or UPI upon delivery in Raipur" },
                  ].map((p) => (
                    <label
                      key={p.id}
                      onClick={() => setPaymentMethod(p.id)}
                      className={`p-3.5 border cursor-pointer flex items-center justify-between transition-all ${
                        paymentMethod === p.id
                          ? "border-black bg-[#FAF8F5] ring-1 ring-black"
                          : "border-[#E8E3DA] hover:border-gray-400"
                      }`}
                    >
                      <div>
                        <div className="font-bold text-gray-900">{p.title}</div>
                        <div className="text-gray-500 text-[11px]">{p.desc}</div>
                      </div>
                      <input
                        type="radio"
                        name="paymentMethod"
                        checked={paymentMethod === p.id}
                        onChange={() => setPaymentMethod(p.id)}
                        className="cursor-pointer"
                      />
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Order Summary & Place Order */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white border border-[#E8E3DA] p-6 space-y-4 sticky top-28">
                <h3 className="font-bold text-xs uppercase tracking-luxury text-gray-900 border-b border-[#E8E3DA] pb-3">
                  Order Summary ({items.length} items)
                </h3>

                {/* Items Mini List */}
                <div className="space-y-3 max-h-56 overflow-y-auto divide-y divide-gray-100 text-xs">
                  {items.map((item) => (
                    <div key={item.product.id} className="pt-2 first:pt-0 flex justify-between gap-2">
                      <div className="min-w-0">
                        <div className="font-semibold text-gray-900 truncate">
                          {item.product.name}
                        </div>
                        <div className="text-[11px] text-gray-400">
                          Qty: {item.quantity} × {formatPrice(item.unitPrice)}
                        </div>
                      </div>
                      <div className="font-bold text-gray-900">
                        {formatPrice(item.unitPrice * item.quantity)}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Financials */}
                <div className="pt-3 border-t border-[#E8E3DA] space-y-2 text-xs">
                  <div className="flex justify-between text-gray-600">
                    <span>Retail Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>

                  {bulkDiscount > 0 && (
                    <div className="flex justify-between text-emerald-800 font-bold">
                      <span>Wholesale Savings</span>
                      <span>-{formatPrice(bulkDiscount)}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-gray-600">
                    <span>Delivery Fee ({deliveryMethod})</span>
                    <span>{effectiveDeliveryFee === 0 ? <strong className="text-emerald-700">FREE</strong> : formatPrice(effectiveDeliveryFee)}</span>
                  </div>

                  <div className="pt-3 border-t border-[#E8E3DA] flex justify-between text-base font-bold text-gray-900">
                    <span>Grand Total</span>
                    <span className="text-xl text-[#1C1C1C]">{formatPrice(effectiveTotal)}</span>
                  </div>
                </div>

                {/* Submit Order */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#1C1C1C] text-white text-xs font-bold uppercase tracking-luxury hover:bg-[#B38E5D] transition-colors flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
                  >
                    <Lock className="w-4 h-4" />
                    <span>{isSubmitting ? "Placing Order..." : `Place Order • ${formatPrice(effectiveTotal)}`}</span>
                  </button>
                </div>

                <div className="text-[10px] text-gray-500 text-center space-y-1">
                  <div>🔒 Safe 256-bit Encrypted Checkout</div>
                  <div>Invoice PDF with GST breakdown generated instantly</div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
