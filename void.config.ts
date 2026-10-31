import { defineConfig } from 'void/config';

export default defineConfig({
	cloudflare: {
		compatibility_date: '2025-12-30',
		compatibility_flags: [
			'nodejs_compat',
			'global_fetch_strictly_public',
			'nodejs_als',
		],
		name: 'thasmo-api',
		observability: {
			enabled: true,
		},
		preview_urls: true,
		routes: [
			{
				pattern: 'api.thasmo.com',
				custom_domain: true,
			}
		],
		workers_dev: false,
	},
	inference: {
		appType: 'framework',
	}
});
