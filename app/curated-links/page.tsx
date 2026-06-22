import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Curated Links | Yash Mahadik",
  description: "Interesting resources and things I find valuable.",
};

export default async function CuratedLinksPage() {
  const supabase = await createClient();

  const { data: links } = await supabase
    .from("curated_links")
    .select("*")
    .order("order_position", { ascending: true });

  // Group by category
  const linksByCategory: { [key: string]: typeof links } = {};
  links?.forEach((link) => {
    const category = link.category || "General";
    if (!linksByCategory[category]) {
      linksByCategory[category] = [];
    }
    linksByCategory[category].push(link);
  });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="py-16 md:py-24 px-6 pt-32">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8">
              <ArrowLeft size={18} className="mr-2" />
              Back
            </Link>

            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-serif italic text-foreground mb-4">
                Curated Links
              </h1>
              <p className="text-lg text-muted-foreground">
                Interesting resources and things I find valuable.
              </p>
            </div>

            {/* Links by Category */}
            {links && links.length > 0 ? (
              <div className="space-y-12">
                {Object.entries(linksByCategory).map(([category, categoryLinks]) => (
                  <div key={category}>
                    <h2 className="text-2xl font-semibold text-foreground mb-6">
                      {category}
                    </h2>
                    <div className="grid gap-4">
                      {categoryLinks.map((link) => (
                        <a
                          key={link.id}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border border-border rounded-lg p-6 hover:border-primary transition-colors hover:bg-card/50 block group"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                                {link.title}
                              </h3>
                              {link.description && (
                                <p className="text-sm text-muted-foreground">
                                  {link.description}
                                </p>
                              )}
                              <p className="text-xs text-muted-foreground mt-2">
                                {new URL(link.url).hostname}
                              </p>
                            </div>
                            <ExternalLink size={18} className="text-primary flex-shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No curated links added yet.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
