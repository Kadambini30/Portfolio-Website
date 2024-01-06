/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        primary:"#bacee0",
        secondary:"#00ADB5",
        bgsec:"#212134",
        bgprim:"#141426",
      },
      fontFamily: {
        courier:"Roboto Mono, monospace",
        poppins: "Courier Prime, monospace",
      },
      dropShadow: {
        '3xl': '1px 0px 10px #bacee0',
        '2xl': '0px 0px 5px #00ADB5'
      }
      
    },
  },
  
  plugins: [],
}


