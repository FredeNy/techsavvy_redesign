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
    },

    extend: {
     /* animation: {
        marquee: 'marquee 35s linear infinite',
        //marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
          //'100%': { transform: 'translateX(-100%)' },

        },
    
        //marquee2: {
         // '0%': { transform: 'translateX(100%)' },
         // '100%': { transform: 'translateX(0%)' },
       // },
      },
*/
/*
      fontFamily:{
        'pText':['var(--outfit)', 'sans-serif'],
      },
      fontWeight:{
        'pText': 400,
      },
*/
   
    },
  },
  plugins: [],
};
