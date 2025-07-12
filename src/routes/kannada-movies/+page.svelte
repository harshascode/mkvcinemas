<script>
	/**
	 * @typedef {Object} Props
	 * @property {string} [title]
	 * @property {string} [description]
	 * @property {string} [url]
	 */

	/** @type {Props} */
	let { title = 'Mkvcinemas Kannada Movies Watch online in HD | Mkvcinemas', description = 'Watch your favorite Kannada movies on mkvcinemas in high-quality resolutions like 1080p, 720p, 480p, and 4K. Stream, Download latest Sandalwood hits', url = 'https://mkvcinemas.buzz/kannada-movies' } = $props();
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={url} />
	<meta name="robots" content="index, follow" />
	<meta
		name="keywords"
		content="mkvcinemas, mkvcinemas movies, mkvcinemas.com, mkvcinemas i, mkvcinemas app"
	/>
</svelte:head>

<div class="pt-12">
	<h1
		class="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"
	>
		Mkvcinemas Kannada Movies
	</h1>
	<p class="paragraph">
		Kannada cinema, often referred to as Sandalwood, has emerged as a vibrant and dynamic part of
		the Indian film industry. With a rich history back to the early 1930s, Kannada films have
		captivated audiences with their unique storytelling, diverse genres, and exceptional talent.
	</p>
	<p class="paragraph">
		MKVCinemas offers a seamless experience for downloading Kannada movies in HD quality. You can
		effortlessly stream and download the newest Kannada films from a variety of OTT platforms. To
		ensure you’re accessing the latest movies, always choose a reputable website that has the
		necessary rights to provide download services for the newest Kannada and South Indian films.
	</p>

	<div class="mx-auto pb-10">
		<h2 class="text-center text-3xl font-bold mb-8">Kannada Movies</h2>
		<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
			<!-- Movie Card -->
			<div
				class="p-0 w-full h-full m-auto rounded hover:scale-105 transition-transform mb-6 cursor-pointer"
			>
				<a href="/ui">
					<img
						src="/i/ui.webp"
						alt="UI movie"
						width="1200"
						height="628"
						class="rounded-sm mb-4"
						loading="lazy"
					/>
					<p class="movi-name">UI</p>
					<p class="year-btn">2024</p>
				</a>
			</div>
			<div
				class="p-0 w-full h-full m-auto rounded hover:scale-105 transition-transform mb-6 cursor-pointer"
			>
				<a href="/kantara">
					<img
						src="/i/kantara.webp"
						alt="Kantara"
						width="1200"
						height="628"
						class="rounded-sm mb-4"
						loading="lazy"
					/>
					<p class="movi-name">Kantara</p>
					<p class="year-btn">2024</p>
				</a>
			</div>

			<div
				class="p-0 w-full h-full m-auto rounded hover:scale-105 transition-transform mb-6 cursor-pointer"
			>
				<a href="/bhairathi-ranagal">
					<img
						src="/i/bhairathi-ranagal.webp"
						alt="Bhairathi Ranagal"
						width="1200"
						height="628"
						class="rounded-sm mb-4"
						loading="lazy"
					/>
					<p class="movi-name">Bhairathi Ranagal</p>
					<p class="year-btn">2024</p>
				</a>
			</div>

			<div
				class="p-0 w-full h-full m-auto rounded hover:scale-105 transition-transform mb-6 cursor-pointer"
			>
				<a href="/shakhahaari">
					<img
						src="/i/shakhahaari.webp"
						alt="Shakhahaari"
						width="1200"
						height="628"
						class="rounded-sm mb-4"
						loading="lazy"
					/>
					<p class="movi-name">Shakhahaari</p>
					<p class="year-btn">2024</p>
				</a>
			</div>

			<div
				class="p-0 w-full h-full m-auto rounded hover:scale-105 transition-transform mb-6 cursor-pointer"
			>
				<a href="/bagheera">
					<img
						src="/i/bagheera.webp"
						alt="bagheera"
						width="1200"
						height="628"
						class="rounded-sm mb-4"
						loading="lazy"
					/>
					<p class="movi-name">Bagheera</p>
					<p class="year-btn">2024</p>
				</a>
			</div>

			<div
				class="p-0 w-full h-full m-auto rounded hover:scale-105 transition-transform mb-6 cursor-pointer"
			>
				<a href="/martin">
					<img
						src="/i/martin.webp"
						alt="Martin"
						width="1200"
						height="628"
						class="rounded-sm mb-4"
						loading="lazy"
					/>
					<p class="movi-name">Martin</p>
					<p class="year-btn">2024</p>
				</a>
			</div>

			<div
				class="p-0 w-full h-full m-auto rounded hover:scale-105 transition-transform mb-6 cursor-pointer"
			>
				<a href="/pepe">
					<img
						src="/i/pepe.webp"
						alt="Pepe"
						width="1200"
						height="628"
						class="rounded-sm mb-4"
						loading="lazy"
					/>
					<p class="movi-name">Pepe</p>
					<p class="year-btn">2024</p>
				</a>
			</div>

			<div
				class="p-0 w-full h-full m-auto rounded hover:scale-105 transition-transform mb-6 cursor-pointer"
			>
				<a href="/blink">
					<img
						src="/i/blink.webp"
						alt="Blink"
						width="1200"
						height="628"
						class="rounded-sm mb-4"
						loading="lazy"
					/>
					<p class="movi-name">Blink</p>
					<p class="year-btn">2024</p>
				</a>
			</div>

			<div
				class="p-0 w-full h-full m-auto rounded hover:scale-105 transition-transform mb-6 cursor-pointer"
			>
				<a href="/karataka-damanaka">
					<img
						src="/i/karataka-damanaka.webp"
						alt="Karataka Damanaka"
						width="1200"
						height="628"
						class="rounded-sm mb-4"
						loading="lazy"
					/>
					<p class="movi-name">Karataka Damanaka</p>
					<p class="year-btn">2024</p>
				</a>
			</div>
			<div
				class="p-0 w-full h-full m-auto rounded hover:scale-105 transition-transform mb-6 cursor-pointer"
			>
				<a href="/ellige-payana-yavudo-daari">
					<img
						src="/i/ellige-payana-yavudo-daari.webp"
						alt="Ellige Payana Yavudo Daari"
						width="1200"
						height="628"
						class="rounded-sm mb-4"
						loading="lazy"
					/>
					<p class="movi-name">Ellige Payana Yavudo Daari</p>
					<p class="year-btn">2024</p>
				</a>
			</div>
		</div>
		<p class="paragraph">
			Kannada movies are becoming increasingly popular, not just in Karnataka but across India and
			even internationally. They often showcase strong narratives that highlight local culture,
			traditions, and issues that resonate with audiences. With talented actors, directors, and
			musicians, Kannada films are known for their originality and quality.
		</p>
		<p class="paragraph">
			In recent years, Kannada cinema has been gaining international recognition. Movies like KGF
			and Kantara have made waves not just in India but globally, attracting audiences and gaining
			acclaim at film festivals. This rise in popularity has encouraged filmmakers to explore new
			themes and push creative boundaries.
		</p>
		<p class="paragraph">
			Curious about the latest hits in Kannada cinema? mkvcinemas keeps you updated with box office
			collections and trending movies. We provide insights into which films are performing well and
			capturing audience attention.
		</p>
	</div>

	<h2 class="text-center text-3xl font-bold mb-8">
		Explore the Finest Films Across Various Languages
	</h2>
	<p class="paragraph">
		We’ve compiled a diverse selection of movies in multiple languages, making it easy for you to
		discover content that fits your tastes. If you’re a fan of <a
			href="/telugu-movies"
			class="text-green-600 underline hover:underline-offset-2">Telugu cinema</a
		>, you’ll find an extensive collection of Telugu films. If you enjoy
		<a href="/tamil-movies" class="text-green-600 underline hover:underline-offset-2">Tamil</a>
		or
		<a href="/hindi-movies" class="text-green-600 underline hover:underline-offset-2">Bollywood</a>,
		we offer a variety of options from those film industries as well. Additionally, you can explore
		the latest releases from
		<a href="/kannada-movies" class="text-green-600 underline hover:underline-offset-2"
			>Kannada cinema</a
		> and Malayalam films for even more entertainment choices.
	</p>
</div>
