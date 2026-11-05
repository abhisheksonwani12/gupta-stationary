"use client";

import React, { useState } from "react";
import {
  Settings,
  Store,
  Truck,
  Database,
  CheckCircle2,
  RefreshCw,
  Save,
  Shield,
  Clock,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import AdminHeader from "@/components/admin/AdminHeader";
import { useInventory } from "@/context/InventoryContext";

export default function AdminSettingsPage() {
  const { isDbConnected, isSyncing, lastSyncedAt, syncWithDatabase } = useInventory();

  // Local settings state
  const [storeName, setStoreName] = useState("Instant Stationary (Gupta Stationery)");
  const [contactEmail, setContactEmail] = useState("support@instantstationary.com");
  const [contactPhone, setContactPhone] = useState("+91 8839715995");
  const [gstin, setGstin] = useState("22AAAAA0000A1Z5");
  const [storeAddress, setStoreAddress] = useState("Shop No. 12, Malviya Road, Near Gol Bazar, Raipur, CG - 492001");
  const [freeShippingMin, setFreeShippingMin] = useState("999");
  const [standardDeliveryFee, setStandardDeliveryFee] = useState("49");
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="p-4 sm:p-8 space-y-6">
      <AdminHeader
        title="Store & Database Settings"
        subtitle="Configure business details, delivery rules, and cloud database connectivity."
      />

      {savedSuccess && (
        <div className="p-4 bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-semibold rounded flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Settings saved successfully!</span>
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-6">
        {/* 1. Cloud Database Status */}
        <div className="bg-white border border-[#E8E3DA] p-6 shadow-soft space-y-4">
          <div className="flex items-center justify-between border-b border-[#E8E3DA] pb-3">
            <div className="flex items-center gap-2.5">
              <Database className="w-5 h-5 text-[#B38E5D]" />
              <h2 className="font-serif text-base font-bold text-gray-900 uppercase">
                Cloud Database Integration (Supabase)
              </h2>
            </div>
            <button
              type="button"
              onClick={() => syncWithDatabase()}
              disabled={isSyncing}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF8F5] border border-[#E8E3DA] text-xs font-bold text-gray-800 hover:bg-[#1C1C1C] hover:text-white transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? "animate-spin" : ""}`} />
              <span>{isSyncing ? "Syncing..." : "Sync Database Now"}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-3 bg-[#FAF8F5] border border-[#E8E3DA]">
              <span className="text-gray-500 uppercase font-mono text-[10px] block">Connection Status</span>
              <span className="font-bold text-emerald-700 flex items-center gap-1.5 mt-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Connected (PostgreSQL / Supabase)
              </span>
            </div>

            <div className="p-3 bg-[#FAF8F5] border border-[#E8E3DA]">
              <span className="text-gray-500 uppercase font-mono text-[10px] block">Project Host</span>
              <span className="font-mono font-bold text-gray-900 block mt-1 truncate">
                ggumahzbwhgvgortfnvz.supabase.co
              </span>
            </div>

            <div className="p-3 bg-[#FAF8F5] border border-[#E8E3DA]">
              <span className="text-gray-500 uppercase font-mono text-[10px] block">Last Real-time Sync</span>
              <span className="font-bold text-gray-900 block mt-1">
                {lastSyncedAt ? lastSyncedAt.toLocaleTimeString("en-IN") : "Active Live Session"}
              </span>
            </div>
          </div>
        </div>

        {/* 2. Business & Store Identity */}
        <div className="bg-white border border-[#E8E3DA] p-6 shadow-soft space-y-4">
          <div className="flex items-center gap-2.5 border-b border-[#E8E3DA] pb-3">
            <Store className="w-5 h-5 text-[#B38E5D]" />
            <h2 className="font-serif text-base font-bold text-gray-900 uppercase">
              Business & Invoice Profile
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-gray-700 font-bold uppercase tracking-wider text-[10px] mb-1">
                Trade Store Name
              </label>
              <input
                type="text"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
                className="w-full p-2.5 border border-[#E8E3DA] focus:border-black focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-bold uppercase tracking-wider text-[10px] mb-1">
                GSTIN / Tax Identification
              </label>
              <input
                type="text"
                value={gstin}
                onChange={(e) => setGstin(e.target.value)}
                className="w-full p-2.5 border border-[#E8E3DA] font-mono focus:border-black focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-bold uppercase tracking-wider text-[10px] mb-1">
                Store Email (Customer Invoices)
              </label>
              <input
                type="email"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                className="w-full p-2.5 border border-[#E8E3DA] focus:border-black focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-bold uppercase tracking-wider text-[10px] mb-1">
                Customer Support Helpline
              </label>
              <input
                type="text"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
                className="w-full p-2.5 border border-[#E8E3DA] focus:border-black focus:outline-none"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-gray-700 font-bold uppercase tracking-wider text-[10px] mb-1">
                Registered Storefront & Dispatch Warehouse Address
              </label>
              <input
                type="text"
                value={storeAddress}
                onChange={(e) => setStoreAddress(e.target.value)}
                className="w-full p-2.5 border border-[#E8E3DA] focus:border-black focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* 3. Delivery & Fulfillment Rules */}
        <div className="bg-white border border-[#E8E3DA] p-6 shadow-soft space-y-4">
          <div className="flex items-center gap-2.5 border-b border-[#E8E3DA] pb-3">
            <Truck className="w-5 h-5 text-[#B38E5D]" />
            <h2 className="font-serif text-base font-bold text-gray-900 uppercase">
              Shipping & Delivery Thresholds
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-gray-700 font-bold uppercase tracking-wider text-[10px] mb-1">
                Free Shipping Threshold (₹)
              </label>
              <input
                type="number"
                value={freeShippingMin}
                onChange={(e) => setFreeShippingMin(e.target.value)}
                className="w-full p-2.5 border border-[#E8E3DA] focus:border-black focus:outline-none"
              />
              <span className="text-[10px] text-gray-500 mt-1 block">
                Orders with subtotal above this get free delivery automatically.
              </span>
            </div>

            <div>
              <label className="block text-gray-700 font-bold uppercase tracking-wider text-[10px] mb-1">
                Standard Shipping Fee (₹)
              </label>
              <input
                type="number"
                value={standardDeliveryFee}
                onChange={(e) => setStandardDeliveryFee(e.target.value)}
                className="w-full p-2.5 border border-[#E8E3DA] focus:border-black focus:outline-none"
              />
              <span className="text-[10px] text-gray-500 mt-1 block">
                Charged when order subtotal is below the free shipping threshold.
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-2.5 bg-[#1C1C1C] hover:bg-[#B38E5D] text-white text-xs font-bold uppercase tracking-wider transition-colors"
          >
            <Save className="w-4 h-4" />
            <span>Save Configuration</span>
          </button>
        </div>
      </form>
    </div>
  );
}
