module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mainFont: ['Lora'],
        headerFont: ['Akaya']
      },
      colors: {
        headerColor: "#ffff00",
        cartColor: "#ff0000",
        modalColor: '#000000aa'
      },
      padding: {
        cartPadding: "0.15rem"
      },
      gridTemplateColumns: {
        shoesGrid: 'repeat(auto-fit, minmax(260px, 1fr))'
      }
    }
  },
  plugins: [],
};
