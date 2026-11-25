'use client'

import { useCallback, useEffect, useState } from 'react'
import { RotateCcw } from 'lucide-react'

interface Move {
  position: number
  timestamp: number
}

type Player = 'Player' | 'AI'
type MatchLength = 1 | 3 | 5
type MatchWinner = 'player' | 'ai' | 'draw'
type GameStatus = 'playing' | 'player-win' | 'ai-win' | 'draw'

const WINNING_LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
]

function checkWinner(board: (Player | null)[]) {
  for (const [first, second, third] of WINNING_LINES) {
    if (board[first] && board[first] === board[second] && board[first] === board[third]) {
      return board[first]
    }
  }
  return null
}

function getAvailableMoves(board: (Player | null)[]) {
  return board.flatMap((cell, index) => cell === null ? [index] : [])
}

function minimax(board: (Player | null)[], depth: number, isMaximizing: boolean): number {
  const winner = checkWinner(board)
  if (winner === 'AI') return 10 - depth
  if (winner === 'Player') return depth - 10

  const availableMoves = getAvailableMoves(board)
  if (availableMoves.length === 0) return 0

  let bestScore = isMaximizing ? -Infinity : Infinity
  for (const move of availableMoves) {
    const nextBoard = [...board]
    nextBoard[move] = isMaximizing ? 'AI' : 'Player'
    const score = minimax(nextBoard, depth + 1, !isMaximizing)
    bestScore = isMaximizing ? Math.max(score, bestScore) : Math.min(score, bestScore)
  }
  return bestScore
}

function getBestMove(board: (Player | null)[]) {
  let bestScore = -Infinity
  let bestMove = getAvailableMoves(board)[0] ?? 0

  for (const move of getAvailableMoves(board)) {
    const nextBoard = [...board]
    nextBoard[move] = 'AI'
    const score = minimax(nextBoard, 0, false)
    if (score > bestScore) {
      bestScore = score
      bestMove = move
    }
  }

  return bestMove
}

const emptyBoard = (): (Player | null)[] => Array(9).fill(null)

