"use client";

import React, { useState } from "react";
import {
  TicketPercent,
  Plus,
  Trash2,
  CheckCircle2,
  XCircle,
  Calendar,
  Percent,
  Tag,
  AlertCircle,
} from "lucide-react";
import AdminHeader from "@/components/admin/AdminHeader";
import { useInventory } from "@/context/InventoryContext";
import { formatPrice } from "@/lib/utils";

export default function AdminCouponsPage() {
  const { coupons, createCoupon, toggleCouponStatus, deleteCoupon } = useInventory();

  // Create coupon modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");
  const [discountType, setDiscountType] = useState<"percentage" | "fixed">("percentage");
  const [discountValue, setDiscountValue] = useState<number>(10);
  const [minOrderValue, setMinOrderValue] = useState<number>(499);
  const [maxDiscount, setMaxDiscount] = useState<number>(200);
  const [expiryDate, setExpiryDate] = useState("2026-12-31");
  const [usageLimit, setUsageLimit] = useState<number>(500);

  const handleCreateCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!code) return;

    createCoupon({
      code: code.trim().toUpperCase(),
      description,
      discountType,
      discountValue: Number(discountValue),
      minOrderValue: Number(minOrderValue),
      maxDiscount: discountType === "percentage" && maxDiscount ? Number(maxDiscount) : undefined,
      expiryDate,
      usageLimit: Number(usageLimit),
      isActive: true,
    });

    setIsModalOpen(false);
    setCode("");
    setDescription("");
  };

  const handleDelete = (id: string, code: string) => {
    if (confirm(`Are you sure you want to delete coupon "${code}"?`)) {
      deleteCoupon(id);
    }
  };

  return (
    <div className="pb-16">
      <AdminHeader
        title="Discounts & Promo Codes"
        subtitle="Manage promotional discount codes, bulk incentives, and free delivery thresholds"
        actions={
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-[#1C1C1C] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#B38E5D] transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>Create Coupon</span>
          </button>
        }
      />

      <div className="p-4 sm:p-8 space-y-6 max-w-7xl mx-auto">
        {/* Coupons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coupons.map((coupon) => (
            <div
              key={coupon.id}
              className={`bg-white border p-6 shadow-soft space-y-4 relative overflow-hidden transition-all ${
                coupon.isActive ? "border-[#E8E3DA]" : "border-gray-200 opacity-60 bg-gray-50"
              }`}
            >
              {/* Top Accent */}
              <div
                className={`absolute top-0 inset-x-0 h-1 ${
                  coupon.isActive ? "bg-[#B38E5D]" : "bg-gray-300"
                }`}
              />

              <div className="flex items-start justify-between">
                <div>
                  <span className="font-mono font-bold text-lg text-gray-900 tracking-wider block">
                    {coupon.code}
                  </span>
                  <p className="text-xs text-gray-500 mt-0.5">{coupon.description}</p>
                </div>

                <button
                  onClick={() => toggleCouponStatus(coupon.id)}
                  className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border transition-colors ${
                    coupon.isActive
                      ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                      : "bg-gray-100 text-gray-600 border-gray-300"
                  }`}
                >
                  {coupon.isActive ? "Active" : "Disabled"}
                </button>
              </div>

              {/* Discount Value */}
              <div className="p-3 bg-[#FAF8F5] border border-[#E8E3DA] flex items-center justify-between text-xs">
                <div>
                  <span className="text-[10px] text-gray-500 uppercase font-bold block">Discount</span>
                  <span className="font-bold text-base text-gray-900">
                    {coupon.discountType === "percentage"
                      ? `${coupon.discountValue}% OFF`
                      : `₹${coupon.discountValue} FLAT OFF`}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-gray-500 uppercase font-bold block">Min. Spend</span>
                  <span className="font-bold text-gray-900">{formatPrice(coupon.minOrderValue)}</span>
                </div>
              </div>

              {/* Terms & Expiry */}
              <div className="space-y-1.5 text-[11px] text-gray-600">
                <div className="flex items-center justify-between">
                  <span>Expires On:</span>
                  <span className="font-bold text-gray-800">{coupon.expiryDate}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Times Redeemed:</span>
                  <span className="font-bold text-gray-800">
                    {coupon.usedCount} / {coupon.usageLimit}
                  </span>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-3 border-t border-gray-100 flex justify-between items-center text-xs">
                <button
                  onClick={() => toggleCouponStatus(coupon.id)}
                  className="text-gray-600 hover:text-black font-semibold"
                >
                  {coupon.isActive ? "Deactivate" : "Activate"}
                </button>
                <button
                  onClick={() => handleDelete(coupon.id, coupon.code)}
                  className="text-red-600 hover:underline flex items-center gap-1 font-semibold"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Delete</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Create Coupon Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-[#E8E3DA] shadow-2xl max-w-lg w-full p-6 space-y-4">
            <h3 className="font-serif font-bold text-base uppercase text-gray-900 border-b border-gray-100 pb-2">
              Create Promotional Coupon Code
            </h3>

            <form onSubmit={handleCreateCoupon} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-gray-700 mb-1">Coupon Code *</label>
                  <input
                    type="text"
                    required
                    value={code}
                    onChange={(e) => setCode(e.target.value.toUpperCase())}
                    placeholder="e.g. RAIPUR20"
                    className="w-full p-2.5 bg-[#FAF8F5] border border-[#E8E3DA] font-mono font-bold text-sm uppercase focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-gray-700 mb-1">Discount Type</label>
                  <select
                    value={discountType}
                    onChange={(e) => setDiscountType(e.target.value as any)}
                    className="w-full p-2.5 bg-[#FAF8F5] border border-[#E8E3DA] font-semibold"
                  >
                    <option value="percentage">Percentage (%)</option>
                    <option value="fixed">Fixed Rupee (₹)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-1">Description / Promo Terms</label>
                <input
                  type="text"
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="e.g. Flat 15% OFF for corporate and school stationery orders"
                  className="w-full p-2.5 bg-[#FAF8F5] border border-[#E8E3DA]"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block font-bold text-gray-700 mb-1">
                    {discountType === "percentage" ? "Discount %" : "Discount Amount (₹)"}
                  </label>
                  <input
                    type="number"
                    min="1"
                    required
                    value={discountValue}
                    onChange={(e) => setDiscountValue(parseFloat(e.target.value) || 0)}
                    className="w-full p-2.5 bg-[#FAF8F5] border border-[#E8E3DA] font-bold text-gray-900"
                  />
                </div>

                <div>
                  <label className="block font-bold text-gray-700 mb-1">Min. Order Value (₹)</label>
                  <input
                    type="number"
                    min="0"
                    required
                    value={minOrderValue}
                    onChange={(e) => setMinOrderValue(parseFloat(e.target.value) || 0)}
                    className="w-full p-2.5 bg-[#FAF8F5] border border-[#E8E3DA]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-gray-700 mb-1">Max Discount Cap (₹)</label>
                  <input
                    type="number"
                    min="0"
                    value={maxDiscount}
                    onChange={(e) => setMaxDiscount(parseFloat(e.target.value) || 0)}
                    placeholder="Optional"
                    className="w-full p-2.5 bg-[#FAF8F5] border border-[#E8E3DA]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-gray-700 mb-1">Expiration Date</label>
                  <input
                    type="date"
                    required
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    className="w-full p-2.5 bg-[#FAF8F5] border border-[#E8E3DA]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-gray-700 mb-1">Max Redemptions Limit</label>
                  <input
                    type="number"
                    min="1"
                    required
                    value={usageLimit}
                    onChange={(e) => setUsageLimit(parseInt(e.target.value) || 100)}
                    className="w-full p-2.5 bg-[#FAF8F5] border border-[#E8E3DA]"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-4 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-gray-600 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#1C1C1C] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#B38E5D] transition-colors"
                >
                  Create & Activate
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
