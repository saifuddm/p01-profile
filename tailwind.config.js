/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'main': ['"IBM Plex Mono"', 'monospace']
      },
      textColor:{
        'links': 'rgb(144, 129, 233)',
      },
      borderColor:{
        'secondary': 'rgb(144, 129, 233)'
      },
      outlineColor:{
        'secondary': 'rgb(144, 129, 233)'
      }
    },
  },
  plugins: [],
}

