'use client'

import { useEffect, useMemo, useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { createClient } from '@/lib/supabase/client'
import {
  Check,
  Clock3,
  ExternalLink,
  Filter,
  Grid2X2,
  List,
  Search,
  SkipForward,
  Sparkles,
  ThumbsUp,
  X,
} from 'lucide-react'

type Movie = {
  id: string
  title: string
  url: string | null
  rating: string | null
  genre: string[] | string | null
  photo_url: string | null
  my_thoughts: string | null
  status: string | null
}

type StatusFilter = 'All Films' | 'Watched' | 'Watching' | 'Watchlist'
type SortOrder = 'recent' | 'title' | 'rating'

const statusTabs: StatusFilter[] = ['All Films', 'Watched', 'Watching', 'Watchlist']

function getMovieStatus(status: string | null) {
  if (status === 'Done' || status === 'Watched') return 'Watched'
  if (status === 'In Progress') return 'Watching'
  return 'Watchlist'
}

function getGenres(genre: Movie['genre']) {
  if (Array.isArray(genre)) return genre.filter(Boolean)
  return genre?.split(',').map((item) => item.trim()).filter(Boolean) ?? []
}

function Verdict({ rating, status }: { rating: Movie['rating']; status: Movie['status'] }) {
  const viewingStatus = getMovieStatus(status)
  if (viewingStatus !== 'Watched') {
    return <span className="text-xs text-muted-foreground">{viewingStatus}</span>
  }

  const verdicts = {
    Perfection: { Icon: Sparkles, color: 'text-emerald-700 dark:text-emerald-400' },
    'Go for it': { Icon: ThumbsUp, color: 'text-sky-700 dark:text-sky-400' },
    Timepass: { Icon: Clock3, color: 'text-amber-700 dark:text-amber-400' },
    Skip: { Icon: SkipForward, color: 'text-rose-700 dark:text-rose-400' },
  }
  const verdict = rating ? verdicts[rating as keyof typeof verdicts] : undefined
  if (!verdict) return null
  const { Icon, color } = verdict
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs ${color}`}>
      <Icon aria-hidden="true" size={13} strokeWidth={1.8} />
      {rating}
    </span>
  )
}

function FilmstripIllustration() {
  return (
    <svg aria-hidden="true" viewBox="0 0 300 150" className="h-36 w-72 text-primary/60" fill="none">
      <path d="M14 31h272v88H14z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M14 47h272M14 103h272" stroke="currentColor" strokeWidth="1" />
      {[28, 58, 88, 118, 148, 178, 208, 238, 268].map((x) => (
        <g key={x} fill="currentColor" opacity=".45">
          <rect x={x - 6} y="36" width="12" height="6" rx="1" />
          <rect x={x - 6} y="108" width="12" height="6" rx="1" />
        </g>
      ))}
      <path d="m136 62 27 17-27 17V62Z" fill="currentColor" opacity=".8" />
      <circle cx="150" cy="79" r="33" stroke="currentColor" strokeWidth="1" opacity=".35" />
    </svg>
  )
}

function MovieDetail({ movie, onClose }: { movie: Movie; onClose: () => void }) {
  const genres = getGenres(movie.genre)
  const validWatchUrl = movie.url && /^https?:\/\//i.test(movie.url)

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50" role="presentation">
      <button aria-label="Close movie details" onClick={onClose} className="absolute inset-0 hidden bg-black/35 backdrop-blur-[1px] md:block" />
      <section
        aria-label={`${movie.title} details`}
        aria-modal="true"
        role="dialog"
        className="absolute inset-0 flex h-full flex-col overflow-y-auto bg-background p-5 sm:p-8 md:inset-y-0 md:right-0 md:left-auto md:w-[min(560px,90vw)] md:border-l md:border-border md:px-9 md:py-8"
      >
        <div className="mb-7 flex justify-end">
          <button onClick={onClose} aria-label="Close movie details" className="rounded-sm p-2 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <X size={20} />
          </button>
        </div>
        <div className="flex items-start gap-5 sm:gap-7">
          <div className="aspect-[2/3] w-28 shrink-0 overflow-hidden rounded-[5px] bg-muted sm:w-36">
            {movie.photo_url ? <img src={movie.photo_url} alt={`${movie.title} poster`} className="h-full w-full object-cover" /> : <div className="flex h-full items-center justify-center text-xs text-muted-foreground">No poster</div>}
          </div>
          <div className="flex min-w-0 flex-col items-start gap-3 pt-1">
            <h2 className="font-serif text-2xl leading-tight text-foreground sm:text-3xl">{movie.title}</h2>
            {genres.length > 0 && <p className="text-sm leading-relaxed text-muted-foreground">{genres.join(' · ')}</p>}
            <span className="text-xs text-muted-foreground">{getMovieStatus(movie.status)}</span>
            <Verdict rating={movie.rating} status={movie.status} />
          </div>
        </div>
        <div className="my-7 border-t border-border" />
        <div className="flex flex-col gap-4">
          <h3 className="font-serif text-xl">My Thoughts</h3>
          {movie.my_thoughts ? (
            <p className="whitespace-pre-wrap text-[15px] leading-7 text-muted-foreground">{movie.my_thoughts}</p>
          ) : (
            <p className="text-sm leading-6 text-muted-foreground">No thoughts added for this film.</p>
          )}
        </div>
        {validWatchUrl && (
          <a href={movie.url!} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex w-fit items-center gap-2 border-b border-primary pb-1 text-sm text-primary transition-opacity hover:opacity-75">
            Watch film <ExternalLink size={14} aria-hidden="true" />
          </a>
        )}
      </section>
    </div>
  )
}

export default function MoviesPage() {
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [activeStatus, setActiveStatus] = useState<StatusFilter>('All Films')
  const [view, setView] = useState<'grid' | 'list'>('grid')
  const [sortOrder, setSortOrder] = useState<SortOrder>('recent')
  const [showSort, setShowSort] = useState(false)
  const [visibleCount, setVisibleCount] = useState(24)
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const supabase = createClient()
        const { data, error } = await supabase.from('movies').select('*').order('created_at', { ascending: false })
        if (error) throw error
        setMovies(data ?? [])
      } catch (error) {
        console.error('Error fetching movies:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchMovies()
  }, [])

  const stats = useMemo(() => {
    const watched = movies.filter((movie) => getMovieStatus(movie.status) === 'Watched').length
    const watching = movies.filter((movie) => getMovieStatus(movie.status) === 'Watching').length
    const watchlist = movies.filter((movie) => getMovieStatus(movie.status) === 'Watchlist').length
    return { total: movies.length, watched, watching, watchlist }
  }, [movies])

  const filteredMovies = useMemo(() => {
    const query = search.trim().toLowerCase()
    const result = movies.filter((movie) => {
      const matchesStatus = activeStatus === 'All Films' || getMovieStatus(movie.status) === activeStatus
      const matchesSearch = !query || [movie.title, movie.rating, movie.my_thoughts, ...getGenres(movie.genre)].some((value) => value?.toLowerCase().includes(query))
      return matchesStatus && matchesSearch
    })
    if (sortOrder === 'title') result.sort((a, b) => a.title.localeCompare(b.title))
    if (sortOrder === 'rating') result.sort((a, b) => (a.rating ?? '').localeCompare(b.rating ?? ''))
    return result
  }, [movies, search, activeStatus, sortOrder])

  const visibleMovies = filteredMovies.slice(0, visibleCount)
  const statistics = [
    { label: 'Total Films', value: stats.total },
    { label: 'Watched', value: stats.watched },
    { label: 'Watching', value: stats.watching },
    { label: 'Watchlist', value: stats.watchlist },
  ]

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <section className="px-4 pb-16 pt-28 sm:px-6 md:pb-20 md:pt-36">
        <div className="mx-auto max-w-7xl">
          <header className="mb-9 flex items-center justify-between gap-8 md:mb-12">
            <div className="max-w-3xl">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">My Film Diary</p>
              <h1 className="text-balance font-serif text-[2.45rem] leading-[1.12] tracking-[-0.035em] sm:text-5xl md:text-6xl">
                Life, <em className="font-normal">through a different lens.</em>
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-relaxed">
                A personal record of the stories that stayed with me, the ones I&apos;m watching, and the ones still waiting.
              </p>
            </div>
            <div className="hidden shrink-0 items-center justify-center md:flex"><FilmstripIllustration /></div>
          </header>

          <section aria-label="Collection overview" className="mb-9">
            <div className="grid grid-cols-4">
              {statistics.map(({ label, value }, index) => (
                <div key={label} className={`flex flex-col gap-1 py-3 ${index > 0 ? 'border-l border-border pl-3 sm:pl-6' : ''} ${index < 3 ? 'pr-2 sm:pr-6' : ''}`}>
                  <span className="font-serif text-2xl leading-none sm:text-3xl">{value}</span>
                  <span className="text-[10px] text-muted-foreground sm:text-xs">{label}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex h-1.5 w-full overflow-hidden rounded-full bg-muted" aria-label={`${stats.watched} watched, ${stats.watching} watching, ${stats.watchlist} in watchlist`}>
              {stats.total > 0 && <>
                <span className="bg-primary" style={{ width: `${(stats.watched / stats.total) * 100}%` }} />
                <span className="bg-primary/55" style={{ width: `${(stats.watching / stats.total) * 100}%` }} />
                <span className="bg-muted-foreground/30" style={{ width: `${(stats.watchlist / stats.total) * 100}%` }} />
              </>}
            </div>
          </section>

          <section aria-label="Browse films">
            <div className="mb-5 flex gap-2">
              <label className="flex min-w-0 flex-1 items-center gap-3 border-b border-border py-2 focus-within:border-primary">
                <Search aria-hidden="true" size={17} className="shrink-0 text-muted-foreground" />
                <span className="sr-only">Search films</span>
                <input value={search} onChange={(event) => { setSearch(event.target.value); setVisibleCount(24) }} placeholder="Search films, genres, thoughts..." className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
              </label>
              <div className="relative">
                <button type="button" aria-expanded={showSort} onClick={() => setShowSort((shown) => !shown)} className="inline-flex h-full items-center gap-2 px-3 text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <Filter size={16} aria-hidden="true" /> <span className="hidden sm:inline">Filter &amp; Sort</span>
                </button>
                {showSort && <div className="absolute right-0 top-full z-10 mt-2 flex min-w-44 flex-col border border-border bg-background p-2 shadow-sm" role="group" aria-label="Sort films">
                  {[['recent', 'Recently added'], ['title', 'Title A–Z'], ['rating', 'Verdict']].map(([value, label]) => (
                    <button key={value} type="button" onClick={() => { setSortOrder(value as SortOrder); setShowSort(false) }} className="flex items-center justify-between gap-5 px-3 py-2 text-left text-sm hover:bg-muted">
                      {label}{sortOrder === value && <Check size={15} aria-hidden="true" />}
                    </button>
                  ))}
                </div>}
              </div>
            </div>

            <div className="mb-5 flex items-center justify-between gap-3 border-b border-border">
              <nav aria-label="Film status" className="flex min-w-0 gap-4 overflow-x-auto sm:gap-7">
                {statusTabs.map((tab) => (
                  <button key={tab} type="button" onClick={() => { setActiveStatus(tab); setVisibleCount(24) }} className={`shrink-0 border-b-2 px-0.5 pb-2.5 text-xs transition-colors sm:text-sm ${activeStatus === tab ? 'border-primary font-medium text-foreground' : 'border-transparent text-muted-foreground hover:text-foreground'}`} aria-current={activeStatus === tab ? 'page' : undefined}>{tab}</button>
                ))}
              </nav>
              <div className="mb-2 flex shrink-0 items-center border-l border-border pl-2" aria-label="View mode">
                <button type="button" aria-label="Grid view" aria-pressed={view === 'grid'} onClick={() => setView('grid')} className={`rounded-sm p-1.5 ${view === 'grid' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}><Grid2X2 size={16} /></button>
                <button type="button" aria-label="List view" aria-pressed={view === 'list'} onClick={() => setView('list')} className={`rounded-sm p-1.5 ${view === 'list' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}><List size={17} /></button>
              </div>
            </div>

            {loading ? <p className="py-12 text-center text-sm text-muted-foreground">Loading films...</p> : visibleMovies.length > 0 ? (
              <>
                {view === 'grid' ? (
                  <div className="grid grid-cols-2 gap-x-3 gap-y-6 min-[375px]:grid-cols-3 sm:grid-cols-4 sm:gap-x-5 sm:gap-y-8 lg:grid-cols-6">
                    {visibleMovies.map((movie) => (
                      <button key={movie.id} type="button" onClick={() => setSelectedMovie(movie)} className="group min-w-0 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                        <span className="mb-2 block aspect-[2/3] overflow-hidden rounded-[5px] bg-muted">
                          {movie.photo_url ? <img src={movie.photo_url} alt={`${movie.title} poster`} loading="lazy" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.025]" /> : <span className="flex h-full items-center justify-center px-2 text-center text-xs text-muted-foreground">No poster</span>}
                        </span>
                        <span className="block truncate text-sm font-medium leading-5">{movie.title}</span>
                        <span className="mt-1 block min-h-4"><Verdict rating={movie.rating} status={movie.status} /></span>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div>
                    {visibleMovies.map((movie) => (
                      <button key={movie.id} type="button" onClick={() => setSelectedMovie(movie)} className="flex w-full items-start gap-3 border-b border-border py-3 text-left transition-colors hover:bg-muted/40 sm:gap-5 sm:py-4">
                        <span className="aspect-[2/3] w-[62px] shrink-0 overflow-hidden rounded-[4px] bg-muted sm:w-[76px]">
                          {movie.photo_url ? <img src={movie.photo_url} alt={`${movie.title} poster`} loading="lazy" className="h-full w-full object-cover" /> : <span className="flex h-full items-center justify-center text-[10px] text-muted-foreground">No poster</span>}
                        </span>
                        <span className="flex min-w-0 flex-1 flex-col gap-1.5 py-0.5">
                          <span className="font-serif text-lg leading-tight">{movie.title}</span>
                          <span className="flex flex-wrap items-center gap-x-3 gap-y-1"><Verdict rating={movie.rating} status={movie.status} />{getGenres(movie.genre).length > 0 && <span className="text-xs text-muted-foreground">{getGenres(movie.genre).join(' · ')}</span>}</span>
                          {movie.my_thoughts && <span className="line-clamp-2 text-xs leading-5 text-muted-foreground sm:text-sm">{movie.my_thoughts}</span>}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
                <div className="mt-9 flex flex-col items-center gap-3">
                  <p className="text-xs text-muted-foreground">Showing {visibleMovies.length} of {filteredMovies.length} films</p>
                  {visibleMovies.length < filteredMovies.length && <button type="button" onClick={() => setVisibleCount((count) => count + 24)} className="border-b border-foreground/40 px-1 py-2 text-sm transition-colors hover:border-primary hover:text-primary">Load More Films</button>}
                </div>
              </>
            ) : <p className="py-12 text-center text-sm text-muted-foreground">No films found. Try a different search or status.</p>}
          </section>
        </div>
      </section>
      <Footer />
      {selectedMovie && <MovieDetail movie={selectedMovie} onClose={() => setSelectedMovie(null)} />}
    </main>
  )
}
