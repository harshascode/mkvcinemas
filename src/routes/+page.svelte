<script>
	import Head from '$lib/components/layout/Head.svelte';
	import Blogs from '$lib/components/Blogs.svelte';

	export let data;
	let posts = data.posts;
</script>

<Head />

<div class="pt-12">
	<h1
		class="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"
	>
		Welcome to SvelteKit Blog
	</h1>
	<p class="text-xl prose-xl text-gray-800 dark:text-gray-400">
		This is a SvelteKit 2.5.26 and Tailwind CSS blog template. It is MIT-licensed, so you can use it
		however you like. I have updated all the packages to the latest versions, fixed some of the
		code, and made a few layout changes. This is a fork of another repository.
	</p>
</div>

<Blogs title="Latest Posts" h2 {posts} search={false} count={15} />
