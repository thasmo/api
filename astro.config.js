import { config } from '@dotenvx/dotenvx';
import { defineConfig } from 'astro/config';

config();

export default defineConfig({
	base: '/',
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'de'],
		routing: {
			prefixDefaultLocale: true,
		},
	},
	output: 'static',
	site: process.env.APPLICATION_SITE,
	trailingSlash: 'always',
});
