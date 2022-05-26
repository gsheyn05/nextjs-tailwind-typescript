module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        wave:{
        to:{
          "margin-left":"-51%"
        }
      }

      }
    },
    animation: {
      wave: "wave 3s ease-in-out infinite"
    }

  },
  plugins: [],
}
