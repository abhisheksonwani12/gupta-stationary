"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  User,
  Package,
  Heart,
  MapPin,
  CreditCard,
  Bell,
  Award,
  Settings,
  LogOut,
  CheckCircle2,
  Download,
  Plus,
  Trash2,
  Edit2,
  Eye,
  ShoppingBag,
} from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";

function AccountDashboardContent() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") || "orders";

  const [activeTab, setActiveTab] = useState<string>(initialTab);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");

  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  // Mock profile data from specification
  const [profile, setProfile] = useState({
    name: "Anmol Sharma",
    email: "anmol.sharma@raipur.edu.in",
    phone: "+91 8839715995",
    memberSince: "January 2020",
    loyaltyPoints: 2847,
    pendingRewards: 284,
    memberDiscountPercent: 5,
  });

  const [addresses, setAddresses] = useState([
    {
      id: "addr-1",
      label: "Home (Default)",
      address: "Mowa, Dubey Colony, Near Durga Temple, Raipur - 492001",
      isDefault: true,
    },
    {
      id: "addr-2",
      label: "Office",
      address: "Business Park, Pandri Industrial Area, Raipur - 492004",
      isDefault: false,
    },
  ]);

  const [orders, setOrders] = useState([
    {
      id: "GS-0089456",
      date: "Today, Aug 21, 2024",
      itemsCount: 3,
      total: 790,
      status: "In Transit (Out for Delivery)",
      statusColor: "text-amber-800 bg-amber-50 border-amber-200",
    },
    {
      id: "GS-0089347",
      date: "Aug 20, 2024",
      itemsCount: 3,
      total: 1250,
      status: "Delivered",
      statusColor: "text-emerald-800 bg-emerald-50 border-emerald-200",
    },
    {
      id: "GS-0089234",
      date: "Aug 15, 2024",
      itemsCount: 5,
      total: 2890,
      status: "Delivered",
      statusColor: "text-emerald-800 bg-emerald-50 border-emerald-200",
    },
    {
      id: "GS-0089123",
      date: "Aug 10, 2024",
      itemsCount: 2,
      total: 640,
      status: "Delivered",
      statusColor: "text-emerald-800 bg-emerald-50 border-emerald-200",
    },
  ]);

  const [preferences, setPreferences] = useState({
    orderConfirmations: true,
    deliveryUpdates: true,
    newLaunches: true,
    specialDiscounts: true,
    newsletter: true,
  });

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#FAF8F5] py-16 flex items-center justify-center p-4">
        <div className="bg-white border border-[#E8E3DA] max-w-md w-full p-8 shadow-soft space-y-6">
          <div className="text-center">
            <span className="text-[10px] uppercase font-bold text-[#B38E5D] tracking-widest">
              Account Login
            </span>
            <h1 className="font-serif text-2xl font-bold uppercase text-gray-900 mt-1">
              Sign In to Gupta Stationery
            </h1>
            <p className="text-xs text-gray-500 mt-1">
              Access order tracking, wholesale pricing, and loyalty benefits
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setIsLoggedIn(true);
            }}
            className="space-y-4 text-xs"
          >
            <div>
              <label className="block font-bold text-gray-700 mb-1">Email or Mobile Number</label>
              <input
                type="text"
                required
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                placeholder="name@organization.com or 8839715995"
                className="w-full p-3 border border-[#E8E3DA] focus:outline-none focus:border-black"
              />
            </div>
            <div>
              <label className="block font-bold text-gray-700 mb-1">Password</label>
              <input
                type="password"
                required
                value={loginPass}
                onChange={(e) => setLoginPass(e.target.value)}
                placeholder="••••••••"
                className="w-full p-3 border border-[#E8E3DA] focus:outline-none focus:border-black"
              />
            </div>

            <div className="flex items-center justify-between text-[11px]">
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input type="checkbox" defaultChecked className="rounded text-black" />
                <span>Remember Me</span>
              </label>
              <a href="#" className="text-[#B38E5D] hover:underline font-semibold">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#1C1C1C] text-white font-bold uppercase tracking-luxury hover:bg-[#B38E5D] transition-colors"
            >
              Sign In
            </button>
          </form>

          <div className="text-center text-xs text-gray-500 pt-2 border-t border-gray-100">
            Don&apos;t have an account yet?{" "}
            <button
              onClick={() => setIsLoggedIn(true)}
              className="text-black font-bold hover:underline"
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF8F5] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Top Banner */}
        <div className="bg-white border border-[#E8E3DA] p-6 sm:p-8 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-soft">
          <div>
            <span className="text-[10px] uppercase font-bold text-[#B38E5D] tracking-widest">
              Verified Member
            </span>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold uppercase text-gray-900 mt-0.5">
              Welcome back, {profile.name}
            </h1>
            <p className="text-xs text-gray-500 mt-1">
              Member Since {profile.memberSince} • {profile.email} • {profile.phone}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-[#FAF8F5] border border-[#E8E3DA] px-4 py-2 text-center text-xs">
              <div className="font-bold text-gray-900">{profile.loyaltyPoints}</div>
              <div className="text-[10px] text-gray-500 uppercase">Loyalty Pts</div>
            </div>
            <div className="bg-[#FAF8F5] border border-[#E8E3DA] px-4 py-2 text-center text-xs">
              <div className="font-bold text-emerald-800">₹{profile.pendingRewards}</div>
              <div className="text-[10px] text-gray-500 uppercase">Rewards Balance</div>
            </div>
            <button
              onClick={() => setIsLoggedIn(false)}
              className="p-2 border border-[#E8E3DA] text-gray-600 hover:text-black hover:bg-gray-100"
              title="Sign Out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 2-Column Dashboard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sidebar Nav */}
          <div className="lg:col-span-3 bg-white border border-[#E8E3DA] p-4 space-y-1 text-xs font-semibold">
            {[
              { id: "orders", label: "Order History", icon: Package, count: orders.length },
              { id: "wishlist", label: "Saved Wishlist", icon: Heart, count: wishlist.length },
              { id: "addresses", label: "Delivery Addresses", icon: MapPin, count: addresses.length },
              { id: "loyalty", label: "Loyalty & Rewards", icon: Award, badge: `${profile.memberDiscountPercent}% OFF` },
              { id: "payments", label: "Payment Methods", icon: CreditCard },
              { id: "preferences", label: "Notifications & SMS", icon: Bell },
              { id: "settings", label: "Account Settings", icon: Settings },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center justify-between p-3 rounded-none transition-colors ${
                    activeTab === tab.id
                      ? "bg-[#1C1C1C] text-white"
                      : "text-gray-700 hover:bg-[#FAF8F5]"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </div>
                  {tab.count !== undefined && (
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                        activeTab === tab.id ? "bg-white/20 text-white" : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {tab.count}
                    </span>
                  )}
                  {tab.badge && (
                    <span className="text-[9px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5">
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Main Tab Content */}
          <div className="lg:col-span-9 bg-white border border-[#E8E3DA] p-6 sm:p-8 min-h-[500px]">
            {/* Tab 1: Orders */}
            {activeTab === "orders" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-[#E8E3DA] pb-4">
                  <h3 className="font-serif text-lg font-bold uppercase text-gray-900">
                    Recent Orders & Fulfillment Status
                  </h3>
                  <button
                    onClick={() => alert("Downloading bulk GST invoice statement...")}
                    className="text-xs font-bold text-[#B38E5D] hover:underline flex items-center gap-1"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download All Invoices</span>
                  </button>
                </div>

                <div className="space-y-4">
                  {orders.map((o) => (
                    <div
                      key={o.id}
                      className="border border-[#E8E3DA] p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#FAF8F5] hover:bg-white transition-colors"
                    >
                      <div className="space-y-1 text-xs">
                        <div className="flex items-center gap-3">
                          <span className="font-mono font-bold text-sm text-gray-900">{o.id}</span>
                          <span className={`text-[10px] font-bold px-2 py-0.5 border ${o.statusColor}`}>
                            {o.status}
                          </span>
                        </div>
                        <div className="text-gray-500">
                          Placed on {o.date} • {o.itemsCount} items
                        </div>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end gap-4 text-xs">
                        <div className="text-right">
                          <div className="font-bold text-sm text-gray-900">{formatPrice(o.total)}</div>
                          <span className="text-[10px] text-gray-400">Total Paid</span>
                        </div>

                        <div className="flex gap-2">
                          <button
                            onClick={() => alert(`Tracking live delivery status for ${o.id}`)}
                            className="px-3 py-1.5 bg-[#1C1C1C] text-white text-[11px] font-bold uppercase tracking-wider hover:bg-[#B38E5D] transition-colors"
                          >
                            Track Order
                          </button>
                          <button
                            onClick={() => alert(`Downloading GST tax invoice PDF for order ${o.id}`)}
                            className="p-1.5 border border-[#E8E3DA] hover:bg-gray-100 text-gray-700"
                            title="Invoice PDF"
                          >
                            <Download className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 2: Wishlist */}
            {activeTab === "wishlist" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-[#E8E3DA] pb-4">
                  <h3 className="font-serif text-lg font-bold uppercase text-gray-900">
                    Saved Products ({wishlist.length})
                  </h3>
                </div>

                {wishlist.length === 0 ? (
                  <div className="text-center py-12 text-xs text-gray-500">
                    <Heart className="w-8 h-8 mx-auto text-gray-300 mb-2" />
                    <p>No products saved to your wishlist yet.</p>
                    <Link href="/shop" className="font-bold text-black hover:underline mt-2 inline-block">
                      Explore Catalog →
                    </Link>
                  </div>
                ) : (
                  <div className="divide-y divide-gray-100">
                    {wishlist.map((p) => (
                      <div key={p.id} className="py-4 flex items-center justify-between gap-4 text-xs">
                        <div className="flex items-center gap-3">
                          <img src={p.images[0]} alt="" className="w-14 h-14 object-cover border" />
                          <div>
                            <Link href={`/product/${p.slug}`} className="font-bold text-gray-900 hover:underline">
                              {p.name}
                            </Link>
                            <div className="text-gray-500">{formatPrice(p.price)}</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => addToCart(p, 1)}
                            className="px-3 py-2 bg-[#1C1C1C] text-white text-[11px] font-bold uppercase tracking-wider hover:bg-[#B38E5D]"
                          >
                            Add to Bag
                          </button>
                          <button
                            onClick={() => removeFromWishlist(p.id)}
                            className="p-2 text-gray-400 hover:text-red-600"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Tab 3: Addresses */}
            {activeTab === "addresses" && (
              <div className="space-y-6 text-xs">
                <div className="flex items-center justify-between border-b border-[#E8E3DA] pb-4">
                  <h3 className="font-serif text-lg font-bold uppercase text-gray-900">
                    Saved Delivery Addresses
                  </h3>
                  <button
                    onClick={() => alert("Address addition modal active")}
                    className="flex items-center gap-1 font-bold text-[#B38E5D] hover:underline"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add New Address</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {addresses.map((a) => (
                    <div key={a.id} className="p-5 border border-[#E8E3DA] bg-[#FAF8F5] space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-gray-900">{a.label}</span>
                        {a.isDefault && (
                          <span className="text-[10px] bg-black text-white px-2 py-0.5 uppercase">
                            Default
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 leading-relaxed">{a.address}</p>
                      <div className="flex gap-3 pt-2 text-[11px] font-bold">
                        <button className="text-[#B38E5D] hover:underline">Edit</button>
                        <button className="text-red-600 hover:underline">Delete</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 4: Loyalty & Rewards */}
            {activeTab === "loyalty" && (
              <div className="space-y-6 text-xs">
                <div className="border-b border-[#E8E3DA] pb-4">
                  <h3 className="font-serif text-lg font-bold uppercase text-gray-900">
                    Gupta Loyalty & Rewards Program
                  </h3>
                  <p className="text-gray-500 mt-1">
                    Earn 1 loyalty point for every ₹10 spent. Redeem points on upcoming purchases.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-5 bg-[#FAF8F5] border border-[#E8E3DA] space-y-1 text-center">
                    <div className="text-2xl font-bold font-serif text-gray-900">{profile.loyaltyPoints}</div>
                    <div className="text-gray-500 uppercase text-[10px]">Total Points Balance</div>
                  </div>
                  <div className="p-5 bg-emerald-50 border border-emerald-200 space-y-1 text-center">
                    <div className="text-2xl font-bold font-serif text-emerald-900">₹{profile.pendingRewards}</div>
                    <div className="text-emerald-700 uppercase text-[10px]">Available Cash Credit</div>
                  </div>
                  <div className="p-5 bg-[#FAF8F5] border border-[#E8E3DA] space-y-1 text-center">
                    <div className="text-2xl font-bold font-serif text-[#B38E5D]">{profile.memberDiscountPercent}% OFF</div>
                    <div className="text-gray-500 uppercase text-[10px]">Active Member Tier Discount</div>
                  </div>
                </div>

                <div className="p-4 bg-[#FAF8F5] border border-[#E8E3DA] space-y-2">
                  <h4 className="font-bold text-gray-900">Your Exclusive Member Perks:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>✅ Flat 5% discount automatically applied at checkout</li>
                    <li>✅ Priority morning delivery slot reservation in Raipur</li>
                    <li>✅ Early access to back-to-school bundles and new product launches</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Tab 5: Preferences */}
            {activeTab === "preferences" && (
              <div className="space-y-6 text-xs">
                <div className="border-b border-[#E8E3DA] pb-4">
                  <h3 className="font-serif text-lg font-bold uppercase text-gray-900">
                    Notification & SMS Preferences
                  </h3>
                </div>

                <div className="space-y-3">
                  {Object.entries(preferences).map(([key, val]) => (
                    <label key={key} className="flex items-center justify-between p-3 border border-gray-100 bg-[#FAF8F5]">
                      <span className="font-semibold capitalize text-gray-800">
                        {key.replace(/([A-Z])/g, " $1")}
                      </span>
                      <input
                        type="checkbox"
                        checked={val}
                        onChange={() => setPreferences({ ...preferences, [key]: !val })}
                        className="rounded text-black"
                      />
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 6: Settings */}
            {activeTab === "settings" && (
              <div className="space-y-6 text-xs">
                <div className="border-b border-[#E8E3DA] pb-4">
                  <h3 className="font-serif text-lg font-bold uppercase text-gray-900">
                    Account Security & Settings
                  </h3>
                </div>

                <div className="space-y-4 max-w-md">
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Current Password</label>
                    <input type="password" placeholder="••••••••" className="w-full p-2.5 border" />
                  </div>
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">New Password</label>
                    <input type="password" placeholder="••••••••" className="w-full p-2.5 border" />
                  </div>
                  <button
                    onClick={() => alert("Password updated successfully!")}
                    className="px-6 py-2.5 bg-[#1C1C1C] text-white font-bold uppercase tracking-wider hover:bg-[#B38E5D]"
                  >
                    Update Password
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AccountPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center">Loading Account...</div>}>
      <AccountDashboardContent />
    </Suspense>
  );
}
