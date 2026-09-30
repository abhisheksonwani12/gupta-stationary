import React from "react";
import Link from "next/link";
import { ArrowLeft, RotateCcw, CheckCircle } from "lucide-react";

export default function ReturnPolicyPage() {
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
            Hassle-Free Returns
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold uppercase text-gray-900 mt-1">
            Return & Refund Policy
          </h1>
          <p className="text-xs text-gray-400 mt-1">7-Day Satisfaction Guarantee</p>
        </div>

        <div className="prose prose-neutral max-w-none text-xs sm:text-sm text-gray-700 leading-relaxed space-y-6">
          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold uppercase text-gray-900">1. 7-Day Return Eligibility</h2>
            <p>
              We want you to be 100% satisfied with your stationery purchase. You may return any unopened, unused item in its original packaging within 7 days of delivery for a full refund or replacement.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold uppercase text-gray-900">2. Simple 4-Step Return Process</h2>
            <ol className="list-decimal pl-5 space-y-1">
              <li><strong>Initiate Request:</strong> Contact us via Phone or WhatsApp at <strong>8839715995</strong> or email <strong>guptapapers.ss@gmail.com</strong> with your Order ID.</li>
              <li><strong>Free Reverse Pickup:</strong> Our delivery executive will collect the product from your doorstep in Raipur at zero charge.</li>
              <li><strong>Quick Verification:</strong> Our team checks product integrity within 24 hours.</li>
              <li><strong>Instant Refund:</strong> Funds are remitted directly to your bank account or original payment mode within 48 hours.</li>
            </ol>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold uppercase text-gray-900">3. Damaged or Defective Items</h2>
            <p>
              If an item is damaged in transit or possesses a manufacturing flaw, report it within 24 hours of delivery. We will dispatch a brand-new replacement immediately with no questions asked.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
