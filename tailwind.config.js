/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montreal: ["NeueMontrealRegular", "sans-serif"],
        MontrealLight: ["NeueMontrealLight", "sans-serif"],
      },
      backgroundImage: {
        LeftArrow: "url('/src/assets/LeftArrow.svg')",
        RightArrow: "url('/src/assets/RightArrow.svg')",
      },
    },
  },
};
