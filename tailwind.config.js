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
        'bg-home2': '#280646',
        'bg-home1': '#2B013C',
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
         'bg-dev2': '#AA02C6',
         'bg-objetivo': '#a548c6',
         'bg-telas': '#0B0017',
         'bg-telas1': '#100120',
         'bg-uso': "url('src/assets/elipse 2.svg')",
         'bg-ob1':'#2A4C5A',
         'shadow-ob2':'#44004A',  
         'shadow-ob3':'#294155',
      },
    },
  },
  plugins: [],
}