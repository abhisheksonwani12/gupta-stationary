"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  PackageCheck,
  Search,
  Printer,
  Eye,
  Truck,
  Filter,
  CheckCircle2,
  Clock,
  MapPin,
  Download,
} from "lucide-react";
import AdminHeader from "@/components/admin/AdminHeader";
import InvoicePrintModal from "@/components/admin/InvoicePrintModal";
import { useInventory } from "@/context/InventoryContext";
import { formatPrice } from "@/lib/utils";
import { Order, OrderStatus } from "@/types";

export default function AdminOrdersPage() {
  const { orders, updateOrderStatus } = useInventory();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedOrderForInvoice, setSelectedOrderForInvoice] = useState<Order | null>(null);

  const filteredOrders = useMemo(() => {
    return orders.filter((o) => {
      const matchSearch =
        o.orderNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        o.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        o.customerPhone.includes(searchQuery) ||
        (o.trackingNumber && o.trackingNumber.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchStatus = statusFilter === "all" || o.orderStatus === statusFilter;
      return matchSearch && matchStatus;
    });
  }, [orders, searchQuery, statusFilter]);

  const statusCounts = useMemo(() => {
    return {
      all: orders.length,
      processing: orders.filter((o) => o.orderStatus === "processing").length,
      dispatched: orders.filter((o) => o.orderStatus === "dispatched").length,
      in_transit: orders.filter((o) => o.orderStatus === "in_transit").length,
      delivered: orders.filter((o) => o.orderStatus === "delivered").length,
      cancelled: orders.filter((o) => o.orderStatus === "cancelled").length,
    };
  }, [orders]);

  return (
    <div className="pb-16">
      <AdminHeader
        title="Orders & Fulfillment"
        subtitle="Process customer orders, assign courier tracking AWB numbers, and generate tax invoices"
        actions={
          <button
            onClick={() => alert("Bulk export of all dispatch manifests generated.")}
            className="px-3.5 py-2 bg-white border border-[#E8E3DA] text-gray-700 text-xs font-bold uppercase tracking-wider hover:bg-gray-50 transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Manifest</span>
          </button>
        }
      />

      <div className="p-4 sm:p-8 space-y-6 max-w-7xl mx-auto">
        {/* Status Filters */}
        <div className="flex flex-wrap gap-2 text-xs">
          {[
            { id: "all", label: "All Orders", count: statusCounts.all },
            { id: "processing", label: "Processing (To Pack)", count: statusCounts.processing, color: "text-amber-800" },
            { id: "dispatched", label: "Dispatched", count: statusCounts.dispatched, color: "text-blue-800" },
            { id: "in_transit", label: "In Transit / Out for Delivery", count: statusCounts.in_transit, color: "text-purple-800" },
            { id: "delivered", label: "Delivered", count: statusCounts.delivered, color: "text-emerald-800" },
            { id: "cancelled", label: "Cancelled", count: statusCounts.cancelled, color: "text-red-800" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setStatusFilter(tab.id)}
              className={`px-3 py-1.5 font-bold uppercase text-[11px] tracking-wider rounded transition-colors flex items-center gap-1.5 ${
                statusFilter === tab.id
                  ? "bg-[#1C1C1C] text-white"
                  : "bg-white border border-[#E8E3DA] text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  statusFilter === tab.id ? "bg-white/20 text-white" : "bg-gray-100 text-gray-600"
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="bg-white border border-[#E8E3DA] p-4 shadow-soft">
          <div className="relative max-w-md">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by Order #, Customer Name, Phone, or Courier AWB..."
              className="w-full text-xs pl-9 pr-3 py-2.5 bg-[#FAF8F5] border border-[#E8E3DA] focus:outline-none focus:border-black"
            />
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white border border-[#E8E3DA] shadow-soft overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#FAF8F5] text-gray-600 font-bold uppercase text-[10px] tracking-wider border-b border-[#E8E3DA]">
                <tr>
                  <th className="p-4">Order / Date</th>
                  <th className="p-4">Customer & City</th>
                  <th className="p-4">Items / Total</th>
                  <th className="p-4">Payment</th>
                  <th className="p-4">Fulfillment Status</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredOrders.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="p-12 text-center text-gray-400">
                      No orders found matching the filter.
                    </td>
                  </tr>
                ) : (
                  filteredOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50/80 transition-colors">
                      {/* Order / Date */}
                      <td className="p-4">
                        <Link
                          href={`/admin/orders/${order.id}`}
                          className="font-mono font-bold text-gray-900 hover:text-[#B38E5D] transition-colors block"
                        >
                          {order.orderNumber}
                        </Link>
                        <span className="text-[10px] text-gray-400 block mt-0.5">
                          {new Date(order.createdAt).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                      </td>

                      {/* Customer */}
                      <td className="p-4">
                        <div className="font-bold text-gray-900">{order.customerName}</div>
                        <div className="text-[11px] text-gray-500">
                          {order.shippingAddress.city} • {order.customerPhone}
                        </div>
                      </td>

                      {/* Items & Total */}
                      <td className="p-4">
                        <div className="font-bold text-gray-900 text-sm">{formatPrice(order.total)}</div>
                        <div className="text-[11px] text-gray-500">
                          {order.items.reduce((sum, it) => sum + it.quantity, 0)} items (
                          {order.items.length} SKUs)
                        </div>
                      </td>

                      {/* Payment */}
                      <td className="p-4">
                        <div className="flex items-center gap-1.5">
                          <span
                            className={`w-2 h-2 rounded-full ${
                              order.paymentStatus === "paid" ? "bg-emerald-600" : "bg-amber-500"
                            }`}
                          />
                          <span className="font-bold uppercase text-[10px] tracking-wider text-gray-800">
                            {order.paymentStatus}
                          </span>
                        </div>
                        <span className="text-[10px] text-gray-400 uppercase font-mono block mt-0.5">
                          {order.paymentMethod}
                        </span>
                      </td>

                      {/* Status */}
                      <td className="p-4">
                        <select
                          value={order.orderStatus}
                          onChange={(e) => updateOrderStatus(order.id, e.target.value as OrderStatus)}
                          className={`text-[11px] font-bold px-2.5 py-1 border rounded focus:outline-none ${
                            order.orderStatus === "processing"
                              ? "bg-amber-50 text-amber-800 border-amber-300"
                              : order.orderStatus === "dispatched" || order.orderStatus === "in_transit"
                              ? "bg-blue-50 text-blue-800 border-blue-300"
                              : order.orderStatus === "delivered"
                              ? "bg-emerald-50 text-emerald-800 border-emerald-300"
                              : "bg-red-50 text-red-800 border-red-300"
                          }`}
                        >
                          <option value="processing">Processing (Packing)</option>
                          <option value="dispatched">Dispatched</option>
                          <option value="in_transit">In Transit (Out for Delivery)</option>
                          <option value="delivered">Delivered</option>
                          <option value="cancelled">Cancelled</option>
                        </select>

                        {order.trackingNumber && (
                          <span className="text-[10px] font-mono text-gray-500 block mt-1">
                            AWB: {order.trackingNumber}
                          </span>
                        )}
                      </td>

                      {/* Actions */}
                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => setSelectedOrderForInvoice(order)}
                            className="p-2 border border-gray-200 text-gray-700 hover:text-black hover:bg-gray-100 rounded"
                            title="Print GST Invoice"
                          >
                            <Printer className="w-3.5 h-3.5" />
                          </button>
                          <Link
                            href={`/admin/orders/${order.id}`}
                            className="px-3 py-1.5 bg-[#1C1C1C] text-white text-[11px] font-bold uppercase tracking-wider hover:bg-[#B38E5D] transition-colors rounded"
                          >
                            Details
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Invoice Print Modal */}
      <InvoicePrintModal
        order={selectedOrderForInvoice}
        isOpen={Boolean(selectedOrderForInvoice)}
        onClose={() => setSelectedOrderForInvoice(null)}
      />
    </div>
  );
}
