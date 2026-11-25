import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import GamesHub from '@/components/games-hub'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Games | Yash Mahadik',
  description: 'Play games with AI. Start with Infinite Tic Tac Toe.',
}

export default function GamesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-16 md:py-24 px-6 pt-32">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8">
            <ArrowLeft size={18} className="mr-2" />
            Back
          </Link>

          <GamesHub />
        </div>
      </section>

      <Footer />
    </main>
  )
}
