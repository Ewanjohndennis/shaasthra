/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        shastra: "#6C63FF",
        dark: "#1a1a2e",
        accent: "#e94560",
      },
    },
  },
  plugins: [],
};
