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
        background: "#0A0A0B",
        surface: "#141416",
        "surface-elevated": "#1C1C1F",
        border: "#27272A",
        primary: "#8B5CF6",
        secondary: "#6366F1",
        accent: "#FB923C",
        "text-primary": "#FAFAFA",
        "text-secondary": "#A1A1AA",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        mesh: "radial-gradient(at 40% 20%, hsla(240, 80%, 20%, 0.3) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(240, 80%, 30%, 0.2) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(240, 80%, 25%, 0.2) 0px, transparent 50%)",
      },
      animation: {
        "float": "float 20s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "slide-up": "slide-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(40px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;