import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	if (params.slug === 'hello') {
		return {
			title: 'Hello!',
			content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
		};
	}

	if (params.slug === 'world') {
		return {
			title: 'World!',
			content: 'Demo content for this slug. Lorem ipsum dolor sit amet...'
		};
	}

	throw error(404, 'Not found');
}
