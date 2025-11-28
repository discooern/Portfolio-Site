/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(0 8 20)",
        primaryDark: "rgb(0 29 61)",
        secondary: "rgb(0 53 102)",
        accent: "rgb(255 195 0)",
        highlight: "rgb(255 214 10)",
        background: "rgb(255 255 255)",
      },
    },
  },
  plugins: [],
}
