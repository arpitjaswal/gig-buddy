/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
      backgroundImage: {
        //'blackticket': "url('https://thsblog.s3.amazonaws.com/wp-content/uploads/2015/11/08013423/where-to-sell-tickets-online.jpg')",
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio'),],
}

