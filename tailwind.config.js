/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#00DF82',
        'dark-green': '#03624C',
        'dark2' : '#042222',
        'gray-light': '#ACB9B3',
        'gray-light2': '#F1F7F7',
        'green-light': '#00DF24',
        'para': '#6F7D7D',
        'riple-yellow' : '#FFC000'
      },
      screens: {
        'xs': '480px',
      }
    },
  },
  plugins: [],
};
