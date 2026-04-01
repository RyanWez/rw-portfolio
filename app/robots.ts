import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    // Update this with your actual domain when deployed
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ryanwez.com'

    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}
