module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        mainFont: ['Lora'],
        headerFont: ['Akaya']
      },
      colors: {
        yellowColor: "#ffff00",
        redColor: "#ff0000",
        greenColor: "#00ff00",
        modalColor: '#000000aa',
        sliderBackground: "#00000022"
      },
      padding: {
        cartPadding: "0.15rem"
      },
      gridTemplateColumns: {
        shoesGrid: 'repeat(auto-fit, minmax(260px, 1fr))',
        radioGrid: 'repeat(auto-fit, minmax(30px, 1fr))'
      },
      keyframes: {
        animStyle: {
          "0%": {transform: 'rotate(0deg)'},
          "25%": {transform: 'rotate(20deg)'},
          "50%": {transform: 'rotate(0deg)'},
          "75%": {transform: 'rotate(-20deg)'},
          "100%": {transform: 'rotate(0deg)'},
        }
      },
      animation: {
        nothingFoundAnim: "animStyle 1.5s linear infinite"
      }
    }
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
};
