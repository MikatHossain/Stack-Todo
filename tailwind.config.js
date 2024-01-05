/** @type {import('tailwindcss').Config} */

export default {
  content: ["index.html", "src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#333",
        secondary: "#777",
      },
      content: {
        text: "text",
      },
      blur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
