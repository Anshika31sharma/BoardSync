/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "chevronColor":"#787486",
        "customBlack" :"#0D062D",
        "cutomTextColor" : "#787486",
        "navigationHover" :"rgba(80, 48, 229, 0.08)",
        "union":"#F5F5F5",
        "unionElipBg" :"rgba(252, 214, 74, 0.3)"
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
  ],
};
