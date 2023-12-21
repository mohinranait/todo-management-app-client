/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container : {
        center : true,
      },
      fontFamily : {
        primary : ['Poppins', 'sans-serif'],
      },
      colors : {
        primary : "#FF2F6B",
        secondary : "#DD3842",
        'text-color' : "#212529",
        "mute" : "#999999",
      },
    },
  },
  plugins: [],
}

