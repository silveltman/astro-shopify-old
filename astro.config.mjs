// https://astro.build/config
import { defineConfig } from 'astro/config';

// Astro integrations
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import svelte from "@astrojs/svelte";

// Third-party plugins
import yaml from '@rollup/plugin-yaml';

// https://astro.build/config
export default defineConfig({
  // TODO: add site url for sitemap plugin to use
  site: 'https://energized-beet.cloudvent.net/',
  integrations: [
    sitemap(),
    svelte(),
    tailwind({
      config: {
        applyBaseStyles: false
      }
    }),
  ],
  vite: {
    plugins: [yaml()]
  }
});