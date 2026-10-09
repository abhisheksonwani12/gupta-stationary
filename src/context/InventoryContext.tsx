"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { Product, Order, OrderStatus, BulkQuoteLead, Coupon, BulkQuoteRequest } from "@/types";
import { productService } from "@/lib/services/productService";
import { orderService } from "@/lib/services/orderService";
import { quoteService } from "@/lib/services/quoteService";
import { couponService } from "@/lib/services/couponService";

interface InventoryContextType {
  products: Product[];
  orders: Order[];
  quotes: BulkQuoteLead[];
  coupons: Coupon[];
  isLoading: boolean;
  // Product & Inventory actions
  updateStock: (productId: string, newStock: number) => void;
  adjustStock: (productId: string, delta: number) => void;
  addProduct: (productData: Omit<Product, "id">) => Product;
  updateProduct: (id: string, updates: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  getProductBySlug: (slug: string) => Product | undefined;
  getProductById: (id: string) => Product | undefined;
  isLowStock: (product: Product) => boolean;
  isOutOfStock: (product: Product) => boolean;
  // Order actions
  createOrder: (orderData: Omit<Order, "id" | "orderNumber" | "createdAt">) => Order;
  updateOrderStatus: (orderId: string, status: OrderStatus, trackingNumber?: string, courierPartner?: string) => void;
  // Quote actions
  submitBulkQuote: (req: BulkQuoteRequest) => BulkQuoteLead;
  updateQuoteStatus: (id: string, status: BulkQuoteLead["status"], estimatedValue?: number, internalNotes?: string) => void;
  // Coupon actions
  createCoupon: (data: Omit<Coupon, "id" | "usedCount" | "createdAt">) => Coupon;
  toggleCouponStatus: (id: string) => void;
  deleteCoupon: (id: string) => void;
  validateCoupon: (code: string, cartTotal: number) => { valid: boolean; discount: number; message: string };
  // Metrics
  lowStockCount: number;
  outOfStockCount: number;
  pendingOrdersCount: number;
}

const InventoryContext = createContext<InventoryContextType | undefined>(undefined);

export function InventoryProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [quotes, setQuotes] = useState<BulkQuoteLead[]>([]);
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const refreshAll = useCallback(() => {
    setProducts(productService.getProducts());
    setOrders(orderService.getOrders());
    setQuotes(quoteService.getQuotes());
    setCoupons(couponService.getCoupons());
    setIsLoading(false);
  }, []);

  useEffect(() => {
    refreshAll();

    // Trigger Supabase background real-time synchronization
    productService.syncWithSupabase();
    orderService.syncWithSupabase();
    quoteService.syncWithSupabase();
    couponService.syncWithSupabase();

    const handleInventoryChange = () => setProducts(productService.getProducts());
    const handleOrdersChange = () => setOrders(orderService.getOrders());
    const handleQuotesChange = () => setQuotes(quoteService.getQuotes());
    const handleCouponsChange = () => setCoupons(couponService.getCoupons());

    window.addEventListener("instant_inventory_updated", handleInventoryChange);
    window.addEventListener("gupta_inventory_updated", handleInventoryChange);
    window.addEventListener("instant_orders_updated", handleOrdersChange);
    window.addEventListener("gupta_orders_updated", handleOrdersChange);
    window.addEventListener("instant_quotes_updated", handleQuotesChange);
    window.addEventListener("gupta_quotes_updated", handleQuotesChange);
    window.addEventListener("instant_coupons_updated", handleCouponsChange);
    window.addEventListener("gupta_coupons_updated", handleCouponsChange);
    window.addEventListener("storage", refreshAll);

    return () => {
      window.removeEventListener("instant_inventory_updated", handleInventoryChange);
      window.removeEventListener("gupta_inventory_updated", handleInventoryChange);
      window.removeEventListener("instant_orders_updated", handleOrdersChange);
      window.removeEventListener("gupta_orders_updated", handleOrdersChange);
      window.removeEventListener("instant_quotes_updated", handleQuotesChange);
      window.removeEventListener("gupta_quotes_updated", handleQuotesChange);
      window.removeEventListener("instant_coupons_updated", handleCouponsChange);
      window.removeEventListener("gupta_coupons_updated", handleCouponsChange);
      window.removeEventListener("storage", refreshAll);
    };
  }, [refreshAll]);

