import Link from 'next/link'

const games = [
  {
    href: '/games/infinite-tic-tac-toe',
    category: 'Strategy',
    title: 'Infinite Tic Tac Toe',
    description: 'Play an AI opponent on a 3×3 board where older pieces cycle out.',
    action: 'Play the strategy game',
  },
  {
    href: '/games/tetris',
    category: 'Arcade',
    title: 'Tetris',
    description: 'Stack falling pieces, clear lines, and chase a high score.',
    action: 'Play Tetris',
  },
  {
    href: '/games/snake',
    category: 'Nokia classic',
    title: 'Snake',
    description: 'Guide the snake, collect food, and beat your best score.',
    action: 'Play Snake',
  },
]

export default function GamesHub() {
  return (
    <div className="flex flex-col gap-8">
      <header>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Arcade collection</p>
        <h1 className="mt-3 text-balance text-4xl font-semibold text-foreground md:text-5xl">Games</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Choose a game to open its own play page, learn the controls, and jump into fullscreen.
        </p>
      </header>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {games.map((game) => (
          <Link
            key={game.href}
            href={game.href}
            className="group flex min-h-64 flex-col rounded-2xl border border-border bg-background p-6 transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:p-8"
          >
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">{game.category}</p>
            <h2 className="mt-4 text-2xl font-semibold text-foreground">{game.title}</h2>
            <p className="mt-3 leading-6 text-muted-foreground">{game.description}</p>
            <span className="mt-auto pt-6 text-sm font-semibold text-primary transition-transform group-hover:translate-x-1">
              {game.action} <span aria-hidden="true">→</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
