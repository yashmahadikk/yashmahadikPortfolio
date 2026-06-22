'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'
import { Search, Filter, ExternalLink } from 'lucide-react'

interface Movie {
  id: string
  title: string
  url: string
  rating: string
  genre: string[]
  photo_url: string
  my_thoughts: string
  status: string
}

export function HomeMoviesSection() {
  const [movies, setMovies] = useState<Movie[]>([])
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('Done')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchMovies()
  }, [])

  useEffect(() => {
    filterMovies()
  }, [movies, searchTerm, selectedStatus])

  const fetchMovies = async () => {
    try {
      const supabase = createClient()
      const { data, error } = await supabase
        .from('movies')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setMovies(data || [])
    } catch (error) {
      console.error('Error fetching movies:', error)
    } finally {
      setLoading(false)
    }
  }

  const filterMovies = () => {
    let filtered = movies

    if (selectedStatus) {
      filtered = filtered.filter(m => m.status === selectedStatus)
    }

    if (searchTerm) {
      filtered = filtered.filter(m =>
        m.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        m.my_thoughts?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    setFilteredMovies(filtered)
  }

  const moviesByStatus = {
    Done: movies.filter(m => m.status === 'Done').length,
    'In Progress': movies.filter(m => m.status === 'In Progress').length,
    Backlog: movies.filter(m => m.status === 'Backlog').length,
    Watched: movies.filter(m => m.status === 'Watched').length,
  }

  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-sans font-semibold text-foreground mb-4">
            Movies
          </h2>
          <p className="text-lg text-muted-foreground">
            Films I&apos;ve watched, watching, and want to watch.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 text-muted-foreground" size={18} />
              <input
                type="text"
                placeholder="Search movies, thoughts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Status Filter Info */}
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                {(['Done', 'In Progress', 'Backlog', 'Watched'] as const).map(status => (
                  <button
                    key={status}
                    onClick={() => setSelectedStatus(selectedStatus === status ? '' : status)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedStatus === status
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                  >
                    {status} ({moviesByStatus[status as keyof typeof moviesByStatus]})
                  </button>
                ))}
              </div>
              <Link
                href="/admin/movies"
                className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Edit
              </Link>
            </div>
          </div>
        </div>

        {/* Movies List */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading movies...</p>
          </div>
        ) : filteredMovies.length > 0 ? (
          <div className="space-y-4">
            {filteredMovies.slice(0, 6).map(movie => (
              <div key={movie.id} className="group flex gap-6 p-6 border border-border rounded-lg hover:border-primary/50 transition-colors">
                {/* Movie Poster - Left Side */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-32 bg-gradient-to-br from-primary/20 to-primary/5 rounded-md flex items-center justify-center overflow-hidden">
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
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {movie.title}
                      </h3>
                    </div>
                    {movie.rating && (
                      <div className="flex-shrink-0 bg-primary/10 px-3 py-1 rounded-full">
                        <span className="text-sm font-medium text-primary">{movie.rating}</span>
                      </div>
                    )}
                  </div>

                  {/* Genres */}
                  {movie.genre && movie.genre.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {movie.genre.map(g => (
                        <span key={g} className="text-xs px-2.5 py-1 bg-muted text-muted-foreground rounded-full">
                          {g}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* My Thoughts */}
                  {movie.my_thoughts && (
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {movie.my_thoughts}
                    </p>
                  )}

                  {/* Status and Watch Link */}
                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-border">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      movie.status === 'Done' || movie.status === 'Watched'
                        ? 'bg-green-500/20 text-green-300'
                        : movie.status === 'In Progress'
                        ? 'bg-blue-500/20 text-blue-300'
                        : 'bg-gray-500/20 text-gray-300'
                    }`}>
                      {movie.status}
                    </span>
                    {movie.url && (
                      <a
                        href={movie.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        Watch <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No movies found.</p>
          </div>
        )}

        {/* View All Link */}
        {filteredMovies.length > 6 && (
          <div className="mt-8 text-center">
            <Link href="/movies" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
              View all movies →
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
