<script>
	/**
	 * @typedef {Object} Props
	 * @property {string} [title]
	 * @property {string} [description]
	 * @property {string} [url]
	 */

	/** @type {Props} */
	let {
		title = 'Mkvcinemas Hindi Movies Watch online in HD',
		description = 'Watch your favorite mkvCinemas Hindi movies in stunning 1080p, 720p, 480p, and 4K quality. Enjoy a seamless streaming experience with top Bollywood hits',
		url = 'https://mkvcinemas.buzz/hindi-movies'
	} = $props();
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={url} />

	<meta
		name="keywords"
		content="mkvcinemas, mkvcinemas movies, mkvCinemas.com, mkvcinemas i, mkvcinemas app, mkvcinemas mkv"
	/>
</svelte:head>

<div class="pt-12">
	<h1
		class="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"
	>
		Mkvcinemas Hindi & Bollywood Movies
	</h1>
	<p class="paragraph">
		At Mkvcinemas, find the latest Hindi movies and Bollywood hits. Get quick info, reviews, and
		updates on new and classic films. Discover how to watch or download them easily through OTT
		platforms and enjoy your favorites anytime.
	</p>
	<p class="paragraph">
		Find the latest Bollywood movies and upcoming Hindi films at MKVCinemas! Browse summaries, cast
		details, and reviews to decide what to watch. Stay updated on new releases and upcoming titles,
		so you never miss out. Whether you want to stream, download, or just explore, we’ve got
		everything you need.
	</p>

	<div class="mx-auto pb-10">
		<h2 class="text-center text-3xl font-bold mb-8">Bollywood Movies</h2>
		<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
			<!-- Movie Card -->
			<div class="movie-card">
				<a href="/jurassic-world-rebirth">
					<img
						src="/i/jurassic-world-rebirth.webp"
						alt="Jurassic World: Rebirth"
						width="1200"
						height="628"
						class="rounded-sm mb-4"
						loading="lazy"
					/>
					<p class="movi-name">Jurassic World: Rebirth</p>
					<p class="year-btn">2025</p>
				</a>
			</div>
			<div class="movie-card">
				<a href="/saiyaara">
					<img
						src="/i/saiyaara.webp"
						alt="Saiyaara"
						width="1200"
						height="628"
						class="rounded-sm mb-4"
						loading="lazy"
					/>
					<p class="movi-name">Saiyaara</p>
					<p class="year-btn">2025</p>
				</a>
			</div>
			<div class="movie-card">
				<a href="/chhaava">
					<img
						src="/i/chhaava.webp"
						alt="Chhaava"
						width="1200"
						height="628"
						class="rounded-sm mb-4"
						loading="lazy"
					/>
					<p class="movi-name">Chhaava</p>
					<p class="year-btn">2025</p>
				</a>
			</div>
			<div class="movie-card">
				<a href="/sky-force">
					<img
						src="/i/sky-force.webp"
						alt="Sky Force"
						width="1200"
						height="628"
						class="rounded-sm mb-4"
						loading="lazy"
					/>
					<p class="movi-name">Sky Force</p>
					<p class="year-btn">2025</p>
				</a>
			</div>
			<div class="movie-card">
				<a href="/12th-fail">
					<img
						src="/i/12th-fail.webp"
						alt="12th Fail"
						width="1200"
						height="628"
						class="rounded-sm mb-4"
						loading="lazy"
					/>
					<p class="movi-name">12th Fail</p>
					<p class="year-btn">2024</p>
				</a>
			</div>

			<div class="movie-card">
				<a href="/stree-2">
					<img
						src="/i/stree-2.webp"
						alt="Stree 2"
						width="1200"
						height="628"
						class="rounded-sm mb-4"
						loading="lazy"
					/>
					<p class="movi-name">Stree 2</p>
					<p class="year-btn">2024</p>
				</a>
			</div>

			<div class="movie-card">
				<a href="/khel-khel-mein">
					<img
						src="/i/khel-khel-mein.webp"
						alt="Khel Khel Mein"
						width="1200"
						height="628"
						class="rounded-sm mb-4"
						loading="lazy"
					/>
					<p class="movi-name">Khel Khel Mein</p>
					<p class="year-btn">2024</p>
				</a>
			</div>

			<div class="movie-card">
				<a href="/bhool-bhulaiyaa-3">
					<img
						src="/i/bhool-bhulaiyaa-3.webp"
						alt="bhool-bhulaiyaa-3"
						width="1200"
						height="628"
						class="rounded-sm mb-4"
						loading="lazy"
					/>
					<p class="movi-name">Bhool Bhulaiyaa 3</p>
					<p class="year-btn">2024</p>
				</a>
			</div>
			<div class="movie-card">
				<a href="/welcome-to-the-jungle">
					<img
						src="/i/welcome-to-the-jungle.webp"
						alt="Welcome to the Jungle"
						width="1200"
						height="628"
						class="rounded-sm mb-4"
						loading="lazy"
					/>
					<p class="movi-name">Welcome to the Jungle</p>
					<p class="year-btn">2024</p>
				</a>
			</div>
			<div class="movie-card">
				<a href="/vanvaas">
					<img
						src="/i/vanvaas.webp"
						alt="Vanvaas"
						width="1200"
						height="628"
						class="rounded-sm mb-4"
						loading="lazy"
					/>
					<p class="movi-name">Vanvaas</p>
					<p class="year-btn">2024</p>
				</a>
			</div>
			<div class="movie-card">
				<a href="/pushpa-the-rule-part-2">
					<img
						src="/i/pushpa-the-rule-part-2.webp"
						alt="pushpa-the-rule-part-2"
						width="1200"
						height="628"
						class="rounded-sm mb-4"
						loading="lazy"
					/>
					<p class="movi-name">Pushpa The Rule</p>
					<p class="year-btn">2024</p>
				</a>
			</div>
			<div class="movie-card">
				<a href="/the-sabarmati-report">
					<img
						src="/i/the-sabarmati-report.webp"
						alt="The Sabarmati Report"
						width="1200"
						height="628"
						class="rounded-sm mb-4"
						loading="lazy"
					/>
					<p class="movi-name">The Sabarmati Report</p>
					<p class="year-btn">2024</p>
				</a>
			</div>

			<div class="movie-card">
				<a href="/bad-newz">
					<img
						src="/i/bad-newz.webp"
						alt="Bad Newz"
						width="1200"
						height="628"
						class="rounded-sm mb-4"
						loading="lazy"
					/>
					<p class="movi-name">Bad Newz</p>
					<p class="year-btn">2024</p>
				</a>
			</div>

			<div class="movie-card">
				<a href="/sarfira">
					<img
						src="/i/sarfira.webp"
						alt="Sarfira"
						width="1200"
						height="628"
						class="rounded-sm mb-4"
						loading="lazy"
					/>
					<p class="movi-name">Sarfira</p>
					<p class="year-btn">2024</p>
				</a>
			</div>
			<div class="movie-card">
				<a href="/ulajh">
					<img
						src="/i/ulajh.webp"
						alt="Ulajh"
						width="1200"
						height="628"
						class="rounded-sm mb-4"
						loading="lazy"
					/>
					<p class="movi-name">Ulajh</p>
					<p class="year-btn">2024</p>
				</a>
			</div>
			<div class="movie-card">
				<a href="/maidaan">
					<img
						src="/i/maidaan.webp"
						alt="Maidaan"
						width="1200"
						height="628"
						class="rounded-sm mb-4"
						loading="lazy"
					/>
					<p class="movi-name">Maidaan</p>
					<p class="year-btn">2024</p>
				</a>
			</div>
			<div class="movie-card">
				<a href="/vedaa">
					<img
						src="/i/vedaa.webp"
						alt="Vedaa"
						width="1200"
						height="628"
						class="rounded-sm mb-4"
						loading="lazy"
					/>
					<p class="movi-name">Vedaa</p>
					<p class="year-btn">2024</p>
				</a>
			</div>
			<div class="movie-card">
				<a href="/singham-again">
					<img
						src="/i/singham-again.webp"
						alt="singham again"
						width="1200"
						height="628"
						class="rounded-sm mb-4"
						loading="lazy"
					/>
					<p class="movi-name">Singham Again</p>
					<p class="year-btn">2024</p>
				</a>
			</div>
			<div class="movie-card">
				<a href="/pushpa-the-rise-part-01">
					<img
						src="/i/pushpa-the-rise-part-01.webp"
						alt="pushpa-the-rise-part-01"
						width="1200"
						height="628"
						class="rounded-sm mb-4"
						loading="lazy"
					/>
					<p class="movi-name">Pushpa The Rise - Part 01</p>
					<p class="year-btn">2024</p>
				</a>
			</div>
			<div class="movie-card">
				<a href="/amaran">
					<img
						src="/i/amaran.webp"
						alt="amaran"
						width="1200"
						height="628"
						class="rounded-sm mb-4"
						loading="lazy"
					/>
					<p class="movi-name">Amaran</p>
					<p class="year-btn">2024</p>
				</a>
			</div>
		</div>
	</div>
	<h2 class="text-center text-3xl font-bold mb-8">Why Bollywood Movies Are Special?</h2>
	<p class="paragraph">
		Bollywood movies are truly a treat for all movie lovers! They bring together vibrant
		storytelling, catchy music, and dazzling dance numbers that make you want to watch them again
		and again. Let’s take a look at why Bollywood movies are so special, some must-watch films, and
		how to enjoy them in Mkvcinemas.
	</p>
	<p class="paragraph">
		Engaging Stories: Bollywood films tackle relatable themes that resonate with audiences. For
		example, “Kabir Singh” (2019) explores intense romantic relationships, while “Chhichhore” (2019)
		addresses academic pressures.
	</p>
	<p class="paragraph">
		Catchy Music and Dance: The music in Bollywood films is a significant draw. A survey conducted
		by Music Streaming Service Gaana found that Bollywood songs accounted for 30% of the total music
		streams in India in 2024. Each film features memorable soundtracks, which became a cultural
		phenomenon. The dance numbers are equally captivating—just look at the viral success of songs
		like “Genda Phool” featuring Badshah, which racked up over 1 billion views on YouTube.
	</p>
	<p class="paragraph">
		Variety of Genres: Bollywood isn’t limited to romance. Films like “Andhadhun” blend thriller and
		comedy, while “Tanhaji” offers action and historical drama. There’s something for everyone.
	</p>
	<h2 class="text-center text-3xl font-bold mb-8">
		Discover the Best Movies in Different Languages
	</h2>
	<p class="paragraph">
		We’ve curated a list of movies across multiple languages, so you can easily find content that
		matches your preferences. If you’re a fan of <a href="/telugu-movies" class="text-green-600"
			>Telugu cinema</a
		>, you’ll find a wide range of Telugu movies. If you prefer
		<a href="/tamil-movies" class="text-green-600">Tamil</a>
		or <a href="/hindi-movies" class="text-green-600">Bollywood</a>, you’ll get a list of options
		from those industries too. Plus, we also provide detailed information about the latest movies
		from <a href="/kannada-movies" class="text-green-600">Kannada movies</a> and Malayalam cinema.
	</p>
</div>
