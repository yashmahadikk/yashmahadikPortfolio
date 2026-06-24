'use client'

import { useState, useEffect, useMemo } from 'react'
import { Search, Star, Sliders } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

interface Book {
  id: string
  title: string
  author: string
  description: string
  cover_url: string
  genre: string[]
  status: 'Backlog' | 'In Progress' | 'Done'
  rating: number | null
  my_thoughts: string
  created_at: string
}

export function BooksSection() {
  const [books, setBooks] = useState<Book[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null)
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null)

  // Fetch books on mount
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const supabase = createClient()
        const { data } = await supabase
          .from('books')
          .select('*')
          .order('created_at', { ascending: false })

        if (data) {
          setBooks(data as Book[])
        }
      } catch (error) {
        console.error('Error fetching books:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchBooks()
  }, [])

  // Normalize books status to ensure consistent casing
  const normalizedBooks = useMemo(() => {
    return books.map(book => ({
      ...book,
      status: book.status ? (book.status.charAt(0).toUpperCase() + book.status.slice(1)) as 'Backlog' | 'In Progress' | 'Done' : 'Backlog',
    }))
  }, [books])

  // Extract all genres from books
  const allGenres = useMemo(() => {
    const genreSet = new Set<string>()
    normalizedBooks.forEach(book => {
      if (book.genre && Array.isArray(book.genre)) {
        book.genre.forEach(g => genreSet.add(g))
      }
    })
    return Array.from(genreSet)
  }, [normalizedBooks])

  // Filter books based on search and selected filters
  const filteredBooks = useMemo(() => {
    return normalizedBooks.filter(book => {
      const matchesSearch = 
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.description?.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesStatus = !selectedStatus || book.status === selectedStatus
      const matchesGenre = !selectedGenre || (book.genre && book.genre.includes(selectedGenre))
      
      return matchesSearch && matchesStatus && matchesGenre
    })
  }, [normalizedBooks, searchTerm, selectedStatus, selectedGenre])

  // Group books by status
  const booksByStatus = {
    Backlog: filteredBooks.filter(b => b.status === 'Backlog'),
    'In Progress': filteredBooks.filter(b => b.status === 'In Progress'),
    Done: filteredBooks.filter(b => b.status === 'Done'),
  }

  const statusCounts = {
    Backlog: normalizedBooks.filter(b => b.status === 'Backlog').length,
    'In Progress': normalizedBooks.filter(b => b.status === 'In Progress').length,
    Done: normalizedBooks.filter(b => b.status === 'Done').length,
  }

  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">📚</span>
            <h1 className="text-4xl md:text-5xl font-sans font-semibold text-foreground">Books</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl">
            What I am reading, what I have read, and what I keep pretending I will read.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="flex gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <input
                type="text"
                placeholder="Search books, topics, notes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-foreground hover:bg-card transition-colors">
              <Sliders size={18} />
              Filter & Sort
            </button>
          </div>

          {/* Status Filter */}
          <div className="flex gap-2 flex-wrap">
            {Object.entries(statusCounts).map(([status, count]) => (
              <button
                key={status}
                onClick={() => setSelectedStatus(selectedStatus === status ? null : status)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  selectedStatus === status
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-card'
                }`}
              >
                {status} {count}
              </button>
            ))}
          </div>

          {/* Genre Filter */}
          {allGenres.length > 0 && (
            <div className="flex gap-2 flex-wrap">
              {allGenres.map(genre => (
                <button
                  key={genre}
                  onClick={() => setSelectedGenre(selectedGenre === genre ? null : genre)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedGenre === genre
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-card'
                  }`}
                >
                  {genre}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Books List */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading books...</p>
          </div>
        ) : filteredBooks.length > 0 ? (
          <div className="space-y-4">
            {filteredBooks.map(book => (
              <div key={book.id} className="group flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 border border-border rounded-lg hover:border-primary/50 transition-colors">
                {/* Book Cover - Left Side */}
                <div className="flex-shrink-0 self-start">
                  <div className="w-24 sm:w-28 h-auto bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center overflow-hidden">
                    {book.cover_url ? (
                      <img
                        src={book.cover_url}
                        alt={book.title}
                        className="w-full h-auto object-contain"
                      />
                    ) : (
                      <span className="text-3xl">📖</span>
                    )}
                  </div>
                </div>

                {/* Book Info - Right Side */}
                <div className="flex-1 flex flex-col">
                  {/* Title and Rating */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-2">
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {book.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">{book.author}</p>
                    </div>
                    {book.rating && (
                      <div className="flex items-center gap-1 flex-shrink-0 bg-primary px-3 py-1.5 rounded-full w-fit">
                        <Star size={14} className="text-primary-foreground" fill="currentColor" />
                        <span className="text-xs sm:text-sm font-bold text-primary-foreground">{book.rating}/5</span>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  {book.description && (
                    <p className="text-xs sm:text-sm text-muted-foreground mb-3 line-clamp-2">
                      {book.description}
                    </p>
                  )}

                  {/* My Thoughts - Highlighted */}
                  {book.my_thoughts && (
                    <div className="mb-4 p-3 bg-primary/10 border border-primary/30 rounded-lg">
                      <p className="text-xs sm:text-sm font-semibold text-primary mb-1">My Thoughts</p>
                      <p className="text-xs sm:text-sm text-foreground font-medium line-clamp-2">
                        {book.my_thoughts}
                      </p>
                    </div>
                  )}

                  {/* Genres */}
                  {book.genre && book.genre.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4 line-clamp-2">
                      {book.genre.map(g => (
                        <span key={g} className="text-xs px-2.5 py-1 bg-muted text-muted-foreground rounded-full hover:bg-muted/80 transition-colors cursor-pointer whitespace-nowrap">
                          {g}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Status Badge */}
                  <div className="mt-auto">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                      book.status === 'Done'
                        ? 'bg-green-500/20 text-green-400'
                        : book.status === 'In Progress'
                        ? 'bg-blue-500/20 text-blue-400'
                        : 'bg-gray-500/20 text-gray-400'
                    }`}>
                      {book.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No books found.</p>
          </div>
        )}
      </div>
    </section>
  )
}
