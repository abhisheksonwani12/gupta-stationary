"use client";

import React from "react";
import { X, Printer, Download, CheckCircle2 } from "lucide-react";
import { Order } from "@/types";
import { formatPrice } from "@/lib/utils";

interface InvoicePrintModalProps {
  order: Order | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function InvoicePrintModal({
  order,
  isOpen,
  onClose,
}: InvoicePrintModalProps) {
  if (!isOpen || !order) return null;

  const handlePrint = () => {
    window.print();
  };

  const invoiceDate = new Date(order.createdAt).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white border border-[#E8E3DA] shadow-2xl max-w-3xl w-full p-6 sm:p-8 relative my-8 print:p-0 print:border-none print:shadow-none">
        {/* Action Controls (Hidden on Print) */}
        <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-6 print:hidden">
          <div>
            <h3 className="font-serif font-bold text-gray-900 text-lg uppercase">
              Official GST Tax Invoice Preview
            </h3>
            <p className="text-xs text-gray-500">Invoice #{order.orderNumber}</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-[#1C1C1C] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#B38E5D] transition-colors flex items-center gap-1.5"
            >
              <Printer className="w-4 h-4" />
              <span>Print Invoice / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-black hover:bg-gray-100 rounded"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Invoice Container */}
        <div className="text-xs text-gray-800 space-y-6 print:text-black">
          {/* Company Branding & Header */}
          <div className="flex justify-between items-start border-b-2 border-black pb-4">
            <div>
              <h1 className="font-serif text-2xl font-black tracking-tight text-gray-900 uppercase">
                Instant Stationary
              </h1>
              <p className="text-[11px] text-gray-600 mt-1">
                Main Market Road, Gol Bazar, Raipur, Chhattisgarh - 492001
              </p>
              <p className="text-[11px] text-gray-600">
                GSTIN: <span className="font-mono font-bold">22AABCG1298Q1ZX</span> | State Code: 22
              </p>
              <p className="text-[11px] text-gray-600">
                Phone: +91 8839715995 | Email: sales@instantstationary.com
              </p>
            </div>
            <div className="text-right">
              <div className="inline-block bg-black text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                TAX INVOICE
              </div>
              <div className="mt-2 font-mono font-bold text-sm text-gray-900">
                {order.orderNumber}
              </div>
              <div className="text-[11px] text-gray-500">Date: {invoiceDate}</div>
              <div className="text-[11px] text-gray-500">Status: {order.paymentStatus.toUpperCase()}</div>
            </div>
          </div>

          {/* Customer & Shipping Addresses */}
          <div className="grid grid-cols-2 gap-6 bg-[#FAF8F5] p-4 border border-[#E8E3DA] print:bg-white print:border-gray-200">
            <div>
              <h4 className="font-bold uppercase text-[10px] tracking-wider text-gray-500 mb-1">
                Billed To (Customer):
              </h4>
              <p className="font-bold text-gray-900">{order.customerName}</p>
              <p className="text-gray-600">{order.customerEmail}</p>
              <p className="text-gray-600">{order.customerPhone}</p>
              {order.gstNumber && (
                <p className="font-mono font-bold text-gray-900 mt-1">Customer GST: {order.gstNumber}</p>
              )}
            </div>

            <div>
              <h4 className="font-bold uppercase text-[10px] tracking-wider text-gray-500 mb-1">
                Shipped To (Delivery Address):
              </h4>
              <p className="font-bold text-gray-900">{order.shippingAddress.fullName}</p>
              <p className="text-gray-600">{order.shippingAddress.addressLine1}</p>
              {order.shippingAddress.addressLine2 && (
                <p className="text-gray-600">{order.shippingAddress.addressLine2}</p>
              )}
              <p className="text-gray-600">
                {order.shippingAddress.city}, {order.shippingAddress.state} - {order.shippingAddress.pincode}
              </p>
              {order.trackingNumber && (
                <p className="font-mono text-gray-800 mt-1">
                  Courier: {order.courierPartner || "Delhivery"} (AWB: {order.trackingNumber})
                </p>
              )}
            </div>
          </div>

          {/* Items Table */}
          <table className="w-full text-left border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100 text-gray-900 font-bold uppercase text-[10px] tracking-wider border-b border-gray-300">
                <th className="p-2.5 border-r border-gray-300">#</th>
                <th className="p-2.5 border-r border-gray-300">Item Description</th>
                <th className="p-2.5 border-r border-gray-300">SKU / Code</th>
                <th className="p-2.5 border-r border-gray-300 text-right">Qty</th>
                <th className="p-2.5 border-r border-gray-300 text-right">Unit Price</th>
                <th className="p-2.5 text-right">Amount (₹)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {order.items.map((it, idx) => (
                <tr key={it.id || idx}>
                  <td className="p-2.5 border-r border-gray-200 text-gray-500 font-mono">{idx + 1}</td>
                  <td className="p-2.5 border-r border-gray-200">
                    <span className="font-bold text-gray-900">{it.productName}</span>
                    {it.selectedColor && (
                      <span className="text-[10px] text-gray-500 block">Color: {it.selectedColor}</span>
                    )}
                  </td>
                  <td className="p-2.5 border-r border-gray-200 font-mono text-[11px]">{it.sku}</td>
                  <td className="p-2.5 border-r border-gray-200 text-right font-bold">{it.quantity}</td>
                  <td className="p-2.5 border-r border-gray-200 text-right">{formatPrice(it.unitPrice)}</td>
                  <td className="p-2.5 text-right font-bold">{formatPrice(it.totalPrice)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Totals Summary */}
          <div className="flex justify-end">
            <div className="w-72 space-y-1.5 text-xs">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal:</span>
                <span>{formatPrice(order.subtotal)}</span>
              </div>
              {order.bulkDiscount > 0 && (
                <div className="flex justify-between text-emerald-800 font-semibold">
                  <span>Bulk Tier Savings:</span>
                  <span>-{formatPrice(order.bulkDiscount)}</span>
                </div>
              )}
              {order.couponDiscount > 0 && (
                <div className="flex justify-between text-emerald-800 font-semibold">
                  <span>Promo Discount ({order.couponCode}):</span>
                  <span>-{formatPrice(order.couponDiscount)}</span>
                </div>
              )}
              <div className="flex justify-between text-gray-600">
                <span>Delivery / Shipping:</span>
                <span>{order.deliveryFee === 0 ? "FREE" : formatPrice(order.deliveryFee)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Estimated GST (12%):</span>
                <span>{formatPrice(order.taxAmount)}</span>
              </div>
              <div className="flex justify-between text-base font-bold text-gray-900 border-t-2 border-black pt-2">
                <span>Grand Total:</span>
                <span>{formatPrice(order.total)}</span>
              </div>
            </div>
          </div>

          {/* Footer Terms */}
          <div className="border-t border-gray-200 pt-4 text-[10px] text-gray-500 space-y-1">
            <p><strong>Declaration:</strong> We declare that this invoice shows the actual price of the goods described and that all particulars are true and correct.</p>
            <p>Goods once sold are eligible for replacement within 7 days in case of manufacturing defects.</p>
            <p className="text-center font-bold text-gray-700 pt-3">
              Thank you for choosing Instant Stationary — Serving Quality Since 1990.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
