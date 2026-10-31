import cloudflare from '@astrojs/cloudflare';
import { config } from '@dotenvx/dotenvx';
import { defineConfig } from 'astro/config';
import { voidPlugin } from 'void';

config();

export default defineConfig({
	adapter: cloudflare({
		configPath: './.void-wrangler.jsonc',
		imageService: 'compile',
	}),
	base: '/',
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'de'],
	},
	output: 'server',
	site: import.meta.env.APPLICATION_SITE,
	trailingSlash: 'always',
	session: false,
	vite: {
		plugins: [voidPlugin()],
	},
});
