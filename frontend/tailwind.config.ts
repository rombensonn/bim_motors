import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F5F6F8",
        ink: "#111111",
        muted: "#5D6470",
        bmw: "#0072CE",
        orange: "#FF8A1F",
        trust: "#28C76F",
        graphite: "#111827"
      },
      boxShadow: {
        soft: "0 22px 70px rgba(17, 24, 39, 0.10)",
        card: "0 16px 44px rgba(17, 24, 39, 0.08)"
      },
      borderRadius: {
        "3xl": "1.75rem",
        "4xl": "2rem"
      }
    }
  },
  plugins: []
};

export default config;
