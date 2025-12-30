import cloudflare from '@astrojs/cloudflare';
import { config } from '@dotenvx/dotenvx';
import { defineConfig } from 'astro/config';

config();

export default defineConfig({
	adapter: cloudflare({
		imageService: 'compile',
		mode: 'advanced',
		platformProxy: {
			enabled: true,
		},
	}),
	base: '/',
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'de'],
	},
	output: 'server',
	site: import.meta.env.APPLICATION_SITE,
	trailingSlash: 'always',
});
