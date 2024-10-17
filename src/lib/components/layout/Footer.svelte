<script>
	import { config } from '$lib/config';
	import SocialIcon from '$lib/components/SocialIcon.svelte';
	import Newsletter from '$lib/components/Newsletter.svelte';

	let year = new Date().getFullYear();
</script>

<footer>
	<div class="mt-16 flex flex-col items-center border-t pt-6 gap-2">
		<div class="mb-4 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
			We, at MKVCinemas.buzz, operate as a listing and bookmarking site, providing links to both free and paid websites for your convenience. Please note that we are not responsible for the content found on these external sites. We do not host, distribute, or promote any pirated movies or engage in any form of piracy. Our platform solely offers movie reviews, discussions on the latest films, and other related topics. We encourage our users to support the film industry by accessing content through legal and authorized channels.
		</div>
		<div class="mb-3 flex space-x-2">
			<SocialIcon icon="mail" url={config.email ? `mailto:${config.email}` : ''} />
			<SocialIcon icon="github" url={config.github} />
			<SocialIcon icon="facebook" url={config.facebook} />
			<SocialIcon icon="youtube" url={config.youtube} />
			<SocialIcon icon="linkedin" url={config.linkedin} />
			<SocialIcon icon="twitter" url={config.twitter} />
		</div>
		{#if config.newsletter.provider}
			<Newsletter />
		{/if}
		<div class="mb-4 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
			Copyright © <a href="/">&nbsp;{config.title}&nbsp;</a>
			{year} All rights Reserved &nbsp; • &nbsp; <a href="/sitemap.xml">Sitemap</a> &nbsp; • &nbsp;
			<a href="/rss.xml">RSS Feed</a>
		</div>

	</div>
</footer>
