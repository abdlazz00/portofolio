/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e3a8a", // Navy Blue
        secondary: "#f8fafc", // Slate 50
        body: "#475569", // Slate 600
        heading: "#0f172a", // Slate 900
        accent: "#3b82f6", // Blue 500
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
