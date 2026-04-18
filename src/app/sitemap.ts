import type { MetadataRoute } from 'next'
import { locales } from '@/core/i18n/config'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://flash-front.vercel.app'
  
  // Generating sitemap entries for root locales
  const localeRoutes = locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 1,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 1,
    },
    ...localeRoutes,
  ]
}
