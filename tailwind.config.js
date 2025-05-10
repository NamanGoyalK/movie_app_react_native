/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: "class", // Enables dark mode using class strategy
  theme: {
    extend: {
      colors: {
        // Light Theme
        light: {
          background: "#ffffff",
          foreground: "#141414",
          primary: "#e50914",
          secondary: "#b81d24",
          muted: "#e5e5e5",
          accent: "#DF352B",
        },
        // Dark Theme
        dark: {
          background: "#141414",
          foreground: "#ffffff",
          primary: "#e50914",
          secondary: "#b81d24",
          muted: "#333333",
          accent: "#B91007",
        },
      },
    },
  },
  plugins: [],
};
