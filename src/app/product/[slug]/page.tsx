"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Star,
  Heart,
  ShoppingBag,
  Truck,
  ShieldCheck,
  RotateCcw,
  CheckCircle2,
  XCircle,
  Share2,
  Sparkles,
  ChevronRight,
  Minus,
  Plus,
  HelpCircle,
} from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useInventory } from "@/context/InventoryContext";
import BulkPricingTable from "@/components/products/BulkPricingTable";
import ProductCard from "@/components/products/ProductCard";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const { getProductBySlug, products } = useInventory();
  
  const product = getProductBySlug(slug) || PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(
    product.colors && product.colors.length > 0 ? product.colors[0].name : undefined
  );
  const [activeTab, setActiveTab] = useState<"specs" | "why" | "faqs" | "reviews">("specs");

  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const isFavorited = isInWishlist(product.id);
  const isOutOfStock = (product.stock ?? 0) <= 0;
  const isLowStock = !isOutOfStock && (product.stock ?? 0) <= (product.lowStockThreshold ?? 10);

  // Calculate current dynamic price based on bulk tiers
  const activeTier = product.bulkPricing
    ? [...product.bulkPricing].reverse().find((t) => quantity >= t.minQty)
    : null;

  const currentUnitPrice = activeTier ? activeTier.pricePerUnit : product.price;
  const currentDiscount = activeTier ? activeTier.discountPercent : 0;
  const totalPrice = currentUnitPrice * quantity;
  const originalTotalPrice = product.price * quantity;
  const totalSavings = originalTotalPrice - totalPrice;

  const relatedProducts = (products.length > 0 ? products : PRODUCTS).filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.shortDescription,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Product link copied to clipboard!");
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-[#FAF8F5] border-b border-[#E8E3DA] py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-gray-500 uppercase tracking-wider overflow-x-auto">
            <Link href="/" className="hover:text-black">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-gray-400 flex-shrink-0" />
            <Link href="/shop" className="hover:text-black">
              Catalog
            </Link>
            <ChevronRight className="w-3 h-3 text-gray-400 flex-shrink-0" />
            <Link href={`/shop/${product.category}`} className="hover:text-black truncate">
              {product.category.replace("-", " ")}
            </Link>
            <ChevronRight className="w-3 h-3 text-gray-400 flex-shrink-0" />
            <span className="text-black font-semibold truncate">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Main PDP Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-7 space-y-4">
            {/* Main Featured Image */}
            <div className="relative aspect-square bg-[#FAF8F5] border border-[#E8E3DA] overflow-hidden group">
              <img
                src={product.images[selectedImage] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                {product.isBestseller && (
                  <span className="bg-[#1C1C1C] text-white text-xs font-bold uppercase tracking-wider px-3 py-1">
                    Bestseller
                  </span>
                )}
                {product.isEcoFriendly && (
                  <span className="bg-emerald-800 text-white text-xs font-bold uppercase tracking-wider px-3 py-1">
                    Eco-Friendly 🌱
                  </span>
                )}
              </div>
            </div>

            {/* Thumbnail Row */}
            {product.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative w-20 h-20 bg-[#FAF8F5] border-2 flex-shrink-0 overflow-hidden transition-all ${
                      selectedImage === idx
                        ? "border-[#1C1C1C] shadow-md"
                        : "border-[#E8E3DA] opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Product Purchasing & Configuration */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center justify-between text-xs text-gray-500 uppercase tracking-wider mb-2">
                <span>SKU: {product.sku}</span>
                {isOutOfStock ? (
                  <span className="text-red-700 font-bold flex items-center gap-1">
                    <XCircle className="w-3.5 h-3.5" />
                    Out of Stock
                  </span>
                ) : isLowStock ? (
                  <span className="text-amber-700 font-bold flex items-center gap-1 animate-pulse">
                    <HelpCircle className="w-3.5 h-3.5" />
                    Only {product.stock} left in stock!
                  </span>
                ) : (
                  <span className="text-emerald-800 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    In Stock ({product.stock} units available)
                  </span>
                )}
              </div>

              <h1 className="font-serif text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#1C1C1C]">
                {product.name}
              </h1>

              {/* Reviews Summary */}
              <div className="flex items-center gap-3 mt-2">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-gray-900 ml-1">{product.rating}</span>
                </div>
                <span className="text-xs text-gray-400">|</span>
                <a href="#reviews" className="text-xs text-gray-600 hover:text-black underline font-medium">
                  {product.reviewCount} Verified Reviews
                </a>
              </div>
            </div>

            {/* Price Box */}
            <div className="p-4 bg-[#FAF8F5] border border-[#E8E3DA] space-y-2">
              <div className="flex items-baseline gap-3">
                <span className="text-2xl sm:text-3xl font-bold text-[#1C1C1C]">
                  {formatPrice(currentUnitPrice)}
                </span>
                <span className="text-xs text-gray-500">/ piece</span>
                {product.originalPrice && product.originalPrice > currentUnitPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
                {currentDiscount > 0 && (
                  <span className="bg-emerald-800 text-white text-xs font-bold px-2 py-0.5 uppercase tracking-wider">
                    {currentDiscount}% Wholesale OFF
                  </span>
                )}
              </div>

              <p className="text-xs text-emerald-800 font-medium flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-emerald-700" />
                <span>FREE Same-Day Delivery across Raipur for orders above ₹500</span>
              </p>
            </div>

            {/* Short Description */}
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              {product.description}
            </p>

            {/* Color Selector */}
            {product.colors && product.colors.length > 0 && (
              <div className="space-y-2 pt-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-900 flex justify-between">
                  <span>Color Option:</span>
                  <span className="text-[#B38E5D] font-semibold">{selectedColor}</span>
                </label>
                <div className="flex gap-2">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`px-3 py-1.5 border text-xs font-semibold flex items-center gap-2 transition-all ${
                        selectedColor === c.name
                          ? "border-black bg-white shadow-sm ring-1 ring-black"
                          : "border-[#E8E3DA] bg-[#FAF8F5] hover:border-gray-400"
                      }`}
                    >
                      <span
                        className="w-3 h-3 rounded-full border border-gray-300"
                        style={{ backgroundColor: c.hex }}
                      />
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector & Bulk Stepper */}
            <div className="space-y-2 pt-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-900 flex justify-between">
                <span>Select Quantity:</span>
                {quantity >= 10 && (
                  <span className="text-emerald-800 font-bold">
                    Wholesale Price Active ({formatPrice(currentUnitPrice)}/unit)
                  </span>
                )}
              </label>

              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center border border-[#E8E3DA] bg-white">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 text-gray-600 hover:bg-gray-100 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-16 text-center font-bold text-sm focus:outline-none"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 text-gray-600 hover:bg-gray-100 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                {/* Quick volume jump buttons */}
                <div className="flex gap-1.5">
                  {[10, 50, 100, 500].map((preset) => (
                    <button
                      key={preset}
                      onClick={() => setQuantity(preset)}
                      className={`px-2.5 py-2 text-xs font-semibold border transition-colors ${
                        quantity === preset
                          ? "bg-[#1C1C1C] text-white border-black"
                          : "bg-[#FAF8F5] border-[#E8E3DA] text-gray-700 hover:border-black"
                      }`}
                    >
                      {preset} units
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Total Price & Add to Cart */}
            <div className="pt-4 border-t border-[#E8E3DA] space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Total ({quantity} units):</span>
                <div className="text-right">
                  <span className="text-xl font-bold text-[#1C1C1C]">{formatPrice(totalPrice)}</span>
                  {totalSavings > 0 && (
                    <div className="text-xs text-emerald-800 font-bold">
                      Saved {formatPrice(totalSavings)} with bulk tier!
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-5 gap-3">
                <button
                  disabled={isOutOfStock}
                  onClick={() => addToCart(product, quantity, selectedColor)}
                  className={`col-span-4 py-4 text-white text-xs font-bold uppercase tracking-luxury flex items-center justify-center gap-2 shadow-lg transition-colors ${
                    isOutOfStock
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#1C1C1C] hover:bg-[#B38E5D]"
                  }`}
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>
                    {isOutOfStock
                      ? "Currently Out of Stock"
                      : `Add to Bag (${formatPrice(totalPrice)})`}
                  </span>
                </button>

                <button
                  onClick={() => toggleWishlist(product)}
                  className={`col-span-1 border flex items-center justify-center transition-colors ${
                    isFavorited
                      ? "border-red-300 bg-red-50 text-red-600"
                      : "border-[#E8E3DA] bg-white text-gray-700 hover:border-black"
                  }`}
                  title="Save to Wishlist"
                >
                  <Heart className={`w-5 h-5 ${isFavorited ? "fill-red-600" : ""}`} />
                </button>
              </div>

              <div className="flex items-center justify-between pt-2 text-xs text-gray-500">
                <button onClick={handleShare} className="flex items-center gap-1 hover:text-black">
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share Product</span>
                </button>
                <span>Same-day dispatch for orders before 5 PM</span>
              </div>
            </div>

            {/* Bulk Volume Matrix */}
            <BulkPricingTable
              bulkPricing={product.bulkPricing}
              currentQuantity={quantity}
              onSelectTier={(q) => setQuantity(q)}
            />

            {/* Trust Assurances */}
            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#E8E3DA] text-center text-[11px] text-gray-600">
              <div className="p-2 bg-[#FAF8F5] border border-[#E8E3DA]">
                <ShieldCheck className="w-4 h-4 mx-auto mb-1 text-[#B38E5D]" />
                <span>100% Genuine & ISI</span>
              </div>
              <div className="p-2 bg-[#FAF8F5] border border-[#E8E3DA]">
                <RotateCcw className="w-4 h-4 mx-auto mb-1 text-[#B38E5D]" />
                <span>7-Day Easy Returns</span>
              </div>
              <div className="p-2 bg-[#FAF8F5] border border-[#E8E3DA]">
                <Truck className="w-4 h-4 mx-auto mb-1 text-[#B38E5D]" />
                <span>Fast Raipur Delivery</span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Tabs: Specifications, Why Choose, FAQs, Reviews */}
        <div className="mt-20 border-t border-[#E8E3DA] pt-12">
          <div className="flex items-center gap-4 sm:gap-8 border-b border-[#E8E3DA] overflow-x-auto pb-3">
            <button
              onClick={() => setActiveTab("specs")}
              className={`text-xs font-bold uppercase tracking-luxury pb-2 transition-colors whitespace-nowrap ${
                activeTab === "specs"
                  ? "border-b-2 border-black text-black"
                  : "text-gray-400 hover:text-black"
              }`}
            >
              Specifications & Details
            </button>
            <button
              onClick={() => setActiveTab("why")}
              className={`text-xs font-bold uppercase tracking-luxury pb-2 transition-colors whitespace-nowrap ${
                activeTab === "why"
                  ? "border-b-2 border-black text-black"
                  : "text-gray-400 hover:text-black"
              }`}
            >
              Why Choose Instant&apos;s
            </button>
            <button
              onClick={() => setActiveTab("faqs")}
              className={`text-xs font-bold uppercase tracking-luxury pb-2 transition-colors whitespace-nowrap ${
                activeTab === "faqs"
                  ? "border-b-2 border-black text-black"
                  : "text-gray-400 hover:text-black"
              }`}
            >
              Product FAQs
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`text-xs font-bold uppercase tracking-luxury pb-2 transition-colors whitespace-nowrap ${
                activeTab === "reviews"
                  ? "border-b-2 border-black text-black"
                  : "text-gray-400 hover:text-black"
              }`}
            >
              Reviews ({product.reviewCount})
            </button>
          </div>

          <div className="py-8">
            {/* Tab 1: Specs */}
            {activeTab === "specs" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">
                    Product Highlights
                  </h3>
                  <ul className="space-y-2 text-xs text-gray-700">
                    {product.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">
                    Technical Specifications
                  </h3>
                  <table className="w-full text-xs text-left border border-[#E8E3DA]">
                    <tbody className="divide-y divide-[#E8E3DA]">
                      {Object.entries(product.specifications).map(([key, val]) => (
                        <tr key={key} className="bg-white even:bg-[#FAF8F5]">
                          <td className="p-3 font-bold text-gray-700 w-1/3 border-r border-[#E8E3DA]">
                            {key}
                          </td>
                          <td className="p-3 text-gray-900">{val}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Tab 2: Why Choose */}
            {activeTab === "why" && (
              <div className="bg-[#FAF8F5] border border-[#E8E3DA] p-6 sm:p-8 space-y-4 max-w-3xl">
                <h3 className="font-serif text-lg font-bold text-gray-900 uppercase">
                  Instant Stationary Advantage
                </h3>
                <div className="space-y-3 text-xs text-gray-700 leading-relaxed">
                  <div className="p-3 bg-red-50 border-l-4 border-red-500 text-red-900">
                    <strong>❌ Don&apos;t waste money on overpriced imported stationery:</strong> Instant Stationary offers equivalent Swiss-tip and Japanese-ink quality at 1/3rd the cost of retail brands.
                  </div>
                  <div className="p-3 bg-emerald-50 border-l-4 border-emerald-500 text-emerald-900">
                    <strong>✅ Direct Manufacturer Pricing:</strong> By supplying directly from our Raipur warehouse, you get honest pricing with no distributor markups.
                  </div>
                  <div className="p-3 bg-blue-50 border-l-4 border-blue-500 text-blue-900">
                    <strong>✅ Eco-Friendly & Refillable:</strong> Designed for longevity. Buy once, refill easily, and cut plastic waste.
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: FAQs */}
            {activeTab === "faqs" && (
              <div className="space-y-4 max-w-3xl">
                <div className="p-4 bg-white border border-[#E8E3DA] space-y-1">
                  <h4 className="text-xs font-bold text-gray-900 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#B38E5D]" />
                    Is this product refillable?
                  </h4>
                  <p className="text-xs text-gray-600 pl-6">
                    Yes! Spare refills and cartridges are readily available at ₹5 each.
                  </p>
                </div>
                <div className="p-4 bg-white border border-[#E8E3DA] space-y-1">
                  <h4 className="text-xs font-bold text-gray-900 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#B38E5D]" />
                    Are bulk discounts applicable for mixed school/office orders?
                  </h4>
                  <p className="text-xs text-gray-600 pl-6">
                    Yes! You can mix pens, notebooks, and paper products to reach total order quantities and receive wholesale pricing.
                  </p>
                </div>
                <div className="p-4 bg-white border border-[#E8E3DA] space-y-1">
                  <h4 className="text-xs font-bold text-gray-900 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#B38E5D]" />
                    What if I receive a defective item?
                  </h4>
                  <p className="text-xs text-gray-600 pl-6">
                    We offer a 100% no-questions-asked replacement within 24 hours in Raipur.
                  </p>
                </div>
              </div>
            )}

            {/* Tab 4: Reviews */}
            {activeTab === "reviews" && (
              <div id="reviews" className="space-y-6 max-w-3xl">
                <div className="p-6 bg-[#FAF8F5] border border-[#E8E3DA] flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="text-center sm:text-left">
                    <div className="text-4xl font-bold font-serif text-gray-900">{product.rating}</div>
                    <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-500 my-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <div className="text-xs text-gray-500">Based on {product.reviewCount} customer reviews</div>
                  </div>

                  <button
                    onClick={() => alert("Review submission form is active. Verified customers will receive a 10% coupon!")}
                    className="px-6 py-3 bg-[#1C1C1C] text-white text-xs font-bold uppercase tracking-luxury hover:bg-[#B38E5D] transition-colors"
                  >
                    Write a Review
                  </button>
                </div>

                {/* Sample Verified Reviews */}
                <div className="divide-y divide-[#E8E3DA] border-t border-[#E8E3DA] pt-4">
                  <div className="py-4 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-gray-900">Anmol M. — Verified Buyer</span>
                      <span className="text-[11px] text-gray-400">Raipur</span>
                    </div>
                    <div className="flex text-amber-500 text-xs">⭐⭐⭐⭐⭐</div>
                    <p className="text-xs text-gray-700 italic">
                      &ldquo;This is the only pen I buy now. Smooth writing, lasts forever and never leaks!&rdquo;
                    </p>
                  </div>
                  <div className="py-4 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-gray-900">School Principal, Raipur</span>
                      <span className="text-[11px] text-gray-400">Institutional Buyer</span>
                    </div>
                    <div className="flex text-amber-500 text-xs">⭐⭐⭐⭐⭐</div>
                    <p className="text-xs text-gray-700 italic">
                      &ldquo;Bought 500 units for our school. Best quality, amazing bulk price!&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 border-t border-[#E8E3DA] pt-12">
            <h3 className="font-serif text-2xl font-bold uppercase tracking-tight text-[#1C1C1C] mb-8">
              Related Products You Might Like
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
