/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dela: ['"Dela Gothic One"', "sans-serif"],
      },
      colors: {
        canaryYellow: ["#FFFE40"],
        cinder: ["#0E0E18"],
      },
    },
  },
  plugins: [],
};
