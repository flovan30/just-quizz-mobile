const { default: Colors } = require("./src/constants/Colors.ts");

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
      colors: {
        "custom-white": Colors.CUSTOM_WHITE,
        "custom-black": Colors.CUSTOM_BLACK,
        "custom-green": Colors.CUSTOM_GREEN,
        "custom-blue": Colors.CUSTOM_BLUE,
      },
    },
  },
  plugins: [],
};
