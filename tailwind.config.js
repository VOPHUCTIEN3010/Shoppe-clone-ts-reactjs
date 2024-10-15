const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      colors: {
        orange: '#ee4d2d',
      },
    },
  },
  plugins: [
    plugin(function({ addComponents, theme }) {
      addComponents({
        '.container': {
          maxWidth: theme('maxWidth.7xl'), // Corrected theme path
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingTop: theme('spacing.4'),
          paddingBottom: theme('spacing.4'),
        },
      });
    }),
  ],
};
