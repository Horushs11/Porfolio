/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A1A2E",
        secondary: "#252547",
        accent: {
          cyan: "#40E0D0",
          pink: "#FF1493"
        }
      }
    },
  },
  plugins: [],
}