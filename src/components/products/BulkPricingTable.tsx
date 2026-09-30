import React from "react";
import { BulkTier } from "@/types";
import { formatPrice } from "@/lib/utils";
import { CheckCircle, Zap } from "lucide-react";

interface BulkPricingTableProps {
  bulkPricing: BulkTier[];
  currentQuantity?: number;
  onSelectTier?: (qty: number) => void;
}

export default function BulkPricingTable({
  bulkPricing,
  currentQuantity = 1,
  onSelectTier,
}: BulkPricingTableProps) {
  if (!bulkPricing || bulkPricing.length <= 1) return null;

  return (
    <div className="border border-[#E8E3DA] bg-[#FAF8F5] p-4 sm:p-5 my-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-[#B38E5D]" />
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#1C1C1C]">
            Bulk / Wholesale Volume Pricing
          </h4>
        </div>
        <span className="text-[11px] text-emerald-800 font-semibold bg-emerald-100 px-2 py-0.5">
          Save up to {bulkPricing[bulkPricing.length - 1].discountPercent}%
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-[#E8E3DA] text-gray-500 font-semibold">
              <th className="pb-2">Quantity</th>
              <th className="pb-2">Discount</th>
              <th className="pb-2">Price per Unit</th>
              <th className="pb-2 text-right">Tier Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E8E3DA]/60">
            {bulkPricing.map((tier, idx) => {
              const isActive =
                currentQuantity >= tier.minQty &&
                (tier.maxQty === undefined || currentQuantity <= tier.maxQty);

              return (
                <tr
                  key={idx}
                  onClick={() => onSelectTier && onSelectTier(tier.minQty)}
                  className={`transition-colors cursor-pointer ${
                    isActive ? "bg-white font-bold text-black" : "text-gray-700 hover:bg-white/60"
                  }`}
                >
                  <td className="py-2.5 flex items-center gap-1.5">
                    {isActive && <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />}
                    <span>
                      {tier.maxQty ? `${tier.minQty} - ${tier.maxQty} units` : `${tier.minQty}+ units`}
                    </span>
                  </td>
                  <td className="py-2.5">
                    {tier.discountPercent > 0 ? (
                      <span className="text-emerald-700 font-bold">
                        {tier.discountPercent}% OFF
                      </span>
                    ) : (
                      <span className="text-gray-400">Retail Rate</span>
                    )}
                  </td>
                  <td className="py-2.5">
                    <span className="text-[#1C1C1C] font-semibold">
                      {formatPrice(tier.pricePerUnit)}
                    </span>
                    <span className="text-[10px] text-gray-400"> / unit</span>
                  </td>
                  <td className="py-2.5 text-right">
                    {isActive ? (
                      <span className="text-[10px] bg-[#1C1C1C] text-white px-2 py-0.5 uppercase tracking-wider">
                        Active Tier
                      </span>
                    ) : (
                      <span className="text-[11px] text-gray-400 hover:text-black">
                        Select {tier.minQty}
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="text-[11px] text-gray-500 mt-3 italic">
        * Bulk discounts apply automatically at cart. For 500+ units, contact us for custom institution rates.
      </p>
    </div>
  );
}
