import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://kwhklar.de',
  output: 'static',
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en', 'es', 'ja', 'fr', 'pt', 'ko', 'it'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
