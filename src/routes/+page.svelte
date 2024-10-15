<script>
	import Head from '$lib/components/layout/Head.svelte';
	import Blogs from '$lib/components/Blogs.svelte';
	import Middlebox from '$lib/components/Middlebox.svelte';

	export let data;
	let posts = data.posts;
</script>

<Head />

<Middlebox />
<div class="pt-12">
	<!-- <h1
		class="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"
	>
		Welcome to Mkvcinemas
	</h1> -->
	<p class="text-base prose-base text-gray-800 dark:text-gray-100">
		Looking for the latest HD-quality Mkv cinemas? MkvCinemas provides information on where to
		stream or download movies, TV shows, and web series through free or popular paid platforms. You
		can access content in multiple languages, including Tamil, Telugu, Hindi, English, Malayalam,
		Kannada, Marathi, and Odia, all conveniently available through the Mkvcinemas web app.
	</p>
</div>

<!-- <Blogs title="Latest Posts" h2 {posts} search={false} count={15} /> -->

<div class="container mx-auto py-10">
	<h2 class="text-center text-3xl font-bold mb-8">Mkvcinemas Telugu Movies 2024</h2>
	<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
		<!-- Movie Card -->
		<div
			class="p-0 w-full h-full m-auto rounded hover:scale-105 transition-transform mb-8 cursor-pointer"
		>
			<a href="/kalki-2898-ad">
				<img src="/telugu-movies/kalki-2898-ad.webp" alt="Kalki 2898 AD" class="rounded-sm mb-4" />
				<p class="text-sm lg:text-sm font-semibold mb-2">Kalki 2898 AD</p>
				<p class="text-yellow-400 text-xs bg-amber-950 w-fit px-2 py-1 rounded-sm">2024</p>
			</a>
		</div>

		<div
			class="p-0 w-full h-full m-auto rounded hover:scale-105 transition-transform mb-8 cursor-pointer"
		>
			<a href="/maharaja">
				<img src="/telugu-movies/maharaja.webp" alt="Maharaja" class="rounded-sm mb-4" />
				<p class="text-sm lg:text-sm font-semibold mb-2">Maharaja</p>
				<p class="text-yellow-400 text-xs bg-amber-950 w-fit px-2 py-1 rounded-sm">2024</p>
			</a>
		</div>

		<div
			class="p-0 w-full h-full m-auto rounded hover:scale-105 transition-transform mb-8 cursor-pointer"
		>
			<a href="/aho-vikramaarka">
				<img src="/telugu-movies/aho-vikramaarka.webp" alt="Aho Vikramaarka" class="rounded-sm mb-4" />
				<p class="text-sm lg:text-sm font-semibold mb-2">Aho Vikramaarka</p>
				<p class="text-yellow-400 text-xs bg-amber-950 w-fit px-2 py-1 rounded-sm">2024</p>
			</a>
		</div>

		<div
			class="p-0 w-full h-full m-auto rounded hover:scale-105 transition-transform mb-8 cursor-pointer"
		>
			<a href="/buddy">
				<img src="/telugu-movies/buddy.webp" alt="Buddy (2024)" class="rounded-sm mb-4" />
				<p class="text-sm lg:text-sm font-semibold mb-2">Buddy (2024)</p>
				<p class="text-yellow-400 text-xs bg-amber-950 w-fit px-2 py-1 rounded-sm">2024</p>
			</a>
		</div>

		<div
			class="p-0 w-full h-full m-auto rounded hover:scale-105 transition-transform mb-8 cursor-pointer"
		>
			<a href="/devara-part1">
				<img src="/telugu-movies/devara-part1.webp" alt="Devara Part- 1" class="rounded-sm mb-4" />
				<p class="text-sm lg:text-sm font-semibold mb-2">Devara Part- 1</p>
				<p class="text-yellow-400 text-xs bg-amber-950 w-fit px-2 py-1 rounded-sm">2024</p>
			</a>
		</div>
		<div
			class="p-0 w-full h-full m-auto rounded hover:scale-105 transition-transform mb-8 cursor-pointer"
		>
			<a href="/double-ismart">
				<img src="/telugu-movies/double-ismart.webp" alt="Double iSmart" class="rounded-sm mb-4" />
				<p class="text-sm lg:text-sm font-semibold mb-2">Double iSmart</p>
				<p class="text-yellow-400 text-xs bg-amber-950 w-fit px-2 py-1 rounded-sm">2024</p>
			</a>
		</div>
		<div
			class="p-0 w-full h-full m-auto rounded hover:scale-105 transition-transform mb-8 cursor-pointer"
		>
			<a href="/family-star">
				<img src="/telugu-movies/family-star.webp" alt="Family Star" class="rounded-sm mb-4" />
				<p class="text-sm lg:text-sm font-semibold mb-2">Family Star</p>
				<p class="text-yellow-400 text-xs bg-amber-950 w-fit px-2 py-1 rounded-sm">2024</p>
			</a>
		</div>
		<div
			class="p-0 w-full h-full m-auto rounded hover:scale-105 transition-transform mb-8 cursor-pointer"
		>
			<a href="/kalinga">
				<img src="/telugu-movies/kalinga.webp" alt="Kalinga" class="rounded-sm mb-4" />
				<p class="text-sm lg:text-sm font-semibold mb-2">Kalinga</p>
				<p class="text-yellow-400 text-xs bg-amber-950 w-fit px-2 py-1 rounded-sm">2024</p>
			</a>
		</div>
		<div
			class="p-0 w-full h-full m-auto rounded hover:scale-105 transition-transform mb-8 cursor-pointer"
		>
			<a href="/35-Chinna-Katha-Kaadu">
				<img src="/telugu-movies/35-Chinna-Katha-Kaadu.webp" alt="35 – Chinna Katha Kaadu" class="rounded-sm mb-4" />
				<p class="text-sm lg:text-sm font-semibold mb-2">35–Chinna Katha Kaadu</p>
				<p class="text-yellow-400 text-xs bg-amber-950 w-fit px-2 py-1 rounded-sm">2024</p>
			</a>
		</div>
		<div
			class="p-0 w-full h-full m-auto rounded hover:scale-105 transition-transform mb-8 cursor-pointer"
		>
			<a href="/manamey">
				<img src="/telugu-movies/manamey.webp" alt="Manamey" class="rounded-sm mb-4" />
				<p class="text-sm lg:text-sm font-semibold mb-2">Manamey</p>
				<p class="text-yellow-400 text-xs bg-amber-950 w-fit px-2 py-1 rounded-sm">2024</p>
			</a>
		</div>
		<div
			class="p-0 w-full h-full m-auto rounded hover:scale-105 transition-transform mb-8 cursor-pointer"
		>
			<a href="/mr-bachchan">
				<img src="/telugu-movies/mr-bachchan.webp" alt="Mr. Bachchan" class="rounded-sm mb-4" />
				<p class="text-sm lg:text-sm font-semibold mb-2">Mr. Bachchan</p>
				<p class="text-yellow-400 text-xs bg-amber-950 w-fit px-2 py-1 rounded-sm">2024</p>
			</a>
		</div>
		<div
			class="p-0 w-full h-full m-auto rounded hover:scale-105 transition-transform mb-8 cursor-pointer"
		>
			<a href="/prasanna-vadanam">
				<img src="/telugu-movies/prasanna-vadanam.webp" alt="Prasanna Vadanam" class="rounded-sm mb-4" />
				<p class="text-sm lg:text-sm font-semibold mb-2">Prasanna Vadanam</p>
				<p class="text-yellow-400 text-xs bg-amber-950 w-fit px-2 py-1 rounded-sm">2024</p>
			</a>
		</div>
	</div>
	
	<p class="pb-6 text-base prose-base text-gray-950 dark:text-gray-100">
		Telugu cinema, often referred to as Tollywood, has become a significant part of Indian cinema
		and is loved by audiences worldwide. Whether it’s the action-packed thrillers, emotional dramas,
		or family-friendly comedies, Telugu movies offer something for everyone. At MKVCinemas, we
		provide an easy way for you to stream the latest and greatest Telugu films and read insightful
		reviews that help you decide what to watch next.
	</p>
	<p class="pb-6 text-base prose-base text-gray-950 dark:text-gray-100">
		Mkvcinemas is your go-to platform for streaming and downloading the best Telugu movies. Our
		user-friendly site ensures that you can quickly find what you’re looking for whether it’s the
		latest blockbuster or an old favorite. We also provide movie reviews to give you an idea of what
		to expect from each film, helping you make informed viewing choices.
	</p>
