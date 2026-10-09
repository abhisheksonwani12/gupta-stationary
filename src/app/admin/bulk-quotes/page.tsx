"use client";

import React, { useState, useMemo } from "react";
import {
  Building2,
  Search,
  Phone,
  Mail,
  Calendar,
  MapPin,
  CheckCircle2,
  Clock,
  FileText,
  Save,
  MessageSquare,
} from "lucide-react";
import AdminHeader from "@/components/admin/AdminHeader";
import { useInventory } from "@/context/InventoryContext";
import { formatPrice } from "@/lib/utils";
import { BulkQuoteLead } from "@/types";

export default function AdminBulkQuotesPage() {
  const { quotes, updateQuoteStatus } = useInventory();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [editingQuoteId, setEditingQuoteId] = useState<string | null>(null);
  const [quoteValueInput, setQuoteValueInput] = useState<number>(0);
  const [notesInput, setNotesInput] = useState<string>("");

  const filteredQuotes = useMemo(() => {
    return quotes.filter((q) => {
      const matchSearch =
        q.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.contactPerson.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.phone.includes(searchQuery) ||
        q.productList.toLowerCase().includes(searchQuery.toLowerCase());

      const matchStatus = statusFilter === "all" || q.status === statusFilter;
      return matchSearch && matchStatus;
    });
  }, [quotes, searchQuery, statusFilter]);

  const handleStartEdit = (q: BulkQuoteLead) => {
    setEditingQuoteId(q.id);
    setQuoteValueInput(q.estimatedValue || 0);
    setNotesInput(q.internalNotes || "");
  };

  const handleSaveEdit = (qId: string, currentStatus: BulkQuoteLead["status"]) => {
    updateQuoteStatus(qId, currentStatus, Number(quoteValueInput), notesInput);
    setEditingQuoteId(null);
  };

  const totalPipelineValue = quotes.reduce((sum, q) => sum + (q.estimatedValue || 0), 0);

  return (
    <div className="pb-16">
      <AdminHeader
        title="B2B Wholesale & Institutional Inquiries"
        subtitle="Manage bulk quote requests from schools, colleges, and corporate procurement departments"
      />

      <div className="p-4 sm:p-8 space-y-6 max-w-7xl mx-auto">
        {/* KPI Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 bg-white border border-[#E8E3DA] shadow-soft">
            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block">Total B2B Leads</span>
            <span className="text-2xl font-serif font-bold text-gray-900 mt-1 block">{quotes.length}</span>
            <span className="text-[11px] text-gray-400">Schools, Corporates & Retailers</span>
          </div>

          <div className="p-5 bg-white border border-[#E8E3DA] shadow-soft">
            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block">Pipeline Value</span>
            <span className="text-2xl font-serif font-bold text-purple-900 mt-1 block">{formatPrice(totalPipelineValue)}</span>
            <span className="text-[11px] text-gray-400">Estimated total bulk procurement</span>
          </div>

          <div className="p-5 bg-blue-50 border border-blue-200 shadow-soft">
            <span className="text-[10px] text-blue-800 font-bold uppercase tracking-wider block">New / Uncontacted Leads</span>
            <span className="text-2xl font-serif font-bold text-blue-900 mt-1 block">
              {quotes.filter((q) => q.status === "received").length}
            </span>
            <span className="text-[11px] text-blue-700">Awaiting callback & catalog quote</span>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="bg-white border border-[#E8E3DA] p-4 shadow-soft flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by Institution, Contact Person, Phone..."
              className="w-full text-xs pl-9 pr-3 py-2.5 bg-[#FAF8F5] border border-[#E8E3DA] focus:outline-none focus:border-black"
            />
          </div>

          <div className="flex flex-wrap gap-2 text-xs">
            {["all", "received", "contacted", "quoted", "fulfilled", "closed"].map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-3 py-1.5 font-bold uppercase text-[10px] tracking-wider rounded transition-colors ${
                  statusFilter === status
                    ? "bg-[#1C1C1C] text-white"
                    : "bg-[#FAF8F5] text-gray-600 hover:bg-gray-200"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Quotes Cards Grid */}
        <div className="space-y-4">
          {filteredQuotes.length === 0 ? (
            <div className="p-12 text-center text-gray-400 bg-white border border-[#E8E3DA]">
              No quote requests match the current filter.
            </div>
          ) : (
            filteredQuotes.map((q) => {
              const isEditing = editingQuoteId === q.id;

              return (
                <div
                  key={q.id}
                  className="bg-white border border-[#E8E3DA] p-6 shadow-soft space-y-4 hover:border-black/30 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 pb-3">
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="font-serif font-bold text-base text-gray-900">
                          {q.companyName}
                        </h3>
                        <span className="text-[10px] uppercase font-bold px-2 py-0.5 bg-gray-100 rounded text-gray-700">
                          {q.businessType}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Contact Person: <strong className="text-gray-900">{q.contactPerson}</strong> •{" "}
                        {new Date(q.createdAt).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <select
                        value={q.status}
                        onChange={(e) =>
                          updateQuoteStatus(q.id, e.target.value as any, q.estimatedValue, q.internalNotes)
                        }
                        className={`text-xs font-bold px-3 py-1.5 border rounded focus:outline-none ${
                          q.status === "received"
                            ? "bg-blue-50 text-blue-800 border-blue-300"
                            : q.status === "quoted"
                            ? "bg-purple-50 text-purple-800 border-purple-300"
                            : q.status === "fulfilled"
                            ? "bg-emerald-50 text-emerald-800 border-emerald-300"
                            : "bg-gray-50 text-gray-700 border-gray-300"
                        }`}
                      >
                        <option value="received">Received (New)</option>
                        <option value="contacted">Contacted / In Discussion</option>
                        <option value="quoted">Quoted / Proposal Sent</option>
                        <option value="invoiced">Invoiced / PO Issued</option>
                        <option value="fulfilled">Fulfilled</option>
                        <option value="closed">Closed / Archived</option>
                      </select>

                      <button
                        onClick={() => (isEditing ? handleSaveEdit(q.id, q.status) : handleStartEdit(q))}
                        className="px-3 py-1.5 bg-[#1C1C1C] hover:bg-[#B38E5D] text-white text-[11px] font-bold uppercase tracking-wider rounded transition-colors"
                      >
                        {isEditing ? "Save" : "Edit Notes"}
                      </button>
                    </div>
                  </div>

                  {/* Content Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-xs">
                    {/* Requested Products */}
                    <div className="lg:col-span-8 space-y-2">
                      <h4 className="font-bold uppercase text-[10px] tracking-wider text-gray-500">
                        Requested Stationery Items & Specifications:
                      </h4>
                      <p className="p-3 bg-[#FAF8F5] border border-[#E8E3DA] text-gray-800 font-medium leading-relaxed">
                        {q.productList}
                      </p>

                      {q.specialRequirements && (
                        <p className="text-gray-600">
                          <strong>Special Requirements:</strong> {q.specialRequirements}
                        </p>
                      )}

                      {/* Internal Notes area */}
                      {isEditing ? (
                        <div className="pt-2 space-y-2">
                          <label className="block font-bold text-gray-700">Estimated Quote Value (₹):</label>
                          <input
                            type="number"
                            value={quoteValueInput}
                            onChange={(e) => setQuoteValueInput(parseFloat(e.target.value) || 0)}
                            className="p-2 border border-black w-48 text-sm font-bold"
                          />
                          <label className="block font-bold text-gray-700 mt-2">Internal Staff Notes:</label>
                          <textarea
                            rows={2}
                            value={notesInput}
                            onChange={(e) => setNotesInput(e.target.value)}
                            placeholder="Sample sent, terms discussed..."
                            className="w-full p-2 border border-[#E8E3DA]"
                          />
                        </div>
                      ) : (
                        q.internalNotes && (
                          <div className="p-2.5 bg-amber-50/60 border border-amber-200 text-amber-900 rounded text-[11px]">
                            <strong>Staff Notes:</strong> {q.internalNotes}
                          </div>
                        )
                      )}
                    </div>

                    {/* Contact & Logistics Card */}
                    <div className="lg:col-span-4 bg-[#FAF8F5] p-4 border border-[#E8E3DA] space-y-2 text-[11px]">
                      <div className="flex items-center gap-2 text-gray-700">
                        <Phone className="w-3.5 h-3.5 text-[#B38E5D]" />
                        <a href={`tel:${q.phone}`} className="font-bold hover:underline">
                          {q.phone}
                        </a>
                      </div>

                      <div className="flex items-center gap-2 text-gray-700">
                        <Mail className="w-3.5 h-3.5 text-[#B38E5D]" />
                        <a href={`mailto:${q.email}`} className="truncate hover:underline">
                          {q.email}
                        </a>
                      </div>

                      <div className="flex items-start gap-2 text-gray-700 pt-1">
                        <MapPin className="w-3.5 h-3.5 text-[#B38E5D] shrink-0 mt-0.5" />
                        <span>{q.deliveryLocation}</span>
                      </div>

                      {q.gstNumber && (
                        <div className="font-mono text-gray-600 pt-1 border-t border-gray-200">
                          GSTIN: <span className="font-bold text-gray-900">{q.gstNumber}</span>
                        </div>
                      )}

                      <div className="pt-2 border-t border-gray-200 flex justify-between items-center text-xs">
                        <span className="text-gray-500">Estimated Value:</span>
                        <span className="font-bold text-gray-900 text-sm">
                          {q.estimatedValue ? formatPrice(q.estimatedValue) : "Pending"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
