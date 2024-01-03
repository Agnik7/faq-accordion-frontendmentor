/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "work": ['Work Sans', 'sans-serif']
      },
      colors:{
        "bg-main": "hsl(275, 100%, 97%)",
        "font-col": "hsl(292, 42%, 14%)",
        "font-accent" : "hsl(292, 16%, 49%)"
      },
      backgroundImage:{
        'main-desk': "url('/src/assets/images/background-pattern-desktop.svg')",
        'main-mobile': "url('/src/assets/images/background-pattern-mobile.svg')"
      }
    },
  },
  plugins: [],
}

