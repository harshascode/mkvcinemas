<script>
	// import Transition from '$lib/components/layout/Transition.svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	// import Analytics from '$lib/components/analytics/index.svelte';
	import '../app.css';
</script>

<div class="mx-auto max-w-7xl px-4 sm:px-6 xl:max-w-7xl xl:px-0">
	<!-- <div class="mx-auto px-4 sm:px-6 xl:px-6"> -->
	<div class="flex h-screen flex-col justify-between">
		<Header />
		<main class="mb-auto">
			<slot />
		</main>
		<Footer />
	</div>
</div>

<!-- <svelte:head> -->
	<!-- <script
		defer
		data-website-id={import.meta.env.VITE_UMAMI_WEBSITE_ID}
		src="https://umami-psi-three.vercel.app/script.js"
	></script> -->
<!-- </svelte:head> -->

<!-- <Analytics /> -->

<div>
	<script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
	<noscript><img src="https://queue.simpleanalyticscdn.com/noscript.gif"alt=""referrerpolicy="no-referrer-when-downgrade" /></noscript>
</div>