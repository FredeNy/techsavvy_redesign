/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'Red': '#BF2026',
      'Black': '#303030',
      'EggWhite': '#EDEDE9',
      'White': '#FFFFFF',
      'Grey': '#CECFD3',
      'Navyblue': '#0A1C38',
      'Darkblue': '#071324',
      'Hoverbtn': '#AC1D22',
    },

      extend: {
        fontFamily: {
          inter: ['Inter', 'sans-serif'],
          openSans: ['Open Sans', 'sans-serif'],
          ptSans: ['PT Sans', 'sans-serif'],
        },
   
    },
  },
  plugins: [],
};
