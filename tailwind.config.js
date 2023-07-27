/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "ohstock-color0": "rgb(67, 68, 209)",
        "ohstock-color1": "rgb(78, 79, 235)",
        "ohstock-color2": "rgb(6, 143, 255)",
        "ohstock-color3": "rgb(238, 238, 238)",
        "ohstock-dark-color1": "rgb(18, 20, 23)",
      },
      backgroundColor: {
        "ohstock-color0": "rgb(67, 68, 209)",
        "ohstock-color1": "rgb(78, 79, 235)",
        "ohstock-color2": "rgb(6, 143, 255)",
        "ohstock-color3": "rgb(238, 238, 238)",
        "ohstock-dark-color1": "rgb(18, 20, 23)",
      },
    },
  },
  darkMode: "media", //class
  plugins: [require("@tailwindcss/forms")],
};
