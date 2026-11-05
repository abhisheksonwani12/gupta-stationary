"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Boxes,
  ShoppingBag,
  PackageCheck,
  Building2,
  TicketPercent,
  Users,
  BarChart3,
  Settings,
  ExternalLink,
  LogOut,
  ChevronRight,
  AlertTriangle,
  RefreshCw,
  X,
} from "lucide-react";
import { useInventory } from "@/context/InventoryContext";

interface AdminSidebarProps {
  isMobileOpen?: boolean;
  onCloseMobile?: () => void;
}

export default function AdminSidebar({ isMobileOpen, onCloseMobile }: AdminSidebarProps) {
  const pathname = usePathname();
  const {
    lowStockCount,
    outOfStockCount,
    pendingOrdersCount,
    quotes,
    orders,
    syncWithDatabase,
    isSyncing,
    lastSyncedAt,
    isDbConnected,
  } = useInventory();

  const handleClose = () => {
    if (onCloseMobile) onCloseMobile();
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("close_admin_sidebar"));
    }
  };

  const newQuotesCount = quotes.filter((q) => q.status === "received").length;
  const criticalStockAlerts = lowStockCount + outOfStockCount;

  // Derive unique customer count
  const customerCount = new Set(orders.map((o) => o.customerEmail || o.customerPhone).filter(Boolean)).size;

  const NAV_ITEMS = [
    {
      label: "Dashboard",
      href: "/admin/dashboard",
      icon: LayoutDashboard,
    },
    {
      label: "Live Inventory",
      href: "/admin/inventory",
      icon: Boxes,
      badge: criticalStockAlerts > 0 ? `${criticalStockAlerts}` : undefined,
      badgeColor: outOfStockCount > 0 ? "bg-red-600 text-white" : "bg-amber-600 text-white",
    },
    {
      label: "Products Catalog",
      href: "/admin/products",
      icon: ShoppingBag,
    },
    {
      label: "Orders & Fulfillment",
      href: "/admin/orders",
      icon: PackageCheck,
      badge: pendingOrdersCount > 0 ? `${pendingOrdersCount}` : undefined,
      badgeColor: "bg-[#B38E5D] text-white",
    },
    {
      label: "B2B Bulk Quotes",
      href: "/admin/bulk-quotes",
      icon: Building2,
      badge: newQuotesCount > 0 ? `${newQuotesCount} NEW` : undefined,
      badgeColor: "bg-blue-600 text-white",
    },
    {
      label: "Customers & CRM",
      href: "/admin/customers",
      icon: Users,
      badge: customerCount > 0 ? `${customerCount}` : undefined,
      badgeColor: "bg-emerald-700 text-white",
    },
    {
      label: "Sales & Analytics",
      href: "/admin/analytics",
      icon: BarChart3,
    },
    {
      label: "Coupons & Discounts",
      href: "/admin/coupons",
      icon: TicketPercent,
    },
    {
      label: "Store Settings",
      href: "/admin/settings",
      icon: Settings,
    },
  ];

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#141414] text-gray-300 border-r border-[#262626] flex flex-col justify-between transition-transform duration-300 ease-in-out lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 ${
        isMobileOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"
      }`}
    >
      <div className="flex-1 flex flex-col min-h-0">
        {/* Brand Header */}
        <div className="p-4 sm:p-5 border-b border-[#262626] shrink-0">
          <div className="flex items-center justify-between">
            <Link
              href="/admin/dashboard"
              onClick={handleClose}
              className="flex items-center gap-2.5"
            >
              <div className="w-8 h-8 rounded bg-[#B38E5D] flex items-center justify-center text-white font-serif font-black text-sm">
                GS
              </div>
              <div>
                <span className="font-serif font-bold text-white tracking-wide text-sm block">
                  Instant Stationary
                </span>
                <span className="text-[10px] font-mono uppercase text-[#B38E5D] tracking-widest block">
                  Merchant Control
                </span>
              </div>
            </Link>

            {/* Mobile close button */}
            <button
              onClick={handleClose}
              className="lg:hidden p-1.5 text-gray-400 hover:text-white hover:bg-[#262626] rounded transition-colors"
              aria-label="Close Sidebar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Database Live Sync Banner */}
        <div className="px-4 pt-3 pb-1 shrink-0">
          <div className="p-2.5 bg-[#1C1C1C] border border-[#2D2D2D] rounded flex items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2 min-w-0">
              <span className="relative flex h-2 w-2 shrink-0">
                <span
                  className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                    isDbConnected ? "bg-emerald-400" : "bg-amber-400"
                  }`}
                />
                <span
                  className={`relative inline-flex rounded-full h-2 w-2 ${
                    isDbConnected ? "bg-emerald-500" : "bg-amber-500"
                  }`}
                />
              </span>
              <div className="truncate">
                <span className="text-[11px] font-bold text-white block">Cloud Synced</span>
                <span className="text-[9px] text-gray-400 block font-mono">
                  {lastSyncedAt
                    ? `${lastSyncedAt.toLocaleTimeString("en-IN", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}`
                    : "Live Cloud"}
                </span>
              </div>
            </div>
            <button
              onClick={() => syncWithDatabase()}
              disabled={isSyncing}
              title="Sync Store Data"
              className="p-1.5 hover:bg-[#2A2A2A] text-gray-300 hover:text-white rounded border border-[#3A3A3A] transition-colors disabled:opacity-50"
            >
              <RefreshCw
                className={`w-3.5 h-3.5 ${isSyncing ? "animate-spin text-[#B38E5D]" : ""}`}
              />
            </button>
          </div>
        </div>

        {/* Storefront Quick Access */}
        <div className="px-4 pt-2 pb-2 shrink-0">
          <Link
            href="/"
            target="_blank"
            className="w-full flex items-center justify-between px-3 py-2 bg-[#1F1F1F] hover:bg-[#2A2A2A] border border-[#333] text-gray-300 hover:text-white text-xs font-semibold rounded transition-colors group"
          >
            <div className="flex items-center gap-2">
              <ExternalLink className="w-3.5 h-3.5 text-[#B38E5D]" />
              <span>View Live Storefront</span>
            </div>
            <ChevronRight className="w-3 h-3 text-gray-500 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Navigation Links Scrollable Area */}
        <nav className="p-3 space-y-1 text-xs font-medium overflow-y-auto flex-1 min-h-0">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive =
              pathname === item.href ||
              (item.href !== "/admin/dashboard" && pathname?.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleClose}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded transition-colors ${
                  isActive
                    ? "bg-[#B38E5D] text-white font-bold shadow-sm"
                    : "text-gray-400 hover:text-white hover:bg-[#1F1F1F]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${item.badgeColor}`}
                  >
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer Profile & Logout */}
      <div className="p-4 border-t border-[#262626] bg-[#0F0F0F] space-y-3 shrink-0">
        {criticalStockAlerts > 0 && (
          <Link
            href="/admin/inventory"
            onClick={handleClose}
            className="p-2.5 bg-red-950/50 border border-red-800/60 rounded flex items-center gap-2 text-[11px] text-red-300 hover:bg-red-900/50 transition-colors"
          >
            <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 animate-bounce" />
            <span className="truncate">{criticalStockAlerts} items need restocking!</span>
          </Link>
        )}

        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-full bg-[#262626] border border-[#3D3D3D] flex items-center justify-center text-white text-xs font-bold shrink-0">
              HG
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold text-white truncate">Harsh Gupta</p>
              <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Store Owner
              </span>
            </div>
          </div>

          <button
            onClick={() => {
              try {
                sessionStorage.removeItem("instant_admin_session");
                sessionStorage.removeItem("gupta_admin_session");
                sessionStorage.removeItem("admin_email");
              } catch (e) {}
              window.location.href = "/admin/login";
            }}
            className="p-2 text-gray-400 hover:text-white hover:bg-[#222] rounded transition-colors"
            title="Sign Out Admin"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
