module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#202225',
        secondary: '#36393F',
        tertiary: '#2F3136'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
