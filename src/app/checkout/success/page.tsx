"use client";

import React from "react";
import Link from "next/link";
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
} from "lucide-react";

export default function OrderSuccessPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen py-12 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#E8E3DA] p-8 sm:p-12 shadow-soft space-y-8">
          {/* Top Success Icon & Heading */}
          <div className="text-center space-y-3 pb-6 border-b border-[#E8E3DA]">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <span className="text-[10px] uppercase font-bold text-emerald-800 tracking-widest">
              Payment Confirmed & Verified
            </span>
            <h1 className="font-serif text-2xl sm:text-4xl font-bold uppercase tracking-tight text-[#1C1C1C]">
              Order Successfully Placed!
            </h1>
            <p className="text-xs text-gray-500">
              A confirmation receipt and live tracking link have been dispatched to your email and SMS.
            </p>
          </div>

          {/* Key Order Meta Details */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-[#FAF8F5] border border-[#E8E3DA] text-xs">
            <div>
              <span className="text-gray-400 block text-[10px] uppercase font-bold">Order Number</span>
              <strong className="text-gray-900 font-mono">GS-0089456</strong>
            </div>
            <div>
              <span className="text-gray-400 block text-[10px] uppercase font-bold">Order Date</span>
              <strong className="text-gray-900">Today, 3:45 PM</strong>
            </div>
            <div>
              <span className="text-gray-400 block text-[10px] uppercase font-bold">Expected Delivery</span>
              <strong className="text-emerald-800">Tomorrow (4 - 7 PM)</strong>
            </div>
            <div>
              <span className="text-gray-400 block text-[10px] uppercase font-bold">Payment Method</span>
              <strong className="text-gray-900 uppercase">UPI Confirmed</strong>
            </div>
          </div>

          {/* Items Ordered List */}
          <div className="space-y-4">
            <h3 className="font-bold text-xs uppercase tracking-luxury text-gray-900 border-b border-[#E8E3DA] pb-2">
              Items in Your Order
            </h3>

            <div className="divide-y divide-gray-100 text-xs">
              <div className="py-2.5 flex justify-between items-center">
                <div>
                  <div className="font-bold text-gray-900">Gupta Premium Ball Pen (Blue)</div>
                  <div className="text-gray-500">Quantity: 10 units (Bulk Tier Rate)</div>
                </div>
                <div className="font-bold text-gray-900">₹120.00</div>
              </div>

              <div className="py-2.5 flex justify-between items-center">
                <div>
                  <div className="font-bold text-gray-900">Gupta Eco Notebook (200 Pages)</div>
                  <div className="text-gray-500">Quantity: 5 units</div>
                </div>
                <div className="font-bold text-gray-900">₹250.00</div>
              </div>

              <div className="py-2.5 flex justify-between items-center">
                <div>
                  <div className="font-bold text-gray-900">A4 Copy Paper Ream (500 Sheets, 75 GSM)</div>
                  <div className="text-gray-500">Quantity: 2 reams</div>
                </div>
                <div className="font-bold text-gray-900">₹560.00</div>
              </div>
            </div>

            {/* Financial Summary */}
            <div className="p-4 bg-[#FAF8F5] border border-[#E8E3DA] space-y-1.5 text-xs">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>₹930.00</span>
              </div>
              <div className="flex justify-between text-emerald-800 font-semibold">
                <span>Bulk Wholesale Discount</span>
                <span>-₹140.00</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Raipur Same-Day Delivery</span>
                <span className="text-emerald-700 font-bold">FREE</span>
              </div>
              <div className="pt-2 border-t border-[#E8E3DA] flex justify-between font-bold text-base text-gray-900">
                <span>Total Paid</span>
                <span>₹790.00</span>
              </div>
            </div>
          </div>

          {/* Delivery Destination */}
          <div className="p-4 bg-white border border-[#E8E3DA] text-xs space-y-1">
            <span className="font-bold uppercase tracking-wider text-gray-700 block">
              Delivery Address:
            </span>
            <p className="text-gray-900 font-medium">
              Anmol Sharma (+91 8839715995)
            </p>
            <p className="text-gray-600">
              Mowa, Dubey Colony, Near Durga Temple, Raipur, Chhattisgarh - 492001
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={handlePrint}
              className="flex-1 py-3.5 bg-white border border-[#1C1C1C] text-[#1C1C1C] text-xs font-bold uppercase tracking-luxury hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Tax Invoice (PDF)</span>
            </button>
            <Link
              href="/account"
              className="flex-1 py-3.5 bg-[#1C1C1C] text-white text-xs font-bold uppercase tracking-luxury hover:bg-[#B38E5D] transition-colors flex items-center justify-center gap-2 text-center"
            >
              <Package className="w-4 h-4" />
              <span>Track Order in Dashboard</span>
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
                <span>Our Raipur logistics team is preparing your parcel for next morning dispatch.</span>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Live GPS delivery tracking link will be sent via SMS / WhatsApp to 8839715995.</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#B38E5D]" />
                <span>Need to modify order details? Call our Raipur desk directly at <strong>8839715995</strong>.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
