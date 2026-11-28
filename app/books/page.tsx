import { BooksSection } from '@/components/books-section'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Books | Yash Mahadik',
  description: 'A personal bookshelf of books I am reading, have read, and hope to read.',
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
