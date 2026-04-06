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
        primary: { DEFAULT: "#4F6EF7", light: "#7B93FA", dark: "#3B54D4", 50: "#EEF1FE" },
        accent: { DEFAULT: "#C9A87C", light: "#DFC6A8", dark: "#B08E5F" },
        surface: { DEFAULT: "#FAFBFC", warm: "#FAF8F5", dark: "#F5F5F7" },
        navy: { DEFAULT: "#0f172a", light: "#1e293b", lighter: "#334155" },
      },
      fontFamily: {
        sans: ['Pretendard', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
};
