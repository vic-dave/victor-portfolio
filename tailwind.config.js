/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#1E40AF', // Deep blue
        secondary: '#F59E0B', // Amber
        light: '#F3F4F6',
        dark: '#111827',
      }
    },
  },
  plugins: [],
}

