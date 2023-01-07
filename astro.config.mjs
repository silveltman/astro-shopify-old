// https://astro.build/config
import { defineConfig } from 'astro/config';

// Astro integrations
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import svelte from "@astrojs/svelte";

// Third-party plugins
import yaml from '@rollup/plugin-yaml';
import { astroImageTools } from "astro-imagetools";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  // TODO: add site url for sitemap plugin to use
  // site: 'https://mywebsite.com',
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }),
  sitemap(),
  svelte(),
  image(
    {
      serviceEntryPoint: '@astrojs/image/sharp'
    }
  ),
    astroImageTools
  ],
  vite: {
    plugins: [yaml()]
  }
});