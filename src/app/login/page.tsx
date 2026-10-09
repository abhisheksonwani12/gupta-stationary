"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Sparkles,
  ShieldCheck,
  Truck,
  Award,
  Star,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";
import AuthCard from "@/components/auth/AuthCard";

function LoginContent() {
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/account";

  return (
    <div className="min-h-screen bg-[#FAF8F5] py-10 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top return link */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Storefront</span>
          </Link>
        </div>

        {/* 2-Column Split Screen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Brand Banner */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1C1C1C] text-white text-[10px] font-bold uppercase tracking-widest mb-3">
                <Sparkles className="w-3 h-3 text-[#B38E5D]" />
                <span>Serving Raipur Since 1990</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#1C1C1C] leading-[1.15]">
                Fine Stationery & Office Supplies.
              </h1>
              <p className="text-xs sm:text-sm text-gray-600 mt-3 leading-relaxed">
                Log in to access your personal dashboard, track live consignments, view tax invoices, and unlock exclusive member pricing.
              </p>
            </div>

            {/* Member Perks */}
            <div className="bg-white border border-[#E8E3DA] p-5 sm:p-6 space-y-3.5 shadow-soft">
              <h3 className="font-serif font-bold text-xs uppercase text-gray-900 tracking-wider">
                Exclusive Instant Member Privileges:
              </h3>
              <ul className="space-y-2.5 text-xs text-gray-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>100 Welcome Points:</strong> Redeemable immediately at checkout.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Same-Day Dispatch:</strong> Priority morning & evening slots in Raipur.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Wholesale B2B Tiers:</strong> Up to 60% bulk discount on pens and journals.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>GST Tax Invoices:</strong> 1-click compliant PDF downloads for business accounting.</span>
                </li>
              </ul>
            </div>

            {/* Customer Testimonial Snippet */}
            <div className="p-4 bg-[#FAF8F5] border-l-2 border-l-[#B38E5D] text-xs text-gray-600 italic">
              <div className="flex text-amber-500 mb-1">
                {"★".repeat(5)}
              </div>
              &ldquo;Instant Stationary has supplied all our examination booklets and lab registers for 8+ years. Their online ordering is lightning fast!&rdquo;
              <span className="block not-italic font-bold text-gray-900 mt-1 text-[11px]">
                — Fr. Thomas, St. Xavier&apos;s School Raipur
              </span>
            </div>
          </div>

          {/* Right Auth Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <AuthCard initialMode="login" redirectTo={redirect} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-xs text-gray-500">Loading sign in...</div>}>
      <LoginContent />
    </Suspense>
  );
}
