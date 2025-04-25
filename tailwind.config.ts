import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      // add a custom color 0d0d0d
      colors: {
        'black': '#0d0d0d'
      }
    }
  },

  plugins: []
} satisfies Config;
