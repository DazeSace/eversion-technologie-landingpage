module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'xblue': '#C9E3ED',
        'xyellow': '#FBDC72',
        'xblack': '#152328',
        'xpink': '#F0BFD3'
      },
      fontFamily: {
        'poppins': ['poppins', 'Helvetica', 'Arial', 'serif'],
        'poppins-default': ['poppins-default', 'Helvetica', 'Arial', 'serif']
      }
    },
  },
  plugins: [],
}
