<script>
	import { config } from '$lib/config';
	import SocialIcon from '$lib/components/SocialIcon.svelte';
	import Newsletter from '$lib/components/Newsletter.svelte';

	let year = new Date().getFullYear();
</script>

<footer>
	<div class="mt-10 flex flex-col items-center border-t pt-6 gap-2">
		<!-- <div class="mb-4 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
			We, at MKVCinemas.buzz, operate as a listing and bookmarking site, providing links to both
			free and paid websites for your convenience. Please note that we are not responsible for the
			content found on these external sites. We do not host, distribute, or promote any pirated
			movies or engage in any form of piracy. Our platform solely offers movie reviews, discussions
			on the latest films, and other related topics. We encourage our users to support the film
			industry by accessing content through legal and authorized channels.
		</div> -->
		<div class="mb-4 flex space-x-2 text-sm italic text-gray-500 dark:text-gray-400">
			Disclaimer: At MKVCinemas.buzz, operate as a listing, bookmarking and reviews site, we provide movie reviews and information for entertainment purposes only. We do not host, distribute, or promote any pirated content and encourage users to support the film industry by accessing movies through legal channels. All movie images and banners have been edited for illustrative purposes; we do not claim ownership of the original images, and all rights belong to their respective copyright holders. Please note that we only own the domain mkvcinemas.buzz and are not affiliated any other domains, which may contain pirated content.
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
			Copyright © <a href="/">&nbsp; Mkvcinemas &nbsp;</a>
			{year} All rights Reserved &nbsp; • &nbsp; <a href="/sitemap.xml">Sitemap</a> &nbsp; • &nbsp;
			<a href="/rss.xml">RSS Feed</a>
		</div>
	</div>
</footer>
