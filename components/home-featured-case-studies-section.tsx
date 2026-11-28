"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { featuredCaseStudies } from "@/lib/case-study-data"
import { trackPortfolioEvent } from "@/lib/portfolio-analytics"

export function HomeFeaturedCaseStudiesSection() {
  return (
    <section className="border-b border-border px-6 py-20 md:py-24">
      <div className="mx-auto max-w-4xl">
        <header className="mb-8">
          <h2 className="mb-3 text-3xl font-semibold text-foreground md:text-4xl">Featured Case Studies</h2>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            Exploring product decisions, business opportunities and the trade-offs behind them.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {featuredCaseStudies.map((study) => (
            <Link
              key={study.id}
              href={study.link}
              onClick={() => trackPortfolioEvent("case_study_card_click", { study: study.id })}
              className={`${study.bgColor} dark:bg-card group flex h-full flex-col rounded-md border border-border p-6 transition-colors hover:border-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`}
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{study.categoryLabel}</p>
              <h3 className="mb-3 text-2xl font-serif leading-snug text-foreground transition-colors group-hover:text-primary">{study.title}</h3>
              <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">{study.description}</p>
              {study.contentClassification && (
                <p className="mb-3 text-xs text-muted-foreground">Content: {study.contentClassification}</p>
              )}
              <span className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary">
                Read case study
                <ArrowUpRight aria-hidden="true" size={16} />
              </span>
            </Link>
          ))}
        </div>

        <Link href="/case-studies" className="mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          View all case studies
          <ArrowUpRight aria-hidden="true" size={16} />
        </Link>
      </div>
    </section>
  )
}
