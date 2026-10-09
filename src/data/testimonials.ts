import { Review } from "@/types";

export const TESTIMONIALS: Review[] = [
  {
    id: "rev-1",
    author: "Anmol Sharma",
    role: "School Principal, Raipur",
    rating: 5,
    title: "33 Years of Quality & Trust!",
    comment: "I've been buying from Instant Stationary since 2005. Their quality is unmatched, and I've never found cheaper prices anywhere in Raipur. Every time I need stationery, I know exactly where to go. They deserve 10 stars if possible!",
    date: "Aug 15, 2024",
    verified: true
  },
  {
    id: "rev-2",
    author: "Rajesh Verma",
    role: "Operations Manager",
    company: "TechVision Solutions",
    rating: 5,
    title: "Bulk Orders Saved Us ₹50,000!",
    comment: "We order office supplies every month. Instant Stationary gives us 40-50% discount on bulk orders. Their quality is as good as premium brands, but at 1/3rd the price. Best supplier ever!",
    date: "Aug 10, 2024",
    verified: true
  },
  {
    id: "rev-3",
    author: "Priya Desai",
    role: "Event Manager & School Teacher",
    rating: 5,
    title: "Same-Day Delivery - Lifesaver!",
    comment: "Emergency office supply needed? Instant Stationary delivers same day! They saved our presentation once. Now they're our only stationery supplier. Love the eco-friendly range!",
    date: "Jul 28, 2024",
    verified: true
  },
  {
    id: "rev-4",
    author: "Vikram Singh",
    role: "Environmental Activist & Business Owner",
    rating: 5,
    title: "Eco-Friendly Without Compromise",
    comment: "Finally, a stationery shop that offers eco-friendly options at affordable prices! Most eco-friendly products are too expensive. Instant Stationary gets it right. Supporting sustainable business!",
    date: "Jul 18, 2024",
    verified: true
  },
  {
    id: "rev-5",
    author: "Neha Patel",
    role: "Parent & Teacher",
    rating: 5,
    title: "Student's Favorite!",
    comment: "As a parent buying school supplies, I trust Instant Stationary completely. Quality is excellent, prices are the best, and my kids actually like the products. What more can you ask?",
    date: "Jul 05, 2024",
    verified: true
  },
  {
    id: "rev-6",
    author: "Rohan Joshi",
    role: "Print Shop Owner, Raipur",
    rating: 5,
    title: "Professional Quality at Student Prices",
    comment: "I run a printing business and buy stationery in bulk from Instant. Their papers are premium quality but cost way less than competitors. My profit margins have increased 30% since switching to them!",
    date: "Jun 22, 2024",
    verified: true
  },
  {
    id: "rev-7",
    author: "Sunita Rao",
    role: "Office Manager",
    rating: 5,
    title: "Customer Service Beyond Expectations",
    comment: "Had a complaint about a defective product. Instant Stationary not only replaced it immediately but also gave me a 10% discount on my next order! This is true customer service!",
    date: "Jun 11, 2024",
    verified: true
  }
];

export const INSTITUTIONAL_REVIEWS = [
  {
    name: "Delhi Public School, Raipur",
    badge: "Trusted Supplier for 10+ Years",
    detail: "Back-to-school bulk orders for 500+ notebooks, pens and geometry kits. 50% savings every year with consistent quality."
  },
  {
    name: "New Chopstick Restaurant, Raipur",
    badge: "Best Wholesale Partner",
    detail: "Supplies all daily office and restaurant paper supplies. Bulk pricing helps maintain healthy operating margins."
  },
  {
    name: "Raipur Municipal Corporation",
    badge: "Go-To for Office Supplies",
    detail: "Reliable, quality-conscious government supplier that always delivers within tight timelines."
  },
  {
    name: "TechVision Solutions, Raipur",
    badge: "Corporate Office Partner",
    detail: "Monthly orders of 500+ mixed items. Cut supplier costs from ₹50,000/mo to ₹25,000/mo — saving ₹3,00,000 annually."
  }
];

export const REVIEW_METRICS = {
  overallRating: 4.8,
  totalReviews: 2847,
  positivePercentage: 96,
  wouldRecommend: 98,
  repeatCustomerRate: 89,
  breakdown: [
    { stars: 5, count: 2045, percent: 72 },
    { stars: 4, count: 562, percent: 20 },
    { stars: 3, count: 185, percent: 6 },
    { stars: 2, count: 38, percent: 1.5 },
    { stars: 1, count: 17, percent: 0.5 },
  ],
  topTags: [
    { tag: "Quality", mentions: 987 },
    { tag: "Fast Delivery", mentions: 756 },
    { tag: "Low Prices", mentions: 645 },
    { tag: "Bulk Discounts", mentions: 534 },
    { tag: "Customer Service", mentions: 423 },
    { tag: "Eco-Friendly Options", mentions: 312 },
    { tag: "Wide Range", mentions: 289 },
    { tag: "Reliability", mentions: 267 }
  ]
};
