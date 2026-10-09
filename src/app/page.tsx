import React from "react";
import HeroSlider from "@/components/home/HeroSlider";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CategoryShowcase from "@/components/home/CategoryShowcase";
import BestsellersCarousel from "@/components/home/BestsellersCarousel";
import CuratedLookbook from "@/components/home/CuratedLookbook";
import BulkSavingsBanner from "@/components/home/BulkSavingsBanner";
import ReviewsSection from "@/components/home/ReviewsSection";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col">
      {/* 1. Hero Section */}
      <HeroSlider />

      {/* 2. Why Choose Instant Stationary */}
      <WhyChooseUs />

      {/* 3. Featured Product Categories */}
      <CategoryShowcase />

      {/* 4. Bestsellers & Most Loved Products */}
      <BestsellersCarousel />

      {/* 5. Curated Lookbook (Office & School Solutions) */}
      <CuratedLookbook />

      {/* 6. Wholesale & Bulk Orders Savings Banner */}
      <BulkSavingsBanner />

      {/* 7. Verified Customer Reviews & Institutional Partners */}
      <ReviewsSection />
    </div>
  );
}
