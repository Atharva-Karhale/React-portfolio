
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme1: {
          white: '#f5e7dc',
          black: '#2c2727',
          gray: '#3E3939',
          orange: '#FF7517'
        },
      }
    },
    fontFamily: {
      abc: ['Montserrat', 'sans-serif'],
      def: ['Quicksand', 'sans-serif'],
    }
  },
  plugins: [],
}

