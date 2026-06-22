import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Bucket List | Yash Mahadik",
  description: "Things I want to do, become, and build.",
};

export default async function BucketListPage() {
  const supabase = await createClient();

  const { data: bucketList } = await supabase
    .from("bucket_list")
    .select("*")
    .order("order_position", { ascending: true });

  // Group by category
  const itemsByCategory: { [key: string]: typeof bucketList } = {};
  bucketList?.forEach((item) => {
    const category = item.category || "General";
    if (!itemsByCategory[category]) {
      itemsByCategory[category] = [];
    }
    itemsByCategory[category].push(item);
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
                Bucket List
              </h1>
              <p className="text-lg text-muted-foreground">
                Things I want to do, become, and build.
              </p>
            </div>

            {/* Bucket List Items by Category */}
            {bucketList && bucketList.length > 0 ? (
              <div className="space-y-12">
                {Object.entries(itemsByCategory).map(([category, items]) => (
                  <div key={category}>
                    <h2 className="text-2xl font-semibold text-foreground mb-6">
                      {category}
                    </h2>
                    <div className="grid gap-4">
                      {items.map((item) => (
                        <div
                          key={item.id}
                          className="border border-border rounded-lg p-6 hover:border-primary transition-colors hover:bg-card/50"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <h3 className="text-xl font-semibold text-foreground mb-2">
                                {item.title}
                              </h3>
                              <p className="text-muted-foreground">
                                {item.description}
                              </p>
                            </div>
                            {item.status && (
                              <span className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                                item.status === "completed"
                                  ? "bg-green-500/20 text-green-300"
                                  : item.status === "in-progress"
                                  ? "bg-blue-500/20 text-blue-300"
                                  : "bg-gray-500/20 text-gray-300"
                              }`}>
                                {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No bucket list items added yet.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
