/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        satoshi: ["Satoshi", "sans-serif"],
        intefont: ["Inter", "sans-serif"],
      }
    },
  },
  plugins: [],
}