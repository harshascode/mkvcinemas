<script>
	import { page } from '$app/stores'; // Access the page store
	import { derived } from 'svelte/store'; // Use derived to reactively get the URL
	import { config } from '$lib/config';

	/**
	 * @typedef {Object} Props
	 * @property {string} [title]
	 * @property {any} [description]
	 * @property {any} [author]
	 * @property {any} [domain]
	 */

	/** @type {Props} */
	let {
		title = 'MkvCinemas.com - Watch Movies On mkvcinemas🍿',
		description = config.description,
		author = config.author,
		domain = config.domain
	} = $props();

	// Reactively calculate the current page's URL
	const canonicalUrl = derived(page, ($page) => {
		// Ensure the URL is properly formed
		return $page.url ? `${config.siteUrl}${$page.url.pathname}` : config.siteUrl;
	});

	let img = `${config.siteUrl}/og-image.webp`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<!-- Reactive canonical link -->
	<link rel="canonical" href={$canonicalUrl} />

	<meta
		name="keywords"
		content="{title}, mkvcinemas, mkvcinemas movies, mkvcinemas.com, mkv cinemas, mkvcinemas mkv, mkvcinemas app, mkvcinemas 2024"
	/>
	<meta name="author" content={author} />

	<!-- Facebook Meta Tags -->
	<meta property="og:url" content={$canonicalUrl} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={img} />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content={domain} />
	<meta property="twitter:url" content={$canonicalUrl} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={img} />
</svelte:head>