</div>

<!-- Tamil Movies Container -->
<div class="container mx-auto pb-10">
	<h2 class="text-center text-3xl font-bold mb-8">Mkvcinemas Tamil Movies</h2>
	<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
		<!-- Movie Card -->
		<div
			class="p-0 w-full h-full m-auto rounded hover:scale-105 transition-transform mb-8 cursor-pointer"
		>
			<a href="/">
				<img src="/card.webp" alt="Kalinga" class="rounded-sm mb-4" />
				<p class="text-sm lg:text-sm font-semibold mb-2">Kalinga</p>
				<p class="text-yellow-400 text-xs bg-amber-950 w-fit px-2 py-1 rounded-sm">2024</p>
			</a>
		</div>

		<div
			class="p-0 w-full h-full m-auto rounded hover:scale-105 transition-transform mb-8 cursor-pointer"
		>
			<a href="/">
				<img src="/card.webp" alt="Aho Vikramaarka" class="rounded-sm mb-4" />
				<p class="text-sm lg:text-sm font-semibold mb-2">Aho Vikramaarka</p>
				<p class="text-yellow-400 text-xs bg-amber-950 w-fit px-2 py-1 rounded-sm">2024</p>
			</a>
		</div>

		<div
			class="p-0 w-full h-full m-auto rounded hover:scale-105 transition-transform mb-8 cursor-pointer"
		>
			<a href="/">
				<img src="/card.webp" alt="Maharaja" class="rounded-sm mb-4" />
				<p class="text-sm lg:text-sm font-semibold mb-2">Maharaja</p>
				<p class="text-yellow-400 text-xs bg-amber-950 w-fit px-2 py-1 rounded-sm">2024</p>
			</a>
		</div>

		<div
			class="p-0 w-full h-full m-auto rounded hover:scale-105 transition-transform mb-8 cursor-pointer"
		>
			<a href="/">
				<img src="/card.webp" alt="Manamey" class="rounded-sm mb-4" />
				<p class="text-sm lg:text-sm font-semibold mb-2">Manamey</p>
				<p class="text-yellow-400 text-xs bg-amber-950 w-fit px-2 py-1 rounded-sm">2024</p>
			</a>
		</div>

		<div
			class="p-0 w-full h-full m-auto rounded hover:scale-105 transition-transform mb-8 cursor-pointer"
		>
			<a href="/">
				<img src="/card.webp" alt="Mr. Bachchan" class="rounded-sm mb-4" />
				<p class="text-sm lg:text-sm font-semibold mb-2">Mr. Bachchan</p>
				<p class="text-yellow-400 text-xs bg-amber-950 w-fit px-2 py-1 rounded-sm">2024</p>
			</a>
		</div>
		<div
			class="p-0 w-full h-full m-auto rounded hover:scale-105 transition-transform mb-8 cursor-pointer"
		>
			<a href="/">
				<img src="/card.webp" alt="Mr. Bachchan" class="rounded-sm mb-4" />
				<p class="text-sm lg:text-sm font-semibold mb-2">Mr. Bachchan</p>
				<p class="text-yellow-400 text-xs bg-amber-950 w-fit px-2 py-1 rounded-sm">2024</p>
			</a>
		</div>
		<div
			class="p-0 w-full h-full m-auto rounded hover:scale-105 transition-transform mb-8 cursor-pointer"
		>
			<a href="/">
				<img src="/card.webp" alt="Mr. Bachchan" class="rounded-sm mb-4" />
				<p class="text-sm lg:text-sm font-semibold mb-2">Mr. Bachchan</p>
				<p class="text-yellow-400 text-xs bg-amber-950 w-fit px-2 py-1 rounded-sm">2024</p>
			</a>
		</div>
		<div
			class="p-0 w-full h-full m-auto rounded hover:scale-105 transition-transform mb-8 cursor-pointer"
		>
			<a href="/">
				<img src="/card.webp" alt="Mr. Bachchan" class="rounded-sm mb-4" />
				<p class="text-sm lg:text-sm font-semibold mb-2">Mr. Bachchan</p>
				<p class="text-yellow-400 text-xs bg-amber-950 w-fit px-2 py-1 rounded-sm">2024</p>
			</a>
		</div>
		<div
			class="p-0 w-full h-full m-auto rounded hover:scale-105 transition-transform mb-8 cursor-pointer"
		>
			<a href="/">
				<img src="/card.webp" alt="Mr. Bachchan" class="rounded-sm mb-4" />
				<p class="text-sm lg:text-sm font-semibold mb-2">Mr. Bachchan</p>
				<p class="text-yellow-400 text-xs bg-amber-950 w-fit px-2 py-1 rounded-sm">2024</p>
			</a>
		</div>
		<div
			class="p-0 w-full h-full m-auto rounded hover:scale-105 transition-transform mb-8 cursor-pointer"
		>
			<a href="/">
				<img src="/card.webp" alt="Mr. Bachchan" class="rounded-sm mb-4" />
				<p class="text-sm lg:text-sm font-semibold mb-2">Mr. Bachchan</p>
				<p class="text-yellow-400 text-xs bg-amber-950 w-fit px-2 py-1 rounded-sm">2024</p>
			</a>
		</div>
		<div
			class="p-0 w-full h-full m-auto rounded hover:scale-105 transition-transform mb-8 cursor-pointer"
		>
			<a href="/">
				<img src="/card.webp" alt="Mr. Bachchan" class="rounded-sm mb-4" />
				<p class="text-sm lg:text-sm font-semibold mb-2">Mr. Bachchan</p>
				<p class="text-yellow-400 text-xs bg-amber-950 w-fit px-2 py-1 rounded-sm">2024</p>
			</a>
		</div>
		<div
			class="p-0 w-full h-full m-auto rounded hover:scale-105 transition-transform mb-8 cursor-pointer"
		>
			<a href="/">
				<img src="/card.webp" alt="Mr. Bachchan" class="rounded-sm mb-4" />
				<p class="text-sm lg:text-sm font-semibold mb-2">Mr. Bachchan</p>
				<p class="text-yellow-400 text-xs bg-amber-950 w-fit px-2 py-1 rounded-sm">2024</p>
			</a>
		</div>
	</div>
	<p class="pb-6 text-base prose-base text-gray-950 dark:text-gray-100">
		Tamil cinema is known for its unique blend of genres and strong narratives. Whether it's
		thrillers, romantic dramas, historical epics, or comedy films, Tamil movies cater to a wide
		range of audiences. Some of the biggest stars in Indian cinema, like Rajinikanth, Kamal Haasan,
		and Vijay, come from the Tamil film industry.
	</p>
	<p class="pb-6 text-base prose-base text-gray-950 dark:text-gray-100">
		Mkvcinemas makes it super easy to watch Tamil movies online or download them to watch later. You
		can stream movies on any device whether it’s your smartphone, tablet, or computer. With a vast
		library of Tamil films, you’ll always have something new and exciting to watch.
	</p>
	<!-- <p class="pb-6 text-base prose-base text-gray-950 dark:text-gray-100">
		Popular Tamil Movie Genres Tamil cinema offers a wide range of genres that cater to different
		tastes. Here are some of the most popular categories of Tamil movies you can find on MKVCinemas:

		<li>
			Action Thrillers: Tamil action movies are known for their thrilling fight scenes, dramatic
			plots, and larger-than-life heroes. Whether it’s a police drama or gangster movie.
		</li>

		<li>
			Romantic Films: Tamil romantic films often blend emotion, drama, and music, making them a
			favorite for audiences looking for heartwarming stories.
		</li>

		<li>
			Family Dramas: These films focus on relationships, family dynamics, and emotional journeys,
			making them perfect for all age groups.
		</li>

		<li>
			Historical & Fantasy Epics: Tamil cinema has produced several grand historical dramas and
			fantasy movies that transport viewers to different worlds. Films like RRR and
			Baahubali showcase the scale and creativity of Tamil filmmakers.
		</li>

		<li>
			Comedy Films: If you’re in the mood for some laughs, Tamil cinema offers plenty of hilarious
			comedies filled with slapstick humor and witty dialogues.
		</li>
	</p> -->
