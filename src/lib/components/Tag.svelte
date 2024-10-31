<script>
	import { slug } from 'github-slugger';

	/** @type {{text?: string, size?: string, url?: any}} */
	let { text = '', size = 'text-sm', url = slug(text) } = $props();
</script>

<a
	href={`/tags/${url}`}
	class="mr-3 font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 {size}"
>
	{text}
</a>
