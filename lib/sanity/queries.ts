import { sanityClient } from './client'

export type SanityContent = {
  _id: string
  title?: string
  slug?: { current?: string }
  category?: string
  excerpt?: string
  summary?: string
  publishedAt?: string
  featured?: boolean
}

export async function getSanityPortfolioContent() {
  return sanityClient.fetch<SanityContent[]>(
    `*[_type in ["workProject", "caseStudy", "blogPost", "book", "movie"]] | order(publishedAt desc, _createdAt desc) {
      _id, _type, title, slug, category, excerpt, summary, publishedAt, featured
    }`,
    {},
    { next: { revalidate: 60, tags: ['sanity-portfolio-content'] } },
  )
}

export async function getSanitySiteSettings() {
  return sanityClient.fetch(
    `*[_type == "siteSettings"][0]{ title, description, email, bookingUrl, socialLinks }`,
    {},
    { next: { revalidate: 60, tags: ['sanity-site-settings'] } },
  )
}
