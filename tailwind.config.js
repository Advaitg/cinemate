export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens : {
        "other": {'min': '340px', 'max': '1280px'}
      },
      colors: {
        "darkbg" : "#1e293b"
      }
    },
  },
  plugins: [],
}