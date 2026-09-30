"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Star,
  CheckCircle,
  Building,
  Quote,
  Sparkles,
  Send,
  X,
  CheckCircle2,
  ThumbsUp,
} from "lucide-react";
import { TESTIMONIALS, INSTITUTIONAL_REVIEWS, REVIEW_METRICS } from "@/data/testimonials";

export default function TestimonialsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    rating: 5,
    title: "",
    comment: "",
  });

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReviewSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setReviewSubmitted(false);
      setFormData({ name: "", role: "", rating: 5, title: "", comment: "" });
      alert("Thank you! Your verified review has been submitted and your 10% discount code is: GUPTA10");
    }, 2000);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <div className="bg-[#FAF8F5] border-b border-[#E8E3DA] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#B38E5D]">
            Social Proof & Verified Feedback
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#1C1C1C] mt-2">
            Customer Success Stories & Ratings
          </h1>
          <p className="text-xs sm:text-sm text-[#706E6B] mt-3 leading-relaxed">
            Discover why students, teachers, principals, office managers, and businesses across Raipur trust Gupta Stationery for their daily writing and office procurement.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Star Rating Summary Cards */}
        <div className="bg-[#FAF8F5] border border-[#E8E3DA] p-8 sm:p-10 mb-16 shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Big Rating */}
            <div className="lg:col-span-4 text-center lg:text-left border-b lg:border-b-0 lg:border-r border-[#E8E3DA] pb-6 lg:pb-0 lg:pr-8">
              <div className="font-serif text-5xl sm:text-6xl font-bold text-gray-900">
                {REVIEW_METRICS.overallRating}
                <span className="text-2xl text-gray-400 font-normal"> / 5</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-1 text-amber-500 my-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-gray-600 font-semibold">
                Based on {REVIEW_METRICS.totalReviews}+ Verified Customer Reviews
              </p>

              <div className="grid grid-cols-2 gap-3 mt-6 text-center text-xs">
                <div className="bg-white p-3 border border-[#E8E3DA]">
                  <div className="text-base font-bold text-emerald-800">
                    {REVIEW_METRICS.wouldRecommend}%
                  </div>
                  <div className="text-[10px] text-gray-500 uppercase">Would Recommend</div>
                </div>
                <div className="bg-white p-3 border border-[#E8E3DA]">
                  <div className="text-base font-bold text-emerald-800">
                    {REVIEW_METRICS.repeatCustomerRate}%
                  </div>
                  <div className="text-[10px] text-gray-500 uppercase">Repeat Buyers</div>
                </div>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="mt-6 w-full py-3 bg-[#1C1C1C] text-white text-xs font-bold uppercase tracking-luxury hover:bg-[#B38E5D] transition-colors"
              >
                Write a Review (Get 10% Off)
              </button>
            </div>

            {/* Right Rating Breakdown Bars */}
            <div className="lg:col-span-8 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-4">
                Star Rating Breakdown
              </h3>
              {REVIEW_METRICS.breakdown.map((b) => (
                <div key={b.stars} className="flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-1 w-14 font-semibold text-gray-700">
                    <span>{b.stars} Star</span>
                  </div>
                  <div className="flex-1 bg-[#E8E3DA] h-2.5 rounded-full overflow-hidden">
                    <div
                      className="bg-amber-400 h-full rounded-full transition-all duration-500"
                      style={{ width: `${b.percent}%` }}
                    />
                  </div>
                  <div className="w-24 text-right text-gray-500">
                    <span>{b.count} ({b.percent}%)</span>
                  </div>
                </div>
              ))}

              {/* Positive Feedback Chips */}
              <div className="pt-6 border-t border-[#E8E3DA]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-2.5">
                  Most Frequent Mentions:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {REVIEW_METRICS.topTags.map((t) => (
                    <span
                      key={t.tag}
                      className="px-3 py-1 bg-white border border-[#E8E3DA] text-[11px] font-semibold text-gray-800 flex items-center gap-1"
                    >
                      <ThumbsUp className="w-3 h-3 text-emerald-600" />
                      <span>{t.tag} ({t.mentions})</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Institutional & Corporate Client Endorsements */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#B38E5D]">
              Institutional Partners
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#1C1C1C] mt-1">
              Trusted by Organizations Across Raipur
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INSTITUTIONAL_REVIEWS.map((inst, idx) => (
              <div key={idx} className="bg-[#FAF8F5] border border-[#E8E3DA] p-6 space-y-2">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#B38E5D] uppercase tracking-wider">
                  <Building className="w-4 h-4" />
                  <span>{inst.badge}</span>
                </div>
                <h3 className="font-bold text-sm text-gray-900">{inst.name}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{inst.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Individual Customer Reviews Grid */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#1C1C1C]">
              Customer Reviews & Experiences
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((review) => (
              <div
                key={review.id}
                className="bg-white border border-[#E8E3DA] p-6 flex flex-col justify-between hover:shadow-luxury transition-shadow"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-500">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] text-gray-400">{review.date}</span>
                  </div>

                  <h3 className="font-bold text-sm text-gray-900">
                    &ldquo;{review.title}&rdquo;
                  </h3>

                  <p className="text-xs text-gray-700 leading-relaxed italic">
                    &ldquo;{review.comment}&rdquo;
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-gray-900 flex items-center gap-1">
                      <span>{review.author}</span>
                      {review.verified && (
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                      )}
                    </div>
                    <div className="text-[11px] text-gray-500">{review.role}</div>
                  </div>
                  <span className="text-[10px] bg-emerald-50 text-emerald-800 font-semibold px-2 py-0.5 border border-emerald-200">
                    Verified Buyer
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Write a Review Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white max-w-lg w-full p-6 sm:p-8 border border-[#E8E3DA] shadow-2xl relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-black"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="text-[10px] uppercase font-bold text-[#B38E5D] tracking-widest">
                Share Your Experience
              </span>
              <h3 className="font-serif text-xl font-bold uppercase text-gray-900">
                Write a Customer Review
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">
                Verified reviewers receive a 10% coupon code on their next order!
              </p>
            </div>

            {reviewSubmitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-300 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-sm text-emerald-950">Review Submitted Successfully!</h4>
                <p className="text-xs text-emerald-800">
                  Your review will be posted shortly. Use coupon <strong>GUPTA10</strong> at checkout!
                </p>
              </div>
            ) : (
              <form onSubmit={handleReviewSubmit} className="space-y-3 text-xs">
                <div>
                  <label className="block font-bold text-gray-700 mb-1">Your Rating</label>
                  <div className="flex gap-2 text-amber-500">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setFormData({ ...formData, rating: star })}
                        className="p-1 hover:scale-110 transition-transform"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            formData.rating >= star ? "fill-amber-400" : "text-gray-300"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Anmol Sharma"
                      className="w-full p-2.5 border border-[#E8E3DA] focus:outline-none focus:border-black"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Role / City</label>
                    <input
                      type="text"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      placeholder="School Teacher, Raipur"
                      className="w-full p-2.5 border border-[#E8E3DA] focus:outline-none focus:border-black"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-gray-700 mb-1">Review Headline *</label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Best quality stationery at amazing prices!"
                    className="w-full p-2.5 border border-[#E8E3DA] focus:outline-none focus:border-black"
                  />
                </div>

                <div>
                  <label className="block font-bold text-gray-700 mb-1">Your Detailed Review *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    placeholder="Describe your experience with Gupta Stationery products, delivery speed, and customer service..."
                    className="w-full p-2.5 border border-[#E8E3DA] focus:outline-none focus:border-black"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#1C1C1C] text-white text-xs font-bold uppercase tracking-luxury hover:bg-[#B38E5D] transition-colors"
                >
                  Submit Verified Review
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
