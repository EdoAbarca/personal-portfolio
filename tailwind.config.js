/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode support
  theme: {
    extend: {
      /**
      colors: {
        primary: '#27A1FF',   // Blue
        secondary: '#EEE5E9', // Pastel Pink
        lightGray: '#32322C', // Dark Gray
        accent: '#2FDF90',    // Pastel Green
        highlight: '#FFFFFF', // Pure White (kept the same)
      }, */
    },
  },
  plugins: [],
}