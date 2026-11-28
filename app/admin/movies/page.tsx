
"use client"

/*
 * File: app/movies/page.tsx
 *
 * Standalone Movies page.
 * Uses the existing Supabase movies table.
 * No database changes or additional dependencies.
 * Existing admin functionality remains unchanged.
 * Requires build and browser testing in the existing project.
 */

import { useEffect, useMemo, useRef, useState } from "react"

import {
  Search,
  Film,
  Clapperboard,
  SlidersHorizontal,
  Sparkles,
  ThumbsUp,
  Clock,
  SkipForward,
  Shuffle,
  LayoutGrid,
  List,
  X,
  ChevronDown,
  ChevronRight,
  ArrowUpRight,
  Play,
  Check,
  Share2,
  RefreshCw,
  BarChart3,
} from "lucide-react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { createClient } from "@/lib/supabase/client"

/* =========================================================
   TYPES
========================================================= */

interface Movie {
  id: string
  title: string
  url: string | null
  rating: string | null
  genre: string | string[] | null
  photo_url: string | null
  my_thoughts: string | null
  status: string | null
  created_at: string
}

type MovieStatus =
  | "watched"
  | "watching"
  | "watchlist"
  | "other"

type SortOrder =
  | "recent"
  | "oldest"
  | "rating"
  | "alphabetical"

/* =========================================================
   EXISTING MOVIE RATING SYSTEM
========================================================= */

const verdicts = [
  {
    label: "Perfection",
    icon: Sparkles,
    score: 4,
    color: "text-emerald-600 dark:text-emerald-400",
    description: "Exceptional. Something worth remembering.",
  },
  {
    label: "Go for it",
    icon: ThumbsUp,
    score: 3,
    color: "text-sky-600 dark:text-sky-400",
    description: "Worth spending your time on.",
  },
  {
    label: "Timepass",
    icon: Clock,
    score: 2,
    color: "text-amber-600 dark:text-amber-400",
    description: "Something to watch when you have time.",
  },
  {
    label: "Skip",
    icon: SkipForward,
    score: 1,
    color: "text-rose-600 dark:text-rose-400",
    description: "Not something I would recommend.",
  },
]

/* =========================================================
   DATA HELPERS
========================================================= */

function getStatus(status: string | null): MovieStatus {
  const value = (status || "").trim().toLowerCase()

  if (["done", "watched", "completed"].includes(value)) {
    return "watched"
  }

  if (["in progress", "watching"].includes(value)) {
    return "watching"
  }

  if (["backlog", "watchlist", "to watch"].includes(value)) {
    return "watchlist"
  }

  return "other"
}

function getGenres(movie: Movie): string[] {
  const genres = Array.isArray(movie.genre)
    ? movie.genre
    : typeof movie.genre === "string"
      ? movie.genre.split(",")
      : []

  return [...new Set(
    genres.map((genre) => genre.trim()).filter(Boolean)
  )]
}

function getVerdict(rating: string | null) {
  return verdicts.find(
    (verdict) =>
      verdict.label.toLowerCase() ===
      (rating || "").trim().toLowerCase()
  )
}

function isValidUrl(value: string | null) {
  if (!value) return false

  try {
    const url = new URL(value)

    return ["https:", "http:"].includes(url.protocol)
  } catch {
    return false
  }
}

const buttonClass =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-border px-4 text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-40"

/* =========================================================
   CODED HERO ILLUSTRATION
   Original minimalist SVG filmstrip
========================================================= */

function CinemaIllustration() {
  return (
    <svg
      viewBox="0 0 420 280"
      className="h-auto w-full"
      role="img"
      aria-label="Minimalist illustrated filmstrip"
    >
      {/* Background construction lines */}

      <g
        stroke="currentColor"
        strokeWidth="0.6"
        opacity="0.1"
      >
        {Array.from({ length: 13 }).map((_, i) => (
          <path
            key={i}
            d={`M${20 + i * 31} 20 V260`}
            strokeDasharray="2 6"
          />
        ))}

        {Array.from({ length: 8 }).map((_, i) => (
          <path
            key={i}
            d={`M20 ${20 + i * 32} H400`}
            strokeDasharray="2 6"
          />
        ))}
      </g>

      {/* Main filmstrip */}

      <g transform="rotate(-9 210 140)">

        <rect
          x="20"
          y="75"
          width="380"
          height="130"
          rx="5"
          fill="var(--muted)"
          fillOpacity="0.35"
          stroke="currentColor"
          strokeOpacity="0.4"
          strokeWidth="1.2"
        />

        {/* Film perforations */}

        {Array.from({ length: 19 }).map((_, i) => (
          <g key={i}>

            <rect
              x={28 + i * 19.3}
              y="83"
              width="11"
              height="8"
              rx="1.3"
              fill="currentColor"
              opacity="0.18"
            />

            <rect
              x={28 + i * 19.3}
              y="189"
              width="11"
              height="8"
              rx="1.3"
              fill="currentColor"
              opacity="0.18"
            />

          </g>
        ))}

        {/* Individual frames */}

        {[32, 152, 272].map((x) => (
          <rect
            key={x}
            x={x}
            y="100"
            width="116"
            height="80"
            rx="2"
            stroke="currentColor"
            strokeOpacity="0.3"
            fill="var(--primary)"
            fillOpacity="0.045"
          />
        ))}

        {/* Frame one: mountain landscape */}

        <path
          d="M32 180 L72 123 L110 180"
          stroke="currentColor"
          strokeOpacity="0.45"
          fill="var(--primary)"
          fillOpacity="0.07"
        />

        <path
          d="M90 180 L120 138 L148 180"
          stroke="currentColor"
          strokeOpacity="0.35"
          fill="var(--primary)"
          fillOpacity="0.04"
        />

        <circle
          cx="124"
          cy="116"
          r="8"
          stroke="currentColor"
          strokeOpacity="0.4"
          fill="none"
        />

        {/* Frame two: play symbol */}

        <circle
          cx="210"
          cy="140"
          r="23"
          fill="var(--background)"
          stroke="var(--primary)"
          strokeOpacity="0.7"
          strokeWidth="1.2"
        />

        <path
          d="M202 128 L221 140 L202 152 Z"
          fill="var(--primary)"
          fillOpacity="0.7"
        />

        {/* Frame three: horizon */}

        <circle
          cx="330"
          cy="127"
          r="17"
          fill="var(--primary)"
          fillOpacity="0.08"
          stroke="currentColor"
          strokeOpacity="0.3"
        />

        <path
          d="M272 165 Q310 140 350 161 T388 155"
          stroke="currentColor"
          strokeOpacity="0.45"
          fill="none"
        />

        <path
          d="M272 174 Q305 158 335 173 T388 167"
          stroke="currentColor"
          strokeOpacity="0.3"
          fill="none"
        />

      </g>

      {/* Decorative technical annotations */}

      <circle
        cx="367"
        cy="35"
        r="16"
        stroke="currentColor"
        strokeOpacity="0.2"
        strokeDasharray="3 5"
        fill="none"
      />

      <path
        d="M367 27 V43 M359 35 H375"
        stroke="currentColor"
        strokeOpacity="0.3"
      />

      <path
        d="M35 232 Q210 270 385 232"
        stroke="currentColor"
        strokeOpacity="0.2"
        strokeDasharray="3 7"
        fill="none"
      />

      <text
        x="210"
        y="271"
        textAnchor="middle"
        fontSize="9"
        letterSpacing="2.5"
        fill="currentColor"
        opacity="0.4"
      >
        STORIES THAT STAY WITH US
      </text>

    </svg>
  )
}

