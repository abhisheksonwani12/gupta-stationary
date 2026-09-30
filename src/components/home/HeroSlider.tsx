"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, CheckCircle2, ShieldCheck, Leaf, Layers } from "lucide-react";

const HERO_SLIDES = [
  {
    id: 1,
    tagline: "Est. 1990 • 33+ Years of Excellence in Raipur",
    title: "Quality Stationery Since 1990",
    subtitle:
      "Eco-friendly, premium quality notebooks, executive pens, and desk essentials at unbeatable prices. Serving Raipur's schools, colleges, and offices.",
    ctaPrimary: { text: "Shop Catalog", link: "/shop" },
    ctaSecondary: { text: "Wholesale (Up to 60% Off)", link: "/bulk-orders" },
    image: "/images/hero/hero-stationery-1.jpg",
    icon: Sparkles,
  },
  {
    id: 2,
    tagline: "Sustainable Writing & Responsible Paper",
    title: "The Eco-Friendly Green Range",
    subtitle:
      "Plantable seed pens and pencils with organic seeds, 100% recycled paper journals, bamboo rulers, and plastic-free eco stationery.",
    ctaPrimary: { text: "Explore Eco Range", link: "/shop/eco-friendly-range" },
    ctaSecondary: { text: "Our Sustainability Story", link: "/about" },
    image: "/images/hero/hero-eco-2.jpg",
    icon: Leaf,
  },
  {
    id: 3,
    tagline: "Direct Manufacturer Supply & Volume Savings",
    title: "Wholesale Supply & Bulk Pricing",
    subtitle:
      "Save 15% to 60% on volume orders. Same-day delivery across Raipur, valid GST invoices with input tax credit, and dedicated institutional support.",
    ctaPrimary: { text: "Request Bulk Quote", link: "/bulk-orders" },
    ctaSecondary: { text: "View Price Tiers", link: "/bulk-orders#pricing-tiers" },
    image: "/images/hero/hero-bulk-3.jpg",
    icon: Layers,
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
  const IconComponent = slide.icon;

  return (
    <section className="relative w-full min-h-[580px] lg:min-h-[660px] flex items-center overflow-hidden border-b border-[#E8E3DA]">
      {/* Full-Bleed Background Images with Smooth Crossfade */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((s, idx) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-100 scale-100" : "opacity-0 pointer-events-none scale-105"
            }`}
          >
            <Image
              src={s.image}
              alt={s.title}
              fill
              priority={idx === 0}
              unoptimized
              sizes="100vw"
              className="object-cover object-right lg:object-center"
            />
          </div>
        ))}

        {/* Luminous Directional Gradient Overlay: Solid white/cream on left for crisp readability, transparent on right to let bright stationery shine through */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent sm:w-4/5 md:w-3/5 lg:w-1/2 z-[1]" />
        {/* Mobile ambient veil */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px] md:hidden z-[1]" />
      </div>

      {/* Content Container (Overlaying on top of the background photo) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
        <div className="max-w-2xl space-y-6">
          {/* Tagline / Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/90 backdrop-blur-md border border-[#E8E3DA] text-[#B38E5D] text-xs uppercase tracking-widest font-bold shadow-soft animate-fadeIn rounded-sm">
            <IconComponent className="w-3.5 h-3.5 text-[#B38E5D]" />
            <span>{slide.tagline}</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-[#1C1C1C] uppercase leading-[1.08] drop-shadow-xs">
            {slide.title}
          </h1>

          {/* Subheadline */}
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl font-normal">
            {slide.subtitle}
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap gap-4 items-center">
            <Link
              href={slide.ctaPrimary.link}
              className="px-8 py-4 bg-[#1C1C1C] text-white text-xs font-bold uppercase tracking-luxury hover:bg-[#B38E5D] transition-all duration-300 shadow-xl flex items-center gap-2 rounded-sm"
            >
              <span>{slide.ctaPrimary.text}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={slide.ctaSecondary.link}
              className="px-8 py-4 bg-white/95 border border-[#1C1C1C] text-[#1C1C1C] text-xs font-bold uppercase tracking-luxury hover:bg-[#1C1C1C] hover:text-white transition-all duration-300 backdrop-blur-sm shadow-soft rounded-sm"
            >
              {slide.ctaSecondary.text}
            </Link>
          </div>

          {/* Trust Highlights */}
          <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-medium text-gray-700 border-t border-[#E8E3DA]">
            <span className="flex items-center gap-1.5 bg-white/80 px-2.5 py-1 rounded backdrop-blur-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Free Raipur Delivery &gt; ₹500</span>
            </span>
            <span className="flex items-center gap-1.5 bg-white/80 px-2.5 py-1 rounded backdrop-blur-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>100% Genuine & ISI Certified</span>
            </span>
          </div>
        </div>
      </div>

      {/* Floating Bottom Right Slider Navigation Controls */}
      <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-lg border border-[#E8E3DA] shadow-lg">
        {/* Dot indicators */}
        <div className="flex items-center gap-1.5 pr-2 border-r border-gray-200">
          {HERO_SLIDES.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentSlide ? "w-6 bg-[#B38E5D]" : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="text-xs font-bold tracking-widest text-[#1C1C1C]">
          0{currentSlide + 1} / 0{HERO_SLIDES.length}
        </div>

        {/* Arrows */}
        <div className="flex items-center gap-1">
          <button
            onClick={() =>
              setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
            }
            className="p-1.5 rounded hover:bg-[#1C1C1C] text-[#1C1C1C] hover:text-white transition-colors"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
            className="p-1.5 rounded hover:bg-[#1C1C1C] text-[#1C1C1C] hover:text-white transition-colors"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
