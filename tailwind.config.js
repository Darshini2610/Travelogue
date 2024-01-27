/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'GV': ['Great Vibes'],
        'Playfair': ['Playfair Display SC'],
        'Tangerine': ['Tangerine']
      },
    },
  },
  plugins: [],
}

