/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      sans: ['"Poppins"', "sans-serif"],
    },
    extend: {
      aspectRatio: {
        "16/10": "16 / 10",
      },
    },
  },
};
