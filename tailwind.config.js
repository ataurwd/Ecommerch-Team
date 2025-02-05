/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Mprimary: '#00B894',
        Msecondary: '#6C5CE7',
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],
      },
      spacing: {
        '12': '3rem',
        '24': '6rem',
      },
    },
  },
  plugins: [daisyui],
}