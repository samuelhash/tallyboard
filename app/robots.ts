import { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://tallyboard.io';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/api/', // keep the waitlist endpoint out of indexes
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
