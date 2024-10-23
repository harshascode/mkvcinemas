<script>
	import { fly } from 'svelte/transition';
	/** @type {{pathname?: string, children?: import('svelte').Snippet}} */
	let { pathname = '', children } = $props();
</script>

{#key pathname}
	<div in:fly={{ x: -5, duration: 200, delay: 0 }}>
		{@render children?.()}
	</div>
{/key}