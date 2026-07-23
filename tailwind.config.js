/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f0f3f8",
          100: "#d9e0ec",
          200: "#b3c1d9",
          300: "#8da2c6",
          400: "#6783b3",
          500: "#1B2A4A",
          600: "#16223b",
          700: "#111a2d",
          800: "#0c131e",
          900: "#070b12",
          950: "#040810",
        },
        gold: {
          50: "#fdf8ed",
          100: "#f9edcc",
          200: "#f3db99",
          300: "#edc966",
          400: "#e7b733",
          500: "#c9a227",
          600: "#a0821f",
          700: "#776117",
          800: "#4e410f",
          900: "#252008",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "0.375rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
      },
    },
  },
  plugins: [],
};