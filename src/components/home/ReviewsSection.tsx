"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Star, CheckCircle, ChevronLeft, ChevronRight, Quote, Building } from "lucide-react";
import { TESTIMONIALS, INSTITUTIONAL_REVIEWS, REVIEW_METRICS } from "@/data/testimonials";

export default function ReviewsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[activeTestimonial];

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-[#E8E3DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-1.5 text-amber-500 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400" />
            ))}
            <span className="text-xs font-bold text-gray-900 ml-1">4.8 / 5</span>
            <span className="text-xs text-gray-500">({REVIEW_METRICS.totalReviews}+ Verified Customer Reviews)</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl font-bold uppercase tracking-tight text-[#1C1C1C]">
            Customer & Institutional Success Stories
          </h2>
          <div className="w-12 h-0.5 bg-[#B38E5D] mx-auto mt-4" />
        </div>

        {/* Featured Testimonial Card */}
        <div className="bg-[#FAF8F5] border border-[#E8E3DA] p-8 sm:p-12 relative max-w-4xl mx-auto mb-16 shadow-soft">
          <Quote className="absolute top-6 right-6 w-12 h-12 text-[#E8E3DA]" />

          <div className="space-y-4">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>

            <h3 className="font-serif text-lg sm:text-2xl font-bold text-[#1C1C1C]">
              &ldquo;{current.title}&rdquo;
            </h3>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed italic">
              &ldquo;{current.comment}&rdquo;
            </p>

            <div className="pt-4 border-t border-[#E8E3DA] flex items-center justify-between">
              <div>
                <div className="text-sm font-bold text-gray-900 flex items-center gap-1.5">
                  <span>{current.author}</span>
                  {current.verified && (
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  )}
                </div>
                <div className="text-xs text-gray-500">
                  {current.role} {current.company ? `• ${current.company}` : ""}
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="p-2 border border-[#E8E3DA] bg-white hover:bg-black hover:text-white transition-colors"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs text-gray-500">
                  {activeTestimonial + 1} / {TESTIMONIALS.length}
                </span>
                <button
                  onClick={nextTestimonial}
                  className="p-2 border border-[#E8E3DA] bg-white hover:bg-black hover:text-white transition-colors"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Institutional Trust Logos & Snippets */}
        <div className="border-t border-[#E8E3DA] pt-12">
          <div className="text-center text-xs font-bold uppercase tracking-luxury text-[#706E6B] mb-8">
            Trusted by Leading Educational & Corporate Institutions Across Raipur
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INSTITUTIONAL_REVIEWS.map((inst, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E8E3DA] p-5 hover:border-black transition-colors"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-[#B38E5D] uppercase tracking-wider mb-2">
                  <Building className="w-4 h-4" />
                  <span>{inst.badge}</span>
                </div>
                <h4 className="text-sm font-bold text-gray-900 mb-1">{inst.name}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{inst.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Link to all reviews */}
        <div className="text-center mt-12">
          <Link
            href="/testimonials"
            className="text-xs font-bold uppercase tracking-luxury text-[#1C1C1C] hover:text-[#B38E5D] transition-colors border-b border-black pb-1"
          >
            Read All 2,847+ Customer Reviews & Ratings →
          </Link>
        </div>
      </div>
    </section>
  );
}
