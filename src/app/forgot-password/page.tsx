"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Mail, Phone, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function ForgotPasswordPage() {
  const { sendPasswordReset, sendPhoneOtp } = useAuth();
  const [method, setMethod] = useState<"email" | "phone">("email");
  const [inputValue, setInputValue] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!inputValue) {
      setError("Please enter your email or phone number.");
      return;
    }

    setLoading(true);
    if (method === "email") {
      const res = await sendPasswordReset(inputValue);
      setLoading(false);
      if (res.success) {
        setIsSubmitted(true);
      } else {
        setError(res.message || "Failed to send reset link.");
      }
    } else {
      const res = await sendPhoneOtp(inputValue);
      setLoading(false);
      if (res.success) {
        setIsSubmitted(true);
      } else {
        setError(res.message || "Failed to send OTP.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] py-16 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white border border-[#E8E3DA] p-8 shadow-luxury space-y-6 relative">
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#B38E5D] via-[#D4AF37] to-[#B38E5D]" />

        <div className="text-center space-y-1">
          <span className="text-[10px] font-mono uppercase font-bold text-[#B38E5D] tracking-widest">
            Account Security
          </span>
          <h1 className="font-serif text-2xl font-bold uppercase tracking-tight text-gray-900">
            Reset Password
          </h1>
          <p className="text-xs text-gray-500">
            Enter your registered mobile or email to receive a password reset link or OTP.
          </p>
        </div>

        {isSubmitted ? (
          <div className="p-6 bg-emerald-50 border border-emerald-200 text-center space-y-3">
            <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
            <h3 className="font-bold text-sm text-emerald-900">Verification Link Sent</h3>
            <p className="text-xs text-emerald-800 leading-relaxed">
              We have dispatched instructions to <strong>{inputValue}</strong>. Please check your inbox or WhatsApp messages.
            </p>
            <Link
              href="/login"
              className="inline-block mt-3 px-6 py-2.5 bg-[#1C1C1C] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#B38E5D] transition-colors"
            >
              Return to Sign In
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Method Toggle */}
            <div className="grid grid-cols-2 p-1 bg-[#FAF8F5] border border-[#E8E3DA] rounded">
              <button
                type="button"
                onClick={() => setMethod("phone")}
                className={`py-1.5 font-bold uppercase text-[10px] tracking-wider rounded ${
                  method === "phone" ? "bg-[#1C1C1C] text-white" : "text-gray-600"
                }`}
              >
                SMS / WhatsApp
              </button>
              <button
                type="button"
                onClick={() => setMethod("email")}
                className={`py-1.5 font-bold uppercase text-[10px] tracking-wider rounded ${
                  method === "email" ? "bg-[#1C1C1C] text-white" : "text-gray-600"
                }`}
              >
                Email Address
              </button>
            </div>

            <div>
              <label className="block font-bold text-gray-800 mb-1 uppercase tracking-wider text-[10px]">
                {method === "phone" ? "Mobile Number *" : "Registered Email *"}
              </label>
              <input
                type={method === "phone" ? "tel" : "email"}
                required
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={method === "phone" ? "9827100000" : "name@domain.com"}
                className="w-full p-3 bg-[#FAF8F5] border border-[#E8E3DA] text-gray-900 focus:outline-none focus:border-black font-medium"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-[#1C1C1C] hover:bg-[#B38E5D] text-white font-bold uppercase tracking-widest text-xs transition-colors shadow-sm disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Reset Code / Link"}
            </button>
          </form>
        )}

        <div className="pt-4 border-t border-gray-100 text-center text-xs">
          <Link
            href="/login"
            className="text-gray-600 hover:text-black font-bold inline-flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Sign In</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
