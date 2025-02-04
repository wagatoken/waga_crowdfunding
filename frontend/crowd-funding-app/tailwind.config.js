/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dela: ['"Dela Gothic One"', "sans-serif"],
      },
      colors: {
        canaryYellow: ['#FFFE40'],
        cinder: ['#0E0E18'],
        canaryYellows: '#FFFE40',
        coffeegreen: '#144939',
        footerYellow: '#FBFF3A',
        footerGray: '#D9D9D9',
        heroBackground: '#11121A',
        heroCard: '#000000',
        heroButton: '#1A1A1A'
      },
    },
  },
  plugins: [],
};

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         canaryYellow: '#FFFE40',
//         cinder: '#0E0E18',
//         coffeegreen: '#144939',
//         footerYellow: '#FBFF3A',
//         footerGray: '#D9D9D9',
//         heroBackground: '#11121A',
//         heroCard: '#000000',
//         heroButton: '#1A1A1A'
//       },
//     },
//   },
//   plugins: [],
// }
