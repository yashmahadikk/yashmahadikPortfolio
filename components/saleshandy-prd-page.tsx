import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

type SaleshandyPrdPageProps = {
  title: string
  content: string
}

export function SaleshandyPrdPage({ title, content }: SaleshandyPrdPageProps) {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <section className="px-6 pb-12 pt-32">
        <div className="mx-auto max-w-5xl">
          <Link href="/work" className="mb-8 inline-flex items-center text-primary transition-colors hover:text-primary/80">
            <ArrowLeft size={18} className="mr-2" />
            Back to Work
          </Link>
          <p className="mb-2 text-sm font-semibold tracking-wider text-primary">SALESHANDY · PRODUCT REQUIREMENTS</p>
          <h1 className="mb-4 text-balance text-4xl font-serif italic text-foreground md:text-5xl">{title}</h1>
          <p className="text-muted-foreground">Full PRD, reproduced from the supplied document.</p>
        </div>
      </section>
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-border bg-card">
          <pre className="overflow-x-auto whitespace-pre-wrap break-words p-6 font-mono text-sm leading-relaxed text-foreground sm:p-8">{content}</pre>
        </div>
      </section>
      <Footer />
    </main>
  )
}
