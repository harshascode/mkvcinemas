<script>
	const freeOttLinks = [
		{ href: '/hindi-movies', src: '/img/hindi.svg', alt: 'hindi-movies' },
		{ href: '/telugu-movies', src: '/img/telugu.svg', alt: 'telugu-movies' },
		{ href: '/tamil-movies', src: '/img/tamil.svg', alt: 'tamil-movies' },
		{ href: '/kannada-movies', src: '/img/kannada.svg', alt: 'kannada-movies' },
		{ href: '/bookmarks-list', src: '/img/malayalam.svg', alt: 'malayalam-movies' },
		{ href: 'https://www.youtube.com', src: '/img/youtube.svg', alt: 'YouTube', target: '_blank' }
	];

	const logos = [
		{ src: '/img/netflix.svg', link: 'https://www.netflix.com' },
		{ src: '/img/prime-video.svg', link: 'https://www.primevideo.com' },
		{ src: '/img/disney.svg', link: 'https://www.disneyplus.com' },
		{ src: '/img/appletv.svg', link: 'https://www.apple.com/apple-tv-plus/' },
		{ src: '/img/sunnxt.svg', link: 'https://www.sunnxt.com' },
		{ src: '/img/zee5.svg', link: 'https://www.zee5.com' },
		{ src: '/img/sonyliv.svg', link: 'https://www.sonyliv.com' },
		{ src: '/img/jiocinema.svg', link: 'https://www.jiocinema.com' },
		{ src: '/img/aha.svg', link: 'https://www.aha.video' },
		{ src: '/img/mxplayer.svg', link: 'https://www.mxplayer.in' },
		{ src: '/img/nammaflix.svg', link: 'https://www.nammaflix.com' },
		{ src: '/img/manoramamax.svg', link: 'https://www.manoramamax.com' }
	];

	export let title = 'Bookmarks list';
	export let description =
		'Mkvcinemas.buzz: Your go-to bookmark site for top free movie streaming platforms, latest Mkvmovies, and must-see reviews and trailers all in one place😎';
	export let url = 'https://mkvcinemas.buzz/bookmarks-list';
</script>

<svelte:head>
	<title>{title} | Mkvcinemas</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={url} />

	<meta
		name="keywords"
		content="{title}, mkvcinemas, mkvcinemas movies, mkvcinemas.com, mkvcinemas i, mkv cinemas, mkvcinemas movies, mkvcinemas in, mkvcinemas app, mkvcinemas mkv, mkvcinemas mkv 2024"
	/>
</svelte:head>

<div class="w-full h-full pt-2 pb-2 lg:pt-4 lg:pb-8 flex flex-col items-center justify-center">
	<div class="w-full py-4">
		<!-- Free OTT -->
		<div class="mb-8">
			<h2 class="text-xl font-semibold mb-4">Free OTT</h2>
			<div class="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-4">
				{#each freeOttLinks as { href, src, alt }}
					<a {href} class="h-full">
						<div
							class="flex items-center justify-center p-1 rounded bg-blue-200 cursor-pointer h-fit"
						>
							<img {src} {alt} width="100" height="50" class="h-full w-full" />
						</div>
					</a>
				{/each}
			</div>
		</div>
		<!-- Paid OTT  -->
		<div>
			<h2 class="text-xl font-semibold mb-4">Paid OTT</h2>
			<div class="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-4">
				{#each logos as logo, index}
					<a href={logo.link} target="_blank" rel="noopener noreferrer">
						<div class="flex items-center justify-center p-1 bg-red-300 rounded cursor-pointer">
							<img
								src={logo.src}
								alt={`Logo ${index}`}
								width="100"
								height="50"
								class="h-full w-full"
							/>
						</div>
					</a>
				{/each}
			</div>
		</div>
	</div>
</div>

<!-- <div>
	<script defer type="text/javascript" src="//pl24802779.profitablecpmrate.com/fa/59/dd/fa59ddcc9eb856b36b6e180e007e18eb.js"></script>
</div> -->