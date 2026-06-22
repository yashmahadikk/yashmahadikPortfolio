import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Tools & Software | Yash Mahadik",
  description: "Tools and software I use daily.",
};

export default async function ToolsPage() {
  const supabase = await createClient();

  const { data: tools } = await supabase
    .from("tools_software")
    .select("*")
    .order("order_position", { ascending: true });

  // Group tools by category
  const toolsByCategory: { [key: string]: typeof tools } = {};
  tools?.forEach((tool) => {
    if (!toolsByCategory[tool.category]) {
      toolsByCategory[tool.category] = [];
    }
    toolsByCategory[tool.category].push(tool);
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
                Tools & Software
              </h1>
              <p className="text-lg text-muted-foreground">
                Technologies and tools I use daily to build and create.
              </p>
            </div>

            {/* Tools by Category */}
            {tools && tools.length > 0 ? (
              <div className="space-y-12">
                {Object.entries(toolsByCategory).map(([category, categoryTools]) => (
                  <div key={category}>
                    <h2 className="text-2xl font-semibold text-foreground mb-6">
                      {category}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {categoryTools.map((tool) => (
                        <div
                          key={tool.id}
                          className="border border-border rounded-lg p-4 hover:border-primary transition-colors hover:bg-card/50"
                        >
                          <h3 className="font-semibold text-foreground mb-1">
                            {tool.name}
                          </h3>
                          {tool.description && (
                            <p className="text-sm text-muted-foreground">
                              {tool.description}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No tools added yet.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
