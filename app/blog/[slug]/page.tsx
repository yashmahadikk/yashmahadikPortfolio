import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const supabase = await createClient();
  
  const { data: post } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!post) {
    return {
      title: "Post Not Found",
      description: "This blog post could not be found.",
    };
  }

  return {
    title: `${post.title} | Yash Mahadik`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const supabase = await createClient();
  
  const { data: post, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Back Link */}
      <section className="pt-24 px-6 max-w-3xl mx-auto">
        <Link 
          href="/blog"
          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-12"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to blog
        </Link>
      </section>

      {/* Article Header */}
      <section className="px-6 max-w-3xl mx-auto mb-12">
        <div className="mb-8">
          <p className="text-xs text-muted-foreground mb-4">
            {new Date(post.published_date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
            {post.title}
          </h1>
          <p className="text-lg text-muted-foreground">
            {post.excerpt}
          </p>
        </div>

        {/* Article Content */}
        <article className="prose prose-invert max-w-none">
          <div className="whitespace-pre-wrap text-base leading-relaxed text-foreground">
            {post.content}
          </div>
        </article>
      </section>

      {/* Back Link Bottom */}
      <section className="py-12 px-6 max-w-3xl mx-auto border-t border-border">
        <Link 
          href="/blog"
          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to all posts
        </Link>
      </section>
    </main>
  );
}
