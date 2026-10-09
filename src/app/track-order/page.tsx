"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  PackageCheck,
  Truck,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
  Search,
  Phone,
  ArrowRight,
  ShieldCheck,
  ShoppingBag,
  ExternalLink,
} from "lucide-react";
import { useInventory } from "@/context/InventoryContext";
import { formatPrice } from "@/lib/utils";

function TrackOrderContent() {
  const searchParams = useSearchParams();
  const initialOrderId = searchParams.get("id") || "";
  const { orders } = useInventory();

  const [query, setQuery] = useState(initialOrderId);
  const [activeOrder, setActiveOrder] = useState<any>(null);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    if (initialOrderId && orders.length > 0) {
      const match = orders.find(
        (o) =>
          o.id.toLowerCase() === initialOrderId.toLowerCase() ||
          o.customerPhone.includes(initialOrderId)
      );
      if (match) {
        setActiveOrder(match);
        setSearched(true);
      } else {
        // Fallback to most recent order if query exists
        setActiveOrder(orders[0]);
        setSearched(true);
      }
    } else if (orders.length > 0 && !searched) {
      // Default to latest demo order
      setActiveOrder(orders[0]);
    }
  }, [initialOrderId, orders, searched]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setSearched(true);
    const cleanQuery = query.trim().toLowerCase();
    const match = orders.find(
      (o) =>
        o.id.toLowerCase() === cleanQuery ||
        o.id.toLowerCase().includes(cleanQuery) ||
        o.customerPhone.includes(cleanQuery) ||
        o.customerEmail.toLowerCase().includes(cleanQuery)
    );

    setActiveOrder(match || null);
  };

  // Determine active step index from status
  const getStepIndex = (status: string) => {
    switch (status) {
      case "pending":
      case "placed":
        return 0;
      case "processing":
      case "confirmed":
        return 1;
      case "shipped":
      case "dispatched":
        return 2;
      case "out_for_delivery":
        return 3;
      case "delivered":
        return 4;
      default:
        return 1;
    }
  };

  const steps = [
    { title: "Order Placed", desc: "Received & Authorized" },
    { title: "Packed & QA", desc: "Inspected at Raipur Hub" },
    { title: "Dispatched", desc: "Assigned to Logistics" },
    { title: "Out for Delivery", desc: "Rider in Transit" },
    { title: "Delivered", desc: "Received by Customer" },
  ];

  const currentStep = activeOrder ? getStepIndex(activeOrder.orderStatus) : 1;

  return (
    <div className="bg-[#FAF8F5] min-h-screen py-10 sm:py-16 selection:bg-[#B38E5D] selection:text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header Title */}
        <div className="text-center space-y-2">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#B38E5D]">
            Live Logistics & Dispatch Tracking
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#1C1C1C]">
            Track Your Order
          </h1>
          <p className="text-xs text-[#555555] max-w-lg mx-auto">
            Enter your Order ID (e.g. <code>ORD-2026-0812</code>) or registered phone number to view live transit updates.
          </p>
        </div>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="bg-white p-3 border border-[#E8E3DA] shadow-sm flex flex-col sm:flex-row gap-2"
        >
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter Order ID (e.g., ORD-2026-0812) or Phone Number"
              className="w-full pl-9 pr-3 py-2.5 text-xs bg-[#FAF8F5] border border-transparent focus:border-black focus:bg-white focus:outline-none transition-colors font-medium"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2.5 bg-[#1C1C1C] hover:bg-[#B38E5D] text-white text-xs font-bold uppercase tracking-wider transition-colors shrink-0"
          >
            Track Shipment
          </button>
        </form>

        {/* Order Details Result */}
        {activeOrder ? (
          <div className="bg-white border border-[#E8E3DA] shadow-sm overflow-hidden">
            {/* Order Card Header */}
            <div className="p-6 bg-[#FAF8F5] border-b border-[#E8E3DA] flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#B38E5D]">
                    Instant Express Logistics
                  </span>
                  <span className="text-xs text-gray-400">•</span>
                  <span className="font-mono text-xs font-bold text-gray-900">
                    {activeOrder.id}
                  </span>
                </div>
                <h2 className="text-sm font-bold text-gray-900 mt-0.5">
                  Recipient: {activeOrder.customerName} ({activeOrder.customerPhone})
                </h2>
                <p className="text-[11px] text-gray-500">
                  Placed on {new Date(activeOrder.createdAt).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })} • Payment: <span className="uppercase font-semibold">{activeOrder.paymentMethod} ({activeOrder.paymentStatus})</span>
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span
                  className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full border ${
                    activeOrder.orderStatus === "delivered"
                      ? "bg-emerald-50 text-emerald-700 border-emerald-300"
                      : "bg-amber-50 text-amber-800 border-amber-300"
                  }`}
                >
                  Status: {activeOrder.orderStatus.replace("_", " ")}
                </span>
              </div>
            </div>

            {/* Visual Multi-Stage Progress Bar */}
            <div className="p-6 sm:p-8 border-b border-[#E8E3DA]">
              <div className="relative">
                {/* Connecting background line */}
                <div className="absolute top-4 left-6 right-6 h-0.5 bg-gray-200 -z-0 hidden sm:block" />
                {/* Connecting active filled line */}
                <div
                  className="absolute top-4 left-6 h-0.5 bg-[#B38E5D] transition-all duration-500 -z-0 hidden sm:block"
                  style={{
                    width: `${(currentStep / (steps.length - 1)) * 88}%`,
                  }}
                />

                <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 relative z-10">
                  {steps.map((step, idx) => {
                    const isCompleted = idx < currentStep;
                    const isCurrent = idx === currentStep;
                    return (
                      <div
                        key={step.title}
                        className="flex sm:flex-col items-center sm:text-center gap-3 sm:gap-2"
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                            isCompleted
                              ? "bg-[#B38E5D] text-white shadow"
                              : isCurrent
                              ? "bg-[#1C1C1C] text-white ring-4 ring-[#B38E5D]/30"
                              : "bg-gray-100 text-gray-400 border border-gray-300"
                          }`}
                        >
                          {isCompleted ? (
                            <CheckCircle2 className="w-4 h-4" />
                          ) : (
                            idx + 1
                          )}
                        </div>
                        <div>
                          <p
                            className={`text-xs font-bold uppercase ${
                              isCurrent
                                ? "text-black"
                                : isCompleted
                                ? "text-[#B38E5D]"
                                : "text-gray-400"
                            }`}
                          >
                            {step.title}
                          </p>
                          <p className="text-[10px] text-gray-500">{step.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Delivery Info & Items breakdown */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              {/* Shipping Address */}
              <div className="space-y-2 bg-[#FAF8F5] p-4 border border-[#E8E3DA]">
                <div className="flex items-center gap-2 font-bold text-gray-900 uppercase tracking-wider text-[11px]">
                  <MapPin className="w-3.5 h-3.5 text-[#B38E5D]" />
                  <span>Destination Address</span>
                </div>
                <p className="text-gray-700 font-medium leading-relaxed">
                  {activeOrder.shippingAddress?.fullName}<br />
                  {activeOrder.shippingAddress?.addressLine1}<br />
                  {activeOrder.shippingAddress?.city}, {activeOrder.shippingAddress?.state} - {activeOrder.shippingAddress?.pincode}<br />
                  Phone: {activeOrder.shippingAddress?.phone}
                </p>
              </div>

              {/* Estimated Arrival / Assistance */}
              <div className="space-y-2 bg-[#FAF8F5] p-4 border border-[#E8E3DA]">
                <div className="flex items-center gap-2 font-bold text-gray-900 uppercase tracking-wider text-[11px]">
                  <Clock className="w-3.5 h-3.5 text-[#B38E5D]" />
                  <span>Delivery Window</span>
                </div>
                <p className="text-gray-700">
                  {activeOrder.orderStatus === "delivered" ? (
                    <span className="text-emerald-700 font-bold">Delivered to Customer.</span>
                  ) : (
                    <span>
                      Expected Delivery: <strong>Same Day / Tomorrow (4:00 PM - 8:00 PM)</strong>
                    </span>
                  )}
                </p>
                <div className="pt-2 border-t border-gray-200">
                  <a
                    href="https://wa.me/918839715995?text=Hello%20Instant%20Stationery,%20I%20want%20to%20check%20on%20my%20order"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#B38E5D] hover:underline font-bold inline-flex items-center gap-1"
                  >
                    <Phone className="w-3 h-3" />
                    <span>Need Rider Update? Chat with Dispatch (+91 8839715995)</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Items in this Order */}
            <div className="p-6 border-t border-[#E8E3DA]">
              <h3 className="font-bold text-xs uppercase tracking-wider text-gray-900 mb-4">
                Items In This Package ({activeOrder.items?.length || 0})
              </h3>
              <div className="divide-y divide-gray-100">
                {activeOrder.items?.map((item: any) => (
                  <div key={item.id} className="py-3 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gray-100 border border-gray-200 rounded shrink-0 relative overflow-hidden">
                        <Image
                          src={item.image || "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=400&auto=format&fit=crop"}
                          alt={item.productName}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-900">{item.productName}</p>
                        <p className="text-[11px] text-gray-500 font-mono">
                          Qty: {item.quantity} × {formatPrice(item.unitPrice)}
                        </p>
                      </div>
                    </div>
                    <span className="font-bold text-xs text-gray-900 font-mono">
                      {formatPrice(item.totalPrice)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Total Row */}
              <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center text-xs font-bold">
                <span className="uppercase tracking-wider text-gray-600">Total Paid Amount:</span>
                <span className="font-serif text-base text-[#1C1C1C]">
                  {formatPrice(activeOrder.total)}
                </span>
              </div>
            </div>
          </div>
        ) : searched ? (
          <div className="bg-white p-12 text-center border border-[#E8E3DA] space-y-3">
            <AlertCircle className="w-10 h-10 text-amber-500 mx-auto" />
            <h3 className="font-serif text-lg font-bold text-gray-900">
              No Order Found for &ldquo;{query}&rdquo;
            </h3>
            <p className="text-xs text-gray-500 max-w-sm mx-auto">
              Please double check the order reference number or contact our customer support for assistance.
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default function TrackOrderPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#FAF8F5] flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-[#B38E5D] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <TrackOrderContent />
    </Suspense>
  );
}
