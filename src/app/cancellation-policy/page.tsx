import React from "react";
import Link from "next/link";
import { ArrowLeft, XCircle } from "lucide-react";

export default function CancellationPolicyPage() {
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
            Order Modification
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold uppercase text-gray-900 mt-1">
            Cancellation Policy
          </h1>
          <p className="text-xs text-gray-400 mt-1">Prompt Order Cancellation Guidelines</p>
        </div>

        <div className="prose prose-neutral max-w-none text-xs sm:text-sm text-gray-700 leading-relaxed space-y-6">
          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold uppercase text-gray-900">1. Cancellation Window</h2>
            <p>
              Orders can be cancelled free of charge within <strong>1 hour</strong> of placement, provided the parcel has not yet been dispatched from our Raipur fulfillment center.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold uppercase text-gray-900">2. How to Cancel</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Hotline:</strong> Call our Raipur desk at <strong>+91 8839715995</strong>.</li>
              <li><strong>WhatsApp:</strong> Message us at <strong>+91 8839715995</strong> with your Order ID.</li>
              <li><strong>Email:</strong> Send a cancellation notice to <strong>guptapapers.ss@gmail.com</strong>.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold uppercase text-gray-900">3. Refund Timeline</h2>
            <p>
              Upon successful cancellation, your full payment will be refunded within 24 hours, crediting your original payment source within 2-3 business days.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
