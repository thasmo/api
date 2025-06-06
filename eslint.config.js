import config from '@somehow-digital/eslint-config/basic';
import astro from 'eslint-plugin-astro';
import globals from 'globals';

export default [
	...config,
	...astro.configs.recommended,
	{
		ignores: ['**/.*/', 'dist/'],
	},
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
	},
];
