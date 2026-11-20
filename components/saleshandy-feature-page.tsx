import Link from "next/link"
import { ArrowLeft, ArrowUpRight, FileText, PanelsTopLeft } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

type SaleshandyFeaturePageProps = {
  title: string
  subtitle: string
  description: string
  prototypeUrl: string
  prdUrl: string
  highlights: string[]
}

export function SaleshandyFeaturePage({
  title,
  subtitle,
  description,
  prototypeUrl,
  prdUrl,
  highlights,
}: SaleshandyFeaturePageProps) {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <section className="px-6 pb-14 pt-32">
        <div className="mx-auto max-w-5xl">
          <Link href="/work" className="mb-8 inline-flex items-center text-primary transition-colors hover:text-primary/80">
            <ArrowLeft size={18} className="mr-2" />
            Back to Work
          </Link>
          <p className="mb-3 text-sm font-semibold tracking-wider text-primary">SALESHANDY · LEAD FINDER</p>
          <h1 className="mb-4 max-w-4xl text-balance text-4xl font-serif italic text-foreground md:text-6xl">{title}</h1>
          <p className="mb-8 max-w-3xl text-xl leading-relaxed text-muted-foreground">{subtitle}</p>
          <p className="max-w-3xl text-base leading-relaxed text-foreground">{description}</p>
        </div>
      </section>
      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[1fr_280px]">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h2 className="mb-5 text-2xl font-serif text-foreground">What it does</h2>
            <ul className="flex flex-col gap-4">
              {highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span aria-hidden="true" className="mt-2 size-2 shrink-0 rounded-full bg-primary" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
          <aside className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6">
            <h2 className="mb-2 text-lg font-semibold text-foreground">Explore the work</h2>
            <a href={prototypeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-between gap-3 rounded-xl border border-border px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted">
              <span className="inline-flex items-center gap-2"><PanelsTopLeft size={17} /> Open prototype</span>
              <ArrowUpRight size={16} />
            </a>
            <Link href={prdUrl} className="inline-flex items-center justify-between gap-3 rounded-xl bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
              <span className="inline-flex items-center gap-2"><FileText size={17} /> Read full PRD</span>
              <ArrowUpRight size={16} />
            </Link>
          </aside>
        </div>
      </section>
      <Footer />
    </main>
  )
}
