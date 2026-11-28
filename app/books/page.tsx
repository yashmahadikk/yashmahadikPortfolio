
"use client"

import {
  useEffect,
  useMemo,
  useState,
  useRef,
  useId,
  type ReactNode,
} from "react"

import {
  BookOpen,
  BookMarked,
  Library,
  Search,
  Star,
  SlidersHorizontal,
  LayoutGrid,
  List,
  Shuffle,
  ChevronDown,
  ChevronRight,
  ArrowUpRight,
  X,
  Check,
  Share2,
  RefreshCw,
  BarChart3,
} from "lucide-react"

import { createClient } from "@/lib/supabase/client"

/* =========================================================
   TYPES
========================================================= */

interface Book {
  id: string
  title: string
  author: string | null
  description: string | null
  cover_url: string | null
  genre: string[] | string | null
  status: string | null
  rating: number | null
  my_thoughts: string | null
  created_at: string
}

type BookStatus =
  | "finished"
  | "reading"
  | "backlog"
  | "other"

type SortOrder =
  | "recent"
  | "oldest"
  | "rating"
  | "title"
  | "author"

type ViewMode = "shelf" | "list"

/* =========================================================
   DATA HELPERS
========================================================= */

function getStatus(value: string | null): BookStatus {
  const status = (value || "").trim().toLowerCase()

  if (["done", "finished", "completed", "read"].includes(status)) {
    return "finished"
  }

  if (["in progress", "reading"].includes(status)) {
    return "reading"
  }

  if (["backlog", "to read", "want to read"].includes(status)) {
    return "backlog"
  }

  return "other"
}

function getGenres(book: Book): string[] {
  const genres = Array.isArray(book.genre)
    ? book.genre
    : typeof book.genre === "string"
      ? book.genre.split(",")
      : []

  return [
    ...new Set(
      genres.map((genre) => genre.trim()).filter(Boolean)
    ),
  ]
}

function getRating(book: Book): number | null {
  if (book.rating === null || book.rating === undefined) {
    return null
  }

  const rating = Number(book.rating)

  return Number.isFinite(rating) && rating >= 0 && rating <= 5
    ? rating
    : null
}

const statusLabels = {
  finished: "Finished",
  reading: "Reading",
  backlog: "To read",
  other: "Uncategorized",
}

const statusColors = {
  finished: "bg-emerald-500/80",
  reading: "bg-sky-500/80",
  backlog: "bg-muted-foreground/40",
  other: "bg-muted-foreground/40",
}

const buttonClass =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-border px-4 text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-40"

/* =========================================================
   ORIGINAL CODED BOOKSHELF ILLUSTRATION
========================================================= */

function BookshelfIllustration() {
  const patternId = useId()

  const books = [
    { x: 47, y: 74, w: 32, h: 126, color: "#879C91" },
    { x: 82, y: 98, w: 24, h: 102, color: "#B8A087" },
    { x: 109, y: 48, w: 40, h: 152, color: "#8299AD" },
    { x: 152, y: 81, w: 29, h: 119, color: "#B395A3" },
    { x: 184, y: 113, w: 23, h: 87, color: "#A9AB9A" },
    { x: 210, y: 60, w: 36, h: 140, color: "#C0AD80" },
  ]

  return (
    <svg
      viewBox="0 0 380 270"
      className="h-auto w-full"
      role="img"
      aria-label="A minimalist illustration of a personal bookshelf"
    >
      <defs>
        <pattern
          id={patternId}
          width="18"
          height="18"
          patternUnits="userSpaceOnUse"
        >
          <circle
            cx="1"
            cy="1"
            r="0.7"
            fill="currentColor"
            opacity="0.13"
          />
        </pattern>
      </defs>

      <rect
        x="10"
        y="10"
        width="360"
        height="240"
        fill={`url(#${patternId})`}
      />

      {books.map((book, index) => (
        <g key={index}>
          <rect
            x={book.x}
            y={book.y}
            width={book.w}
            height={book.h}
            rx="2"
            fill={book.color}
            fillOpacity="0.2"
            stroke={book.color}
            strokeWidth="1.2"
          />

          <path
            d={`
              M${book.x + 5} ${book.y + 13}
              H${book.x + book.w - 5}
              M${book.x + 5} ${book.y + book.h - 13}
              H${book.x + book.w - 5}
            `}
            stroke={book.color}
            strokeWidth="1"
          />

          <path
            d={`
              M${book.x + book.w / 2} ${book.y + 32}
              V${book.y + book.h - 32}
            `}
            stroke={book.color}
            strokeDasharray="3 5"
            opacity="0.6"
          />

          <circle
            cx={book.x + book.w / 2}
            cy={book.y + 23}
            r="2.5"
            fill={book.color}
            opacity="0.7"
          />
        </g>
      ))}

      {/* Leaning book */}

      <g transform="rotate(-18 292 200)">
        <rect
          x="264"
          y="82"
          width="30"
          height="118"
          rx="2"
          fill="#91A2B8"
          fillOpacity="0.2"
          stroke="#91A2B8"
          strokeWidth="1.2"
        />

        <path
          d="M270 94 H288 M270 188 H288"
          stroke="#91A2B8"
        />

        <path
          d="M279 115 V165"
          stroke="#91A2B8"
          strokeDasharray="3 5"
        />
      </g>

      {/* Shelf */}

      <path
        d="M27 201 H353 M27 209 H353"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.3"
      />

      <path
        d="M35 209 V220 M345 209 V220"
        stroke="currentColor"
        opacity="0.2"
      />

      {/* Small annotations */}

      <circle
        cx="30"
        cy="42"
        r="5"
        fill="none"
        stroke="currentColor"
        opacity="0.25"
      />

      <path
        d="M329 41 V57 M321 49 H337"
        stroke="currentColor"
        opacity="0.25"
      />

      <path
        d="M307 92 H345"
        stroke="currentColor"
        strokeDasharray="3 5"
        opacity="0.2"
      />

      <text
        x="190"
        y="256"
        fontSize="9"
        letterSpacing="2.2"
        textAnchor="middle"
        fill="currentColor"
        opacity="0.4"
      >
        A COLLECTION OF PERSPECTIVES
      </text>
    </svg>
  )
}