</div>

<!-- Bolywood Movies -->
<div class="container mx-auto pb-10">
	<h2 class="text-center text-3xl font-bold mb-8">Bollywood Movies</h2>
	<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
		<!-- Movie Card -->
		<div
			class="p-0 w-full h-full m-auto rounded hover:scale-105 transition-transform mb-8 cursor-pointer"
		>
			<a href="/">
				<img src="/card.webp" alt="Kalinga" class="rounded-sm mb-4" />
				<p class="text-sm lg:text-sm font-semibold mb-2">Kalinga</p>
				<p class="text-yellow-400 text-xs bg-amber-950 w-fit px-2 py-1 rounded-sm">2024</p>
			</a>
		</div>

		<div
			class="p-0 w-full h-full m-auto rounded hover:scale-105 transition-transform mb-8 cursor-pointer"
		>
			<a href="/">
				<img src="/card.webp" alt="Aho Vikramaarka" class="rounded-sm mb-4" />
				<p class="text-sm lg:text-sm font-semibold mb-2">Aho Vikramaarka</p>
				<p class="text-yellow-400 text-xs bg-amber-950 w-fit px-2 py-1 rounded-sm">2024</p>
			</a>
		</div>

		<div
			class="p-0 w-full h-full m-auto rounded hover:scale-105 transition-transform mb-8 cursor-pointer"
		>
			<a href="/">
				<img src="/card.webp" alt="Maharaja" class="rounded-sm mb-4" />
				<p class="text-sm lg:text-sm font-semibold mb-2">Maharaja</p>
				<p class="text-yellow-400 text-xs bg-amber-950 w-fit px-2 py-1 rounded-sm">2024</p>
			</a>
		</div>

		<div
			class="p-0 w-full h-full m-auto rounded hover:scale-105 transition-transform mb-8 cursor-pointer"
		>
			<a href="/">
				<img src="/card.webp" alt="Manamey" class="rounded-sm mb-4" />
				<p class="text-sm lg:text-sm font-semibold mb-2">Manamey</p>
				<p class="text-yellow-400 text-xs bg-amber-950 w-fit px-2 py-1 rounded-sm">2024</p>
			</a>
		</div>

		<div
			class="p-0 w-full h-full m-auto rounded hover:scale-105 transition-transform mb-8 cursor-pointer"
		>
			<a href="/">
				<img src="/card.webp" alt="Mr. Bachchan" class="rounded-sm mb-4" />
				<p class="text-sm lg:text-sm font-semibold mb-2">Mr. Bachchan</p>
				<p class="text-yellow-400 text-xs bg-amber-950 w-fit px-2 py-1 rounded-sm">2024</p>
			</a>
		</div>
		<div
			class="p-0 w-full h-full m-auto rounded hover:scale-105 transition-transform mb-8 cursor-pointer"
		>
			<a href="/">
				<img src="/card.webp" alt="Mr. Bachchan" class="rounded-sm mb-4" />
				<p class="text-sm lg:text-sm font-semibold mb-2">Mr. Bachchan</p>
				<p class="text-yellow-400 text-xs bg-amber-950 w-fit px-2 py-1 rounded-sm">2024</p>
			</a>
		</div>
		<div
			class="p-0 w-full h-full m-auto rounded hover:scale-105 transition-transform mb-8 cursor-pointer"
		>
			<a href="/">
				<img src="/card.webp" alt="Mr. Bachchan" class="rounded-sm mb-4" />
				<p class="text-sm lg:text-sm font-semibold mb-2">Mr. Bachchan</p>
				<p class="text-yellow-400 text-xs bg-amber-950 w-fit px-2 py-1 rounded-sm">2024</p>
			</a>
		</div>
		<div
			class="p-0 w-full h-full m-auto rounded hover:scale-105 transition-transform mb-8 cursor-pointer"
		>
			<a href="/">
				<img src="/card.webp" alt="Mr. Bachchan" class="rounded-sm mb-4" />
				<p class="text-sm lg:text-sm font-semibold mb-2">Mr. Bachchan</p>
				<p class="text-yellow-400 text-xs bg-amber-950 w-fit px-2 py-1 rounded-sm">2024</p>
			</a>
		</div>
		<div
			class="p-0 w-full h-full m-auto rounded hover:scale-105 transition-transform mb-8 cursor-pointer"
		>
			<a href="/">
				<img src="/card.webp" alt="Mr. Bachchan" class="rounded-sm mb-4" />
				<p class="text-sm lg:text-sm font-semibold mb-2">Mr. Bachchan</p>
				<p class="text-yellow-400 text-xs bg-amber-950 w-fit px-2 py-1 rounded-sm">2024</p>
			</a>
		</div>
		<div
			class="p-0 w-full h-full m-auto rounded hover:scale-105 transition-transform mb-8 cursor-pointer"
		>
			<a href="/">
				<img src="/card.webp" alt="Mr. Bachchan" class="rounded-sm mb-4" />
				<p class="text-sm lg:text-sm font-semibold mb-2">Mr. Bachchan</p>
				<p class="text-yellow-400 text-xs bg-amber-950 w-fit px-2 py-1 rounded-sm">2024</p>
			</a>
		</div>
		<div
			class="p-0 w-full h-full m-auto rounded hover:scale-105 transition-transform mb-8 cursor-pointer"
		>
			<a href="/">
				<img src="/card.webp" alt="Mr. Bachchan" class="rounded-sm mb-4" />
				<p class="text-sm lg:text-sm font-semibold mb-2">Mr. Bachchan</p>
				<p class="text-yellow-400 text-xs bg-amber-950 w-fit px-2 py-1 rounded-sm">2024</p>
			</a>
		</div>
		<div
			class="p-0 w-full h-full m-auto rounded hover:scale-105 transition-transform mb-8 cursor-pointer"
		>
			<a href="/">
				<img src="/card.webp" alt="Mr. Bachchan" class="rounded-sm mb-4" />
				<p class="text-sm lg:text-sm font-semibold mb-2">Mr. Bachchan</p>
				<p class="text-yellow-400 text-xs bg-amber-950 w-fit px-2 py-1 rounded-sm">2024</p>
			</a>
		</div>
	</div>
	<p class="pb-6 text-base prose-base text-gray-950 dark:text-gray-100">
		Bollywood movies, based in Mumbai, is the largest film industry in India and one of the biggest
		in the world. Known for its vibrant storytelling, catchy music, and colorful dance sequences,
		Bollywood movies have captured the hearts of audiences both in India and around the globe.
	</p>
	<p class="pb-6 text-base prose-base text-gray-950 dark:text-gray-100">
		Bollywood movies are loved for many reasons. They often combine action, drama, romance, and
		comedy into one film, creating a unique viewing experience. Whether you enjoy watching
		heartwarming love stories, thrilling action scenes, or funny comedies, Bollywood has something
		for everyone.
	</p>
	<p class="pb-6 text-base prose-base text-gray-950 dark:text-gray-100">
		Bollywood movies come in many exciting genres, each offering something special. If you love love
		stories, romantic films will make you laugh and cry. Action movies are filled with thrilling
		stunts and intense fight scenes that keep you on the edge of your seat. For a good laugh,
		Bollywood comedies are packed with funny characters and silly situations. Dramas tell powerful
		stories about relationships, family, and life’s ups and downs that really connect with viewers.
		And let’s not forget the musicals, which are famous for their colorful dance numbers and catchy
		songs that make the movies lively and fun. Discover these amazing genres and more on MKVCinemas.
	</p>
