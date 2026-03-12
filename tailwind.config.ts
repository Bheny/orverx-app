import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          50:  "#fdf2f4",
          100: "#fce7eb",
          200: "#f9d0d9",
          300: "#f4a8b8",
          400: "#ec7592",
          500: "#e04571",
          600: "#c8264f",  // main accent
          700: "#a81a3e",
          800: "#8e1838",
          900: "#7a1835",
          950: "#430819",
        },
        mauve: {
          50:  "#faf5f7",
          100: "#f5ecf0",
          200: "#eddae3",
          300: "#dfc0cc",
          400: "#cb9aad",
          500: "#b57690",
          600: "#9e5a75",
          700: "#854861",
          800: "#6f3e52",
          900: "#5e3748",
          950: "#371e29",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
