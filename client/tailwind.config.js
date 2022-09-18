/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#57b846', 
        secoundery: '#101920',
      },
      fontFamily:{
        'Roboto': 'Roboto Condensed',
      },
      // Animations
      animation: {
        'fadeInDown': 'fadeInDown 3s linear normal',
        'fadeInUp' : 'fadeInUp 3s linear normal',
        move: 'move 3s linear 1s infinite',
        move2: 'move 3s linear 2s infinite',
        move3: 'move 3s linear 3s infinite',
    },
    keyframes: {
        fadeInUp: {
            '0%': { opacity: 0, transform: 'translateY(50px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: 0, transform: 'translateY(-200px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
      },
        move: {
            '0%': { opacity: 0 },
            '25%': { opacity: 0 },
            '33%': { opacity: 1, transform: 'translateY(30px)' },
            '67%': { opacity: 1, transform: 'translateY(40px)' },
            '100%': {
                opacity: 0,
                transform: 'translateY(55px)',
            },
        },
    },
    

    },
  },
  variants:{
    extend : {
      display: ['group-hover'],
      visibility: ['group-hover'],
    }
  },
  plugins:[],
}
