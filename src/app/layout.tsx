import type { Metadata } from "next";
import Script from "next/script";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { AuthProvider } from "@/context/AuthContext";
import { InventoryProvider } from "@/context/InventoryContext";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Instant Stationary | Quality Stationery & Office Supplies — Raipur",
  description:
    "Eco-friendly, Premium Quality Stationery at the Lowest Prices. Instant delivery for schools, offices, and bulk buyers.",
  keywords: [
    "instant stationary",
    "stationery raipur",
    "instant stationery",
    "wholesale stationery",
    "eco friendly pens",
    "recycled notebooks",
    "office stationery supplier raipur",
    "school stationery bulk",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&family=Cormorant+Garamond:wght@500;600;700&family=Geist:wght@300;400;500;600;700;800&family=Geist+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <Script
          src="https://www.google.com/recaptcha/enterprise.js?render=6Lct3RAuAAAAAGnOLFw_1sAuC36F0bQugphvOWzm"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-white text-[#1C1C1C] antialiased selection:bg-[#B38E5D] selection:text-white">
        <AuthProvider>
          <InventoryProvider>
            <CartProvider>
              <WishlistProvider>
                <Navbar />
                <main className="flex-1">{children}</main>
                <Footer />
              </WishlistProvider>
            </CartProvider>
          </InventoryProvider>
        </AuthProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
