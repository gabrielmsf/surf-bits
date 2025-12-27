// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import buildMetrics from './src/lib/build-metrics';

// https://astro.build/config
export default defineConfig({
  site: 'https://surf-bits.com',
  integrations: [
      react(),
      sitemap(),
      buildMetrics()
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});