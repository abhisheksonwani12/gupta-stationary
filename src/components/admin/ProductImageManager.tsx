"use client";

import React, { useState, useRef } from "react";
import {
  Upload,
  Plus,
  Trash2,
  Star,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
  Link as LinkIcon,
  Sparkles,
  Check,
} from "lucide-react";

interface ProductImageManagerProps {
  images: string[];
  onChange: (images: string[]) => void;
  productName?: string;
}

// Curated library of authentic stationery packshots for quick selection
const QUICK_LIBRARY = [
  { name: "Fevicol MR Bottle", url: "/images/products/fevicol-mr-bottle.png" },
  { name: "Fevicol MR Nozzle Detail", url: "/images/products/fevicol-mr-nozzle.jpg" },
  { name: "Kangaro Stapler No. 10 Combo", url: "/images/products/kangaro-stapler-no-10-combo.jpg" },
  { name: "Kangaro No. 10 20-Box Carton", url: "/images/products/kangaro-stapler-pin-no-10-carton.jpg" },
  { name: "Kangaro 24/6 Munix Staples", url: "/images/products/kangaro-stapler-pin-24-6.jpg" },
  { name: "Kangaro 26/6 Staples", url: "/images/products/kangaro-stapler-pin-26-6.jpg" },
  { name: "Orient Copier Paper 500-Sheets", url: "/images/products/orient-copier-paper-ream.jpg" },
  { name: "JK Red Copier 75 GSM", url: "/images/products/jk-red-copier-paper-75-gsm.jpg" },
  { name: "JK Ecorise 70 GSM", url: "/images/products/jk-ecorise-copier-paper.jpg" },
  { name: "JK Excel Bond 85 GSM", url: "/images/products/jk-bond-paper-100-sheets.jpg" },
  { name: "Sirpur Green Ledger 500-Sheets", url: "/images/products/sirpur-ledger-paper-ream.jpg" },
  { name: "Multi-Purpose Copier Paper", url: "/images/products/copier-paper.jpg" },
];

