'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { useState, useEffect, useMemo } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function MoviesPage() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const supabase = createClient()
        const { data } = await supabase
          .from('movies')
          .select('*')
          .order('created_at', { ascending: false })
        
        if (data) {
          setMovies(data)
        }
      } catch (error) {
        console.error('Error fetching movies:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchMovies()
  }, [])

  const totalPages = Math.ceil(movies.length / itemsPerPage)
  const paginatedMovies = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    return movies.slice(startIndex, startIndex + itemsPerPage)
  }, [movies, currentPage, itemsPerPage])

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-16 md:py-24 px-6 pt-32">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8">
            <ArrowLeft size={18} className="mr-2" />
            Back
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-sans font-semibold text-foreground mb-4">
              Movies
            </h1>
            <p className="text-lg text-muted-foreground">
              Films I&apos;ve watched, watching, and want to watch.
            </p>
          </div>

          {/* Items Per Page Selector */}
          <div className="mb-8 flex items-center gap-2 flex-wrap">
            <span className="text-sm text-muted-foreground">Show:</span>
            {[10, 50, 100].map(count => (
              <button
                key={count}
                onClick={() => {
                  setItemsPerPage(count)
                  setCurrentPage(1)
                }}
                className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                  itemsPerPage === count
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-card'
                }`}
              >
                {count}
              </button>
            ))}
            <button
              onClick={() => {
                setItemsPerPage(movies.length)
                setCurrentPage(1)
              }}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                itemsPerPage === movies.length
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-card'
              }`}
            >
              All
            </button>
          </div>

          {/* Status Summary */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
            <div className="border border-border rounded-lg p-3 sm:p-4 text-center">
              <div className="text-lg sm:text-2xl font-semibold text-foreground">
                {(movies.filter(m => m.status === 'Done').length) + (movies.filter(m => m.status === 'Watched').length)}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">Watched</div>
            </div>
            <div className="border border-border rounded-lg p-3 sm:p-4 text-center">
              <div className="text-lg sm:text-2xl font-semibold text-foreground">
                {movies.filter(m => m.status === 'In Progress').length}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">Watching</div>
            </div>
            <div className="border border-border rounded-lg p-3 sm:p-4 text-center">
              <div className="text-lg sm:text-2xl font-semibold text-foreground">
                {movies.filter(m => m.status === 'Backlog').length}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">Backlog</div>
            </div>
            <div className="border border-border rounded-lg p-3 sm:p-4 text-center">
              <div className="text-lg sm:text-2xl font-semibold text-foreground">
                {movies.length}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">Total</div>
            </div>
          </div>

          {/* Movies Grid */}
          {loading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading movies...</p>
            </div>
          ) : paginatedMovies.length > 0 ? (
            <>
            <div className="space-y-3 sm:space-y-4">
              {paginatedMovies.map(movie => (
                <div key={movie.id} className="group flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 border border-border rounded-lg hover:border-primary/50 transition-colors">
                  {/* Movie Poster - Left Side */}
                  <div className="flex-shrink-0 self-start">
                    <div className="w-20 h-28 sm:w-24 sm:h-32 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center overflow-hidden">
                      {movie.photo_url ? (
                        <img
                          src={movie.photo_url}
                          alt={movie.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      ) : (
                        <span className="text-3xl">🎬</span>
                      )}
                    </div>
                  </div>

                  {/* Movie Info - Right Side */}
                  <div className="flex-1 flex flex-col">
                    {/* Title and Rating */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-2">
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {movie.title}
                        </h3>
                      </div>
                      {movie.rating && (
                        <div className="flex-shrink-0 bg-primary/10 px-3 py-1 rounded-full w-fit">
                          <span className="text-xs sm:text-sm font-medium text-primary">{movie.rating}</span>
                        </div>
                      )}
                    </div>

                    {/* Genres */}
                    {movie.genre && typeof movie.genre === 'string' && movie.genre.trim() && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {movie.genre.split(',').map(g => g.trim()).filter(Boolean).map(g => (
                          <span key={g} className="text-xs px-2.5 py-1 bg-muted text-muted-foreground rounded-full line-clamp-1">
                            {g}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* My Thoughts */}
                    {movie.my_thoughts && (
                      <p className="text-xs sm:text-sm text-muted-foreground mb-3 line-clamp-2">
                        {movie.my_thoughts}
                      </p>
                    )}

                    {/* Status and Watch Link */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mt-auto pt-3 border-t border-border">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium w-fit ${
                        movie.status === 'Done' || movie.status === 'Watched'
                          ? 'bg-green-500/20 text-green-700 dark:text-green-400'
                          : movie.status === 'In Progress'
                          ? 'bg-blue-500/20 text-blue-700 dark:text-blue-400'
                          : 'bg-gray-500/20 text-gray-700 dark:text-gray-400'
                      }`}>
                        {movie.status}
                      </span>
                      {movie.url && (
                        <a
                          href={movie.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs sm:text-sm text-primary hover:text-primary/80 transition-colors"
                        >
                          Watch →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-8">
                <button
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1 rounded-lg border border-border text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-card transition-colors"
                >
                  Previous
                </button>
                <div className="text-sm text-muted-foreground">
                  Page {currentPage} of {totalPages}
                </div>
                <button
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 rounded-lg border border-border text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-card transition-colors"
                >
                  Next
                </button>
              </div>
            )}
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No movies added yet.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
