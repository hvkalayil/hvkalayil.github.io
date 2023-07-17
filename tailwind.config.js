/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html','js/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'sidebar': '#f7fdff',
        'sidebar-dark': '#222527',
        'primary':{
          100:'#f7fdff96',
          900:'#dee9ee'
        },
        'primary-dark':{
          100:'#222527ad',
          900:'#1A1C1E'
        },
        'accent': {
          0:'#2bc9ed0f',
          100:'#2bc9ed6e',
          900:'#2BC9ED'
        },
        'body':'#3e3e3e',
        'body-dark':'#D3DDE2'
      },
      fontFamily: {
        'hero': 'Kanit, sans-serif',
        'body': 'Quicksand, sans-serif',
      }
    },
  },

  plugins: [],
}

