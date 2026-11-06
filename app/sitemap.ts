import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // Only canonical, indexable pages; form helpers and success pages are excluded.
  return ['/', '/privacy-policy', '/analytics-privacy'].map((path) => ({
    url: new URL(path, 'https://manyconnection.co.jp').href,
  }))
}
