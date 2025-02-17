/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

theme: {
  extend: {
    colors: {
      background: '#000000',
      primary: '#DB5461',
      header: '#23395B',
      accent: '#A390E4',
      secondary: '#EDABB1',
    },
    keyframes: {
      popIn: {
        '0%': { 
          opacity: '0',
          transform: 'scale(0.95)'
        },
        '100%': { 
          opacity: '1',
          transform: 'scale(1)'
        },
      }
    },
    animation: {
      'popIn': 'popIn 0.5s ease-out forwards',
    },
  },
},
}