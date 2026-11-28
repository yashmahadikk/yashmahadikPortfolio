"use client"

import { Fragment } from "react"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { HomePortfolioCover } from "@/components/home-portfolio-cover"
import { featuredCaseStudies } from "@/lib/case-study-data"
import { trackPortfolioEvent } from "@/lib/portfolio-analytics"

export function HomeFeaturedCaseStudiesSection() {
  return (
    <section className="border-b border-border px-5 py-10 lg:px-6 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <header className="mb-6 lg:mb-8">
          <h2 className="mb-3 text-3xl font-semibold text-foreground md:text-4xl">Featured Case Studies</h2>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            Exploring product decisions, business opportunities and the trade-offs behind them.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
          {featuredCaseStudies.map((study, index) => {
            const trackClick = () => trackPortfolioEvent("case_study_card_click", { study: study.id })

            if (index === 0) {
              return (
                <Link
                  key={study.id}
                  href={study.link}
                  onClick={trackClick}
                  className={`${study.bgColor} dark:bg-card group flex h-full flex-col overflow-hidden rounded-md border border-border transition-colors hover:border-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`}
                >
                  <HomePortfolioCover id={study.id} title={study.title} />
                  <div className="flex flex-1 flex-col p-4 lg:p-6">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground lg:mb-3">{study.categoryLabel}</p>
                    <h3 className="mb-2 text-xl font-serif leading-snug text-foreground transition-colors group-hover:text-primary lg:mb-3 lg:text-2xl">{study.title}</h3>
                    <p className="mb-3 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground lg:mb-5">{study.description}</p>
                    {study.contentClassification && (
                      <p className="mb-2 text-xs text-muted-foreground lg:mb-3">Content: {study.contentClassification}</p>
                    )}
                    <span className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary">
                      Read case study
                      <ArrowUpRight aria-hidden="true" size={16} />
                    </span>
                  </div>
                </Link>
              )
            }

            return (
              <Fragment key={study.id}>
                <Link
                  href={study.link}
                  onClick={trackClick}
                  className="group flex min-h-20 items-center justify-between gap-4 border-b border-border py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:hidden"
                >
                  <HomePortfolioCover id={study.id} title={study.title} compact />
                  <span className="flex min-w-0 flex-1 flex-col gap-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{study.categoryLabel}</span>
                    <span className="text-base font-serif leading-snug text-foreground group-hover:text-primary">{study.title}</span>
                  </span>
                  <ArrowRight aria-hidden="true" size={18} className="shrink-0 text-primary" />
                </Link>
                <Link
                  href={study.link}
                  onClick={trackClick}
                  className={`${study.bgColor} dark:bg-card group hidden h-full flex-col overflow-hidden rounded-md border border-border transition-colors hover:border-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 lg:flex`}
                >
                  <HomePortfolioCover id={study.id} title={study.title} />
                  <div className="flex flex-1 flex-col p-6">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{study.categoryLabel}</p>
                    <h3 className="mb-3 text-2xl font-serif leading-snug text-foreground transition-colors group-hover:text-primary">{study.title}</h3>
                    <p className="mb-5 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">{study.description}</p>
                    {study.contentClassification && (
                      <p className="mb-3 text-xs text-muted-foreground">Content: {study.contentClassification}</p>
                    )}
                    <span className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary">
                      Read case study
                      <ArrowUpRight aria-hidden="true" size={16} />
                    </span>
                  </div>
                </Link>
              </Fragment>
            )
          })}
        </div>

        <Link href="/case-studies" className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:mt-7">
          View all case studies
          <ArrowUpRight aria-hidden="true" size={16} />
        </Link>
      </div>
    </section>
  )
}
