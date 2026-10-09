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
  Settings,
  ExternalLink,
  ShieldCheck,
  LogOut,
  ChevronRight,
  AlertTriangle,
} from "lucide-react";
import { useInventory } from "@/context/InventoryContext";

interface AdminSidebarProps {
  isMobileOpen?: boolean;
  onCloseMobile?: () => void;
}

export default function AdminSidebar({ isMobileOpen, onCloseMobile }: AdminSidebarProps) {
  const pathname = usePathname();
  const { lowStockCount, outOfStockCount, pendingOrdersCount, quotes } = useInventory();

  const newQuotesCount = quotes.filter((q) => q.status === "received").length;
  const criticalStockAlerts = lowStockCount + outOfStockCount;

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
      label: "Coupons & Discounts",
      href: "/admin/coupons",
      icon: TicketPercent,
    },
  ];

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-40 w-64 bg-[#141414] text-gray-300 border-r border-[#262626] flex flex-col justify-between transition-transform duration-300 lg:static lg:translate-x-0 ${
        isMobileOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"
      }`}
    >
      <div>
        {/* Brand Header */}
        <div className="p-5 border-b border-[#262626]">
          <div className="flex items-center justify-between">
            <Link href="/admin/dashboard" className="flex items-center gap-2.5">
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
          </div>
        </div>

        {/* Storefront Quick Access */}
        <div className="px-4 pt-4 pb-2">
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

        {/* Navigation Links */}
        <nav className="p-3 space-y-1 text-xs font-medium">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive =
              pathname === item.href ||
              (item.href !== "/admin/dashboard" && pathname?.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onCloseMobile}
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
      <div className="p-4 border-t border-[#262626] bg-[#0F0F0F] space-y-3">
        {criticalStockAlerts > 0 && (
          <Link
            href="/admin/inventory"
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
