import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "My Journey | Yash Mahadik",
  description: "Overview of my learning and career journey.",
};

export default async function JourneyPage() {
  const supabase = await createClient();

  const { data: journeys } = await supabase
    .from("my_journey")
    .select("*")
    .order("order_position", { ascending: true });

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
                My Journey
              </h1>
              <p className="text-lg text-muted-foreground">
                Overview of my learning and career evolution.
              </p>
            </div>

            {/* Journey Content */}
            {journeys && journeys.length > 0 ? (
              <div className="space-y-12">
                {journeys.map((journey) => (
                  <div key={journey.id} className="border border-border rounded-lg p-8 hover:border-primary transition-colors">
                    <h2 className="text-2xl font-serif text-foreground mb-4">
                      {journey.title}
                    </h2>
                    <p className="text-sm text-primary font-semibold mb-4">
                      {journey.description}
                    </p>
                    <div className="prose prose-invert max-w-none">
                      <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                        {journey.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No journey entries added yet.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
