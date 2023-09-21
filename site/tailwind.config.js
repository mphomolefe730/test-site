/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'navBarGrid': '1fr 3fr 1fr',
        'auto-fit': 'repeat(auto-fit, minmax(0px, 1fr))',
      },
      height: {
        "90%": "90%"
      },
      screens: {
        'xs': {'max': '480px'},
        'xsmin': {'min': '480px'},
        'xxs': {'max': '410px'},
        'xxsmin': {'min': '410px'},
        "smMax": {"max": "640px"},
        "mdMax": {"max": "768px"},
      },
      colors: {
        'main': '#DF6951',
      }
    },
  },
  plugins: [],
}
