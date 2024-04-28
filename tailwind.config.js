/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'xs': '360px',
        'sm': '640px',
        'md': '768px',
        'lg': '1025px', // Customize the lg breakpoint here
        'xl': '1280px',
      },
      margin: {
        320: '320px',
      },
      width: {
        190: '190px',
        275: '275px',
        300: '300px',
        340: '340px',
        350: '350px',
        656: '656px',
        880: '880px',
        508: '508px',
        '75%': '75%',
      },
      height: {
        80: '80px',
        340: '340px',
        370: '370px',
        420: '420px',
        510: '510px',
        600: '600px',
        685: '685px',
        800: '800px',
        '90vh': '90vh',
        '100vh':'100vh',
      },
      flex: {
        0.7: '0.7 1 0%',
        0.3:'0.3 '
      },
      maxHeight: {
        370: '370px',
      },
      minWidth: {
        210: '210px',
        350: '350px',
        620: '620px',
      },
      textColor: {
        lightGray: '#F1EFEE',
        primary: '#FAFAFA',
        secColor: '#8d8d8d',
        white:'#ffffff',
        navColor: 'rgb(285 75 75)',
      },
      fontSize: {
        '10': '0.75rem',
        '12': '0.625rem',
        '14': '0.875rem',
        '48': '3rem',
        '40': '2.5rem',
        '32': '2rem',
        '24': '1.5rem',
        '20': '1.25rem',
        '16': '1rem',

      },
      backgroundColor:{
        btnBg:"rgb(285 75 75)",
        btnBgHover:"rgb(173 46 46)",
      },
      backgroundImage: {
        mainColor: 'radial-gradient(100% 100% at 50% 50%, rgb(20, 19, 31) 100%, rgb(16, 15, 25) 100%)',
        secondaryColor: 'radial-gradient(72.27% 72.27% at 50% 27.73%, rgba(54, 53, 73, 0.2) 0%, rgba(41, 40, 56, 0.2) 100%), rgba(41, 40, 56, 0.5)',
        blackOverlay: 'rgba(0, 0 ,0 ,0.7)',
        marketBG: 'radial-gradient(72.27% 72.27% at 50% 27.73%, rgba(54, 53, 73, 0.2) 0%, rgba(41, 40, 56, 0.2) 100%), rgba(41, 40, 56, 0.5)',
        secondaryBg:'radial-gradient(72.27% 72.27% at 50% 27.73%, rgba(54, 53, 73, 0.2) 0%, rgba(41, 40, 56, 0.2) 100%), rgba(41, 40, 56, 0.75)'
      },
      keyframes: {
        'slide-in': {
          '0%': {
            '-webkit-transform': 'translateX(-200px)',
            transform: 'translateX(-200px)',
          },
          '100%': {
            '-webkit-transform': 'translateX(0px)',
            transform: 'translateX(0px)',
          },
        },

        'slide-fwd': {
          '0%': {
            '-webkit-transform': 'translateZ(0px)',
            transform: 'translateZ(0px)',
          },
          '100%': {
            '-webkit-transform': 'translateZ(160px)',
            transform: 'translateZ(160px)',
          },
        },
        'move-up': {
          '0%': {
          
            top: '-20px',
            position: 'absolute',
          },
          '50%': {
        
            top: '-30px',
            position: 'absolute',
          },
          '100%': {
        
            top: '-20px',
            position: 'absolute',
          },
        },
        'move-down': {
          '0%': {
          
            top: '0px',
            position: 'absolute',
          },
          '50%': {
        
            top: '10px',
            position: 'absolute',
          },
          '100%': {
        
            top: '0px',
            position: 'absolute',
          },
        },
      },
      animation: {
        'slide-in': 'slide-in 0.5s ease-out infinite',
        'move-up': 'move-up 4s ease-in-out infinite',
        'move-down': 'move-down 4s ease-in-out infinite',
        'slide-fwd': ' slide-fwd 0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      },
      transitionProperty: {
        height: 'height',
      },
    },
    cursor: {
      'zoom-in': 'zoom-in',
      pointer: 'pointer',
    },
  },
  variants: {
    // backgroundColor: ['active'],
    extend: {},
  },
  plugins: [],
};