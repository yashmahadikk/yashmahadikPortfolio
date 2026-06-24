import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { ArrowUpRight, ArrowLeft, BookOpen, Briefcase, Award, Users, Zap, CheckSquare, Globe, Book, PenTool } from "lucide-react";
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
        <section className="py-16 md:py-32 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 sm:mb-20">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-4 sm:mb-6">
                Blog & Insights
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl">
                Deep dives on product strategy, market analysis, and building things that matter.
              </p>
            </div>

            {/* Latest from Blog - Display First with Large Thumbnails */}
            <div className="mb-12 sm:mb-24">
              <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-8 sm:mb-12">Latest from Blog</h2>
              {posts && posts.length > 0 ? (
                <div className="space-y-6 sm:space-y-8">
                  {posts.map((post) => (
                    <Link
                      key={post.id}
                      href={`/blog/${post.slug}`}
                      className="group block"
                    >
                      <article className="border border-border rounded-lg overflow-hidden hover:border-primary transition-all hover:bg-card/30">
                        {/* Large Thumbnail */}
                        <div className="bg-muted h-48 sm:h-64 md:h-80 lg:h-96 flex items-center justify-center overflow-hidden">
                          {post.thumbnail_url ? (
                            <img 
                              src={post.thumbnail_url} 
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                              <span className="text-muted-foreground text-lg font-medium">{post.title.charAt(0)}</span>
                            </div>
                          )}
                        </div>
                        {/* Content */}
                        <div className="p-4 sm:p-6 md:p-8">
                          <p className="text-xs sm:text-sm text-muted-foreground mb-3">
                            {new Date(post.published_date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </p>
                          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground group-hover:text-primary transition-colors mb-3">
                            {post.title}
                          </h3>
                          <p className="text-sm sm:text-base text-muted-foreground line-clamp-2 sm:line-clamp-3 mb-4">
                            {post.excerpt}
                          </p>
                          {post.category && (
                            <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-4">
                              {post.category}
                            </span>
                          )}
                          <div className="flex items-center text-primary font-medium text-sm">
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
            </div>

            {/* Explore Section */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-8 sm:mb-12">Explore</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
                {/* Case Studies */}
                <Link href="/case-studies" className="group">
                  <div className="p-4 sm:p-8 rounded-lg border border-border hover:border-primary transition-all hover:bg-card/50 h-full bg-card/30">
                    <Briefcase size={24} className="text-primary mb-3 sm:mb-4" />
                    <h3 className="text-base sm:text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2 sm:mb-3">
                      Case Studies
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed line-clamp-2 sm:line-clamp-none">
                      In-depth analysis of products, markets, and strategies I&apos;ve studied.
                    </p>
                  </div>
                </Link>

                {/* Mentors */}
                <Link href="/mentors" className="group">
                  <div className="p-8 rounded-lg border border-border hover:border-primary transition-all hover:bg-card/50 h-full bg-card/30">
                    <Users size={28} className="text-primary mb-4" />
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-3">
                      Mentors & People
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      The people who shaped my journey and continue to inspire me.
                    </p>
                  </div>
                </Link>

                {/* Certificates */}
                <Link href="/certificates" className="group">
                  <div className="p-8 rounded-lg border border-border hover:border-primary transition-all hover:bg-card/50 h-full bg-card/30">
                    <Award size={28} className="text-primary mb-4" />
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-3">
                      Certificates & Achievements
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      A curated list of certificates and achievements.
                    </p>
                  </div>
                </Link>

                {/* Journey */}
                <Link href="/journey" className="group">
                  <div className="p-8 rounded-lg border border-border hover:border-primary transition-all hover:bg-card/50 h-full bg-card/30">
                    <BookOpen size={28} className="text-primary mb-4" />
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-3">
                      My Journey
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Overview of my learning and career journey.
                    </p>
                  </div>
                </Link>

                {/* Tools */}
                <Link href="/tools" className="group">
                  <div className="p-8 rounded-lg border border-border hover:border-primary transition-all hover:bg-card/50 h-full bg-card/30">
                    <Zap size={28} className="text-primary mb-4" />
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-3">
                      Tools & Software
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Tools and software I use daily.
                    </p>
                  </div>
                </Link>

                {/* Bucket List */}
                <Link href="/bucket-list" className="group">
                  <div className="p-8 rounded-lg border border-border hover:border-primary transition-all hover:bg-card/50 h-full bg-card/30">
                    <CheckSquare size={28} className="text-primary mb-4" />
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-3">
                      Bucket List
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Things I want to do, become, and build.
                    </p>
                  </div>
                </Link>

                {/* Books */}
                <Link href="/books" className="group">
                  <div className="p-8 rounded-lg border border-border hover:border-primary transition-all hover:bg-card/50 h-full bg-card/30">
                    <Book size={28} className="text-primary mb-4" />
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-3">
                      Books
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Books I&apos;m reading, have read, and want to read.
                    </p>
                  </div>
                </Link>

                {/* Movies */}
                <Link href="/movies" className="group">
                  <div className="p-8 rounded-lg border border-border hover:border-primary transition-all hover:bg-card/50 h-full bg-card/30">
                    <PenTool size={28} className="text-primary mb-4" />
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-3">
                      Movies
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Movies and shows I love and find inspiring.
                    </p>
                  </div>
                </Link>

                {/* Curated Links */}
                <Link href="/curated-links" className="group">
                  <div className="p-8 rounded-lg border border-border hover:border-primary transition-all hover:bg-card/50 h-full bg-card/30">
                    <Globe size={28} className="text-primary mb-4" />
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-3">
                      Curated Links
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Interesting resources and things I find valuable.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
