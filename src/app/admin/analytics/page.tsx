"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  TrendingUp,
  CreditCard,
  Package,
  Boxes,
  PieChart,
  Calendar,
  ArrowUpRight,
  ShieldCheck,
  Percent,
  Download,
} from "lucide-react";
import AdminHeader from "@/components/admin/AdminHeader";
import { useInventory } from "@/context/InventoryContext";
import { formatPrice } from "@/lib/utils";

export default function AdminAnalyticsPage() {
  const { orders, products, quotes } = useInventory();
  const [timeRange, setTimeRange] = useState<"7d" | "30d" | "all">("all");

  // Financial calculations
  const totalGrossRevenue = orders.reduce((sum, o) => sum + o.total, 0);
  const totalPaidRevenue = orders
    .filter((o) => o.paymentStatus === "paid")
    .reduce((sum, o) => sum + o.total, 0);
  const totalPendingRevenue = orders
    .filter((o) => o.paymentStatus === "pending")
    .reduce((sum, o) => sum + o.total, 0);
  const averageOrderValue = orders.length > 0 ? Math.round(totalGrossRevenue / orders.length) : 0;
  const totalTaxCollected = orders.reduce((sum, o) => sum + (o.taxAmount || Math.round(o.total * 0.12)), 0);

  // Payment Breakdown
  const paymentCounts: Record<string, { count: number; total: number }> = {
    upi: { count: 0, total: 0 },
    card: { count: 0, total: 0 },
    cod: { count: 0, total: 0 },
  };

  orders.forEach((o) => {
    const method = o.paymentMethod || "cod";
    if (!paymentCounts[method]) {
      paymentCounts[method] = { count: 0, total: 0 };
    }
    paymentCounts[method].count += 1;
    paymentCounts[method].total += o.total;
  });

  // Order status breakdown
  const statusCounts: Record<string, number> = {
    placed: 0,
    processing: 0,
    in_transit: 0,
    delivered: 0,
    cancelled: 0,
  };
  orders.forEach((o) => {
    const s = o.orderStatus || "processing";
    statusCounts[s] = (statusCounts[s] || 0) + 1;
  });

  // Top selling products based on orders
  const productSalesMap = new Map<string, { name: string; sku: string; units: number; revenue: number }>();
  orders.forEach((o) => {
    (o.items || []).forEach((item) => {
      const existing = productSalesMap.get(item.productName);
      if (existing) {
        existing.units += item.quantity;
        existing.revenue += item.totalPrice;
      } else {
        productSalesMap.set(item.productName, {
          name: item.productName,
          sku: item.sku,
          units: item.quantity,
          revenue: item.totalPrice,
        });
      }
    });
  });

  const topProducts = Array.from(productSalesMap.values())
    .sort((a, b) => b.revenue - a.revenue)
    .slice(0, 5);

  return (
    <div className="p-4 sm:p-8 space-y-6">
      <AdminHeader
        title="Business Analytics & Financial Reports"
        subtitle="Revenue performance, payment channel breakdown, and sales velocity metrics."
        actions={
          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#E8E3DA] text-xs font-bold text-gray-800 hover:bg-gray-100 transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-gray-500" />
            <span>Print Financial Summary</span>
          </button>
        }
      />

      {/* Top Level Financial Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-[#E8E3DA] p-5 shadow-soft">
          <div className="flex items-center justify-between text-gray-500 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Gross Orders Value</span>
            <TrendingUp className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl font-serif font-bold text-gray-900">
            {formatPrice(totalGrossRevenue)}
          </div>
          <p className="text-[11px] text-emerald-700 font-semibold mt-1">
            Across {orders.length} lifetime customer orders
          </p>
        </div>

        <div className="bg-white border border-[#E8E3DA] p-5 shadow-soft">
          <div className="flex items-center justify-between text-gray-500 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Realized Revenue</span>
            <CreditCard className="w-4 h-4 text-blue-600" />
          </div>
          <div className="text-2xl font-serif font-bold text-emerald-700">
            {formatPrice(totalPaidRevenue)}
          </div>
          <p className="text-[11px] text-gray-500 mt-1">
            Settled via instant UPI and Online Cards
          </p>
        </div>

        <div className="bg-white border border-[#E8E3DA] p-5 shadow-soft">
          <div className="flex items-center justify-between text-gray-500 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Average Order Value (AOV)</span>
            <Boxes className="w-4 h-4 text-[#B38E5D]" />
          </div>
          <div className="text-2xl font-serif font-bold text-[#B38E5D]">
            {formatPrice(averageOrderValue)}
          </div>
          <p className="text-[11px] text-gray-500 mt-1">Average cart ticket size</p>
        </div>

        <div className="bg-white border border-[#E8E3DA] p-5 shadow-soft">
          <div className="flex items-center justify-between text-gray-500 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Estimated GST Liability</span>
            <Percent className="w-4 h-4 text-gray-400" />
          </div>
          <div className="text-2xl font-serif font-bold text-gray-900">
            {formatPrice(totalTaxCollected)}
          </div>
          <p className="text-[11px] text-gray-500 mt-1">Standard 12% GST on stationery items</p>
        </div>
      </div>

      {/* 2-Column Analytics Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Payment Channels */}
        <div className="bg-white border border-[#E8E3DA] p-6 shadow-soft">
          <h2 className="font-serif text-base font-bold text-gray-900 uppercase mb-4 flex items-center justify-between">
            <span>Payment Method Distribution</span>
            <span className="text-xs font-sans text-gray-500 lowercase">by total revenue</span>
          </h2>

          <div className="space-y-4">
            {[
              { id: "upi", label: "Instant UPI / QR Code", color: "bg-emerald-500" },
              { id: "card", label: "Debit & Credit Cards / Netbanking", color: "bg-blue-500" },
              { id: "cod", label: "Cash on Delivery (COD)", color: "bg-amber-500" },
            ].map((method) => {
              const data = paymentCounts[method.id] || { count: 0, total: 0 };
              const percent = totalGrossRevenue > 0 ? Math.round((data.total / totalGrossRevenue) * 100) : 0;

              return (
                <div key={method.id} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-gray-800">{method.label}</span>
                    <span className="font-serif font-bold text-gray-900">
                      {formatPrice(data.total)}{" "}
                      <span className="font-sans text-gray-500 text-[11px]">
                        ({data.count} orders • {percent}%)
                      </span>
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className={`h-full ${method.color}`} style={{ width: `${percent}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Fulfillment Pipeline */}
        <div className="bg-white border border-[#E8E3DA] p-6 shadow-soft">
          <h2 className="font-serif text-base font-bold text-gray-900 uppercase mb-4 flex items-center justify-between">
            <span>Order Fulfillment Pipeline</span>
            <span className="text-xs font-sans text-gray-500 lowercase">live active statuses</span>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { id: "processing", label: "Processing", count: statusCounts.processing || 0, color: "text-amber-700 bg-amber-50 border-amber-200" },
              { id: "in_transit", label: "In Transit", count: statusCounts.in_transit || 0, color: "text-blue-700 bg-blue-50 border-blue-200" },
              { id: "delivered", label: "Delivered", count: statusCounts.delivered || 0, color: "text-emerald-700 bg-emerald-50 border-emerald-200" },
              { id: "cancelled", label: "Cancelled", count: statusCounts.cancelled || 0, color: "text-red-700 bg-red-50 border-red-200" },
            ].map((st) => (
              <div key={st.id} className={`p-4 border rounded text-center ${st.color}`}>
                <div className="text-2xl font-serif font-black">{st.count}</div>
                <div className="text-[11px] font-bold uppercase mt-1 tracking-wider">{st.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Velocity Products Table */}
      <div className="bg-white border border-[#E8E3DA] p-6 shadow-soft">
        <h2 className="font-serif text-base font-bold text-gray-900 uppercase mb-4 flex items-center justify-between">
          <span>Top Revenue Drivers (Velocity Products)</span>
          <Link href="/admin/products" className="text-xs text-[#B38E5D] hover:underline">
            View All Products Catalog →
          </Link>
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#FAF8F5] border-b border-[#E8E3DA] text-[10px] font-bold uppercase tracking-wider text-gray-600">
              <tr>
                <th className="py-3 px-4">Product Name</th>
                <th className="py-3 px-4">SKU Code</th>
                <th className="py-3 px-4 text-center">Units Sold</th>
                <th className="py-3 px-4 text-right">Gross Sales</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E8E3DA]">
              {topProducts.length === 0 ? (
                <tr>
                  <td colSpan={4} className="text-center py-8 text-gray-500">
                    No order items recorded yet.
                  </td>
                </tr>
              ) : (
                topProducts.map((p, idx) => (
                  <tr key={p.name} className="hover:bg-[#FAF8F5] transition-colors">
                    <td className="py-3 px-4 font-bold text-gray-900">
                      <span className="text-gray-400 font-mono mr-2">#{idx + 1}</span>
                      {p.name}
                    </td>
                    <td className="py-3 px-4 font-mono text-gray-500">{p.sku}</td>
                    <td className="py-3 px-4 text-center font-bold text-gray-900">{p.units} units</td>
                    <td className="py-3 px-4 text-right font-serif font-bold text-[#B38E5D]">
                      {formatPrice(p.revenue)}
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