</div>

<!-- Kannada Movies -->
<div class="container mx-auto pb-10">
	<h2 class="text-center text-3xl font-bold mb-8">Kannada Movies</h2>
	<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
		<!-- Movie Card -->
		<div
			class="p-0 w-full h-full m-auto rounded hover:scale-105 transition-transform mb-8 cursor-pointer"
		>
			<a href="/">
				<img src="/card.webp" alt="Kalinga" class="rounded-sm mb-4" />
				<p class="text-sm lg:text-sm font-semibold mb-2">Kalinga</p>
				<p class="text-yellow-400 text-xs bg-amber-950 w-fit px-2 py-1 rounded-sm">2024</p>
			</a>
		</div>

		<div
			class="p-0 w-full h-full m-auto rounded hover:scale-105 transition-transform mb-8 cursor-pointer"
		>
			<a href="/">
				<img src="/card.webp" alt="Aho Vikramaarka" class="rounded-sm mb-4" />
				<p class="text-sm lg:text-sm font-semibold mb-2">Aho Vikramaarka</p>
				<p class="text-yellow-400 text-xs bg-amber-950 w-fit px-2 py-1 rounded-sm">2024</p>
			</a>
		</div>

		<div
			class="p-0 w-full h-full m-auto rounded hover:scale-105 transition-transform mb-8 cursor-pointer"
		>
			<a href="/">
				<img src="/card.webp" alt="Maharaja" class="rounded-sm mb-4" />
				<p class="text-sm lg:text-sm font-semibold mb-2">Maharaja</p>
				<p class="text-yellow-400 text-xs bg-amber-950 w-fit px-2 py-1 rounded-sm">2024</p>
			</a>
		</div>

		<div
			class="p-0 w-full h-full m-auto rounded hover:scale-105 transition-transform mb-8 cursor-pointer"
		>
			<a href="/">
				<img src="/card.webp" alt="Manamey" class="rounded-sm mb-4" />
				<p class="text-sm lg:text-sm font-semibold mb-2">Manamey</p>
				<p class="text-yellow-400 text-xs bg-amber-950 w-fit px-2 py-1 rounded-sm">2024</p>
			</a>
		</div>

		<div
			class="p-0 w-full h-full m-auto rounded hover:scale-105 transition-transform mb-8 cursor-pointer"
		>
			<a href="/">
				<img src="/card.webp" alt="Mr. Bachchan" class="rounded-sm mb-4" />
				<p class="text-sm lg:text-sm font-semibold mb-2">Mr. Bachchan</p>
				<p class="text-yellow-400 text-xs bg-amber-950 w-fit px-2 py-1 rounded-sm">2024</p>
			</a>
		</div>
		<div
			class="p-0 w-full h-full m-auto rounded hover:scale-105 transition-transform mb-8 cursor-pointer"
		>
			<a href="/">
				<img src="/card.webp" alt="Mr. Bachchan" class="rounded-sm mb-4" />
				<p class="text-sm lg:text-sm font-semibold mb-2">Mr. Bachchan</p>
				<p class="text-yellow-400 text-xs bg-amber-950 w-fit px-2 py-1 rounded-sm">2024</p>
			</a>
		</div>
		<div
			class="p-0 w-full h-full m-auto rounded hover:scale-105 transition-transform mb-8 cursor-pointer"
		>
			<a href="/">
				<img src="/card.webp" alt="Mr. Bachchan" class="rounded-sm mb-4" />
				<p class="text-sm lg:text-sm font-semibold mb-2">Mr. Bachchan</p>
				<p class="text-yellow-400 text-xs bg-amber-950 w-fit px-2 py-1 rounded-sm">2024</p>
			</a>
		</div>
		<div
			class="p-0 w-full h-full m-auto rounded hover:scale-105 transition-transform mb-8 cursor-pointer"
		>
			<a href="/">
				<img src="/card.webp" alt="Mr. Bachchan" class="rounded-sm mb-4" />
				<p class="text-sm lg:text-sm font-semibold mb-2">Mr. Bachchan</p>
				<p class="text-yellow-400 text-xs bg-amber-950 w-fit px-2 py-1 rounded-sm">2024</p>
			</a>
		</div>
		<div
			class="p-0 w-full h-full m-auto rounded hover:scale-105 transition-transform mb-8 cursor-pointer"
		>
			<a href="/">
				<img src="/card.webp" alt="Mr. Bachchan" class="rounded-sm mb-4" />
				<p class="text-sm lg:text-sm font-semibold mb-2">Mr. Bachchan</p>
				<p class="text-yellow-400 text-xs bg-amber-950 w-fit px-2 py-1 rounded-sm">2024</p>
			</a>
		</div>
		<div
			class="p-0 w-full h-full m-auto rounded hover:scale-105 transition-transform mb-8 cursor-pointer"
		>
			<a href="/">
				<img src="/card.webp" alt="Mr. Bachchan" class="rounded-sm mb-4" />
				<p class="text-sm lg:text-sm font-semibold mb-2">Mr. Bachchan</p>
				<p class="text-yellow-400 text-xs bg-amber-950 w-fit px-2 py-1 rounded-sm">2024</p>
			</a>
		</div>
		<div
			class="p-0 w-full h-full m-auto rounded hover:scale-105 transition-transform mb-8 cursor-pointer"
		>
			<a href="/">
				<img src="/card.webp" alt="Mr. Bachchan" class="rounded-sm mb-4" />
				<p class="text-sm lg:text-sm font-semibold mb-2">Mr. Bachchan</p>
				<p class="text-yellow-400 text-xs bg-amber-950 w-fit px-2 py-1 rounded-sm">2024</p>
			</a>
		</div>
		<div
			class="p-0 w-full h-full m-auto rounded hover:scale-105 transition-transform mb-8 cursor-pointer"
		>
			<a href="/">
				<img src="/card.webp" alt="Mr. Bachchan" class="rounded-sm mb-4" />
				<p class="text-sm lg:text-sm font-semibold mb-2">Mr. Bachchan</p>
				<p class="text-yellow-400 text-xs bg-amber-950 w-fit px-2 py-1 rounded-sm">2024</p>
			</a>
		</div>
	</div>
	<p class="pb-6 text-base prose-base text-gray-950 dark:text-gray-100">
		Kannada movies are becoming increasingly popular, not just in Karnataka but across India and
		even internationally. They often showcase strong narratives that highlight local culture,
		traditions, and issues that resonate with audiences. With talented actors, directors, and
		musicians, Kannada films are known for their originality and quality.
	</p>
	<p class="pb-6 text-base prose-base text-gray-950 dark:text-gray-100">
		In recent years, Kannada cinema has been gaining international recognition. Movies like KGF and
		Kantara have made waves not just in India but globally, attracting audiences and gaining acclaim
		at film festivals. This rise in popularity has encouraged filmmakers to explore new themes and
		push creative boundaries.
	</p>
	<p class="pb-6 text-base prose-base text-gray-950 dark:text-gray-100">
		Curious about the latest hits in Kannada cinema? mkvcinemas keeps you updated with box office
		collections and trending movies. We provide insights into which films are performing well and
		capturing audience attention.
	</p>
