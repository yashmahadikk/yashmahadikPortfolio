'use client'

import { useState } from 'react'
import { ExternalLink, Plus } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

interface BucketListItem {
  id: string
  title: string
  description: string
  link: string
  category: string
  completed: boolean
  created_at: string
}

export function BucketListSection() {
  const [items, setItems] = useState<BucketListItem[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    link: '',
    category: '',
  })

  // Fetch items on mount
  useState(() => {
    const fetchItems = async () => {
      try {
        const supabase = createClient()
        const { data } = await supabase
          .from('bucket_list')
          .select('*')
          .order('created_at', { ascending: false })

        if (data) {
          setItems(data as BucketListItem[])
        }
      } catch (error) {
        console.error('Error fetching bucket list:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchItems()
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const supabase = createClient()
      const { data: newItem } = await supabase
        .from('bucket_list')
        .insert([formData])
        .select()
        .single()

      if (newItem) {
        setItems([newItem as BucketListItem, ...items])
        setFormData({ title: '', description: '', link: '', category: '' })
        setShowForm(false)
      }
    } catch (error) {
      console.error('Error adding item:', error)
    }
  }

  const toggleComplete = async (id: string, completed: boolean) => {
    try {
      const supabase = createClient()
      await supabase
        .from('bucket_list')
        .update({ completed: !completed })
        .eq('id', id)

      setItems(items.map(item => 
        item.id === id ? { ...item, completed: !completed } : item
      ))
    } catch (error) {
      console.error('Error updating item:', error)
    }
  }

  const deleteItem = async (id: string) => {
    try {
      const supabase = createClient()
      await supabase
        .from('bucket_list')
        .delete()
        .eq('id', id)

      setItems(items.filter(item => item.id !== id))
    } catch (error) {
      console.error('Error deleting item:', error)
    }
  }

  // Group by category
  const categories = Array.from(new Set(items.map(item => item.category || 'General')))

  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">✨</span>
              <h1 className="text-4xl md:text-5xl font-sans font-semibold text-foreground">Bucket List</h1>
            </div>
            <button
              onClick={() => setShowForm(!showForm)}
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Plus size={18} />
              Add Link
            </button>
          </div>
          <p className="text-lg text-muted-foreground">
            Curated links and things I want to explore, experience, and build.
          </p>
        </div>

        {/* Add Form */}
        {showForm && (
          <form onSubmit={handleSubmit} className="mb-12 p-6 border border-border rounded-lg bg-card">
            <div className="grid gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Title</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="What do you want to do?"
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Tell me more about it..."
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                  rows={3}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Link (optional)</label>
                  <input
                    type="url"
                    value={formData.link}
                    onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                    placeholder="https://..."
                    className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Category</label>
                  <input
                    type="text"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    placeholder="e.g., Travel, Learning"
                    className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Add to List
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 bg-muted text-muted-foreground rounded-lg hover:bg-muted/80 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        )}

        {/* Items by Category */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading...</p>
          </div>
        ) : items.length > 0 ? (
          <div className="space-y-12">
            {categories.map(category => {
              const categoryItems = items.filter(item => (item.category || 'General') === category)
              return (
                <div key={category}>
                  <h2 className="text-2xl font-semibold text-foreground mb-6">{category}</h2>
                  <div className="grid gap-4">
                    {categoryItems.map(item => (
                      <div
                        key={item.id}
                        className={`p-4 border border-border rounded-lg transition-all ${
                          item.completed
                            ? 'bg-muted/50 opacity-60'
                            : 'hover:border-primary hover:bg-card/50'
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <input
                            type="checkbox"
                            checked={item.completed}
                            onChange={() => toggleComplete(item.id, item.completed)}
                            className="mt-1.5 w-5 h-5 cursor-pointer"
                          />
                          <div className="flex-1">
                            <h3 className={`text-lg font-semibold ${
                              item.completed
                                ? 'line-through text-muted-foreground'
                                : 'text-foreground'
                            }`}>
                              {item.title}
                            </h3>
                            {item.description && (
                              <p className={`text-sm mt-1 ${
                                item.completed
                                  ? 'text-muted-foreground'
                                  : 'text-muted-foreground'
                              }`}>
                                {item.description}
                              </p>
                            )}
                            {item.link && (
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-primary hover:text-primary/80 text-sm mt-2"
                              >
                                View <ExternalLink size={14} />
                              </a>
                            )}
                          </div>
                          <button
                            onClick={() => deleteItem(item.id)}
                            className="px-3 py-1 text-xs text-red-300 hover:bg-red-500/20 rounded transition-colors"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No bucket list items yet. Add one to get started!</p>
          </div>
        )}
      </div>
    </section>
  )
}