export default function ProductImageManager({
  images,
  onChange,
  productName = "",
}: ProductImageManagerProps) {
  const [urlInput, setUrlInput] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [showLibrary, setShowLibrary] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const cleanImages = (images || []).filter((img) => img && img.trim() !== "");

  const handleAddUrl = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const trimmed = urlInput.trim();
    if (!trimmed) return;
    if (cleanImages.includes(trimmed)) {
      setUrlInput("");
      return;
    }
    onChange([...cleanImages, trimmed]);
    setUrlInput("");
  };

  const handleFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return;

    Array.from(files).forEach((file) => {
      if (!file.type.startsWith("image/")) return;

      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        if (result && !cleanImages.includes(result)) {
          onChange([...cleanImages, result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleRemove = (index: number) => {
    const updated = cleanImages.filter((_, i) => i !== index);
    onChange(updated);
  };

  const handleSetCover = (index: number) => {
    if (index === 0) return;
    const target = cleanImages[index];
    const rest = cleanImages.filter((_, i) => i !== index);
    onChange([target, ...rest]);
  };

  const handleMove = (index: number, direction: "left" | "right") => {
    const newIdx = direction === "left" ? index - 1 : index + 1;
    if (newIdx < 0 || newIdx >= cleanImages.length) return;
    const updated = [...cleanImages];
    const temp = updated[index];
    updated[index] = updated[newIdx];
    updated[newIdx] = temp;
    onChange(updated);
  };

  const toggleLibraryItem = (url: string) => {
    if (cleanImages.includes(url)) {
      onChange(cleanImages.filter((u) => u !== url));
    } else {
      onChange([...cleanImages, url]);
    }
  };

  return (
    <div className="bg-white border border-[#E8E3DA] p-6 sm:p-8 shadow-soft space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-serif font-bold text-base uppercase text-gray-900 tracking-wide">
              Product Photography & Multi-Photo Gallery
            </h3>
            <span className="text-[11px] font-bold px-2 py-0.5 bg-[#FAF8F5] border border-[#E8E3DA] text-gray-700">
              {cleanImages.length} {cleanImages.length === 1 ? "Photo" : "Photos"}
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Upload multiple photos, drag to reorder, or pick authentic stationery warehouse packshots.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setShowLibrary(!showLibrary)}
          className={`text-xs font-semibold px-3 py-1.5 border transition-all flex items-center gap-1.5 ${
            showLibrary
              ? "bg-[#1C1C1C] text-white border-black"
              : "bg-[#FAF8F5] text-gray-700 border-[#E8E3DA] hover:border-black"
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-[#B38E5D]" />
          <span>{showLibrary ? "Hide Stationery Assets" : "Browse Stationery Assets"}</span>
        </button>
      </div>

      {/* Preset Stationery Asset Library Drawer */}
      {showLibrary && (
        <div className="bg-[#FAF8F5] border border-[#E8E3DA] p-4 rounded-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-800">
              Verified Stationery Packshots (Click to add / remove)
            </span>
            <span className="text-[11px] text-gray-500">
              Matches authentic warehouse stock
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2.5">
            {QUICK_LIBRARY.map((item, idx) => {
              const isSelected = cleanImages.includes(item.url);
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => toggleLibraryItem(item.url)}
                  className={`group relative aspect-square bg-white border p-1 text-left flex flex-col justify-between overflow-hidden transition-all ${
                    isSelected
                      ? "border-[#1C1C1C] ring-2 ring-[#1C1C1C]/20 shadow-sm"
                      : "border-gray-200 hover:border-gray-400 opacity-80 hover:opacity-100"
                  }`}
                >
                  <div className="w-full h-full flex items-center justify-center overflow-hidden">
                    <img
                      src={item.url}
                      alt={item.name}
                      className="max-h-full max-w-full object-contain transition-transform group-hover:scale-105"
                    />
                  </div>
                  {isSelected && (
                    <div className="absolute top-1 right-1 bg-[#1C1C1C] text-white rounded-full p-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                  )}
                  <div className="absolute inset-x-0 bottom-0 bg-black/75 text-white text-[9px] p-1 truncate leading-tight">
                    {item.name}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Upload Dropzone & URL Input Controls */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Drag & Drop Zone */}
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={(e) => {
            e.preventDefault();
            setIsDragging(false);
            handleFiles(e.dataTransfer.files);
          }}
          onClick={() => fileInputRef.current?.click()}
          className={`md:col-span-7 border-2 border-dashed p-6 flex flex-col items-center justify-center gap-2 cursor-pointer transition-all ${
            isDragging
              ? "border-[#1C1C1C] bg-[#FAF8F5]"
              : "border-[#E8E3DA] bg-[#FCFBF9] hover:border-gray-400 hover:bg-[#FAF8F5]"
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*"
            className="hidden"
            onChange={(e) => handleFiles(e.target.files)}
          />
          <div className="w-10 h-10 rounded-full bg-white border border-[#E8E3DA] flex items-center justify-center shadow-xs">
            <Upload className="w-5 h-5 text-gray-700" />
          </div>
          <div className="text-center">
            <p className="text-xs font-bold text-gray-900">
              Drag & Drop product photos here, or <span className="text-[#B38E5D] underline">Browse Files</span>
            </p>
            <p className="text-[11px] text-gray-500 mt-0.5">
              Select multiple PNG, JPG, or WebP files from your device
            </p>
          </div>
        </div>

        {/* URL Input Form */}
        <div className="md:col-span-5 bg-[#FAF8F5] border border-[#E8E3DA] p-4 flex flex-col justify-between space-y-3">
          <div>
            <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <LinkIcon className="w-3.5 h-3.5 text-[#B38E5D]" />
              <span>Add Image from Web URL</span>
            </label>
            <p className="text-[11px] text-gray-500 mb-2">
              Paste image address (or local path e.g. <code className="text-[10px] bg-white px-1">/images/products/...</code>)
            </p>
            <div className="flex gap-2">
              <input
                type="text"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleAddUrl();
                  }
                }}
                placeholder="https://... or /images/products/..."
                className="flex-1 p-2 bg-white border border-[#E8E3DA] text-xs focus:outline-none focus:border-black font-mono"
              />
              <button
                type="button"
                onClick={() => handleAddUrl()}
                className="px-3 py-2 bg-[#1C1C1C] hover:bg-[#967448] text-white text-xs font-bold tracking-wider uppercase transition-colors shrink-0 flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add</span>
              </button>
            </div>
          </div>

          <div className="text-[10px] text-gray-400">
            Tip: The first image will be displayed as the Primary Cover across shop listings and search results.
          </div>
        </div>
      </div>

      {/* Uploaded Gallery Grid */}
      {cleanImages.length === 0 ? (
        <div className="border border-dashed border-gray-200 py-10 flex flex-col items-center justify-center text-center text-gray-400">
          <ImageIcon className="w-8 h-8 stroke-1 mb-2 text-gray-300" />
          <p className="text-xs font-medium text-gray-600">No photos added yet</p>
          <p className="text-[11px] text-gray-400 mt-0.5">
            Upload from device, paste a URL, or choose from authentic stationery assets above.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs text-gray-600">
            <span className="font-semibold">
              Current Gallery Order ({cleanImages.length} items)
            </span>
            <span className="text-[11px] text-gray-500">
              Hover to reorder or set primary cover
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
            {cleanImages.map((img, idx) => {
              const isCover = idx === 0;
              return (
                <div
                  key={idx}
                  className={`group relative bg-white border rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-200 shadow-xs ${
                    isCover
                      ? "border-amber-600 ring-2 ring-amber-500/20"
                      : "border-[#E8E3DA] hover:border-gray-500"
                  }`}
                >
                  {/* Photo Preview */}
                  <div className="relative aspect-square bg-[#F7F5F0] flex items-center justify-center p-2 overflow-hidden">
                    <img
                      src={img}
                      alt={`Product view ${idx + 1}`}
                      className="max-h-full max-w-full object-contain transition-transform group-hover:scale-105"
                    />

                    {/* Cover Badge */}
                    {isCover ? (
                      <div className="absolute top-2 left-2 z-10 bg-[#1C1C1C] text-[#D4AF37] border border-[#D4AF37]/40 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-sm">
                        <Star className="w-3 h-3 fill-[#D4AF37]" />
                        <span>Cover</span>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleSetCover(idx)}
                        title="Set as Cover Photo"
                        className="absolute top-2 left-2 z-10 bg-white/90 hover:bg-white text-gray-700 hover:text-black border border-gray-200 px-2 py-0.5 text-[10px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity shadow-xs"
                      >
                        Set as Cover
                      </button>
                    )}

                    {/* Delete Button */}
                    <button
                      type="button"
                      onClick={() => handleRemove(idx)}
                      title="Remove image"
                      className="absolute top-2 right-2 z-10 w-6 h-6 bg-white/90 hover:bg-red-600 hover:text-white text-gray-500 border border-gray-200 rounded-full flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100 shadow-xs"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Bottom Bar: Reordering & Index */}
                  <div className="bg-[#FAF8F5] border-t border-[#E8E3DA] p-2 flex items-center justify-between text-[11px]">
                    <span className="font-mono text-gray-500">#{idx + 1}</span>

                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        disabled={idx === 0}
                        onClick={() => handleMove(idx, "left")}
                        title="Move left"
                        className="p-1 hover:bg-white disabled:opacity-30 disabled:hover:bg-transparent rounded transition-colors text-gray-700"
                      >
                        <ChevronLeft className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        disabled={idx === cleanImages.length - 1}
                        onClick={() => handleMove(idx, "right")}
                        title="Move right"
                        className="p-1 hover:bg-white disabled:opacity-30 disabled:hover:bg-transparent rounded transition-colors text-gray-700"
                      >
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
