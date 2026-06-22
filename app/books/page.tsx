import { BooksSection } from '@/components/books-section'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Books | Yash Mahadik',
  description: 'Books I am reading, what I have read, and what I keep pretending I will read.',
}

export default function BooksPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <BooksSection />
      <Footer />
    </main>
  )
}
