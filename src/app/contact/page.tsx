"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  HelpCircle,
  Truck,
  Building,
  ShieldCheck,
} from "lucide-react";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "general",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <div className="bg-[#FAF8F5] border-b border-[#E8E3DA] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#B38E5D]">
            Get In Touch
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#1C1C1C] mt-2">
            Contact Gupta Stationery
          </h1>
          <p className="text-xs sm:text-sm text-[#706E6B] mt-3 leading-relaxed">
            Have a question about a product, need a custom bulk order quotation, or want same-day delivery updates? We are here to assist you 7 days a week.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-[#FAF8F5] border border-[#E8E3DA] p-6 space-y-3">
            <div className="w-10 h-10 bg-white border border-[#E8E3DA] flex items-center justify-center text-[#B38E5D]">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-xs uppercase tracking-wider text-gray-900">
              Phone Support
            </h3>
            <p className="text-xs text-gray-600">Best for urgent inquiries & fast ordering.</p>
            <a
              href="tel:8839715995"
              className="font-bold text-sm text-[#1C1C1C] hover:text-[#B38E5D] block pt-1"
            >
              +91 8839715995
            </a>
            <span className="text-[11px] text-gray-400 block">Mon - Sat: 10 AM - 11 PM</span>
          </div>

          <div className="bg-[#FAF8F5] border border-[#E8E3DA] p-6 space-y-3">
            <div className="w-10 h-10 bg-white border border-[#E8E3DA] flex items-center justify-center text-emerald-600">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-xs uppercase tracking-wider text-gray-900">
              WhatsApp Desk
            </h3>
            <p className="text-xs text-gray-600">Send photos of required items for quick quotes.</p>
            <a
              href="https://wa.me/918839715995"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-sm text-emerald-800 hover:underline block pt-1"
            >
              +91 8839715995
            </a>
            <span className="text-[11px] text-emerald-700 font-medium block">Instant Replies</span>
          </div>

          <div className="bg-[#FAF8F5] border border-[#E8E3DA] p-6 space-y-3">
            <div className="w-10 h-10 bg-white border border-[#E8E3DA] flex items-center justify-center text-[#B38E5D]">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-xs uppercase tracking-wider text-gray-900">
              Email Correspondence
            </h3>
            <p className="text-xs text-gray-600">For formal tender inquiries & GST invoicing.</p>
            <a
              href="mailto:guptapapers.ss@gmail.com"
              className="font-bold text-xs text-[#1C1C1C] hover:text-[#B38E5D] block pt-1 truncate"
            >
              guptapapers.ss@gmail.com
            </a>
            <span className="text-[11px] text-gray-400 block">Response within 24 hours</span>
          </div>

          <div className="bg-[#FAF8F5] border border-[#E8E3DA] p-6 space-y-3">
            <div className="w-10 h-10 bg-white border border-[#E8E3DA] flex items-center justify-center text-[#B38E5D]">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-xs uppercase tracking-wider text-gray-900">
              Store Location
            </h3>
            <p className="text-xs text-gray-600">Visit our flagship retail & wholesale outlet.</p>
            <address className="not-italic text-xs text-[#1C1C1C] font-medium pt-1">
              Mowa, Dubey Colony, Near Durga Temple, Raipur, CG - 492001
            </address>
          </div>
        </div>

        {/* Form and Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left: Contact Form */}
          <div className="lg:col-span-7 bg-[#FAF8F5] border border-[#E8E3DA] p-8 sm:p-10">
            <div className="mb-6">
              <span className="text-[10px] uppercase font-bold text-[#B38E5D] tracking-widest">
                Send a Message
              </span>
              <h2 className="font-serif text-2xl font-bold uppercase text-gray-900 mt-1">
                Quick Contact Form
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                We respond within 2-4 hours during business working hours.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-300 text-center space-y-3">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <h3 className="font-bold text-sm text-emerald-950">Message Sent Successfully!</h3>
                <p className="text-xs text-emerald-800 max-w-sm mx-auto">
                  Thank you, <strong className="text-black">{formData.name}</strong>. Our team has received your message and will get back to you shortly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-2 px-6 py-2 bg-[#1C1C1C] text-white text-xs font-bold uppercase tracking-luxury"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Verma"
                      className="w-full bg-white border border-[#E8E3DA] p-3 focus:outline-none focus:border-black"
                    />
                  </div>
                  <div>
                    <label className="block font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full bg-white border border-[#E8E3DA] p-3 focus:outline-none focus:border-black"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="10-digit mobile"
                      className="w-full bg-white border border-[#E8E3DA] p-3 focus:outline-none focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="block font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-white border border-[#E8E3DA] p-3 focus:outline-none focus:border-black cursor-pointer"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="bulk">Bulk Order & Wholesale</option>
                      <option value="product">Product Information</option>
                      <option value="complaint">Feedback / Complaint</option>
                      <option value="reseller">Partnership / Reseller</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe what you need or how we can assist you..."
                    className="w-full bg-white border border-[#E8E3DA] p-3 focus:outline-none focus:border-black"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#1C1C1C] text-white text-xs font-bold uppercase tracking-luxury hover:bg-[#B38E5D] transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Right: Store Map & Hours */}
          <div className="lg:col-span-5 space-y-6">
            {/* Interactive Map Visual Mock */}
            <div className="border border-[#E8E3DA] bg-[#FAF8F5] overflow-hidden">
              <div className="h-64 bg-[#E8E3DA] relative flex items-center justify-center p-6 text-center">
                <div className="space-y-2 bg-white/95 p-5 border border-[#1C1C1C] shadow-lg max-w-xs">
                  <MapPin className="w-6 h-6 text-[#B38E5D] mx-auto" />
                  <h4 className="font-bold text-xs uppercase text-gray-900">Gupta Stationery</h4>
                  <p className="text-[11px] text-gray-600">
                    Mowa, Dubey Colony, Near Durga Temple, Raipur, Chhattisgarh
                  </p>
                  <a
                    href="https://maps.google.com/?q=Mowa,Dubey+Colony,Raipur"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block pt-1 text-[11px] font-bold text-[#B38E5D] hover:underline uppercase tracking-wider"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>

            {/* Operating Hours Box */}
            <div className="bg-[#1C1C1C] text-white p-6 border border-[#333333] space-y-3 text-xs">
              <div className="flex items-center gap-2 text-[#B38E5D] font-bold uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                <span>Store Business Hours</span>
              </div>
              <div className="space-y-1.5 text-[#D1CCC4]">
                <div className="flex justify-between border-b border-[#333333] pb-1">
                  <span>Monday - Saturday:</span>
                  <span className="font-bold text-white">10:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-[#333333] pb-1">
                  <span>Sunday:</span>
                  <span className="font-bold text-white">11:00 AM - 9:00 PM</span>
                </div>
                <div className="text-[11px] text-gray-400 pt-1">
                  * Urgent bulk deliveries fulfilled 7 days a week including holidays.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
