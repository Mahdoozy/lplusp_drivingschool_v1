import { MetadataRoute } from 'next'
import { posts } from '@/lib/posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://lppdrivingschool.com.au'

  // All 27 suburbs matching lib/suburbs.ts
  const suburbs = [
    'north-ryde', 'east-ryde', 'ryde', 'west-ryde', 'macquarie-park',
    'eastwood', 'epping', 'castle-hill', 'north-rocks', 'carlingford',
    'beecroft', 'telopea', 'dundas', 'ermington', 'rydalmere',
    'melrose-park', 'meadowbank', 'rhodes', 'gladesville', 'putney',
    'silverwater', 'newington', 'auburn', 'chatswood',
    'hornsby', 'blacktown', 'bankstown',
  ]

  const suburbPages = suburbs.map((suburb) => ({
    url: `${baseUrl}/driving-lessons/${suburb}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const blogPosts = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    { url: baseUrl,                                      lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${baseUrl}/book`,                            lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${baseUrl}/services`,                        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/about`,                           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/overseas-licence-conversion`,     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/female-instructor`,               lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog`,                            lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${baseUrl}/faq`,                             lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/contact`,                         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    ...suburbPages,
    ...blogPosts,
  ]
}
