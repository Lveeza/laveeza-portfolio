/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
      },
      screens: {
        laptop: '990px',
        pc: '1450px'
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
}
