/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': 'inter'
      },
      colors: {
        'verdinho': '#00AEA4', 
         'azulzinho':'#5474C1 ',
         'roxinho': '#AD05C9',
         'bg-roxo':'#3D0352',
         'bg-preto': '#3b0454',
         'bg-header' : '#24043b',
         'bg-produto1' : '#0a2233',
         'bg-produto2' : '##161937',
         'bg-produto3' : '##220c39',
         'bg-dev': '#54A7C180',
         'bg-objetivo': '#a548c6',
         'bg-telas': '#0B0017'
      }
    },
  },
  plugins: [],
}