'use client'

import { useEffect, useState } from "react"
import Link from "next/link"
import { createClient } from "@/lib/supabase/client"
import { ArrowUpRight } from "lucide-react"

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  published_date: string
}

export function HomeBlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const supabase = createClient()
        const { data } = await supabase
          .from("blog_posts")
          .select("*")
          .order("published_date", { ascending: false })
          .limit(3)

        if (data) {
          setPosts(data)
        }
      } catch (error) {
        console.error("Error fetching blog posts:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  return (
    <section className="py-24 md:py-32 px-6 border-b border-border">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-12">Latest from Blog</h2>
        
        {loading ? (
          <div className="text-muted-foreground">Loading posts...</div>
        ) : posts.length > 0 ? (
          <div className="space-y-12">
            {posts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
                <article>
                  <p className="text-sm text-muted-foreground mb-3">
                    {new Date(post.published_date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                    })}
                  </p>
                  <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors mb-3">
                    {post.title}
                  </h3>
                  <p className="text-base text-muted-foreground line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-primary font-medium text-sm">
                    Read more
                    <ArrowUpRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </article>
              </Link>
            ))}
            
            <div className="pt-8 border-t border-border">
              <Link href="/blog" className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-2">
                Read more posts
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        ) : (
          <div className="text-muted-foreground">No blog posts yet.</div>
        )}
      </div>
    </section>
  )
}
