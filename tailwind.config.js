/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      // font-family: 'Bree Serif', serif;
      // font-family: 'Oswald', sans-serif;

      fontFamily: {
        bodyFont: ["Oswald", "sans-serif"],
        titleFont: ["Bree Serif", "serif"],
      },
      colors: {
        bodyColor: "#FFFFFF",
        lightText: "black",
        boxBg: "linear-gradient(145deg, #FFFFFF, #F8F8FF)",
        designColor: "#008B8B",
      },
      boxShadow: {
        shadowOne: "4px 4px 19px #778899, -10px -10px 19px #C0C0C0",
      },
    },
  },
  plugins: [],
};
