// https://astro.build/config
import { defineConfig } from 'astro/config';

// Astro integrations
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import svelte from "@astrojs/svelte";

// Third-party plugins
import yaml from '@rollup/plugin-yaml';
import { astroImageTools } from "astro-imagetools";

export default defineConfig({
  // TODO: add site url for sitemap plugin to use
  // site: 'https://mywebsite.com',
  integrations: [
    tailwind({
      config: { applyBaseStyles: false },
    }),
    sitemap(),
    svelte(),
    astroImageTools
  ],

  vite: {
    plugins: [
      yaml(),
    ]
  }
});