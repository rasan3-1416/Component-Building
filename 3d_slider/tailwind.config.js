/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // Font Family
    fontFamily: {
      'poppins': 'var(--poppins)',
      'rubik': 'var(--rubik)',
    },
    extend: {
      backgroundImage: {
        'model': "url('./src/assets/images/model.png')"
      },
      // Rotation Animation
      keyframes: {
        'autoRun': {
          'from': {transform: 'perspective(1000px) rotateX(-15deg) rotateY(0deg)'},
          'to': {transform: 'perspective(1000px) rotateX(-15deg) rotateY(360deg)'}
        }
        
      },
      animation: {
        'autoRun': 'autoRun 20s linear infinite',
      }
    },
    container: {
      center: true,
    },
  },
  plugins: [
    plugin(function({ addUtilities }){
      addUtilities({
        // Text Stroke
        '.text-stroke': {textShadow: '-1px -1px 0 var(-c), 1px -1px 0 var(-c), -1px 1px 0 var(-c), 1px 1px 0 var(-c)'}
      })
    })
  ],
}

