/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-shorten-mobile": 'url("/public/image/bg-shorten-mobile")',
      },

      fontFamily: {
        poppins: '"Poppins", sans-serif',
      },
    },
  },
  plugins: [],
};
