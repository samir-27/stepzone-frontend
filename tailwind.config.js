/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '144': '50rem',
        '132': '44rem',
        '128': '40rem',
        '112': '32rem'
      },
      width: {
        '128': '40rem',
        '112':'32rem'
      },
    },
  },
  plugins: [],
}
