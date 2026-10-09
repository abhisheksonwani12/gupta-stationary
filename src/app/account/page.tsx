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
  ShieldCheck,
  Building,
  Sparkles,
  Phone,
  Mail,
  X,
  Printer,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import { useInventory } from "@/context/InventoryContext";
import { formatPrice } from "@/lib/utils";
import AuthCard from "@/components/auth/AuthCard";
import InvoicePrintModal from "@/components/admin/InvoicePrintModal";
import { Order } from "@/types";

function AccountDashboardContent() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") || "orders";

  const { user, isAuthenticated, logout, deleteAddress, addAddress, setDefaultAddress } = useAuth();
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { orders } = useInventory();

  const [activeTab, setActiveTab] = useState<string>(initialTab);
  const [selectedOrderForInvoice, setSelectedOrderForInvoice] = useState<Order | null>(null);

  // Add Address Modal state
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [newAddrLabel, setNewAddrLabel] = useState("Home");
  const [newAddrLine1, setNewAddrLine1] = useState("");
  const [newAddrCity, setNewAddrCity] = useState("Raipur");
  const [newAddrState, setNewAddrState] = useState("Chhattisgarh");
  const [newAddrPincode, setNewAddrPincode] = useState("492001");
  const [newAddrPhone, setNewAddrPhone] = useState(user?.phone || "");

  const handleAddAddress = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAddrLine1) return;

    addAddress({
      label: newAddrLabel,
      fullName: user?.name || "Customer",
      phone: newAddrPhone || user?.phone || "",
      email: user?.email || "",
      addressLine1: newAddrLine1,
      city: newAddrCity,
      state: newAddrState,
      pincode: newAddrPincode,
      isDefault: user?.addresses?.length === 0,
    });

    setIsAddressModalOpen(false);
    setNewAddrLine1("");
  };

  // If user is not authenticated, render the unified AuthCard
  if (!isAuthenticated || !user) {
    return (
      <div className="min-h-screen bg-[#FAF8F5] py-12 sm:py-20 flex flex-col items-center justify-center p-4">
        <AuthCard
          initialMode="login"
          title="Sign In to Your Account"
          subtitle="Access your orders, saved addresses, and loyalty points"
        />
      </div>
    );
  }

  return (
    <div className="bg-[#FAF8F5] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Top Banner */}
        <div className="bg-white border border-[#E8E3DA] p-6 sm:p-8 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-soft">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[#1C1C1C] border-2 border-[#B38E5D] text-white flex items-center justify-center font-serif font-bold text-lg shrink-0">
              {user.name.slice(0, 2).toUpperCase()}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase font-bold text-[#B38E5D] tracking-widest">
                  {user.role === "wholesale_partner" ? "Wholesale Partner" : "Verified Customer"}
                </span>
                <span className="text-[9px] bg-gray-100 text-gray-600 px-1.5 py-0.2 rounded font-mono capitalize">
                  via {user.provider}
                </span>
              </div>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold uppercase text-gray-900 mt-0.5">
                Welcome back, {user.name}
              </h1>
              <p className="text-xs text-gray-500 mt-1">
                Member Since {user.memberSince} • {user.email} • {user.phone}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-[#FAF8F5] border border-[#E8E3DA] px-4 py-2 text-center text-xs">
              <div className="font-bold text-gray-900">{user.loyaltyPoints}</div>
              <div className="text-[10px] text-gray-500 uppercase">Loyalty Pts</div>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 px-4 py-2 text-center text-xs">
              <div className="font-bold text-emerald-800">₹{user.pendingRewards}</div>
              <div className="text-[10px] text-emerald-700 uppercase">Rewards Cash</div>
            </div>
            <button
              onClick={logout}
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
              { id: "addresses", label: "Delivery Addresses", icon: MapPin, count: user.addresses?.length || 0 },
              { id: "loyalty", label: "Loyalty & Rewards", icon: Award, badge: `${user.memberDiscountPercent}% OFF` },
              { id: "payments", label: "Payment Methods", icon: CreditCard },
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
                    Your Orders & Fulfillment Tracking
                  </h3>
                </div>

                <div className="space-y-4">
                  {orders.length === 0 ? (
                    <div className="text-center py-12 text-xs text-gray-500">
                      <Package className="w-8 h-8 mx-auto text-gray-300 mb-2" />
                      <p>You have not placed any orders yet.</p>
                      <Link href="/shop" className="font-bold text-black hover:underline mt-2 inline-block">
                        Explore Stationery Catalog →
                      </Link>
                    </div>
                  ) : (
                    orders.map((o) => (
                      <div
                        key={o.id}
                        className="border border-[#E8E3DA] p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#FAF8F5] hover:bg-white transition-colors"
                      >
                        <div className="space-y-1 text-xs">
                          <div className="flex items-center gap-3">
                            <span className="font-mono font-bold text-sm text-gray-900">{o.orderNumber}</span>
                            <span
                              className={`text-[10px] font-bold px-2 py-0.5 border uppercase ${
                                o.orderStatus === "processing"
                                  ? "bg-amber-50 text-amber-800 border-amber-200"
                                  : o.orderStatus === "dispatched" || o.orderStatus === "in_transit"
                                  ? "bg-blue-50 text-blue-800 border-blue-200"
                                  : o.orderStatus === "delivered"
                                  ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                                  : "bg-red-50 text-red-800 border-red-200"
                              }`}
                            >
                              {o.orderStatus.replace("_", " ")}
                            </span>
                          </div>
                          <div className="text-gray-500">
                            Placed on {new Date(o.createdAt).toLocaleDateString()} • {o.items.length} items
                          </div>
                          {o.trackingNumber && (
                            <div className="font-mono text-[11px] text-gray-700">
                              Tracking: {o.courierPartner || "Delhivery"} ({o.trackingNumber})
                            </div>
                          )}
                        </div>

                        <div className="flex items-center justify-between sm:justify-end gap-4 text-xs">
                          <div className="text-right">
                            <div className="font-bold text-sm text-gray-900">{formatPrice(o.total)}</div>
                            <span className="text-[10px] text-gray-400 capitalize">{o.paymentMethod}</span>
                          </div>

                          <div className="flex gap-2">
                            <button
                              onClick={() => setSelectedOrderForInvoice(o)}
                              className="px-3 py-1.5 bg-[#1C1C1C] text-white text-[11px] font-bold uppercase tracking-wider hover:bg-[#B38E5D] transition-colors flex items-center gap-1.5"
                            >
                              <Printer className="w-3.5 h-3.5" />
                              <span>Invoice</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
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
                    onClick={() => setIsAddressModalOpen(true)}
                    className="flex items-center gap-1 font-bold text-[#B38E5D] hover:underline"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add New Address</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {user.addresses?.map((a) => (
                    <div key={a.id} className="p-5 border border-[#E8E3DA] bg-[#FAF8F5] space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-gray-900">{a.label}</span>
                        {a.isDefault ? (
                          <span className="text-[10px] bg-black text-white px-2 py-0.5 uppercase">
                            Default
                          </span>
                        ) : (
                          <button
                            onClick={() => setDefaultAddress(a.id)}
                            className="text-[10px] text-gray-500 hover:text-black underline"
                          >
                            Set as Default
                          </button>
                        )}
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {a.addressLine1}
                        {a.addressLine2 && `, ${a.addressLine2}`}
                        <br />
                        {a.city}, {a.state} - <strong>{a.pincode}</strong>
                      </p>
                      <p className="text-gray-500 text-[11px]">Phone: {a.phone}</p>
                      <div className="flex gap-3 pt-2 text-[11px] font-bold">
                        <button
                          onClick={() => deleteAddress(a.id)}
                          className="text-red-600 hover:underline"
                        >
                          Delete
                        </button>
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
                    Instant Loyalty & Rewards Program
                  </h3>
                  <p className="text-gray-500 mt-1">
                    Earn 1 loyalty point for every ₹10 spent. Redeem points on upcoming purchases.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-5 bg-[#FAF8F5] border border-[#E8E3DA] space-y-1 text-center">
                    <div className="text-2xl font-bold font-serif text-gray-900">{user.loyaltyPoints}</div>
                    <div className="text-gray-500 uppercase text-[10px]">Total Points Balance</div>
                  </div>
                  <div className="p-5 bg-emerald-50 border border-emerald-200 space-y-1 text-center">
                    <div className="text-2xl font-bold font-serif text-emerald-900">₹{user.pendingRewards}</div>
                    <div className="text-emerald-700 uppercase text-[10px]">Available Cash Credit</div>
                  </div>
                  <div className="p-5 bg-[#FAF8F5] border border-[#E8E3DA] space-y-1 text-center">
                    <div className="text-2xl font-bold font-serif text-[#B38E5D]">{user.memberDiscountPercent}% OFF</div>
                    <div className="text-gray-500 uppercase text-[10px]">Active Member Tier Discount</div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 5: Settings */}
            {activeTab === "settings" && (
              <div className="space-y-6 text-xs">
                <div className="border-b border-[#E8E3DA] pb-4">
                  <h3 className="font-serif text-lg font-bold uppercase text-gray-900">
                    Account Information & Profile
                  </h3>
                </div>

                <div className="space-y-4 max-w-md">
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      defaultValue={user.name}
                      className="w-full p-2.5 border bg-gray-50"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      defaultValue={user.email}
                      className="w-full p-2.5 border bg-gray-50"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Mobile Phone</label>
                    <input
                      type="tel"
                      defaultValue={user.phone}
                      className="w-full p-2.5 border bg-gray-50"
                      readOnly
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Add Address Modal */}
      {isAddressModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-[#E8E3DA] max-w-md w-full p-6 space-y-4">
            <div className="flex justify-between items-center border-b border-gray-100 pb-2">
              <h3 className="font-serif font-bold text-base uppercase text-gray-900">
                Add Delivery Address
              </h3>
              <button
                onClick={() => setIsAddressModalOpen(false)}
                className="p-1 text-gray-400 hover:text-black"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddAddress} className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-gray-700 mb-1">Address Label</label>
                <select
                  value={newAddrLabel}
                  onChange={(e) => setNewAddrLabel(e.target.value)}
                  className="w-full p-2 border"
                >
                  <option value="Home">Home</option>
                  <option value="Office / Corporate">Office / Corporate</option>
                  <option value="School / College">School / College</option>
                  <option value="Store / Warehouse">Store / Warehouse</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-1">House/Street/Area Address *</label>
                <input
                  type="text"
                  required
                  value={newAddrLine1}
                  onChange={(e) => setNewAddrLine1(e.target.value)}
                  placeholder="e.g. 42, Civil Lines, Near State Bank"
                  className="w-full p-2 border"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-bold text-gray-700 mb-1">City</label>
                  <input
                    type="text"
                    value={newAddrCity}
                    onChange={(e) => setNewAddrCity(e.target.value)}
                    className="w-full p-2 border"
                  />
                </div>
                <div>
                  <label className="block font-bold text-gray-700 mb-1">Pincode</label>
                  <input
                    type="text"
                    value={newAddrPincode}
                    onChange={(e) => setNewAddrPincode(e.target.value)}
                    className="w-full p-2 border font-mono"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setIsAddressModalOpen(false)}
                  className="px-4 py-2 text-xs font-bold text-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#1C1C1C] text-white font-bold text-xs uppercase"
                >
                  Save Address
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Invoice Print Modal */}
      <InvoicePrintModal
        order={selectedOrderForInvoice}
        isOpen={Boolean(selectedOrderForInvoice)}
        onClose={() => setSelectedOrderForInvoice(null)}
      />
    </div>
  );
}

export default function AccountPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-xs text-gray-500">Loading Account...</div>}>
      <AccountDashboardContent />
    </Suspense>
  );
}
