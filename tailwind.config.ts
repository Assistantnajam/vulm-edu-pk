import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sidebar: "#2a2c3c",
        sidebarActive: "#72727a",
        page: "#f1f2f7",
        brand: "#6c5ccf",
        brandDark: "#5b4db8",
        danger: "#e8335d",
        ok: "#1fb768",
        info: "#2f9bf0",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      boxShadow: {
        card: "6px 6px 6px rgba(0,0,0,0.28)",
        panel: "0 1px 6px rgba(20,20,60,0.08)",
      },
      keyframes: {
        fadeIn: { from: { opacity: "0" }, to: { opacity: "1" } },
        tick: { "0%": { opacity: "1" }, "100%": { opacity: "0.12" } },
      },
      animation: { fadeIn: "fadeIn .35s ease-out both" },
    },
  },
  plugins: [],
};
export default config;
