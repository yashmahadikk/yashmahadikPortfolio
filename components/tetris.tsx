'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { Pause, Play, RotateCw, RotateCcw } from 'lucide-react'

const WIDTH = 10
const HEIGHT = 20
const PIECES = [
  { shape: [[1, 1, 1, 1]], color: 'bg-foreground' },
  { shape: [[1, 1], [1, 1]], color: 'bg-muted-foreground' },
  { shape: [[0, 1, 0], [1, 1, 1]], color: 'bg-primary' },
  { shape: [[1, 0, 0], [1, 1, 1]], color: 'bg-foreground' },
  { shape: [[0, 0, 1], [1, 1, 1]], color: 'bg-muted-foreground' },
  { shape: [[0, 1, 1], [1, 1, 0]], color: 'bg-primary' },
  { shape: [[1, 1, 0], [0, 1, 1]], color: 'bg-foreground' },
]

type Piece = { shape: number[][]; color: string; x: number; y: number }
type Cell = string | null

const createBoard = (): Cell[][] => Array.from({ length: HEIGHT }, () => Array(WIDTH).fill(null))
const randomPiece = (): Piece => {
  const template = PIECES[Math.floor(Math.random() * PIECES.length)]
  return { ...template, shape: template.shape.map((row) => [...row]), x: 3, y: 0 }
}

function rotate(shape: number[][]) {
  return shape[0].map((_, index) => shape.map((row) => row[index]).reverse())
}

