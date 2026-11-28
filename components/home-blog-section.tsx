import Link from "next/link"
import { createClient } from "@/lib/supabase/server"
import { ArrowUpRight } from "lucide-react"

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  published_date: string
}

export async function HomeBlogSection() {
  let posts: BlogPost[] = []

  try {
    const supabase = await createClient()
    const { data } = await supabase
      .from("blog_posts")
      .select("*")
      .order("published_date", { ascending: false })
      .limit(3)

    if (data) {
      posts = data as BlogPost[]
    }
  } catch (error) {
    console.error("Error fetching blog posts:", error)
  }

  return (
    <section className="border-b border-border px-5 py-10 lg:px-6 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-6 text-3xl font-semibold text-foreground lg:mb-12 lg:text-4xl">Latest from Blog</h2>
        
        {posts.length > 0 ? (
          <div className="flex flex-col gap-6 lg:gap-12">
            {posts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
                <article>
                  <p className="text-sm text-muted-foreground mb-3">
                    {new Date(post.published_date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                    })}
                  </p>
                  <h3 className="mb-2 text-xl font-semibold text-foreground transition-colors group-hover:text-primary lg:mb-3 lg:text-2xl">
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