export default function InfiniteTicTacToe() {
  const [board, setBoard] = useState<(Player | null)[]>(emptyBoard)
  const [playerMoves, setPlayerMoves] = useState<Move[]>([])
  const [aiMoves, setAiMoves] = useState<Move[]>([])
  const [gameStatus, setGameStatus] = useState<GameStatus>('playing')
  const [aiThinking, setAiThinking] = useState(false)
  const [moveHistory, setMoveHistory] = useState({ player: 0, ai: 0 })
  const [matchLength, setMatchLength] = useState<MatchLength>(3)
  const [roundScores, setRoundScores] = useState({ player: 0, ai: 0 })
  const [roundsPlayed, setRoundsPlayed] = useState(0)
  const [matchWinner, setMatchWinner] = useState<MatchWinner | null>(null)
  const [previewMoveIndex, setPreviewMoveIndex] = useState<number | null>(null)

  const makeMove = useCallback((index: number, player: Player, currentBoard: (Player | null)[], currentPlayerMoves: Move[], currentAiMoves: Move[]) => {
    if (currentBoard[index] !== null) return currentBoard

    const nextBoard = [...currentBoard]
    const nextMoves = [...(player === 'Player' ? currentPlayerMoves : currentAiMoves)]
    nextMoves.push({ position: index, timestamp: Date.now() })
    nextBoard[index] = player

    if (nextMoves.length > 3) {
      const oldestMove = nextMoves.shift()
      if (oldestMove) nextBoard[oldestMove.position] = null
    }

    if (player === 'Player') setPlayerMoves(nextMoves)
    else setAiMoves(nextMoves)

    return nextBoard
  }, [])

  const finishRound = useCallback((winner: MatchWinner) => {
    const nextScores = {
      player: roundScores.player + (winner === 'player' ? 1 : 0),
      ai: roundScores.ai + (winner === 'ai' ? 1 : 0),
    }
    const completedRounds = roundsPlayed + 1
    const winsNeeded = Math.ceil(matchLength / 2)

    setRoundScores(nextScores)
    setRoundsPlayed(completedRounds)

    if (nextScores.player >= winsNeeded) setMatchWinner('player')
    else if (nextScores.ai >= winsNeeded) setMatchWinner('ai')
    else if (completedRounds >= matchLength) {
      setMatchWinner(nextScores.player === nextScores.ai ? 'draw' : nextScores.player > nextScores.ai ? 'player' : 'ai')
    }
  }, [matchLength, roundScores, roundsPlayed])

  const handlePlayerMove = (index: number) => {
    if (gameStatus !== 'playing' || aiThinking || board[index] !== null) return

    const nextBoard = makeMove(index, 'Player', board, playerMoves, aiMoves)
    setBoard(nextBoard)
    setMoveHistory((current) => ({ ...current, player: current.player + 1 }))

    if (checkWinner(nextBoard) === 'Player') {
      setGameStatus('player-win')
      finishRound('player')
      return
    }

    setAiThinking(true)
  }

  useEffect(() => {
    if (!aiThinking || gameStatus !== 'playing') return

    const timer = window.setTimeout(() => {
      const availableMoves = getAvailableMoves(board)
      if (availableMoves.length === 0) {
        setGameStatus('draw')
        finishRound('draw')
        setAiThinking(false)
        return
      }

      const aiMove = getBestMove(board)
      const nextBoard = makeMove(aiMove, 'AI', board, playerMoves, aiMoves)
      setBoard(nextBoard)
      setMoveHistory((current) => ({ ...current, ai: current.ai + 1 }))

      if (checkWinner(nextBoard) === 'AI') {
        setGameStatus('ai-win')
        finishRound('ai')
      }

      setAiThinking(false)
    }, 500)

    return () => window.clearTimeout(timer)
  }, [aiThinking, gameStatus, board, playerMoves, aiMoves, finishRound, makeMove])

  const resetRound = () => {
    setBoard(emptyBoard())
    setPlayerMoves([])
    setAiMoves([])
    setGameStatus('playing')
    setAiThinking(false)
    setMoveHistory({ player: 0, ai: 0 })
  }

  const startNewMatch = () => {
    resetRound()
    setRoundScores({ player: 0, ai: 0 })
    setRoundsPlayed(0)
    setMatchWinner(null)
  }

  const canSelectMatchLength = roundsPlayed === 0 && moveHistory.player === 0 && moveHistory.ai === 0
  const canStartNextRound = !matchWinner && roundsPlayed > 0 && roundsPlayed < matchLength

  const getStatusMessage = () => {
    if (matchWinner === 'player') return 'You won the match'
    if (matchWinner === 'ai') return 'AI won the match'
    if (matchWinner === 'draw') return 'The match is tied'
    if (gameStatus === 'player-win') return `Round ${roundsPlayed}: you won`
    if (gameStatus === 'ai-win') return `Round ${roundsPlayed}: AI won`
    if (gameStatus === 'draw') return `Round ${roundsPlayed}: draw`
    return aiThinking ? 'AI is thinking…' : 'Your turn'
  }

  return (
    <section className="mx-auto w-full max-w-5xl rounded-2xl border border-border bg-background p-3 sm:p-6" aria-label="Infinite Tic Tac Toe">
      <header className="mb-6 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="mb-2 text-balance text-2xl font-semibold text-foreground sm:text-3xl">Infinite Tic Tac Toe</h2>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
            Each player keeps three pieces on the board. Place a fourth and your oldest piece moves out.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:items-end">
          <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">Match length</span>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Choose match length">
            {([
              [1, '1 round'],
              [3, 'Best of 3'],
              [5, 'Best of 5'],
            ] as const).map(([length, label]) => (
              <button
                key={length}
                type="button"
                aria-pressed={matchLength === length}
                disabled={!canSelectMatchLength}
                onClick={() => setMatchLength(length)}
                className={`min-h-10 rounded-lg border px-3 text-xs font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${matchLength === length ? 'border-primary bg-primary text-primary-foreground' : 'border-border text-foreground hover:bg-muted'}`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="mx-auto grid aspect-square w-full max-w-[min(100%,380px)] grid-cols-3 gap-2 rounded-xl bg-border p-2 sm:gap-3 sm:p-3" role="group" aria-label="Tic Tac Toe board">
          {board.map((cell, index) => {
            const isRemovalPreview = previewMoveIndex !== null
              && playerMoves.length === 3
              && playerMoves[0]?.position === index

            return (
              <button
                key={index}
                type="button"
                aria-label={`Row ${Math.floor(index / 3) + 1}, column ${(index % 3) + 1}${cell ? `, ${cell === 'Player' ? 'X' : 'O'}` : ', empty'}${isRemovalPreview ? ', will disappear on your next move' : ''}`}
                aria-disabled={gameStatus !== 'playing' || aiThinking || cell !== null}
                onPointerEnter={() => cell === null && gameStatus === 'playing' && !aiThinking && setPreviewMoveIndex(index)}
                onPointerLeave={() => setPreviewMoveIndex(null)}
                onFocus={() => cell === null && gameStatus === 'playing' && !aiThinking && setPreviewMoveIndex(index)}
                onBlur={() => setPreviewMoveIndex(null)}
                onClick={() => {
                  setPreviewMoveIndex(null)
                  handlePlayerMove(index)
                }}
                disabled={gameStatus !== 'playing' || aiThinking || cell !== null}
                className={`aspect-square rounded-lg font-sans text-4xl font-semibold transition-[filter,opacity,transform,colors] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:text-6xl ${cell === null ? 'bg-background text-foreground hover:bg-muted' : cell === 'Player' ? 'bg-primary text-primary-foreground' : 'bg-destructive text-destructive-foreground'} ${isRemovalPreview ? 'scale-95 opacity-50 blur-[2px]' : ''}`}
              >
                {cell === 'Player' ? 'X' : cell === 'AI' ? 'O' : ''}
              </button>
            )
          })}
        </div>

        <aside className="flex flex-col gap-4" aria-label="Match status and controls">
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-muted p-3">
              <p className="text-xs text-muted-foreground">You</p>
              <p className="mt-1 text-2xl font-semibold text-foreground" aria-label={`${roundScores.player} round wins`}>{roundScores.player}</p>
              <p className="text-[11px] text-muted-foreground">{playerMoves.length}/3 active pieces</p>
            </div>
            <div className="rounded-xl bg-muted p-3">
              <p className="text-xs text-muted-foreground">AI</p>
              <p className="mt-1 text-2xl font-semibold text-foreground" aria-label={`${roundScores.ai} round wins`}>{roundScores.ai}</p>
              <p className="text-[11px] text-muted-foreground">{aiMoves.length}/3 active pieces</p>
            </div>
          </div>

          <div className="rounded-xl border border-border p-4" aria-live="polite" aria-atomic="true">
            <p className="text-sm font-semibold text-foreground">{getStatusMessage()}</p>
            <p className="mt-1 text-xs text-muted-foreground">
              {matchWinner ? `${roundsPlayed} ${roundsPlayed === 1 ? 'round' : 'rounds'} played` : `Round ${Math.min(roundsPlayed + 1, matchLength)} of ${matchLength}`}
            </p>
            <p className="mt-3 text-xs text-muted-foreground">Moves this round: you {moveHistory.player} · AI {moveHistory.ai}</p>
          </div>

          {canStartNextRound ? (
            <button type="button" onClick={resetRound} className="min-h-12 rounded-lg bg-primary px-4 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90">
              Start round {roundsPlayed + 1}
            </button>
          ) : null}
          <button type="button" onClick={startNewMatch} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-border px-4 py-3 font-medium text-foreground transition-colors hover:bg-muted">
            <RotateCcw size={16} /> New match
          </button>
        </aside>
      </div>
    </section>
  )
}
