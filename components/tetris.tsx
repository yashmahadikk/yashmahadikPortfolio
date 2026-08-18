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
    if (isPaused || isOver) return
    const next = { ...piece, x: piece.x + dx, y: piece.y + dy }
    if (!collides(next)) setPiece(next)
    else if (dy > 0) lockPiece()
  }, [collides, isOver, isPaused, lockPiece, piece])

  const rotatePiece = useCallback((direction: 1 | -1) => {
    if (isPaused || isOver) return
    const rotated = direction === 1 ? rotate(piece.shape) : rotate(rotate(rotate(piece.shape)))
    const next = { ...piece, shape: rotated }
    if (!collides(next)) setPiece(next)
  }, [collides, isOver, isPaused, piece])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') move(-1, 0)
      if (event.key === 'ArrowRight') move(1, 0)
      if (event.key === 'ArrowDown') move(0, 1)
      if (event.key === 'ArrowUp') rotatePiece(1)
      if (event.key === ' ') { event.preventDefault(); setIsPaused((current) => !current) }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [move, rotatePiece])

  useEffect(() => {
    if (isPaused || isOver) return
    const timer = window.setInterval(() => move(0, 1), Math.max(120, 700 - (level - 1) * 60))
    return () => window.clearInterval(timer)
  }, [isOver, isPaused, level, move])

  const visibleBoard = useMemo(() => {
    const display = board.map((row) => [...row])
    piece.shape.forEach((row, y) => row.forEach((value, x) => {
      if (value && piece.y + y >= 0 && piece.y + y < HEIGHT && piece.x + x >= 0) display[piece.y + y][piece.x + x] = piece.color
    }))
    return display
  }, [board, piece])

  const restart = () => { setBoard(createBoard()); setPiece(randomPiece()); setScore(0); setLevel(1); setIsOver(false); setIsPaused(false) }

  return (
    <div className="w-full max-w-md border border-border bg-background p-4 sm:p-6">
      <div className="mb-5 flex items-start justify-between">
        <div><p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Classic arcade</p><h2 className="mt-1 text-2xl font-semibold text-foreground">Tetris</h2></div>
        <div className="flex gap-4 text-right font-mono text-xs text-muted-foreground"><span>Score <strong className="block text-foreground">{score}</strong></span><span>Level <strong className="block text-foreground">{level}</strong></span></div>
      </div>
      <div className="relative mx-auto aspect-[1/2] w-full max-w-[280px] border-2 border-foreground bg-muted/20 p-1">
        <div className="grid h-full grid-cols-10 grid-rows-20 gap-px">
          {visibleBoard.flatMap((row, y) => row.map((cell, x) => <div key={`${x}-${y}`} className={cell ? `${cell} opacity-90` : 'bg-background'} />))}
        </div>
        {(isPaused || isOver) && <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/90 text-center"><p className="font-semibold text-foreground">{isOver ? 'Game over' : 'Paused'}</p><button onClick={isOver ? restart : () => setIsPaused(false)} className="mt-3 border border-foreground px-4 py-2 text-sm text-foreground hover:bg-foreground hover:text-background">{isOver ? 'Play again' : 'Resume'}</button></div>}
      </div>
      <div className="mt-5 flex flex-wrap justify-center gap-2">
        <button aria-label="Move left" onClick={() => move(-1, 0)} className="border border-border px-4 py-2 text-foreground hover:bg-muted">←</button><button aria-label="Move down" onClick={() => move(0, 1)} className="border border-border px-4 py-2 text-foreground hover:bg-muted">↓</button><button aria-label="Move right" onClick={() => move(1, 0)} className="border border-border px-4 py-2 text-foreground hover:bg-muted">→</button><button aria-label="Rotate piece" onClick={() => rotatePiece(1)} className="border border-border p-2 text-foreground hover:bg-muted"><RotateCw size={18} /></button><button aria-label="Rotate piece counterclockwise" onClick={() => rotatePiece(-1)} className="border border-border p-2 text-foreground hover:bg-muted"><RotateCcw size={18} /></button>
      </div>
      <div className="mt-3 flex justify-center gap-2"><button onClick={() => setIsPaused((current) => !current)} className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground">{isPaused ? <Play size={14} /> : <Pause size={14} />} {isPaused ? 'Resume' : 'Pause'}</button><button onClick={restart} className="text-xs text-muted-foreground hover:text-foreground">Restart</button></div>
      <p className="mt-4 text-center font-mono text-[11px] text-muted-foreground">Arrow keys to move · Up to rotate · Space to pause</p>
    </div>
  )
}
