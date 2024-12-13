export const prerender = false;
import { getEntries, getTags } from '$lib/utils/entries.js';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	try {
		// Await the asynchronous call to getEntries
		const posts = await getEntries('posts');

		// Check if posts is null or an empty array
		if (!posts || posts.length === 0) {
			throw error(404, 'No posts found');
		}

		// Await if getTags is also an asynchronous function
		const tags = await getTags();

		// Return posts and tags
		return {
			posts,
			tags
		};
	} catch (err) {
		// Handle any errors that may occur
		console.error(err); // Log the error for debugging
		throw error(500, 'Internal Server Error');
	}
}

// this can bottle neck
// import { getEntries, getTags } from '$lib/utils/entries.js';
// import { error } from '@sveltejs/kit';

// /** @type {import('./$types').PageServerLoad} */
// export async function load() {
//     try {
//         // Fetch posts and tags concurrently
//         const [posts, tags] = await Promise.all([
//             getEntries('posts'),
//             getTags()
//         ]);

//         // Check if posts is null or an empty array
//         if (!posts || posts.length === 0) {
//             throw error(404, 'No posts found');
//         }

//         // Return posts and tags
//         return {
//             posts,
//             tags
//         };
//     } catch (err) {
//         // Handle any errors that may occur
//         console.error(err); // Log the error for debugging
//         throw error(500, 'Internal Server Error');
//     }
// }

// export const prerender = false;
// import { getEntries, getTags } from '$lib/utils/entries.js';
// // import { tags } from '$lib/data/tags';
// import { error } from '@sveltejs/kit';

// /** @type {import('./$types').PageServerLoad} */
// export async function load() {
// 	const posts = getEntries('posts');
// 	if (!posts) {
// 		throw error(404, 'No post found');
// 	}

// 	const tags = getTags();

// 	return {
// 		// eslint-disable-next-line no-unused-vars
// 		posts: posts,
// 		tags: tags
// 	};
// }
