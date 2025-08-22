/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        gistesy: ["var(--font-gistesy)"],
      },
    },
  },
  plugins: [],
}