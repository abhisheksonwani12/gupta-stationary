export interface BulkTier {
  minQty: number;
  maxQty?: number;
  discountPercent: number;
  pricePerUnit: number;
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
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
  unitPrice: number;
  discountPercentage: number;
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
