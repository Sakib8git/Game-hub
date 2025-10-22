/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideShow: {
          "0%, 33%": { opacity: "1" },
          "34%, 100%": { opacity: "0" },
        },
      },
      animation: {
        slideShow: "slideShow 15s infinite",
      },
    },
  },
  plugins: [],
};