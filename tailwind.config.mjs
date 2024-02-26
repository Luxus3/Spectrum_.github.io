import defaultTheme from 'tailwindcss/defaultTheme';
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        body: '#293241',
        color: '#FFFFFF',
        particles: '#8338EC',
        footer: '#0D1B2A',
        icon: '#E5E5E5',
      },
      maxWidth: {
        desktop: '1024px',
      },
      fontFamily: {
        raleway: ['Raleway Variable', ...defaultTheme.fontFamily.sans],
        montserrat: ['Montserrat Variable', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        mobile: '370px',
      },
      spacing: {
        '20vh': '20vh',
        '40vh': '40vh',
        '60vh': '60vh',
        '80vh': '80vh',
        '100vh': '100vh',
      },
      backgroundImage: {
        gradient: 'linear-gradient(to right, #1b263b 0%, black 100%);',
      },
    },
  },
  plugins: [],
};
