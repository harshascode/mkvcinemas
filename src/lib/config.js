export const config = {
	title: 'MkvCinemas.com',
	author: 'Harsh',
	headerTitle: 'Mkvcinemas',
	description:
		'mkvCinemas PC and Smartphone Movies of Bollywood, Hollywood, Hindi Cartoon, Anime, TV Shows, Web Series at "MkvCinemas"',
	language: 'en-us',
	theme: 'dark', // system, dark or light
	domain: 'https://mkvcinemas.buzz',
	siteUrl: 'https://mkvcinemas.buzz',
	siteRepo: 'https://github.com/harshascode/mkvcinemas.buzz',
	siteLogo: '/icon-512.png',
	// image: '/img/avatar.png',
	email: 'info@mkvcinemas.buzz',
	github: 'https://github.com/harshascode/mkvcinemas.buzz',
	twitter: 'https://twitter.com/mkvcinemas',
	facebook: 'https://www.facebook.com/mkvcinemas',
	youtube: 'https://www.youtube.com/watch?v=p3RwX06wcBs',
	linkedin: 'https://www.linkedin.com/mkvcinemas',
	locale: 'en-US',
	primaryColor: '#06a261',

	// supports buttondown, convertkit, emailoctopus, klaviyo, mailchimp, revue
	// use false or null to disable newsletter
	// check .env.example for settings needed values for each service
	// newsletter: 'mailchimp',

	multiuser: true
};

export const user = {
	name: 'admin',
	// avatar value can be removed for image
	avatar: '/logo.png',
	// twitter value can be removed for no link to twitter
	twitter: 'https://twitter.com/mkvcinemas'
};

export const navLinks = [
	// { href: '/', title: 'Home' },
	{ href: '/hindi-movies', title: 'Hindi' },
	{ href: '/telugu-movies', title: 'Telugu' },
	{ href: '/tamil-movies', title: 'Tamil' },
	{ href: '/kannada-movies', title: 'Kannada' },
	// { href: '/malayalam-movies', title: 'Malayalam' },
	// { href: '/about', title: 'About' },
	{ href: '/bookmarks-list', title: 'Bookmarks' },
	{ href: '/blog', title: 'Blog' }
];

export const openGraph = {
	enabled: true,
	width: 1200,
	height: 630
};

// supported systems: googleAnalytics, plausible, and simpleAnalytics
export const analytics = {
	googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
	plausibleDomain: '' // e.g. pied-piper-blog.netlify.app
};
