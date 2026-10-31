"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import AuthCard from "@/components/auth/AuthCard";

function LoginContent() {
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/account";

  return (
    <div className="min-h-[80vh] bg-[#FDFCFB] flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-4">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-[#8A8780] hover:text-[#18181B] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Storefront</span>
          </Link>
        </div>

        <AuthCard initialMode="login" redirectTo={redirect} />
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-xs text-gray-500">Loading sign in...</div>}>
      <LoginContent />
    </Suspense>
  );
}
