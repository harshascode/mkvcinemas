<script>
	import { config } from '$lib/config';
	import Tag from '$lib/components/Tag.svelte';
	

	/**
	 * @typedef {Object} Props
	 * @property {any} post - import Author from '$lib/components/Author.svelte'; - export let author;
	 */

	/** @type {Props} */
	let { post } = $props();
	
</script>

<div class="mx-auto max-w-5xl px-0 sm:px-4 xl:max-w-5xl xl:px-0">
	<article>
		<div class="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
			<header class="pt-6 xl:pb-6">
				<div class="space-y-1 text-center">
					<div>
						<h1
							class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14"
						>
							{post.title}
						</h1>
					</div>
					<dl class="space-y-10">
						<div>
							<dt class="sr-only">Published on</dt>
							<dd class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
								<time dateTime={post.date}>
									{new Date(post.date).toLocaleDateString(config.locale, {
										weekday: 'long',
										year: 'numeric',
										month: 'long',
										day: 'numeric'
									})}
								</time>
							</dd>
						</div>
					</dl>
				</div>
			</header>
			<div
				class="divide-y divide-gray-200 pb-4 pt-0 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-7 xl:divide-y-0"
				style="grid-template-rows: auto 1fr;"
			>
				<div
					class="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0"
				>
					<div class="prose text-base lg:text-justify max-w-none pb-2 dark:prose-dark">
						{#if post.image}
							<div class="w-full">
								<img
									alt={post.title}
									src={post.image}
									width="100%"
									height="100%"
									class="object-center"
								/>
							</div>
						{/if}
						{@html post.content}
					</div>
				</div>
			</div>
		</div>
	</article>
</div>
