"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { isAuthorizedAdminEmail } from "@/lib/auth/adminAuth";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname === "/admin/login") {
      setIsAuthenticated(true);
      return;
    }

    try {
      const session = sessionStorage.getItem("instant_admin_session") || sessionStorage.getItem("gupta_admin_session");
      const adminEmail = sessionStorage.getItem("admin_email");

      if (session === "authenticated" && (!adminEmail || isAuthorizedAdminEmail(adminEmail))) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        router.push("/admin/login");
      }
    } catch (e) {
      setIsAuthenticated(false);
      router.push("/admin/login");
    }
  }, [pathname, router]);

  // Global listener for opening/closing mobile sidebar from any header or child
  useEffect(() => {
    const handleToggle = () => setIsMobileSidebarOpen((prev) => !prev);
    const handleClose = () => setIsMobileSidebarOpen(false);

    window.addEventListener("toggle_admin_sidebar", handleToggle);
    window.addEventListener("close_admin_sidebar", handleClose);

    return () => {
      window.removeEventListener("toggle_admin_sidebar", handleToggle);
      window.removeEventListener("close_admin_sidebar", handleClose);
    };
  }, []);

  // Close mobile sidebar on route change
  useEffect(() => {
    setIsMobileSidebarOpen(false);
  }, [pathname]);

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-[#141414] flex items-center justify-center text-white">
        <div className="w-8 h-8 border-2 border-[#B38E5D] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF8F5] flex">
      {/* Admin Sidebar */}
      <AdminSidebar
        isMobileOpen={isMobileSidebarOpen}
        onCloseMobile={() => setIsMobileSidebarOpen(false)}
      />

      {/* Backdrop for mobile */}
      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden backdrop-blur-sm"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
