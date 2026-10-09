import React from "react";

interface StockBadgeProps {
  stock: number;
  threshold?: number;
  showCount?: boolean;
}

export default function StockBadge({ stock, threshold = 10, showCount = true }: StockBadgeProps) {
  if (stock <= 0) {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-red-50 text-red-700 border border-red-200">
        <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
        <span>Out of Stock</span>
        {showCount && <span className="font-mono text-[10px]">({stock})</span>}
      </span>
    );
  }

  if (stock <= threshold) {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-50 text-amber-800 border border-amber-200">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
        <span>Low Stock</span>
        {showCount && <span className="font-mono text-[10px]">({stock} left)</span>}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
      <span>In Stock</span>
      {showCount && <span className="font-mono text-[10px]">({stock})</span>}
    </span>
  );
}
