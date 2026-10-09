"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Lock,
  ArrowRight,
  Store,
  AlertCircle,
  Eye,
  EyeOff,
  ShieldCheck,
} from "lucide-react";
import { auth } from "@/lib/firebase/client";
import { signInWithEmailAndPassword } from "firebase/auth";
import { isAuthorizedAdminEmail } from "@/lib/auth/adminAuth";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleAdminAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // 1. Authenticate with Firebase Auth
      const userCredential = await signInWithEmailAndPassword(auth, email.trim(), password);
      const userEmail = userCredential.user.email || email.trim();

      // 2. Strict Admin Role / Whitelist check
      if (!isAuthorizedAdminEmail(userEmail)) {
        await auth.signOut();
        sessionStorage.removeItem("instant_admin_session");
        sessionStorage.removeItem("gupta_admin_session");
        sessionStorage.removeItem("admin_email");
        throw new Error(
          "Access Denied: This account is registered as a customer and does not have administrative privileges."
        );
      }

      // 3. Mark admin session as authenticated
      sessionStorage.setItem("instant_admin_session", "authenticated");
      sessionStorage.setItem("gupta_admin_session", "authenticated");
      sessionStorage.setItem("admin_email", userEmail);

      router.push("/admin/dashboard");
    } catch (err: any) {
      console.error("Admin Auth Error:", err);
      let msg = "Invalid admin credentials. Please check your email and password.";
      if (err.code === "auth/invalid-credential" || err.code === "auth/wrong-password") {
        msg = "Incorrect password or email address.";
      } else if (err.code === "auth/user-not-found") {
        msg = "No user found with this email. Please create the admin user in the Firebase Console.";
      } else if (err.code === "auth/invalid-email") {
        msg = "Please enter a valid email address.";
      } else if (err.code === "auth/too-many-requests") {
        msg = "Too many failed attempts. Please try again later or reset your password.";
      } else if (err.message) {
        msg = err.message;
      }
      setError(msg);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#111111] text-gray-200 flex flex-col justify-center items-center p-4 selection:bg-[#B38E5D] selection:text-white">
      <div className="max-w-md w-full bg-[#1C1C1C] border border-[#333333] shadow-2xl p-8 space-y-6 relative overflow-hidden">
        {/* Top Gold Accent Bar */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#B38E5D] via-[#E6CA92] to-[#B38E5D]" />

        {/* Header Branding */}
        <div className="text-center space-y-2">
          <div className="w-14 h-14 mx-auto rounded-full bg-[#262626] border border-[#404040] flex items-center justify-center text-[#B38E5D] shadow-inner">
            <Lock className="w-7 h-7" />
          </div>
          <span className="text-[11px] font-mono uppercase text-[#B38E5D] tracking-[0.25em] block font-semibold">
            Instant Stationary
          </span>
          <h1 className="font-serif text-2xl font-bold uppercase tracking-tight text-white">
            Merchant Admin Access
          </h1>
          <p className="text-xs text-gray-400">
            Sign in with authorized Firebase credentials created in your console
          </p>
        </div>

        {/* Error Feedback */}
        {error && (
          <div className="p-3 bg-red-950/70 border border-red-800 text-red-300 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleAdminAuth} className="space-y-4 text-xs">
          <div>
            <label className="block font-bold text-gray-300 mb-1 uppercase tracking-wider text-[10px]">
              Admin Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#121212] border border-[#333333] text-white p-3 focus:outline-none focus:border-[#B38E5D] transition-colors"
              placeholder="admin@instantstationary.com"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block font-bold text-gray-300 uppercase tracking-wider text-[10px]">
                Admin Password
              </label>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#121212] border border-[#333333] text-white p-3 pr-10 focus:outline-none focus:border-[#B38E5D] transition-colors tracking-wide"
                placeholder="Enter Firebase password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white p-1"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 bg-[#B38E5D] hover:bg-[#9E7A4A] text-white text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 mt-2 shadow-lg disabled:opacity-50 active:scale-[0.99]"
          >
            <span>{isLoading ? "Authenticating with Firebase..." : "Sign In to Admin Portal"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Security Info */}
        <div className="p-3 bg-[#161616] border border-[#2A2A2A] rounded text-[11px] text-gray-400 flex items-start gap-2">
          <ShieldCheck className="w-4 h-4 text-[#B38E5D] shrink-0 mt-0.5" />
          <span>
            Admin accounts must be created and provisioned directly in the <strong>Firebase Console</strong> (Authentication &gt; Users).
          </span>
        </div>

        {/* Footer info */}
        <div className="pt-4 border-t border-[#262626] flex items-center justify-between text-xs text-gray-400">
          <Link
            href="/"
            className="hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <Store className="w-3.5 h-3.5 text-[#B38E5D]" />
            <span>Return to Store</span>
          </Link>
          <span className="text-[11px] text-gray-500 font-mono">Firebase Protected</span>
        </div>
      </div>
    </div>
  );
}
