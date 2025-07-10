import { config } from '@dotenvx/dotenvx';
import { defineConfig } from 'astro/config';

config();

export default defineConfig({
	base: '/',
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'de'],
	},
	output: 'static',
	redirects: {
		'/': {
			destination: '/en/',
			status: 301,
		},
	},
	site: process.env.APPLICATION_SITE,
	trailingSlash: 'always',
});
