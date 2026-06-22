'use client'

import { useState } from 'react'
import { Plus, Trash2, Edit2, ExternalLink } from 'lucide-react'
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

export default function BucketListAdminPage() {
  const [items, setItems] = useState<BucketListItem[]>([])
  const [loading, setLoading] = useState(true)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    link: '',
    category: '',
    completed: false,
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

      if (editingId) {
        // Update existing item
        const { data } = await supabase
          .from('bucket_list')
          .update(formData)
          .eq('id', editingId)
          .select()
          .single()

        if (data) {
          setItems(items.map(i => i.id === editingId ? (data as BucketListItem) : i))
          setEditingId(null)
        }
      } else {
        // Add new item
        const { data } = await supabase
          .from('bucket_list')
          .insert([formData])
          .select()
          .single()

        if (data) {
          setItems([(data as BucketListItem), ...items])
        }
      }

      // Reset form
      setFormData({
        title: '',
        description: '',
        link: '',
        category: '',
        completed: false,
      })
      setShowForm(false)
    } catch (error) {
      console.error('Error saving item:', error)
    }
  }

  const handleEdit = (item: BucketListItem) => {
    setFormData({
      title: item.title,
      description: item.description,
      link: item.link,
      category: item.category,
      completed: item.completed,
    })
    setEditingId(item.id)
    setShowForm(true)
  }

  const handleDelete = async (id: string) => {
    try {
      const supabase = createClient()
      await supabase.from('bucket_list').delete().eq('id', id)
      setItems(items.filter(i => i.id !== id))
    } catch (error) {
      console.error('Error deleting item:', error)
    }
  }

  const toggleComplete = async (id: string, completed: boolean) => {
    try {
      const supabase = createClient()
      const { data } = await supabase
        .from('bucket_list')
        .update({ completed: !completed })
        .eq('id', id)
        .select()
        .single()

      if (data) {
        setItems(items.map(i => i.id === id ? (data as BucketListItem) : i))
      }
    } catch (error) {
      console.error('Error updating item:', error)
    }
  }

  const categories = Array.from(new Set(items.map(item => item.category || 'General')))

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-foreground">Bucket List Admin</h1>
          <button
            onClick={() => {
              setEditingId(null)
              setFormData({
                title: '',
                description: '',
                link: '',
                category: '',
                completed: false,
              })
              setShowForm(!showForm)
            }}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Plus size={18} />
            Add Item
          </button>
        </div>

        {/* Add/Edit Form */}
        {showForm && (
          <form onSubmit={handleSubmit} className="mb-12 p-6 border border-border rounded-lg bg-card">
            <div className="grid gap-4">
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
                <label className="block text-sm font-medium text-foreground mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
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
                    className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Category</label>
                  <input
                    type="text"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    placeholder="e.g., Travel, Learning"
                    className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.completed}
                  onChange={(e) => setFormData({ ...formData, completed: e.target.checked })}
                  className="w-4 h-4"
                />
                <span className="text-sm text-foreground">Mark as completed</span>
              </label>

              <div className="flex gap-2">
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  {editingId ? 'Update Item' : 'Add Item'}
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

        {/* Items by Category */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading...</p>
          </div>
        ) : items.length > 0 ? (
          <div className="space-y-8">
            {categories.map(category => {
              const categoryItems = items.filter(item => item.category === category)
              return (
                <div key={category}>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">{category}</h2>
                  <div className="overflow-x-auto border border-border rounded-lg">
                    <table className="w-full">
                      <thead className="bg-muted border-b border-border">
                        <tr>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Title</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Description</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Link</th>
                          <th className="px-4 py-3 text-center text-sm font-semibold text-foreground">Completed</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {categoryItems.map(item => (
                          <tr key={item.id} className={`border-b border-border hover:bg-muted/30 transition-colors ${item.completed ? 'opacity-60' : ''}`}>
                            <td className="px-4 py-3 text-sm text-foreground">{item.title}</td>
                            <td className="px-4 py-3 text-sm text-muted-foreground line-clamp-2">{item.description}</td>
                            <td className="px-4 py-3 text-sm">
                              {item.link && (
                                <a
                                  href={item.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-primary hover:text-primary/80"
                                >
                                  <ExternalLink size={14} />
                                </a>
                              )}
                            </td>
                            <td className="px-4 py-3 text-center">
                              <input
                                type="checkbox"
                                checked={item.completed}
                                onChange={() => toggleComplete(item.id, item.completed)}
                                className="w-4 h-4"
                              />
                            </td>
                            <td className="px-4 py-3 text-sm flex gap-2">
                              <button
                                onClick={() => handleEdit(item)}
                                className="p-1.5 text-blue-300 hover:bg-blue-500/20 rounded transition-colors"
                                title="Edit"
                              >
                                <Edit2 size={16} />
                              </button>
                              <button
                                onClick={() => handleDelete(item.id)}
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
    </div>
  )
}
