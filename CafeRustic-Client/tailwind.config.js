/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D99904",
        secondary1: "#1F2937",
        secondary2: "#111827",
        accent: "#183e7e",
      },

      fontFamily: {
        Inter: ["Inter"],
        Cinzel: ["Cinzel"],
      },
    },
  },
  plugins: [require("daisyui")],
};
