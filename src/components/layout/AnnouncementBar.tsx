"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";

const ANNOUNCEMENTS = [
  {
    text: "Same-Day Dispatch in Raipur • Free delivery on orders above ₹500",
    link: "/shipping-policy",
  },
  {
    text: "Wholesale & Institutional Orders — Direct manufacturer pricing for schools & offices",
    link: "/bulk-orders",
  },
  {
    text: "Serving Raipur with trusted stationery and paper essentials since 1990",
    link: "/about",
  },
];

export default function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#141416] text-[#C4C2BC] text-[11px] sm:text-xs tracking-wide border-b border-black/40 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Discreet Support Hotline */}
        <div className="hidden md:flex items-center space-x-3 text-[11px] text-[#9A9890]">
          <a
            href="tel:8839715995"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone className="w-3 h-3 text-[#B38E5D]" />
            <span>Support: +91 8839715995</span>
          </a>
          <span className="text-[#3A3834]">•</span>
          <span>Raipur, CG</span>
        </div>

        {/* Center: Quiet Rotating Announcement */}
        <div className="flex-1 flex items-center justify-center text-center overflow-hidden">
          <Link
            href={ANNOUNCEMENTS[currentIndex].link}
            className="hover:text-white text-[11.5px] sm:text-xs font-normal tracking-wide transition-opacity duration-300 truncate max-w-xl"
          >
            {ANNOUNCEMENTS[currentIndex].text}
          </Link>
        </div>

        {/* Right: Essential Utility Links */}
        <div className="hidden lg:flex items-center space-x-3 text-[11px] text-[#9A9890]">
          <Link href="/bulk-orders" className="hover:text-white transition-colors">
            Wholesale
          </Link>
          <span className="text-[#3A3834]">•</span>
          <Link href="/track-order" className="hover:text-white transition-colors">
            Track Order
          </Link>
        </div>
      </div>
    </div>
  );
}
