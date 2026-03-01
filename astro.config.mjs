// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
// import remarkBaseUrl from './remark-base-url.mjs';

// https://astro.build/config
export default defineConfig({
	site: 'https://MinCodeAccount.github.io',
	base: '/min-note',
	integrations: [mdx(), sitemap()],
	markdown: {
		// remarkPlugins: [remarkBaseUrl],
	},
});
