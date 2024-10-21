<script>
	import Transition from '$lib/components/layout/Transition.svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	// import Analytics from '$lib/components/analytics/index.svelte';
	import '../app.css';
	// import AppHead from '$lib/components/AppHead.svelte';

	export let data = {};
</script>

<div class="mx-auto max-w-7xl px-4 sm:px-6 xl:max-w-7xl xl:px-0">
	<!-- <div class="mx-auto px-4 sm:px-6 xl:px-6"> -->
	<div class="flex h-screen flex-col justify-between">
		<Header />
		<main class="mb-auto">
			<Transition pathname={data?.pathname}>
				<slot />
			</Transition>
		</main>
		<Footer />
	</div>
</div>

<svelte:head>
	<script
		async
		src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1041258011323535"
		crossorigin="anonymous"
	></script>

	<script type="application/ld+json">
		{"@context":"https://schema.org","@graph":[{"@type":"WebSite","@id":"https://mkvcinemas.buzz/#website","url":"https://mkvcinemas.buzz/","name":"mkvCinemas","description":"mkvCinemas PC and Smartphone Movies of Bollywood, Hollywood, Hindi Cartoon, Anime, TV Shows, Web Series at mkvCinemas","publisher":{"@id":"https://mkvcinemas.buzz/#organization"},"potentialAction":{"@type":"SearchAction","target":"https://mkvcinemas.buzz/blog?query={search_term_string}","query-input":"required name=search_term_string"},"inLanguage":"en-US"},{"@type":"Organization","@id":"https://mkvcinemas.buzz/#organization","name":"mkvCinemas","url":"https://mkvcinemas.buzz/","logo":{"@type":"ImageObject","url":"https://www.mkvcinemas.buzz/logo.png","width":180,"height":180,"caption":"mkvCinemas"},"contactPoint":[{"@type":"ContactPoint","contactType":"Customer Support","email":"info@mkvcinemas.buzz","availableLanguage":"en"}]},{"@type":"BreadcrumbList","@id":"https://mkvcinemas.buzz/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://mkvcinemas.buzz/"},{"@type":"ListItem","position":2,"name":"Bollywood Movies","item":"https://mkvcinemas.buzz/hindi-movies"},{"@type":"ListItem","position":3,"name":"Telugu Movies","item":"https://mkvcinemas.buzz/telugu-movies"},{"@type":"ListItem","position":4,"name":"Kannada Movies","item":"https://mkvcinemas.buzz/kannada-movies"},{"@type":"ListItem","position":5,"name":"Tamil Movies","item":"https://mkvcinemas.buzz/tamil-movies"},{"@type":"ListItem","position":6,"name":"OTT Bookmarks","item":"https://mkvcinemas.buzz/bookmarks-list"}]}]}
	</script>
	<script
		defer
		src="https://umami-psi-three.vercel.app/script.js"
		data-website-id={import.meta.env.VITE_UMAMI_WEBSITE_ID}
	></script>
</svelte:head>

<!-- <Analytics /> -->
