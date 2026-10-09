"use client";

import React, { useState } from "react";
import { X, Plus, Minus, Package, AlertCircle } from "lucide-react";
import { Product } from "@/types";

interface QuickStockModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (productId: string, newStock: number) => void;
}

export default function QuickStockModal({
  product,
  isOpen,
  onClose,
  onSave,
}: QuickStockModalProps) {
  const [stockValue, setStockValue] = useState<number>(product?.stock ?? 0);
  const [adjustmentReason, setAdjustmentReason] = useState<string>("Restock");

  // Sync initial product stock when opening
  React.useEffect(() => {
    if (product) {
      setStockValue(product.stock ?? 0);
    }
  }, [product]);

  if (!isOpen || !product) return null;

  const handleAdjust = (delta: number) => {
    setStockValue((prev) => Math.max(0, prev + delta));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(product.id, stockValue);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white border border-[#E8E3DA] shadow-2xl max-w-md w-full p-6 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[#E8E3DA] pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-[#FAF8F5] border border-[#E8E3DA] flex items-center justify-center text-[#B38E5D]">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-gray-900 text-base uppercase">
                Adjust Live Stock
              </h3>
              <p className="text-xs text-gray-500 font-mono">SKU: {product.sku}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-black hover:bg-gray-100 rounded"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Product Details Preview */}
        <div className="py-4 border-b border-gray-100 flex items-center gap-3">
          <img
            src={product.images[0]}
            alt=""
            className="w-12 h-12 object-cover border border-gray-200"
          />
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold text-gray-900 truncate">{product.name}</p>
            <p className="text-[11px] text-gray-500">Current Stock: <span className="font-bold text-gray-900">{product.stock} units</span></p>
          </div>
        </div>

        <form onSubmit={handleFormSubmit} className="space-y-4 pt-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
              New Total Stock Quantity
            </label>
            <div className="flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => handleAdjust(-10)}
                className="px-2.5 py-2 bg-gray-100 border text-xs font-bold text-gray-700 hover:bg-gray-200"
              >
                -10
              </button>
              <button
                type="button"
                onClick={() => handleAdjust(-1)}
                className="p-2 bg-gray-100 border text-gray-700 hover:bg-gray-200"
              >
                <Minus className="w-4 h-4" />
              </button>
              <input
                type="number"
                min="0"
                required
                value={stockValue}
                onChange={(e) => setStockValue(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-24 text-center text-lg font-bold p-2 border border-black focus:outline-none"
              />
              <button
                type="button"
                onClick={() => handleAdjust(1)}
                className="p-2 bg-gray-100 border text-gray-700 hover:bg-gray-200"
              >
                <Plus className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => handleAdjust(10)}
                className="px-2.5 py-2 bg-gray-100 border text-xs font-bold text-gray-700 hover:bg-gray-200"
              >
                +10
              </button>
              <button
                type="button"
                onClick={() => handleAdjust(50)}
                className="px-2.5 py-2 bg-gray-100 border text-xs font-bold text-gray-700 hover:bg-gray-200"
              >
                +50
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
              Adjustment Reason
            </label>
            <select
              value={adjustmentReason}
              onChange={(e) => setAdjustmentReason(e.target.value)}
              className="w-full text-xs p-2.5 border border-[#E8E3DA] bg-white focus:outline-none focus:border-black"
            >
              <option value="Restock">Fresh Inventory Shipment / Supplier Restock</option>
              <option value="Inventory Audit">Physical Inventory Audit / Reconciliation</option>
              <option value="Damaged">Damaged / Expired / Written Off</option>
              <option value="Wholesale Allocation">Reserved for B2B Wholesale Order</option>
              <option value="Return Restock">Customer Return Restocked</option>
            </select>
          </div>

          {stockValue === 0 && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>Setting stock to 0 will immediately mark this item as Out of Stock on the storefront.</span>
            </div>
          )}

          <div className="flex justify-end gap-2 pt-3 border-t border-gray-100">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-gray-600 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-[#1C1C1C] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#B38E5D] transition-colors"
            >
              Save Stock Level
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
