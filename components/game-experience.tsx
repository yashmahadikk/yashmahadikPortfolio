'use client'

import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import Link from 'next/link'
import { ArrowLeft, Maximize2, Minimize2 } from 'lucide-react'

interface GameExperienceProps {
  eyebrow: string
  title: string
  description: string
  instructions: string
  children: ReactNode
}

export default function GameExperience({
  eyebrow,
  title,
  description,
  instructions,
  children,
}: GameExperienceProps) {
  const playAreaRef = useRef<HTMLDivElement>(null)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [fullscreenError, setFullscreenError] = useState('')

  useEffect(() => {
    const syncFullscreen = () => setIsFullscreen(document.fullscreenElement === playAreaRef.current)
    document.addEventListener('fullscreenchange', syncFullscreen)
    return () => document.removeEventListener('fullscreenchange', syncFullscreen)
  }, [])

  const toggleFullscreen = useCallback(async () => {
    const playArea = playAreaRef.current
    if (!playArea) return

    setFullscreenError('')
    try {
      if (document.fullscreenElement === playArea) await document.exitFullscreen()
      else await playArea.requestFullscreen()
    } catch {
      setFullscreenError('Fullscreen is unavailable in this browser.')
    }
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <section className="px-5 pb-16 pt-28 sm:px-8 md:pb-24 md:pt-36">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
          <Link href="/games" className="inline-flex min-h-11 w-fit items-center gap-2 rounded-lg text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <ArrowLeft size={16} aria-hidden="true" />
            All games
          </Link>

          <header className="flex flex-col gap-4 border-b border-border pb-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
              <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">{title}</h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">{description}</p>
            </div>
            <div className="max-w-xs rounded-xl border border-border bg-muted/40 p-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">How to play</p>
              <p className="mt-2 text-sm leading-relaxed text-foreground">{instructions}</p>
            </div>
          </header>

          <section
            ref={playAreaRef}
            className={`w-full rounded-2xl bg-background ${isFullscreen ? 'flex min-h-screen flex-col justify-center overflow-auto p-4 sm:p-8' : ''}`}
            aria-label={`${title} play area`}
          >
            <div className="mb-4 flex items-center justify-between gap-4">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Play area</p>
              <button
                type="button"
                onClick={toggleFullscreen}
                aria-label={isFullscreen ? 'Exit fullscreen' : `Play ${title} fullscreen`}
                aria-pressed={isFullscreen}
                className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-border bg-background px-4 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {isFullscreen ? <Minimize2 size={16} aria-hidden="true" /> : <Maximize2 size={16} aria-hidden="true" />}
                <span>{isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}</span>
              </button>
            </div>
            {children}
            <p className="sr-only" aria-live="polite">{fullscreenError}</p>
          </section>
        </div>
      </section>
    </main>
  )
}