</div>

<div class="space-y-4">
	<h2 class="text-center text-3xl font-bold mb-4">FAQs</h2>
	<details class="rounded">
		<summary class="px-4 py-2 cursor-pointer font-bold">
			What are the top-rated Telugu movies in 2024?
		</summary>
		<div class="p-2">
			The top-rated Telugu movies in 2024 include Bharateeyudu 2, C/o Kancharapalem, Kalki 2898 AD,
			Jersey, Sita Ramam, and Baahubali 2: The Conclusion. These ratings may vary as new films are
			released.
		</div>
	</details>

	<details class="rounded">
		<summary class="px-4 py-2 cursor-pointer font-bold">
			What are the top-rated Bollywood movies in 2024?
		</summary>
		<div class="p-2">
			The top-rated Bollywood movies in 2024 include Indian 2, Kalki 2898 AD, Rocketry: The Nambi
			Effect, and Anbe Sivam. These rankings may change as new films are released.
		</div>
	</details>

	<details class="rounded">
		<summary class="px-4 py-2 cursor-pointer font-bold">
			Does MKVCinemas provide movie reviews?
		</summary>
		<div class="p-2">
			Yes, we offer detailed reviews for many of the movies in our collection, covering the plot,
			performances, and overall quality to help you decide what to watch next.
		</div>
	</details>

	<details class="rounded">
		<summary class="px-4 py-2 cursor-pointer font-bold">
			Is there a mobile app for MKVCinemas?
		</summary>
		<div class="p-2">
			Currently, MKVCinemas is accessible through our website. We are considering developing a
			mobile app in the future for a better viewing experience.
		</div>
	</details>
</div>
