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
import { useAuth } from "@/context/AuthContext";
import { CATEGORIES } from "@/data/products";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const { totalItems, setIsCartOpen } = useCart();
  const { wishlist } = useWishlist();
  const { user, isAuthenticated, logout } = useAuth();
  const pathname = usePathname();

  // Hide customer navbar inside admin panel
  if (pathname?.startsWith("/admin")) {
    return null;
  }

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

            {/* Brand Logo */}
            <Link href="/" className="flex items-center shrink-0 py-1 group">
              <span className="font-['Playfair_Display',Georgia,serif] text-2xl sm:text-[26px] font-semibold tracking-[-0.01em] text-[#18181B] group-hover:text-[#967448] transition-colors leading-none">
                Instant Stationary
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-8 text-xs font-medium tracking-[0.08em] uppercase text-[#18181B]">
              {/* Shop Dropdown Trigger */}
              <div
                className="relative py-2 group"
                onMouseEnter={() => setActiveMegaMenu("shop")}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <Link
                  href="/shop"
                  className={`flex items-center gap-1 hover:text-[#967448] transition-colors py-1 ${
                    pathname.startsWith("/shop") ? "text-[#967448] font-semibold" : ""
                  }`}
                >
                  <span>Shop</span>
                  <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-200 opacity-60" />
                </Link>

                {/* Minimal Mega Menu Dropdown */}
                {activeMegaMenu === "shop" && (
                  <div className="absolute top-full -left-8 w-[720px] bg-white border border-[#EAE6DF] shadow-luxury p-6 grid grid-cols-3 gap-6 rounded-md z-50">
                    {CATEGORIES.slice(0, 6).map((cat) => (
                      <Link
                        key={cat.id}
                        href={`/shop/${cat.slug}`}
                        className="group/item flex items-start gap-3 p-2 rounded hover:bg-[#FBFBFA] transition-colors"
                      >
                        <div className="w-12 h-12 rounded bg-[#F7F5F0] overflow-hidden shrink-0 border border-[#EAE6DF]">
                          <img
                            src={cat.image}
                            alt={cat.name}
                            className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs font-semibold text-[#18181B] group-hover/item:text-[#967448] transition-colors">
                            {cat.name}
                          </span>
                          <span className="text-[11px] text-[#8A8780] lowercase">
                            {cat.itemCount} items
                          </span>
                        </div>
                      </Link>
                    ))}
                    <div className="col-span-3 pt-3 border-t border-[#F0ECE4] flex items-center justify-between text-xs">
                      <span className="text-[#8A8780]">Free same-day delivery in Raipur &gt; ₹500</span>
                      <Link
                        href="/shop"
                        className="font-semibold text-[#18181B] hover:text-[#967448] inline-flex items-center gap-1 transition-colors"
                      >
                        <span>View all 142 products</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/bulk-orders"
                className={`hover:text-[#967448] transition-colors py-1 ${
                  pathname === "/bulk-orders" ? "text-[#967448] font-semibold" : ""
                }`}
              >
                Wholesale
              </Link>

              <Link
                href="/track-order"
                className={`hover:text-[#967448] transition-colors py-1 ${
                  pathname === "/track-order" ? "text-[#967448] font-semibold" : ""
                }`}
              >
                Track Order
              </Link>

              <Link
                href="/about"
                className={`hover:text-[#967448] transition-colors py-1 ${
                  pathname === "/about" ? "text-[#967448] font-semibold" : ""
                }`}
              >
                About
              </Link>

              <Link
                href="/contact"
                className={`hover:text-[#967448] transition-colors py-1 ${
                  pathname === "/contact" ? "text-[#967448] font-semibold" : ""
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

              {/* User Account / Profile Menu */}
              <div className="relative hidden sm:block">
                {isAuthenticated && user ? (
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center gap-1.5 p-1 hover:bg-[#FAF8F5] rounded transition-colors text-xs font-bold"
                  >
                    <div className="w-7 h-7 rounded-full bg-[#1C1C1C] text-white flex items-center justify-center text-[10px] font-mono font-bold">
                      {user.name.slice(0, 2).toUpperCase()}
                    </div>
                    <ChevronDown className="w-3 h-3 text-gray-400" />
                  </button>
                ) : (
                  <Link
                    href="/login"
                    className="p-2 text-gray-700 hover:text-[#B38E5D] hover:bg-[#FAF8F5] rounded-full transition-colors flex items-center gap-1.5 text-xs font-semibold"
                    aria-label="User Login"
                  >
                    <User className="w-5 h-5" />
                  </Link>
                )}

                {/* User Dropdown Menu */}
                {isUserMenuOpen && isAuthenticated && user && (
                  <div
                    className="absolute right-0 top-full mt-2 w-56 bg-white border border-[#E8E3DA] shadow-xl p-2 z-50 text-xs animate-in fade-in"
                    onMouseLeave={() => setIsUserMenuOpen(false)}
                  >
                    <div className="p-2 border-b border-gray-100 mb-1">
                      <p className="font-bold text-gray-900 truncate">{user.name}</p>
                      <p className="text-[10px] text-gray-500 truncate">{user.email}</p>
                      <div className="flex items-center justify-between pt-1 mt-1 border-t border-gray-50 text-[10px]">
                        <span className="text-gray-500">Points: {user.loyaltyPoints}</span>
                        <span className="text-emerald-700 font-bold">₹{user.pendingRewards} Cash</span>
                      </div>
                    </div>

                    <Link
                      href="/account"
                      onClick={() => setIsUserMenuOpen(false)}
                      className="block p-2 text-gray-700 hover:bg-[#FAF8F5] hover:text-black rounded"
                    >
                      Dashboard & Profile
                    </Link>
                    <Link
                      href="/account?tab=orders"
                      onClick={() => setIsUserMenuOpen(false)}
                      className="block p-2 text-gray-700 hover:bg-[#FAF8F5] hover:text-black rounded"
                    >
                      My Orders & Shipments
                    </Link>
                    <Link
                      href="/track-order"
                      onClick={() => setIsUserMenuOpen(false)}
                      className="block p-2 text-gray-700 hover:bg-[#FAF8F5] hover:text-black rounded"
                    >
                      Track Shipment
                    </Link>
                    <Link
                      href="/account?tab=addresses"
                      onClick={() => setIsUserMenuOpen(false)}
                      className="block p-2 text-gray-700 hover:bg-[#FAF8F5] hover:text-black rounded"
                    >
                      Saved Addresses
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setIsUserMenuOpen(false);
                      }}
                      className="w-full text-left p-2 text-red-600 hover:bg-red-50 rounded mt-1 border-t border-gray-100"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>

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
                className="relative py-1.5 px-3 bg-[#18181B] hover:bg-[#967448] text-white rounded-sm transition-colors flex items-center gap-2"
                aria-label="Shopping Bag"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span className="text-xs font-semibold">{totalItems}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[100px] z-50 bg-white border-t border-[#EAE6DF] overflow-y-auto p-6 animate-fadeIn">
            <div className="space-y-6">
              <div className="pb-4 border-b border-[#F0ECE4]">
                <h4 className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#8A8780] mb-3">
                  Categories
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {CATEGORIES.slice(0, 6).map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/shop/${cat.slug}`}
                      className="py-2 px-3 bg-[#FBFBFA] border border-[#EAE6DF] text-xs font-medium text-[#18181B] rounded hover:border-[#18181B] transition-colors"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-3 text-sm font-medium tracking-wide">
                <Link
                  href="/shop"
                  className="block py-2 text-[#18181B] border-b border-[#F0ECE4]"
                >
                  All 142 Products
                </Link>
                <Link
                  href="/bulk-orders"
                  className="block py-2 text-[#18181B] border-b border-[#F0ECE4]"
                >
                  Wholesale & Bulk Orders
                </Link>
                <Link
                  href="/track-order"
                  className="block py-2 text-[#18181B] border-b border-[#F0ECE4]"
                >
                  Track Order
                </Link>
                <Link href="/about" className="block py-2 text-[#18181B] border-b border-[#F0ECE4]">
                  About Us
                </Link>
                <Link href="/contact" className="block py-2 text-[#18181B] border-b border-[#F0ECE4]">
                  Contact & Store Location
                </Link>
                <Link href="/account" className="block py-2 text-[#18181B] border-b border-[#F0ECE4]">
                  My Account
                </Link>
              </div>

              <div className="pt-4 border-t border-[#F0ECE4] text-xs text-[#8A8780] space-y-1.5">
                <div>Raipur Store: +91 8839715995</div>
                <div>Mon–Sat • 10:00 AM – 10:00 PM</div>
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