/* =========================================================
   MOVIE POSTER
========================================================= */

function MoviePoster({
  movie,
  className = "",
}: {
  movie: Movie
  className?: string
}) {
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    setFailed(false)
  }, [movie.photo_url])

  return (
    <div
      className={`relative aspect-[2/3] overflow-hidden rounded-md border border-border bg-muted ${className}`}
    >
      {movie.photo_url && !failed ? (
        <img
          src={movie.photo_url}
          alt={`${movie.title} poster`}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-4 p-3 text-center">

          <Film
            size={32}
            strokeWidth={1}
            className="text-muted-foreground/50"
          />

          <p className="line-clamp-4 font-serif text-base leading-snug text-muted-foreground">
            {movie.title}
          </p>

        </div>
      )}
    </div>
  )
}

/* =========================================================
   MOVIE VERDICT
========================================================= */

function MovieVerdict({
  rating,
  detailed = false,
}: {
  rating: string | null
  detailed?: boolean
}) {
  if (!rating) return null

  const verdict = getVerdict(rating)

  if (!verdict) {
    return (
      <span className="text-xs text-muted-foreground">
        {rating}
      </span>
    )
  }

  const Icon = verdict.icon

  return (
    <div>

      <div
        className={`flex items-center gap-1.5 font-medium ${verdict.color} ${
          detailed ? "text-sm" : "text-xs"
        }`}
      >
        <Icon
          size={detailed ? 18 : 13}
          strokeWidth={1.6}
          aria-hidden="true"
        />

        {verdict.label}

      </div>

      {detailed && (
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {verdict.description}
        </p>
      )}

    </div>
  )
}

/* =========================================================
   WATCHING STATUS
========================================================= */

function StatusLabel({ movie }: { movie: Movie }) {
  const status = getStatus(movie.status)

  const labels = {
    watched: "Watched",
    watching: "Watching",
    watchlist: "Watchlist",
    other: movie.status || "Uncategorized",
  }

  const colors = {
    watched: "bg-emerald-500",
    watching: "bg-sky-500",
    watchlist: "bg-muted-foreground/40",
    other: "bg-muted-foreground/40",
  }

  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">

      <span className={`size-1.5 rounded-full ${colors[status]}`} />

      {labels[status]}

    </span>
  )
}

/* =========================================================
   MOVIE CARD
========================================================= */

