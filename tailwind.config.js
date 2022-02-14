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
        cartColor: "#ff0000"
      },
      padding: {
        cartPadding: "0.15rem"
      }
    },
  },
  plugins: [],
};
