"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Menu,
  Bell,
  Search,
  Plus,
  Boxes,
  Package,
  TrendingUp,
  Store,
  ExternalLink,
} from "lucide-react";
import { useInventory } from "@/context/InventoryContext";

interface AdminHeaderProps {
  title: string;
  subtitle?: string;
  onToggleSidebar?: () => void;
  actions?: React.ReactNode;
}

export default function AdminHeader({
  title,
  subtitle,
  onToggleSidebar,
  actions,
}: AdminHeaderProps) {
  const { lowStockCount, outOfStockCount, pendingOrdersCount } = useInventory();
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-[#E8E3DA] px-4 sm:px-8 py-4">
      <div className="flex items-center justify-between gap-4">
        {/* Left: Mobile Toggle & Page Title */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleSidebar}
            className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded border border-gray-200"
            aria-label="Toggle Sidebar"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div>
            <h1 className="font-serif text-lg sm:text-xl font-bold uppercase tracking-tight text-gray-900">
              {title}
            </h1>
            {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
          </div>
        </div>

        {/* Right: Quick KPI badges, Notifications & Actions */}
        <div className="flex items-center gap-3">
          {/* Quick stock pills */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              href="/admin/inventory"
              className={`px-3 py-1.5 rounded text-xs font-semibold border flex items-center gap-1.5 transition-colors ${
                outOfStockCount > 0
                  ? "bg-red-50 border-red-200 text-red-700 hover:bg-red-100"
                  : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${outOfStockCount > 0 ? "bg-red-600 animate-pulse" : "bg-emerald-600"}`} />
              <span>{outOfStockCount} Out of Stock</span>
            </Link>

            <Link
              href="/admin/orders"
              className={`px-3 py-1.5 rounded text-xs font-semibold border flex items-center gap-1.5 transition-colors ${
                pendingOrdersCount > 0
                  ? "bg-amber-50 border-amber-200 text-amber-800 hover:bg-amber-100"
                  : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Package className="w-3.5 h-3.5 text-[#B38E5D]" />
              <span>{pendingOrdersCount} Pending Orders</span>
            </Link>
          </div>

          {/* Action slots */}
          {actions}
        </div>
      </div>
    </header>
  );
}
