import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
	let response;
	const { pathname } = context.url;

	if (pathname === '/') {
		return context.redirect('/en/', 301);
	}

	if (pathname === '/en/') {
		response = await context.rewrite('/en/index.json');
	}
	else if (pathname === '/de/') {
		response = await context.rewrite('/de/index.json');
	}
	else {
		response = await next();
	}

	const headers = {
		'Access-Control-Allow-Origin': '*',
		'Referrer-Policy': 'no-referrer',
		'Permissions-Policy': '',
		'X-Frame-Options': 'DENY',
		'X-Content-Type-Options': 'nosniff',
	};

	Object.entries(headers).forEach(([key, value]) => {
		response.headers.set(key, value);
	});

	return response;
});
