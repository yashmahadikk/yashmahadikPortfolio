'use client'

import { useCallback, useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react'
import { Pause, Play, RotateCcw } from 'lucide-react'

type Point = { x: number; y: number }
type Direction = 'up' | 'right' | 'down' | 'left'
type GameStatus = 'ready' | 'playing' | 'paused' | 'over' | 'won'

const BOARD_SIZE = 20
const INITIAL_SNAKE: Point[] = [
  { x: 9, y: 10 },
  { x: 8, y: 10 },
  { x: 7, y: 10 },
]
const VECTORS: Record<Direction, Point> = {
  up: { x: 0, y: -1 },
  right: { x: 1, y: 0 },
  down: { x: 0, y: 1 },
  left: { x: -1, y: 0 },
}
const OPPOSITE: Record<Direction, Direction> = {
  up: 'down',
  right: 'left',
  down: 'up',
  left: 'right',
}

function randomFood(snake: Point[]): Point | null {
  const openCells = Array.from({ length: BOARD_SIZE * BOARD_SIZE }, (_, index) => ({
    x: index % BOARD_SIZE,
    y: Math.floor(index / BOARD_SIZE),
  })).filter((cell) => !snake.some((part) => part.x === cell.x && part.y === cell.y))

  if (openCells.length === 0) return null
  return openCells[Math.floor(Math.random() * openCells.length)]
}

export default function SnakeGame() {
  const [snake, setSnake] = useState<Point[]>(INITIAL_SNAKE)
  const [food, setFood] = useState<Point | null>(() => randomFood(INITIAL_SNAKE))
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [status, setStatus] = useState<GameStatus>('ready')
  const direction = useRef<Direction>('right')
  const touchStart = useRef<Point | null>(null)

  const changeDirection = useCallback((next: Direction) => {
    if (OPPOSITE[direction.current] !== next) direction.current = next
  }, [])

  const moveSnake = useCallback(() => {
    const vector = VECTORS[direction.current]
    const head = { x: snake[0].x + vector.x, y: snake[0].y + vector.y }
    const isEating = food?.x === head.x && food?.y === head.y
    const body = isEating ? snake : snake.slice(0, -1)
    const hitWall = head.x < 0 || head.x >= BOARD_SIZE || head.y < 0 || head.y >= BOARD_SIZE
    const hitSnake = body.some((part) => part.x === head.x && part.y === head.y)

    if (hitWall || hitSnake) {
      setStatus('over')
      return
    }

    const nextSnake = [head, ...body]
    setSnake(nextSnake)

    if (isEating) {
      const nextScore = score + 10
      setScore(nextScore)
      setBestScore((current) => Math.max(current, nextScore))
      const nextFood = randomFood(nextSnake)
      setFood(nextFood)
      if (!nextFood) setStatus('won')
    }
  }, [food, score, snake])

  useEffect(() => {
    if (status !== 'playing') return
    const timer = window.setInterval(moveSnake, 110)
    return () => window.clearInterval(timer)
  }, [moveSnake, status])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const keys: Record<string, Direction> = {
        ArrowUp: 'up', ArrowRight: 'right', ArrowDown: 'down', ArrowLeft: 'left',
        w: 'up', d: 'right', s: 'down', a: 'left',
      }
      const nextDirection = keys[event.key] ?? keys[event.key.toLowerCase()]

      if (status === 'playing' && nextDirection) {
        event.preventDefault()
        changeDirection(nextDirection)
      }
      if (event.code === 'Space' && (status === 'playing' || status === 'paused')) {
        event.preventDefault()
        setStatus((current) => current === 'playing' ? 'paused' : 'playing')
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [changeDirection, status])

  const handleBoardPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'touch' || status !== 'playing') return
    touchStart.current = { x: event.clientX, y: event.clientY }
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const handleBoardPointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    const start = touchStart.current
    touchStart.current = null
    if (!start || status !== 'playing') return

    const deltaX = event.clientX - start.x
    const deltaY = event.clientY - start.y
    if (Math.max(Math.abs(deltaX), Math.abs(deltaY)) < 24) return

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      changeDirection(deltaX > 0 ? 'right' : 'left')
    } else {
      changeDirection(deltaY > 0 ? 'down' : 'up')
    }
  }

  const restart = () => {
    const initialSnake = INITIAL_SNAKE.map((part) => ({ ...part }))
    direction.current = 'right'
    setSnake(initialSnake)
    setFood(randomFood(initialSnake))
    setScore(0)
    setStatus('ready')
  }

  const beginGame = () => {
    if (status === 'over' || status === 'won') {
      const initialSnake = INITIAL_SNAKE.map((part) => ({ ...part }))
      direction.current = 'right'
      setSnake(initialSnake)
      setFood(randomFood(initialSnake))
      setScore(0)
    }
    setStatus('playing')
  }

  const gridCells = Array.from({ length: BOARD_SIZE * BOARD_SIZE }, (_, index) => {
    const x = index % BOARD_SIZE
    const y = Math.floor(index / BOARD_SIZE)
    const isHead = snake[0].x === x && snake[0].y === y
    const isBody = snake.slice(1).some((part) => part.x === x && part.y === y)
    const isFood = food?.x === x && food?.y === y

    return (
      <div
        key={index}
        className={isFood ? 'bg-primary' : isHead || isBody ? 'bg-foreground' : 'bg-background'}
      />
    )
  })

  return (
    <section className="w-full rounded-2xl border border-border bg-background p-3 sm:p-6" aria-label="Snake game">
      <header className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Nokia classic</p>
          <h2 className="mt-1 text-2xl font-semibold text-foreground">Snake</h2>
        </div>
        <div className="flex gap-4 text-right font-mono text-xs text-muted-foreground">
          <span>Score<strong className="block text-foreground">{score}</strong></span>
          <span>Best<strong className="block text-foreground">{bestScore}</strong></span>
        </div>
      </header>

      <div className="mx-auto grid w-full max-w-3xl items-center gap-6 lg:grid-cols-[minmax(0,1fr)_240px]">
        <div
          className={`relative mx-auto aspect-square w-full max-w-[min(100%,400px)] overflow-hidden rounded-xl border-2 border-foreground bg-muted/40 p-1 ${status === 'playing' ? 'touch-none' : 'touch-pan-y'}`}
          role="group"
          aria-label={`Snake game board. Score ${score}. ${status === 'over' ? 'Game over.' : status === 'won' ? 'You won.' : ''}`}
          onPointerDown={handleBoardPointerDown}
          onPointerUp={handleBoardPointerUp}
          onPointerCancel={() => { touchStart.current = null }}
        >
          <div aria-hidden="true" className="grid h-full grid-cols-[repeat(20,minmax(0,1fr))] grid-rows-[repeat(20,minmax(0,1fr))] gap-px bg-border">
            {gridCells}
          </div>
          {status !== 'playing' && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/90 px-6 text-center">
              <p className="font-semibold text-foreground">
                {status === 'ready' ? 'Ready?' : status === 'paused' ? 'Paused' : status === 'won' ? 'Board cleared' : 'Game over'}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {status === 'ready' ? 'Guide the snake to the food.' : status === 'paused' ? 'Your game is waiting.' : `Final score: ${score}`}
              </p>
              <button
                onClick={beginGame}
                className="mt-4 min-h-11 rounded-xl border border-foreground px-4 py-2 text-sm text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                {status === 'paused' ? 'Resume' : status === 'ready' ? 'Start game' : 'Play again'}
              </button>
            </div>
          )}
        </div>

        <div className="flex flex-col items-center gap-4 lg:items-stretch">
          <div className="mx-auto grid max-w-[200px] grid-cols-3 gap-2 lg:mx-0">
            <span aria-hidden="true" />
            <button aria-label="Move up" onClick={() => changeDirection('up')} className="min-h-12 min-w-12 rounded-lg border border-border text-foreground transition-colors hover:bg-muted">↑</button>
            <span aria-hidden="true" />
            <button aria-label="Move left" onClick={() => changeDirection('left')} className="min-h-12 min-w-12 rounded-lg border border-border text-foreground transition-colors hover:bg-muted">←</button>
            <button aria-label="Move down" onClick={() => changeDirection('down')} className="min-h-12 min-w-12 rounded-lg border border-border text-foreground transition-colors hover:bg-muted">↓</button>
            <button aria-label="Move right" onClick={() => changeDirection('right')} className="min-h-12 min-w-12 rounded-lg border border-border text-foreground transition-colors hover:bg-muted">→</button>
          </div>
          <div className="flex items-center justify-center gap-4 lg:justify-start">
            <button
              onClick={() => setStatus((current) => current === 'playing' ? 'paused' : current === 'paused' ? 'playing' : current)}
              disabled={status === 'ready' || status === 'over' || status === 'won'}
              className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-border px-3 text-sm text-foreground transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === 'paused' ? <Play size={16} /> : <Pause size={16} />}
              {status === 'paused' ? 'Resume' : 'Pause'}
            </button>
            <button onClick={restart} className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-border px-3 text-sm text-foreground transition-colors hover:bg-muted">
              <RotateCcw size={16} /> Restart
            </button>
          </div>
          <p className="text-center font-mono text-[11px] text-muted-foreground lg:text-left">
            <span className="hidden lg:inline">Arrow keys or WASD to steer · Space to pause</span>
            <span className="lg:hidden">Swipe the board or tap the arrows to steer</span>
          </p>
        </div>
      </div>
    </section>
  )
}
