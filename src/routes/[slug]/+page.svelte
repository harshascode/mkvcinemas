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
	$: title = post.title || 'Default Title';
	$: img = post.image; // Adjust as needed for your image URL

	// Reactive JSON-LD object
	$: jsonLd = JSON.stringify({
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		"mainEntityOfPage": {
			"@type": "WebPage",
			"@id": currentUrl
		},
		"headline": title,
		"description": description,
		"image": img,
		"author": {
			"@type": "Person",
			"name": author.name || 'Harsha',
			"url": author.url || "https://bloketo.com/Harsha"
		},
		"publisher": {
			"@type": "Organization",
			"name": "Bloketo",
			"logo": {
				"@type": "ImageObject",
				"url": "/icon-512.png"
			}
		}
	});
</script>

<!-- Pass the current page URL to the Head component -->
<Head title={title} description={description} url={currentUrl} />

<!-- Render JSON-LD -->
<svelte:element this="script" type="application/ld+json">
	{jsonLd}
</svelte:element>

<Blog {post} {author} />
<Comments />




<!-- <script>
	import Head from '$lib/components/layout/Head.svelte';
	import Blog from '$lib/components/Blog.svelte';
	import Comments from '$lib/components/comment/index.svelte';
	import { page } from '$app/stores';  // Import the page store

	export let data;
	const post = data.post;
	const author = data.author;
	const description = post.description || post.summary;

	// Dynamically get the current page URL
	$: currentUrl = $page.url?.href || '';

	// Reactive JSON-LD object
	$: jsonLd = JSON.stringify({
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		"mainEntityOfPage": {
			"@type": "WebPage",
			"@id": url
		},
		"headline": title,
		"description": description,
		"image": img,
		"author": {
			"@type": "Person",
			"name": "Harsha",
			"url": "https://bloketo.com/Harsha"
		},
		"publisher": {
			"@type": "Organization",
			"name": "Bloketo",
			"logo": {
				"@type": "ImageObject",
				"url": "/icon-512.png"
			}
		}
	});
</script> -->

<!-- Pass the current page URL to the Head component -->
<!-- <Head title={post.title} description={description} url={currentUrl} />

<script type="application/ld+json" data-svelte-h="svelte-2aak8q">
	{jsonLd}
</script>

<Blog {post} {author} />
<Comments /> -->




<!-- <script>
	import Head from '$lib/components/layout/Head.svelte';
	import Blog from '$lib/components/Blog.svelte';
	import Comments from '$lib/components/comment/index.svelte';

	export let data;
	const post = data.post;
	const author = data.author;
</script>

<Head title={post.title} />

<Blog {post} {author} />
<Comments /> -->