function MovieCard({
  movie,
  view,
  onClick,
}: {
  movie: Movie
  view: "grid" | "list"
  onClick: () => void
}) {
  const status = getStatus(movie.status)

  /* Compact list layout */

  if (view === "list") {
    return (
      <button
        type="button"
        onClick={onClick}
        className="group flex w-full items-start gap-4 border-b border-border py-4 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:items-center md:gap-6"
      >

        <MoviePoster
          movie={movie}
          className="w-[70px] shrink-0 md:w-24"
        />

        <div className="min-w-0 flex-1">

          <h3 className="text-base font-semibold leading-snug group-hover:text-primary md:text-lg">
            {movie.title}
          </h3>

          {getGenres(movie).length > 0 && (
            <p className="mt-1 line-clamp-1 text-xs text-muted-foreground">
              {getGenres(movie).join(" · ")}
            </p>
          )}

          <div className="mt-3 flex flex-wrap items-center gap-4">

            <MovieVerdict rating={movie.rating} />

            <StatusLabel movie={movie} />

          </div>

          {movie.my_thoughts && (
            <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
              {movie.my_thoughts}
            </p>
          )}

        </div>

        <ChevronRight
          size={17}
          className="shrink-0 text-muted-foreground group-hover:text-primary"
        />

      </button>
    )
  }

  /* Poster-first grid layout */

  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex min-w-0 flex-col text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
    >

      <div className="relative w-full">

        <MoviePoster movie={movie} />

        {status === "watching" && (
          <span
            className="absolute right-2 top-2 flex size-7 items-center justify-center rounded-full bg-background/95 text-primary shadow-sm"
            aria-label="Currently watching"
          >
            <Play size={13} />
          </span>
        )}

        {/* Desktop hover treatment */}

        <div className="absolute inset-0 hidden items-end rounded-md bg-black/0 p-3 transition-colors group-hover:bg-black/25 lg:flex">

          <span className="flex w-full items-center justify-between rounded-sm bg-background/95 px-3 py-2 text-xs font-medium opacity-0 transition-opacity group-hover:opacity-100">

            View details

            <ArrowUpRight size={13} />

          </span>

        </div>

      </div>

      <div className="w-full pt-3">

        <h3 className="line-clamp-2 text-sm font-medium leading-snug transition-colors group-hover:text-primary md:text-base">
          {movie.title}
        </h3>

        {getGenres(movie).length > 0 && (
          <p className="mt-1 line-clamp-1 text-[11px] text-muted-foreground">
            {getGenres(movie).join(" · ")}
          </p>
        )}

        <div className="mt-2">

          {movie.rating && status === "watched" ? (
            <MovieVerdict rating={movie.rating} />
          ) : (
            <StatusLabel movie={movie} />
          )}

        </div>

      </div>

    </button>
  )
}

/* =========================================================
   MOVIE DETAIL DRAWER

   Desktop: right-side drawer.
   Mobile: full-screen detail view.
========================================================= */

function MovieDetail({
  movie,
  movies,
  onClose,
  onSelect,
}: {
  movie: Movie
  movies: Movie[]
  onClose: () => void
  onSelect: (movie: Movie) => void
}) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  const [copied, setCopied] = useState(false)
  const [shareUrl, setShareUrl] = useState("")

  const genres = getGenres(movie)

  const relatedMovies = useMemo(() => {
    return movies
      .filter(
        (candidate) =>
          candidate.id !== movie.id &&
          getGenres(candidate).some(
            (genre) => getGenres(movie).includes(genre)
          )
      )
      .slice(0, 3)
  }, [movie, movies])

  useEffect(() => {
    const dialog = dialogRef.current

    if (!dialog) return

    const previousOverflow = document.body.style.overflow
    const previousFocus = document.activeElement as HTMLElement | null

    document.body.style.overflow = "hidden"

    if (!dialog.open) {
      dialog.showModal()
    }

    return () => {
      dialog.close()
      document.body.style.overflow = previousOverflow
      previousFocus?.focus()
    }
  }, [])

  useEffect(() => {
    setCopied(false)
    setShareUrl("")
    dialogRef.current?.scrollTo({ top: 0 })
  }, [movie.id])

  async function handleShare() {
    const url = new URL(window.location.href)

    url.searchParams.set("movie", movie.id)

    try {
      if (navigator.share) {
        await navigator.share({
          title: movie.title,
          url: url.toString(),
        })
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(url.toString())
        setCopied(true)
      } else {
        setShareUrl(url.toString())
      }
    } catch (error) {
      if (
        error instanceof Error &&
        error.name === "AbortError"
      ) {
        return
      }

      setShareUrl(url.toString())
    }
  }

  return (
    <dialog
      ref={dialogRef}
      aria-label={`Details for ${movie.title}`}
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
      className="fixed inset-0 m-0 h-[100dvh] max-h-none w-full max-w-none overflow-y-auto overscroll-contain border-border bg-background text-foreground backdrop:bg-black/50 sm:left-auto sm:right-0 sm:max-w-xl sm:border-l"
    >

      {/* Sticky detail header */}

      <header className="sticky top-0 z-20 flex items-center justify-between border-b border-border bg-background/95 px-5 py-3 backdrop-blur-sm md:px-8">

        <div className="flex items-center gap-2">

          <Clapperboard
            size={16}
            className="text-muted-foreground"
          />

          <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            From my film diary
          </span>

        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close movie details"
          className="flex size-11 items-center justify-center rounded-md text-muted-foreground hover:bg-muted"
        >
          <X size={21} />
        </button>

      </header>

      <div className="px-5 pb-12 pt-7 md:px-8 md:pt-10">

        {/* Main information */}

        <div className="flex items-start gap-5 md:gap-7">

          <MoviePoster
            movie={movie}
            className="w-[112px] shrink-0 sm:w-[160px]"
          />

          <div className="min-w-0 flex-1">

            <StatusLabel movie={movie} />

            <h2 className="mt-3 break-words font-serif text-3xl leading-tight tracking-tight md:text-4xl">
              {movie.title}
            </h2>

            {genres.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-1.5">

                {genres.map((genre) => (
                  <span
                    key={genre}
                    className="rounded-sm border border-border px-2 py-1 text-[11px] text-muted-foreground"
                  >
                    {genre}
                  </span>
                ))}

              </div>
            )}

            <div className="mt-5">

              <MovieVerdict
                rating={movie.rating}
                detailed
              />

            </div>

          </div>

        </div>

        {/* Movie actions */}

        <div className="mt-7 flex flex-wrap items-center gap-3 border-b border-border pb-7">

          {isValidUrl(movie.url) && (
            <a
              href={movie.url!}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-md bg-foreground px-5 text-sm font-medium text-background"
            >

              <Play size={15} />

              Watch film

              <ArrowUpRight size={14} />

            </a>
          )}

          <button
            type="button"
            onClick={handleShare}
            className={buttonClass}
          >

            {copied ? (
              <Check size={15} />
            ) : (
              <Share2 size={15} />
            )}

            {copied ? "Link copied" : "Share"}

          </button>

        </div>

        {shareUrl && (
          <input
            readOnly
            aria-label="Shareable movie link"
            value={shareUrl}
            onFocus={(event) => event.target.select()}
            className="mt-4 w-full rounded-md border border-border bg-background p-3 text-sm"
          />
        )}

        {/* Complete personal review */}

        <section className="border-b border-border py-9">

          <div className="mb-5 flex items-center gap-2">

            <span className="h-px w-6 bg-primary" />

            <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              My thoughts
            </span>

          </div>

          {movie.my_thoughts ? (
            <>
              <p className="whitespace-pre-wrap break-words font-serif text-lg leading-[1.9] md:text-xl">
                {movie.my_thoughts}
              </p>

              <p className="mt-6 text-sm text-muted-foreground">
                — Yash Mahadik
              </p>
            </>
          ) : (
            <p className="text-sm italic leading-relaxed text-muted-foreground">
              I haven&apos;t added my thoughts on this film yet.
            </p>
          )}

        </section>

        {/* Related movies */}

        {relatedMovies.length > 0 && (
          <section className="pt-8">

            <h3 className="font-serif text-2xl">
              More from the collection
            </h3>

            <p className="mb-6 mt-2 text-sm text-muted-foreground">
              Other films from similar genres.
            </p>

            <div className="grid grid-cols-3 gap-3 md:gap-4">

              {relatedMovies.map((related) => (
                <MovieCard
                  key={related.id}
                  movie={related}
                  view="grid"
                  onClick={() => onSelect(related)}
                />
              ))}

            </div>

          </section>
        )}

      </div>

    </dialog>
  )
}

