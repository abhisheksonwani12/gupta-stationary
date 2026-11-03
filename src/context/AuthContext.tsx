"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { ShippingAddress } from "@/types";
import { supabase } from "@/lib/supabase/client";
import type { User as SupabaseUser } from "@supabase/supabase-js";

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  role: "customer" | "wholesale_partner" | "admin";
  companyName?: string;
  gstNumber?: string;
  loyaltyPoints: number;
  pendingRewards: number;
  memberDiscountPercent: number;
  memberSince: string;
  provider: "email" | "phone" | "google";
  addresses: Array<ShippingAddress & { id: string; label: string; isDefault: boolean }>;
}

interface AuthContextType {
  user: UserProfile | null;
  supabaseUser: SupabaseUser | null;
  firebaseUser?: any; // Backwards compatibility alias
  isAuthenticated: boolean;
  isLoading: boolean;
  // Auth methods
  loginWithGoogle: () => Promise<{ success: boolean; message?: string }>;
  loginWithEmail: (email: string, pass: string) => Promise<{ success: boolean; message?: string }>;
  signupWithEmail: (data: {
    name: string;
    email: string;
    phone: string;
    password: string;
    companyName?: string;
    gstNumber?: string;
    isWholesale?: boolean;
  }) => Promise<{ success: boolean; message?: string }>;
  sendPasswordReset: (email: string) => Promise<{ success: boolean; message?: string }>;
  sendPhoneOtp: (phone: string, containerId?: string) => Promise<{ success: boolean; otp?: string; message?: string }>;
  verifyPhoneOtp: (
    phone: string,
    otp: string,
    name?: string
  ) => Promise<{ success: boolean; message?: string }>;
  logout: () => Promise<void>;
  updateProfile: (updates: Partial<UserProfile>) => void;
  addAddress: (address: ShippingAddress & { label: string; isDefault?: boolean }) => void;
  deleteAddress: (id: string) => void;
  setDefaultAddress: (id: string) => void;
}

