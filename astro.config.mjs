import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// Remplacer par le domaine définitif avant la mise en production.
const site = process.env.SITE_URL ?? 'https://www.maison-vergy.example';

export default defineConfig({
  site,
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [react(), sitemap()],
  image: { layout: 'constrained' },
});
