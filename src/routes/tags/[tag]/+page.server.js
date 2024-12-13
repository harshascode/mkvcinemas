export const prerender = false;
import { error } from '@sveltejs/kit';
import { slug } from 'github-slugger';
import { getEntries } from '$lib/utils/entries.js';

// Cache for slug generation
const slugCache = new Map();

function generateSlugs(tags) {
	if (!tags) return [];

	// Create a unique key for the tags array to use for caching
	const key = tags.join(',');

	if (slugCache.has(key)) {
		return slugCache.get(key);
	}

	const slugs = tags.map((tag) => slug(tag));
	slugCache.set(key, slugs);
	return slugs;
}

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const { tag } = params;
	const posts = getEntries('posts');

	// Create a Set for faster lookups
	const filteredPosts = posts.filter((post) => {
		const slugSet = new Set(generateSlugs(post.tags));
		return slugSet.has(tag);
	});

	if (filteredPosts.length === 0) {
		throw error(404, 'No post found');
	}

	return {
		tag,
		posts: filteredPosts
	};
}

// export const prerender = false;
// import { error } from '@sveltejs/kit';
// import { slug } from 'github-slugger';
// import { getEntries } from '$lib/utils/entries.js';

// function slugsArray(tags) {
// 	return tags?.map((t) => slug(t)) || [];
// }

// /** @type {import('./$types').PageServerLoad} */
// export async function load({ params }) {
// 	const { tag } = params;
// 	const posts = getEntries('posts');
// 	const filteredPosts = posts.filter((p) => slugsArray(p.tags).includes(tag));

// 	if (!filteredPosts) {
// 		throw error(404, 'No post found');
// 	}

// 	return {
// 		// eslint-disable-next-line no-unused-vars
// 		tag: tag,
// 		posts: filteredPosts
// 	};
// }
