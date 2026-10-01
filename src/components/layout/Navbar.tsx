"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Search,
  User,
  Heart,
  ShoppingBag,
  Menu,
  X,
  ChevronDown,
  Phone,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import AnnouncementBar from "./AnnouncementBar";
import SearchModal from "@/components/search/SearchModal";
import CartDrawer from "@/components/cart/CartDrawer";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { CATEGORIES } from "@/data/products";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  const { totalItems, setIsCartOpen } = useCart();
  const { wishlist } = useWishlist();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveMegaMenu(null);
  }, [pathname]);

  return (
    <>
      <AnnouncementBar />

      <header
        className={`sticky top-0 z-40 bg-white/95 backdrop-blur-md transition-all duration-300 border-b ${
          isScrolled ? "border-[#E8E3DA] shadow-soft py-2" : "border-[#E8E3DA] py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-black focus:outline-none -ml-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Brand Logo with Official Image */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div className="relative flex items-center py-1">
                <Image
                  src="/images/logo.png"
                  alt="Gupta Paper and Stationery"
                  width={220}
                  height={130}
                  priority
                  unoptimized
                  className="h-11 sm:h-13 md:h-14 w-auto object-contain transition-transform group-hover:scale-105 duration-200"
                />
              </div>
            </Link>

            {/* Desktop Navigation Links with Clean Geist Font */}
            <nav className="hidden lg:flex items-center space-x-6 text-[13px] font-medium tracking-wide uppercase text-[#1C1C1C]">
              {/* Shop Mega Menu Trigger */}
              <div
                className="relative py-2 group"
                onMouseEnter={() => setActiveMegaMenu("shop")}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <Link
                  href="/shop"
                  className={`flex items-center gap-1.5 hover:text-[#B38E5D] transition-colors py-1 ${
                    pathname.startsWith("/shop") ? "text-[#B38E5D] font-bold" : ""
                  }`}
                >
                  <span>Collections</span>
                  <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-200" />
                </Link>

                {/* Mega Menu Dropdown - Aligned safely to prevent clipping */}
                {activeMegaMenu === "shop" && (
                  <div className="absolute top-full -left-6 w-[820px] bg-white border border-[#E8E3DA] shadow-2xl p-6 grid grid-cols-4 gap-6 animate-fadeIn rounded-b-md z-50">
                    <div className="col-span-3 grid grid-cols-3 gap-6">
                      {CATEGORIES.map((cat) => (
                        <div key={cat.id} className="space-y-2">
                          <Link
                            href={`/shop/${cat.slug}`}
                            className="font-bold text-xs uppercase tracking-wider text-[#1C1C1C] hover:text-[#B38E5D] transition-colors block pb-1 border-b border-[#E8E3DA]"
                          >
                            {cat.name}
                          </Link>
                          <ul className="space-y-1.5 text-xs text-[#706E6B]">
                            {cat.subcategories.map((sub) => (
                              <li key={sub}>
                                <Link
                                  href={`/shop/${cat.slug}`}
                                  className="hover:text-black hover:translate-x-1 transition-transform inline-block py-0.5"
                                >
                                  {sub}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Featured Mega Menu Card */}
                    <div className="col-span-1 bg-[#FAF8F5] border border-[#E8E3DA] p-4 flex flex-col justify-between rounded">
                      <div>
                        <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-widest text-[#B38E5D]">
                          <Sparkles className="w-3 h-3" />
                          <span>Eco Initiative</span>
                        </div>
                        <h4 className="text-sm font-bold text-gray-900 mt-1.5">
                          Plantable Seed Pens
                        </h4>
                        <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                          100% recycled newspaper with organic basil & marigold seeds.
                        </p>
                      </div>
                      <Link
                        href="/shop/eco-friendly-range"
                        className="mt-4 inline-flex items-center justify-center gap-1.5 py-2 px-3 bg-[#1C1C1C] text-white text-[11px] font-semibold uppercase tracking-wider hover:bg-[#333333] transition-colors rounded"
                      >
                        <span>Explore Range</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/bulk-orders"
                className={`flex items-center gap-1.5 hover:text-[#B38E5D] transition-colors py-1 ${
                  pathname === "/bulk-orders" ? "text-[#B38E5D] font-bold" : ""
                }`}
              >
                <span className="text-emerald-800 font-semibold">Wholesale (Up to 60% Off)</span>
              </Link>

              <Link
                href="/about"
                className={`hover:text-[#B38E5D] transition-colors py-1 ${
                  pathname === "/about" ? "text-[#B38E5D] font-bold" : ""
                }`}
              >
                About Us
              </Link>

              <Link
                href="/testimonials"
                className={`hover:text-[#B38E5D] transition-colors py-1 ${
                  pathname === "/testimonials" ? "text-[#B38E5D] font-bold" : ""
                }`}
              >
                Reviews
              </Link>

              <Link
                href="/blog"
                className={`hover:text-[#B38E5D] transition-colors py-1 ${
                  pathname.startsWith("/blog") ? "text-[#B38E5D] font-bold" : ""
                }`}
              >
                Blog
              </Link>

              <Link
                href="/contact"
                className={`hover:text-[#B38E5D] transition-colors py-1 ${
                  pathname === "/contact" ? "text-[#B38E5D] font-bold" : ""
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Right Action Icons */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-gray-700 hover:text-[#B38E5D] hover:bg-[#FAF8F5] rounded-full transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* User Account */}
              <Link
                href="/account"
                className="p-2 text-gray-700 hover:text-[#B38E5D] hover:bg-[#FAF8F5] rounded-full transition-colors hidden sm:block"
                aria-label="User Account"
              >
                <User className="w-5 h-5" />
              </Link>

              {/* Wishlist */}
              <Link
                href="/account?tab=wishlist"
                className="relative p-2 text-gray-700 hover:text-[#B38E5D] hover:bg-[#FAF8F5] rounded-full transition-colors"
                aria-label="Wishlist"
              >
                <Heart className="w-5 h-5" />
                {wishlist.length > 0 && (
                  <span className="absolute top-1 right-1 bg-[#B38E5D] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {wishlist.length}
                  </span>
                )}
              </Link>

              {/* Cart Drawer Trigger */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 bg-[#FAF8F5] border border-[#E8E3DA] hover:border-black text-gray-900 rounded transition-colors flex items-center gap-1.5 px-3"
                aria-label="Shopping Bag"
              >
                <ShoppingBag className="w-4 h-4 text-[#1C1C1C]" />
                <span className="text-xs font-bold text-[#1C1C1C]">{totalItems}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[105px] z-50 bg-white border-t border-[#E8E3DA] overflow-y-auto p-5 animate-fadeIn">
            <div className="space-y-4">
              {/* Drawer Brand Header */}
              <div className="flex items-center justify-center pb-4 border-b border-[#E8E3DA]">
                <Image
                  src="/images/logo.png"
                  alt="Gupta Paper and Stationery"
                  width={200}
                  height={120}
                  unoptimized
                  className="h-12 sm:h-14 w-auto object-contain"
                />
              </div>

              <div className="pb-3 border-b border-[#E8E3DA]">
                <h4 className="text-xs font-bold tracking-wider uppercase text-gray-400 mb-2">
                  Browse Categories
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {CATEGORIES.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/shop/${cat.slug}`}
                      className="py-2.5 px-3 bg-[#FAF8F5] border border-[#E8E3DA] text-sm font-medium flex items-center justify-between text-[#1C1C1C] rounded"
                    >
                      <span>{cat.name}</span>
                      <span className="text-xs text-gray-400">{cat.itemCount} items</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-2 text-sm font-medium tracking-wide">
                <Link
                  href="/bulk-orders"
                  className="block py-2.5 px-3 bg-emerald-50 text-emerald-900 border border-emerald-200 font-bold rounded"
                >
                  💼 Wholesale & Bulk Orders (Up to 60% Off)
                </Link>
                <Link href="/about" className="block py-2 border-b border-gray-100">
                  About Gupta Stationery (Since 1990)
                </Link>
                <Link href="/testimonials" className="block py-2 border-b border-gray-100">
                  Customer Reviews
                </Link>
                <Link href="/blog" className="block py-2 border-b border-gray-100">
                  Stationery Guides & Articles
                </Link>
                <Link href="/faq" className="block py-2 border-b border-gray-100">
                  Frequently Asked Questions (FAQ)
                </Link>
                <Link href="/contact" className="block py-2 border-b border-gray-100">
                  Store Location & Contact Us
                </Link>
                <Link href="/account" className="block py-2 border-b border-gray-100">
                  My Account & Orders
                </Link>
              </div>

              <div className="pt-4 border-t border-[#E8E3DA] text-xs text-gray-500 space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#B38E5D]" />
                  <span>Call: 8839715995 (Mon-Sat 10 AM - 11 PM)</span>
                </div>
                <div>📍 Mowa, Dubey Colony, Near Durga Temple, Raipur</div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Global Modals & Drawers */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <CartDrawer />
    </>
  );
}
