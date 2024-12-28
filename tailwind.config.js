/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/app/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        GlutenBold: ["Gluten-Bold"],
        GlutenMedium: ["Gluten-Medium"],
        RubikBold: ["Rubik-Bold"],
        RubikMedium: ["Rubik-Medium"],
      },
    },
  },
  plugins: [],
};
