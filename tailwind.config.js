// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
        fontFamily: {
           sans: ['var(--font-poppins)', 'sans-serif'], 
    },
    
      keyframes: {
        zoomIn: {
          '0%': { transform: 'scale(1.2)', opacity: '0.7' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
         slideReveal: {
        '0%': { clipPath: 'inset(0 100% 0 0)' },
        '100%': { clipPath: 'inset(0 0 0 0)' },
      },
      },
      animation: {
        'zoom-slow': 'zoomIn 5s ease-in-out forwards',
        slideReveal: 'slideReveal 1.5s ease-out forwards',
      },
        transformOrigin: {
          top: "top",
    },
    },
  },
  
  plugins: [],
}
