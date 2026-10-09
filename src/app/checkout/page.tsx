"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
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
  QrCode,
  Smartphone,
  Check,
  X,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useInventory } from "@/context/InventoryContext";
import { useAuth } from "@/context/AuthContext";
import { formatPrice } from "@/lib/utils";
import { OrderItem } from "@/types";

export default function CheckoutPage() {
  const router = useRouter();
  const { user } = useAuth();
  const {
    items,
    subtotal,
    bulkDiscount,
    finalTotal,
    deliveryFee,
    couponCode,
    couponDiscount,
    taxAmount,
    clearCart,
  } = useCart();
  const { createOrder } = useInventory();

  const [deliverySlot, setDeliverySlot] = useState<"morning" | "evening">("evening");
  const [deliveryMethod, setDeliveryMethod] = useState<"standard" | "express">("standard");
  const [paymentMethod, setPaymentMethod] = useState<string>("upi");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [mockUpiId, setMockUpiId] = useState("");
  const [selectedBank, setSelectedBank] = useState("HDFC Bank");

  // Address fields
  const [formData, setFormData] = useState({
    name: user?.name || "Anmol Sharma",
    phone: user?.phone?.replace("+91 ", "") || "8839715995",
    email: user?.email || "customer@instantstationary.com",
    address: "Mowa, Dubey Colony, Near Durga Temple",
    city: "Raipur",
    pincode: "492001",
  });

  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        name: user.name || prev.name,
        email: user.email || prev.email,
        phone: user.phone?.replace("+91 ", "") || prev.phone,
      }));
    }
  }, [user]);

  const effectiveDeliveryFee = deliveryMethod === "express" ? deliveryFee + 50 : deliveryFee;
  const effectiveTotal = finalTotal + (deliveryMethod === "express" ? 50 : 0);

  const executeOrderCreation = (paidStatus: "paid" | "pending") => {
    const orderItems: OrderItem[] = items.map((item, idx) => ({
      id: `item-${Date.now()}-${idx}`,
      productId: item.product.id,
      productName: item.product.name,
      sku: item.product.sku,
      image: item.product.images[0],
      quantity: item.quantity,
      unitPrice: item.unitPrice,
      totalPrice: item.unitPrice * item.quantity,
      selectedColor: item.selectedColor,
    }));

    const newOrder = createOrder({
      customerName: formData.name,
      customerEmail: formData.email,
      customerPhone: formData.phone.startsWith("+91") ? formData.phone : `+91 ${formData.phone}`,
      shippingAddress: {
        fullName: formData.name,
        phone: formData.phone,
        email: formData.email,
        addressLine1: formData.address,
        city: formData.city,
        state: "Chhattisgarh",
        pincode: formData.pincode,
      },
      items: orderItems,
      subtotal,
      bulkDiscount,
      couponDiscount,
      couponCode: couponCode || undefined,
      deliveryFee: effectiveDeliveryFee,
      taxAmount,
      total: effectiveTotal,
      paymentMethod: paymentMethod as any,
      paymentStatus: paidStatus,
      orderStatus: "processing",
      deliverySlot: deliverySlot,
    });

    clearCart();
    router.push(`/checkout/success?orderId=${newOrder.id}`);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (paymentMethod === "cod") {
      setIsSubmitting(true);
      setTimeout(() => {
        executeOrderCreation("pending");
      }, 600);
    } else {
      // Open interactive simulated Payment Gateway modal
      setShowPaymentModal(true);
    }
  };

  const handleSimulatedPaymentSuccess = () => {
    setPaymentProcessing(true);
    setTimeout(() => {
      setPaymentProcessing(false);
      setShowPaymentModal(false);
      executeOrderCreation("paid");
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
    <div className="bg-[#FAF8F5] min-h-screen py-10 sm:py-16 selection:bg-[#B38E5D] selection:text-white">
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

        <form onSubmit={handleFormSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Delivery Address, Slot, Payment */}
            <div className="lg:col-span-8 space-y-8">
              {/* Step 1: Delivery Address */}
              <div className="bg-white border border-[#E8E3DA] p-6 sm:p-8 space-y-4 text-xs">
                <div className="flex items-center gap-2 border-b border-[#E8E3DA] pb-3">
                  <span className="w-6 h-6 rounded-full bg-[#1C1C1C] text-white text-xs font-bold flex items-center justify-center">
                    1
                  </span>
                  <h3 className="font-bold text-sm uppercase tracking-wider text-gray-900">
                    Shipping & Delivery Address (Raipur & CG)
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-[#E8E3DA] p-2.5 focus:outline-none focus:border-black font-medium"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Phone Number (SMS Updates) *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-[#E8E3DA] p-2.5 focus:outline-none focus:border-black font-medium"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block font-bold text-gray-700 mb-1">Email (For Invoices) *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-[#E8E3DA] p-2.5 focus:outline-none focus:border-black font-medium"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block font-bold text-gray-700 mb-1">Address / Street / Landmark *</label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full bg-white border border-[#E8E3DA] p-2.5 focus:outline-none focus:border-black font-medium"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">City *</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-white border border-[#E8E3DA] p-2.5 focus:outline-none focus:border-black font-medium"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Pincode *</label>
                    <input
                      type="text"
                      required
                      value={formData.pincode}
                      onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                      className="w-full bg-white border border-[#E8E3DA] p-2.5 focus:outline-none focus:border-black font-medium"
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
                    { id: "upi", title: "UPI (Google Pay, PhonePe, Paytm, BHIM QR)", desc: "Instant QR Code or Virtual Payment Address" },
                    { id: "card", title: "Credit / Debit Card (Visa, Mastercard, RuPay)", desc: "256-bit encrypted card processing" },
                    { id: "netbanking", title: "Net Banking (All Major Indian Banks)", desc: "Direct bank transfer authorization" },
                    { id: "cod", title: "Cash On Delivery (COD)", desc: "Pay cash or UPI on doorstep in Raipur" },
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
              <div className="bg-white border border-[#E8E3DA] p-6 space-y-4 sticky top-28 shadow-sm">
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

                  {couponDiscount > 0 && (
                    <div className="flex justify-between text-emerald-800 font-bold">
                      <span>Coupon Discount ({couponCode})</span>
                      <span>-{formatPrice(couponDiscount)}</span>
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
                    className="w-full py-4 bg-[#1C1C1C] text-white text-xs font-bold uppercase tracking-luxury hover:bg-[#B38E5D] transition-colors flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 active:scale-[0.99]"
                  >
                    <Lock className="w-4 h-4" />
                    <span>
                      {isSubmitting
                        ? "Processing Order..."
                        : paymentMethod === "cod"
                        ? `Confirm COD Order • ${formatPrice(effectiveTotal)}`
                        : `Proceed to Pay • ${formatPrice(effectiveTotal)}`}
                    </span>
                  </button>
                </div>

                <div className="text-[10px] text-gray-500 text-center space-y-1">
                  <div>🔒 Instant 256-bit Encrypted Checkout</div>
                  <div>Live Order Tracking & GST Tax Invoice Generated</div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* Simulated Interactive Payment Gateway Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white max-w-md w-full border border-[#E8E3DA] shadow-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden animate-fadeIn">
            <button
              onClick={() => setShowPaymentModal(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-black p-1"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="text-center space-y-1 pb-4 border-b border-[#E8E3DA]">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#B38E5D]">
                Instant Stationary Gateway
              </span>
              <h3 className="font-serif text-xl font-bold uppercase text-gray-900">
                {paymentMethod === "upi"
                  ? "Scan UPI QR to Pay"
                  : paymentMethod === "card"
                  ? "Card Payment Gateway"
                  : "Net Banking Payment"}
              </h3>
              <p className="text-xs text-gray-500">
                Amount Payable: <strong className="text-black text-sm">{formatPrice(effectiveTotal)}</strong>
              </p>
            </div>

            {/* UPI View */}
            {paymentMethod === "upi" && (
              <div className="space-y-4 text-center">
                {/* Simulated QR Code */}
                <div className="w-44 h-44 mx-auto bg-white border-2 border-gray-900 p-3 shadow-inner flex flex-col items-center justify-center relative">
                  <QrCode className="w-32 h-32 text-gray-900" />
                  <span className="text-[9px] font-mono uppercase tracking-wider text-gray-500 mt-1 font-bold">
                    UPI ID: instant@icici
                  </span>
                </div>

                <p className="text-[11px] text-gray-600">
                  Scan using Google Pay, PhonePe, Paytm or BHIM UPI app on your phone.
                </p>

                <div className="text-left space-y-2">
                  <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider">
                    Or Enter UPI VPA ID
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. mobile@okhdfcbank"
                    value={mockUpiId}
                    onChange={(e) => setMockUpiId(e.target.value)}
                    className="w-full text-xs p-2.5 border border-[#E8E3DA] bg-[#FAF8F5] focus:bg-white focus:outline-none focus:border-black font-mono"
                  />
                </div>
              </div>
            )}

            {/* Card View */}
            {paymentMethod === "card" && (
              <div className="space-y-3 text-xs">
                <div>
                  <label className="block font-bold text-gray-700 mb-1">Card Number</label>
                  <input
                    type="text"
                    defaultValue="4532 •••• •••• 8821"
                    className="w-full p-2.5 border border-[#E8E3DA] bg-[#FAF8F5] font-mono text-xs"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Expiry Date</label>
                    <input
                      type="text"
                      defaultValue="08/29"
                      className="w-full p-2.5 border border-[#E8E3DA] bg-[#FAF8F5] font-mono text-xs"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">CVV / CVC</label>
                    <input
                      type="password"
                      defaultValue="•••"
                      className="w-full p-2.5 border border-[#E8E3DA] bg-[#FAF8F5] font-mono text-xs"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* NetBanking View */}
            {paymentMethod === "netbanking" && (
              <div className="space-y-3 text-xs">
                <label className="block font-bold text-gray-700 uppercase tracking-wider text-[11px]">
                  Select Your Bank:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {["HDFC Bank", "State Bank of India", "ICICI Bank", "Axis Bank"].map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setSelectedBank(b)}
                      className={`p-2.5 border text-center font-bold text-xs transition-all ${
                        selectedBank === b
                          ? "border-black bg-[#FAF8F5] ring-1 ring-black"
                          : "border-gray-200 hover:border-gray-400"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Action Payment Confirmation Button */}
            <div className="space-y-2 pt-2 border-t border-[#E8E3DA]">
              <button
                type="button"
                onClick={handleSimulatedPaymentSuccess}
                disabled={paymentProcessing}
                className="w-full py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow disabled:opacity-50"
              >
                {paymentProcessing ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Verifying Bank Authorization...</span>
                  </>
                ) : (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Authorize & Complete Payment • {formatPrice(effectiveTotal)}</span>
                  </>
                )}
              </button>

              <p className="text-[10px] text-gray-400 text-center">
                Sandbox Demo Gateway • Encrypted by Instant Stationary Security
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
