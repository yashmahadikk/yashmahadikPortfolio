'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Trash2, Edit2, Plus } from 'lucide-react'

interface Movie {
  id: string
  title: string
  url: string
  rating: number
  genre: string[]
  photo_url: string
  my_thoughts: string
  status: string
}

const MOVIE_GENRES = [
  'Action', 'Comedy', 'Drama', 'Thriller', 'Horror', 'Sci-Fi', 
  'Fantasy', 'Animation', 'Documentary', 'Romance', 'Mystery', 
  'Adventure', 'Crime', 'War', 'Musical', 'Biography'
]

export default function MoviesAdminPage() {
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    title: '',
    url: '',
    rating: 5,
    genre: [] as string[],
    photo_url: '',
    my_thoughts: '',
    status: 'Backlog',
  })

  useEffect(() => {
    fetchMovies()
  }, [])

  const fetchMovies = async () => {
    try {
      const supabase = await createClient()
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const supabase = await createClient()

      if (editingId) {
        const { error } = await supabase
          .from('movies')
          .update(formData)
          .eq('id', editingId)

        if (error) throw error
      } else {
        const { error } = await supabase
          .from('movies')
          .insert([formData])

        if (error) throw error
      }

      setFormData({
        title: '',
        url: '',
        rating: 5,
        genre: [],
        photo_url: '',
        my_thoughts: '',
        status: 'Backlog',
      })
      setShowForm(false)
      setEditingId(null)
      fetchMovies()
    } catch (error) {
      console.error('Error saving movie:', error)
    }
  }

  const handleEdit = (movie: Movie) => {
    setFormData(movie)
    setEditingId(movie.id)
    setShowForm(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this movie?')) return

    try {
      const supabase = await createClient()
      const { error } = await supabase
        .from('movies')
        .delete()
        .eq('id', id)

      if (error) throw error
      fetchMovies()
    } catch (error) {
      console.error('Error deleting movie:', error)
    }
  }

  const toggleGenre = (genre: string) => {
    setFormData(prev => ({
      ...prev,
      genre: prev.genre.includes(genre)
        ? prev.genre.filter(g => g !== genre)
        : [...prev.genre, genre]
    }))
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-foreground">Manage Movies</h1>
          <button
            onClick={() => {
              setShowForm(!showForm)
              if (editingId) setEditingId(null)
              if (showForm) {
                setFormData({
                  title: '',
                  url: '',
                  rating: 5,
                  genre: [],
                  photo_url: '',
                  my_thoughts: '',
                  status: 'Backlog',
                })
              }
            }}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            <Plus size={18} />
            Add Movie
          </button>
        </div>

        {/* Form */}
        {showForm && (
          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-6 mb-8">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Watch URL</label>
                <input
                  type="url"
                  value={formData.url}
                  onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                  placeholder="https://example.com/watch"
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Rating (1-5)</label>
                <input
                  type="number"
                  min="1"
                  max="5"
                  value={formData.rating}
                  onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) })}
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Photo URL</label>
                <input
                  type="url"
                  value={formData.photo_url}
                  onChange={(e) => setFormData({ ...formData, photo_url: e.target.value })}
                  placeholder="https://example.com/poster.jpg"
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-2">Status</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="Backlog">Backlog</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Done">Done</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-2">My Thoughts</label>
                <textarea
                  value={formData.my_thoughts}
                  onChange={(e) => setFormData({ ...formData, my_thoughts: e.target.value })}
                  placeholder="What did you think about this movie?"
                  rows={3}
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-2">Genres</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {MOVIE_GENRES.map(genre => (
                    <label key={genre} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={formData.genre.includes(genre)}
                        onChange={() => toggleGenre(genre)}
                        className="w-4 h-4 rounded border-border bg-background text-primary"
                      />
                      <span className="text-sm text-foreground">{genre}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
              >
                {editingId ? 'Update Movie' : 'Add Movie'}
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowForm(false)
                  setEditingId(null)
                  setFormData({
                    title: '',
                    url: '',
                    rating: 5,
                    genre: [],
                    photo_url: '',
                    my_thoughts: '',
                    status: 'Backlog',
                  })
                }}
                className="px-4 py-2 bg-muted text-muted-foreground rounded-lg hover:bg-muted/80 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        {/* Movies Table */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading movies...</p>
          </div>
        ) : movies.length > 0 ? (
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-muted border-b border-border">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Title</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Rating</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Genres</th>
                  <th className="px-6 py-3 text-right text-sm font-semibold text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {movies.map(movie => (
                  <tr key={movie.id} className="hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4 text-sm text-foreground">{movie.title}</td>
                    <td className="px-6 py-4 text-sm text-foreground">{movie.rating}/5</td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                        movie.status === 'Done'
                          ? 'bg-green-500/20 text-green-300'
                          : movie.status === 'In Progress'
                          ? 'bg-blue-500/20 text-blue-300'
                          : 'bg-gray-500/20 text-gray-300'
                      }`}>
                        {movie.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {movie.genre?.join(', ')}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => handleEdit(movie)}
                          className="p-2 text-primary hover:bg-primary/10 rounded transition-colors"
                          title="Edit"
                        >
                          <Edit2 size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(movie.id)}
                          className="p-2 text-destructive hover:bg-destructive/10 rounded transition-colors"
                          title="Delete"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-12 border border-border rounded-lg">
            <p className="text-muted-foreground">No movies yet. Add one to get started!</p>
          </div>
        )}
      </div>
    </div>
  )
}
