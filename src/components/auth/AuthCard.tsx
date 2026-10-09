"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, Mail, ShieldCheck, Sparkles, CheckCircle2, Lock } from "lucide-react";
import GoogleAuthButton from "./GoogleAuthButton";
import PhoneLoginForm from "./PhoneLoginForm";
import EmailLoginForm from "./EmailLoginForm";
import EmailSignupForm from "./EmailSignupForm";

interface AuthCardProps {
  initialMode?: "login" | "signup";
  initialMethod?: "phone" | "email";
  redirectTo?: string;
  onSuccess?: () => void;
  title?: string;
  subtitle?: string;
}

export default function AuthCard({
  initialMode = "login",
  initialMethod = "email",
  redirectTo,
  onSuccess,
  title,
  subtitle,
}: AuthCardProps) {
  const [mode, setMode] = useState<"login" | "signup">(initialMode);
  const [method, setMethod] = useState<"phone" | "email">(initialMethod);

  return (
    <div className="bg-white border border-[#E8E3DA] p-6 sm:p-8 shadow-luxury space-y-6 max-w-md w-full relative">
      {/* Top Accent Strip */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#B38E5D] via-[#D4AF37] to-[#B38E5D]" />

      {/* Heading */}
      <div className="text-center space-y-1">
        <span className="text-[10px] font-mono uppercase font-bold text-[#B38E5D] tracking-widest">
          Instant Stationary Member Club
        </span>
        <h2 className="font-serif text-2xl font-bold uppercase tracking-tight text-gray-900">
          {title || (mode === "login" ? "Welcome Back" : "Create Account")}
        </h2>
        <p className="text-xs text-gray-500">
          {subtitle ||
            (mode === "login"
              ? "Access order tracking, saved wishlist & member discounts"
              : "Sign up today and get 100 loyalty welcome reward points")}
        </p>
      </div>

      {/* Option 1: Continue with Google */}
      <div>
        <GoogleAuthButton
          redirectTo={redirectTo}
          onSuccess={onSuccess}
          label={mode === "login" ? "Continue with Google" : "Sign up with Google"}
        />
      </div>

      {/* Divider */}
      <div className="relative flex items-center justify-center">
        <div className="border-t border-[#E8E3DA] w-full" />
        <span className="bg-white px-3 text-[10px] font-bold uppercase tracking-widest text-gray-400 absolute">
          Or Continue With
        </span>
      </div>

      {/* Option 2 & 3: Method Selector (Phone OTP vs Email) */}
      <div className="grid grid-cols-2 p-1 bg-[#FAF8F5] border border-[#E8E3DA] rounded text-xs">
        <button
          type="button"
          onClick={() => setMethod("phone")}
          className={`py-2 px-3 font-bold uppercase tracking-wider text-[11px] flex items-center justify-center gap-1.5 transition-all rounded ${
            method === "phone"
              ? "bg-[#1C1C1C] text-white shadow-xs"
              : "text-gray-600 hover:text-black"
          }`}
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Phone OTP</span>
        </button>

        <button
          type="button"
          onClick={() => setMethod("email")}
          className={`py-2 px-3 font-bold uppercase tracking-wider text-[11px] flex items-center justify-center gap-1.5 transition-all rounded ${
            method === "email"
              ? "bg-[#1C1C1C] text-white shadow-xs"
              : "text-gray-600 hover:text-black"
          }`}
        >
          <Mail className="w-3.5 h-3.5" />
          <span>Email & Pass</span>
        </button>
      </div>

      {/* Active Form Body */}
      <div>
        {method === "phone" ? (
          <PhoneLoginForm
            redirectTo={redirectTo}
            onSuccess={onSuccess}
            isSignup={mode === "signup"}
          />
        ) : mode === "login" ? (
          <EmailLoginForm redirectTo={redirectTo} onSuccess={onSuccess} />
        ) : (
          <EmailSignupForm redirectTo={redirectTo} onSuccess={onSuccess} />
        )}
      </div>

      {/* Switcher Footer between Sign In & Create Account */}
      <div className="pt-4 border-t border-gray-100 text-center text-xs text-gray-500">
        {mode === "login" ? (
          <p>
            New to Instant Stationary?{" "}
            <button
              type="button"
              onClick={() => setMode("signup")}
              className="text-black font-bold hover:underline"
            >
              Create an Account →
            </button>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => setMode("login")}
              className="text-black font-bold hover:underline"
            >
              Sign In Instead →
            </button>
          </p>
        )}
      </div>

      {/* Trust & Security Badges */}
      <div className="flex items-center justify-center gap-4 text-[10px] text-gray-400 pt-1">
        <span className="flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>256-Bit SSL Encrypted</span>
        </span>
        <span>•</span>
        <span className="flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-[#B38E5D]" />
          <span>Instant WhatsApp OTP</span>
        </span>
      </div>
    </div>
  );
}
