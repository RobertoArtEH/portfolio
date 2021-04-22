module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary-green': '#42E2B8',
        'light-gray': '#2B4555',
        'dark-start': '#0E141B',
        'dark-end': '#1E2730',
      },
      gridTemplateColumns: {
        main: '2fr 1fr',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  separator: '_',
};
