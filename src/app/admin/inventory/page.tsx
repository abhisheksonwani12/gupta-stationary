"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Boxes,
  Search,
  Plus,
  Minus,
  AlertTriangle,
  Download,
  Filter,
  ExternalLink,
  Edit,
  ArrowUpDown,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import AdminHeader from "@/components/admin/AdminHeader";
import StockBadge from "@/components/admin/StockBadge";
import QuickStockModal from "@/components/admin/QuickStockModal";
import { useInventory } from "@/context/InventoryContext";
import { formatPrice } from "@/lib/utils";
import { Product } from "@/types";

export default function AdminInventoryPage() {
  const { products, updateStock, adjustStock, lowStockCount, outOfStockCount } = useInventory();

  const [searchQuery, setSearchQuery] = useState("");
  const [filterTab, setFilterTab] = useState<"all" | "in_stock" | "low_stock" | "out_of_stock">("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        categoryFilter === "all" || p.category === categoryFilter;

      const threshold = p.lowStockThreshold ?? 10;
      let matchesTab = true;
      if (filterTab === "in_stock") {
        matchesTab = (p.stock ?? 0) > threshold;
      } else if (filterTab === "low_stock") {
        matchesTab = (p.stock ?? 0) > 0 && (p.stock ?? 0) <= threshold;
      } else if (filterTab === "out_of_stock") {
        matchesTab = (p.stock ?? 0) <= 0;
      }

      return matchesSearch && matchesCategory && matchesTab;
    });
  }, [products, searchQuery, filterTab, categoryFilter]);

  // Aggregate totals
  const totalUnits = products.reduce((sum, p) => sum + (p.stock ?? 0), 0);
  const totalInventoryValue = products.reduce((sum, p) => sum + (p.stock ?? 0) * p.price, 0);

  // Export CSV
  const handleExportCSV = () => {
    const headers = ["SKU", "Product Name", "Category", "Price", "Current Stock", "Threshold", "Status"];
    const rows = products.map((p) => {
      const status =
        (p.stock ?? 0) <= 0
          ? "Out of Stock"
          : (p.stock ?? 0) <= (p.lowStockThreshold ?? 10)
          ? "Low Stock"
          : "In Stock";
      return [
        `"${p.sku}"`,
        `"${p.name.replace(/"/g, '""')}"`,
        `"${p.category}"`,
        p.price,
        p.stock ?? 0,
        p.lowStockThreshold ?? 10,
        `"${status}"`,
      ].join(",");
    });

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `gupta_inventory_statement_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="pb-16">
      <AdminHeader
        title="Live Inventory Management"
        subtitle="Real-time warehouse stock tracking, threshold warnings, and instant level adjusters"
        actions={
          <div className="flex gap-2">
            <button
              onClick={handleExportCSV}
              className="px-3.5 py-2 bg-white border border-[#E8E3DA] text-gray-700 text-xs font-bold uppercase tracking-wider hover:bg-gray-50 transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>
            <Link
              href="/admin/products/new"
              className="px-3.5 py-2 bg-[#1C1C1C] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#B38E5D] transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>Add SKU</span>
            </Link>
          </div>
        }
      />

      <div className="p-4 sm:p-8 space-y-6 max-w-7xl mx-auto">
        {/* Top Inventory Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-white border border-[#E8E3DA] shadow-soft">
            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block">Total SKUs</span>
            <span className="text-2xl font-serif font-bold text-gray-900 mt-1 block">{products.length}</span>
            <span className="text-[11px] text-gray-400">Across 6 stationery categories</span>
          </div>

          <div className="p-4 bg-white border border-[#E8E3DA] shadow-soft">
            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block">Total Physical Units</span>
            <span className="text-2xl font-serif font-bold text-gray-900 mt-1 block">{totalUnits.toLocaleString()}</span>
            <span className="text-[11px] text-gray-400">Valued at {formatPrice(totalInventoryValue)}</span>
          </div>

          <div className={`p-4 border shadow-soft ${lowStockCount > 0 ? "bg-amber-50 border-amber-200" : "bg-white border-[#E8E3DA]"}`}>
            <span className="text-[10px] text-amber-800 font-bold uppercase tracking-wider block">Low Stock Items</span>
            <span className="text-2xl font-serif font-bold text-amber-900 mt-1 block">{lowStockCount}</span>
            <span className="text-[11px] text-amber-700">Stock ≤ 10 units</span>
          </div>

          <div className={`p-4 border shadow-soft ${outOfStockCount > 0 ? "bg-red-50 border-red-200" : "bg-white border-[#E8E3DA]"}`}>
            <span className="text-[10px] text-red-800 font-bold uppercase tracking-wider block">Out of Stock</span>
            <span className="text-2xl font-serif font-bold text-red-900 mt-1 block">{outOfStockCount}</span>
            <span className="text-[11px] text-red-700">Needs immediate replenishment</span>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="bg-white border border-[#E8E3DA] p-4 shadow-soft space-y-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by product name, SKU, or category..."
                className="w-full text-xs pl-9 pr-3 py-2.5 bg-[#FAF8F5] border border-[#E8E3DA] focus:outline-none focus:border-black"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-gray-500 font-bold uppercase text-[10px] tracking-wider">Category:</span>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="p-2 border border-[#E8E3DA] bg-[#FAF8F5] font-semibold text-gray-700 focus:outline-none"
              >
                <option value="all">All Categories</option>
                <option value="pens-pencils">Pens & Pencils</option>
                <option value="notebooks-registers">Notebooks & Registers</option>
                <option value="art-craft">Art & Craft</option>
                <option value="office-supplies">Office Supplies</option>
                <option value="school-college">School & College</option>
                <option value="festive-gifts">Festive & Gifts</option>
              </select>
            </div>
          </div>

          {/* Filter Status Tabs */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100 text-xs">
            {[
              { id: "all", label: "All Items", count: products.length },
              { id: "in_stock", label: "In Stock", count: products.length - lowStockCount - outOfStockCount },
              { id: "low_stock", label: "Low Stock Alert", count: lowStockCount, color: "text-amber-700 bg-amber-50" },
              { id: "out_of_stock", label: "Out of Stock", count: outOfStockCount, color: "text-red-700 bg-red-50" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterTab(tab.id as any)}
                className={`px-3 py-1.5 font-bold uppercase text-[11px] tracking-wider rounded transition-colors flex items-center gap-1.5 ${
                  filterTab === tab.id
                    ? "bg-[#1C1C1C] text-white"
                    : "bg-[#FAF8F5] text-gray-600 hover:bg-gray-200"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    filterTab === tab.id ? "bg-white/20 text-white" : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Live Inventory Table */}
        <div className="bg-white border border-[#E8E3DA] shadow-soft overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#FAF8F5] text-gray-600 font-bold uppercase text-[10px] tracking-wider border-b border-[#E8E3DA]">
                <tr>
                  <th className="p-4">Product / SKU</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Retail Price</th>
                  <th className="p-4 text-center">Live Stock Level</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Instant Adjustment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredProducts.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="p-12 text-center text-gray-400">
                      No products match your search or filter criteria.
                    </td>
                  </tr>
                ) : (
                  filteredProducts.map((product) => (
                    <tr key={product.id} className="hover:bg-gray-50/80 transition-colors">
                      {/* Product details */}
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={product.images[0]}
                            alt=""
                            className="w-12 h-12 object-cover border border-gray-200 shrink-0"
                          />
                          <div className="min-w-0">
                            <Link
                              href={`/product/${product.slug}`}
                              target="_blank"
                              className="font-bold text-gray-900 hover:text-[#B38E5D] transition-colors flex items-center gap-1 group"
                            >
                              <span className="truncate max-w-xs">{product.name}</span>
                              <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-black opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                            </Link>
                            <span className="font-mono text-[11px] text-gray-400 block mt-0.5">
                              {product.sku}
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* Category */}
                      <td className="p-4">
                        <span className="capitalize text-gray-700 bg-gray-100 px-2 py-0.5 rounded text-[11px]">
                          {product.category.replace("-", " ")}
                        </span>
                      </td>

                      {/* Price */}
                      <td className="p-4">
                        <div className="font-bold text-gray-900">{formatPrice(product.price)}</div>
                        {product.bulkPricing && product.bulkPricing.length > 1 && (
                          <span className="text-[10px] text-emerald-700 font-semibold">
                            {product.bulkPricing.length} bulk tiers
                          </span>
                        )}
                      </td>

                      {/* Stock Level Counter */}
                      <td className="p-4">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            onClick={() => adjustStock(product.id, -1)}
                            className="p-1 text-gray-500 hover:text-black hover:bg-gray-100 border border-gray-300 rounded"
                            title="Decrease by 1"
                          >
                            <Minus className="w-3 h-3" />
                          </button>

                          <span className="font-mono font-bold text-sm w-12 text-center text-gray-900">
                            {product.stock ?? 0}
                          </span>

                          <button
                            onClick={() => adjustStock(product.id, 1)}
                            className="p-1 text-gray-500 hover:text-black hover:bg-gray-100 border border-gray-300 rounded"
                            title="Increase by 1"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </td>

                      {/* Status */}
                      <td className="p-4">
                        <StockBadge
                          stock={product.stock ?? 0}
                          threshold={product.lowStockThreshold ?? 10}
                          showCount={false}
                        />
                      </td>

                      {/* Instant Adjustment Actions */}
                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => adjustStock(product.id, 10)}
                            className="px-2 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-[11px] rounded"
                            title="Quick add 10 units"
                          >
                            +10
                          </button>
                          <button
                            onClick={() => adjustStock(product.id, 50)}
                            className="px-2 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-[11px] rounded"
                            title="Quick add 50 units"
                          >
                            +50
                          </button>
                          <button
                            onClick={() => setSelectedProduct(product)}
                            className="px-3 py-1 bg-[#1C1C1C] hover:bg-[#B38E5D] text-white font-bold text-[11px] uppercase tracking-wider rounded transition-colors"
                          >
                            Set Stock
                          </button>
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

      {/* Quick Stock Modal */}
      <QuickStockModal
        product={selectedProduct}
        isOpen={Boolean(selectedProduct)}
        onClose={() => setSelectedProduct(null)}
        onSave={(id, newStock) => updateStock(id, newStock)}
      />
    </div>
  );
}