export default function Tetris() {
  const [board, setBoard] = useState<Cell[][]>(createBoard)
  const [piece, setPiece] = useState<Piece>(randomPiece)
  const [score, setScore] = useState(0)
  const [level, setLevel] = useState(1)
  const [isPaused, setIsPaused] = useState(false)
  const [isOver, setIsOver] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)

  const collides = useCallback((candidate: Piece, nextBoard = board) => {
    return candidate.shape.some((row, y) => row.some((value, x) => {
      if (!value) return false
      const boardX = candidate.x + x
      const boardY = candidate.y + y
      return boardX < 0 || boardX >= WIDTH || boardY >= HEIGHT || (boardY >= 0 && nextBoard[boardY][boardX])
    }))
  }, [board])

  const lockPiece = useCallback(() => {
    const nextBoard = board.map((row) => [...row])
    piece.shape.forEach((row, y) => row.forEach((value, x) => {
      if (value && piece.y + y >= 0) nextBoard[piece.y + y][piece.x + x] = piece.color
    }))
    const remaining = nextBoard.filter((row) => row.some((cell) => !cell))
    const cleared = HEIGHT - remaining.length
    while (remaining.length < HEIGHT) remaining.unshift(Array(WIDTH).fill(null))
    setBoard(remaining)
    setScore((current) => current + [0, 100, 300, 500, 800][cleared] * level)
    setLevel((current) => Math.floor(score / 1000) + 1)
    const nextPiece = randomPiece()
    if (collides(nextPiece, remaining)) setIsOver(true)
    else setPiece(nextPiece)
  }, [board, collides, level, piece, score])

  const move = useCallback((dx: number, dy: number) => {
    if (!hasStarted || isPaused || isOver) return
    const next = { ...piece, x: piece.x + dx, y: piece.y + dy }
    if (!collides(next)) setPiece(next)
    else if (dy > 0) lockPiece()
  }, [collides, hasStarted, isOver, isPaused, lockPiece, piece])

  const rotatePiece = useCallback((direction: 1 | -1) => {
    if (!hasStarted || isPaused || isOver) return
    const rotated = direction === 1 ? rotate(piece.shape) : rotate(rotate(rotate(piece.shape)))
    const next = { ...piece, shape: rotated }
    if (!collides(next)) setPiece(next)
  }, [collides, hasStarted, isOver, isPaused, piece])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!hasStarted || isPaused || isOver) return

      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        move(-1, 0)
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        move(1, 0)
      }
      if (event.key === 'ArrowDown') {
        event.preventDefault()
        move(0, 1)
      }
      if (event.key === 'ArrowUp') {
        event.preventDefault()
        rotatePiece(1)
      }
      if (event.code === 'Space') {
        event.preventDefault()
        setIsPaused(true)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [hasStarted, isOver, isPaused, move, rotatePiece])

  useEffect(() => {
    if (!hasStarted || isPaused || isOver) return
    const timer = window.setInterval(() => move(0, 1), Math.max(90, 420 - (level - 1) * 45))
    return () => window.clearInterval(timer)
  }, [hasStarted, isOver, isPaused, level, move])

  const visibleBoard = useMemo(() => {
    const display = board.map((row) => [...row])
    piece.shape.forEach((row, y) => row.forEach((value, x) => {
      if (value && piece.y + y >= 0 && piece.y + y < HEIGHT && piece.x + x >= 0) display[piece.y + y][piece.x + x] = piece.color
    }))
    return display
  }, [board, piece])

  const startGame = () => { setHasStarted(true); setIsPaused(false) }
  const restart = () => { setBoard(createBoard()); setPiece(randomPiece()); setScore(0); setLevel(1); setIsOver(false); setIsPaused(false); setHasStarted(false) }

  return (
    <div className="w-full rounded-2xl border border-border bg-background p-3 sm:p-6">
      <div className="mb-5 flex items-start justify-between">
        <div><p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Classic arcade</p><h2 className="mt-1 text-2xl font-semibold text-foreground">Tetris</h2></div>
        <div className="flex gap-4 text-right font-mono text-xs text-muted-foreground"><span>Score <strong className="block text-foreground">{score}</strong></span><span>Level <strong className="block text-foreground">{level}</strong></span></div>
      </div>
      <div className="mx-auto grid w-full max-w-3xl items-center gap-6 lg:grid-cols-[minmax(0,1fr)_240px]">
        <div className="tetris-board relative mx-auto aspect-[1/2] w-full max-w-[280px] rounded-xl border-2 border-foreground bg-muted/40 p-1">
          <div className="grid h-full grid-cols-10 grid-rows-20 gap-px bg-border">
            {visibleBoard.flatMap((row, y) => row.map((cell, x) => <div key={`${x}-${y}`} className={cell ?? 'bg-background'} />))}
          </div>
          {(!hasStarted || isPaused || isOver) && <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/90 px-6 text-center"><p className="font-semibold text-foreground">{!hasStarted ? 'Ready?' : isOver ? 'Game over' : 'Paused'}</p><p className="mt-2 text-sm text-muted-foreground">{!hasStarted ? 'Start when you are ready.' : isOver ? `Final score: ${score}` : 'The board is waiting.'}</p><button onClick={!hasStarted ? startGame : isOver ? restart : () => setIsPaused(false)} className="mt-4 min-h-11 rounded-xl border border-foreground px-4 py-2 text-sm text-foreground hover:bg-foreground hover:text-background">{!hasStarted ? 'Start game' : isOver ? 'Play again' : 'Resume'}</button></div>}
        </div>
        <div className="flex flex-col items-center gap-4 lg:items-stretch">
          <div className="mx-auto grid max-w-[260px] grid-cols-5 gap-2 sm:max-w-none sm:flex sm:flex-wrap sm:justify-center lg:mx-0 lg:grid lg:grid-cols-3">
            <button aria-label="Move left" onClick={() => move(-1, 0)} className="min-h-11 min-w-11 rounded-lg border border-border text-foreground transition-colors hover:bg-muted">←</button><button aria-label="Move down" onClick={() => move(0, 1)} className="min-h-11 min-w-11 rounded-lg border border-border text-foreground transition-colors hover:bg-muted">↓</button><button aria-label="Move right" onClick={() => move(1, 0)} className="min-h-11 min-w-11 rounded-lg border border-border text-foreground transition-colors hover:bg-muted">→</button><button aria-label="Rotate piece clockwise" onClick={() => rotatePiece(1)} className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:bg-muted"><RotateCw size={18} /></button><button aria-label="Rotate piece counterclockwise" onClick={() => rotatePiece(-1)} className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:bg-muted"><RotateCcw size={18} /></button>
          </div>
          <div className="flex justify-center gap-4 lg:justify-start"><button onClick={() => hasStarted && setIsPaused((current) => !current)} disabled={!hasStarted || isOver} className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-border px-3 text-sm text-muted-foreground hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50">{isPaused ? <Play size={14} /> : <Pause size={14} />} {isPaused ? 'Resume' : 'Pause'}</button><button onClick={restart} className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-border px-3 text-sm text-muted-foreground hover:text-foreground"><RotateCcw size={14} /> Restart</button></div>
          <p className="hidden text-left font-mono text-xs leading-relaxed text-muted-foreground sm:block">Arrow keys to move · Up to rotate · Space to pause</p>
          <p className="text-center font-mono text-[11px] text-muted-foreground sm:hidden">Use the buttons above to move and rotate</p>
        </div>
      </div>
    </div>
  )
}
