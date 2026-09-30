"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, CheckCircle2, ShieldCheck, Leaf, PenTool } from "lucide-react";

const HERO_SLIDES = [
  {
    id: 1,
    tagline: "Est. 1990 • 33+ Years of Excellence in Raipur",
    title: "The Art of Fine Writing",
    subtitle:
      "Handcrafted executive pens, gold-nib fountain pens, and smooth writing instruments. Engineered for effortless flow and lasting prestige.",
    ctaPrimary: { text: "Shop Pens & Pencils", link: "/shop/pens-pencils" },
    ctaSecondary: { text: "Wholesale (Up to 60% Off)", link: "/bulk-orders" },
    image: "/images/hero/hero-single-pen.jpg",
    itemLabel: "Featured: Mastercraft Fountain Pen",
    icon: PenTool,
  },
  {
    id: 2,
    tagline: "100 GSM Acid-Free • Handcrafted Binding",
    title: "Premium Cloth & Leather Journals",
    subtitle:
      "Hardcover linen journals, spiral notebooks, and ruled diaries crafted with bleed-resistant luxury cream pages for students and professionals.",
    ctaPrimary: { text: "Explore Notebooks", link: "/shop/notebooks-notepads" },
    ctaSecondary: { text: "Institutional Orders", link: "/bulk-orders" },
    image: "/images/hero/hero-single-notebook.jpg",
    itemLabel: "Featured: Aurora Sage Linen Journal",
    icon: Sparkles,
  },
  {
    id: 3,
    tagline: "Zero Waste • Plantable Organic Seeds",
    title: "Eco-Friendly Plantable Stationery",
    subtitle:
      "100% biodegradable wooden seed pencils embedded with organic seeds. Write, plant, and watch them bloom into basil and wildflowers.",
    ctaPrimary: { text: "Explore Green Range", link: "/shop/eco-friendly-range" },
    ctaSecondary: { text: "Our Sustainability Story", link: "/about" },
    image: "/images/hero/hero-single-seedpencil.jpg",
    itemLabel: "Featured: Plantable Seed Pencil",
    icon: Leaf,
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  // Auto-play interval that resets on manual interaction
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const slide = HERO_SLIDES[currentSlide];
  const IconComponent = slide.icon;

  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] lg:min-h-[calc(100vh-90px)] flex items-center overflow-hidden border-b border-[#E8E3DA] select-none">
      {/* Full-Bleed Background Images with Smooth Fade */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((s, idx) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              idx === currentSlide ? "opacity-100 scale-100 z-0" : "opacity-0 pointer-events-none scale-102 z-0"
            }`}
          >
            <Image
              src={s.image}
              alt={s.title}
              fill
              priority={idx === 0}
              unoptimized
              sizes="100vw"
              className="object-cover object-right md:object-center"
            />
          </div>
        ))}

        {/* Luminous left gradient for text contrast, keeping the single item on right completely bright and crisp */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent sm:w-3/4 md:w-3/5 lg:w-1/2 z-[1]" />
        {/* Mobile ambient veil */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px] md:hidden z-[1]" />
      </div>

      {/* Floating Left Edge Navigation Button */}
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          prevSlide();
        }}
        className="hidden md:flex absolute left-4 lg:left-8 z-30 p-3.5 rounded-full bg-white/90 hover:bg-[#1C1C1C] text-[#1C1C1C] hover:text-white border border-[#E8E3DA] backdrop-blur-md transition-all shadow-md hover:scale-110 cursor-pointer active:scale-95"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Floating Right Edge Navigation Button */}
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          nextSlide();
        }}
        className="hidden md:flex absolute right-4 lg:right-8 z-30 p-3.5 rounded-full bg-white/90 hover:bg-[#1C1C1C] text-[#1C1C1C] hover:text-white border border-[#E8E3DA] backdrop-blur-md transition-all shadow-md hover:scale-110 cursor-pointer active:scale-95"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Content Container (Overlaying on top of the background photo) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 w-full">
        <div className="max-w-2xl space-y-6">
          {/* Tagline / Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/90 backdrop-blur-md border border-[#E8E3DA] text-[#B38E5D] text-xs uppercase tracking-widest font-bold shadow-soft rounded-sm animate-fadeIn">
            <IconComponent className="w-3.5 h-3.5 text-[#B38E5D]" />
            <span>{slide.tagline}</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-[58px] font-bold tracking-tight text-[#1C1C1C] uppercase leading-[1.06] drop-shadow-xs">
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

          {/* Trust Highlights Strip */}
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

      {/* Floating Bottom Slider Controls & Item Label */}
      <div className="absolute bottom-6 right-6 lg:right-12 z-30 flex items-center gap-3 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-lg border border-[#E8E3DA] shadow-xl">
        {/* Item Label */}
        <span className="hidden sm:inline-block text-[11px] font-semibold text-gray-500 uppercase tracking-wider pr-3 border-r border-gray-200">
          {slide.itemLabel}
        </span>

        {/* Dot Indicators */}
        <div className="flex items-center gap-1.5 pr-2 border-r border-gray-200">
          {HERO_SLIDES.map((s, idx) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentSlide ? "w-6 bg-[#B38E5D]" : "w-2 bg-gray-300 hover:bg-gray-500"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="text-xs font-bold tracking-widest text-[#1C1C1C]">
          0{currentSlide + 1} / 0{HERO_SLIDES.length}
        </div>

        {/* Mini Arrows */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              prevSlide();
            }}
            className="p-1.5 rounded hover:bg-[#1C1C1C] text-[#1C1C1C] hover:text-white transition-colors cursor-pointer active:scale-90"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              nextSlide();
            }}
            className="p-1.5 rounded hover:bg-[#1C1C1C] text-[#1C1C1C] hover:text-white transition-colors cursor-pointer active:scale-90"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