/* =========================================================
   HERO
========================================================= */

function BooksHero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 pb-8 pt-32 md:grid-cols-[1.25fr_0.75fr] md:gap-16 md:px-6 md:pb-14 md:pt-36">
        <div>
          <div className="mb-5 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            <Library size={16} strokeWidth={1.5} />

            My personal library
          </div>

          <h1 className="font-serif text-[clamp(2.75rem,6vw,4.75rem)] leading-[1.1] tracking-tight text-foreground">
            Between

            <span className="mt-1 block italic text-muted-foreground">
              the pages.
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            What I am reading, what I have read, and what I keep
            pretending I will read.
          </p>

          <a
            href="#bookshelf"
            className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            Explore the bookshelf

            <ChevronDown size={16} />
          </a>
        </div>

        <div className="mx-auto hidden w-full max-w-sm md:block">
          <BookshelfIllustration />
        </div>
      </div>
    </section>
  )
}

/* =========================================================
   BOOK COVER
========================================================= */

function BookCover({
  book,
  className = "",
}: {
  book: Book
  className?: string
}) {
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    setFailed(false)
  }, [book.cover_url])

  return (
    <div
      className={`relative aspect-[2/3] overflow-hidden rounded-sm border border-border bg-muted/40 ${className}`}
    >
      {book.cover_url && !failed ? (
        <img
          src={book.cover_url}
          alt={`Cover of ${book.title}`}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className="h-full w-full object-contain"
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-4 p-4 text-center">
          <BookOpen
            size={30}
            strokeWidth={1}
            className="text-muted-foreground/50"
            aria-hidden="true"
          />

          <p className="line-clamp-4 break-words font-serif text-base leading-snug text-muted-foreground">
            {book.title}
          </p>
        </div>
      )}
    </div>
  )
}

/* =========================================================
   NUMERICAL BOOK RATING
========================================================= */

function BookRating({
  book,
  detailed = false,
}: {
  book: Book
  detailed?: boolean
}) {
  const rating = getRating(book)

  if (rating === null) return null

  return (
    <div
      className={`flex items-center gap-1.5 ${
        detailed ? "text-sm" : "text-xs"
      }`}
      aria-label={`Rated ${rating} out of five`}
    >
      <Star
        size={detailed ? 17 : 13}
        strokeWidth={1.4}
        className="fill-amber-400 text-amber-500 dark:text-amber-400"
        aria-hidden="true"
      />

      <span className="font-medium tabular-nums text-foreground">
        {rating}/5
      </span>
    </div>
  )
}

/* =========================================================
   READING STATUS
========================================================= */

function ReadingStatus({ book }: { book: Book }) {
  const status = getStatus(book.status)

  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
      <span
        className={`size-1.5 shrink-0 rounded-full ${statusColors[status]}`}
      />

      {statusLabels[status]}
    </span>
  )
}

/* =========================================================
   READING STATISTICS
========================================================= */

