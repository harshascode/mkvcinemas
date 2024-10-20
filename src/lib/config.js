export const config = {
	title: 'Watch HD, 1080p Movies On mkvcinemas',
	author: 'Harsh',
	headerTitle: 'Mkvcinemas',
	description:
		'Mkvcinemas is your go-to platform for the latest updates on MKV movies and other film trends. Whether its new releases or regional cinema updates, we keep you informed and connected',
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
	newsletter: 'mailchimp',

	multiuser: true
};

export const user = {
	name: 'admin',
	// avatar value can be removed for image
	avatar: '/logo.png',
	// twitter value can be removed for no link to twitter
	twitter: 'https://twitter.com/piedpiperplc'
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
	plausibleDomain: '', // e.g. pied-piper-blog.netlify.app
	simpleAnalytics: false // true or false
};

// supported providers: giscus, utterances
export const comment = {
	provider: 'giscus',
	giscus: {
		// Visit the link below, and follow the steps in the 'configuration' section
		// https://giscus.app/
		repo: 'harshascode/mkvcinemas.buzz',
		reposId: 'R_kgDONCSwZw',
		category: 'Sample Site Comments',
		categoryId: 'DIC_kwDONCSwZ84Cjen2',
		mapping: 'pathname', // supported options: pathname, url, title
		reactionsEnabled: '1', // Emoji reactions: 1 = enable / 0 = disable
		// Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
		metadata: '0',
		// theme example: light, dark, dark_dimmed, dark_high_contrast
		// Place the comment box above the comments. options: bottom, top
		inputPosition: 'bottom',
		// Choose the language giscus will be displayed in. options: en, es, zh-CN, zh-TW, ko, ja etc
		lang: 'en',
		dataStrict: '0',
		loading: 'lazy',
		// theme example: light, dark, preferred_color_scheme, light_high_contrast, dark_high_contrast
		// light_protanopia, dark_protanopiam, light_tritanopia, dark_tritanopia, dark_dimmed, transparent_dark
		theme: 'preferred_color_scheme',
		// theme when dark mode
		darkTheme: 'dark',
		themeURL: ''
	},
	utterances: {
		// Visit the link below, and follow the steps in the 'configuration' section
		// https://utteranc.es/
		repo: 'https://github.com/harshascode/mkvcinemas.buzz',
		issueTerm: 'pathname', // supported options: pathname, url, title
		label: 'Comment 💬', // label (optional): Comment 💬
		// theme example: github-light, github-dark, preferred-color-scheme
		// github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light, gruvbox-dark"
		theme: 'github-light',
		// theme when dark mode
		darkTheme: 'github-dark'
	}
};
