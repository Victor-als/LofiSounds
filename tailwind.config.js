/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        text1: 'text1 5s ease-in-out infinite',
        text2: 'text2 6s ease-in-out infinite',
        text3: 'text3 7s ease-in-out infinite',
      },
      keyframes: {
        text1: {
          '0%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
          '100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
            'color': 'white',
          },
        },
        text2: {
          '0%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
          '100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
            'color': 'white',
          },
        },
        text3: {
          '0%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
          '100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
            'color': 'white',
          },
        },
      },
      colors:{
        'title-1': {
          'start-color': {
            100: '#007cf0',
          },
          'midle-color': {
            100: '#7159c1',
          },
          'end-color': {
            100: '#00dfd8',
          },
        }, 
        'title-2': {
          'start-color': {
          200: '#7928ca',
          },
          'end-color': {
            200: '#ff0080',
          },
        },   
        'title-3': {
          'start-color': {
            300: '#ff4d4d',
          },
          'end-color': {
            300: '#f9cb28',
          },
        },
      }
    }
  },
  plugins: [],
}

