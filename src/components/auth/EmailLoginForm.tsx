"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock, Eye, EyeOff, ArrowRight, AlertCircle } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

interface EmailLoginFormProps {
  redirectTo?: string;
  onSuccess?: () => void;
}

export default function EmailLoginForm({ redirectTo, onSuccess }: EmailLoginFormProps) {
  const { loginWithEmail } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in both email and password.");
      return;
    }

    setLoading(true);
    const res = await loginWithEmail(email, password);
    setLoading(false);

    if (res.success) {
      if (onSuccess) onSuccess();
      if (redirectTo) router.push(redirectTo);
    } else {
      setError(res.message || "Invalid credentials.");
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
            placeholder="name@school.edu or company.com"
            className="w-full pl-10 pr-3 py-3 bg-[#FAF8F5] border border-[#E8E3DA] text-gray-900 focus:outline-none focus:border-black focus:bg-white transition-colors font-medium"
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-1">
          <label className="font-bold text-gray-800 uppercase tracking-wider text-[10px]">
            Password *
          </label>
          <Link
            href="/forgot-password"
            className="text-[#B38E5D] hover:underline font-bold text-[11px]"
          >
            Forgot Password?
          </Link>
        </div>
        <div className="relative">
          <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type={showPassword ? "text" : "password"}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full pl-10 pr-10 py-3 bg-[#FAF8F5] border border-[#E8E3DA] text-gray-900 focus:outline-none focus:border-black focus:bg-white transition-colors"
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

      <div className="flex items-center justify-between text-[11px] pt-1">
        <label className="flex items-center gap-2 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="rounded border-gray-300 text-black focus:ring-0"
          />
          <span className="text-gray-700">Remember this device for 30 days</span>
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 bg-[#1C1C1C] hover:bg-[#B38E5D] text-white text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
      >
        <span>{loading ? "Authenticating..." : "Sign In with Email"}</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  );
}
