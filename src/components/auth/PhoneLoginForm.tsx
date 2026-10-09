"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Phone, ArrowRight, CheckCircle2, AlertCircle, RefreshCw, Edit2, ShieldCheck } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

interface PhoneLoginFormProps {
  redirectTo?: string;
  onSuccess?: () => void;
  isSignup?: boolean;
}

export default function PhoneLoginForm({
  redirectTo,
  onSuccess,
  isSignup = false,
}: PhoneLoginFormProps) {
  const { sendPhoneOtp, verifyPhoneOtp } = useAuth();
  const router = useRouter();

  // Steps: "input" | "otp"
  const [step, setStep] = useState<"input" | "otp">("input");
  const [phone, setPhone] = useState("");
  const [fullName, setFullName] = useState("");
  const [otpDigits, setOtpDigits] = useState<string[]>(["", "", "", ""]);
  const [timer, setTimer] = useState(30);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [demoHint, setDemoHint] = useState("");

  const otpInputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  // Timer countdown
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (step === "otp" && timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [step, timer]);

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const clean = phone.replace(/[^0-9]/g, "");
    if (clean.length < 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    setLoading(true);
    const res = await sendPhoneOtp(clean);
    setLoading(false);

    if (res.success) {
      setStep("otp");
      setTimer(30);
      setDemoHint(`Demo OTP: ${res.otp || "1990"}`);
      setTimeout(() => otpInputRefs[0].current?.focus(), 100);
    } else {
      setError(res.message || "Failed to send OTP. Please try again.");
    }
  };

  const handleOtpDigitChange = (index: number, value: string) => {
    const char = value.slice(-1);
    const updated = [...otpDigits];
    updated[index] = char;
    setOtpDigits(updated);

    if (char && index < 3) {
      otpInputRefs[index + 1].current?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otpDigits[index] && index > 0) {
      otpInputRefs[index - 1].current?.focus();
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const fullOtp = otpDigits.join("");
    if (fullOtp.length < 4) {
      setError("Please enter the complete 4-digit OTP.");
      return;
    }

    setLoading(true);
    const res = await verifyPhoneOtp(phone, fullOtp, fullName || undefined);
    setLoading(false);

    if (res.success) {
      if (onSuccess) onSuccess();
      if (redirectTo) router.push(redirectTo);
    } else {
      setError(res.message || "Invalid OTP code. Try 1990.");
    }
  };

  const handleResendOtp = async () => {
    if (timer > 0) return;
    setTimer(30);
    setOtpDigits(["", "", "", ""]);
    const res = await sendPhoneOtp(phone);
    if (res.success) {
      setDemoHint(`Demo OTP: ${res.otp || "1990"}`);
    }
  };

  return (
    <div className="space-y-4 text-xs">
      {error && (
        <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2 animate-in fade-in">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {step === "input" ? (
        <form onSubmit={handleSendOtp} className="space-y-4">
          {isSignup && (
            <div>
              <label className="block font-bold text-gray-800 mb-1 uppercase tracking-wider text-[10px]">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Rahul Verma"
                className="w-full p-3 bg-[#FAF8F5] border border-[#E8E3DA] text-gray-900 focus:outline-none focus:border-black"
              />
            </div>
          )}

          <div>
            <label className="block font-bold text-gray-800 mb-1 uppercase tracking-wider text-[10px]">
              Mobile Number *
            </label>
            <div className="flex">
              <div className="flex items-center gap-1 px-3 bg-[#FAF8F5] border border-r-0 border-[#E8E3DA] text-gray-700 font-bold select-none text-xs">
                <span>🇮🇳</span>
                <span>+91</span>
              </div>
              <input
                type="tel"
                required
                maxLength={10}
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ""))}
                placeholder="9827100000"
                className="w-full p-3 bg-white border border-[#E8E3DA] text-gray-900 font-semibold tracking-wider text-sm focus:outline-none focus:border-black"
              />
            </div>
            <p className="text-[11px] text-gray-500 mt-1">
              We will send a 4-digit verification code via WhatsApp / SMS.
            </p>
          </div>

          <button
            type="submit"
            disabled={loading || phone.length < 10}
            className="w-full py-3.5 bg-[#1C1C1C] hover:bg-[#B38E5D] text-white text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
          >
            <span>{loading ? "Sending Code..." : "Get OTP Verification Code"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      ) : (
        <form onSubmit={handleVerifyOtp} className="space-y-4">
          {/* Top Phone Tag with Edit Button */}
          <div className="p-3 bg-[#FAF8F5] border border-[#E8E3DA] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#B38E5D]" />
              <span className="font-bold text-gray-900">+91 {phone.slice(-10)}</span>
            </div>
            <button
              type="button"
              onClick={() => setStep("input")}
              className="text-[#B38E5D] hover:underline font-bold text-[11px] flex items-center gap-1"
            >
              <Edit2 className="w-3 h-3" />
              <span>Change</span>
            </button>
          </div>

          {demoHint && (
            <div className="p-2.5 bg-amber-50 border border-amber-200 text-amber-900 text-[11px] font-semibold flex items-center justify-between">
              <span>{demoHint}</span>
              <button
                type="button"
                onClick={() => {
                  setOtpDigits(["1", "9", "9", "0"]);
                }}
                className="text-[10px] bg-amber-200 hover:bg-amber-300 text-amber-900 px-2 py-0.5 font-bold uppercase"
              >
                Auto-fill
              </button>
            </div>
          )}

          <div>
            <label className="block font-bold text-gray-800 mb-2 uppercase tracking-wider text-[10px] text-center">
              Enter 4-Digit OTP Code
            </label>
            <div className="flex justify-center gap-3">
              {otpDigits.map((digit, idx) => (
                <input
                  key={idx}
                  ref={otpInputRefs[idx]}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpDigitChange(idx, e.target.value)}
                  onKeyDown={(e) => handleOtpKeyDown(idx, e)}
                  className="w-12 h-14 text-center text-xl font-bold font-mono bg-[#FAF8F5] border-2 border-[#E8E3DA] focus:border-black focus:bg-white focus:outline-none transition-colors"
                />
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] pt-1">
            <span className="text-gray-500">
              {timer > 0 ? (
                `Resend code in ${timer}s`
              ) : (
                <span className="text-gray-700">Didn&apos;t receive the code?</span>
              )}
            </span>
            <button
              type="button"
              onClick={handleResendOtp}
              disabled={timer > 0}
              className={`font-bold ${
                timer === 0
                  ? "text-[#B38E5D] hover:underline cursor-pointer"
                  : "text-gray-400 cursor-not-allowed"
              }`}
            >
              Resend OTP
            </button>
          </div>

          <button
            type="submit"
            disabled={loading || otpDigits.join("").length < 4}
            className="w-full py-3.5 bg-[#1C1C1C] hover:bg-[#B38E5D] text-white text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
          >
            <span>{loading ? "Verifying..." : "Verify & Log In"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      )}
    </div>
  );
}
