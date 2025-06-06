import { config } from '@dotenvx/dotenvx';
import { defineConfig } from 'astro/config';

config();

export default defineConfig({
	base: '/',
	output: 'static',
	site: process.env.APPLICATION_SITE,
	trailingSlash: 'always',
});