function ReadingStatistics({
  books,
  onStatusSelect,
}: {
  books: Book[]
  onStatusSelect: (status: BookStatus | "all") => void
}) {
  const [expanded, setExpanded] = useState(false)

  const finished = books.filter(
    (book) => getStatus(book.status) === "finished"
  )

  const reading = books.filter(
    (book) => getStatus(book.status) === "reading"
  )

  const backlog = books.filter(
    (book) => getStatus(book.status) === "backlog"
  )

  const other = books.length -
    finished.length -
    reading.length -
    backlog.length

  const ratings = books
    .map(getRating)
    .filter((rating): rating is number => rating !== null)

  const average = ratings.length
    ? ratings.reduce((sum, rating) => sum + rating, 0) /
      ratings.length
    : null

  const genres = useMemo(() => {
    const counts = new Map<string, number>()

    books.forEach((book) => {
      getGenres(book).forEach((genre) => {
        counts.set(genre, (counts.get(genre) || 0) + 1)
      })
    })

    return [...counts.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
  }, [books])

  const stats = [
    {
      label: "Total books",
      count: books.length,
      status: "all" as const,
    },
    {
      label: "Finished",
      count: finished.length,
      status: "finished" as const,
    },
    {
      label: "Reading",
      count: reading.length,
      status: "reading" as const,
    },
    {
      label: "To read",
      count: backlog.length,
      status: "backlog" as const,
    },
  ]

  if (!books.length) return null

  return (
    <section className="border-b border-border py-7 md:py-10">
      {/* Clickable reading statistics */}

      <div className="grid grid-cols-4 divide-x divide-border">
        {stats.map((stat, index) => (
          <button
            type="button"
            key={stat.label}
            onClick={() => onStatusSelect(stat.status)}
            className={`min-w-0 text-left transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
              index === 0 ? "pr-2" : "px-2 md:px-6"
            }`}
          >
            <p className="font-serif text-[clamp(1.4rem,5vw,3rem)] tabular-nums">
              {stat.count}
            </p>

            <p className="mt-2 text-xs text-muted-foreground md:text-sm">
              {stat.label}
            </p>
          </button>
        ))}
      </div>

      {/* Dynamic reading status distribution */}

      <div
        className="mt-6 flex h-2 overflow-hidden rounded-full bg-muted"
        role="img"
        aria-label={`${finished.length} finished, ${reading.length} reading, ${backlog.length} to read, ${other} uncategorized`}
      >
        {[
          { count: finished.length, color: "bg-emerald-500/70" },
          { count: reading.length, color: "bg-sky-500/70" },
          { count: backlog.length, color: "bg-muted-foreground/30" },
          { count: other, color: "bg-muted-foreground/10" },
        ].map((entry, index) => (
          <div
            key={index}
            className={entry.color}
            style={{
              width: `${(entry.count / books.length) * 100}%`,
            }}
          />
        ))}
      </div>

      <button
        type="button"
        aria-expanded={expanded}
        onClick={() => setExpanded(!expanded)}
        className="mt-3 flex min-h-11 w-full items-center justify-between text-sm text-muted-foreground hover:text-foreground"
      >
        <span className="flex items-center gap-2">
          <BarChart3 size={15} />

          Reading insights
        </span>

        <ChevronDown
          size={17}
          className={`transition-transform motion-reduce:transition-none ${
            expanded ? "rotate-180" : ""
          }`}
        />
      </button>

      {expanded && (
        <div className="grid gap-8 border-t border-border pt-7 md:grid-cols-2">
          {/* Genre distribution */}

          <div>
            <h3 className="mb-5 font-serif text-xl">
              What I tend to read
            </h3>

            {genres.length === 0 && (
              <p className="text-sm text-muted-foreground">
                No genre information available.
              </p>
            )}

            <div className="space-y-5">
              {genres.map(([genre, count]) => (
                <div key={genre}>
                  <div className="mb-2 flex items-center justify-between gap-3 text-sm">
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
                        width: `${(count / books.length) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-5 text-xs text-muted-foreground">
              Books can belong to multiple genres.
            </p>
          </div>

          {/* Average rating */}

          <div className="border-t border-border pt-7 md:border-l md:border-t-0 md:pl-8 md:pt-0">
            <h3 className="font-serif text-xl">
              Average rating
            </h3>

            <div className="mt-5 flex items-center gap-3">
              <span className="font-serif text-5xl tabular-nums">
                {average !== null ? average.toFixed(1) : "—"}
              </span>

              {average !== null && (
                <span className="text-sm text-muted-foreground">
                  / 5
                </span>
              )}

              <Star
                size={24}
                className="fill-amber-400 text-amber-400"
              />
            </div>

            <p className="mt-3 text-sm text-muted-foreground">
              Based on {ratings.length} rated books.
            </p>
          </div>
        </div>
      )}
    </section>
  )
}

/* =========================================================
   CURRENTLY READING
========================================================= */

function CurrentlyReading({
  books,
  onSelect,
}: {
  books: Book[]
  onSelect: (book: Book) => void
}) {
  const reading = books.filter(
    (book) => getStatus(book.status) === "reading"
  )

  if (!reading.length) return null

  return (
    <section className="border-b border-border py-8 md:py-12">
      <div className="mb-6 flex items-center gap-2">
        <BookOpen size={18} className="text-muted-foreground" />

        <h2 className="font-serif text-2xl md:text-3xl">
          Currently reading
        </h2>
      </div>

      <div className="grid gap-3 md:grid-cols-2 md:gap-5">
        {reading.map((book) => (
          <button
            type="button"
            key={book.id}
            onClick={() => onSelect(book)}
            className="group flex items-center gap-4 rounded-md border border-border p-4 text-left transition-colors hover:border-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:p-5"
          >
            <BookCover
              book={book}
              className="w-16 shrink-0 md:w-20"
            />

            <div className="min-w-0 flex-1">
              <div className="mb-2 inline-flex items-center gap-1.5 text-xs text-sky-600 dark:text-sky-400">
                <span className="size-1.5 rounded-full bg-sky-500" />

                Reading
              </div>

              <h3 className="break-words font-serif text-lg leading-snug transition-colors group-hover:text-primary md:text-xl">
                {book.title}
              </h3>

              {book.author && (
                <p className="mt-1 text-sm text-muted-foreground">
                  {book.author}
                </p>
              )}
            </div>

            <ArrowUpRight
              size={16}
              className="shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
            />
          </button>
        ))}
      </div>
    </section>
  )
}

/* =========================================================
   BOOK CARD
========================================================= */

function BookCard({
  book,
  view,
  onClick,
}: {
  book: Book
  view: ViewMode
  onClick: () => void
}) {
  if (view === "list") {
    return (
      <button
        type="button"
        onClick={onClick}
        className="group flex w-full items-start gap-4 border-b border-border py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:items-center md:gap-6"
      >
        <BookCover
          book={book}
          className="w-[72px] shrink-0 md:w-24"
        />

        <div className="min-w-0 flex-1">
          <h3 className="text-base font-semibold leading-snug transition-colors group-hover:text-primary md:text-lg">
            {book.title}
          </h3>

          {book.author && (
            <p className="mt-1 text-sm text-muted-foreground">
              {book.author}
            </p>
          )}

          {getGenres(book).length > 0 && (
            <p className="mt-2 line-clamp-1 text-xs text-muted-foreground">
              {getGenres(book).join(" · ")}
            </p>
          )}

          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
            <BookRating book={book} />

            <ReadingStatus book={book} />
          </div>

          {book.my_thoughts && (
            <p className="mt-3 line-clamp-2 text-sm italic leading-relaxed text-muted-foreground">
              {book.my_thoughts}
            </p>
          )}
        </div>

        <ChevronRight
          size={17}
          className="mt-1 shrink-0 text-muted-foreground group-hover:text-primary"
        />
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex min-w-0 flex-col text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
    >
      <div className="relative w-full">
        <BookCover book={book} />

        {getStatus(book.status) === "reading" && (
          <div className="absolute right-2 top-2 flex size-7 items-center justify-center rounded-full bg-background/95 text-primary">
            <BookOpen size={14} />
          </div>
        )}

        {/* Hover interaction, desktop only */}

        <div className="absolute inset-0 hidden items-end rounded-sm bg-black/0 p-3 transition-colors group-hover:bg-black/20 lg:flex">
          <span className="flex w-full items-center justify-between rounded-sm bg-background/95 px-3 py-2 text-xs font-medium opacity-0 transition-opacity group-hover:opacity-100">
            View book

            <ArrowUpRight size={13} />
          </span>
        </div>
      </div>

      <div className="w-full pt-3">
        <h3 className="line-clamp-2 text-sm font-medium leading-snug transition-colors group-hover:text-primary md:text-base">
          {book.title}
        </h3>

        {book.author && (
          <p className="mt-1 line-clamp-1 text-xs text-muted-foreground md:text-[13px]">
            {book.author}
          </p>
        )}

        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1.5">
          <BookRating book={book} />

          <ReadingStatus book={book} />
        </div>
      </div>
    </button>
  )
}

/* =========================================================
   ACCESSIBLE DRAWER / BOTTOM SHEET
========================================================= */

function BookDialog({
  title,
  children,
  onClose,
  filter = false,
}: {
  title: string
  children: ReactNode
  onClose: () => void
  filter?: boolean
}) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  const titleId = useId()

  useEffect(() => {
    const dialog = dialogRef.current

    if (!dialog) return

    const previousOverflow = document.body.style.overflow

    const previousFocus =
      document.activeElement as HTMLElement | null

    document.body.style.overflow = "hidden"

    if (!dialog.open) {
      dialog.showModal()
    }

    return () => {
      if (dialog.open) dialog.close()

      document.body.style.overflow = previousOverflow

      previousFocus?.focus()
    }
  }, [])

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose()
        }
      }}
      className={`fixed m-0 overflow-y-auto overscroll-contain border-border bg-background text-foreground backdrop:bg-black/40 ${
        filter
          ? "inset-x-0 bottom-0 top-auto max-h-[85dvh] w-full max-w-none rounded-t-xl border-t sm:inset-0 sm:m-auto sm:h-fit sm:max-w-md sm:rounded-lg sm:border"
          : "inset-0 h-[100dvh] max-h-none w-full max-w-none sm:inset-y-0 sm:left-auto sm:right-0 sm:h-full sm:max-w-xl sm:border-l"
      }`}
    >
      <div className="min-h-full bg-background">
        <header className="sticky top-0 z-20 flex items-center justify-between gap-4 border-b border-border bg-background/95 px-5 py-3 backdrop-blur-sm md:px-8">
          <div className="flex items-center gap-2">
            <BookOpen
              size={16}
              className="text-muted-foreground"
            />

            <h2
              id={titleId}
              className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground"
            >
              {title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="flex size-11 shrink-0 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <X size={20} />
          </button>
        </header>

        {children}
      </div>
    </dialog>
  )
}

/* =========================================================
   BOOK DETAIL DRAWER
========================================================= */

function BookDetails({
  book,
  books,
  onClose,
  onSelect,
}: {
  book: Book
  books: Book[]
  onClose: () => void
  onSelect: (book: Book) => void
}) {
  const [copied, setCopied] = useState(false)
  const [shareUrl, setShareUrl] = useState("")

  const genres = getGenres(book)

  const related = useMemo(() => {
    return books
      .filter(
        (candidate) =>
          candidate.id !== book.id &&
          getGenres(candidate).some((genre) =>
            getGenres(book).includes(genre)
          )
      )
      .slice(0, 3)
  }, [book, books])

  async function handleShare() {
    const url = new URL(window.location.href)

    url.searchParams.set("book", book.id)

    try {
      if (navigator.share) {
        await navigator.share({
          title: book.title,
          url: url.toString(),
        })
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(url.toString())

        setCopied(true)
      } else {
        setShareUrl(url.toString())
      }
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") {
        return
      }

      setShareUrl(url.toString())
    }
  }

  return (
    <BookDialog
      title="From my bookshelf"
      onClose={onClose}
    >
      <div className="px-5 pb-12 pt-7 md:px-8 md:pt-10">
        {/* Book identity */}

        <div className="flex items-start gap-5 md:gap-7">
          <BookCover
            book={book}
            className="w-[105px] shrink-0 sm:w-[155px]"
          />

          <div className="min-w-0 flex-1">
            <ReadingStatus book={book} />

            <h2 className="mt-3 break-words font-serif text-2xl leading-tight tracking-tight md:text-4xl">
              {book.title}
            </h2>

            {book.author && (
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                {book.author}
              </p>
            )}

            <div className="mt-4">
              <BookRating book={book} detailed />
            </div>

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
          </div>
        </div>

        {/* Share action */}

        <div className="mt-6 border-b border-border pb-6">
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

            {copied ? "Link copied" : "Share book"}
          </button>

          {shareUrl && (
            <input
              aria-label="Shareable book link"
              readOnly
              value={shareUrl}
              onFocus={(event) => event.target.select()}
              className="mt-4 w-full rounded-md border border-border bg-background p-3 text-sm"
            />
          )}
        </div>

        {/* Book description */}

        {book.description && (
          <section className="border-b border-border py-8">
            <h3 className="mb-5 font-serif text-2xl">
              About the book
            </h3>

            <p className="whitespace-pre-wrap break-words text-base leading-[1.85] text-muted-foreground">
              {book.description}
            </p>
          </section>
        )}

        {/* Personal reflections */}

        <section className="border-b border-border py-8">
          <div className="mb-5 flex items-center gap-2">
            <BookMarked
              size={17}
              strokeWidth={1.5}
              className="text-primary"
            />

            <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              My thoughts
            </span>
          </div>

          {book.my_thoughts ? (
            <div className="border-l-2 border-primary/50 pl-5">
              <p className="whitespace-pre-wrap break-words font-serif text-lg leading-[1.85] md:text-xl">
                {book.my_thoughts}
              </p>

              <p className="mt-5 text-sm text-muted-foreground">
                — Yash Mahadik
              </p>
            </div>
          ) : (
            <p className="text-sm italic leading-relaxed text-muted-foreground">
              I haven&apos;t added my reflections on this book yet.
            </p>
          )}
        </section>

        {/* Related books */}

        {related.length > 0 && (
          <section className="pt-8">
            <h3 className="font-serif text-2xl">
              More from the bookshelf
            </h3>

            <p className="mb-6 mt-2 text-sm text-muted-foreground">
              Other books from similar genres.
            </p>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {related.map((item) => (
                <BookCard
                  key={item.id}
                  book={item}
                  view="shelf"
                  onClick={() => onSelect(item)}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </BookDialog>
  )
}

/* =========================================================
   FILTER AND SORT SHEET
========================================================= */

function BookFilters({
  genres,
  genre,
  rating,
  status,
  sort,
  setGenre,
  setRating,
  setStatus,
  setSort,
  resultCount,
  onReset,
  onClose,
}: {
  genres: string[]
  genre: string
  rating: string
  status: BookStatus | "all"
  sort: SortOrder
  setGenre: (value: string) => void
  setRating: (value: string) => void
  setStatus: (value: BookStatus | "all") => void
  setSort: (value: SortOrder) => void
  resultCount: number
  onReset: () => void
  onClose: () => void
}) {
  const sorts: {
    label: string
    value: SortOrder
  }[] = [
    { label: "Recently added", value: "recent" },
    { label: "Oldest first", value: "oldest" },
    { label: "Highest rated", value: "rating" },
    { label: "Title A–Z", value: "title" },
    { label: "Author A–Z", value: "author" },
  ]

  const filterButton = (active: boolean) =>
    `inline-flex min-h-11 items-center gap-1.5 rounded-md border px-3 text-xs transition-colors ${
      active
        ? "border-foreground bg-foreground text-background"
        : "border-border text-muted-foreground hover:bg-muted"
    }`

  return (
    <BookDialog
      title="Filter & sort"
      onClose={onClose}
      filter
    >
      <div className="space-y-6 px-5 py-6 md:px-7">
        {/* Sorting */}

        <section>
          <h3 className="mb-3 text-sm font-semibold">
            Sort by
          </h3>

          <div className="divide-y divide-border">
            {sorts.map((entry) => (
              <button
                type="button"
                key={entry.value}
                onClick={() => setSort(entry.value)}
                aria-pressed={sort === entry.value}
                className="flex min-h-11 w-full items-center justify-between text-left text-sm"
              >
                <span
                  className={
                    sort === entry.value
                      ? "font-medium text-foreground"
                      : "text-muted-foreground"
                  }
                >
                  {entry.label}
                </span>

                {sort === entry.value && (
                  <Check size={16} className="text-primary" />
                )}
              </button>
            ))}
          </div>
        </section>

        {/* Status */}

        <section className="border-t border-border pt-6">
          <h3 className="mb-4 text-sm font-semibold">
            Reading status
          </h3>

          <div className="flex flex-wrap gap-2">
            {[
              { value: "all", label: "All" },
              { value: "reading", label: "Reading" },
              { value: "finished", label: "Finished" },
              { value: "backlog", label: "To read" },
            ].map((entry) => (
              <button
                type="button"
                key={entry.value}
                aria-pressed={status === entry.value}
                onClick={() =>
                  setStatus(entry.value as BookStatus | "all")
                }
                className={filterButton(status === entry.value)}
              >
                {entry.label}
              </button>
            ))}
          </div>
        </section>

        {/* Genres */}

        <section className="border-t border-border pt-6">
          <h3 className="mb-4 text-sm font-semibold">
            Genre
          </h3>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setGenre("")}
              aria-pressed={!genre}
              className={filterButton(!genre)}
            >
              All genres
            </button>

            {genres.map((entry) => (
              <button
                type="button"
                key={entry}
                onClick={() =>
                  setGenre(genre === entry ? "" : entry)
                }
                aria-pressed={genre === entry}
                className={filterButton(genre === entry)}
              >
                {entry}
              </button>
            ))}
          </div>
        </section>

        {/* Numerical rating */}

        <section className="border-t border-border pt-6">
          <h3 className="mb-4 text-sm font-semibold">
            Minimum rating
          </h3>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setRating("")}
              aria-pressed={!rating}
              className={filterButton(!rating)}
            >
              All ratings
            </button>

            {["5", "4", "3", "2", "1"].map((entry) => (
              <button
                type="button"
                key={entry}
                onClick={() =>
                  setRating(rating === entry ? "" : entry)
                }
                aria-pressed={rating === entry}
                className={filterButton(rating === entry)}
              >
                <Star size={12} />

                {entry}+
              </button>
            ))}
          </div>
        </section>
      </div>

      <div className="sticky bottom-0 flex gap-3 border-t border-border bg-background p-5">
        <button
          type="button"
          onClick={onReset}
          className={buttonClass}
        >
          Reset
        </button>

        <button
          type="button"
          onClick={onClose}
          className="min-h-11 flex-1 rounded-md bg-foreground px-4 text-sm font-medium text-background"
        >
          Show {resultCount} books
        </button>
      </div>
    </BookDialog>
  )
}

/* =========================================================
   MAIN BOOKS COMPONENT
========================================================= */

export function BooksSection() {
  const [books, setBooks] = useState<Book[]>([])

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [retry, setRetry] = useState(0)

  const [search, setSearch] = useState("")

  const [status, setStatus] =
    useState<BookStatus | "all">("all")

  const [genre, setGenre] = useState("")
  const [rating, setRating] = useState("")

  const [sort, setSort] =
    useState<SortOrder>("recent")

  const [view, setView] =
    useState<ViewMode>("shelf")

  const [filtersOpen, setFiltersOpen] = useState(false)

  const [selectedBook, setSelectedBook] =
    useState<Book | null>(null)

  const [visibleCount, setVisibleCount] = useState(20)

  const bookshelfRef = useRef<HTMLElement>(null)

  /* =====================================================
     FETCH EXISTING SUPABASE BOOKS
  ====================================================== */

  useEffect(() => {
    let cancelled = false

    async function fetchBooks() {
      setLoading(true)
      setError("")

      try {
        const supabase = createClient()

        const records: Book[] = []

        const batchSize = 500

        let offset = 0

        while (true) {
          const { data, error } = await supabase
            .from("books")
            .select("*")
            .order("created_at", { ascending: false })
            .order("id", { ascending: true })
            .range(offset, offset + batchSize - 1)

          if (error) throw error

          if (cancelled) return

          const batch = (data || []) as Book[]

          records.push(...batch)

          if (batch.length < batchSize) break

          offset += batchSize
        }

        if (cancelled) return

        setBooks(records)

        /* Open a book from its shared URL. */

        const params = new URLSearchParams(
          window.location.search
        )

        const bookId = params.get("book")

        if (bookId) {
          const book = records.find(
            (item) => item.id === bookId
          )

          if (book) {
            setSelectedBook(book)
          }
        }
      } catch (error) {
        console.error("Error fetching books:", error)

        if (!cancelled) {
          setError(
            "The bookshelf couldn't be loaded right now."
          )
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    fetchBooks()

    return () => {
      cancelled = true
    }
  }, [retry])

  /* Reset pagination after filtering. */

  useEffect(() => {
    setVisibleCount(20)
  }, [search, status, genre, rating, sort])

  /* =====================================================
     DYNAMIC GENRES
  ====================================================== */

  const genres = useMemo(() => {
    return [...new Set(books.flatMap(getGenres))]
      .sort((a, b) => a.localeCompare(b))
  }, [books])

  const statusTabs = [
    {
      value: "all" as const,
      label: "All books",
      count: books.length,
    },
    {
      value: "reading" as const,
      label: "Reading",
      count: books.filter(
        (book) => getStatus(book.status) === "reading"
      ).length,
    },
    {
      value: "finished" as const,
      label: "Finished",
      count: books.filter(
        (book) => getStatus(book.status) === "finished"
      ).length,
    },
    {
      value: "backlog" as const,
      label: "To read",
      count: books.filter(
        (book) => getStatus(book.status) === "backlog"
      ).length,
    },
  ]

  /* =====================================================
     SEARCH, FILTERS AND SORTING
  ====================================================== */

  const filteredBooks = useMemo(() => {
    const query = search.trim().toLowerCase()

    const results = books.filter((book) => {
      const searchableText = [
        book.title,
        book.author || "",
        book.description || "",
        book.my_thoughts || "",
        ...getGenres(book),
      ]
        .join(" ")
        .toLowerCase()

      const matchesSearch =
        !query || searchableText.includes(query)

      const matchesStatus =
        status === "all" ||
        getStatus(book.status) === status

      const matchesGenre =
        !genre || getGenres(book).includes(genre)

      const bookRating = getRating(book)

      const matchesRating =
        !rating ||
        (
          bookRating !== null &&
          bookRating >= Number(rating)
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
        case "title":
          return a.title.localeCompare(b.title)

        case "author":
          return (a.author || "").localeCompare(
            b.author || ""
          )

        case "rating":
          return (getRating(b) ?? -1) -
            (getRating(a) ?? -1)

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
  }, [books, search, status, genre, rating, sort])

  const visibleBooks = filteredBooks.slice(0, visibleCount)

  const activeFilters =
    Number(Boolean(genre)) +
    Number(Boolean(rating)) +
    Number(sort !== "recent")

  const hasFilters =
    Boolean(search) ||
    status !== "all" ||
    activeFilters > 0

  /* =====================================================
     USER ACTIONS
  ====================================================== */

  function clearFilters() {
    setSearch("")
    setStatus("all")
    setGenre("")
    setRating("")
    setSort("recent")
    setVisibleCount(20)
  }

  function surpriseMe() {
    if (!filteredBooks.length) return

    const index = Math.floor(
      Math.random() * filteredBooks.length
    )

    setSelectedBook(filteredBooks[index])
  }

  function closeBook() {
    setSelectedBook(null)

    const url = new URL(window.location.href)

    if (url.searchParams.has("book")) {
      url.searchParams.delete("book")

      window.history.replaceState(
        window.history.state,
        "",
        url.toString()
      )
    }
  }

  function scrollToBookshelf() {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    bookshelfRef.current?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    })
  }

  /* =====================================================
     PAGE RENDER
  ====================================================== */

  return (
    <>
      <BooksHero />

      <div className="mx-auto max-w-6xl px-5 md:px-6">
        {/* Reading overview */}

        {!loading && !error && (
          <ReadingStatistics
            books={books}
            onStatusSelect={(value) => {
              setStatus(value)
              scrollToBookshelf()
            }}
          />
        )}

        {/* Currently reading */}

        {!loading && !error && (
          <CurrentlyReading
            books={books}
            onSelect={setSelectedBook}
          />
        )}

        {/* ===============================================
            BOOKSHELF
        ================================================ */}

        <section
          id="bookshelf"
          ref={bookshelfRef}
          className="scroll-mt-32 pb-16 pt-8 md:pb-24 md:pt-12"
        >
          {/* Collection heading */}

          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
                The bookshelf
              </h2>

              {!loading && !error && (
                <p
                  className="mt-2 text-sm text-muted-foreground"
                  aria-live="polite"
                >
                  {filteredBooks.length} books
                </p>
              )}
            </div>

            <button
              type="button"
              onClick={surpriseMe}
              disabled={
                loading ||
                Boolean(error) ||
                !filteredBooks.length
              }
              className={buttonClass}
            >
              <Shuffle size={15} />

              Surprise me
            </button>
          </div>

          {/* Search and filters */}

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
                aria-label="Search books"
                placeholder="Search books, authors, notes..."
                className="min-h-12 w-full rounded-md border border-border bg-background py-3 pl-10 pr-10 text-base outline-none placeholder:text-muted-foreground focus:border-primary md:text-sm"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                  className="absolute inset-y-0 right-0 flex w-11 items-center justify-center bg-background text-muted-foreground"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            <button
              type="button"
              onClick={() => setFiltersOpen(true)}
              aria-label="Filter and sort books"
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
              STATUS NAVIGATION
          ============================================== */}

          <div className="mb-5 border-b border-border">
            <div
              role="group"
              aria-label="Reading status"
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

          {/* Active filters and view toggle */}

          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              {genre && (
                <button
                  type="button"
                  onClick={() => setGenre("")}
                  className="inline-flex min-h-11 items-center gap-2 rounded-md border border-border px-3 text-xs"
                >
                  {genre}

                  <X size={12} />
                </button>
              )}

              {rating && (
                <button
                  type="button"
                  onClick={() => setRating("")}
                  className="inline-flex min-h-11 items-center gap-2 rounded-md border border-border px-3 text-xs"
                >
                  {rating}+ stars

                  <X size={12} />
                </button>
              )}

              {sort !== "recent" && (
                <button
                  type="button"
                  onClick={() => setSort("recent")}
                  className="inline-flex min-h-11 items-center gap-2 rounded-md border border-border px-3 text-xs"
                >
                  {{
                    recent: "Recently added",
                    oldest: "Oldest first",
                    rating: "Highest rated",
                    title: "Title A–Z",
                    author: "Author A–Z",
                  }[sort]}

                  <X size={12} />
                </button>
              )}

              {!genre && !rating && sort === "recent" && (
                <span className="text-xs text-muted-foreground">
                  {view === "shelf"
                    ? "Bookshelf view"
                    : "List view"}
                </span>
              )}
            </div>

            <div
              role="group"
              aria-label="Bookshelf layout"
              className="flex rounded-md border border-border p-0.5"
            >
              <button
                type="button"
                onClick={() => setView("shelf")}
                aria-pressed={view === "shelf"}
                aria-label="Bookshelf grid view"
                className={`flex size-11 items-center justify-center rounded-sm ${
                  view === "shelf"
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                <LayoutGrid size={17} />
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
              aria-label="Loading books"
              className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-6"
            >
              {Array.from({ length: 10 }).map((_, index) => (
                <div
                  key={index}
                  className="animate-pulse motion-reduce:animate-none"
                >
                  <div className="aspect-[2/3] rounded-sm bg-muted" />

                  <div className="mt-3 h-3 w-4/5 rounded bg-muted" />

                  <div className="mt-2 h-2.5 w-1/2 rounded bg-muted" />
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
                onClick={() =>
                  setRetry((value) => value + 1)
                }
                className={`${buttonClass} mt-6`}
              >
                <RefreshCw size={15} />

                Try again
              </button>
            </div>
          ) : filteredBooks.length === 0 ? (
            /* Empty state */

            <div className="flex flex-col items-center border-y border-border py-16 text-center">
              <BookOpen
                size={38}
                strokeWidth={1}
                className="text-muted-foreground/60"
              />

              <h3 className="mt-5 font-serif text-2xl">
                {hasFilters
                  ? "Nothing quite matches."
                  : "An empty bookshelf."}
              </h3>

              <p className="mt-3 text-sm text-muted-foreground">
                {hasFilters
                  ? "Try another search or adjust your filters."
                  : "More books will appear as the collection grows."}
              </p>

              {hasFilters && (
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
               RESPONSIVE BOOKSHELF GRID
            ============================================ */

            <>
              <div
                className={
                  view === "shelf"
                    ? "grid grid-cols-2 items-start gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-6 lg:gap-y-10"
                    : "flex flex-col"
                }
              >
                {visibleBooks.map((book) => (
                  <BookCard
                    key={book.id}
                    book={book}
                    view={view}
                    onClick={() => setSelectedBook(book)}
                  />
                ))}
              </div>

              {/* Progressive pagination */}

              <div className="mt-12 flex flex-col items-center gap-4 border-t border-border pt-7">
                <p className="text-xs tabular-nums text-muted-foreground">
                  Showing {visibleBooks.length} of{" "}
                  {filteredBooks.length} books
                </p>

                <div
                  className="h-1 w-36 overflow-hidden rounded-full bg-muted"
                  role="progressbar"
                  aria-label="Books displayed"
                  aria-valuemin={0}
                  aria-valuemax={filteredBooks.length}
                  aria-valuenow={visibleBooks.length}
                >
                  <div
                    className="h-full rounded-full bg-primary/70 transition-all duration-300 motion-reduce:transition-none"
                    style={{
                      width: `${
                        (visibleBooks.length /
                          filteredBooks.length) *
                        100
                      }%`,
                    }}
                  />
                </div>

                {visibleCount < filteredBooks.length ? (
                  <button
                    type="button"
                    onClick={() =>
                      setVisibleCount((count) => count + 20)
                    }
                    className={`${buttonClass} mt-2 px-7`}
                  >
                    Load more books

                    <ChevronDown size={16} />
                  </button>
                ) : (
                  <p className="mt-2 text-xs text-muted-foreground">
                    You&apos;ve reached the end of the bookshelf.
                  </p>
                )}
              </div>
            </>
          )}
        </section>

        {/* ===============================================
            EDITORIAL CONCLUSION
        ================================================ */}

        <section className="border-t border-border py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <BookOpen
              size={30}
              strokeWidth={1}
              className="mx-auto mb-6 text-muted-foreground"
            />

            <p className="mb-5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Always another page
            </p>

            <h2 className="font-serif text-3xl leading-tight tracking-tight md:text-5xl">
              There is always more

              <span className="mt-2 block italic text-muted-foreground">
                to understand.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">
              Books offer an opportunity to borrow someone
              else&apos;s perspective, question our own
              assumptions and see familiar things differently.
            </p>

            <button
              type="button"
              disabled={
                loading ||
                Boolean(error) ||
                !filteredBooks.length
              }
              onClick={surpriseMe}
              className={`${buttonClass} mt-7`}
            >
              <Shuffle size={16} />

              Discover a random book
            </button>
          </div>
        </section>
      </div>

      {/* ===============================================
          FILTER OVERLAY
      ================================================ */}

      {filtersOpen && (
        <BookFilters
          genres={genres}
          genre={genre}
          rating={rating}
          status={status}
          sort={sort}
          setGenre={setGenre}
          setRating={setRating}
          setStatus={setStatus}
          setSort={setSort}
          resultCount={filteredBooks.length}
          onReset={clearFilters}
          onClose={() => setFiltersOpen(false)}
        />
      )}

      {/* ===============================================
          BOOK DETAIL OVERLAY
      ================================================ */}

      {selectedBook && (
        <BookDetails
          key={selectedBook.id}
          book={selectedBook}
          books={books}
          onClose={closeBook}
          onSelect={setSelectedBook}
        />
      )}
    </>
  )
}
