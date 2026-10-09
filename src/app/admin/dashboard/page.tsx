"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  TrendingUp,
  Package,
  Boxes,
  Building2,
  AlertTriangle,
  ArrowRight,
  Plus,
  Eye,
  CheckCircle2,
  Clock,
  ExternalLink,
  Printer,
  ChevronRight,
} from "lucide-react";
import AdminHeader from "@/components/admin/AdminHeader";
import StockBadge from "@/components/admin/StockBadge";
import QuickStockModal from "@/components/admin/QuickStockModal";
import InvoicePrintModal from "@/components/admin/InvoicePrintModal";
import { useInventory } from "@/context/InventoryContext";
import { formatPrice } from "@/lib/utils";
import { Product, Order } from "@/types";

export default function AdminDashboardPage() {
  const {
    products,
    orders,
    quotes,
    lowStockCount,
    outOfStockCount,
    pendingOrdersCount,
    updateStock,
    updateOrderStatus,
  } = useInventory();

  const [selectedProductForStock, setSelectedProductForStock] = useState<Product | null>(null);
  const [selectedOrderForInvoice, setSelectedOrderForInvoice] = useState<Order | null>(null);

  // Computed metrics
  const totalRevenue = orders.reduce((sum, o) => sum + (o.paymentStatus === "paid" ? o.total : 0), 0);
  const totalQuotesValue = quotes.reduce((sum, q) => sum + (q.estimatedValue || 0), 0);
  const criticalItems = products.filter((p) => (p.stock ?? 0) <= (p.lowStockThreshold ?? 10));

  const recentOrders = orders.slice(0, 5);
  const topProducts = [...products]
    .sort((a, b) => (b.reviewCount || 0) - (a.reviewCount || 0))
    .slice(0, 5);

  return (
    <div className="pb-16">
      <AdminHeader
        title="Operations Dashboard"
        subtitle="Live sales metrics, inventory health, and fulfillment pipeline"
        actions={
          <div className="flex gap-2">
            <Link
              href="/admin/products/new"
              className="px-3.5 py-2 bg-[#1C1C1C] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#B38E5D] transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>Add Product</span>
            </Link>
          </div>
        }
      />

      <div className="p-4 sm:p-8 space-y-8 max-w-7xl mx-auto">
        {/* KPI Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Card 1: Revenue */}
          <div className="bg-white border border-[#E8E3DA] p-5 shadow-soft space-y-2">
            <div className="flex items-center justify-between text-xs text-gray-500 uppercase tracking-wider">
              <span>Gross Sales (Today/Month)</span>
              <div className="w-7 h-7 rounded bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <TrendingUp className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-gray-900">
              {formatPrice(totalRevenue)}
            </div>
            <div className="flex items-center gap-1 text-[11px] text-emerald-700 font-semibold">
              <span>+18.4%</span>
              <span className="text-gray-400 font-normal">vs previous period</span>
            </div>
          </div>

          {/* Card 2: Orders */}
          <div className="bg-white border border-[#E8E3DA] p-5 shadow-soft space-y-2">
            <div className="flex items-center justify-between text-xs text-gray-500 uppercase tracking-wider">
              <span>Customer Orders</span>
              <div className="w-7 h-7 rounded bg-blue-50 text-blue-700 flex items-center justify-center">
                <Package className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-gray-900">
              {orders.length}
            </div>
            <div className="flex items-center gap-1 text-[11px] text-amber-700 font-semibold">
              <span>{pendingOrdersCount} pending dispatch</span>
            </div>
          </div>

          {/* Card 3: Stock Health */}
          <div className="bg-white border border-[#E8E3DA] p-5 shadow-soft space-y-2">
            <div className="flex items-center justify-between text-xs text-gray-500 uppercase tracking-wider">
              <span>Live Inventory Health</span>
              <div className="w-7 h-7 rounded bg-amber-50 text-amber-700 flex items-center justify-center">
                <Boxes className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-gray-900">
              {products.length} <span className="text-xs font-normal text-gray-400">SKUs</span>
            </div>
            <div className="flex items-center gap-2 text-[11px]">
              {outOfStockCount > 0 ? (
                <span className="text-red-700 font-bold">{outOfStockCount} Out of stock</span>
              ) : (
                <span className="text-emerald-700 font-semibold">Catalog active</span>
              )}
              {lowStockCount > 0 && (
                <span className="text-amber-700 font-medium">• {lowStockCount} low stock</span>
              )}
            </div>
          </div>

          {/* Card 4: B2B Quotes */}
          <div className="bg-white border border-[#E8E3DA] p-5 shadow-soft space-y-2">
            <div className="flex items-center justify-between text-xs text-gray-500 uppercase tracking-wider">
              <span>B2B Wholesale Pipeline</span>
              <div className="w-7 h-7 rounded bg-purple-50 text-purple-700 flex items-center justify-center">
                <Building2 className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-gray-900">
              {formatPrice(totalQuotesValue)}
            </div>
            <div className="flex items-center gap-1 text-[11px] text-purple-700 font-semibold">
              <span>{quotes.length} active institutional leads</span>
            </div>
          </div>
        </div>

        {/* Critical Stock Alert Bar (if any items out or low) */}
        {criticalItems.length > 0 && (
          <div className="bg-white border-l-4 border-l-red-600 border border-[#E8E3DA] p-5 shadow-soft">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-red-100 text-red-700 flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">
                    Inventory Attention Required: {criticalItems.length} Products Low / Out of Stock
                  </h3>
                  <p className="text-xs text-gray-500">
                    Restock items immediately to prevent lost sales on the live storefront.
                  </p>
                </div>
              </div>
              <Link
                href="/admin/inventory"
                className="px-4 py-2 bg-red-700 text-white text-xs font-bold uppercase tracking-wider hover:bg-red-800 transition-colors flex items-center justify-center gap-1.5 shrink-0"
              >
                <span>Manage Stock</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}

        {/* 2-Column Grid: Recent Orders & Top Selling SKUs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Recent Orders List */}
          <div className="lg:col-span-8 bg-white border border-[#E8E3DA] shadow-soft">
            <div className="p-5 border-b border-[#E8E3DA] flex items-center justify-between">
              <div>
                <h3 className="font-serif font-bold text-base uppercase text-gray-900">
                  Recent Orders & Fulfillment
                </h3>
                <p className="text-xs text-gray-500">Latest customer purchases across Raipur & Pan-India</p>
              </div>
              <Link
                href="/admin/orders"
                className="text-xs font-bold text-[#B38E5D] hover:underline flex items-center gap-1"
              >
                <span>View All ({orders.length})</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#FAF8F5] text-gray-600 font-bold uppercase text-[10px] tracking-wider border-b border-[#E8E3DA]">
                  <tr>
                    <th className="p-4">Order ID</th>
                    <th className="p-4">Customer</th>
                    <th className="p-4">Total (₹)</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50/80 transition-colors">
                      <td className="p-4">
                        <span className="font-mono font-bold text-gray-900 block">
                          {order.orderNumber}
                        </span>
                        <span className="text-[10px] text-gray-400">
                          {new Date(order.createdAt).toLocaleDateString()}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="font-semibold text-gray-900">{order.customerName}</div>
                        <div className="text-[11px] text-gray-500">{order.customerPhone}</div>
                      </td>
                      <td className="p-4">
                        <div className="font-bold text-gray-900">{formatPrice(order.total)}</div>
                        <div className="text-[10px] text-gray-400 capitalize">{order.paymentMethod}</div>
                      </td>
                      <td className="p-4">
                        <select
                          value={order.orderStatus}
                          onChange={(e) => updateOrderStatus(order.id, e.target.value as any)}
                          className={`text-[11px] font-bold px-2 py-1 border rounded focus:outline-none ${
                            order.orderStatus === "processing"
                              ? "bg-amber-50 text-amber-800 border-amber-200"
                              : order.orderStatus === "dispatched" || order.orderStatus === "in_transit"
                              ? "bg-blue-50 text-blue-800 border-blue-200"
                              : order.orderStatus === "delivered"
                              ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                              : "bg-red-50 text-red-800 border-red-200"
                          }`}
                        >
                          <option value="processing">Processing</option>
                          <option value="dispatched">Dispatched</option>
                          <option value="in_transit">In Transit</option>
                          <option value="delivered">Delivered</option>
                          <option value="cancelled">Cancelled</option>
                        </select>
                      </td>
                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => setSelectedOrderForInvoice(order)}
                            className="p-1.5 text-gray-500 hover:text-black hover:bg-gray-100 rounded"
                            title="Print Tax Invoice"
                          >
                            <Printer className="w-4 h-4" />
                          </button>
                          <Link
                            href={`/admin/orders/${order.id}`}
                            className="p-1.5 text-gray-500 hover:text-black hover:bg-gray-100 rounded"
                            title="View Details"
                          >
                            <Eye className="w-4 h-4" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Top Products & Live Stock Status */}
          <div className="lg:col-span-4 bg-white border border-[#E8E3DA] shadow-soft">
            <div className="p-5 border-b border-[#E8E3DA] flex items-center justify-between">
              <div>
                <h3 className="font-serif font-bold text-base uppercase text-gray-900">
                  Popular Stationery
                </h3>
                <p className="text-xs text-gray-500">Live stock counts on top items</p>
              </div>
              <Link
                href="/admin/inventory"
                className="text-xs font-bold text-[#B38E5D] hover:underline"
              >
                Inventory →
              </Link>
            </div>

            <div className="p-4 divide-y divide-gray-100">
              {topProducts.map((p) => (
                <div key={p.id} className="py-3 flex items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={p.images[0]}
                      alt=""
                      className="w-10 h-10 object-cover border border-gray-200 shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="font-bold text-gray-900 truncate">{p.name}</p>
                      <p className="text-[10px] font-mono text-gray-400">{p.sku}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <StockBadge stock={p.stock ?? 0} threshold={p.lowStockThreshold ?? 10} />
                    <button
                      onClick={() => setSelectedProductForStock(p)}
                      className="text-[10px] font-bold text-[#B38E5D] hover:underline border border-[#E8E3DA] px-2 py-1 bg-[#FAF8F5]"
                    >
                      Adjust
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stock Modal */}
      <QuickStockModal
        product={selectedProductForStock}
        isOpen={Boolean(selectedProductForStock)}
        onClose={() => setSelectedProductForStock(null)}
        onSave={(id, newStock) => updateStock(id, newStock)}
      />

      {/* Invoice Print Modal */}
      <InvoicePrintModal
        order={selectedOrderForInvoice}
        isOpen={Boolean(selectedOrderForInvoice)}
        onClose={() => setSelectedOrderForInvoice(null)}
      />
    </div>
  );
}
