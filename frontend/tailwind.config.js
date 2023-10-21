/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      lg: "1200px",
      md: "992px",
      sm: "768px",
      xs: "480px",
    },
    extend: {},
  },
  plugins: [require("rippleui")],
};
