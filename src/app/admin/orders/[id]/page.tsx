"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Printer,
  Truck,
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
  Mail,
  Building,
  CreditCard,
  Package,
  AlertCircle,
  Save,
} from "lucide-react";
import AdminHeader from "@/components/admin/AdminHeader";
import InvoicePrintModal from "@/components/admin/InvoicePrintModal";
import { useInventory } from "@/context/InventoryContext";
import { formatPrice } from "@/lib/utils";
import { OrderStatus } from "@/types";

interface OrderDetailPageProps {
  params: Promise<{ id: string }>;
}

export default function AdminOrderDetailPage({ params }: OrderDetailPageProps) {
  const resolvedParams = use(params);
  const id = resolvedParams.id;
  const router = useRouter();
  const { orders, updateOrderStatus } = useInventory();

  const order = orders.find((o) => o.id === id || o.orderNumber === id);

  const [currentStatus, setCurrentStatus] = useState<OrderStatus>(order?.orderStatus || "processing");
  const [courierPartner, setCourierPartner] = useState(order?.courierPartner || "Delhivery Surface");
  const [trackingNumber, setTrackingNumber] = useState(order?.trackingNumber || "");
  const [isInvoiceOpen, setIsInvoiceOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  if (!order) {
    return (
      <div className="p-12 text-center text-gray-500">
        <p>Order not found.</p>
        <Link href="/admin/orders" className="font-bold text-black hover:underline mt-2 inline-block">
          Return to Orders
        </Link>
      </div>
    );
  }

  const handleUpdateFulfillment = (e: React.FormEvent) => {
    e.preventDefault();
    updateOrderStatus(order.id, currentStatus, trackingNumber, courierPartner);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2500);
  };

  const STEPS: { status: OrderStatus; label: string; desc: string }[] = [
    { status: "processing", label: "Processing", desc: "Order received & items being packed" },
    { status: "dispatched", label: "Dispatched", desc: "Handed over to courier partner" },
    { status: "in_transit", label: "In Transit", desc: "Out for delivery to customer address" },
    { status: "delivered", label: "Delivered", desc: "Successfully completed & delivered" },
  ];

  const currentStepIndex = STEPS.findIndex((s) => s.status === currentStatus);

  return (
    <div className="pb-16">
      <AdminHeader
        title={`Order: ${order.orderNumber}`}
        subtitle={`Placed on ${new Date(order.createdAt).toLocaleString("en-IN")}`}
        actions={
          <div className="flex gap-2">
            <Link
              href="/admin/orders"
              className="px-3.5 py-2 bg-white border border-[#E8E3DA] text-gray-700 text-xs font-bold uppercase tracking-wider hover:bg-gray-50 transition-colors flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </Link>
            <button
              onClick={() => setIsInvoiceOpen(true)}
              className="px-4 py-2 bg-[#1C1C1C] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#B38E5D] transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <Printer className="w-4 h-4" />
              <span>Print Tax Invoice</span>
            </button>
          </div>
        }
      />

      <div className="p-4 sm:p-8 space-y-8 max-w-6xl mx-auto">
        {/* Fulfillment Pipeline Stepper */}
        <div className="bg-white border border-[#E8E3DA] p-6 shadow-soft">
          <h3 className="font-serif font-bold text-sm uppercase text-gray-900 mb-6">
            Fulfillment Status Workflow
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 relative">
            {STEPS.map((step, idx) => {
              const isCompleted = currentStepIndex >= idx;
              const isCurrent = currentStepIndex === idx;

              return (
                <div
                  key={step.status}
                  onClick={() => setCurrentStatus(step.status)}
                  className={`p-4 border rounded cursor-pointer transition-all ${
                    isCurrent
                      ? "bg-[#FAF8F5] border-black ring-1 ring-black"
                      : isCompleted
                      ? "bg-emerald-50/50 border-emerald-300"
                      : "bg-gray-50/50 border-gray-200 opacity-60 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    {isCompleted ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                    ) : (
                      <Clock className="w-4 h-4 text-gray-400" />
                    )}
                    <span className="font-bold text-xs uppercase tracking-wider text-gray-900">
                      {step.label}
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-500">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2-Column Grid: Left (Items & Cost), Right (Customer & Courier) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Items Ordered Table */}
          <div className="lg:col-span-8 bg-white border border-[#E8E3DA] shadow-soft space-y-6 p-6">
            <div>
              <h3 className="font-serif font-bold text-base uppercase text-gray-900">
                Items in this Consignment ({order.items.length})
              </h3>
              <p className="text-xs text-gray-500">Pick and pack verified products</p>
            </div>

            <div className="divide-y divide-gray-100 border border-gray-100">
              {order.items.map((item, idx) => (
                <div key={item.id || idx} className="p-4 flex items-center justify-between gap-4 text-xs">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-12 h-12 bg-gray-100 border shrink-0 overflow-hidden flex items-center justify-center font-bold text-gray-400">
                      {item.image ? (
                        <img src={item.image} alt="" className="w-full h-full object-cover" />
                      ) : (
                        <Package className="w-5 h-5" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <p className="font-bold text-gray-900 truncate">{item.productName}</p>
                      <p className="font-mono text-[11px] text-gray-400">SKU: {item.sku}</p>
                      {item.selectedColor && (
                        <span className="text-[10px] bg-gray-100 px-2 py-0.5 rounded text-gray-600">
                          Color: {item.selectedColor}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="font-bold text-gray-900 text-sm">
                      {formatPrice(item.totalPrice)}
                    </div>
                    <div className="text-[11px] text-gray-500">
                      {item.quantity} × {formatPrice(item.unitPrice)}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Financials & GST Summary */}
            <div className="bg-[#FAF8F5] p-5 border border-[#E8E3DA] space-y-2 text-xs">
              <div className="flex justify-between text-gray-600">
                <span>Items Subtotal:</span>
                <span>{formatPrice(order.subtotal)}</span>
              </div>
              {order.bulkDiscount > 0 && (
                <div className="flex justify-between text-emerald-800 font-semibold">
                  <span>Bulk Tier Volume Savings:</span>
                  <span>-{formatPrice(order.bulkDiscount)}</span>
                </div>
              )}
              {order.couponDiscount > 0 && (
                <div className="flex justify-between text-emerald-800 font-semibold">
                  <span>Coupon Discount ({order.couponCode}):</span>
                  <span>-{formatPrice(order.couponDiscount)}</span>
                </div>
              )}
              <div className="flex justify-between text-gray-600">
                <span>Delivery & Shipping:</span>
                <span>{order.deliveryFee === 0 ? "FREE" : formatPrice(order.deliveryFee)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Estimated GST (12% Included):</span>
                <span>{formatPrice(order.taxAmount)}</span>
              </div>
              <div className="flex justify-between text-base font-bold text-gray-900 border-t border-gray-300 pt-3">
                <span>Grand Total Amount:</span>
                <span>{formatPrice(order.total)}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Customer Details & Courier Assign */}
          <div className="lg:col-span-4 space-y-6">
            {/* Courier & Tracking Form */}
            <form onSubmit={handleUpdateFulfillment} className="bg-white border border-[#E8E3DA] p-6 shadow-soft space-y-4 text-xs">
              <h3 className="font-serif font-bold text-sm uppercase text-gray-900 border-b border-gray-100 pb-2">
                Logistics & Tracking
              </h3>

              <div>
                <label className="block font-bold text-gray-700 mb-1">Courier Partner</label>
                <select
                  value={courierPartner}
                  onChange={(e) => setCourierPartner(e.target.value)}
                  className="w-full p-2.5 bg-[#FAF8F5] border border-[#E8E3DA] font-semibold focus:outline-none"
                >
                  <option value="Delhivery Surface">Delhivery Surface</option>
                  <option value="BlueDart Express">BlueDart Express</option>
                  <option value="Shiprocket Xpress">Shiprocket Xpress</option>
                  <option value="DTDC Express">DTDC Express</option>
                  <option value="Local Raipur Store Delivery">Local Raipur Store Delivery (Instant Van)</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-1">Tracking Number / AWB</label>
                <input
                  type="text"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder="e.g. DL-982347101"
                  className="w-full p-2.5 bg-[#FAF8F5] border border-[#E8E3DA] font-mono text-[11px] focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-1">Update Status</label>
                <select
                  value={currentStatus}
                  onChange={(e) => setCurrentStatus(e.target.value as OrderStatus)}
                  className="w-full p-2.5 bg-[#FAF8F5] border border-[#E8E3DA] font-bold text-gray-900 focus:outline-none"
                >
                  <option value="processing">Processing</option>
                  <option value="dispatched">Dispatched</option>
                  <option value="in_transit">In Transit (Out for Delivery)</option>
                  <option value="delivered">Delivered</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>

              {isSaved && (
                <div className="p-2.5 bg-emerald-50 border border-emerald-300 text-emerald-800 text-[11px] font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>Fulfillment details updated successfully!</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 bg-[#1C1C1C] hover:bg-[#B38E5D] text-white font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
              >
                <Save className="w-4 h-4" />
                <span>Save Logistics Update</span>
              </button>
            </form>

            {/* Customer Details Card */}
            <div className="bg-white border border-[#E8E3DA] p-6 shadow-soft space-y-3 text-xs">
              <h3 className="font-serif font-bold text-sm uppercase text-gray-900 border-b border-gray-100 pb-2">
                Customer & Shipping
              </h3>

              <div className="space-y-2">
                <div>
                  <span className="text-[10px] uppercase font-bold text-gray-400 block">Recipient</span>
                  <span className="font-bold text-gray-900 text-sm">{order.customerName}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="w-3.5 h-3.5 text-gray-400" />
                  <span>{order.customerPhone}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-600">
                  <Mail className="w-3.5 h-3.5 text-gray-400" />
                  <span className="truncate">{order.customerEmail}</span>
                </div>

                <div className="pt-2 border-t border-gray-100 space-y-1">
                  <div className="flex items-start gap-2 text-gray-700">
                    <MapPin className="w-4 h-4 text-[#B38E5D] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">{order.shippingAddress.addressLine1}</p>
                      {order.shippingAddress.addressLine2 && (
                        <p>{order.shippingAddress.addressLine2}</p>
                      )}
                      <p>
                        {order.shippingAddress.city}, {order.shippingAddress.state} -{" "}
                        <span className="font-bold">{order.shippingAddress.pincode}</span>
                      </p>
                    </div>
                  </div>
                </div>

                {order.deliverySlot && (
                  <div className="p-2.5 bg-[#FAF8F5] border border-[#E8E3DA] text-[11px]">
                    <span className="font-bold text-gray-800">Preferred Slot: </span>
                    <span className="capitalize">{order.deliverySlot} Delivery</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Invoice Print Modal */}
      <InvoicePrintModal
        order={order}
        isOpen={isInvoiceOpen}
        onClose={() => setIsInvoiceOpen(false)}
      />
    </div>
  );
}
