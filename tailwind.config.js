const defaultTheme = require('tailwindcss/defaultTheme');
require("dotenv").config();
const enablePurge = process.env.ENABLE_PURGE || false;

module.exports = {
  purge: {
    //enabled: true,
    content: ["./src/**/*.html", "./src/**/*.scss", "./src/**/*.component.ts"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      zIndex: {
        'dropdown': '1000',
        'sticky': '1020',
        'fixed': '1030',
        'modal-backdrop': '1040',
        'modal': '1050',
        'popover': '1060',
        'tooltip': '1070',
      }
    },
  },
  variants: {
    extend: {
      margin: ['first', 'last'],
    },
  },
  plugins: [],
};
