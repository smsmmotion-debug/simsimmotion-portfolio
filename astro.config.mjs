import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE_URL and BASE_PATH are set by the GitHub Pages workflow.
// For a user site (username.github.io) BASE_PATH is "/".
// For a project site (username.github.io/repo) BASE_PATH is "/repo".
const site = process.env.SITE_URL || 'https://simsimmotion.github.io';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [sitemap()],
});
