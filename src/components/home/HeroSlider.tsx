"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, CheckCircle2, ShieldCheck, Leaf, Layers } from "lucide-react";

const HERO_SLIDES = [
  {
    id: 1,
    category: "Luxury & Everyday Writing",
    tagline: "Est. 1990 • 33+ Years of Excellence in Raipur",
    title: "Quality Stationery Since 1990",
    subtitle:
      "Eco-friendly, premium quality notebooks, executive pens, and desk essentials at unbeatable prices. Serving Raipur's schools, colleges, and offices.",
    ctaPrimary: { text: "Explore Catalog", link: "/shop" },
    ctaSecondary: { text: "Wholesale (Up to 60% Off)", link: "/bulk-orders" },
    image: "/images/hero/hero-stationery-1.jpg",
    imageCaption: "✦ Handcrafted Journals & Smooth 100 GSM Acid-Free Paper",
    statBadge: "33+ Yrs in Raipur",
    icon: Sparkles,
  },
  {
    id: 2,
    category: "Sustainable & Plastic-Free",
    tagline: "Eco-Conscious Writing for a Greener Tomorrow",
    title: "The Eco-Friendly Green Range",
    subtitle:
      "Plantable seed pencils with organic basil seeds, 100% recycled paper journals, bamboo rulers, and biodegradable stationery.",
    ctaPrimary: { text: "Shop Eco Range", link: "/shop/eco-friendly-range" },
    ctaSecondary: { text: "Sustainability Story", link: "/about" },
    image: "/images/hero/hero-eco-2.jpg",
    imageCaption: "✦ Plantable Seed Pencils & Recycled Kraft Notebooks",
    statBadge: "100% Biodegradable",
    icon: Leaf,
  },
  {
    id: 3,
    category: "Institutions, Schools & Offices",
    tagline: "Direct Manufacturer Supply & Bulk Savings",
    title: "Wholesale Supply & Bulk Pricing",
    subtitle:
      "Save 15% to 60% on bulk procurement for schools, offices, and institutions. Same-day delivery in Raipur with valid GST invoices for full ITC.",
    ctaPrimary: { text: "Request Bulk Quote", link: "/bulk-orders" },
    ctaSecondary: { text: "View Price Tiers", link: "/bulk-orders#pricing-tiers" },
    image: "/images/hero/hero-bulk-3.jpg",
    imageCaption: "✦ Bulk Supply for Schools, Offices & Exam Centers",
    statBadge: "Up to 60% Off",
    icon: Layers,
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(interval);
  }, []);

  const slide = HERO_SLIDES[currentSlide];
  const IconComponent = slide.icon;

  return (
    <section className="relative w-full bg-[#FAF8F5] text-[#1C1C1C] overflow-hidden border-b border-[#E8E3DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Hero Text & CTAs (7 columns on large screens) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Tagline / Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-[#E8E3DA] text-[#B38E5D] text-xs uppercase tracking-widest font-bold shadow-xs rounded-sm animate-fadeIn">
              <IconComponent className="w-4 h-4 text-[#B38E5D]" />
              <span>{slide.tagline}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-[#1C1C1C] uppercase leading-[1.08]">
              {slide.title}
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl font-normal">
              {slide.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <Link
                href={slide.ctaPrimary.link}
                className="px-8 py-4 bg-[#1C1C1C] text-white text-xs font-bold uppercase tracking-luxury hover:bg-[#B38E5D] transition-all duration-300 shadow-md flex items-center gap-2 rounded-sm"
              >
                <span>{slide.ctaPrimary.text}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={slide.ctaSecondary.link}
                className="px-8 py-4 bg-white border border-[#1C1C1C] text-[#1C1C1C] text-xs font-bold uppercase tracking-luxury hover:bg-[#1C1C1C] hover:text-white transition-all duration-300 shadow-xs rounded-sm"
              >
                {slide.ctaSecondary.text}
              </Link>
            </div>

            {/* Trust Highlights Strip */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-medium text-gray-600 border-t border-[#E8E3DA]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Free Raipur Delivery on orders &gt; ₹500</span>
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>100% Genuine & ISI Certified Brands</span>
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual Card (5 columns on large screens) */}
          <div className="lg:col-span-5">
            <div className="relative bg-white p-3 sm:p-4 rounded-xl border border-[#E8E3DA] shadow-xl">
              {/* Photo Showcase Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-100">
                {HERO_SLIDES.map((s, idx) => (
                  <div
                    key={s.id}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      idx === currentSlide ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 pointer-events-none z-0"
                    }`}
                  >
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      priority={idx === 0}
                      unoptimized
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center"
                    />
                  </div>
                ))}

                {/* Floating Stat Pill on Photo */}
                <div className="absolute top-3 right-3 z-20 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#E8E3DA] shadow-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-800">
                    {slide.statBadge}
                  </span>
                </div>

                {/* Caption Banner at Bottom of Photo */}
                <div className="absolute bottom-0 inset-x-0 z-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white">
                  <p className="text-xs font-semibold tracking-wide drop-shadow-sm">
                    {slide.imageCaption}
                  </p>
                </div>
              </div>

              {/* Slider Controls & Progress Strip */}
              <div className="mt-4 flex items-center justify-between gap-4 pt-2 border-t border-gray-100">
                {/* Dots / Tabs */}
                <div className="flex items-center gap-2">
                  {HERO_SLIDES.map((s, idx) => (
                    <button
                      key={s.id}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === currentSlide ? "w-8 bg-[#B38E5D]" : "w-2 bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Slide Count & Arrows */}
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-gray-500 tracking-wider">
                    0{currentSlide + 1} / 0{HERO_SLIDES.length}
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() =>
                        setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
                      }
                      className="p-2 rounded bg-gray-100 hover:bg-[#1C1C1C] text-gray-700 hover:text-white transition-colors"
                      aria-label="Previous Slide"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
                      className="p-2 rounded bg-gray-100 hover:bg-[#1C1C1C] text-gray-700 hover:text-white transition-colors"
                      aria-label="Next Slide"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
