/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'sans-serif']
    },
    extend: {
      height: {
        'navHeight': 'calc(100vh - 64px)'
      },
      gridAutoRows: {
        'cardHeight': '400px'
      },
      colors: {
        'gray-rgba' : 'rgba(206, 206, 206, .6)'
      }
    },
  },
  plugins: [],
}
