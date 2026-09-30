"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, CartItem } from "@/types";

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number, selectedColor?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  totalItems: number;
  subtotal: number;
  bulkDiscount: number;
  finalTotal: number;
  freeShippingThreshold: number;
  deliveryFee: number;
  amountNeededForFreeShipping: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const freeShippingThreshold = 500;

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("gupta_cart");
      if (saved) {
        setItems(JSON.parse(saved));
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
      // Find matching tier
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

  const addToCart = (product: Product, quantity = 1, selectedColor?: string) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedColor === selectedColor
      );

      if (existingIndex > -1) {
        const newQty = prev[existingIndex].quantity + quantity;
        const { unitPrice, discountPercentage } = calculateItemPricing(product, newQty);
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: newQty,
          unitPrice,
          discountPercentage,
        };
        return updated;
      } else {
        const { unitPrice, discountPercentage } = calculateItemPricing(product, quantity);
        return [
          ...prev,
          {
            product,
            quantity,
            selectedColor,
            unitPrice,
            discountPercentage,
          },
        ];
      }
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setItems((prev) =>
      prev.map((item) => {
        if (item.product.id === productId) {
          const { unitPrice, discountPercentage } = calculateItemPricing(item.product, quantity);
          return {
            ...item,
            quantity,
            unitPrice,
            discountPercentage,
          };
        }
        return item;
      })
    );
  };

  const clearCart = () => setItems([]);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  
  // Subtotal at full original price
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  // Discounted total
  const discountedSubtotal = items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);

  const bulkDiscount = Math.max(0, subtotal - discountedSubtotal);

  const deliveryFee = discountedSubtotal >= freeShippingThreshold || discountedSubtotal === 0 ? 0 : 50;

  const finalTotal = discountedSubtotal + deliveryFee;

  const amountNeededForFreeShipping = Math.max(0, freeShippingThreshold - discountedSubtotal);

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
        finalTotal,
        freeShippingThreshold,
        deliveryFee,
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
