import data from '../data.json';

export function GET() {
	return new Response(JSON.stringify(data), {
		headers: {
			'Content-Type': 'application/json',
		},
	});
}
