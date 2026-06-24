import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Mentors & People | Yash Mahadik",
  description: "The people who shaped my journey.",
};

export default async function MentorsPage() {
  const supabase = await createClient();

  const { data: mentors } = await supabase
    .from("mentors")
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
              <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">
                Mentors & People
              </h1>
              <p className="text-lg text-muted-foreground">
                The people who shaped my journey and continue to inspire me.
              </p>
            </div>

            {/* Mentors Grid */}
            {mentors && mentors.length > 0 ? (
              <div className="grid gap-8">
                {mentors.map((mentor) => (
                  <div
                    key={mentor.id}
                    className="border border-border rounded-lg p-6 hover:border-primary transition-colors hover:bg-card/50"
                  >
                    <div className="flex flex-col gap-2">
                      <h2 className="text-2xl font-serif text-foreground">
                        {mentor.name}
                      </h2>
                      <p className="text-sm text-primary font-semibold">
                        {mentor.title}
                        {mentor.company && ` at ${mentor.company}`}
                      </p>
                      <p className="text-muted-foreground pt-2">
                        {mentor.what_taught}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No mentors added yet.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
