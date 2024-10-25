<script>
	import Transition from '$lib/components/layout/Transition.svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	// import Analytics from '$lib/components/analytics/index.svelte';
	import '../app.css';

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
		<script type='text/javascript' src='//pl24802743.profitablecpmrate.com/88/e2/96/88e296c43fb10e446742aea249efec60.js'></script>
	</div>
</div>

<svelte:head>
	<script
		async
		src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1041258011323535"
		crossorigin="anonymous"
	></script>
	<script
		defer
		data-website-id={import.meta.env.VITE_UMAMI_WEBSITE_ID}
		src="https://umami-psi-three.vercel.app/script.js"
	></script>
</svelte:head>

<!-- <Analytics /> -->
