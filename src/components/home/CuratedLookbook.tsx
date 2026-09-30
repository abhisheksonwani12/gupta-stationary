import React from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export default function CuratedLookbook() {
  return (
    <section className="py-16 sm:py-24 bg-[#FAF8F5] border-t border-[#E8E3DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#B38E5D]">
            Curated Collections
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold uppercase tracking-tight text-[#1C1C1C] mt-1">
            Built for High Performance
          </h2>
          <div className="w-12 h-0.5 bg-[#B38E5D] mx-auto mt-4" />
        </div>

        {/* 2-Column Split Banner matching Elvy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Corporate & Office Suite */}
          <div className="relative group overflow-hidden bg-white border border-[#E8E3DA] flex flex-col justify-between p-8 sm:p-10 hover:shadow-luxury transition-all duration-300">
            <div className="relative z-10 space-y-4 max-w-md">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#B38E5D] bg-[#FAF8F5] px-2.5 py-1 border border-[#E8E3DA] inline-block">
                For Offices & Businesses
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold uppercase text-[#1C1C1C]">
                The Corporate Office Suite
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                75 GSM high-speed A4 reams, heavy document manila folders, steel stapler sets, and ergonomic pens for flawless daily workflow.
              </p>
              <ul className="space-y-2 text-xs text-gray-700 pt-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Volume discounts up to 40% on copy paper & files</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>GST Tax Invoices with full input tax credit (ITC)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Scheduled recurring monthly delivery to your office</span>
                </li>
              </ul>
              <div className="pt-4">
                <Link
                  href="/shop/office-supplies"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#1C1C1C] text-white text-xs font-bold uppercase tracking-luxury hover:bg-[#B38E5D] transition-colors"
                >
                  <span>Explore Office Supplies</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="mt-8 relative h-64 sm:h-72 overflow-hidden bg-gray-100 border border-[#E8E3DA]">
              <img
                src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=900&auto=format&fit=crop"
                alt="Corporate Office Supplies"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Card 2: Academic & Student Excellence */}
          <div className="relative group overflow-hidden bg-white border border-[#E8E3DA] flex flex-col justify-between p-8 sm:p-10 hover:shadow-luxury transition-all duration-300">
            <div className="relative z-10 space-y-4 max-w-md">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#B38E5D] bg-[#FAF8F5] px-2.5 py-1 border border-[#E8E3DA] inline-block">
                For Schools, Colleges & Students
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold uppercase text-[#1C1C1C]">
                Academic & Exam Readiness
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                200-page smooth ruled notebooks, 15-piece calibrated geometry boxes, non-smudge erasers, and long-lasting 2000+ word ball pens.
              </p>
              <ul className="space-y-2 text-xs text-gray-700 pt-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Trusted by DPS Raipur & 50+ local educational institutions</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Smooth 60 GSM paper that prevents ink bleeding</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Special back-to-school student bundles</span>
                </li>
              </ul>
              <div className="pt-4">
                <Link
                  href="/shop/school-supplies"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#1C1C1C] text-white text-xs font-bold uppercase tracking-luxury hover:bg-[#B38E5D] transition-colors"
                >
                  <span>Explore School Supplies</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="mt-8 relative h-64 sm:h-72 overflow-hidden bg-gray-100 border border-[#E8E3DA]">
              <img
                src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=900&auto=format&fit=crop"
                alt="School and Exam Supplies"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
