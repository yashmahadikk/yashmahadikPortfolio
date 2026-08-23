import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'zl23x06s',
  dataset: 'production',
  apiVersion: '2026-08-23',
  useCdn: true,
})
