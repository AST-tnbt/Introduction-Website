/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        robo: "Roboto",
      },
      keyframes: {
        fadeUp: {
          "0%": {
            opacity: 0,
            transform: 'translateY(20%)'
          },
          "100%": {
            opacity: 1,
            transform: 'translateY(0)'
          }
        },
        fadeOut: {
          "0%": {
            opacity: 1,
            visibility: 'visible' 
          },
          "50%": {
            opacity: 1,
            visibility: 'visible'
          },
          "100%" : {
            opacity: 0,
            visibility: 'invisible'
          }
        },
        slide: {
          "0%" : {
            visibility: 'visible',
            opacity: 0,
            transform: 'translateX(-100%)'
          },
          "25%" : {
            visibility: 'visible',
            opacity: 1,
            transform: 'translateX(0)'
          },
          "50%" : {
            visibility: 'visible',
            opacity: 1,
            transform: 'translateX(0)'
          },
          "75%" : {
            visibility: 'visible',
            opacity: 1,
            transform: 'translateX(0)'
          },
          "100%" : {
            visibility: 'visible',
            opacity: 0,
            transform: 'translateX(100%)'
          }
        }
      },
      animation: {
        fadeUp: "fadeUp 1s linear",
        fadeOut: "fadeOut 3s linear",
        spin: "spin 2s linear",
        slide: "slide 2s linear"
      }
    },
  },
  plugins: [],
}

