import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export default function PrivacyPolicyPage() {
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
            Legal & Compliance
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold uppercase text-gray-900 mt-1">
            Privacy Policy
          </h1>
          <p className="text-xs text-gray-400 mt-1">Last Updated: August 2024 • Gupta Stationery, Raipur</p>
        </div>

        <div className="prose prose-neutral max-w-none text-xs sm:text-sm text-gray-700 leading-relaxed space-y-6">
          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold uppercase text-gray-900">1. Information We Collect</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Personal Information:</strong> Full name, billing and delivery address, email address, phone number, and GST number for corporate accounts.</li>
              <li><strong>Payment Information:</strong> Encrypted payment transaction IDs processed securely via RBI-authorized payment gateways. We never store credit/debit card numbers on our servers.</li>
              <li><strong>Browsing & Order History:</strong> Product views, cart selections, and past purchase receipts to facilitate faster order replenishment.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold uppercase text-gray-900">2. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>To fulfill and dispatch retail and wholesale stationery orders across Raipur and Chhattisgarh.</li>
              <li>To transmit automated SMS/WhatsApp dispatch alerts and live tracking links.</li>
              <li>To provide GST tax invoices for business expense claiming.</li>
              <li>To communicate special bulk tier pricing and seasonal back-to-school promotional coupons (only with your explicit opt-in).</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold uppercase text-gray-900">3. Data Security & Storage</h2>
            <p>
              We implement industry-standard 256-bit SSL encryption across all website transactions. We never sell, rent, or trade your personal data to external advertisers or brokers.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold uppercase text-gray-900">4. Contact For Privacy Queries</h2>
            <p>
              If you have questions regarding data privacy or wish to delete your account records, please contact our Data Officer at: <a href="mailto:guptapapers.ss@gmail.com" className="text-[#B38E5D] underline font-semibold">guptapapers.ss@gmail.com</a> or call <strong>+91 8839715995</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