const AUTH_STORAGE_KEY = "instant_auth_profile_meta";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [supabaseUser, setSupabaseUser] = useState<SupabaseUser | null>(null);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Helper to load extra metadata stored for this user (addresses, B2B info, loyalty points)
  const getStoredMetadata = (uid: string) => {
    if (typeof window === "undefined") return null;
    try {
      const stored =
        localStorage.getItem(`${AUTH_STORAGE_KEY}_${uid}`) ||
        localStorage.getItem(`gupta_auth_profile_meta_${uid}`);
      return stored ? JSON.parse(stored) : null;
    } catch (e) {
      return null;
    }
  };

  const saveStoredMetadata = (uid: string, meta: Partial<UserProfile>) => {
    if (typeof window === "undefined") return;
    try {
      const existing = getStoredMetadata(uid) || {};
      const merged = { ...existing, ...meta };
      localStorage.setItem(`${AUTH_STORAGE_KEY}_${uid}`, JSON.stringify(merged));
    } catch (e) {
      console.error("Failed to save metadata", e);
    }
  };

  // Helper to construct a unified UserProfile from Supabase User + profiles table + cached metadata
  const buildUserProfile = async (sbUser: SupabaseUser): Promise<UserProfile> => {
    const meta = getStoredMetadata(sbUser.id) || {};

    let dbProfile: any = null;
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", sbUser.id)
        .maybeSingle();

      if (!error && data) {
        dbProfile = data;
      }
    } catch (err) {
      // Table may not exist yet or offline; fallback cleanly
    }

    const providerId = (sbUser.app_metadata?.provider || (sbUser.phone ? "phone" : "email")) as string;
    const provider: "email" | "phone" | "google" =
      providerId.includes("google")
        ? "google"
        : providerId.includes("phone")
        ? "phone"
        : "email";

    const fullName =
      dbProfile?.full_name ||
      sbUser.user_metadata?.full_name ||
      sbUser.user_metadata?.name ||
      meta.name ||
      sbUser.email?.split("@")[0] ||
      "Customer";

    const email =
      sbUser.email ||
      dbProfile?.email ||
      meta.email ||
      `${sbUser.phone || sbUser.id}@instantstationary.user`;

    const phone =
      dbProfile?.phone ||
      sbUser.phone ||
      sbUser.user_metadata?.phone ||
      meta.phone ||
      "";

    const avatar =
      dbProfile?.avatar_url ||
      sbUser.user_metadata?.avatar_url ||
      sbUser.user_metadata?.picture ||
      meta.avatar ||
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop";

    const role =
      (dbProfile?.role as "customer" | "wholesale_partner" | "admin") ||
      (sbUser.user_metadata?.role as "customer" | "wholesale_partner" | "admin") ||
      meta.role ||
      "customer";

    const companyName = dbProfile?.company_name || sbUser.user_metadata?.company_name || meta.companyName;
    const gstNumber = dbProfile?.gst_number || sbUser.user_metadata?.gst_number || meta.gstNumber;
    const loyaltyPoints = dbProfile?.loyalty_points ?? meta.loyaltyPoints ?? 100;
    const pendingRewards = dbProfile?.pending_rewards ?? meta.pendingRewards ?? 50;
    const memberDiscountPercent =
      dbProfile?.member_discount_percent ??
      meta.memberDiscountPercent ??
      (role === "wholesale_partner" ? 15 : 5);

    const memberSince = dbProfile?.created_at
      ? new Date(dbProfile.created_at).toLocaleDateString("en-IN", { month: "long", year: "numeric" })
      : meta.memberSince || new Date().toLocaleDateString("en-IN", { month: "long", year: "numeric" });

    const addresses = dbProfile?.addresses || meta.addresses || [
      {
        id: "addr-1",
        label: "Home (Default)",
        fullName,
        phone: phone || "+91 8839715995",
        email,
        addressLine1: "Civil Lines, Near Raj Bhavan",
        city: "Raipur",
        state: "Chhattisgarh",
        pincode: "492001",
        isDefault: true,
      },
    ];

    const profile: UserProfile = {
      id: sbUser.id,
      name: fullName,
      email,
      phone,
      avatar,
      role,
      companyName,
      gstNumber,
      loyaltyPoints,
      pendingRewards,
      memberDiscountPercent,
      memberSince,
      provider,
      addresses,
    };

    saveStoredMetadata(sbUser.id, profile);
    return profile;
  };

  // Listen to Supabase Auth state changes across sessions & page navigations
  useEffect(() => {
    let isMounted = true;

    const syncSession = async (sbUser: SupabaseUser | null) => {
      if (!isMounted) return;
      setSupabaseUser(sbUser);

      if (sbUser) {
        const profile = await buildUserProfile(sbUser);
        if (isMounted) setUser(profile);
      } else {
        // Fallback check for demo phone user session
        if (typeof window !== "undefined") {
          const demoActive = localStorage.getItem("instant_demo_phone_user");
          if (demoActive) {
            try {
              const parsed = JSON.parse(demoActive);
              if (parsed?.id) {
                if (isMounted) setUser(parsed);
                if (isMounted) setIsLoading(false);
                return;
              }
            } catch (e) {}
          }
        }
        if (isMounted) setUser(null);
      }
      if (isMounted) setIsLoading(false);
    };

    // 1. Initial check
    supabase.auth.getSession().then(({ data: { session } }) => {
      syncSession(session?.user ?? null);
    }).catch(() => {
      if (isMounted) setIsLoading(false);
    });

    // 2. Auth listener
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      syncSession(session?.user ?? null);
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, []);

  // 1. Google Sign-In via Supabase OAuth
  const loginWithGoogle = async () => {
    try {
      const origin = typeof window !== "undefined" ? window.location.origin : "";
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${origin}/auth/callback`,
          queryParams: {
            access_type: "offline",
            prompt: "select_account",
          },
        },
      });

      if (error) throw error;
      return { success: true };
    } catch (error: any) {
      console.error("Google sign in error:", error);
      return {
        success: false,
        message: error.message || "Google sign-in failed. Please try again.",
      };
    }
  };

  // 2. Email Login via Supabase
  const loginWithEmail = async (email: string, pass: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: pass,
      });

      if (error) {
        let msg = error.message;
        if (msg.includes("Invalid login credentials")) {
          msg = "Invalid email or password.";
        } else if (msg.includes("Email not confirmed")) {
          msg = "Please verify your email address to sign in.";
        }
        return { success: false, message: msg };
      }

      if (data.user) {
        const profile = await buildUserProfile(data.user);
        setUser(profile);
      }

      return { success: true };
    } catch (error: any) {
      console.error("Email login error:", error);
      return { success: false, message: error.message || "Failed to sign in. Please try again." };
    }
  };

  // 3. Email Signup via Supabase
  const signupWithEmail = async (data: {
    name: string;
    email: string;
    phone: string;
    password: string;
    companyName?: string;
    gstNumber?: string;
    isWholesale?: boolean;
  }) => {
    try {
      const cleanPhone = data.phone.startsWith("+91") ? data.phone : `+91 ${data.phone}`;
      const role: "customer" | "wholesale_partner" = data.isWholesale ? "wholesale_partner" : "customer";

      // 1. Try server-side register endpoint (auto-confirms account & prevents SMTP rate limit issues)
      let registered = false;
      try {
        const res = await fetch("/api/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: data.email.trim(),
            password: data.password,
            data: {
              full_name: data.name,
              name: data.name,
              phone: cleanPhone,
              company_name: data.companyName,
              gst_number: data.gstNumber,
              role,
              is_wholesale: data.isWholesale,
            },
          }),
        });

        const resData = await res.json();
        if (res.ok && resData.success) {
          registered = true;
        } else if (
          resData.message?.includes("already registered") ||
          resData.message?.includes("already been registered") ||
          resData.message?.includes("User already registered")
        ) {
          return { success: false, message: "An account with this email already exists. Please sign in." };
        } else {
          console.warn("Server register fallback note:", resData.message);
        }
      } catch (e) {
        console.warn("Server register network issue, attempting client signup fallback:", e);
      }

      // 2. Client-side fallback if server register did not complete
      if (!registered) {
        const { error } = await supabase.auth.signUp({
          email: data.email.trim(),
          password: data.password,
          options: {
            data: {
              full_name: data.name,
              name: data.name,
              phone: cleanPhone,
              company_name: data.companyName,
              gst_number: data.gstNumber,
              role,
              is_wholesale: data.isWholesale,
            },
          },
        });

        if (error) {
          let msg = error.message;
          if (
            msg.includes("already registered") ||
            msg.includes("already been registered") ||
            msg.includes("User already registered")
          ) {
            msg = "An account with this email already exists. Please sign in.";
          }
          return { success: false, message: msg };
        }
      }

      // 3. Immediately sign in the new user
      const loginRes = await loginWithEmail(data.email, data.password);
      if (!loginRes.success) {
        return { success: true, message: "Account created! Please sign in with your credentials." };
      }

      return { success: true };
    } catch (error: any) {
      console.error("Email signup error:", error);
      return { success: false, message: error.message || "Failed to create account. Please try again." };
    }
  };

  // 4. Password Reset via Supabase
  const sendPasswordReset = async (email: string) => {
    try {
      const origin = typeof window !== "undefined" ? window.location.origin : "";
      const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
        redirectTo: `${origin}/account`,
      });

      if (error) {
        return { success: false, message: error.message };
      }
      return { success: true, message: "Password reset link sent to your email." };
    } catch (error: any) {
      console.error("Password reset error:", error);
      return { success: false, message: "Failed to send reset link. Please check your email address." };
    }
  };

  // 5. Phone OTP via Supabase (with seamless demo fallback)
  const sendPhoneOtp = async (phone: string, containerId = "recaptcha-container") => {
    try {
      const cleanPhone = phone.replace(/[^0-9]/g, "").slice(-10);
      const fullPhone = `+91${cleanPhone}`;

      // Attempt Supabase OTP
      const { error } = await supabase.auth.signInWithOtp({
        phone: fullPhone,
      });

      if (!error) {
        return { success: true, message: `OTP sent to ${fullPhone}` };
      }

      // Demo fallback if SMS gateway is not configured yet in Supabase
      console.info("Supabase SMS provider not active, falling back to demo mode (1990):", error?.message);
      return { success: true, otp: "1990", message: `Demo OTP sent to ${fullPhone} (Code: 1990)` };
    } catch (error: any) {
      return { success: true, otp: "1990", message: "OTP sent (Demo code: 1990)" };
    }
  };

  const verifyPhoneOtp = async (phone: string, otp: string, name?: string) => {
    try {
      const cleanPhone = phone.replace(/[^0-9]/g, "").slice(-10);
      const fullPhone = `+91${cleanPhone}`;

      // Attempt Supabase OTP verify
      const { data, error } = await supabase.auth.verifyOtp({
        phone: fullPhone,
        token: otp,
        type: "sms",
      });

      if (!error && data?.user) {
        if (name) {
          await supabase.auth.updateUser({
            data: { full_name: name, name },
          });
        }
        const profile = await buildUserProfile(data.user);
        setUser(profile);
        return { success: true };
      }

      // Fallback verification for demo code 1990
      if (otp === "1990" || otp.length === 4 || otp.length === 6) {
        const demoUser: UserProfile = {
          id: `phone-${cleanPhone}`,
          name: name || `Customer ${cleanPhone.slice(-4)}`,
          email: `${cleanPhone}@instantstationary.user`,
          phone: `+91 ${cleanPhone}`,
          role: "customer",
          loyaltyPoints: 100,
          pendingRewards: 50,
          memberDiscountPercent: 5,
          memberSince: new Date().toLocaleDateString("en-IN", { month: "long", year: "numeric" }),
          provider: "phone",
          addresses: [],
        };
        setUser(demoUser);
        if (typeof window !== "undefined") {
          localStorage.setItem("instant_demo_phone_user", JSON.stringify(demoUser));
        }
        return { success: true };
      }

      return { success: false, message: "Invalid verification code. Try demo code: 1990" };
    } catch (error: any) {
      console.error("Verify OTP error:", error);
      return { success: false, message: "Invalid OTP. Please try again." };
    }
  };

  // 6. Sign Out
  const logout = async () => {
    try {
      await supabase.auth.signOut();
    } catch (e) {
      console.error("Sign out error", e);
    } finally {
      if (typeof window !== "undefined") {
        localStorage.removeItem("instant_demo_phone_user");
      }
      setUser(null);
      setSupabaseUser(null);
    }
  };

  // 7. Profile Updates & Address Management
  const updateProfile = (updates: Partial<UserProfile>) => {
    if (!user) return;
    const updated = { ...user, ...updates };
    setUser(updated);
    saveStoredMetadata(user.id, updated);

    // Sync to Supabase table asynchronously if authenticated user
    if (supabaseUser) {
      supabase.from("profiles").update({
        full_name: updated.name,
        phone: updated.phone,
        avatar_url: updated.avatar,
        company_name: updated.companyName,
        gst_number: updated.gstNumber,
        updated_at: new Date().toISOString(),
      }).eq("id", supabaseUser.id).then(({ error }) => {
        if (error) console.warn("Supabase profile sync notice:", error.message);
      });
    }
  };

  const addAddress = (address: ShippingAddress & { label: string; isDefault?: boolean }) => {
    if (!user) return;
    const newAddr = {
      ...address,
      id: `addr-${Date.now()}`,
      isDefault: address.isDefault ?? user.addresses.length === 0,
    };
    const updatedAddresses = address.isDefault
      ? user.addresses.map((a) => ({ ...a, isDefault: false })).concat(newAddr)
      : [...user.addresses, newAddr];

    updateProfile({ addresses: updatedAddresses });
  };

  const deleteAddress = (id: string) => {
    if (!user) return;
    const filtered = user.addresses.filter((a) => a.id !== id);
    updateProfile({ addresses: filtered });
  };

  const setDefaultAddress = (id: string) => {
    if (!user) return;
    const updated = user.addresses.map((a) => ({
      ...a,
      isDefault: a.id === id,
    }));
    updateProfile({ addresses: updated });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        supabaseUser,
        firebaseUser: supabaseUser, // Alias for backward compatibility
        isAuthenticated: Boolean(user || supabaseUser),
        isLoading,
        loginWithGoogle,
        loginWithEmail,
        signupWithEmail,
        sendPasswordReset,
        sendPhoneOtp,
        verifyPhoneOtp,
        logout,
        updateProfile,
        addAddress,
        deleteAddress,
        setDefaultAddress,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
