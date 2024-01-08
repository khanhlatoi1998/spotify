/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#2DE0E0',
        'background': '#171717',
        'color-1': '#1E1E1E',
        'color-2': '#E02D2D',
      },
      fontSize: {
        'title': '16px',
        'title-lg': '21px',
        'small-1': '12px',
        'small-2': '10px',
        '13': '13px',
        'sm': '15px',
        'md': '16px',
        'lg': '17px',
        'xl': '18px',
        '2xl': '21px',
        'full': '30px'
      },
      maxWidth: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      borderColor: {
        border: '#ffffff54'
      },
      padding: {
        header: '103px'
      },
      opacity: {
        'opa-1': '60%'
      }
    },
  },
  plugins: [],
}

