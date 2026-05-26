import { Navigation } from "@/components/navigation"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { Footer } from "@/components/footer"

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Case Studies</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explore strategic product and design case studies across fintech, e-commerce, media, and consumer tech.
            </p>
          </div>
        </div>
      </div>
      <CaseStudiesSection />
      <Footer />
    </main>
  )
}
