/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'blue': '#3490dc',
        'purple': '#9561e2',
        'green': '#38c172',
        'red': '#e3342f',
        'orange': '#f6993f',
        
      },
    },
  },
  plugins: [],
}
