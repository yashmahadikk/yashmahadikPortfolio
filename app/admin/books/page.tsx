'use client'

import { useState, useEffect } from 'react'
import { Plus, Trash2, Edit2 } from 'lucide-react'
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

const AVAILABLE_GENRES = [
  'Fiction',
  'Non-Fiction',
  'Science Fiction',
  'Fantasy',
  'Biography',
  'Self-Help',
  'Business',
  'Technology',
  'History',
  'Mystery',
  'Romance',
  'Philosophy',
  'Psychology',
  'Art',
  'Science',
]

export default function BooksAdminPage() {
  const [books, setBooks] = useState<Book[]>([])
  const [loading, setLoading] = useState(true)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    cover_url: '',
    genre: [] as string[],
    status: 'Backlog' as const,
    rating: null as number | null,
    my_thoughts: '',
  })

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const supabase = createClient()

      if (editingId) {
        // Update existing book
        const { data } = await supabase
          .from('books')
          .update(formData)
          .eq('id', editingId)
          .select()
          .single()

        if (data) {
          setBooks(books.map(b => b.id === editingId ? (data as Book) : b))
          setEditingId(null)
        }
      } else {
        // Add new book
        const { data } = await supabase
          .from('books')
          .insert([formData])
          .select()
          .single()

        if (data) {
          setBooks([(data as Book), ...books])
        }
      }

      // Reset form
      setFormData({
        title: '',
        author: '',
        description: '',
        cover_url: '',
        genre: [],
        status: 'Backlog',
        rating: null,
        my_thoughts: '',
      })
      setShowForm(false)
    } catch (error) {
      console.error('Error saving book:', error)
    }
  }

  const handleEdit = (book: Book) => {
    setFormData({
      title: book.title,
      author: book.author,
      description: book.description,
      cover_url: book.cover_url,
      genre: book.genre || [],
      status: book.status,
      rating: book.rating,
      my_thoughts: book.my_thoughts || '',
    })
    setEditingId(book.id)
    setShowForm(true)
  }

  const handleDelete = async (id: string) => {
    try {
      const supabase = createClient()
      await supabase.from('books').delete().eq('id', id)
      setBooks(books.filter(b => b.id !== id))
    } catch (error) {
      console.error('Error deleting book:', error)
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
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-foreground">Books Admin</h1>
          <button
            onClick={() => {
              setEditingId(null)
              setFormData({
                title: '',
                author: '',
                description: '',
                cover_url: '',
                genre: [],
                status: 'Backlog',
                rating: null,
                my_thoughts: '',
              })
              setShowForm(!showForm)
            }}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Plus size={18} />
            Add Book
          </button>
        </div>

        {/* Add/Edit Form */}
        {showForm && (
          <form onSubmit={handleSubmit} className="mb-12 p-6 border border-border rounded-lg bg-card">
            <div className="grid gap-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Title *</label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Author *</label>
                  <input
                    type="text"
                    required
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                  rows={3}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">My Thoughts</label>
                <textarea
                  value={formData.my_thoughts}
                  onChange={(e) => setFormData({ ...formData, my_thoughts: e.target.value })}
                  placeholder="What did you think about this book?"
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                  rows={3}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Cover URL</label>
                <input
                  type="url"
                  value={formData.cover_url}
                  onChange={(e) => setFormData({ ...formData, cover_url: e.target.value })}
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Status</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as 'Backlog' | 'In Progress' | 'Done' })}
                    className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="Backlog">Backlog</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Rating (1-5)</label>
                  <input
                    type="number"
                    min="1"
                    max="5"
                    value={formData.rating || ''}
                    onChange={(e) => setFormData({ ...formData, rating: e.target.value ? parseInt(e.target.value) : null })}
                    className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-3">Genres</label>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                  {AVAILABLE_GENRES.map(genre => (
                    <label key={genre} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.genre.includes(genre)}
                        onChange={() => toggleGenre(genre)}
                        className="w-4 h-4"
                      />
                      <span className="text-sm text-foreground">{genre}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  {editingId ? 'Update Book' : 'Add Book'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false)
                    setEditingId(null)
                  }}
                  className="px-4 py-2 bg-muted text-muted-foreground rounded-lg hover:bg-muted/80 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        )}

        {/* Books List */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading...</p>
          </div>
        ) : books.length > 0 ? (
          <div className="overflow-x-auto border border-border rounded-lg">
            <table className="w-full">
              <thead className="bg-muted border-b border-border">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Title</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Author</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Genres</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Status</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Rating</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {books.map(book => (
                  <tr key={book.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="px-4 py-3 text-sm text-foreground">{book.title}</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{book.author}</td>
                    <td className="px-4 py-3 text-sm">
                      <div className="flex flex-wrap gap-1">
                        {book.genre?.map(g => (
                          <span key={g} className="px-2 py-1 bg-primary/20 text-primary rounded text-xs">
                            {g}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        book.status === 'Done'
                          ? 'bg-green-500/20 text-green-300'
                          : book.status === 'In Progress'
                          ? 'bg-blue-500/20 text-blue-300'
                          : 'bg-gray-500/20 text-gray-300'
                      }`}>
                        {book.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-foreground">
                      {book.rating ? `${book.rating}/5` : '-'}
                    </td>
                    <td className="px-4 py-3 text-sm flex gap-2">
                      <button
                        onClick={() => handleEdit(book)}
                        className="p-1.5 text-blue-300 hover:bg-blue-500/20 rounded transition-colors"
                        title="Edit"
                      >
                        <Edit2 size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(book.id)}
                        className="p-1.5 text-red-300 hover:bg-red-500/20 rounded transition-colors"
                        title="Delete"
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No books yet. Add one to get started!</p>
          </div>
        )}
      </div>
    </div>
  )
}
