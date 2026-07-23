/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f2f4f8",
          100: "#d9dfe9",
          200: "#b3c0d3",
          300: "#8ca0bd",
          400: "#6681a7",
          500: "#173372",
          600: "#122960",
          700: "#0e1f4e",
          800: "#0a153c",
          900: "#060b2a",
          950: "#030618",
        },
        gold: {
          50: "#fef9ed",
          100: "#fdf0ca",
          200: "#fbe297",
          300: "#f9d364",
          400: "#f6c531",
          500: "#f4c444",
          600: "#c39d36",
          700: "#927628",
          800: "#614e1a",
          900: "#30270c",
        },
        cream: {
          50: "#fdfcf7",
          100: "#faf8ee",
          200: "#f5f0de",
          300: "#f0e9cd",
          400: "#ebe1bd",
          500: "#eae2c7",
          600: "#bbb5a0",
          700: "#8c8878",
          800: "#5d5b51",
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