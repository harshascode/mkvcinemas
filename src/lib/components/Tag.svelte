<script>
	import { slug } from 'github-slugger';

	/**
	 * @typedef {Object} Props
	 * @property {string} [text]
	 * @property {string} [size]
	 * @property {any} [url]
	 */

	/** @type {Props} */
	let { text = '', size = 'text-sm', url = slug(text) } = $props();
</script>

<a
	href={`/tags/${url}`}
	class="mr-3 font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 {size}"
>
	{text}
</a>
