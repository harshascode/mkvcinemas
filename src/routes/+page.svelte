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
		Welcome to Mkvcinemas
	</h1>
	<p class="text-xl prose-xl text-gray-800 dark:text-gray-400">
		Looking for the latest Mkv cinemas in HD quality? MkvCinemas offers a wide range of options to stream or download movies, TV shows, and web series for free or through popular paid platforms. You can enjoy the newest content in multiple languages, including Tamil, Telugu, Hindi, English, Malayalam, Kannada, Marathi, and Odia, all conveniently available on the Mkvcinemas web app.
	</p>
</div>

<Blogs title="Latest Posts" h2 {posts} search={false} count={15} />
