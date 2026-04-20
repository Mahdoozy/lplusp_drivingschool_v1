import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://lppdrivingschool.com.au'

  const suburbs = [
    'north-ryde', 'east-ryde', 'ryde', 'west-ryde', 'macquarie-park',
    'eastwood', 'epping', 'castle-hill', 'north-rocks', 'carlingford',
    'beecroft', 'telopea', 'dundas', 'ermington', 'rydalmere',
    'melrose-park', 'meadowbank', 'rhodes', 'gladesville', 'putney',
    'silverwater', 'newington', 'auburn', 'chatswood'
  ]

  const suburbPages = suburbs.map((suburb) => ({
    url: `${baseUrl}/driving-lessons/${suburb}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/book`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/book/thank-you`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
    { url: `${baseUrl}/overseas-licence-conversion`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/female-instructor`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    ...suburbPages,
  ]
}
