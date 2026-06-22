import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import InfiniteTicTacToe from '@/components/infinite-tictactoe'
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

          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-sans font-semibold text-foreground mb-4">
              Games
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Play interactive games with AI. Challenge yourself with strategic games that adapt to your skill level.
            </p>
          </div>

          {/* Games Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Infinite Tic Tac Toe */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-md">
                <InfiniteTicTacToe />
              </div>
            </div>

            {/* More Games Coming Soon */}
            <div className="flex items-center justify-center">
              <div className="text-center p-8 border border-dashed border-border rounded-lg">
                <p className="text-4xl mb-4">🎮</p>
                <p className="text-lg font-semibold text-foreground mb-2">More Games Coming Soon</p>
                <p className="text-muted-foreground">
                  More AI-powered games will be added soon. Stay tuned!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
