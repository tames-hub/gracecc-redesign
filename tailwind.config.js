/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        "primary-dark": "#1D4ED8",
        gold: "#D4A574",
        "gold-light": "#E8C9A8",
        surface: "#F8FAFC",
        "surface-warm": "#FDF8F4",
      },
    },
  },
  plugins: [],
};
