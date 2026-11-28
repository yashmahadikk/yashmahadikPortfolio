import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Footer } from '@/components/footer'
import { Navigation } from '@/components/navigation'
import GameExperience from '@/components/game-experience'
import InfiniteTicTacToe from '@/components/infinite-tictactoe'
import SnakeGame from '@/components/snake-game'
import Tetris from '@/components/tetris'

const games = {
  'infinite-tic-tac-toe': {
    title: 'Infinite Tic Tac Toe',
    eyebrow: 'Strategy · Versus AI',
    description: 'A familiar grid with a moving edge. Each player can keep only three marks in play, so every new move changes the board.',
    instructions: 'Make a line of three. Your fourth mark removes your oldest one.',
  },
  tetris: {
    title: 'Tetris',
    eyebrow: 'Arcade · Falling blocks',
    description: 'Rotate and place each falling piece to complete horizontal lines, keep the stack low, and build a longer run.',
    instructions: 'Use arrow keys to move, Up to rotate, and Space to pause. Clear lines before the stack reaches the top.',
  },
  snake: {
    title: 'Nokia Snake',
    eyebrow: 'Arcade · Classic',
    description: 'Guide the growing snake across the board, collect food, and avoid the walls and your own tail.',
    instructions: 'Use arrow keys or WASD, or swipe the board on mobile. Press Space to pause; on-screen arrows are also available.',
  },
} as const

type GameSlug = keyof typeof games

function isGameSlug(slug: string): slug is GameSlug {
  return slug in games
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  if (!isGameSlug(slug)) return { title: 'Game not found | Yash Mahadik' }
  return {
    title: `${games[slug].title} | Games | Yash Mahadik`,
    description: games[slug].description,
  }
}

export default async function GamePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (!isGameSlug(slug)) notFound()

  const game = games[slug]
  const Game = slug === 'infinite-tic-tac-toe'
    ? InfiniteTicTacToe
    : slug === 'tetris'
      ? Tetris
      : SnakeGame

  return (
    <>
      <Navigation />
      <GameExperience
        eyebrow={game.eyebrow}
        title={game.title}
        description={game.description}
        instructions={game.instructions}
      >
        <Game />
      </GameExperience>
      <Footer />
    </>
  )
}
