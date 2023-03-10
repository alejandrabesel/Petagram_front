/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ['"Cormorant Garamond"', "serif"],
        subtitle: ["Lato", "sans-serif"],
        body: ["Roboto", "sans-serif"],
      },
      colors: {
        primary_50: "#F8E5FF",
        primary_100: "#E9B3FF",
        primary_200: "#DA80FF",
        primary_300: "#CC4DFF",
        primary_400: "#BD1AFF",
        primary_500: "#A400E6",
        primary_600: "#7F00B3",
        primary_700: "#5B0080",
        primary_800: "#37004D",
        primary_900: "#12001A",
        secondary_50: "#EDFFE5",
        secondary_100: "#C8FFB3",
        secondary_200: "#A4FF80",
        secondary_300: "#80FF4D",
        secondary_400: "#5BFF1A",
        secondary_500: "#42E600",
        secondary_600: "#33B300",
        secondary_700: "#258000",
        secondary_800: "#164D00",
        secondary_900: "#071A00",
        neutral_50: "#F3F1F4",
        neutral_100: "#DAD5DD",
        neutral_200: "#C2B9C6",
        neutral_300: "#A99DAF",
        neutral_400: "#918198",
        neutral_500: "#77677E",
        neutral_600: "#5D5062",
        neutral_700: "#423946",
        neutral_800: "#28222A",
        neutral_900: "#0D0B0E",
      },
    },
  },
  plugins: [],
};
