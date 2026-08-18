import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function HomeGamesSection() {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">Games</h2>
          <p className="text-muted-foreground">
            Play interactive games with AI. Challenge yourself with strategic experiences.
          </p>
        </div>

        {/* Games Preview */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Infinite Tic Tac Toe Preview */}
          <div className="border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-foreground mb-2">♟️ Infinite Tic Tac Toe</h3>
              <p className="text-sm text-muted-foreground">
                Play against an AI opponent where each player can only have 3 active pieces at a time. When you place your 4th mark, the oldest one disappears.
              </p>
            </div>
            <Link
              href="/games"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium text-sm"
            >
              Play Now
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Tetris Preview */}
          <div className="border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-foreground mb-2">Tetris</h3>
              <p className="text-sm text-muted-foreground">
                Stack falling pieces, clear lines, and chase a high score in a classic monochrome arcade game.
              </p>
            </div>
            <Link href="/games" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium text-sm">
              Play Now
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* View All Games */}
        <Link
          href="/games"
          className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium"
        >
          View all games
          <ArrowUpRight size={18} />
        </Link>
      </div>
    </section>
  )
}
