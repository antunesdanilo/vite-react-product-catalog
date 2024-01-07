/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1400px',
    },
    colors: {
      primary: '#1494D4',
      warning: '#f0ad4e',
      success: '#5cb85c',
      danger: '#d9534f',
      gray: {
        100: '#fafafa',
        200: '#eeeeee',
        300: '#cfcfcf',
        400: '#aaaaaa',
        500: '#898989',
        600: '#626262',
        700: '#5f5f5f',
        800: '#313131',
        900: '#111111',
      },
      white: '#FFFFFF'
    }
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          margin: '0 auto',
          maxWidth: 'calc(100% - 1.5rem)',
          '@screen sm': {
            maxWidth: '540px',
          },
          '@screen md': {
            maxWidth: '720px',
          },
          '@screen lg': {
            maxWidth: '960px',
          },
          '@screen xl': {
            maxWidth: '1140px',
          },
          '@screen xxl': {
            maxWidth: '1340px',
          },
        }
      });
    }
  ],
}

