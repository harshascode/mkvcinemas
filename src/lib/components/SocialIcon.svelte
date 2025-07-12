<script>
	import IconMail from '$lib/icons/mail.svelte';
	import IconGithub from '$lib/icons/github.svelte';
	import IconFacebook from '$lib/icons/facebook.svelte';
	import IconYoutube from '$lib/icons/youtube.svelte';
	import IconLinkedin from '$lib/icons/linkedin.svelte';
	import IconTwitter from '$lib/icons/twitter.svelte';

	/**
	 * @typedef {Object} Props
	 * @property {string} [url]
	 * @property {string} [icon]
	 * @property {boolean} [small]
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let {
		url = '',
		icon = '',
		small = false,
		children
	} = $props();

	let size = small ? 'w-5' : 'w-7';

	const options = [
		{ caption: 'mail', component: IconMail },
		{ caption: 'github', component: IconGithub }
		// { caption: 'facebook', component: IconFacebook },
		// { caption: 'youtube', component: IconYoutube },
		// { caption: 'linkedin', component: IconLinkedin },
		// { caption: 'twitter', component: IconTwitter }
	];

	let svg = options.find((option) => option.caption === icon)?.component;
</script>

{#if url}
	{@const SvelteComponent = svg}
	<a
		class="flex gap-x-2 text-gray-500 transition hover:text-primary-600"
		href={url || '#'}
		target="_blank"
		rel="noreferrer"
	>
		<span class="sr-only">{icon}</span>
		<SvelteComponent class="{size} " />
		<span>
			{@render children?.()}
		</span>
	</a>
{/if}
