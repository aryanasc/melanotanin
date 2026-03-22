/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        cream: '#FAF7F2',
        warm: {
          black: '#1A1A1A',
          grey: '#6B6560',
          light: '#E8E4DE',
        },
        gold: '#C8A24E',
        'gold-dark': '#B08D3A',
        pink: '#D48B8B',
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
        '6xl': '3.75rem',
        '7xl': '4.5rem',
      },
      letterSpacing: {
        widest: '0.15em',
        wider: '0.1em',
        wide: '0.05em',
      },
    },
  },
  plugins: [],
};