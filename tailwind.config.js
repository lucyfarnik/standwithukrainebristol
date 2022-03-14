module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'flag-top': '#0057b7',
        'flag-bottom': '#ffd700',
      },
      animation: {
        'gradient': 'gradient 5s ease infinite',
      },
      keyframes: {
        'gradient': {
          '0%, 100%': {
            'background-position': '0% 50%'
          },
          '50%': {
            'background-position': '100% 50%'
          }
        },
      },
    },
  },
  plugins: [],
}
