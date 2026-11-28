"use client"

import { useMemo, useState } from "react"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { trackPortfolioEvent } from "@/lib/portfolio-analytics"
import type { CaseStudyEntry } from "@/lib/case-study-data"

const filters = [
  { id: "all", label: "All", categories: [] },
  { id: "feature-hypotheses", label: "Feature Hypotheses", categories: ["feature-hypothesis", "feature-hypotheses"] },
  { id: "product-teardowns", label: "Product Teardowns", categories: ["product-teardown", "product-teardowns"] },
  { id: "wireframing-design", label: "Wireframing & Design", categories: ["wireframing", "wireframing-design", "wireframing-and-design"] },
  { id: "product-strategy", label: "Product Strategy", categories: ["prd", "product-strategy", "go-to-market", "strategy"] },
  { id: "data-analytics", label: "Data & Analytics", categories: ["data-analytics", "analytics"] },
  { id: "market-analysis", label: "Market Analysis", categories: ["market-case-study", "market-analysis"] },
  { id: "new-product-development", label: "New Product Development", categories: ["new-product-development", "product-journey"] },
]

function normalizeCategory(category: string) {
  return category.trim().toLowerCase().replace(/[\s_&]+/g, "-")
}

export function CaseStudiesPageClient({ studies }: { studies: CaseStudyEntry[] }) {
  const [activeFilter, setActiveFilter] = useState("all")
  const activeCategoryFilter = filters.find((filter) => filter.id === activeFilter) ?? filters[0]
  const visibleStudies = useMemo(() => {
    if (activeFilter === "all") return studies
    const categories = new Set(activeCategoryFilter.categories)
    return studies.filter((study) => categories.has(normalizeCategory(study.category)))
  }, [activeFilter, activeCategoryFilter, studies])

  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14">
          <h2 className="mb-6 text-2xl font-serif text-foreground md:text-3xl">How I Work</h2>
          <Link
            href="/case-studies/how-i-work"
            onClick={() => trackPortfolioEvent("case_study_card_click", { study: "how-i-work" })}
            className="group block max-w-xl rounded-md border border-border bg-indigo-50 p-6 transition-colors hover:border-primary/60 dark:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Process</p>
            <h3 className="mb-3 text-xl font-serif text-foreground transition-colors group-hover:text-primary">Rapid Prototyping: How I Turn Ideas Into Working Tools with AI</h3>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">My repeatable process for building prototypes in an afternoon using version-by-version iteration, real data from message one, and logic before polish.</p>
            <span className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary">
              Read case study
              <ArrowUpRight aria-hidden="true" size={16} />
            </span>
          </Link>
        </div>

        <div>
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-2xl font-serif text-foreground md:text-3xl">Product and Market Case Studies</h2>
              <p className="mt-2 text-sm text-muted-foreground" aria-live="polite">
                {visibleStudies.length} {visibleStudies.length === 1 ? "case study" : "case studies"}
              </p>
            </div>
          </div>

          <div role="group" aria-label="Filter case studies by category" className="mb-7 flex gap-2 overflow-x-auto pb-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                aria-pressed={activeFilter === filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`min-h-10 shrink-0 rounded border px-3 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${activeFilter === filter.id ? "border-foreground bg-foreground font-medium text-background" : "border-border bg-background text-muted-foreground hover:border-foreground hover:text-foreground"}`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {visibleStudies.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visibleStudies.map((study) => (
                <Link
                  key={study.link}
                  href={study.link}
                  onClick={() => trackPortfolioEvent("case_study_card_click", { study: study.id })}
                  className={`${study.bgColor} dark:bg-card group flex h-full flex-col rounded-md border border-border p-6 transition-colors hover:border-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`}
                >
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{study.categoryLabel}</p>
                  <h3 className="mb-3 text-xl font-serif leading-snug text-foreground transition-colors group-hover:text-primary">{study.title}</h3>
                  <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">{study.description}</p>
                  {study.contentClassification && <p className="mb-3 text-xs text-muted-foreground">Content: {study.contentClassification}</p>}
                  <span className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary">
                    Read case study
                    <ArrowUpRight aria-hidden="true" size={16} />
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-md border border-border px-6 py-10 text-center">
              <p className="text-foreground">No case studies match this category yet.</p>
              <button
                type="button"
                onClick={() => setActiveFilter("all")}
                className="mt-3 inline-flex min-h-11 items-center text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
