import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { ArrowUpRight, ArrowLeft, BookOpen, Briefcase, Award, Users, Zap, CheckSquare, Globe } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Blog | Yash Mahadik",
  description: "Thoughts on product, technology, and building.",
};

export default async function BlogPage() {
  const supabase = await createClient();
  
  const { data: posts } = await supabase
    .from("blog_posts")
    .select("*")
    .order("published_date", { ascending: false });

  const { data: caseStudies } = await supabase
    .from("case_studies")
    .select("*")
    .limit(6);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-6 pt-32">
          <div className="max-w-6xl mx-auto">
            <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8">
              <ArrowLeft size={18} className="mr-2" />
              Back
            </Link>
            <div className="mb-16">
              <h1 className="text-4xl md:text-5xl font-serif italic text-foreground mb-4">
                Blog & Insights
              </h1>
              <p className="text-lg text-muted-foreground">
                Deep dives on product, strategy, and building things that matter.
              </p>
            </div>

            {/* Explore Section */}
            <div className="mb-20">
              <h2 className="text-2xl font-semibold text-foreground mb-8">Explore</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Case Studies */}
                <Link href="/case-studies" className="group">
                  <div className="p-6 rounded-lg border border-border hover:border-primary transition-colors hover:bg-card/50 h-full">
                    <Briefcase size={24} className="text-primary mb-3" />
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      Case Studies
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      In-depth analysis of products, markets, and strategies I&apos;ve studied.
                    </p>
                  </div>
                </Link>

                {/* Mentors */}
                <Link href="/mentors" className="group">
                  <div className="p-6 rounded-lg border border-border hover:border-primary transition-colors hover:bg-card/50 h-full">
                    <Users size={24} className="text-primary mb-3" />
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      Mentors & People
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      The people who shaped my journey and continue to inspire.
                    </p>
                  </div>
                </Link>

                {/* Certificates */}
                <Link href="/certificates" className="group">
                  <div className="p-6 rounded-lg border border-border hover:border-primary transition-colors hover:bg-card/50 h-full">
                    <Award size={24} className="text-primary mb-3" />
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      Certificates & Achievements
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      A curated list of certifications and recognitions.
                    </p>
                  </div>
                </Link>

                {/* Journey */}
                <Link href="/journey" className="group">
                  <div className="p-6 rounded-lg border border-border hover:border-primary transition-colors hover:bg-card/50 h-full">
                    <BookOpen size={24} className="text-primary mb-3" />
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      My Journey
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Overview of my learning and career evolution.
                    </p>
                  </div>
                </Link>

                {/* Tools */}
                <Link href="/tools" className="group">
                  <div className="p-6 rounded-lg border border-border hover:border-primary transition-colors hover:bg-card/50 h-full">
                    <Zap size={24} className="text-primary mb-3" />
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      Tools & Software
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Technologies and tools I use daily.
                    </p>
                  </div>
                </Link>

                {/* Bucket List */}
                <Link href="/bucket-list" className="group">
                  <div className="p-6 rounded-lg border border-border hover:border-primary transition-colors hover:bg-card/50 h-full">
                    <CheckSquare size={24} className="text-primary mb-3" />
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      Bucket List
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Things I want to do, become, and build.
                    </p>
                  </div>
                </Link>

                {/* Curated Links */}
                <Link href="/curated-links" className="group">
                  <div className="p-6 rounded-lg border border-border hover:border-primary transition-colors hover:bg-card/50 h-full">
                    <Globe size={24} className="text-primary mb-3" />
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      Curated Links
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Interesting resources and things I find valuable.
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Latest from Blog */}
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-8">Latest Posts</h2>
              {posts && posts.length > 0 ? (
                <div className="grid gap-8">
                  {posts.slice(0, 5).map((post) => (
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
                          <h3 className="text-2xl font-serif text-foreground group-hover:text-primary transition-colors">
                            {post.title}
                          </h3>
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
                  <Link href="/blog" className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-2">
                    Read all posts
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No blog posts yet.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