/* =========================================================
   COLLECTION STATISTICS
========================================================= */

function MovieStatistics({
  movies,
  onStatusSelect,
}: {
  movies: Movie[]
  onStatusSelect: (status: MovieStatus | "all") => void
}) {
  const [expanded, setExpanded] = useState(false)

  const watched = movies.filter(
    (movie) => getStatus(movie.status) === "watched"
  )

  const watching = movies.filter(
    (movie) => getStatus(movie.status) === "watching"
  )

  const watchlist = movies.filter(
    (movie) => getStatus(movie.status) === "watchlist"
  )

  const topGenres = useMemo(() => {
    const counts: Record<string, number> = {}

    movies.forEach((movie) => {
      getGenres(movie).forEach((genre) => {
        counts[genre] = (counts[genre] || 0) + 1
      })
    })

    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
  }, [movies])

  const stats = [
    {
      label: "Total films",
      value: movies.length,
      status: "all" as const,
    },
    {
      label: "Watched",
      value: watched.length,
      status: "watched" as const,
    },
    {
      label: "Watching",
      value: watching.length,
      status: "watching" as const,
    },
    {
      label: "Watchlist",
      value: watchlist.length,
      status: "watchlist" as const,
    },
  ]

  if (!movies.length) return null

  return (
    <section className="border-b border-border py-7 md:py-10">

      {/* Clickable statistics */}

      <div className="grid grid-cols-4 divide-x divide-border">

        {stats.map((stat, index) => (
          <button
            type="button"
            key={stat.label}
            onClick={() => onStatusSelect(stat.status)}
            className={`min-w-0 text-left transition-colors hover:text-primary ${
              index === 0
                ? "pr-2 md:pr-6"
                : "px-2 md:px-6"
            }`}
          >

            <p className="font-serif text-3xl tabular-nums md:text-5xl">
              {stat.value}
            </p>

            <p className="mt-2 text-xs text-muted-foreground md:text-sm">
              {stat.label}
            </p>

          </button>
        ))}

      </div>

      {/* Dynamic collection composition */}

      <div
        className="mt-6 flex h-2 overflow-hidden rounded-full bg-muted"
        role="img"
        aria-label={`${watched.length} watched, ${watching.length} watching, ${watchlist.length} on watchlist`}
      >

        <div
          className="bg-emerald-500/70"
          style={{
            width: `${(watched.length / movies.length) * 100}%`,
          }}
        />

        <div
          className="bg-sky-500/70"
          style={{
            width: `${(watching.length / movies.length) * 100}%`,
          }}
        />

        <div
          className="bg-muted-foreground/25"
          style={{
            width: `${(watchlist.length / movies.length) * 100}%`,
          }}
        />

      </div>

      <button
        type="button"
        aria-expanded={expanded}
        onClick={() => setExpanded(!expanded)}
        className="mt-3 flex min-h-11 w-full items-center justify-between text-sm text-muted-foreground hover:text-foreground"
      >

        <span className="flex items-center gap-2">

          <BarChart3 size={15} />

          Collection insights

        </span>

        <ChevronDown
          size={17}
          className={`transition-transform ${
            expanded ? "rotate-180" : ""
          }`}
        />

      </button>

      {expanded && (
        <div className="grid gap-8 border-t border-border pt-7 md:grid-cols-2">

          {/* Genre distribution */}

          <div>

            <h3 className="mb-5 font-serif text-xl">
              What I tend to watch
            </h3>

            {topGenres.length === 0 && (
              <p className="text-sm text-muted-foreground">
                No genre information available.
              </p>
            )}

            <div className="space-y-5">

              {topGenres.map(([genre, count]) => (
                <div key={genre}>

                  <div className="mb-2 flex items-center justify-between text-sm">

                    <span className="text-muted-foreground">
                      {genre}
                    </span>

                    <span className="tabular-nums">
                      {count}
                    </span>

                  </div>

                  <div className="h-1.5 overflow-hidden rounded-full bg-muted">

                    <div
                      className="h-full rounded-full bg-primary/60"
                      style={{
                        width: `${(count / movies.length) * 100}%`,
                      }}
                    />

                  </div>

                </div>
              ))}

            </div>

          </div>

          {/* Verdict distribution */}

          <div className="border-t border-border pt-7 md:border-l md:border-t-0 md:pl-8 md:pt-0">

            <h3 className="mb-5 font-serif text-xl">
              My verdicts
            </h3>

            <div className="space-y-5">

              {verdicts.map((verdict) => {
                const Icon = verdict.icon

                const count = watched.filter(
                  (movie) =>
                    getVerdict(movie.rating)?.label ===
                    verdict.label
                ).length

                return (
                  <div
                    key={verdict.label}
                    className="flex items-center justify-between"
                  >

                    <div className="flex items-center gap-3">

                      <Icon
                        size={17}
                        className={verdict.color}
                      />

                      <span className="text-sm">
                        {verdict.label}
                      </span>

                    </div>

                    <span className="text-sm tabular-nums text-muted-foreground">
                      {count}
                    </span>

                  </div>
                )
              })}

            </div>

          </div>

        </div>
      )}

    </section>
  )
}

