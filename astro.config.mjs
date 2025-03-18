import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import svelte from '@astrojs/svelte';
// https://astro.build/config
export default defineConfig({
  site: 'https://hvkalayil.github.io/',
  integrations: [sitemap(), svelte()],

  vite: {
    plugins: [tailwindcss()],
    server: {
      host: '0.0.0.0',
      allowedHosts: [ 'portfolio.hvk.life' ]
    }
  },
});