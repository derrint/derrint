/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      bigger: { max: '1600px' },
      large: { max: '1200px' },
      middle: { max: '1040px' },
      small: { max: '768px' },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
      mulish: ['Mulish', 'sans-serif'],
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
