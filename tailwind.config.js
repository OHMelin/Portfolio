/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: '#101010',
      secondary: '#202020',
    },
    fontFamily: {
      'handwriting': ['Dancing Script', 'cursive', 'Poppins', 'sans-serif']
    },
    extend: {
      animation: {
        'bounce-slow': 'bounce 6s linear infinite',
        'spin-slow': 'spin 6s linear infinite',
        'floating': 'float 6s ease-in-out infinite',
        'zooming': 'zoom 0.1s ease-in-out 1 forwards',
      },
      keyframes: {
        'float': {
          '0%': { transform: 'translatey(0px)' },
          '50%': { transform: 'translatey(25px)' },
          '100%': { transform: 'translatey(0px)' },
        },
        'zoom': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.2)' },
        },
      }
    },
  },
  plugins: [],
}

