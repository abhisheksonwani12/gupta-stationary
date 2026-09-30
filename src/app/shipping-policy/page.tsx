import React from "react";
import Link from "next/link";
import { ArrowLeft, Truck, Clock, ShieldCheck } from "lucide-react";

export default function ShippingPolicyPage() {
  return (
    <div className="bg-white min-h-screen py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-600 hover:text-black mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="border-b border-[#E8E3DA] pb-6 mb-8">
          <span className="text-[10px] uppercase font-bold text-[#B38E5D] tracking-widest">
            Fulfillment & Logistics
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold uppercase text-gray-900 mt-1">
            Shipping & Delivery Policy
          </h1>
          <p className="text-xs text-gray-400 mt-1">Raipur Local & Regional Dispatch Information</p>
        </div>

        <div className="prose prose-neutral max-w-none text-xs sm:text-sm text-gray-700 leading-relaxed space-y-6">
          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold uppercase text-gray-900">1. Delivery Coverage</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Raipur City:</strong> Doorstep delivery via our dedicated internal logistics fleet.</li>
              <li><strong>Outside Raipur (Chhattisgarh & Pan-India):</strong> Dispatched via reliable express courier partners (DTDC, Blue Dart, Delhivery).</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold uppercase text-gray-900">2. Delivery Charges</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>FREE Delivery:</strong> On all orders above ₹500 within Raipur city limits.</li>
              <li><strong>Nominal ₹50 Delivery Fee:</strong> On orders below ₹500 within Raipur.</li>
              <li><strong>Outside Raipur Courier Rates:</strong> Calculated transparently at checkout based on package weight and destination pincode.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold uppercase text-gray-900">3. Delivery Timelines</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Orders placed before 5:00 PM:</strong> Delivered the same day (by 9:00 PM) or next morning across Raipur.</li>
              <li><strong>Orders placed after 5:00 PM:</strong> Delivered within 24-48 hours.</li>
              <li><strong>Bulk Institutional Orders (1,000+ units):</strong> Delivered within 2 to 3 days or as per staggered institutional schedules.</li>
              <li><strong>Outside Raipur:</strong> Delivered within 3 to 7 business days.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold uppercase text-gray-900">4. Live GPS & SMS Tracking</h2>
            <p>
              Once your parcel leaves our Raipur warehouse, an automated tracking SMS and WhatsApp notification containing your delivery agent contact details will be triggered immediately.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
