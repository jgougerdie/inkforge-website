import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FFFFFF",
        "paper-soft": "#F7F8FB",
        "paper-deep": "#F1F2F8",
        ink: "#14161F",
        "ink-soft": "#3A3D4B",
        "ink-muted": "#687280",
        border: "#E4E6ED",
        brand: {
          50: "#EEF0FF",
          100: "#E0E4FF",
          400: "#7B74F2",
          500: "#6259E8",
          600: "#4F42DB",
          700: "#4133C0",
          900: "#231C63",
        },
        marketing: { fg: "#4338CA", bg: "#EEF0FF" },
        tax: { fg: "#0F766E", bg: "#ECFDF9" },
        mindset: { fg: "#BE123C", bg: "#FFF0F3" },
        cashflow: { fg: "#B45309", bg: "#FFF7E8" },
      },
      fontFamily: {
        display: ["Sora", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "40rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(20, 22, 31, 0.04), 0 1px 3px rgba(20, 22, 31, 0.06)",
        "card-hover": "0 4px 10px rgba(20, 22, 31, 0.06), 0 2px 4px rgba(20, 22, 31, 0.06)",
      },
    },
  },
  plugins: [],
} satisfies Config;
