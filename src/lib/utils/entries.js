import { browser } from '$app/environment';
import { slug } from 'github-slugger';
import { config } from '$lib/config.js';
import { render } from 'svelte/server'; // Import the render function from svelte/server

export const prerender = true;

// Ensure this runs server-side only
if (browser) {
    throw new Error(`posts can only be imported server-side`);
}

// Import posts eagerly
const posts = Object.entries(import.meta.glob('/content/posts/**/*.md', { eager: true }));

const getMetadata = (filepath, entry) => {
    const { metadata } = entry;
    const slugValue = filepath
        .replace(/(\/index)?\.md/, '')
        .split('/')
        .pop();

    // Use the render function from 'svelte/server' to get the HTML content
    // entry.default is the Svelte component generated from the Markdown file.
    const { html } = render(entry.default, { props: {} }); // Pass an empty props object if no props are expected

    return {
        ...metadata,
        content: html, // Use the html from the render function
        slug: slugValue,
        tag: metadata.type?.split(' ').shift().toLowerCase() || null,
        tags: metadata.tags || []
    };
};

// Get all entries and add metadata
export const getEntries = () => {
    return posts
        .map(([filepath, entry]) => getMetadata(filepath, entry))
        .filter((entry) => !entry.draft)
        .sort((a, b) => b.date - a.date); // Sort by date, newest first
};

export const getTags = () => {
    const posts = getEntries();
    const tagMap = new Map();

    posts.forEach(({ tags }) => {
        tags.forEach((tag) => {
            const slugValue = slug(tag);
            if (tagMap.has(slugValue)) {
                tagMap.get(slugValue).count++;
            } else {
                tagMap.set(slugValue, { text: tag, slug: slugValue, count: 1 });
            }
        });
    });

    return Array.from(tagMap.values()).sort((a, b) => b.text.localeCompare(a.text));
};