  // Product & Inventory Methods
  const updateStock = (productId: string, newStock: number) => {
    productService.updateStock(productId, newStock);
    setProducts(productService.getProducts());
  };

  const adjustStock = (productId: string, delta: number) => {
    productService.adjustStock(productId, delta);
    setProducts(productService.getProducts());
  };

  const addProduct = (productData: Omit<Product, "id">) => {
    const created = productService.createProduct(productData);
    setProducts(productService.getProducts());
    return created;
  };

  const updateProduct = (id: string, updates: Partial<Product>) => {
    productService.updateProduct(id, updates);
    setProducts(productService.getProducts());
  };

  const deleteProduct = (id: string) => {
    productService.deleteProduct(id);
    setProducts(productService.getProducts());
  };

  const getProductBySlug = (slug: string) => {
    return products.find((p) => p.slug === slug);
  };

  const getProductById = (id: string) => {
    return products.find((p) => p.id === id);
  };

  const isLowStock = (product: Product) => {
    const threshold = product.lowStockThreshold ?? 10;
    return product.stock > 0 && product.stock <= threshold;
  };

  const isOutOfStock = (product: Product) => {
    return (product.stock ?? 0) <= 0;
  };

  // Order Methods
  const createOrder = (orderData: Omit<Order, "id" | "orderNumber" | "createdAt">) => {
    // 1. Create order
    const created = orderService.createOrder(orderData);
    // 2. Decrement live stock
    productService.decrementStockForOrder(
      orderData.items.map((it) => ({ productId: it.productId, quantity: it.quantity }))
    );
    setOrders(orderService.getOrders());
    setProducts(productService.getProducts());
    return created;
  };

  const updateOrderStatus = (
    orderId: string,
    status: OrderStatus,
    trackingNumber?: string,
    courierPartner?: string
  ) => {
    orderService.updateOrderStatus(orderId, status, trackingNumber, courierPartner);
    setOrders(orderService.getOrders());
  };

  // Quote Methods
  const submitBulkQuote = (req: BulkQuoteRequest) => {
    const created = quoteService.createQuoteFromRequest(req);
    setQuotes(quoteService.getQuotes());
    return created;
  };

  const updateQuoteStatus = (
    id: string,
    status: BulkQuoteLead["status"],
    estimatedValue?: number,
    internalNotes?: string
  ) => {
    quoteService.updateQuoteStatus(id, status, estimatedValue, internalNotes);
    setQuotes(quoteService.getQuotes());
  };

  // Coupon Methods
  const createCoupon = (data: Omit<Coupon, "id" | "usedCount" | "createdAt">) => {
    const created = couponService.createCoupon(data);
    setCoupons(couponService.getCoupons());
    return created;
  };

  const toggleCouponStatus = (id: string) => {
    couponService.toggleCouponStatus(id);
    setCoupons(couponService.getCoupons());
  };

  const deleteCoupon = (id: string) => {
    couponService.deleteCoupon(id);
    setCoupons(couponService.getCoupons());
  };

  const validateCoupon = (code: string, cartTotal: number) => {
    return couponService.validateCoupon(code, cartTotal);
  };

  // Counts
  const lowStockCount = products.filter(isLowStock).length;
  const outOfStockCount = products.filter(isOutOfStock).length;
  const pendingOrdersCount = orders.filter((o) => o.orderStatus === "processing").length;

  return (
    <InventoryContext.Provider
      value={{
        products,
        orders,
        quotes,
        coupons,
        isLoading,
        updateStock,
        adjustStock,
        addProduct,
        updateProduct,
        deleteProduct,
        getProductBySlug,
        getProductById,
        isLowStock,
        isOutOfStock,
        createOrder,
        updateOrderStatus,
        submitBulkQuote,
        updateQuoteStatus,
        createCoupon,
        toggleCouponStatus,
        deleteCoupon,
        validateCoupon,
        lowStockCount,
        outOfStockCount,
        pendingOrdersCount,
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
}

export function useInventory() {
  const context = useContext(InventoryContext);
  if (!context) {
    throw new Error("useInventory must be used within an InventoryProvider");
  }
  return context;
}
