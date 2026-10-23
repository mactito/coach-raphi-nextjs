
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: { sans: ['Inter','system-ui'] },
      borderRadius: { '2xl': '18px', '3xl': '24px' }
    }
  },
  plugins: []
}
