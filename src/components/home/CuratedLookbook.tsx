import React from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export default function CuratedLookbook() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-[11px] uppercase tracking-[0.18em] font-medium text-[#967448]">
            Solutions
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#141416] mt-1.5">
            Crafted for Daily Excellence
          </h2>
        </div>

        {/* 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Corporate & Office Suite */}
          <div className="group bg-[#FBFBFA] border border-[#EAE6DF] rounded-md overflow-hidden flex flex-col justify-between p-8 sm:p-10 hover:border-[#18181B] transition-colors">
            <div className="space-y-4 max-w-md">
              <span className="text-[10px] uppercase font-semibold tracking-wider text-[#967448]">
                For Offices & Enterprises
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#141416]">
                The Corporate Office Suite
              </h3>
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                75 GSM high-speed A4 reams, heavy document folders, Kangaro stapler sets, and ergonomic pens for uninterrupted workflow.
              </p>
              <ul className="space-y-2 text-xs text-[#57534E] pt-1">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Volume discounts up to 60% on copy paper & files</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>GST Tax Invoices with full input tax credit (ITC)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Scheduled recurring monthly delivery across Raipur</span>
                </li>
              </ul>
              <div className="pt-3">
                <Link
                  href="/shop/office-stationery"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#18181B] hover:bg-[#967448] text-white text-xs font-semibold uppercase tracking-wider transition-colors rounded-sm"
                >
                  <span>Explore Office Supplies</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="mt-8 h-56 sm:h-64 rounded bg-white border border-[#EAE6DF] overflow-hidden">
              <img
                src="/images/products/office-supplies.jpg"
                alt="Corporate Office Supplies"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Card 2: Academic & Student Excellence */}
          <div className="group bg-[#FBFBFA] border border-[#EAE6DF] rounded-md overflow-hidden flex flex-col justify-between p-8 sm:p-10 hover:border-[#18181B] transition-colors">
            <div className="space-y-4 max-w-md">
              <span className="text-[10px] uppercase font-semibold tracking-wider text-[#967448]">
                For Schools, Colleges & Students
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#141416]">
                Academic & Exam Readiness
              </h3>
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                Classmate longbooks, wiro spiral notebooks, smooth gel pens, and math register books engineered for clarity and focus.
              </p>
              <ul className="space-y-2 text-xs text-[#57534E] pt-1">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Supplying 50+ educational institutions in Raipur</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Smooth acid-free paper preventing ink bleed-through</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Bulk carton pricing for schools and coaching institutes</span>
                </li>
              </ul>
              <div className="pt-3">
                <Link
                  href="/shop/notebooks-notepads"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#18181B] hover:bg-[#967448] text-white text-xs font-semibold uppercase tracking-wider transition-colors rounded-sm"
                >
                  <span>Explore Student Supplies</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="mt-8 h-56 sm:h-64 rounded bg-white border border-[#EAE6DF] overflow-hidden">
              <img
                src="/images/products/classmate-longbook.jpg"
                alt="Student Notebooks"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
