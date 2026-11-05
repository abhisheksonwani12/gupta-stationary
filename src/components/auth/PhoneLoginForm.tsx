"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Phone, ArrowRight, AlertCircle, Edit2, Clock } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { executeRecaptcha, verifyRecaptchaToken } from "@/lib/recaptcha";

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
  const [otpDigits, setOtpDigits] = useState<string[]>(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(30);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [demoCode, setDemoCode] = useState("199001");

  const otpInputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  // Helper to format 10 digits as "XXXXX XXXXX"
  const formatPhone = (p: string) => {
    const clean = p.replace(/[^0-9]/g, "").slice(-10);
    if (clean.length === 10) {
      return `${clean.slice(0, 5)} ${clean.slice(5)}`;
    }
    return clean;
  };

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
    // Execute Google reCAPTCHA Enterprise risk assessment token
    const token = await executeRecaptcha("LOGIN");
    if (token) {
      verifyRecaptchaToken(token, "LOGIN").catch(() => {});
    }

    const res = await sendPhoneOtp(clean, "recaptcha-container");
    setLoading(false);

    if (res.success) {
      setStep("otp");
      setTimer(30);
      const code = res.otp || "199001";
      setDemoCode(code);
      setTimeout(() => otpInputRefs[0].current?.focus(), 150);
    } else {
      setError(res.message || "Failed to send verification code. Please try again.");
    }
  };

  const submitOtp = async (codeToVerify: string) => {
    if (codeToVerify.length < 4) {
      setError("Please enter the complete verification code.");
      return;
    }

    setLoading(true);
    setError("");
    const res = await verifyPhoneOtp(phone, codeToVerify, fullName || undefined);
    setLoading(false);

    if (res.success) {
      if (onSuccess) onSuccess();
      if (redirectTo) router.push(redirectTo);
    } else {
      setError(res.message || "Invalid verification code. Try test code: 199001");
    }
  };

  const handleOtpDigitChange = (index: number, value: string) => {
    const char = value.replace(/[^0-9]/g, "").slice(-1);
    const updated = [...otpDigits];
    updated[index] = char;
    setOtpDigits(updated);

    if (char && index < 5) {
      otpInputRefs[index + 1].current?.focus();
    }

    // Auto-verify if all 6 digits are typed
    const code = updated.join("");
    if (code.length === 6 && !updated.includes("")) {
      submitOtp(code);
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otpDigits[index] && index > 0) {
      otpInputRefs[index - 1].current?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/[^0-9]/g, "");
    if (!pasted) return;
    const digits = pasted.slice(0, 6).split("");
    const updated = [...otpDigits];
    digits.forEach((d, i) => {
      if (i < 6) updated[i] = d;
    });
    setOtpDigits(updated);

    if (digits.length >= 6) {
      otpInputRefs[5].current?.focus();
      submitOtp(digits.slice(0, 6).join(""));
    } else {
      otpInputRefs[digits.length]?.current?.focus();
    }
  };

  const handleAutoFill = () => {
    const digits = (demoCode || "199001").slice(0, 6).split("");
    while (digits.length < 6) digits.push("0");
    setOtpDigits(digits);
    setTimeout(() => {
      submitOtp(digits.join(""));
    }, 120);
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    const fullOtp = otpDigits.join("");
    await submitOtp(fullOtp);
  };

  const handleResendOtp = async () => {
    if (timer > 0) return;
    setTimer(30);
    setOtpDigits(["", "", "", "", "", ""]);
    const res = await sendPhoneOtp(phone, "recaptcha-container");
    if (res.success) {
      const code = res.otp || "199001";
      setDemoCode(code);
      setTimeout(() => otpInputRefs[0].current?.focus(), 100);
    }
  };

  return (
    <div className="space-y-4 text-xs">
      {/* Invisible Firebase reCAPTCHA target */}
      <div id="recaptcha-container" />

      {error && (
        <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2 rounded-md animate-in fade-in">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {step === "input" ? (
        <form onSubmit={handleSendOtp} className="space-y-4">
          {isSignup && (
            <div>
              <label className="block font-semibold text-gray-800 mb-1 text-xs">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Rahul Verma"
                className="w-full p-3 bg-[#FAF8F5] border border-[#E8E3DA] rounded-md text-gray-900 focus:outline-none focus:border-black font-medium"
              />
            </div>
          )}

          <div>
            <label className="block font-semibold text-gray-800 mb-1 text-xs">
              Mobile Number *
            </label>
            <div className="flex">
              <div className="flex items-center gap-1.5 px-3 bg-[#FAF8F5] border border-r-0 border-[#E8E3DA] rounded-l-md text-gray-700 font-semibold select-none text-xs">
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
                className="w-full p-3 bg-white border border-[#E8E3DA] rounded-r-md text-gray-900 font-semibold tracking-wider text-sm focus:outline-none focus:border-black"
              />
            </div>
            <p className="text-[11px] text-gray-500 mt-1.5">
              We will send a 6-digit verification code to this mobile number.
            </p>
          </div>

          <button
            type="submit"
            disabled={loading || phone.replace(/[^0-9]/g, "").length < 10}
            className="w-full py-3.5 bg-[#1C1C1C] hover:bg-black text-white text-xs font-semibold rounded-md transition-colors flex items-center justify-center gap-2 shadow-xs disabled:opacity-50"
          >
            <span>{loading ? "Sending Code..." : "Get Verification Code"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      ) : (
        <form onSubmit={handleVerifyOtp} className="space-y-4">
          {/* Top Phone summary pill with Change action */}
          <div className="p-3 bg-[#FAF8F5] border border-[#E8E3DA] rounded-md flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white border border-[#E8E3DA] flex items-center justify-center text-gray-700 shrink-0">
                <Phone className="w-3.5 h-3.5 text-[#B38E5D]" />
              </div>
              <div>
                <div className="text-[10px] text-gray-500 font-medium">
                  Verification code sent to
                </div>
                <div className="font-bold text-gray-900 text-xs tracking-wide">
                  +91 {formatPhone(phone)}
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                setStep("input");
                setError("");
              }}
              className="text-[#B38E5D] hover:text-black hover:underline font-semibold text-xs flex items-center gap-1 transition-colors"
            >
              <Edit2 className="w-3 h-3" />
              <span>Change</span>
            </button>
          </div>

          {/* Heading */}
          <div className="text-center pt-1 space-y-0.5">
            <p className="text-xs font-semibold text-gray-900">
              Enter 6-digit verification code
            </p>
            <p className="text-[11px] text-gray-500">
              Check your SMS inbox for the code
            </p>
          </div>

          {/* 6 Digit Inputs */}
          <div>
            <div className="flex justify-center gap-2 sm:gap-2.5 py-1">
              {otpDigits.map((digit, idx) => (
                <input
                  key={idx}
                  ref={otpInputRefs[idx]}
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpDigitChange(idx, e.target.value)}
                  onKeyDown={(e) => handleOtpKeyDown(idx, e)}
                  onPaste={handlePaste}
                  className={`w-10 sm:w-11 h-12 sm:h-13 text-center text-lg sm:text-xl font-bold font-mono rounded-md border transition-all ${
                    digit
                      ? "border-black bg-white text-gray-900 shadow-xs"
                      : "border-gray-300 bg-white text-gray-900 hover:border-gray-400"
                  } focus:border-black focus:ring-1 focus:ring-black focus:outline-none`}
                />
              ))}
            </div>
          </div>

          {/* Resend and Countdown row */}
          <div className="flex items-center justify-between text-xs pt-0.5 px-0.5">
            <span className="text-gray-500 text-[11px] flex items-center gap-1.5">
              {timer > 0 ? (
                <>
                  <Clock className="w-3.5 h-3.5 text-gray-400" />
                  <span>
                    Resend code in <strong className="font-semibold text-gray-800">{timer}s</strong>
                  </span>
                </>
              ) : (
                <span>Didn&apos;t receive code?</span>
              )}
            </span>
            <button
              type="button"
              onClick={handleResendOtp}
              disabled={timer > 0}
              className={`text-[11px] font-semibold transition-colors ${
                timer === 0
                  ? "text-[#B38E5D] hover:underline hover:text-black cursor-pointer"
                  : "text-gray-400 cursor-not-allowed"
              }`}
            >
              Resend SMS
            </button>
          </div>

          {/* Action Button */}
          <button
            type="submit"
            disabled={loading || otpDigits.join("").length < 4}
            className="w-full py-3.5 bg-[#1C1C1C] hover:bg-black text-white text-xs font-semibold rounded-md transition-colors flex items-center justify-center gap-2 shadow-xs disabled:opacity-40 disabled:cursor-not-allowed mt-2"
          >
            {loading ? (
              <>
                <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Verifying...</span>
              </>
            ) : (
              <>
                <span>{isSignup ? "Verify & Create Account" : "Verify & Sign In"}</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>

          {/* Discreet Local Testing Helper */}
          <div className="text-center pt-2 border-t border-gray-100">
            <button
              type="button"
              onClick={handleAutoFill}
              className="text-[11px] text-gray-400 hover:text-gray-700 transition-colors inline-flex items-center gap-1.5"
            >
              <span>Test environment:</span>
              <span className="font-medium underline decoration-dotted text-gray-600 hover:text-black">
                Use test code (199001)
              </span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
