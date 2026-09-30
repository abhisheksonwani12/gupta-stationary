import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          50: "#fbf8f3",
          100: "#f6efe4",
          200: "#eddcc6",
          300: "#e1c2a0",
          400: "#d3a378",
          500: "#c38656",
          600: "#aa6b43",
          700: "#895037",
          800: "#704131",
          900: "#5d372c",
          950: "#341c16",
        },
        navy: {
          900: "#0f172a",
          950: "#090d16",
        },
        paper: {
          DEFAULT: "#FAF8F5",
          warm: "#F5F2EC",
          border: "#E8E3DA",
        }
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Geist", "Inter", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        serif: ["var(--font-geist-sans)", "Geist", "serif"],
      },
      letterSpacing: {
        luxury: "0.12em",
      },
      boxShadow: {
        luxury: "0 10px 30px -10px rgba(0,0,0,0.08)",
        soft: "0 4px 20px -2px rgba(0,0,0,0.05)",
      }
    },
  },
  plugins: [],
};
export default config;
