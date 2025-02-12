/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1200px',
    },
    colors: {
      'blue': '#1C3E6E',
      'green': '#109D59',
      'yellow': '#FA9D26',
      'gray': '#B3B3B3',
      'light-gray': '#DCDDE1',
      'white': "#FFFFFF"
    },
    maxWidth: {
      'xl': '1100px'
    },
    maxHeight: {
      'xl': '768px'
    },
    borderRadius: {
      'lg': '1rem',
      'xl': '2rem',
      'md': '0.375rem'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      retro: ['Retro Kraft'],
      articulat: ['Articulat CF']
    },
    opacity: {
      '0': '0',
      '20': '0.2',
      '40': '0.4',
      '60': '0.6',
      '80': '0.8',
      '100': '1',
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        'landing': "url('/src/assets/landing.png')",
        'meme-gallery': "url('/src/assets/meme-gallery.png')",
        'meme-generator': "url('/src/assets/meme-generator.png')",
        'road-map': "url('/src/assets/road-map.png')",
        'utility': "url('/src/assets/utility.png')",
      }
    }
  },
  plugins: [],
}

