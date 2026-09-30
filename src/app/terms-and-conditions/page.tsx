import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsAndConditionsPage() {
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
            Terms of Service
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold uppercase text-gray-900 mt-1">
            Terms & Conditions
          </h1>
          <p className="text-xs text-gray-400 mt-1">Gupta Stationery • Est. 1990, Raipur</p>
        </div>

        <div className="prose prose-neutral max-w-none text-xs sm:text-sm text-gray-700 leading-relaxed space-y-6">
          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold uppercase text-gray-900">1. Website Use</h2>
            <p>
              By accessing and using this website or placing orders with Gupta Stationery, you agree to comply with and be bound by these terms. All product descriptions, photography, pricing tables, and blog resources are proprietary to Gupta Stationery.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold uppercase text-gray-900">2. Product Information & Pricing</h2>
            <p>
              We strive for complete accuracy in pricing, GSM specifications, and product dimensions. In the rare event of a typographical error, Gupta Stationery reserves the right to correct prices or cancel affected orders before dispatch with full instant refund.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold uppercase text-gray-900">3. Wholesale & Bulk Purchase Agreements</h2>
            <p>
              Bulk discounts are subject to quantity tiers. Institutional credit terms (15-30 days) require formal business verification and authorized signatory approval.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold uppercase text-gray-900">4. Jurisdiction</h2>
            <p>
              Any disputes arising from transactions on this platform shall be subject to the exclusive jurisdiction of the competent courts in Raipur, Chhattisgarh.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
