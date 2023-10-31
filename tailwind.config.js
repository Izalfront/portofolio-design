/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#6ee7b7',
        dark: '#082f49',
        secondary: '#64748b',
        darkmode: '#343540',
        darkmodell: '#444653',
        darkmodelll: '#202123',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};
