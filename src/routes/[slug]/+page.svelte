<script>
	import Head from '$lib/components/layout/Head.svelte';
	import Blog from '$lib/components/Blog.svelte';
	import Comments from '$lib/components/comment/index.svelte';
	import { page } from '$app/stores';

	export let data;
	const post = data.post;
	const author = data.author;
	const description = post.description || post.summary;

	// Dynamically get the current page URL
	$: currentUrl = $page.url?.href || '';

	// Define title and img based on post data or defaults
	$: title = post.title || 'Mkvcinemas';
	$: img = post.image; // Adjust as needed for your image URL

	// Reactive JSON-LD object
	$: jsonLd = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': currentUrl
		},
		headline: title,
		description: description,
		image: img,
		author: {
			'@type': 'Person',
			name: author.name || 'Harsh',
			url: author.url || 'https://mkvcinemas.buzz/harsha'
		},
		publisher: {
			'@type': 'Organization',
			name: 'Mkvcinemas',
			logo: {
				'@type': 'ImageObject',
				url: '/icon-512.png'
			}
		}
	});
</script>

<!-- Pass the current page URL to the Head component -->
<Head {title} {description} url={currentUrl} />

<!-- Render JSON-LD -->
<svelte:element this="script" type="application/ld+json">
	{jsonLd}
</svelte:element>

<Blog {post} {author} />