/* =========================================================
   MAIN MOVIES PAGE
========================================================= */

export default function MoviesPage() {
  const [movies, setMovies] = useState<Movie[]>([])

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [retry, setRetry] = useState(0)

  const [search, setSearch] = useState("")

  const [status, setStatus] =
    useState<MovieStatus | "all">("all")

  const [genre, setGenre] = useState("")
  const [rating, setRating] = useState("")

  const [sort, setSort] =
    useState<SortOrder>("recent")

  const [view, setView] =
    useState<"grid" | "list">("grid")

  const [filtersOpen, setFiltersOpen] = useState(false)

  const [selectedMovie, setSelectedMovie] =
    useState<Movie | null>(null)

  const [visibleCount, setVisibleCount] = useState(24)

  const collectionRef = useRef<HTMLElement>(null)

  /* =====================================================
     FETCH MOVIES FROM EXISTING SUPABASE DATABASE
  ====================================================== */

  useEffect(() => {
    let cancelled = false

    async function fetchMovies() {
      setLoading(true)
      setError("")

      try {
        const supabase = createClient()

        const records: Movie[] = []
        const batchSize = 500

        let offset = 0

        while (true) {
          const { data, error } = await supabase
            .from("movies")
            .select("*")
            .order("created_at", { ascending: false })
            .order("id", { ascending: true })
            .range(offset, offset + batchSize - 1)

          if (error) throw error

          if (cancelled) return

          const batch = (data || []) as Movie[]

          records.push(...batch)

          if (batch.length < batchSize) break

          offset += batchSize
        }

        if (cancelled) return

        setMovies(records)

        // Open a specific film from its shared URL.

        const params = new URLSearchParams(
          window.location.search
        )

        const movieId = params.get("movie")

        if (movieId) {
          const movie = records.find(
            (item) => item.id === movieId
          )

          if (movie) {
            setSelectedMovie(movie)
          }
        }
      } catch (error) {
        console.error("Error fetching movies:", error)

        if (!cancelled) {
          setError(
            "The film collection couldn't be loaded right now."
          )
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    fetchMovies()

    return () => {
      cancelled = true
    }
  }, [retry])

  /* Reset pagination when a filter changes */

  useEffect(() => {
    setVisibleCount(24)
  }, [search, status, genre, rating, sort])

  /* Dynamic genres */

  const genres = useMemo(() => {
    return [...new Set(movies.flatMap(getGenres))]
      .sort((a, b) => a.localeCompare(b))
  }, [movies])

  /* Status tabs */

  const statusTabs = [
    {
      value: "all" as const,
      label: "All films",
      count: movies.length,
    },
    {
      value: "watched" as const,
      label: "Watched",
      count: movies.filter(
        (movie) => getStatus(movie.status) === "watched"
      ).length,
    },
    {
      value: "watching" as const,
      label: "Watching",
      count: movies.filter(
        (movie) => getStatus(movie.status) === "watching"
      ).length,
    },
    {
      value: "watchlist" as const,
      label: "Watchlist",
      count: movies.filter(
        (movie) => getStatus(movie.status) === "watchlist"
      ).length,
    },
  ]

  /* =====================================================
     SEARCH, FILTERS AND SORTING
  ====================================================== */

  const filteredMovies = useMemo(() => {
    const query = search.trim().toLowerCase()

    const results = movies.filter((movie) => {
      const searchableText = [
        movie.title,
        movie.my_thoughts || "",
        ...getGenres(movie),
      ]
        .join(" ")
        .toLowerCase()

      const matchesSearch =
        !query || searchableText.includes(query)

      const matchesStatus =
        status === "all" ||
        getStatus(movie.status) === status

      const matchesGenre =
        !genre || getGenres(movie).includes(genre)

      const matchesRating =
        !rating ||
        (
          getStatus(movie.status) === "watched" &&
          getVerdict(movie.rating)?.label === rating
        )

      return (
        matchesSearch &&
        matchesStatus &&
        matchesGenre &&
        matchesRating
      )
    })

    return results.sort((a, b) => {
      switch (sort) {
        case "alphabetical":
          return a.title.localeCompare(b.title)

        case "rating": {
          const score = (movie: Movie) =>
            getStatus(movie.status) === "watched"
              ? getVerdict(movie.rating)?.score ?? 0
              : 0

          return score(b) - score(a)
        }

        case "oldest":
          return (a.created_at || "").localeCompare(
            b.created_at || ""
          )

        case "recent":
        default:
          return (b.created_at || "").localeCompare(
            a.created_at || ""
          )
      }
    })
  }, [movies, search, status, genre, rating, sort])

  const visibleMovies = filteredMovies.slice(0, visibleCount)

  const activeFilters =
    Number(Boolean(genre)) +
    Number(Boolean(rating)) +
    Number(sort !== "recent")

  function clearFilters() {
    setSearch("")
    setStatus("all")
    setGenre("")
    setRating("")
    setSort("recent")
  }

  function surpriseMe() {
    if (!filteredMovies.length) return

    const randomIndex = Math.floor(
      Math.random() * filteredMovies.length
    )

    setSelectedMovie(filteredMovies[randomIndex])
  }

  function closeMovie() {
    setSelectedMovie(null)

    const url = new URL(window.location.href)

    url.searchParams.delete("movie")

    window.history.replaceState(
      window.history.state,
      "",
      url.toString()
    )
  }

  /* =====================================================
     PAGE RENDER
  ====================================================== */

  return (
    <div className="min-h-screen bg-background text-foreground">

      <Navigation />

      <main>

        {/* =================================================
            HERO
        ================================================= */}

        <section className="border-b border-border px-5 pb-8 pt-32 md:px-6 md:pb-16 md:pt-40">

          <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-[1.25fr_0.75fr] md:gap-16">

            <div>

              <div className="mb-5 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">

                <Clapperboard
                  size={16}
                  strokeWidth={1.5}
                />

                My film diary

              </div>

              <h1 className="font-serif text-[clamp(2.6rem,6vw,4.75rem)] leading-[1.1] tracking-tight">

                Life, through

                <span className="mt-1 block italic text-muted-foreground">
                  a different lens.
                </span>

              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">

                Films I&apos;ve watched, stories that stayed with me,
                and everything still on my watchlist.

              </p>

              <a
                href="#collection"
                className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
              >

                Explore the collection

                <ChevronDown size={16} />

              </a>

            </div>

            <div className="mx-auto hidden w-full max-w-sm sm:block">

              <CinemaIllustration />

            </div>

          </div>

        </section>

        <div className="mx-auto max-w-6xl px-5 md:px-6">

          {/* ===============================================
              STATISTICS
          ================================================ */}

          {!loading && !error && (
            <MovieStatistics
              movies={movies}
              onStatusSelect={(value) => {
                setStatus(value)

                const reduceMotion = window.matchMedia(
                  "(prefers-reduced-motion: reduce)"
                ).matches

                collectionRef.current?.scrollIntoView({
                  behavior: reduceMotion ? "auto" : "smooth",
                  block: "start",
                })
              }}
            />
          )}

          {/* ===============================================
              FILM COLLECTION
          ================================================ */}

          <section
            id="collection"
            ref={collectionRef}
            className="scroll-mt-32 pb-16 pt-8 md:pb-24 md:pt-12"
          >

            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">

              <div>

                <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
                  The collection
                </h2>

                {!loading && !error && (
                  <p
                    className="mt-2 text-sm text-muted-foreground"
                    aria-live="polite"
                  >
                    {filteredMovies.length} films
                  </p>
                )}

              </div>

              <button
                type="button"
                onClick={surpriseMe}
                disabled={loading || !filteredMovies.length}
                className={buttonClass}
              >

                <Shuffle size={15} />

                Surprise me

              </button>

            </div>

            {/* Search and filter trigger */}

            <div className="mb-5 flex items-center gap-2">

              <div className="relative min-w-0 flex-1">

                <Search
                  size={17}
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                />

                <input
                  type="search"
                  value={search}
                  onChange={(event) =>
                    setSearch(event.target.value)
                  }
                  aria-label="Search films"
                  placeholder="Search films, genres, reviews..."
                  className="min-h-12 w-full rounded-md border border-border bg-background py-3 pl-10 pr-4 text-base outline-none placeholder:text-muted-foreground focus:border-primary md:text-sm"
                />

              </div>

              <button
                type="button"
                onClick={() => setFiltersOpen(!filtersOpen)}
                aria-expanded={filtersOpen}
                aria-label="Filter and sort films"
                className={`${buttonClass} min-h-12 shrink-0`}
              >

                <SlidersHorizontal size={17} />

                <span className="hidden sm:inline">
                  Filter & sort
                </span>

                {activeFilters > 0 && (
                  <span className="flex size-5 items-center justify-center rounded-full bg-foreground text-[10px] text-background">
                    {activeFilters}
                  </span>
                )}

              </button>

            </div>

            {/* =============================================
                EXPANDABLE FILTER PANEL
            ============================================== */}

            {filtersOpen && (
              <div className="mb-6 space-y-6 rounded-md border border-border p-5 md:p-6">

                <div className="flex items-center justify-between">

                  <h3 className="font-medium">
                    Filter & sort
                  </h3>

                  <button
                    type="button"
                    onClick={clearFilters}
                    className="min-h-11 text-xs text-muted-foreground underline-offset-4 hover:underline"
                  >
                    Reset all
                  </button>

                </div>

                {/* Genre and sorting */}

                <div className="grid gap-4 sm:grid-cols-2">

                  <div>

                    <label
                      htmlFor="movie-genre"
                      className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
                    >
                      Genre
                    </label>

                    <select
                      id="movie-genre"
                      value={genre}
                      onChange={(event) =>
                        setGenre(event.target.value)
                      }
                      className="min-h-11 w-full rounded-md border border-border bg-background px-3 text-base md:text-sm"
                    >

                      <option value="">
                        All genres
                      </option>

                      {genres.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}

                    </select>

                  </div>

                  <div>

                    <label
                      htmlFor="movie-sort"
                      className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
                    >
                      Sort by
                    </label>

                    <select
                      id="movie-sort"
                      value={sort}
                      onChange={(event) =>
                        setSort(event.target.value as SortOrder)
                      }
                      className="min-h-11 w-full rounded-md border border-border bg-background px-3 text-base md:text-sm"
                    >

                      <option value="recent">
                        Recently added
                      </option>

                      <option value="oldest">
                        Oldest first
                      </option>

                      <option value="rating">
                        Highest rated
                      </option>

                      <option value="alphabetical">
                        Alphabetical A–Z
                      </option>

                    </select>

                  </div>

                </div>

                {/* Personal verdict filters */}

                <div className="border-t border-border pt-5">

                  <p className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    My verdict
                  </p>

                  <div className="flex flex-wrap gap-2">

                    <button
                      type="button"
                      aria-pressed={!rating}
                      onClick={() => setRating("")}
                      className={`min-h-11 rounded-md border px-3 text-xs ${
                        !rating
                          ? "border-foreground bg-foreground text-background"
                          : "border-border text-muted-foreground"
                      }`}
                    >
                      All
                    </button>

                    {verdicts.map((verdict) => {
                      const Icon = verdict.icon

                      const active =
                        rating === verdict.label

                      return (
                        <button
                          type="button"
                          key={verdict.label}
                          aria-pressed={active}
                          onClick={() =>
                            setRating(
                              active ? "" : verdict.label
                            )
                          }
                          className={`inline-flex min-h-11 items-center gap-2 rounded-md border px-3 text-xs transition-colors ${
                            active
                              ? "border-foreground bg-foreground text-background"
                              : "border-border text-muted-foreground hover:bg-muted"
                          }`}
                        >

                          <Icon
                            size={14}
                            className={
                              active ? "" : verdict.color
                            }
                          />

                          {verdict.label}

                        </button>
                      )
                    })}

                  </div>

                </div>

                <button
                  type="button"
                  onClick={() => setFiltersOpen(false)}
                  className="min-h-11 w-full rounded-md bg-foreground px-4 text-sm font-medium text-background"
                >
                  Show {filteredMovies.length} films
                </button>

              </div>
            )}

            {/* =============================================
                STATUS TABS
            ============================================== */}

            <div className="mb-5 border-b border-border">

              <div
                role="group"
                aria-label="Movie status"
                className="flex gap-5 overflow-x-auto md:gap-8"
              >

                {statusTabs.map((tab) => (
                  <button
                    type="button"
                    key={tab.value}
                    aria-pressed={status === tab.value}
                    onClick={() => setStatus(tab.value)}
                    className={`flex min-h-12 shrink-0 items-center gap-1.5 whitespace-nowrap border-b-2 text-sm transition-colors ${
                      status === tab.value
                        ? "border-foreground font-medium text-foreground"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                  >

                    {tab.label}

                    <span className="text-[11px] tabular-nums text-muted-foreground">
                      {tab.count}
                    </span>

                  </button>
                ))}

              </div>

            </div>

            {/* Active filters and grid/list switch */}

            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">

              <div className="flex flex-wrap items-center gap-2">

                {genre && (
                  <button
                    type="button"
                    onClick={() => setGenre("")}
                    className="inline-flex min-h-10 items-center gap-2 rounded-md border border-border px-3 text-xs"
                  >

                    {genre}

                    <X size={12} />

                  </button>
                )}

                {rating && (
                  <button
                    type="button"
                    onClick={() => setRating("")}
                    className="inline-flex min-h-10 items-center gap-2 rounded-md border border-border px-3 text-xs"
                  >

                    {rating}

                    <X size={12} />

                  </button>
                )}

                {!genre && !rating && (
                  <span className="text-xs text-muted-foreground">
                    {view === "grid"
                      ? "Poster view"
                      : "List view"}
                  </span>
                )}

              </div>

              <div
                role="group"
                aria-label="Collection layout"
                className="flex rounded-md border border-border p-0.5"
              >

                <button
                  type="button"
                  onClick={() => setView("grid")}
                  aria-pressed={view === "grid"}
                  aria-label="Poster grid view"
                  className={`flex size-11 items-center justify-center rounded-sm ${
                    view === "grid"
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  <LayoutGrid size={16} />
                </button>

                <button
                  type="button"
                  onClick={() => setView("list")}
                  aria-pressed={view === "list"}
                  aria-label="List view"
                  className={`flex size-11 items-center justify-center rounded-sm ${
                    view === "list"
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  <List size={19} />
                </button>

              </div>

            </div>

            {/* =============================================
                LOADING STATE
            ============================================== */}

            {loading ? (
              <div
                aria-label="Loading films"
                className="grid grid-cols-2 gap-x-3 gap-y-7 min-[375px]:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
              >

                {Array.from({ length: 12 }).map((_, index) => (
                  <div
                    key={index}
                    className="animate-pulse motion-reduce:animate-none"
                  >

                    <div className="aspect-[2/3] rounded-md bg-muted" />

                    <div className="mt-3 h-3 w-4/5 rounded bg-muted" />

                    <div className="mt-2 h-2 w-1/2 rounded bg-muted" />

                  </div>
                ))}

              </div>
            ) : error ? (

              /* Error state */

              <div className="flex flex-col items-center border-y border-border py-16 text-center">

                <RefreshCw
                  size={32}
                  strokeWidth={1.2}
                  className="text-muted-foreground"
                />

                <h3 className="mt-5 font-serif text-2xl">
                  Something went wrong.
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  {error}
                </p>

                <button
                  type="button"
                  onClick={() => setRetry((value) => value + 1)}
                  className={`${buttonClass} mt-6`}
                >

                  <RefreshCw size={15} />

                  Try again

                </button>

              </div>
            ) : filteredMovies.length === 0 ? (

              /* Empty state */

              <div className="flex flex-col items-center border-y border-border py-16 text-center">

                <Film
                  size={38}
                  strokeWidth={1}
                  className="text-muted-foreground/60"
                />

                <h3 className="mt-5 font-serif text-2xl">
                  {movies.length
                    ? "Nothing quite matches."
                    : "The credits haven't started yet."}
                </h3>

                <p className="mt-3 text-sm text-muted-foreground">
                  {movies.length
                    ? "Try another search or adjust your filters."
                    : "Films will appear here as the collection grows."}
                </p>

                {movies.length > 0 && (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className={`${buttonClass} mt-6`}
                  >
                    Clear filters
                  </button>
                )}

              </div>
            ) : (

              /* ===========================================
                  RESPONSIVE MOVIE POSTER GRID
              ============================================ */

              <>

                <div
                  className={
                    view === "grid"
                      ? "grid grid-cols-2 items-start gap-x-3 gap-y-7 min-[375px]:grid-cols-3 sm:gap-x-5 md:grid-cols-4 md:gap-y-9 lg:grid-cols-6"
                      : "flex flex-col"
                  }
                >

                  {visibleMovies.map((movie) => (
                    <MovieCard
                      key={movie.id}
                      movie={movie}
                      view={view}
                      onClick={() => setSelectedMovie(movie)}
                    />
                  ))}

                </div>

                {/* Progressive pagination */}

                <div className="mt-12 flex flex-col items-center gap-4 border-t border-border pt-7">

                  <p className="text-xs tabular-nums text-muted-foreground">

                    Showing {visibleMovies.length} of{" "}
                    {filteredMovies.length} films

                  </p>

                  <div className="h-1 w-36 overflow-hidden rounded-full bg-muted">

                    <div
                      className="h-full rounded-full bg-primary/70 transition-all duration-300 motion-reduce:transition-none"
                      style={{
                        width: `${
                          (visibleMovies.length /
                            filteredMovies.length) *
                          100
                        }%`,
                      }}
                    />

                  </div>

                  {visibleCount < filteredMovies.length ? (
                    <button
                      type="button"
                      onClick={() =>
                        setVisibleCount((count) => count + 24)
                      }
                      className={`${buttonClass} mt-2 px-7`}
                    >

                      Load more films

                      <ChevronDown size={16} />

                    </button>
                  ) : (
                    <p className="mt-2 text-xs text-muted-foreground">
                      You&apos;ve reached the end of the collection.
                    </p>
                  )}

                </div>

              </>
            )}

          </section>

          {/* ===============================================
              PERSONAL RATING GUIDE
          ================================================ */}

          <section className="border-t border-border py-10 md:py-16">

            <div className="mb-8">

              <p className="mb-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                A personal perspective
              </p>

              <h2 className="font-serif text-3xl tracking-tight">
                How I rate films.
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Not every film needs a numerical score.
                Sometimes, a simple verdict says enough.
              </p>

            </div>

            <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4">

              {verdicts.map((verdict, index) => {
                const Icon = verdict.icon

                return (
                  <button
                    type="button"
                    key={verdict.label}
                    onClick={() => {
                      clearFilters()
                      setRating(verdict.label)
                      setStatus("watched")

                      collectionRef.current?.scrollIntoView({
                        block: "start",
                      })
                    }}
                    className={`group border-b border-border py-6 text-left sm:px-5 ${
                      index === 0 ? "sm:pl-0" : ""
                    }`}
                  >

                    <Icon
                      size={26}
                      strokeWidth={1.4}
                      className={verdict.color}
                    />

                    <h3 className="mt-4 font-serif text-xl group-hover:text-primary">
                      {verdict.label}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {verdict.description}
                    </p>

                    <span className="mt-4 inline-flex min-h-11 items-center gap-2 text-xs font-medium text-muted-foreground">

                      Explore films

                      <ArrowUpRight size={13} />

                    </span>

                  </button>
                )
              })}

            </div>

          </section>

          {/* ===============================================
              EDITORIAL CONCLUSION
          ================================================ */}

          <section className="border-t border-border py-12 md:py-20">

            <div className="mx-auto max-w-3xl text-center">

              <Clapperboard
                size={30}
                strokeWidth={1}
                className="mx-auto mb-6 text-muted-foreground"
              />

              <p className="mb-5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Always another story
              </p>

              <h2 className="font-serif text-3xl leading-tight md:text-5xl">

                The world looks different

                <span className="mt-2 block italic text-muted-foreground">
                  through every story.
                </span>

              </h2>

              <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">

                A collection of perspectives, emotions,
                imagined worlds and stories worth remembering.

              </p>

              <button
                type="button"
                disabled={filteredMovies.length === 0}
                onClick={surpriseMe}
                className={`${buttonClass} mt-7`}
              >

                <Shuffle size={16} />

                Discover a random film

              </button>

            </div>

          </section>

        </div>

      </main>

      <Footer />

      {/* Movie detail overlay */}

      {selectedMovie && (
        <MovieDetail
          movie={selectedMovie}
          movies={movies}
          onClose={closeMovie}
          onSelect={setSelectedMovie}
        />
      )}

    </div>
  )
}
