"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Users,
  Search,
  Mail,
  Phone,
  MapPin,
  ShoppingBag,
  Award,
  ChevronRight,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import AdminHeader from "@/components/admin/AdminHeader";
import { useInventory } from "@/context/InventoryContext";
import { formatPrice } from "@/lib/utils";

interface CustomerAggregate {
  id: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  totalOrders: number;
  totalSpent: number;
  lastOrderDate: string;
  loyaltyPoints: number;
  role: "retail" | "wholesale";
}

export default function AdminCustomersPage() {
  const { orders } = useInventory();
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState<"all" | "wholesale" | "retail">("all");

  // Aggregate customers from all orders
  const customerMap = new Map<string, CustomerAggregate>();

  orders.forEach((o) => {
    const key = (o.customerEmail || o.customerPhone || "guest").toLowerCase().trim();
    const existing = customerMap.get(key);

    const isWholesale = o.subtotal > 5000 || o.bulkDiscount > 0;
    const spent = o.paymentStatus === "paid" ? o.total : o.total;

    if (existing) {
      existing.totalOrders += 1;
      existing.totalSpent += spent;
      existing.loyaltyPoints += Math.floor(spent * 0.05);
      if (new Date(o.createdAt) > new Date(existing.lastOrderDate)) {
        existing.lastOrderDate = o.createdAt;
      }
      if (isWholesale) existing.role = "wholesale";
    } else {
      customerMap.set(key, {
        id: `cust-${key.replace(/[^a-z0-9]/g, "-")}`,
        name: o.customerName || "Customer",
        email: o.customerEmail || "No email",
        phone: o.customerPhone || "No phone",
        city: o.shippingAddress?.city || "Raipur",
        state: o.shippingAddress?.state || "Chhattisgarh",
        totalOrders: 1,
        totalSpent: spent,
        lastOrderDate: o.createdAt,
        loyaltyPoints: Math.floor(spent * 0.05) + 50,
        role: isWholesale ? "wholesale" : "retail",
      });
    }
  });

  const customersList = Array.from(customerMap.values());

  const filteredCustomers = customersList.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.phone.includes(searchQuery) ||
      c.city.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter =
      filterType === "all" ||
      (filterType === "wholesale" && c.role === "wholesale") ||
      (filterType === "retail" && c.role === "retail");

    return matchesSearch && matchesFilter;
  });

  const totalLifetimeValue = customersList.reduce((sum, c) => sum + c.totalSpent, 0);

  return (
    <div className="p-4 sm:p-8 space-y-6">
      <AdminHeader
        title="Customer Directory & CRM"
        subtitle="Manage shopper accounts, B2B wholesale partners, and lifetime loyalty profiles."
      />

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white border border-[#E8E3DA] p-5 shadow-soft">
          <div className="flex items-center justify-between text-gray-500 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Total Unique Shoppers</span>
            <Users className="w-4 h-4 text-gray-400" />
          </div>
          <div className="text-2xl font-serif font-bold text-gray-900">{customersList.length}</div>
          <p className="text-[11px] text-gray-500 mt-1">Aggregated across store purchases & signups</p>
        </div>

        <div className="bg-white border border-[#E8E3DA] p-5 shadow-soft">
          <div className="flex items-center justify-between text-gray-500 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Total Customer LTV</span>
            <ShoppingBag className="w-4 h-4 text-gray-400" />
          </div>
          <div className="text-2xl font-serif font-bold text-[#B38E5D]">
            {formatPrice(totalLifetimeValue)}
          </div>
          <p className="text-[11px] text-gray-500 mt-1">Combined lifetime spend across all orders</p>
        </div>

        <div className="bg-white border border-[#E8E3DA] p-5 shadow-soft">
          <div className="flex items-center justify-between text-gray-500 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Wholesale Partners</span>
            <Award className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl font-serif font-bold text-emerald-700">
            {customersList.filter((c) => c.role === "wholesale").length}
          </div>
          <p className="text-[11px] text-gray-500 mt-1">High-volume corporate & school accounts</p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white border border-[#E8E3DA] p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name, email, phone, or city..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 border border-[#E8E3DA] text-xs focus:outline-none focus:border-black"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          {(["all", "retail", "wholesale"] as const).map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider border transition-colors ${
                filterType === type
                  ? "bg-[#1C1C1C] text-white border-black"
                  : "bg-white text-gray-600 border-[#E8E3DA] hover:bg-gray-50"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Customer Directory Table */}
      <div className="bg-white border border-[#E8E3DA] overflow-hidden shadow-soft">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#FAF8F5] border-b border-[#E8E3DA] text-[10px] font-bold uppercase tracking-wider text-gray-600">
              <tr>
                <th className="py-3 px-4">Customer</th>
                <th className="py-3 px-4">Location</th>
                <th className="py-3 px-4 text-center">Orders</th>
                <th className="py-3 px-4 text-right">Lifetime Spend</th>
                <th className="py-3 px-4 text-center">Loyalty Points</th>
                <th className="py-3 px-4">Classification</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E8E3DA]">
              {filteredCustomers.length === 0 ? (
                <tr>
                  <td colSpan={7} className="text-center py-12 text-gray-500">
                    No customers found matching &quot;{searchQuery}&quot;
                  </td>
                </tr>
              ) : (
                filteredCustomers.map((cust) => (
                  <tr key={cust.id} className="hover:bg-[#FAF8F5] transition-colors">
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-gray-900">{cust.name}</div>
                      <div className="text-[11px] text-gray-500 flex items-center gap-2 mt-0.5">
                        <span className="flex items-center gap-1">
                          <Mail className="w-3 h-3 text-gray-400" />
                          {cust.email}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Phone className="w-3 h-3 text-gray-400" />
                          {cust.phone}
                        </span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-gray-600">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-gray-400" />
                        <span>
                          {cust.city}, {cust.state}
                        </span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-center font-bold text-gray-900">
                      {cust.totalOrders}
                    </td>
                    <td className="py-3.5 px-4 text-right font-serif font-bold text-gray-900">
                      {formatPrice(cust.totalSpent)}
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <span className="px-2 py-0.5 bg-amber-50 text-amber-800 font-bold text-[10px] rounded border border-amber-200">
                        {cust.loyaltyPoints} Pts
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      <span
                        className={`px-2 py-0.5 text-[10px] font-bold uppercase rounded ${
                          cust.role === "wholesale"
                            ? "bg-purple-100 text-purple-800 border border-purple-200"
                            : "bg-blue-50 text-blue-800 border border-blue-200"
                        }`}
                      >
                        {cust.role}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <Link
                        href={`/admin/orders?search=${encodeURIComponent(cust.email || cust.name)}`}
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-bold text-gray-700 bg-gray-100 hover:bg-black hover:text-white rounded transition-colors"
                      >
                        <span>Orders</span>
                        <ChevronRight className="w-3 h-3" />
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
