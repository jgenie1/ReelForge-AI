import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#0D0D0F",
        card: "#16161E",
        border: "#262630",
        primary: {
          DEFAULT: "#7B61FF",
          hover: "#6A50EE",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#00E5FF",
          hover: "#00CCD4",
          foreground: "#0D0D0F",
        },
        muted: {
          DEFAULT: "#8E8EA0",
          foreground: "#5A5A6E",
        },
        accent: {
          purple: "#7B61FF",
          cyan: "#00E5FF",
          pink: "#FF2E93",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-syne)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "neon-glow": "linear-gradient(135deg, #7B61FF 0%, #00E5FF 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
