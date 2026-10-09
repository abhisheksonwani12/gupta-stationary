"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, CartItem } from "@/types";
import { couponService } from "@/lib/services/couponService";
import { productService } from "@/lib/services/productService";

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number, selectedColor?: string) => boolean;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => boolean;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  totalItems: number;
  subtotal: number;
  bulkDiscount: number;
  couponCode: string;
  couponDiscount: number;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
  taxAmount: number;
  deliveryFee: number;
  finalTotal: number;
  freeShippingThreshold: number;
  amountNeededForFreeShipping: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [couponCode, setCouponCode] = useState<string>("");
  const [couponDiscount, setCouponDiscount] = useState<number>(0);
  const [mounted, setMounted] = useState(false);

  const freeShippingThreshold = 500;

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("gupta_cart");
      if (saved) {
        setItems(JSON.parse(saved));
      }
      const savedCoupon = localStorage.getItem("gupta_coupon");
      if (savedCoupon) {
        const parsed = JSON.parse(savedCoupon);
        setCouponCode(parsed.code || "");
        setCouponDiscount(parsed.discount || 0);
      }
    } catch (e) {
      console.error("Failed to load cart", e);
    }
    setMounted(true);
  }, []);

  // Sync to localStorage
  useEffect(() => {
    if (mounted) {
      try {
        localStorage.setItem("gupta_cart", JSON.stringify(items));
      } catch (e) {
        console.error("Failed to save cart", e);
      }
    }
  }, [items, mounted]);

  const calculateItemPricing = (product: Product, quantity: number) => {
    let unitPrice = product.price;
    let discountPercentage = 0;

    if (product.bulkPricing && product.bulkPricing.length > 0) {
      const tier = [...product.bulkPricing]
        .reverse()
        .find((t) => quantity >= t.minQty);
      if (tier) {
        unitPrice = tier.pricePerUnit;
        discountPercentage = tier.discountPercent;
      }
    }

    return { unitPrice, discountPercentage };
  };

  const addToCart = (product: Product, quantity = 1, selectedColor?: string): boolean => {
    // Check latest live stock
    const latestProd = productService.getProductById(product.id) || product;
    const availableStock = latestProd.stock ?? 0;

    if (availableStock <= 0) {
      alert(`Sorry, "${product.name}" is currently out of stock.`);
      return false;
    }

    const existingIndex = items.findIndex(
      (item) => item.product.id === product.id && item.selectedColor === selectedColor
    );

    const currentQtyInCart = existingIndex > -1 ? items[existingIndex].quantity : 0;
    const targetQty = currentQtyInCart + quantity;

    if (targetQty > availableStock) {
      alert(`Cannot add more than available stock (${availableStock} units).`);
      return false;
    }

    setItems((prev) => {
      if (existingIndex > -1) {
        const { unitPrice, discountPercentage } = calculateItemPricing(latestProd, targetQty);
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: targetQty,
          unitPrice,
          discountPercentage,
          product: latestProd,
        };
        return updated;
      } else {
        const { unitPrice, discountPercentage } = calculateItemPricing(latestProd, quantity);
        return [
          ...prev,
          {
            product: latestProd,
            quantity,
            selectedColor,
            unitPrice,
            discountPercentage,
          },
        ];
      }
    });

    setIsCartOpen(true);
    return true;
  };

  const removeFromCart = (productId: string) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number): boolean => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return true;
    }

    const item = items.find((it) => it.product.id === productId);
    if (!item) return false;

    const latestProd = productService.getProductById(productId) || item.product;
    const availableStock = latestProd.stock ?? 0;

    if (quantity > availableStock) {
      alert(`Only ${availableStock} units available in stock.`);
      return false;
    }

    setItems((prev) =>
      prev.map((it) => {
        if (it.product.id === productId) {
          const { unitPrice, discountPercentage } = calculateItemPricing(latestProd, quantity);
          return {
            ...it,
            quantity,
            unitPrice,
            discountPercentage,
            product: latestProd,
          };
        }
        return it;
      })
    );
    return true;
  };

  const clearCart = () => {
    setItems([]);
    setCouponCode("");
    setCouponDiscount(0);
    try {
      localStorage.removeItem("gupta_cart");
      localStorage.removeItem("gupta_coupon");
    } catch (e) {}
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  // Subtotal at full price
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  // Discounted total
  const discountedSubtotal = items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  const bulkDiscount = Math.max(0, subtotal - discountedSubtotal);

  // Apply Coupon
  const applyCoupon = (code: string) => {
    const res = couponService.validateCoupon(code, discountedSubtotal);
    if (res.valid) {
      setCouponCode(code.toUpperCase());
      setCouponDiscount(res.discount);
      try {
        localStorage.setItem(
          "gupta_coupon",
          JSON.stringify({ code: code.toUpperCase(), discount: res.discount })
        );
      } catch (e) {}
      return { success: true, message: res.message };
    }
    return { success: false, message: res.message };
  };

  const removeCoupon = () => {
    setCouponCode("");
    setCouponDiscount(0);
    try {
      localStorage.removeItem("gupta_coupon");
    } catch (e) {}
  };

  const afterCouponSubtotal = Math.max(0, discountedSubtotal - couponDiscount);
  const deliveryFee = afterCouponSubtotal >= freeShippingThreshold || items.length === 0 ? 0 : 50;
  const taxAmount = Math.round(afterCouponSubtotal * 0.12); // 12% GST estimation
  const finalTotal = afterCouponSubtotal + deliveryFee;
  const amountNeededForFreeShipping = Math.max(0, freeShippingThreshold - afterCouponSubtotal);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        totalItems,
        subtotal,
        bulkDiscount,
        couponCode,
        couponDiscount,
        applyCoupon,
        removeCoupon,
        taxAmount,
        deliveryFee,
        finalTotal,
        freeShippingThreshold,
        amountNeededForFreeShipping,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
