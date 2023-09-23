/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: '#101010',
      secondary: '#202020',
    },
    extend: {
      animation: {
        'bounce-slow': 'bounce 6s linear infinite',
        'floating': 'float 6s ease-in-out infinite'
      },
      keyframes: {
        'float': {
          '0%': { transform: 'translatey(0px)' },
          '50%': { transform: 'translatey(25px)' },
          '100%': { transform: 'translatey(0px)' },
        }
      }
    },
  },
  plugins: [],
}

