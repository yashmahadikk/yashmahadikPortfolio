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
  status?: 'To Do' | 'In Progress' | 'Done'
  completed?: boolean
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

  // Group items by status (handle both new status field and old completed field)
  const getStatus = (item: BucketListItem): 'To Do' | 'In Progress' | 'Done' => {
    if (item.status) return item.status
    return item.completed ? 'Done' : 'To Do'
  }
  
  const toDoItems = items.filter(item => getStatus(item) === 'To Do')
  const inProgressItems = items.filter(item => getStatus(item) === 'In Progress')
  const doneItems = items.filter(item => getStatus(item) === 'Done')

  const KanbanColumn = ({ 
    title, 
    items, 
    columnColor 
  }: { 
    title: string
    items: BucketListItem[]
    columnColor: string
  }) => (
    <div className="flex-1 min-w-0">
      <div className={`${columnColor} rounded-lg p-4 mb-4`}>
        <h3 className="font-semibold text-sm">{title}</h3>
        <p className="text-xs text-muted-foreground mt-1">{items.length} items</p>
      </div>
      <div className="space-y-3 min-h-96">
        {items.map(item => (
          <div
            key={item.id}
            className="p-4 bg-card border border-border rounded-lg hover:border-primary transition-all hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-foreground break-words">
                  {item.title}
                </h4>
                {item.description && (
                  <p className="text-xs mt-2 text-muted-foreground line-clamp-2">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
            
            {/* Category Tag */}
            {item.category && (
              <div className="mt-3">
                <span className="inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                  {item.category}
                </span>
              </div>
            )}

            {/* Link */}
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary hover:text-primary/80 text-xs mt-3"
              >
                View <ExternalLink size={12} />
              </a>
            )}
          </div>
        ))}
        {items.length === 0 && (
          <div className="text-center py-12 text-muted-foreground text-sm">
            No items
          </div>
        )}
      </div>
    </div>
  )

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">✨</span>
            <h1 className="text-4xl md:text-5xl font-sans font-semibold text-foreground">Bucket List</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Things I want to explore, experience, and build.
          </p>
        </div>

        {/* Kanban Board */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading...</p>
          </div>
        ) : items.length > 0 ? (
          <div className="flex gap-6 overflow-x-auto pb-4">
            <KanbanColumn 
              title="To Do" 
              items={toDoItems}
              columnColor="bg-slate-100 dark:bg-slate-900"
            />
            <KanbanColumn 
              title="In Progress" 
              items={inProgressItems}
              columnColor="bg-blue-100 dark:bg-blue-950"
            />
            <KanbanColumn 
              title="Done" 
              items={doneItems}
              columnColor="bg-green-100 dark:bg-green-950"
            />
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
