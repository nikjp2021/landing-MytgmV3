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
         background: "#030305",
         surface: "#0C0C0F",
         "surface-elevated": "#141418",
         surfaceHover: "#1A1A1F",
         border: "#27272A",
         borderLight: "#3A3A40",
         primary: "#A78BFA",
         primaryLight: "#C4B5FD",
         primaryDark: "#7C3AED",
         secondary: "#6366F1",
         secondaryLight: "#818CF8",
         accent: "#F97316",
         accentLight: "#FB923C",
         accentGlow: "#FF6B35",
         glow: "#8B5CF6",
         glowSecondary: "#6366F1",
         "text-primary": "#FAFAFA",
         "text-secondary": "#A1A1AA",
         "text-muted": "#71717A",
         success: "#10B981",
         warning: "#F59E0B",
         error: "#EF4444",
         // Japan-inspired colors
         "japan-navy": "#0A1628",
         "japan-gold": "#FFD700",
         "japan-red": "#BC002D",
       },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "premium-gradient": "linear-gradient(135deg, #7C3AED 0%, #6366F1 50%, #8B5CF6 100%)",
        "aurora": 
          "radial-gradient(at 40% 20%, rgba(124, 58, 237, 0.4) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(99, 102, 241, 0.3) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(139, 92, 246, 0.25) 0px, transparent 50%), radial-gradient(at 80% 50%, rgba(99, 102, 241, 0.2) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(124, 58, 237, 0.3) 0px, transparent 50%)",
        "mesh": 
          "radial-gradient(at 30% 10%, rgba(139, 92, 246, 0.2) 0px, transparent 50%), radial-gradient(at 70% 20%, rgba(99, 102, 241, 0.15) 0px, transparent 50%), radial-gradient(at 10% 50%, rgba(249, 115, 22, 0.1) 0px, transparent 50%), radial-gradient(at 90% 80%, rgba(124, 58, 237, 0.15) 0px, transparent 50%), radial-gradient(at 50% 90%, rgba(99, 102, 241, 0.1) 0px, transparent 50%)",
      },
      boxShadow: {
        "glow": "0 0 40px -5px rgba(139, 92, 246, 0.4)",
        "glow-lg": "0 0 60px -10px rgba(139, 92, 246, 0.5)",
        "glow-accent": "0 0 40px -5px rgba(249, 115, 22, 0.3)",
        "glow-secondary": "0 0 40px -5px rgba(99, 102, 241, 0.3)",
        "inner-glow": "inset 0 0 40px -5px rgba(139, 92, 246, 0.15)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "slide-up": "slide-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "spin-slow": "spin 8s linear infinite",
        "bounce-gentle": "bounce-gentle 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5", boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)" },
          "50%": { opacity: "1", boxShadow: "0 0 40px rgba(139, 92, 246, 0.6)" },
        },
        "pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "slide-up": {
          "0%": { transform: "translateY(40px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "bounce-gentle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;