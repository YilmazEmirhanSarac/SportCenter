/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      screens: {
        sm: "576px",
      },
      colors: {
        "main-blue": "#355592",
        "main-orange": "#f29d0e",
        "main-gray": "#5c5c5c",
        "light-blue": "#f1f8ff",
      },
    },
  plugins: [],
  }
}