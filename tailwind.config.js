/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
      },
      colors: {
        dark: "#0F0E0E",
      },
    },
    screens: {
      sm: "640px",
      md: "930px",
      lg: "1160px",
      xl: "1420px",
      "2xl": "1640px",
    },
  },
  plugins: [],
};
