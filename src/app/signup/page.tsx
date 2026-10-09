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
  Building2,
} from "lucide-react";
import AuthCard from "@/components/auth/AuthCard";

function SignupContent() {
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
                <span>Join The Member Club</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#1C1C1C] leading-[1.15]">
                Get 100 Reward Points On Registration.
              </h1>
              <p className="text-xs sm:text-sm text-gray-600 mt-3 leading-relaxed">
                Whether you are an artist, student, school principal, or corporate procurement officer, create your account in seconds with Phone, Google, or Email.
              </p>
            </div>

            {/* Account Types comparison */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white border border-[#E8E3DA] shadow-soft space-y-2">
                <span className="text-[10px] font-bold uppercase text-[#B38E5D] tracking-wider block">Individual & Student</span>
                <h4 className="font-bold text-xs text-gray-900">Personal Account</h4>
                <p className="text-[11px] text-gray-500 leading-relaxed">
                  Earn loyalty cashback on every order, save favorite items, and enjoy same-day delivery.
                </p>
              </div>

              <div className="p-4 bg-white border border-[#E8E3DA] shadow-soft space-y-2">
                <span className="text-[10px] font-bold uppercase text-emerald-800 tracking-wider block">School / Corporate</span>
                <h4 className="font-bold text-xs text-gray-900">Wholesale Partner</h4>
                <p className="text-[11px] text-gray-500 leading-relaxed">
                  Wholesale bulk discounts up to 60%, 30-day billing support, and GST tax credit invoices.
                </p>
              </div>
            </div>

            {/* Customer Testimonial Snippet */}
            <div className="p-4 bg-[#FAF8F5] border-l-2 border-l-[#B38E5D] text-xs text-gray-600 italic">
              <div className="flex text-amber-500 mb-1">
                {"★".repeat(5)}
              </div>
              &ldquo;The best stationery supplier in Central India. Transparent pricing and prompt door delivery every single time.&rdquo;
              <span className="block not-italic font-bold text-gray-900 mt-1 text-[11px]">
                — Sunil Agrawal, Hira Group Raipur
              </span>
            </div>
          </div>

          {/* Right Auth Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <AuthCard initialMode="signup" redirectTo={redirect} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SignupPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-xs text-gray-500">Loading signup...</div>}>
      <SignupContent />
    </Suspense>
  );
}
