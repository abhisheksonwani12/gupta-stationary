import React from "react";
import Link from "next/link";
import { ArrowRight, Phone, MessageSquare, FileSpreadsheet, CheckCircle2 } from "lucide-react";

export default function BulkSavingsBanner() {
  return (
    <section className="py-16 sm:py-20 bg-[#1C1C1C] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[500px] h-[500px] bg-[#B38E5D]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Callout */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#B38E5D] bg-white/10 px-3 py-1 inline-block border border-white/20">
              Institutional & Corporate Wholesale
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white leading-tight">
              Wholesale & Bulk Orders — <br className="hidden sm:block" />
              <span className="text-[#B38E5D]">Get Up to 60% Discount!</span>
            </h2>

            <p className="text-xs sm:text-sm text-[#D1CCC4] leading-relaxed max-w-xl">
              Serving schools, coaching centers, corporate offices, and local retailers across Raipur since 1990. Whether you need 50 pens or 50,000 notebooks, Instant Stationary offers guaranteed stock, custom quotes in 2 hours, and same-day delivery.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-[#2A2A2A] border border-[#3D3D3D] p-3.5">
                <div className="text-lg font-bold text-[#B38E5D]">10 - 49 Units</div>
                <div className="text-xs text-gray-300">15% - 20% OFF</div>
              </div>
              <div className="bg-[#2A2A2A] border border-[#3D3D3D] p-3.5">
                <div className="text-lg font-bold text-[#B38E5D]">100 - 499 Units</div>
                <div className="text-xs text-gray-300">40% - 47% OFF</div>
              </div>
              <div className="bg-[#2A2A2A] border border-[#3D3D3D] p-3.5">
                <div className="text-lg font-bold text-[#B38E5D]">500+ Units</div>
                <div className="text-xs text-gray-300">55% - 60% OFF</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-3">
              <Link
                href="/bulk-orders"
                className="px-8 py-4 bg-[#B38E5D] text-white text-xs font-bold uppercase tracking-luxury hover:bg-white hover:text-black transition-colors flex items-center gap-2 shadow-lg"
              >
                <span>Request Custom Bulk Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/918839715995?text=Hello%20Instant%20Stationery,%20I%20want%20to%20inquire%20about%20bulk%20pricing"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-4 bg-[#25D366] text-white text-xs font-bold uppercase tracking-luxury hover:bg-[#1ebd5a] transition-colors flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp: 8839715995</span>
              </a>
            </div>
          </div>

          {/* Right Summary Box */}
          <div className="lg:col-span-5 bg-[#252525] border border-[#3D3D3D] p-6 sm:p-8 space-y-5">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b border-[#3D3D3D] pb-3">
              Simple 5-Step Bulk Order Process
            </h3>

            <div className="space-y-4 text-xs text-[#D1CCC4]">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#B38E5D] text-black font-bold flex items-center justify-center flex-shrink-0 text-xs">
                  1
                </span>
                <div>
                  <strong className="text-white">Browse Our Catalog:</strong> Select items and quantities you need.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#B38E5D] text-black font-bold flex items-center justify-center flex-shrink-0 text-xs">
                  2
                </span>
                <div>
                  <strong className="text-white">Request Quote:</strong> Fill online form or message us on WhatsApp.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#B38E5D] text-black font-bold flex items-center justify-center flex-shrink-0 text-xs">
                  3
                </span>
                <div>
                  <strong className="text-white">Get Custom Pricing:</strong> Receive exact quote within 2 hours.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#B38E5D] text-black font-bold flex items-center justify-center flex-shrink-0 text-xs">
                  4
                </span>
                <div>
                  <strong className="text-white">Confirm Order & Invoice:</strong> Receive GST tax invoice.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#B38E5D] text-black font-bold flex items-center justify-center flex-shrink-0 text-xs">
                  5
                </span>
                <div>
                  <strong className="text-white">Same-Day Delivery:</strong> Delivered across Raipur within 24h.
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#3D3D3D] text-[11px] text-gray-400 flex items-center justify-between">
              <span>GST Compliant Invoicing</span>
              <span>•</span>
              <span>15-30 Days Credit Terms</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
