const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      white: "#ffffff",
      opaque: '#ebfaff',
      black: "#333333",
      transparent: 'transparent',
      green: '#10B981',
      darkGreen: '#047857',
      gray: '#4B5563',
      lightGray: '#fafafa',
      lightBlack: "#696969",
      blue: '#2563EB',
      orange: '#f2922c',
      royalblue: '#1e009f',
      wallblue: '#518099',
      gold: '#ffb800'
    }
  },
  screes: {
    'lg': '1200px' 
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
