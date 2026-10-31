import React from "react";
import { Award, Truck, Tag, ShieldCheck } from "lucide-react";

const PILLARS = [
  {
    icon: Award,
    title: "33+ Years of Trust",
    description: "Supplying schools, colleges, and offices across Raipur since 1990.",
  },
  {
    icon: Truck,
    title: "Same-Day Dispatch",
    description: "Free doorstep delivery across Raipur on all retail orders above ₹500.",
  },
  {
    icon: Tag,
    title: "Wholesale Value",
    description: "Direct manufacturer sourcing with bulk savings up to 60% for institutions.",
  },
  {
    icon: ShieldCheck,
    title: "100% Genuine Stock",
    description: "Authorized stationery from Classmate, Reynolds, Hauser, Pidilite & more.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-10 sm:py-14 bg-[#FBFBFA] border-b border-[#EAE6DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PILLARS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-white border border-[#EAE6DF] flex items-center justify-center shrink-0 shadow-xs text-[#967448]">
                  <Icon className="w-5 h-5 stroke-[1.75]" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#18181B] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#78716C] mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
