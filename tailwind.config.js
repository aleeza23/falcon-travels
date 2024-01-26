/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        "icons-color" : '#3a85e0',
        "dark-blue" : '#2a5698'

      } ,
      backgroundColor :{
        "primary-color" : '#3a85e0',
        "nav-bg" : '#2a5698'
      } 
    },
  },
  plugins: [],
}
