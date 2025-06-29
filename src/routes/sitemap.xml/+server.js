import { config, navLinks } from '$lib/config';
import { getEntries } from '$lib/utils/entries.js';

export const prerender = true;

const trimSlash = (str) => str.replace(/^\/|\/$/g, '');

export async function GET() {
	const pages = navLinks;
	const posts = getEntries('posts');
	const body = sitemap(posts, pages);

	return new Response(body, {
		headers: {
			'Cache-Control': `max-age=0, s-maxage=${43200}`,
			'Content-Type': 'application/xml'
		}
	});
}

const sitemap = (posts, pages) => `<?xml version="1.0" encoding="UTF-8" ?>
  <urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  >
    <url>
      <loc>${config.siteUrl}</loc>
      <priority>0.8</priority>
    </url>
    ${pages
			.map(
				(page) => `
    <url>
      <loc>${config.siteUrl}/${trimSlash(page.href)}</loc>
      <priority>0.7</priority>
    </url>
    `
			)
			.join('')}
    ${posts
			.map((post) =>
				post.isPrivate
					? null
					: `
    <url>
      <loc>${config.siteUrl}/${post.slug}</loc>
      <priority>0.7</priority>
    </url>
    `
			)
			.join('')}
  </urlset>`;
