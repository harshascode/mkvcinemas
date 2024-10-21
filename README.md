# 1: Copy the content from some website

# 2: Rewrite the content with ChatGPT.

# 3: Create the Markdown Table form that content

# 4: Now copy the Page othe Page

# 5: rename the slug

# 6: Chage the Title, descrition, and content.

# 7: That it now it ready to Add Image.

By [Firstpost](https://www.firstpost.com/tech/news-analysis/hbos-mockumentary-silicon-valley-finds-fans-tech-3652309.html)

Prompt:

Hi, write a blog post: Write semantically relevant seo friendly. Write like even 8th grader can understand. use below format.
1: Short and sweet intro.
2: Table. (in Markdown)
3: Review. 4. Give a 150 character seo friendly meta description.

Use below Article as a Resource for your content.

## Prompt for FAqs

Hi, can you give me this below question and answer in Html, use Summery and Details tags so it can be colasable. you can use p tag for answer. no need to add css and js. no need to add biolerplate.

# Prompt for content

Hi, write a blog post: Write semantically relevant seo friendly. Write like even 8th grader can understand. use below format.
1: Short and sweet intro. use keyword 'mkvcinemas' somewhere in the intro if it possible to add.
2: Table. (format: Markdown)
3: Review.
4: Give me simple 5 Faqs. 4. Give a 150 character seo friendly meta description. for example: (Find out where to watch or stream Vedaa movie online on mkvcinemas | Entertainment. Also Watch Vedaa trailer, check cast & crew & browse gallery.)

Use below Article as a Resource for your content. dont copy thire style or anything write like any famouse writer style. ok?





{
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "WebSite",
			"@id": "https://mkvcinemas.buzz/#website",
			"url": "https://mkvcinemas.buzz/",
			"name": "mkvCinemas",
			"description": "mkvCinemas PC and Smartphone Movies of Bollywood, Hollywood, Hindi Cartoon, Anime, TV Shows, Web Series at mkvCinemas",
			"publisher": {
				"@id": "https://mkvcinemas.buzz/#organization"
			},
			"potentialAction": {
				"@type": "SearchAction",
				"target": "https://mkvcinemas.buzz/blog?query={search_term_string}",
				"query-input": "required name=search_term_string"
			},
			"inLanguage": "en-US"
		},
		{
			"@type": "Organization",
			"@id": "https://mkvcinemas.buzz/#organization",
			"name": "mkvCinemas",
			"url": "https://mkvcinemas.buzz/",
			"logo": {
				"@type": "ImageObject",
				"url": "https://www.mkvcinemas.buzz/logo.png",
				"width": 180,
				"height": 180,
				"caption": "mkvCinemas"
			},
			"contactPoint": [
				{
					"@type": "ContactPoint",
					"contactType": "Customer Support",
					"email": "info@mkvcinemas.buzz",
					"availableLanguage": "en"
				}
			]
		},
		{
			"@type": "BreadcrumbList",
			"@id": "https://mkvcinemas.buzz/#breadcrumb",
			"itemListElement": [
				{
					"@type": "ListItem",
					"position": 1,
					"name": "Home",
					"item": "https://mkvcinemas.buzz/"
				},
				{
					"@type": "ListItem",
					"position": 2,
					"name": "Bollywood Movies",
					"item": "https://mkvcinemas.buzz/hindi-movies"
				},
				{
					"@type": "ListItem",
					"position": 3,
					"name": "Telugu Movies",
					"item": "https://mkvcinemas.buzz/telugu-movies"
				},
				{
					"@type": "ListItem",
					"position": 4,
					"name": "Kannada Movies",
					"item": "https://mkvcinemas.buzz/kannada-movies"
				},
				{
					"@type": "ListItem",
					"position": 5,
					"name": "Tamil Movies",
					"item": "https://mkvcinemas.buzz/tamil-movies"
				},
				{
					"@type": "ListItem",
					"position": 6,
					"name": "OTT Bookmarks",
					"item": "https://mkvcinemas.buzz/bookmarks-list"
				}
			]
		},
		{
			"@type": "CollectionPage",
			"@id": "https://mkvcinemas.buzz/hindi-movies",
			"url": "https://mkvcinemas.buzz/hindi-movies",
			"name": "Bollywood Movies",
			"description": "Browse the latest Bollywood movies available on mkvCinemas.",
			"image": {
				"@type": "ImageObject",
				"url": "https://mkvcinemas.buzz/i/12th-fail.webp"
			},
			"isPartOf": {
				"@id": "https://mkvcinemas.buzz/#website"
			},
			"breadcrumb": {
				"@id": "https://mkvcinemas.buzz/#breadcrumb"
			},
			"inLanguage": "en-US"
		},
		{
			"@type": "CollectionPage",
			"@id": "https://mkvcinemas.buzz/telugu-movies",
			"url": "https://mkvcinemas.buzz/telugu-movies",
			"name": "Telugu Movies",
			"description": "Explore the best Telugu movies on mkvCinemas.",
			"image": {
				"@type": "ImageObject",
				"url": "https://mkvcinemas.buzz/telugu-movies/kalki-2898-ad.webp"
			},
			"isPartOf": {
				"@id": "https://mkvcinemas.buzz/#website"
			},
			"breadcrumb": {
				"@id": "https://mkvcinemas.buzz/#breadcrumb"
			},
			"inLanguage": "en-US"
		},
		{
			"@type": "CollectionPage",
			"@id": "https://mkvcinemas.buzz/kannada-movies",
			"url": "https://mkvcinemas.buzz/kannada-movies",
			"name": "Kannada Movies",
			"description": "Discover the latest Kannada movies available on mkvCinemas.",
			"image": {
				"@type": "ImageObject",
				"url": "https://mkvcinemas.buzz/i/kantara.webp"
			},
			"isPartOf": {
				"@id": "https://mkvcinemas.buzz/#website"
			},
			"breadcrumb": {
				"@id": "https://mkvcinemas.buzz/#breadcrumb"
			},
			"inLanguage": "en-US"
		},
		{
			"@type": "CollectionPage",
			"@id": "https://mkvcinemas.buzz/tamil-movies",
			"url": "https://mkvcinemas.buzz/tamil-movies",
			"name": "Tamil Movies",
			"description": "Check out the latest Tamil movies available on mkvCinemas.",
			"image": {
				"@type": "ImageObject",
				"url": "https://mkvcinemas.buzz/i/thangalaan.webp"
			},
			"isPartOf": {
				"@id": "https://mkvcinemas.buzz/#website"
			},
			"breadcrumb": {
				"@id": "https://mkvcinemas.buzz/#breadcrumb"
			},
			"inLanguage": "en-US"
		},
		{
			"@type": "CollectionPage",
			"@id": "https://mkvcinemas.buzz/bookmarks-list",
			"url": "https://mkvcinemas.buzz/bookmarks-list",
			"name": "OTT Bookmarks",
			"description": "Find a list of OTT bookmarks for streaming movies and shows.",
			"image": {
				"@type": "ImageObject",
				"url": "https://mkvcinemas.buzz/icon-192.png"
			},
			"isPartOf": {
				"@id": "https://mkvcinemas.buzz/#website"
			},
			"breadcrumb": {
				"@id": "https://mkvcinemas.buzz/#breadcrumb"
			},
			"inLanguage": "en-US"
		}
	]
}