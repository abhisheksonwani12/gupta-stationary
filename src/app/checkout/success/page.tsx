"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import {
  CheckCircle2,
  Package,
  Truck,
  Phone,
  MessageSquare,
  Mail,
  Download,
  ArrowRight,
  Printer,
  MapPin,
} from "lucide-react";
import { useInventory } from "@/context/InventoryContext";
import { formatPrice } from "@/lib/utils";

function OrderSuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  const { orders } = useInventory();

  // Look up the created order
  const order = orders.find(
    (o) => o.id === orderId || o.orderNumber === orderId
  ) || orders[0];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen py-12 sm:py-20 selection:bg-[#B38E5D] selection:text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#E8E3DA] p-8 sm:p-12 shadow-soft space-y-8">
          {/* Top Success Icon & Heading */}
          <div className="text-center space-y-3 pb-6 border-b border-[#E8E3DA]">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <span className="text-[10px] uppercase font-bold text-emerald-800 tracking-widest block">
              {order?.paymentStatus === "paid" ? "Payment Confirmed & Verified" : "Order Confirmed (Cash on Delivery)"}
            </span>
            <h1 className="font-serif text-2xl sm:text-4xl font-bold uppercase tracking-tight text-[#1C1C1C]">
              Order Successfully Placed!
            </h1>
            <p className="text-xs text-gray-500 max-w-md mx-auto">
              Thank you for shopping with Instant Stationary. Your order has been registered and is being prepped for dispatch.
            </p>
          </div>

          {/* Key Order Meta Details */}
          {order && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-[#FAF8F5] border border-[#E8E3DA] text-xs">
              <div>
                <span className="text-gray-400 block text-[10px] uppercase font-bold">Order Number</span>
                <strong className="text-gray-900 font-mono">{order.orderNumber || order.id}</strong>
              </div>
              <div>
                <span className="text-gray-400 block text-[10px] uppercase font-bold">Order Date</span>
                <strong className="text-gray-900">
                  {new Date(order.createdAt).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </strong>
              </div>
              <div>
                <span className="text-gray-400 block text-[10px] uppercase font-bold">Expected Delivery</span>
                <strong className="text-emerald-800">
                  {order.deliverySlot === "morning" ? "Tomorrow (10 AM - 1 PM)" : "Tomorrow (4 PM - 7 PM)"}
                </strong>
              </div>
              <div>
                <span className="text-gray-400 block text-[10px] uppercase font-bold">Payment Method</span>
                <strong className="text-gray-900 uppercase">
                  {order.paymentMethod} ({order.paymentStatus})
                </strong>
              </div>
            </div>
          )}

          {/* Items Ordered List */}
          {order && order.items && order.items.length > 0 && (
            <div className="space-y-4">
              <h3 className="font-bold text-xs uppercase tracking-luxury text-gray-900 border-b border-[#E8E3DA] pb-2">
                Items in Your Order ({order.items.length})
              </h3>

              <div className="divide-y divide-gray-100 text-xs">
                {order.items.map((item) => (
                  <div key={item.id} className="py-3 flex justify-between items-center gap-3">
                    <div className="flex items-center gap-3">
                      {item.image && (
                        <div className="w-10 h-10 bg-gray-100 border border-gray-200 rounded relative overflow-hidden shrink-0">
                          <Image
                            src={item.image}
                            alt={item.productName}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div>
                        <div className="font-bold text-gray-900">{item.productName}</div>
                        <div className="text-gray-500 text-[11px]">
                          Quantity: {item.quantity} units {item.selectedColor ? `• ${item.selectedColor}` : ""}
                        </div>
                      </div>
                    </div>
                    <div className="font-bold text-gray-900 font-mono">
                      {formatPrice(item.totalPrice)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Financial Summary */}
              <div className="p-4 bg-[#FAF8F5] border border-[#E8E3DA] space-y-1.5 text-xs">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>{formatPrice(order.subtotal)}</span>
                </div>
                {order.bulkDiscount > 0 && (
                  <div className="flex justify-between text-emerald-800 font-semibold">
                    <span>Wholesale Savings</span>
                    <span>-{formatPrice(order.bulkDiscount)}</span>
                  </div>
                )}
                {order.couponDiscount > 0 && (
                  <div className="flex justify-between text-emerald-800 font-semibold">
                    <span>Coupon Savings</span>
                    <span>-{formatPrice(order.couponDiscount)}</span>
                  </div>
                )}
                <div className="flex justify-between text-gray-600">
                  <span>Raipur Delivery Fee</span>
                  <span>{order.deliveryFee === 0 ? <strong className="text-emerald-700">FREE</strong> : formatPrice(order.deliveryFee)}</span>
                </div>
                <div className="pt-2 border-t border-[#E8E3DA] flex justify-between font-bold text-base text-gray-900">
                  <span>Total Amount</span>
                  <span className="text-xl text-[#1C1C1C] font-serif">{formatPrice(order.total)}</span>
                </div>
              </div>
            </div>
          )}

          {/* Delivery Destination */}
          {order?.shippingAddress && (
            <div className="p-4 bg-white border border-[#E8E3DA] text-xs space-y-1">
              <span className="font-bold uppercase tracking-wider text-gray-700 block flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#B38E5D]" />
                <span>Delivery Address:</span>
              </span>
              <p className="text-gray-900 font-medium">
                {order.shippingAddress.fullName} ({order.shippingAddress.phone})
              </p>
              <p className="text-gray-600">
                {order.shippingAddress.addressLine1}, {order.shippingAddress.city}, {order.shippingAddress.state} - {order.shippingAddress.pincode}
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={handlePrint}
              className="flex-1 py-3.5 bg-white border border-[#1C1C1C] text-[#1C1C1C] text-xs font-bold uppercase tracking-luxury hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Print Tax Invoice (PDF)</span>
            </button>
            <Link
              href={order ? `/track-order?id=${order.id}` : "/track-order"}
              className="flex-1 py-3.5 bg-[#1C1C1C] text-white text-xs font-bold uppercase tracking-luxury hover:bg-[#B38E5D] transition-colors flex items-center justify-center gap-2 text-center"
            >
              <Package className="w-4 h-4" />
              <span>Track Live Delivery Status</span>
            </Link>
          </div>

          {/* What's Next Support Box */}
          <div className="pt-6 border-t border-[#E8E3DA] space-y-3 text-xs">
            <h4 className="font-bold uppercase tracking-wider text-gray-900">
              What Happens Next?
            </h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#B38E5D]" />
                <span>Our Raipur logistics hub is packing and conducting Quality Checks on your items.</span>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Live dispatch notifications and courier tracking have been sent to your registered phone number.</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#B38E5D]" />
                <span>Have a question? WhatsApp or call our Raipur helpline at <strong>+91 8839715995</strong>.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OrderSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#FAF8F5] flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-[#B38E5D] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <OrderSuccessContent />
    </Suspense>
  );
}
