import React from "react";
import Link from "next/link";
import {
  Award,
  Heart,
  Leaf,
  ShieldCheck,
  Tag,
  Users,
  Building2,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Clock,
  Sparkles,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <div className="bg-[#FAF8F5] border-b border-[#E8E3DA] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#B38E5D]">
              Est. 1990 • Raipur, Chhattisgarh
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#1C1C1C] mt-2">
              Serving Raipur with Quality Stationery for Over 33 Years
            </h1>
            <p className="text-xs sm:text-sm text-[#706E6B] mt-4 leading-relaxed">
              What started in 1990 as a small family-run stationery shop has grown into Chhattisgarh&apos;s most trusted wholesale and retail supplier of writing instruments, office supplies, school stationery, and eco-friendly products.
            </p>
          </div>
        </div>
      </div>

      {/* Company Story & Journey Timeline */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[10px] uppercase font-bold text-[#B38E5D] tracking-widest">
              Who We Are
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold uppercase text-[#1C1C1C]">
              Our Mission & Vision
            </h2>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              &ldquo;To provide every student, teacher, professional, and business in Raipur access to premium quality stationery at the lowest possible prices, while championing eco-friendly and sustainable choices for the next generation.&rdquo;
            </p>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Founded by <strong>Harsh Gupta</strong>, our focus has always been simple: zero compromise on paper thickness, ink smoothness, and durability, backed by warm, personal customer service.
            </p>

            {/* Timeline Milestones */}
            <div className="space-y-4 pt-4 border-t border-[#E8E3DA]">
              <div className="flex gap-4">
                <div className="w-16 font-bold text-[#B38E5D] text-xs uppercase flex-shrink-0">
                  1990
                </div>
                <div className="text-xs text-gray-700">
                  <strong>Founded by the Gupta Family:</strong> Established in Raipur with a vision to make quality stationery affordable for every student.
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-16 font-bold text-[#B38E5D] text-xs uppercase flex-shrink-0">
                  2000s
                </div>
                <div className="text-xs text-gray-700">
                  <strong>Introduced &ldquo;Gupta&apos;s Premium Collection&rdquo;:</strong> Launched our own branded line of ball pens, copy paper, and ruled notebooks manufactured to ISI standards.
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-16 font-bold text-[#B38E5D] text-xs uppercase flex-shrink-0">
                  2010s
                </div>
                <div className="text-xs text-gray-700">
                  <strong>Go-To Institutional Supplier:</strong> Became the preferred vendor for over 50+ schools, coaching centers, and corporate offices in Raipur.
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-16 font-bold text-[#B38E5D] text-xs uppercase flex-shrink-0">
                  Today
                </div>
                <div className="text-xs text-gray-700">
                  <strong>Digital & Sustainable Pioneer:</strong> Serving thousands of customers with plantable pens, recycled paper, same-day delivery, and digital wholesale procurement.
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] bg-gray-100 border border-[#E8E3DA] overflow-hidden shadow-luxury">
              <img
                src="https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=900&auto=format&fit=crop"
                alt="Gupta Stationery Store and Products"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#1C1C1C] text-white p-6 border border-[#333333] shadow-xl max-w-xs hidden sm:block">
              <div className="text-2xl font-serif font-bold text-[#B38E5D]">33+ Years</div>
              <div className="text-xs text-[#D1CCC4] uppercase tracking-wider mt-0.5">
                Of Unbroken Trust in Raipur, Chhattisgarh
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="py-16 bg-[#FAF8F5] border-y border-[#E8E3DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#B38E5D]">
              Our Guiding Principles
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#1C1C1C] mt-1">
              The 5 Pillars of Gupta Stationery
            </h2>
            <div className="w-12 h-0.5 bg-[#B38E5D] mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 text-xs">
            <div className="bg-white p-6 border border-[#E8E3DA] space-y-2">
              <div className="w-10 h-10 bg-[#FAF8F5] border border-[#E8E3DA] flex items-center justify-center text-[#B38E5D] mb-3">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-bold uppercase tracking-wider text-gray-900">1. Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                We never compromise. Every product is rigorously tested for ink flow, paper opacity, and structural strength.
              </p>
            </div>

            <div className="bg-white p-6 border border-[#E8E3DA] space-y-2">
              <div className="w-10 h-10 bg-[#FAF8F5] border border-[#E8E3DA] flex items-center justify-center text-[#B38E5D] mb-3">
                <Tag className="w-5 h-5" />
              </div>
              <h3 className="font-bold uppercase tracking-wider text-gray-900">2. Affordability</h3>
              <p className="text-gray-600 leading-relaxed">
                Best quality doesn&apos;t have to be expensive. We work directly with manufacturers and pass savings to you.
              </p>
            </div>

            <div className="bg-white p-6 border border-[#E8E3DA] space-y-2">
              <div className="w-10 h-10 bg-[#FAF8F5] border border-[#E8E3DA] flex items-center justify-center text-[#B38E5D] mb-3">
                <Leaf className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="font-bold uppercase tracking-wider text-gray-900">3. Sustainability</h3>
              <p className="text-gray-600 leading-relaxed">
                The future is green. We actively champion plantable pens, recycled papers, and plastic-free erasers.
              </p>
            </div>

            <div className="bg-white p-6 border border-[#E8E3DA] space-y-2">
              <div className="w-10 h-10 bg-[#FAF8F5] border border-[#E8E3DA] flex items-center justify-center text-[#B38E5D] mb-3">
                <Heart className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="font-bold uppercase tracking-wider text-gray-900">4. Customer First</h3>
              <p className="text-gray-600 leading-relaxed">
                Your satisfaction is paramount. Same-day delivery, no-questions-asked replacements, and personal attention.
              </p>
            </div>

            <div className="bg-white p-6 border border-[#E8E3DA] space-y-2">
              <div className="w-10 h-10 bg-[#FAF8F5] border border-[#E8E3DA] flex items-center justify-center text-[#B38E5D] mb-3">
                <ShieldCheck className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="font-bold uppercase tracking-wider text-gray-900">5. Reliability</h3>
              <p className="text-gray-600 leading-relaxed">
                For 33 years, we have kept our promises. Guaranteed stock, timely fulfillment, and transparent pricing.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Table: Gupta Stationery vs Others */}
      <div className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#B38E5D]">
              Transparent Comparison
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#1C1C1C] mt-1">
              Gupta Stationery vs. Competitors
            </h2>
          </div>

          <div className="overflow-x-auto border border-[#E8E3DA] shadow-soft">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#1C1C1C] text-white">
                <tr>
                  <th className="p-4 font-bold uppercase tracking-wider">Feature</th>
                  <th className="p-4 font-bold uppercase tracking-wider text-[#B38E5D]">Gupta Stationery</th>
                  <th className="p-4 font-bold uppercase tracking-wider text-gray-300">Other Shops & Marketplaces</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E3DA]">
                <tr className="bg-[#FAF8F5]">
                  <td className="p-4 font-bold text-gray-900">Heritage & Experience</td>
                  <td className="p-4 font-bold text-emerald-800">Since 1990 (33+ Years)</td>
                  <td className="p-4 text-gray-500">5 - 10 years / Inconsistent</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-4 font-bold text-gray-900">Own Brand Quality</td>
                  <td className="p-4 font-bold text-emerald-800">Premium ISI Certified ⭐⭐⭐⭐⭐</td>
                  <td className="p-4 text-gray-500">None / Generic White-label</td>
                </tr>
                <tr className="bg-[#FAF8F5]">
                  <td className="p-4 font-bold text-gray-900">Pricing Advantage</td>
                  <td className="p-4 font-bold text-emerald-800">Lowest in Raipur (Direct Sourcing)</td>
                  <td className="p-4 text-gray-500">15% - 20% higher retail markup</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-4 font-bold text-gray-900">Delivery Speed in Raipur</td>
                  <td className="p-4 font-bold text-emerald-800">Same-Day / 24 Hours Doorstep</td>
                  <td className="p-4 text-gray-500">2 - 4 business days</td>
                </tr>
                <tr className="bg-[#FAF8F5]">
                  <td className="p-4 font-bold text-gray-900">Eco-Friendly Range</td>
                  <td className="p-4 font-bold text-emerald-800">Yes, affordable plantable & recycled</td>
                  <td className="p-4 text-gray-500">Limited & highly expensive</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-4 font-bold text-gray-900">Bulk Discounts</td>
                  <td className="p-4 font-bold text-emerald-800">Up to 60% OFF with GST Invoicing</td>
                  <td className="p-4 text-gray-500">Limited (5% - 10% max)</td>
                </tr>
                <tr className="bg-[#FAF8F5]">
                  <td className="p-4 font-bold text-gray-900">Customer Service</td>
                  <td className="p-4 font-bold text-emerald-800">Personal & Dedicated Support Desk</td>
                  <td className="p-4 text-gray-500">Automated / Transactional</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Store Location & Call to Action */}
      <div className="py-16 bg-[#1C1C1C] text-white border-t border-[#333333]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-serif text-2xl font-bold uppercase">
              Visit Our Main Store in Raipur
            </h3>
            <p className="text-xs text-[#D1CCC4] mt-1 max-w-lg">
              Mowa, Dubey Colony, Near Durga Temple, Raipur, Chhattisgarh - 492001. Open Mon-Sat 10 AM - 11 PM, Sun 11 AM - 9 PM.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="/contact"
              className="px-6 py-3.5 bg-white text-black text-xs font-bold uppercase tracking-luxury hover:bg-[#B38E5D] hover:text-white transition-colors"
            >
              Get Store Directions
            </Link>
            <Link
              href="/shop"
              className="px-6 py-3.5 bg-transparent border border-white text-white text-xs font-bold uppercase tracking-luxury hover:bg-white hover:text-black transition-colors"
            >
              Shop Online
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
