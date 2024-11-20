/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,ts,tsx}", "./components/**/*.{js,ts,tsx}"],

  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontSize: {
        xs: "11px",
        sm: "12px",
        primary: "15px",
        lg: "18px",
        xl: "20px",
        "2xl": "26px",
        "3xl": "32px",
      },
      colors: {
        green: {
          primary: "#8EA3A6",
        },
        gray: {
          primary: "#e5e7eb",
          accent: "#69686D",
          secondary: "#454545",
        },
        blue: {
          secondary: "#7ba8cc",
          primary: "#277bc0",
          accent: "#0B192C",
        },
        red: {
          primary: "#c1121f",
          light: "#FF8E8F",
        },
        purple: {
          secondary: "#cfc0fe",
          primary: "#7446ae",
        },
        orange: {
          primary: "#F87070",
          accent: "#FE3E3E",
          light: "#FFB38E",
          creme: "#FFFDCB",
        },
        gold: {
          primary: "#E6E9AF",
          secondary: "#FFDA11",
        },
      },
    },
  },
  plugins: [],
};
