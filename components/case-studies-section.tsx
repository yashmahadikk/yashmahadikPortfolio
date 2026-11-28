import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { caseStudyEntries } from "@/lib/case-study-data"

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="relative overflow-hidden bg-muted/30 px-6 py-24 scroll-mt-24">
      <div className="pointer-events-none absolute bottom-0 left-10 hidden size-80 opacity-5 dark:opacity-[0.03] md:block">
        <img src="/illustrations/analytics.png" alt="" className="size-full object-contain" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="mb-2 text-sm font-semibold tracking-wider text-primary">CASE STUDIES</p>
          <h2 className="mb-6 text-4xl font-serif italic text-foreground md:text-6xl">Strategic Product Insights</h2>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Explore case studies organized by methodology—from product teardowns to go-to-market strategies. Each case study showcases strategic thinking across different product disciplines.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudyEntries.map((study) => (
            <article key={study.id} className={`${study.bgColor} dark:bg-card flex h-full flex-col rounded-lg border border-border/20 p-6 transition-colors hover:border-primary/60`}>
              <Link
                href={study.link}
                className="group flex flex-1 flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <p className="mb-4 text-xs font-bold tracking-wider text-muted-foreground">{study.categoryLabel.toUpperCase()}</p>
                <h3 className="mb-3 text-lg font-serif leading-snug text-foreground transition-colors group-hover:text-primary">{study.title}</h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">{study.description}</p>
                <span className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary">
                  Read case study
                  <ArrowUpRight aria-hidden="true" size={16} />
                </span>
              </Link>
              {study.pptLink && (
                <a href={study.pptLink} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex min-h-11 items-center gap-2 border-t border-border/50 pt-3 text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  View the deck
                  <ArrowUpRight aria-hidden="true" size={16} />
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
