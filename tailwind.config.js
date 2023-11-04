/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          yellow: "#FEC83E",
          blue: "#172048",
          gray: "#5A6378",
          white: "#F8F8F8",
          bg: "#0A142F",
          gray: "#E0E5F3",
          blue2: "#353F5B",
        },
      },
      screens: {
        xs: "400px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
      backgroundImage: {
        hero: "url('/bg-hero.png')",
        solution: "url('/bg-solution.png')",
      },
      before: {
        content: "''",
      },
      after: {
        content: "''",
      },
    },
  },
  plugins: [],
};
