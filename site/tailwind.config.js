/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'navBarGrid': '1fr 3fr 1fr',
      },
      screens: {
        'xs': {'max': '480px'},
      },
    },
  },
  plugins: [],
}

