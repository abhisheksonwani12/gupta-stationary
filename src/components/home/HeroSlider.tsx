"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, CheckCircle2 } from "lucide-react";

const HERO_SLIDES = [
  {
    id: 1,
    tagline: "Est. 1990 • 33+ Years of Excellence in Raipur",
    title: "Quality Stationery Since 1990",
    subtitle:
      "Eco-friendly, Premium Quality Stationery at the Lowest Prices. Serving schools, offices, and bulk buyers across Raipur with guaranteed stock.",
    ctaPrimary: { text: "Shop Catalog", link: "/shop" },
    ctaSecondary: { text: "Wholesale (Up to 60% Off)", link: "/bulk-orders" },
    image:
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=1920&auto=format&fit=crop",
    badge: "Raipur's #1 Stationery Supplier",
  },
  {
    id: 2,
    tagline: "Sustainable Writing & Responsible Paper",
    title: "The Eco-Friendly Green Range",
    subtitle:
      "Plantable seed pens, 100% recycled paper notebooks, and plastic-free natural rubber erasers crafted for a conscious lifestyle.",
    ctaPrimary: { text: "Explore Eco Range", link: "/shop/eco-friendly-range" },
    ctaSecondary: { text: "Our Sustainability Story", link: "/about" },
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1920&auto=format&fit=crop",
    badge: "100% Plastic-Free Packaging",
  },
  {
    id: 3,
    tagline: "Direct Manufacturer Procurement",
    title: "Bulk Supply & Wholesale Pricing",
    subtitle:
      "Save 15% to 60% on volume orders. Same-day delivery in Raipur, GST invoices with ITC, and dedicated institutional support.",
    ctaPrimary: { text: "Request Bulk Quote", link: "/bulk-orders" },
    ctaSecondary: { text: "View Price Tiers", link: "/bulk-orders#pricing-tiers" },
    image:
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=1920&auto=format&fit=crop",
    badge: "Same-Day Raipur Dispatch",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section className="relative w-full min-h-[580px] lg:min-h-[660px] bg-[#FAF8F5] text-[#1C1C1C] flex items-center overflow-hidden border-b border-[#E8E3DA]">
      {/* Background Bright Image with Crisp Right Visibility & Left Text Readability */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((s, idx) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-100 scale-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={s.image}
              alt={s.title}
              fill
              priority={idx === 0}
              sizes="100vw"
              className="object-cover object-right md:object-center"
            />
          </div>
        ))}

        {/* Soft directional gradient: solid readable left on desktop, transparent bright right */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent sm:w-3/4 md:w-2/3 lg:w-1/2 z-[1]" />
        {/* Mobile ambient veil */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px] md:hidden z-[1]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
        <div className="max-w-2xl space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/90 backdrop-blur-md border border-[#E8E3DA] text-[#895037] text-xs uppercase tracking-widest font-bold shadow-soft animate-fadeIn">
            <Sparkles className="w-3.5 h-3.5 text-[#B38E5D]" />
            <span>{slide.tagline}</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1C1C1C] uppercase leading-[1.1] drop-shadow-sm">
            {slide.title}
          </h1>

          {/* Subheadline */}
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl font-normal">
            {slide.subtitle}
          </p>

          {/* Action CTAs */}
          <div className="pt-3 flex flex-wrap gap-4 items-center">
            <Link
              href={slide.ctaPrimary.link}
              className="px-8 py-4 bg-[#1C1C1C] text-white text-xs font-bold uppercase tracking-luxury hover:bg-[#B38E5D] transition-all duration-300 shadow-xl flex items-center gap-2"
            >
              <span>{slide.ctaPrimary.text}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={slide.ctaSecondary.link}
              className="px-8 py-4 bg-white/90 border border-[#1C1C1C] text-[#1C1C1C] text-xs font-bold uppercase tracking-luxury hover:bg-[#1C1C1C] hover:text-white transition-all duration-300 backdrop-blur-sm shadow-soft"
            >
              {slide.ctaSecondary.text}
            </Link>
          </div>

          {/* Trust Highlights */}
          <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-medium text-gray-600 border-t border-[#E8E3DA]/80">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Free Raipur Delivery &gt; ₹500</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>100% Genuine & ISI Certified</span>
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2.5">
        <button
          onClick={() =>
            setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
          }
          className="p-3 bg-white/90 hover:bg-[#1C1C1C] text-[#1C1C1C] hover:text-white border border-[#E8E3DA] backdrop-blur-md transition-colors shadow-soft"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <div className="px-2 text-xs font-bold tracking-widest text-[#1C1C1C]">
          0{currentSlide + 1} / 0{HERO_SLIDES.length}
        </div>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
          className="p-3 bg-white/90 hover:bg-[#1C1C1C] text-[#1C1C1C] hover:text-white border border-[#E8E3DA] backdrop-blur-md transition-colors shadow-soft"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
