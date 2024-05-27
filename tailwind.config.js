/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./views/*.{html,js,ejs}","./node_modules/flowbite/**/*.js"],
  theme: {
    fontFamily: {
      'poppins': ['Poppins'],
      'jetbrains': ['JetBrains Mono'],
      'poetsen': ['Poetsen One']
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

