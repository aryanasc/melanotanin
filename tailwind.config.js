/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Space Mono"', 'monospace'],
      },
      colors: {
        dark: '#121212',
        darker: '#0A0A0A',
        medium: '#1A1A1A',
        light: '#F5F5F5',
        white: '#F5F5F5',
        accent: '#DAA520',
        accentLight: '#F0C05A',
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
      letterSpacing: {
        widest: '0.15em',
        wider: '0.1em',
        wide: '0.05em',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out forwards',
        'progress': 'progressBar 2s ease-out forwards',
      },
    },
  },
  plugins: [],
};