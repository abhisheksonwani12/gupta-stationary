export interface BulkTier {
  minQty: number;
  maxQty?: number;
  discountPercent: number;
  pricePerUnit: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  itemCount: number;
  subcategories: string[];
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  subCategory?: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  stock: number;
  lowStockThreshold?: number;
  isBestseller?: boolean;
  isEcoFriendly?: boolean;
  isNew?: boolean;
  images: string[];
  description: string;
  shortDescription: string;
  highlights: string[];
  specifications: Record<string, string>;
  bulkPricing: BulkTier[];
  colors?: { name: string; hex: string }[];
  sku: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
  unitPrice: number;
  discountPercentage: number;
}

export interface OrderItem {
  id: string;
  productId: string;
  productName: string;
  sku: string;
  image?: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  selectedColor?: string;
}

export interface ShippingAddress {
  fullName: string;
  phone: string;
  email: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  pincode: string;
  landmark?: string;
}

export type OrderStatus = "processing" | "dispatched" | "in_transit" | "delivered" | "cancelled";
export type PaymentStatus = "pending" | "paid" | "failed" | "refunded";
export type PaymentMethod = "upi" | "card" | "netbanking" | "wallet" | "cod";

export interface Order {
  id: string;
  orderNumber: string;
  createdAt: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  shippingAddress: ShippingAddress;
  items: OrderItem[];
  subtotal: number;
  bulkDiscount: number;
  couponDiscount: number;
  couponCode?: string;
  deliveryFee: number;
  taxAmount: number;
  total: number;
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
  orderStatus: OrderStatus;
  deliverySlot?: "morning" | "evening" | "standard";
  trackingNumber?: string;
  courierPartner?: string;
  customerNotes?: string;
  gstNumber?: string;
}

export interface BulkQuoteLead {
  id: string;
  companyName: string;
  contactPerson: string;
  phone: string;
  email: string;
  gstNumber?: string;
  businessType: string;
  productList: string;
  deliveryDate?: string;
  deliveryLocation: string;
  specialRequirements?: string;
  paymentPreference: string;
  status: "received" | "contacted" | "quoted" | "invoiced" | "fulfilled" | "closed";
  estimatedValue?: number;
  internalNotes?: string;
  createdAt: string;
}

export interface Coupon {
  id: string;
  code: string;
  description: string;
  discountType: "percentage" | "fixed";
  discountValue: number;
  minOrderValue: number;
  maxDiscount?: number;
  expiryDate: string;
  usageLimit: number;
  usedCount: number;
  isActive: boolean;
  createdAt: string;
}

export interface Review {
  id: string;
  author: string;
  role?: string;
  company?: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
  verified: boolean;
  productName?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  author: string;
  publishedDate: string;
  readingTime: string;
  summary: string;
  coverImage: string;
  content: string[];
}

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface BulkQuoteRequest {
  companyName: string;
  contactPerson: string;
  phone: string;
  email: string;
  gstNumber?: string;
  businessType: string;
  productList: string;
  deliveryDate?: string;
  deliveryLocation: string;
  specialRequirements?: string;
  paymentPreference: string;
}
