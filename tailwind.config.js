/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-light": "#1A1A1A",
        "gray-dark": "#282828",
        "gray-light": "#313131",
        "highlight-dark": "#BA2C73",
        "highlight-light": "#E2FCEF",
      },
    },
  },
  plugins: [],
};
