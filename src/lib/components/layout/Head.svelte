<script>
	import { page } from '$app/stores'; // Import the page store to access URL
	import { get } from 'svelte/store'; // Utility to extract store values
	import { config } from '$lib/config';

	export let title = 'MkvCinemas.com - Watch Movies On mkvcinemas🍿';
	export let description = config.description;
	export let author = config.author;
	export let domain = config.domain;
	// export let rtl = false;

	// Calculate the current URL using the page store
	let url = get(page).url.href || config.siteUrl; // Fallback to siteUrl if the current URL is unavailable

	// Generate the image URL
	// export let img = `${url.replace(/\/$/, '')}/og?message=${rtl ? title.split(' ').pop() : title}`;
	// export let img = `${url.replace(/\/$/, '')}/og?message=${title}`;
	let img = `${config.siteUrl}/static/og-image.jpg`;
</script>

<svelte:head>
	<title>{title} | {config.title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={url} />
	<meta
		name="keywords"
		content="{title}, mkvcinemas, mkvcinemas movies, mkvcinemas.com, mkvcinemas i, mkv cinemas, mkvcinemas movies, mkvcinemas in, mkvcinemas app, mkvcinemas mkv, mkvcinemas mkv 2024"
	/>
	<meta name="author" content={author} />

	<!-- Facebook Meta Tags -->
	<meta property="og:url" content={url} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={img} />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content={domain} />
	<meta property="twitter:url" content={url} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={img} />
</svelte:head>
