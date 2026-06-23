'use client'

import { useState, useEffect } from 'react'
import { ExternalLink } from 'lucide-react'
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

  // Fetch items on mount
  useEffect(() => {
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
  }, [])

  // Group by category
  const categories = Array.from(new Set(items.map(item => item.category || 'General')))

  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">✨</span>
            <h1 className="text-4xl md:text-5xl font-sans font-semibold text-foreground">Bucket List</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Curated links and things I want to explore, experience, and build.
          </p>
        </div>

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
                        className="p-4 border border-border rounded-lg transition-all hover:border-primary hover:bg-card/50"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-foreground">
                              {item.title}
                            </h3>
                            {item.description && (
                              <p className="text-sm mt-1 text-muted-foreground">
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
