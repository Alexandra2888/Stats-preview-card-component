/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '375px',
        'desktop': '1440px',
      },
      colors: {
        primary: {
          'background': 'hsl(233, 47%, 7%)',
          'card': 'hsl(244, 38%, 16%)',
          'accent': 'hsl(277, 64%, 61%)',
        },
        neutral: {
          'white': 'hsl(0, 0%, 100%)',
          'white-75': 'hsla(0, 0%, 100%, 0.75)',
          'white-60': 'hsla(0, 0%, 100%, 0.6)',
        },
      },
      fontSize: {
        'body': '15px',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'lexend': ['Lexend Deca', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

