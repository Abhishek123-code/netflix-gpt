/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "netflix-red": "rgb(229, 9, 20)",
      },
    },
  },
  plugins: [],
};
