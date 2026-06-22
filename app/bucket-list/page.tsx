import { BucketListSection } from '@/components/bucket-list-section'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Bucket List | Yash Mahadik',
  description: 'Curated links and things I want to explore, experience, and build.',
}

export default function BucketListPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <BucketListSection />
      <Footer />
    </main>
  )
}
