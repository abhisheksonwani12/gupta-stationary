"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Award,
  Leaf,
  ShieldCheck,
  Tag,
  PackageCheck,
  Truck,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const VALUE_PROPS = [
  {
    icon: Award,
    badge: "Est. 1990",
    title: "33+ Years of Trust",
    description:
      "Serving schools, colleges, institutions, and businesses across Raipur and Chhattisgarh since 1990 with unwavering consistency.",
    image:
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=900&auto=format&fit=crop",
    tag: "Legacy of Quality",
    link: "/about",
  },
  {
    icon: Leaf,
    badge: "100% Eco",
    title: "Eco-Friendly Products",
    description:
      "Leading the green shift with plantable seed pens, 100% recycled paper notebooks, and biodegradable natural rubber erasers.",
    image:
      "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=900&auto=format&fit=crop",
    tag: "Sustainable Living",
    link: "/shop/eco-friendly-range",
  },
  {
    icon: ShieldCheck,
    badge: "ISI Certified",
    title: "Best Quality Guaranteed",
    description:
      "ISI-certified materials, rigorous batch testing, and 100% genuine products backed by direct replacement warranties.",
    image:
      "https://images.unsplash.com/photo-1585336261026-77cc7c97f266?q=80&w=900&auto=format&fit=crop",
    tag: "Tested & Approved",
    link: "/about",
  },
  {
    icon: Tag,
    badge: "Direct Sourcing",
    title: "Lowest Prices in Raipur",
    description:
      "Direct manufacturer sourcing eliminates middlemen, passing 15% to 60% bulk volume savings directly to you.",
    image:
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=900&auto=format&fit=crop",
    tag: "Wholesale Value",
    link: "/bulk-orders",
  },
  {
    icon: PackageCheck,
    badge: "Curated Brands",
    title: "Own Brand + Premium Brands",
    description:
      "Choose our signature high-performance Gupta's range or authorized stock from Cello, Pilot, Faber-Castell, and Paper Mate.",
    image:
      "https://images.unsplash.com/photo-1569683795645-b62e50fbf103?q=80&w=900&auto=format&fit=crop",
    tag: "1000+ Products",
    link: "/shop",
  },
  {
    icon: Truck,
    badge: "Within 24 Hours",
    title: "Same-Day Raipur Delivery",
    description:
      "Order before 5 PM for same-day delivery across Raipur. Free doorstep shipping on all retail orders above ₹500.",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=900&auto=format&fit=crop",
    tag: "Fast & Free > ₹500",
    link: "/shipping-policy",
  },
];

export default function WhyChooseUs() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const totalSlides = VALUE_PROPS.length;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, totalSlides - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Auto scroll effect
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, maxIndex]);

  return (
    <section
      className="py-16 sm:py-24 bg-[#FAF8F5] border-y border-[#E8E3DA] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.25em] font-bold text-[#B38E5D]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Why Choose Gupta Stationery</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold uppercase tracking-tight text-[#1C1C1C] mt-2">
              Raipur&apos;s Most Trusted Stationery Partner
            </h2>
            <div className="w-12 h-0.5 bg-[#B38E5D] mt-3" />
          </div>

          {/* Carousel Arrows & Counter */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <div className="text-xs font-mono font-medium text-[#706E6B] mr-2">
              0{currentIndex + 1} <span className="text-gray-400">/ 0{maxIndex + 1}</span>
            </div>

            <button
              onClick={prevSlide}
              className="p-3 bg-white border border-[#E8E3DA] hover:bg-[#1C1C1C] hover:text-white hover:border-[#1C1C1C] text-[#1C1C1C] transition-colors rounded shadow-sm"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={nextSlide}
              className="p-3 bg-white border border-[#E8E3DA] hover:bg-[#1C1C1C] hover:text-white hover:border-[#1C1C1C] text-[#1C1C1C] transition-colors rounded shadow-sm"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {VALUE_PROPS.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    style={{ width: `${100 / itemsPerView}%` }}
                    className="flex-shrink-0 px-3"
                  >
                    <div className="h-full bg-white border border-[#E8E3DA] flex flex-col justify-between overflow-hidden group hover:shadow-luxury hover:border-[#1C1C1C]/40 transition-all duration-300 rounded">
                      {/* Card Image Header with subtle overlay */}
                      <div className="relative h-44 sm:h-52 overflow-hidden bg-gray-100">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

                        {/* Top Badge */}
                        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 text-[10px] uppercase font-bold tracking-wider text-[#1C1C1C] rounded-sm">
                          {item.badge}
                        </div>

                        {/* Floating Icon */}
                        <div className="absolute bottom-3 left-3 w-10 h-10 rounded bg-[#1C1C1C] text-[#B38E5D] flex items-center justify-center shadow-md">
                          <Icon className="w-5 h-5" />
                        </div>

                        {/* Bottom Tag */}
                        <div className="absolute bottom-3 right-3 text-[11px] font-semibold text-white/90 tracking-wide">
                          {item.tag}
                        </div>
                      </div>

                      {/* Card Content Body */}
                      <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                        <div>
                          <h3 className="text-base sm:text-lg font-bold uppercase tracking-wider text-[#1C1C1C] group-hover:text-[#B38E5D] transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-[#706E6B] mt-2 leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-[11px] font-semibold text-[#B38E5D] uppercase tracking-wider">
                          <div className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            <span>Gupta Guarantee</span>
                          </div>
                          <Link
                            href={item.link}
                            className="text-gray-500 hover:text-black transition-colors inline-flex items-center gap-1"
                          >
                            <span>Details</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {[...Array(maxIndex + 1)].map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCurrentIndex(dotIdx)}
                className={`h-2 transition-all duration-300 rounded-full ${
                  dotIdx === currentIndex
                    ? "w-8 bg-[#1C1C1C]"
                    : "w-2 bg-[#E8E3DA] hover:bg-gray-400"
                }`}
                aria-label={`Go to slide group ${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
