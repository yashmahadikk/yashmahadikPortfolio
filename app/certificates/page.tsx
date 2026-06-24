import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Certificates & Achievements | Yash Mahadik",
  description: "A curated list of certificates and achievements.",
};

export default async function CertificatesPage() {
  const supabase = await createClient();

  const { data: certificates } = await supabase
    .from("certificates")
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
                Certificates & Achievements
              </h1>
              <p className="text-lg text-muted-foreground">
                A curated list of certifications and recognitions.
              </p>
            </div>

            {/* Certificates Grid */}
            {certificates && certificates.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {certificates.map((cert) => (
                  <div
                    key={cert.id}
                    className="border border-border rounded-lg p-6 hover:border-primary transition-colors hover:bg-card/50 flex flex-col gap-3"
                  >
                    <h2 className="text-xl font-semibold text-foreground">
                      {cert.title}
                    </h2>
                    <p className="text-sm text-primary font-medium">
                      {cert.issuer}
                    </p>
                    {cert.date_issued && (
                      <p className="text-xs text-muted-foreground">
                        {new Date(cert.date_issued).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                        })}
                      </p>
                    )}
                    {cert.credential_url && (
                      <Link
                        href={cert.credential_url}
                        target="_blank"
                        className="text-primary hover:text-primary/80 text-sm font-medium inline-flex items-center gap-2 pt-2"
                      >
                        View Certificate
                        <ExternalLink size={14} />
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No certificates added yet.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
