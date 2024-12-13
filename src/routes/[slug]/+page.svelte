<script>
	import Head from '$lib/components/layout/Head.svelte';
	import Blog from '$lib/components/Blog.svelte';

	export let data;
	const post = data.post;
	let title = post.title + ' | MkvCinemas' || 'Mkvcinemas';
	let description = post.summary;
</script>

<!-- Use the URL in the Head component -->
<Head {title} {description} />

<Blog {post} />
