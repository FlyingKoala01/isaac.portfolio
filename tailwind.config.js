// tailwind.config.js
module.exports = {
  content: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lavishly: ['"Lavishly Yours"'],
        poppins: ['Poppins'],
        montserrat: ['Montserrat'],
      },
      gradientColorStops: {
        "custom-blue": "rgba(102,140,252,1)",
        "custom-teal": "rgba(102,252,241,1)",
      },
      colors: {
        aquamarine: "rgba(102,252,241,1)",
        blue: "#668cfc",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
