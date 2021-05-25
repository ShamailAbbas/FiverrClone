module.exports = {
  purge: [
    "./pages/**/*.tsx",
    "./pages/*.tsx",
    "./components/*.tsx",
    "./components/**/*.tsx",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        0: "0px",
        1: "1px",
        tpx: "2px",
        fpx: "4px",
        50: "200px",
        55: "220px",
        57: "237px",
        120: "420px",
        160: "500px",
        180: "650px",
        200: "800px",
      },

      fontSize: {
        gig: ["16px", "20px"],
        xlg: "19px",
      },
      fontWeight: {
        semimedium: "450",
      },
      colors: {
        blue: {
          950: "#0d084d",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
