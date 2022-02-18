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
      }
    }
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
};
