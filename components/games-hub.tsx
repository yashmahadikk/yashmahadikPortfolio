'use client'

import { useState } from 'react'
import InfiniteTicTacToe from '@/components/infinite-tictactoe'
import Tetris from '@/components/tetris'

export default function GamesHub() {
  const [activeGame, setActiveGame] = useState<'tictactoe' | 'tetris' | null>(null)

  return (
    <div className="flex flex-col gap-10">
      {!activeGame ? (
        <div className="flex flex-col gap-8">
          <header>
            <h1 className="mb-4 font-sans text-4xl font-semibold text-foreground md:text-5xl">Games</h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Play interactive games with AI. Challenge yourself with strategic games that adapt to your skill level.
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-2">
          <button onClick={() => setActiveGame('tictactoe')} className="rounded-2xl border border-border bg-background p-8 text-left transition-colors hover:border-foreground">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Strategy</p>
            <h2 className="mt-3 text-2xl font-semibold text-foreground">Infinite Tic Tac Toe</h2>
            <p className="mt-3 leading-6 text-muted-foreground">Challenge an adaptive AI in a board that keeps expanding.</p>
            <span className="mt-6 inline-block text-sm font-medium text-foreground">Open game →</span>
          </button>
          <button onClick={() => setActiveGame('tetris')} className="rounded-2xl border border-border bg-background p-8 text-left transition-colors hover:border-foreground">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Arcade</p>
            <h2 className="mt-3 text-2xl font-semibold text-foreground">Tetris</h2>
            <p className="mt-3 leading-6 text-muted-foreground">Stack falling pieces, clear lines, and chase a high score.</p>
            <span className="mt-6 inline-block text-sm font-medium text-foreground">Open game →</span>
          </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-6">
          <button onClick={() => setActiveGame(null)} className="self-start rounded-xl border border-border px-4 py-2 text-sm text-foreground transition-colors hover:bg-foreground hover:text-background">← All games</button>
          {activeGame === 'tictactoe' ? <div className="w-full max-w-md"><InfiniteTicTacToe /></div> : <Tetris />}
        </div>
      )}
    </div>
  )
}
