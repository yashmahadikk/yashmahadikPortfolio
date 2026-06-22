'use client'

import { useState, useEffect } from 'react'
import { RotateCcw } from 'lucide-react'

interface Move {
  position: number
  timestamp: number
}

export default function InfiniteTicTacToe() {
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null))
  const [playerMoves, setPlayerMoves] = useState<Move[]>([])
  const [aiMoves, setAiMoves] = useState<Move[]>([])
  const [gameStatus, setGameStatus] = useState<'playing' | 'player-win' | 'ai-win' | 'draw'>('playing')
  const [aiThinking, setAiThinking] = useState(false)
  const [moveHistory, setMoveHistory] = useState<{ player: number; ai: number }>({ player: 0, ai: 0 })

  const checkWinner = (boardState: (string | null)[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
        return boardState[a]
      }
    }
    return null
  }

  const getAvailableMoves = (boardState: (string | null)[]) => {
    return boardState
      .map((cell, index) => (cell === null ? index : null))
      .filter((index) => index !== null) as number[]
  }

  const minimax = (boardState: (string | null)[], depth: number, isMaximizing: boolean): number => {
    const winner = checkWinner(boardState)
    if (winner === 'AI') return 10 - depth
    if (winner === 'Player') return depth - 10
    if (getAvailableMoves(boardState).length === 0) return 0

    if (isMaximizing) {
      let bestScore = -Infinity
      getAvailableMoves(boardState).forEach((move) => {
        const newBoard = [...boardState]
        newBoard[move] = 'AI'
        const score = minimax(newBoard, depth + 1, false)
        bestScore = Math.max(score, bestScore)
      })
      return bestScore
    } else {
      let bestScore = Infinity
      getAvailableMoves(boardState).forEach((move) => {
        const newBoard = [...boardState]
        newBoard[move] = 'Player'
        const score = minimax(newBoard, depth + 1, true)
        bestScore = Math.min(score, bestScore)
      })
      return bestScore
    }
  }

  const getBestMove = (boardState: (string | null)[]) => {
    let bestScore = -Infinity
    let bestMove = 0
    getAvailableMoves(boardState).forEach((move) => {
      const newBoard = [...boardState]
      newBoard[move] = 'AI'
      const score = minimax(newBoard, 0, false)
      if (score > bestScore) {
        bestScore = score
        bestMove = move
      }
    })
    return bestMove
  }

  const makeMove = (index: number, player: 'Player' | 'AI', currentBoard: (string | null)[], currentPlayerMoves: Move[], currentAiMoves: Move[]) => {
    if (currentBoard[index] !== null) return currentBoard

    const newBoard = [...currentBoard]
    const newMoves = player === 'Player' ? [...currentPlayerMoves] : [...currentAiMoves]

    newMoves.push({ position: index, timestamp: Date.now() })
    newBoard[index] = player

    // Remove oldest move if player has more than 3 active pieces
    if (newMoves.length > 3) {
      const removedMove = newMoves.shift()
      if (removedMove) {
        newBoard[removedMove.position] = null
      }
    }

    if (player === 'Player') {
      setPlayerMoves(newMoves)
    } else {
      setAiMoves(newMoves)
    }

    return newBoard
  }

  const handlePlayerMove = (index: number) => {
    if (gameStatus !== 'playing' || aiThinking || board[index] !== null) return

    let newBoard = makeMove(index, 'Player', board, playerMoves, aiMoves)
    setBoard(newBoard)
    setMoveHistory({ ...moveHistory, player: moveHistory.player + 1 })

    const winner = checkWinner(newBoard)
    if (winner === 'Player') {
      setGameStatus('player-win')
      return
    }

    setAiThinking(true)
  }

  useEffect(() => {
    if (!aiThinking || gameStatus !== 'playing') return

    const timer = setTimeout(() => {
      const availableMoves = getAvailableMoves(board)
      if (availableMoves.length === 0) {
        setGameStatus('draw')
        setAiThinking(false)
        return
      }

      const aiMove = getBestMove(board)
      let newBoard = makeMove(aiMove, 'AI', board, playerMoves, aiMoves)
      setBoard(newBoard)
      setMoveHistory({ ...moveHistory, ai: moveHistory.ai + 1 })

      const winner = checkWinner(newBoard)
      if (winner === 'AI') {
        setGameStatus('ai-win')
      }

      setAiThinking(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [aiThinking, gameStatus, board, playerMoves, aiMoves, moveHistory])

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setPlayerMoves([])
    setAiMoves([])
    setGameStatus('playing')
    setAiThinking(false)
    setMoveHistory({ player: 0, ai: 0 })
  }

  const getStatusMessage = () => {
    if (gameStatus === 'player-win') return '🎉 You won!'
    if (gameStatus === 'ai-win') return '🤖 AI won!'
    if (gameStatus === 'draw') return '🤝 It\'s a draw!'
    return aiThinking ? '🤖 AI is thinking...' : '👤 Your turn'
  }

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-foreground mb-2">Infinite Tic Tac Toe</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Each player can only have 3 active pieces. When you place a 4th mark, your oldest mark disappears.
        </p>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="p-3 bg-muted rounded-lg">
            <p className="text-xs text-muted-foreground mb-1">Your Pieces</p>
            <p className="text-lg font-semibold text-foreground">{playerMoves.length}/3</p>
          </div>
          <div className="p-3 bg-muted rounded-lg">
            <p className="text-xs text-muted-foreground mb-1">AI Pieces</p>
            <p className="text-lg font-semibold text-foreground">{aiMoves.length}/3</p>
          </div>
        </div>
      </div>

      {/* Game Board */}
      <div className="grid grid-cols-3 gap-2 mb-6 bg-border p-2 rounded-lg">
        {board.map((cell, index) => (
          <button
            key={index}
            onClick={() => handlePlayerMove(index)}
            disabled={gameStatus !== 'playing' || aiThinking}
            className={`aspect-square rounded-lg font-bold text-2xl transition-all ${
              cell === null
                ? 'bg-background hover:bg-muted cursor-pointer'
                : cell === 'Player'
                ? 'bg-primary text-primary-foreground cursor-not-allowed'
                : 'bg-destructive text-destructive-foreground cursor-not-allowed'
            }`}
          >
            {cell === 'Player' ? 'X' : cell === 'AI' ? 'O' : ''}
          </button>
        ))}
      </div>

      {/* Status */}
      <div className="text-center mb-6">
        <p className="text-lg font-semibold text-foreground">{getStatusMessage()}</p>
        <p className="text-xs text-muted-foreground mt-2">
          Your moves: {moveHistory.player} | AI moves: {moveHistory.ai}
        </p>
      </div>

      {/* Reset Button */}
      <button
        onClick={resetGame}
        className="w-full py-3 px-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
      >
        <RotateCcw size={18} />
        New Game
      </button>
    </div>
  )
}
