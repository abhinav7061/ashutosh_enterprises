/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        widthInc: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        opacityInc: {
          '0%': { opacity: '0' },
          '100%': { width: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in',
        widthInc: 'widthInc 0.2s linear',
        opacityInc: 'opacityInc 0.5s linear',
      },
    },
  },
  plugins: [],
};
