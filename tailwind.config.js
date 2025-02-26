/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./Stories/**/*.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        warning: "#f59e0b",
        secondary: "#64748b",
        second: "#94a3b8",
        dark: "#0f172a",
      },
      fontFamily: {
        geo: "Space Grotesk",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};

