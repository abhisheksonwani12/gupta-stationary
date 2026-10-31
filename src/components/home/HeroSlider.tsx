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
    <section className="relative w-full min-h-[calc(100vh-80px)] lg:min-h-[calc(100vh-90px)] flex items-center overflow-hidden border-b border-[#EAE6DF] select-none bg-[#FAF8F5]">
      {/* Photo Showcase - Shifted towards the right side */}
      <div className="absolute inset-y-0 right-0 w-full md:w-[60%] lg:w-[55%] z-0 overflow-hidden">
        {HERO_SLIDES.map((s, idx) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              idx === currentSlide ? "opacity-100 scale-100" : "opacity-0 pointer-events-none scale-105"
            }`}
          >
            <Image
              src={s.image}
              alt={s.title}
              fill
              priority={idx === 0}
              unoptimized
              sizes="(max-width: 768px) 100vw, 55vw"
              className="object-cover object-right md:object-[90%_center]"
            />
          </div>
        ))}

        {/* Soft edge blend from solid left background into right photo */}
        <div className="hidden md:block absolute inset-y-0 left-0 w-32 lg:w-44 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/60 to-transparent z-[1]" />
        {/* Mobile ambient veil for text readability */}
        <div className="absolute inset-0 bg-[#FAF8F5]/85 backdrop-blur-[1px] md:hidden z-[1]" />
      </div>

      {/* Content Container (Overlaying on top of the left canvas) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32 w-full">
        <div className="max-w-xl lg:max-w-2xl space-y-6">
          {/* Tagline / Minimal Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/90 backdrop-blur-md border border-[#EAE6DF] text-[#967448] text-[11px] uppercase tracking-[0.16em] font-medium rounded-full shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#967448]" />
            <span>{slide.tagline}</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-[#141416] leading-[1.08]">
            {slide.title}
          </h1>

          {/* Subheadline */}
          <p className="text-sm sm:text-base text-[#57534E] leading-relaxed max-w-lg font-normal">
            {slide.subtitle}
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap gap-4 items-center">
            <Link
              href={slide.ctaPrimary.link}
              className="px-7 py-3.5 bg-[#18181B] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#967448] transition-all duration-200 shadow-md flex items-center gap-2 rounded-sm"
            >
              <span>{slide.ctaPrimary.text}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href={slide.ctaSecondary.link}
              className="px-6 py-3.5 text-[#18181B] hover:text-[#967448] text-xs font-semibold tracking-wider uppercase transition-colors"
            >
              {slide.ctaSecondary.text} →
            </Link>
          </div>

          {/* Trust Highlights Strip */}
          <div className="pt-6 flex flex-wrap items-center gap-6 text-xs text-[#78716C] border-t border-[#EAE6DF]/80">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#967448]" />
              <span>Complimentary Raipur Delivery &gt; ₹500</span>
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#967448]" />
              <span>100% Verified Genuine Products</span>
            </span>
          </div>
        </div>
      </div>

      {/* Floating Bottom Slider Controls */}
      <div className="absolute bottom-8 right-6 lg:right-12 z-20 flex items-center gap-3 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-[#EAE6DF] shadow-sm">
        <span className="text-[11px] font-mono text-[#8A8780] font-medium">
          0{currentSlide + 1} / 0{HERO_SLIDES.length}
        </span>
        <div className="flex items-center gap-1.5">
          {HERO_SLIDES.map((s, idx) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentSlide ? "w-5 bg-[#18181B]" : "w-1.5 bg-[#D4D2CD] hover:bg-[#9A9890]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
