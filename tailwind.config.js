/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '320px',

      'sx': '480px',

      'sm': '640px',

      'md': '768px',

      'lg': '1000px',

      'xl': '1280px',

      '2xl': '1536px',
    },
    extend: {
      backgroundImage: {
        'back-gradient': 'linear-gradient(to right, #9796F0 , #FBC7D4 )',
      },
    },
  },
  plugins: [],
};
