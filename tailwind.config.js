/* eslint-disable import/no-extraneous-dependencies, global-require */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}',
    './node_modules/astro-boilerplate-components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          base: '#F8F7F4',
          surface: '#FFFFFF',
          elevated: '#F0EEE9',
          border: '#E4E0D9',
        },
        sand: {
          100: '#111110',
          200: '#3A3A37',
          300: '#737370',
          400: '#A3A3A0',
          500: '#D4D4D0',
        },
        flame: '#2563EB',
        teal: '#059669',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        display: ['"DM Sans"', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
};
