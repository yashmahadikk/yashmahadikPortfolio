import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Blog | Yash Mahadik",
  description: "Thoughts on product, technology, and building.",
};

export default async function BlogPage() {
  const supabase = await createClient();
  
  const { data: posts, error } = await supabase
    .from("blog_posts")
    .select("*")
    .order("published_date", { ascending: false });

  if (error) {
    console.error("Error fetching blog posts:", error);
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif italic text-foreground mb-4">
            Blog
          </h1>
          <p className="text-lg text-muted-foreground">
            Thoughts on product management, technology, and building things that matter.
          </p>
        </div>

        {/* Blog Posts Grid */}
        {posts && posts.length > 0 ? (
          <div className="grid gap-8">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <article className="border border-border rounded-lg p-6 hover:border-primary transition-colors hover:bg-card/50">
                  <div className="flex flex-col gap-3">
                    <p className="text-xs text-muted-foreground">
                      {new Date(post.published_date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <h2 className="text-2xl font-serif text-foreground group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-primary font-medium text-sm pt-2">
                      Read more
                      <ArrowUpRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No blog posts yet.</p>
          </div>
        )}
      </section>
    </main>
  );
}
