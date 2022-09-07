/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        lightBlack: 'rgba(71, 62, 62, 1)',
        myGreen: 'rgba(96, 191, 125, 1)',
        myPurple: 'rgba(143, 96, 191, 1)',
        bgSection: 'rgba(240, 237, 232, 1)',
        myPink: 'rgba(254, 84, 227, 1)',
        myBlue: 'rgba(72, 134, 255, 1)',
        darkGreen: 'rgba(55, 128, 77, 1)',
        myOrange: 'rgba(246, 173, 86, 1)',
        shadowColor: 'rgba(141, 114, 114, 0.45)'

      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
