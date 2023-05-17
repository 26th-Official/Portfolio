/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        // c_main:"#1c1c27",
        // c_sub:"#28293d",
        // c_border:"#3e4053",
        c_main:"#080808",
        c_sub:"#111111",
        c_border:"#232323",
        c_text: "#656565",
        c_red: "#ff3b3b",
        c_green: "#05c270",
        c_blue:"#0063f8",
        c_yellow:"#ffcc00",
        c_orange:"#ff8801",
        c_cyan:"#00cfdd"
      },
      fontFamily:{
        Delicious:["Delicious Handrawn","cursive"],
        Oswald:["Oswald","sans-serif"],
        Merriweather:["Merriweather","sans-serif"],
        Neon:["Neon","sans-serif"]
      }
    },
  },
  plugins: [],
}

