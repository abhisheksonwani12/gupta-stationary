"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Truck,
  CheckCircle2,
  FileText,
  Send,
  Building,
  School,
  Store,
  PartyPopper,
  Sparkles,
} from "lucide-react";
import { formatPrice } from "@/lib/utils";

export default function BulkOrdersPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    phone: "",
    email: "",
    gstNumber: "",
    businessType: "school",
    productList: "Instant Premium Ball Pen (Blue) x 500\nA4 Copy Paper Ream x 20\nInstant School Notebook (200 pages) x 200",
    deliveryDate: "",
    deliveryLocation: "Raipur, Chhattisgarh",
    specialRequirements: "Custom packaging with institutional stamp",
    paymentPreference: "upi",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Banner */}
      <div className="bg-[#1C1C1C] text-white py-16 sm:py-24 border-b border-[#333333] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#B38E5D] bg-white/10 px-3 py-1 inline-block border border-white/20">
              Direct Manufacturer Procurement
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white leading-tight">
              Wholesale & Bulk Orders — <br />
              <span className="text-[#B38E5D]">Get Up to 60% Discount!</span>
            </h1>
            <p className="text-sm sm:text-base text-[#D1CCC4] leading-relaxed">
              Serving Schools, Offices & Businesses Across Raipur Since 1990. Whether you need 50 pens or 50,000 notebooks, Instant Stationary has you covered with unbeatable wholesale pricing and same-day delivery.
            </p>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <a
                href="#quote-form"
                className="px-8 py-4 bg-[#B38E5D] text-white text-xs font-bold uppercase tracking-luxury hover:bg-white hover:text-black transition-colors"
              >
                Request Custom Quote
              </a>
              <a
                href="https://wa.me/918839715995?text=Hello%20Instant%20Stationery,%20I%20want%20to%20place%20a%20bulk%20order"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-4 bg-[#25D366] text-white text-xs font-bold uppercase tracking-luxury hover:bg-[#1ebd5a] transition-colors flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp: 8839715995</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Why Bulk Order from Instant Stationary */}
      <div className="py-16 bg-[#FAF8F5] border-b border-[#E8E3DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#1C1C1C]">
              Why Bulk Buyers Choose Instant Stationary
            </h2>
            <div className="w-12 h-0.5 bg-[#B38E5D] mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 border border-[#E8E3DA] space-y-2">
              <div className="text-emerald-700 font-bold text-sm flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Unbeatable Prices</span>
              </div>
              <p className="text-xs text-gray-600">
                Up to 60% discount on volume orders. We pass direct manufacturing savings with zero middleman markup.
              </p>
            </div>

            <div className="bg-white p-6 border border-[#E8E3DA] space-y-2">
              <div className="text-emerald-700 font-bold text-sm flex items-center gap-2">
                <Truck className="w-5 h-5" />
                <span>Same-Day Delivery</span>
              </div>
              <p className="text-xs text-gray-600">
                Order in the morning, receive by evening in Raipur. Urgent deliveries fulfilled 7 days a week.
              </p>
            </div>

            <div className="bg-white p-6 border border-[#E8E3DA] space-y-2">
              <div className="text-emerald-700 font-bold text-sm flex items-center gap-2">
                <ShieldCheck className="w-5 h-5" />
                <span>Guaranteed Stock</span>
              </div>
              <p className="text-xs text-gray-600">
                1000+ items always in ready inventory at our Raipur warehouse for instant dispatch.
              </p>
            </div>

            <div className="bg-white p-6 border border-[#E8E3DA] space-y-2">
              <div className="text-emerald-700 font-bold text-sm flex items-center gap-2">
                <FileText className="w-5 h-5" />
                <span>GST Tax Invoicing</span>
              </div>
              <p className="text-xs text-gray-600">
                Official GST-compliant tax invoices provided with full input tax credit (ITC) for business filings.
              </p>
            </div>

            <div className="bg-white p-6 border border-[#E8E3DA] space-y-2">
              <div className="text-emerald-700 font-bold text-sm flex items-center gap-2">
                <Building className="w-5 h-5" />
                <span>Flexible Credit Terms</span>
              </div>
              <p className="text-xs text-gray-600">
                15 to 30 days credit terms available for verified schools, institutions, and corporate accounts.
              </p>
            </div>

            <div className="bg-white p-6 border border-[#E8E3DA] space-y-2">
              <div className="text-emerald-700 font-bold text-sm flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                <span>Custom Printing & Logo</span>
              </div>
              <p className="text-xs text-gray-600">
                Personalized branding, notebook cover foil stamping, and customized corporate gift hampers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bulk Pricing Tier Matrix */}
      <div id="pricing-tiers" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#B38E5D]">
              Wholesale Discount Matrix
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#1C1C1C] mt-1">
              Volume-Based Pricing Tiers
            </h2>
            <p className="text-xs text-gray-500 mt-2">
              Discounts apply across all product categories. You can mix and match items to reach quantity brackets!
            </p>
          </div>

          <div className="overflow-x-auto max-w-4xl mx-auto border border-[#E8E3DA] shadow-soft">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#1C1C1C] text-white">
                <tr>
                  <th className="p-4 uppercase tracking-wider font-bold">Quantity Range</th>
                  <th className="p-4 uppercase tracking-wider font-bold">Discount Level</th>
                  <th className="p-4 uppercase tracking-wider font-bold">Typical Savings</th>
                  <th className="p-4 uppercase tracking-wider font-bold">Example: Ball Pen (₹15)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E3DA]">
                <tr className="bg-[#FAF8F5]">
                  <td className="p-4 font-semibold text-gray-900">1 - 9 units</td>
                  <td className="p-4 text-gray-600">Retail Rate</td>
                  <td className="p-4 text-gray-400">—</td>
                  <td className="p-4 font-bold text-black">₹15.00</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-4 font-semibold text-gray-900">10 - 49 units</td>
                  <td className="p-4 font-bold text-emerald-800">Level 1 (15% - 20% OFF)</td>
                  <td className="p-4 text-emerald-700">Save up to ₹150</td>
                  <td className="p-4 font-bold text-black">₹12.00</td>
                </tr>
                <tr className="bg-[#FAF8F5]">
                  <td className="p-4 font-semibold text-gray-900">50 - 99 units</td>
                  <td className="p-4 font-bold text-emerald-800">Level 2 (25% - 33% OFF)</td>
                  <td className="p-4 text-emerald-700">Save up to ₹500</td>
                  <td className="p-4 font-bold text-black">₹10.00</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-4 font-semibold text-gray-900">100 - 499 units</td>
                  <td className="p-4 font-bold text-emerald-800">Level 3 (40% - 47% OFF)</td>
                  <td className="p-4 text-emerald-700">Save up to ₹3,500</td>
                  <td className="p-4 font-bold text-black">₹8.00</td>
                </tr>
                <tr className="bg-[#FAF8F5]">
                  <td className="p-4 font-semibold text-gray-900">500 - 999 units</td>
                  <td className="p-4 font-bold text-emerald-800">Level 4 (50% - 55% OFF)</td>
                  <td className="p-4 text-emerald-700">Save up to ₹9,000</td>
                  <td className="p-4 font-bold text-black">₹6.50</td>
                </tr>
                <tr className="bg-emerald-50 text-emerald-950">
                  <td className="p-4 font-bold">1000+ units (Wholesale)</td>
                  <td className="p-4 font-bold text-emerald-900">Level 5 (55% - 60% OFF)</td>
                  <td className="p-4 font-bold text-emerald-800">Maximum Savings</td>
                  <td className="p-4 font-bold text-emerald-900">₹6.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="max-w-4xl mx-auto mt-6 bg-[#FAF8F5] p-4 border border-[#E8E3DA] text-xs text-gray-600 flex flex-wrap items-center justify-between gap-4">
            <div>
              <strong>Special Incentives:</strong> Additional 5-10% off for regular corporate contracts • Extra 3-5% discount for full advance payment.
            </div>
            <a href="tel:8839715995" className="font-bold text-[#B38E5D] hover:underline">
              Discuss Annual Contract →
            </a>
          </div>
        </div>
      </div>

      {/* Target Sectors Showcase */}
      <div className="py-16 bg-[#FAF8F5] border-t border-[#E8E3DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#1C1C1C]">
              Tailored Bulk Procurement Programs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-[#E8E3DA] p-6 space-y-3">
              <School className="w-8 h-8 text-[#B38E5D]" />
              <h3 className="font-bold text-sm uppercase text-gray-900">Schools & Colleges</h3>
              <p className="text-xs text-gray-600">
                Complete back-to-school student packs: ruled notebooks, geometry sets, drawing pads, exam ball pens with custom school seal.
              </p>
              <div className="text-xs font-bold text-emerald-800 pt-2">
                100+ Notebooks = 30% OFF
              </div>
            </div>

            <div className="bg-white border border-[#E8E3DA] p-6 space-y-3">
              <Building className="w-8 h-8 text-[#B38E5D]" />
              <h3 className="font-bold text-sm uppercase text-gray-900">Corporate Offices</h3>
              <p className="text-xs text-gray-600">
                Monthly office supply replenishment: 75 GSM A4 reams, document folders, markers, staplers, sticky notes, and eco desk supplies.
              </p>
              <div className="text-xs font-bold text-emerald-800 pt-2">
                50+ Paper Reams = 20% OFF
              </div>
            </div>

            <div className="bg-white border border-[#E8E3DA] p-6 space-y-3">
              <Store className="w-8 h-8 text-[#B38E5D]" />
              <h3 className="font-bold text-sm uppercase text-gray-900">Retailers & Resellers</h3>
              <p className="text-xs text-gray-600">
                Stock your stationery retail store with our &ldquo;Instant&apos;s&rdquo; brand products with 40-60% retail margin potential and flexible credit.
              </p>
              <div className="text-xs font-bold text-emerald-800 pt-2">
                40% - 60% Retail Margins
              </div>
            </div>

            <div className="bg-white border border-[#E8E3DA] p-6 space-y-3">
              <PartyPopper className="w-8 h-8 text-[#B38E5D]" />
              <h3 className="font-bold text-sm uppercase text-gray-900">Events & Gifting</h3>
              <p className="text-xs text-gray-600">
                Custom branded conference hampers, plantable seed pen sets, executive diaries, and gift bags for seminars and functions.
              </p>
              <div className="text-xs font-bold text-emerald-800 pt-2">
                Logo Printing Available
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Form & Dedicated Support */}
      <div id="quote-form" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Form Column */}
            <div className="lg:col-span-7 bg-[#FAF8F5] border border-[#E8E3DA] p-8 sm:p-10">
              <div className="mb-6">
                <span className="text-[10px] uppercase font-bold text-[#B38E5D] tracking-widest">
                  Quick Turnaround
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#1C1C1C] mt-1">
                  Bulk Quote Request Form
                </h2>
                <p className="text-xs text-gray-600 mt-1">
                  Fill in your required items and quantities below. Our bulk sales desk will prepare and send an itemized quote within 2 hours.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-6 bg-emerald-50 border border-emerald-300 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h3 className="font-bold text-base text-emerald-950 uppercase">
                    Bulk Quote Request Received!
                  </h3>
                  <p className="text-xs text-emerald-800 max-w-md mx-auto">
                    Thank you, <strong className="text-black">{formData.contactPerson}</strong>. Our bulk sales team is reviewing your requirements and will contact you at <strong>{formData.phone}</strong> with the best wholesale pricing within 2 hours.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 px-6 py-2.5 bg-[#1C1C1C] text-white text-xs font-bold uppercase tracking-luxury"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold uppercase tracking-wider text-gray-700 mb-1">
                        Company / School Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Delhi Public School / TechVision"
                        className="w-full bg-white border border-[#E8E3DA] p-3 text-xs focus:outline-none focus:border-black"
                      />
                    </div>
                    <div>
                      <label className="block font-bold uppercase tracking-wider text-gray-700 mb-1">
                        Contact Person Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.contactPerson}
                        onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                        placeholder="Your full name"
                        className="w-full bg-white border border-[#E8E3DA] p-3 text-xs focus:outline-none focus:border-black"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
                        className="w-full bg-white border border-[#E8E3DA] p-3 text-xs focus:outline-none focus:border-black"
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
                        placeholder="name@organization.com"
                        className="w-full bg-white border border-[#E8E3DA] p-3 text-xs focus:outline-none focus:border-black"
                      />
                    </div>
                    <div>
                      <label className="block font-bold uppercase tracking-wider text-gray-700 mb-1">
                        GST Number (Optional)
                      </label>
                      <input
                        type="text"
                        value={formData.gstNumber}
                        onChange={(e) => setFormData({ ...formData, gstNumber: e.target.value })}
                        placeholder="22AAAAA0000A1Z5"
                        className="w-full bg-white border border-[#E8E3DA] p-3 text-xs focus:outline-none focus:border-black"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold uppercase tracking-wider text-gray-700 mb-1">
                        Business / Organization Type
                      </label>
                      <select
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        className="w-full bg-white border border-[#E8E3DA] p-3 text-xs focus:outline-none focus:border-black cursor-pointer"
                      >
                        <option value="school">School / Educational Institution</option>
                        <option value="corporate">Corporate Office / Business</option>
                        <option value="retailer">Retailer / Reseller Store</option>
                        <option value="event">Event / Party / Gifting</option>
                        <option value="other">Other Organization</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold uppercase tracking-wider text-gray-700 mb-1">
                        Required Delivery Date
                      </label>
                      <input
                        type="date"
                        value={formData.deliveryDate}
                        onChange={(e) => setFormData({ ...formData, deliveryDate: e.target.value })}
                        className="w-full bg-white border border-[#E8E3DA] p-3 text-xs focus:outline-none focus:border-black"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Product List & Estimated Quantities *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.productList}
                      onChange={(e) => setFormData({ ...formData, productList: e.target.value })}
                      placeholder="List the products, SKUs, and quantities you need..."
                      className="w-full bg-white border border-[#E8E3DA] p-3 text-xs focus:outline-none focus:border-black font-mono"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold uppercase tracking-wider text-gray-700 mb-1">
                        Delivery Location
                      </label>
                      <input
                        type="text"
                        value={formData.deliveryLocation}
                        onChange={(e) => setFormData({ ...formData, deliveryLocation: e.target.value })}
                        placeholder="City / Area in Raipur or CG"
                        className="w-full bg-white border border-[#E8E3DA] p-3 text-xs focus:outline-none focus:border-black"
                      />
                    </div>
                    <div>
                      <label className="block font-bold uppercase tracking-wider text-gray-700 mb-1">
                        Payment Preference
                      </label>
                      <select
                        value={formData.paymentPreference}
                        onChange={(e) => setFormData({ ...formData, paymentPreference: e.target.value })}
                        className="w-full bg-white border border-[#E8E3DA] p-3 text-xs focus:outline-none focus:border-black"
                      >
                        <option value="upi">UPI / Online Transfer</option>
                        <option value="bank">NEFT / RTGS Bank Transfer</option>
                        <option value="credit">Credit Terms (15-30 Days)</option>
                        <option value="cod">Cash On Delivery (Raipur)</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#1C1C1C] text-white text-xs font-bold uppercase tracking-luxury hover:bg-[#B38E5D] transition-colors flex items-center justify-center gap-2 shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Bulk Quote Request</span>
                  </button>
                </form>
              )}
            </div>

            {/* Right Contact Support Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 bg-[#1C1C1C] text-white border border-[#333333] space-y-4">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#B38E5D]">
                  Need Urgent Bulk Assistance?
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold uppercase">
                  Speak Directly with Our Bulk Sales Desk
                </h3>
                <p className="text-xs text-[#D1CCC4] leading-relaxed">
                  Call or WhatsApp our dedicated wholesale managers for instant order placements, customized product samples, and same-day warehouse dispatch.
                </p>

                <div className="space-y-3 pt-2 text-xs text-[#D1CCC4]">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#B38E5D]" />
                    <span>Phone: +91 8839715995 (Mon - Sat: 10 AM - 11 PM)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp: +91 8839715995 (Instant Response)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#B38E5D]" />
                    <span>Email: support@instantstationary.com</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#B38E5D] mt-0.5" />
                    <span>Store: Mowa, Dubey Colony, Near Durga Temple, Raipur - 492001</span>
                  </div>
                </div>
              </div>

              {/* Success Quote Example Callout */}
              <div className="p-6 bg-[#FAF8F5] border border-[#E8E3DA] space-y-2 text-xs">
                <h4 className="font-bold uppercase text-gray-900">
                  Example Institutional Order Savings:
                </h4>
                <div className="p-3 bg-white border border-[#E8E3DA] space-y-1">
                  <div className="text-gray-600">500 Instant School Notebooks (200 pgs)</div>
                  <div className="flex justify-between font-semibold">
                    <span>Retail Total:</span>
                    <span className="line-through text-gray-400">₹42,500</span>
                  </div>
                  <div className="flex justify-between font-bold text-emerald-800">
                    <span>Bulk Wholesale Total:</span>
                    <span>₹21,000</span>
                  </div>
                  <div className="text-[11px] text-emerald-700 font-bold pt-1 border-t border-gray-100">
                    School Saved ₹21,500 (50% OFF) with next-morning delivery!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
