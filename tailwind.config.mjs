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
        card: '#3D405B',
        footer: '#0D1B2A',
        header: '#1b263b',
        icon: '#E5E5E5',
      },
      maxWidth: {
        desktop: '1400px',
      },
      fontFamily: {
        raleway: ['Raleway Variable', ...defaultTheme.fontFamily.sans],
        montserrat: ['Montserrat Variable', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
