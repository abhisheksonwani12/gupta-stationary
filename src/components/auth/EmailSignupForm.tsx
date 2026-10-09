"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  Building,
  ArrowRight,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";

interface EmailSignupFormProps {
  redirectTo?: string;
  onSuccess?: () => void;
}

export default function EmailSignupForm({ redirectTo, onSuccess }: EmailSignupFormProps) {
  const { signupWithEmail } = useAuth();
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isWholesale, setIsWholesale] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [gstNumber, setGstNumber] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!agreeTerms) {
      setError("Please agree to the Terms of Service to continue.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);
    const res = await signupWithEmail({
      name,
      email,
      phone,
      password,
      isWholesale,
      companyName: isWholesale ? companyName : undefined,
      gstNumber: isWholesale ? gstNumber : undefined,
    });
    setLoading(false);

    if (res.success) {
      if (onSuccess) onSuccess();
      if (redirectTo) router.push(redirectTo);
    } else {
      setError(res.message || "Failed to create account.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-xs">
      {error && (
        <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2 animate-in fade-in">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Full Name */}
      <div>
        <label className="block font-bold text-gray-800 mb-1 uppercase tracking-wider text-[10px]">
          Full Name *
        </label>
        <div className="relative">
          <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Ramesh Agrawal"
            className="w-full pl-10 pr-3 py-3 bg-[#FAF8F5] border border-[#E8E3DA] text-gray-900 focus:outline-none focus:border-black focus:bg-white"
          />
        </div>
      </div>

      {/* Grid: Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block font-bold text-gray-800 mb-1 uppercase tracking-wider text-[10px]">
            Email Address *
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@gmail.com"
              className="w-full pl-10 pr-3 py-3 bg-[#FAF8F5] border border-[#E8E3DA] text-gray-900 focus:outline-none focus:border-black focus:bg-white text-[11px]"
            />
          </div>
        </div>

        <div>
          <label className="block font-bold text-gray-800 mb-1 uppercase tracking-wider text-[10px]">
            Mobile Number *
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="tel"
              required
              maxLength={10}
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ""))}
              placeholder="9827100000"
              className="w-full pl-10 pr-3 py-3 bg-[#FAF8F5] border border-[#E8E3DA] text-gray-900 focus:outline-none focus:border-black focus:bg-white font-mono text-[11px]"
            />
          </div>
        </div>
      </div>

      {/* Password */}
      <div>
        <label className="block font-bold text-gray-800 mb-1 uppercase tracking-wider text-[10px]">
          Create Secure Password (Min 6 Characters) *
        </label>
        <div className="relative">
          <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type={showPassword ? "text" : "password"}
            required
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full pl-10 pr-10 py-3 bg-[#FAF8F5] border border-[#E8E3DA] text-gray-900 focus:outline-none focus:border-black focus:bg-white"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="p-1.5 text-gray-400 hover:text-gray-700 absolute right-2.5 top-1/2 -translate-y-1/2"
            tabIndex={-1}
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Wholesale / Institutional Checkbox */}
      <div className="p-3 bg-[#FAF8F5] border border-[#E8E3DA] space-y-3">
        <label className="flex items-start gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            checked={isWholesale}
            onChange={(e) => setIsWholesale(e.target.checked)}
            className="mt-0.5 rounded text-black focus:ring-0"
          />
          <div>
            <span className="font-bold text-gray-900 block">
              Register as School, College or Corporate Buyer
            </span>
            <span className="text-[11px] text-gray-500">
              Unlocks wholesale tier pricing & GST tax invoicing on orders.
            </span>
          </div>
        </label>

        {isWholesale && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-gray-200 animate-in fade-in">
            <div>
              <label className="block font-bold text-gray-700 mb-1 text-[10px]">
                Organization / Business Name *
              </label>
              <input
                type="text"
                required={isWholesale}
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="e.g. DPS Raipur or Hira Group"
                className="w-full p-2 bg-white border border-[#E8E3DA] text-xs focus:outline-none focus:border-black"
              />
            </div>
            <div>
              <label className="block font-bold text-gray-700 mb-1 text-[10px]">
                GSTIN Number (Optional)
              </label>
              <input
                type="text"
                value={gstNumber}
                onChange={(e) => setGstNumber(e.target.value.toUpperCase())}
                placeholder="22AAAAA0000A1Z5"
                className="w-full p-2 bg-white border border-[#E8E3DA] font-mono text-xs uppercase focus:outline-none focus:border-black"
              />
            </div>
          </div>
        )}
      </div>

      {/* Terms Agreement */}
      <label className="flex items-center gap-2 text-[11px] text-gray-600 cursor-pointer pt-1">
        <input
          type="checkbox"
          checked={agreeTerms}
          onChange={(e) => setAgreeTerms(e.target.checked)}
          className="rounded border-gray-300 text-black focus:ring-0"
        />
        <span>
          I agree to the{" "}
          <Link href="/terms-and-conditions" target="_blank" className="underline font-bold text-black">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy-policy" target="_blank" className="underline font-bold text-black">
            Privacy Policy
          </Link>
          .
        </span>
      </label>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 bg-[#1C1C1C] hover:bg-[#B38E5D] text-white text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
      >
        <span>{loading ? "Creating Account..." : "Create Account & Get 100 Reward Points"}</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  );
}
