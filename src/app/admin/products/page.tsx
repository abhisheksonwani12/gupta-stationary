"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Plus,
  Search,
  Edit2,
  Trash2,
  ExternalLink,
  Star,
  Leaf,
  Sparkles,
  ShoppingBag,
} from "lucide-react";
import AdminHeader from "@/components/admin/AdminHeader";
import StockBadge from "@/components/admin/StockBadge";
import { useInventory } from "@/context/InventoryContext";
import { formatPrice } from "@/lib/utils";

export default function AdminProductsPage() {
  const { products, deleteProduct, updateProduct } = useInventory();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.sku.toLowerCase().includes(searchQuery.toLowerCase());
      const matchCat = selectedCategory === "all" || p.category === selectedCategory;
      return matchSearch && matchCat;
    });
  }, [products, searchQuery, selectedCategory]);

  const handleDelete = (id: string, name: string) => {
    if (confirm(`Are you sure you want to delete "${name}" from the store catalog?`)) {
      deleteProduct(id);
    }
  };

  return (
    <div className="pb-16">
      <AdminHeader
        title="Products Catalog"
        subtitle="Manage stationery items, pricing, specifications, and bulk tiers"
        actions={
          <Link
            href="/admin/products/new"
            className="px-4 py-2 bg-[#1C1C1C] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#B38E5D] transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Product</span>
          </Link>
        }
      />

      <div className="p-4 sm:p-8 space-y-6 max-w-7xl mx-auto">
        {/* Search and Filters */}
        <div className="bg-white border border-[#E8E3DA] p-4 shadow-soft flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products by title, SKU..."
              className="w-full text-xs pl-9 pr-3 py-2.5 bg-[#FAF8F5] border border-[#E8E3DA] focus:outline-none focus:border-black"
            />
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-gray-500 font-bold uppercase text-[10px] tracking-wider">Category:</span>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="p-2 border border-[#E8E3DA] bg-[#FAF8F5] font-semibold text-gray-700 focus:outline-none"
            >
              <option value="all">All Categories ({products.length})</option>
              <option value="pens-pencils">Pens & Pencils</option>
              <option value="notebooks-registers">Notebooks & Registers</option>
              <option value="art-craft">Art & Craft</option>
              <option value="office-supplies">Office Supplies</option>
              <option value="school-college">School & College</option>
              <option value="festive-gifts">Festive & Gifts</option>
            </select>
          </div>
        </div>

        {/* Product Catalog Table */}
        <div className="bg-white border border-[#E8E3DA] shadow-soft overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#FAF8F5] text-gray-600 font-bold uppercase text-[10px] tracking-wider border-b border-[#E8E3DA]">
                <tr>
                  <th className="p-4">Product Info</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Pricing (M.R.P / Sell)</th>
                  <th className="p-4">Stock</th>
                  <th className="p-4">Badges</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="p-12 text-center text-gray-400">
                      No products found.
                    </td>
                  </tr>
                ) : (
                  filtered.map((product) => (
                    <tr key={product.id} className="hover:bg-gray-50/80 transition-colors">
                      {/* Product Info */}
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
                              <ExternalLink className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                            </Link>
                            <span className="font-mono text-[11px] text-gray-400 block mt-0.5">
                              SKU: {product.sku}
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
                        <div className="font-bold text-gray-900 text-sm">{formatPrice(product.price)}</div>
                        {product.originalPrice && (
                          <div className="text-[11px] text-gray-400 line-through">
                            M.R.P: {formatPrice(product.originalPrice)}
                          </div>
                        )}
                      </td>

                      {/* Stock */}
                      <td className="p-4">
                        <StockBadge
                          stock={product.stock ?? 0}
                          threshold={product.lowStockThreshold ?? 10}
                        />
                      </td>

                      {/* Badges toggles */}
                      <td className="p-4">
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() =>
                              updateProduct(product.id, { isBestseller: !product.isBestseller })
                            }
                            className={`p-1 rounded text-[10px] font-bold border transition-colors ${
                              product.isBestseller
                                ? "bg-amber-100 border-amber-300 text-amber-900"
                                : "bg-gray-50 border-gray-200 text-gray-400 hover:text-black"
                            }`}
                            title="Toggle Bestseller"
                          >
                            ★ Best
                          </button>
                          <button
                            onClick={() =>
                              updateProduct(product.id, { isEcoFriendly: !product.isEcoFriendly })
                            }
                            className={`p-1 rounded text-[10px] font-bold border transition-colors ${
                              product.isEcoFriendly
                                ? "bg-emerald-100 border-emerald-300 text-emerald-900"
                                : "bg-gray-50 border-gray-200 text-gray-400 hover:text-black"
                            }`}
                            title="Toggle Eco-Friendly"
                          >
                            🌱 Eco
                          </button>
                        </div>
                      </td>

                      {/* Actions */}
                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Link
                            href={`/admin/products/${product.id}/edit`}
                            className="p-1.5 border border-gray-200 text-gray-600 hover:text-black hover:bg-gray-100 rounded"
                            title="Edit Product"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </Link>
                          <button
                            onClick={() => handleDelete(product.id, product.name)}
                            className="p-1.5 border border-red-200 text-red-600 hover:bg-red-50 rounded"
                            title="Delete Product"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
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
    </div>
  );
}
