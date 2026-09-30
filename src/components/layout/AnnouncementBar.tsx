"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Sparkles, Truck, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";

const ANNOUNCEMENTS = [
  {
    text: "✨ Quality Stationery Since 1990 — Serving Raipur with Excellence",
    link: "/about",
  },
  {
    text: "🚚 FREE Same-Day Delivery on Orders Above ₹500 in Raipur",
    link: "/shipping-policy",
  },
  {
    text: "💼 Wholesale & Bulk Orders: Up to 60% OFF for Schools & Offices",
    link: "/bulk-orders",
  },
  {
    text: "🌱 Explore 100% Eco-Friendly Plantable Pens & Recycled Paper",
    link: "/shop/eco-friendly-range",
  },
];

export default function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + ANNOUNCEMENTS.length) % ANNOUNCEMENTS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
  };

  return (
    <div className="bg-[#1C1C1C] text-[#FAF8F5] text-xs tracking-wider border-b border-[#333333] transition-all">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Left: Direct Helpline */}
        <div className="hidden md:flex items-center space-x-4 text-[11px] text-[#C7BEAF]">
          <a
            href="tel:8839715995"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone className="w-3 h-3 text-[#B38E5D]" />
            <span>Support: +91 8839715995</span>
          </a>
          <span className="text-gray-600">|</span>
          <span>Raipur, CG</span>
        </div>

        {/* Center: Rotating Announcement */}
        <div className="flex-1 flex items-center justify-center space-x-2 text-center overflow-hidden">
          <button
            onClick={handlePrev}
            aria-label="Previous announcement"
            className="p-1 hover:text-[#B38E5D] transition-colors hidden sm:block"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <Link
            href={ANNOUNCEMENTS[currentIndex].link}
            className="hover:underline text-[12px] sm:text-[12.5px] font-medium tracking-wide truncate max-w-xl transition-opacity duration-300"
          >
            {ANNOUNCEMENTS[currentIndex].text}
          </Link>
          <button
            onClick={handleNext}
            aria-label="Next announcement"
            className="p-1 hover:text-[#B38E5D] transition-colors hidden sm:block"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Right: Quick Links */}
        <div className="hidden lg:flex items-center space-x-4 text-[11px] text-[#C7BEAF]">
          <Link href="/bulk-orders" className="hover:text-white transition-colors">
            Wholesale / B2B
          </Link>
          <span className="text-gray-600">|</span>
          <Link href="/contact" className="hover:text-white transition-colors">
            Store Locator
          </Link>
          <span className="text-gray-600">|</span>
          <Link href="/track-order" className="hover:text-white transition-colors">
            Track Order
          </Link>
        </div>
      </div>
    </div>
  );
}
