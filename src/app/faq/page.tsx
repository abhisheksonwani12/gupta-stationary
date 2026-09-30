"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, ChevronDown, ChevronUp, HelpCircle, Phone, MessageSquare } from "lucide-react";
import { FAQS, FAQ_CATEGORIES } from "@/data/faqs";

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({ "faq-1": true, "faq-2": true, "faq-10": true });

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredFaqs = useMemo(() => {
    return FAQS.filter((item) => {
      const matchCat = selectedCategory === "All" || item.category === selectedCategory;
      const matchSearch =
        searchQuery.trim() === "" ||
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <div className="bg-[#FAF8F5] border-b border-[#E8E3DA] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#B38E5D]">
            Help & Knowledge Base
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#1C1C1C] mt-2">
            Frequently Asked Questions
          </h1>
          <p className="text-xs sm:text-sm text-[#706E6B] mt-3 leading-relaxed">
            Everything you need to know about ordering, Raipur same-day delivery, bulk wholesale discounts, quality certifications, and returns.
          </p>

          {/* Search Box */}
          <div className="mt-8 max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. delivery time, wholesale discount, GST invoice)..."
              className="w-full pl-12 pr-4 py-3.5 bg-white border border-[#E8E3DA] text-xs sm:text-sm focus:outline-none focus:border-black shadow-sm"
            />
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Category Filter Pills */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8 border-b border-[#E8E3DA]">
          {FAQ_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors whitespace-nowrap ${
                selectedCategory === cat
                  ? "bg-[#1C1C1C] text-white"
                  : "bg-[#FAF8F5] border border-[#E8E3DA] text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQs Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-[#FAF8F5] border border-[#E8E3DA] p-8">
              <p className="text-sm font-semibold text-gray-700">No questions found matching your search.</p>
              <p className="text-xs text-gray-500 mt-1">Feel free to contact our customer helpline directly.</p>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = !!openIds[faq.id];
              return (
                <div
                  key={faq.id}
                  className="border border-[#E8E3DA] bg-white transition-colors"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-[#FAF8F5] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-4 h-4 text-[#B38E5D] flex-shrink-0" />
                      <span className="font-bold text-xs sm:text-sm text-gray-900">
                        {faq.question}
                      </span>
                    </div>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-500 flex-shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-gray-700 leading-relaxed border-t border-gray-100 bg-[#FAF8F5]">
                      <div className="pl-7">{faq.answer}</div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-16 bg-[#1C1C1C] text-white p-8 border border-[#333333] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-xl font-bold uppercase text-white">
              Still have questions?
            </h3>
            <p className="text-xs text-[#D1CCC4] mt-1 max-w-md">
              Speak with our stationery specialists at our Raipur desk for immediate assistance.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="tel:8839715995"
              className="px-5 py-3 bg-[#B38E5D] text-white text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
            >
              Call: 8839715995
            </a>
            <a
              href="https://wa.me/918839715995"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#1ebd5a] transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
