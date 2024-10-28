export const prerender = true;
// import { getEntries } from '$utils/entries.js';
// import { error } from '@sveltejs/kit';

// /** @type {import('./$types').PageServerLoad} */
// export async function load() {
// 	try {
// 		const posts = await getEntries('posts'); // Ensure async if needed
// 		if (!posts || posts.length === 0) {
// 			throw error(404, 'No posts found');
// 		}
// 		return { posts };
// 	} catch (err) {
// 		// If using prerender, handle errors gracefully to avoid build failures.
// 		console.error('Error loading posts:', err);
// 		return { posts: [] }; // Avoid throwing error during build.
// 	}
// }

// export const prerender = true;
// import { getEntries } from '$utils/entries.js';
// import { error } from '@sveltejs/kit';

// /** @type {import('./$types').PageServerLoad} */
// export async function load() {
// 	const posts = getEntries('posts');
// 	if (!posts) {
// 		throw error(404, 'No post found');
// 	}

// 	return {
// 		// eslint-disable-next-line no-unused-vars
// 		posts: posts
// 	};
// }
