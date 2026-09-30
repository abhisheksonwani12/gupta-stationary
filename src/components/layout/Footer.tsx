"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  CreditCard,
  Truck,
  ShieldCheck,
  Award,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#1C1C1C] text-[#FAF8F5] pt-16 pb-12 border-t border-[#333333]">
      {/* Brand Value Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 mb-12 border-b border-[#333333]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#2A2A2A] border border-[#3D3D3D] flex items-center justify-center text-[#B38E5D]">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold tracking-wide uppercase">Same-Day Delivery</h4>
              <p className="text-xs text-[#A09D96] mt-0.5">Free on orders &gt; ₹500 across Raipur</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#2A2A2A] border border-[#3D3D3D] flex items-center justify-center text-[#B38E5D]">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold tracking-wide uppercase">33+ Years of Trust</h4>
              <p className="text-xs text-[#A09D96] mt-0.5">Serving Raipur schools & offices since 1990</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#2A2A2A] border border-[#3D3D3D] flex items-center justify-center text-[#B38E5D]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold tracking-wide uppercase">100% Original & ISI</h4>
              <p className="text-xs text-[#A09D96] mt-0.5">Direct manufacturer warranty guarantee</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#2A2A2A] border border-[#3D3D3D] flex items-center justify-center text-[#B38E5D]">
              <CreditCard className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold tracking-wide uppercase">Up to 60% Bulk Savings</h4>
              <p className="text-xs text-[#A09D96] mt-0.5">Wholesale pricing & GST input credit</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand & Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="space-y-2">
              <div className="bg-white/10 border border-white/10 px-4 py-2.5 rounded-lg inline-block backdrop-blur-xs">
                <Image
                  src="/images/logo-white.png"
                  alt="Gupta Paper and Stationery"
                  width={200}
                  height={120}
                  unoptimized
                  className="h-12 sm:h-14 w-auto object-contain"
                />
              </div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#B38E5D] font-semibold">
                Serving Raipur with Excellence Since 1990
              </p>
            </div>
            <p className="text-xs text-[#A09D96] leading-relaxed max-w-sm">
              Raipur&apos;s premier supplier of premium writing instruments, eco-friendly journals, office supplies, and school stationery. Lowest prices guaranteed for retail and bulk orders.
            </p>

            <div className="space-y-2.5 pt-2 text-xs text-[#D1CCC4]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B38E5D] flex-shrink-0 mt-0.5" />
                <span>Mowa, Dubey Colony, Near Durga Temple, Raipur, CG - 492001</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B38E5D] flex-shrink-0" />
                <a href="tel:8839715995" className="hover:text-white transition-colors">
                  +91 8839715995 (Phone & WhatsApp)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B38E5D] flex-shrink-0" />
                <a href="mailto:guptapapers.ss@gmail.com" className="hover:text-white transition-colors">
                  guptapapers.ss@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#B38E5D] flex-shrink-0" />
                <span>Mon - Sat: 10:00 AM - 11:00 PM | Sun: 11:00 AM - 9:00 PM</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-luxury text-[#B38E5D]">
              Explore Catalog
            </h4>
            <ul className="space-y-2 text-xs text-[#A09D96]">
              <li>
                <Link href="/shop" className="hover:text-white transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/shop/pens-pencils" className="hover:text-white transition-colors">
                  Pens & Pencils
                </Link>
              </li>
              <li>
                <Link href="/shop/notebooks-notepads" className="hover:text-white transition-colors">
                  Notebooks & Planners
                </Link>
              </li>
              <li>
                <Link href="/shop/paper-products" className="hover:text-white transition-colors">
                  A4 Copy & Cardstock
                </Link>
              </li>
              <li>
                <Link href="/shop/office-supplies" className="hover:text-white transition-colors">
                  Office Supplies
                </Link>
              </li>
              <li>
                <Link href="/shop/school-supplies" className="hover:text-white transition-colors">
                  School & Geometry
                </Link>
              </li>
              <li>
                <Link href="/shop/eco-friendly-range" className="hover:text-white transition-colors text-emerald-400 font-medium">
                  Eco-Friendly Range 🌱
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Service & Bulk */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-luxury text-[#B38E5D]">
              Wholesale & Support
            </h4>
            <ul className="space-y-2 text-xs text-[#A09D96]">
              <li>
                <Link href="/bulk-orders" className="hover:text-white transition-colors font-semibold text-[#FAF8F5]">
                  Wholesale & Bulk Orders
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Our 33-Year Story
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-white transition-colors">
                  Reviews & Ratings (4.8★)
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Articles & Guides
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & Store Location
                </Link>
              </li>
              <li>
                <Link href="/account" className="hover:text-white transition-colors">
                  User Account & Orders
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Exclusive Offers */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-luxury text-[#B38E5D]">
              Stay Updated
            </h4>
            <p className="text-xs text-[#A09D96]">
              Subscribe for exclusive bulk discounts, new product launches, and stationery tips.
            </p>

            {subscribed ? (
              <div className="p-3 bg-emerald-950/60 border border-emerald-800 text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Thank you! 10% discount code sent to your inbox.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-[#2A2A2A] border border-[#3D3D3D] text-xs px-3 py-2.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#B38E5D]"
                  />
                  <button
                    type="submit"
                    className="bg-[#B38E5D] text-white px-3 py-2.5 hover:bg-[#9d794b] transition-colors flex items-center justify-center"
                    aria-label="Subscribe"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-[10px] text-[#706E6B] block">
                  We respect your privacy. Unsubscribe anytime.
                </span>
              </form>
            )}

            {/* Loyalty badge */}
            <div className="pt-2 border-t border-[#333333]">
              <div className="flex items-center gap-2 text-xs text-[#FAF8F5]">
                <span className="text-amber-400">★</span>
                <span className="font-semibold">Loyalty Rewards Program</span>
              </div>
              <p className="text-[11px] text-[#706E6B] mt-0.5">
                Earn points on every rupee spent. Extra 5% off for repeat customers.
              </p>
            </div>
          </div>
        </div>

        {/* Legal Links & Policies */}
        <div className="mt-12 pt-8 border-t border-[#333333] flex flex-wrap items-center justify-between gap-4 text-[11px] text-[#706E6B]">
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-[#D1CCC4] transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms-and-conditions" className="hover:text-[#D1CCC4] transition-colors">
              Terms & Conditions
            </Link>
            <span>•</span>
            <Link href="/shipping-policy" className="hover:text-[#D1CCC4] transition-colors">
              Shipping & Delivery Policy
            </Link>
            <span>•</span>
            <Link href="/return-policy" className="hover:text-[#D1CCC4] transition-colors">
              Return & Refund Policy
            </Link>
            <span>•</span>
            <Link href="/cancellation-policy" className="hover:text-[#D1CCC4] transition-colors">
              Cancellation Policy
            </Link>
          </div>

          <div>
            <span>Accepted Payments: UPI • Visa/Mastercard • NetBanking • Wallets • Cash</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-[11px] text-[#555555]">
          © {new Date().getFullYear()} Gupta Stationery. All Rights Reserved. Founded by Harsh Gupta. Proudly Serving Raipur Since 1990.
        </div>
      </div>
    </footer>
  );
}
