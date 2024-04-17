/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        "color": {
          "50": "#ecf1ff",
          "100": "#d8e3fe",
          "200": "#b1c8fd",
          "300": "#8bacfc",
          "400": "#6491fb",
          "500": "#3d75fa",
          "600": "#315ec8",
          "700": "#254696",
          "800": "#182f64",
          "900": "#0c1732",
        },
      },
      fontFamily: {
        "fjalla": ["Fjalla One" , "sans-serif"],
      },
    },
  },
  plugins: [],
}

