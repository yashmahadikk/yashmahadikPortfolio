"use client"

import Link from "next/link"
import { ArrowUpRight, FileText, PanelsTopLeft } from "lucide-react"
import { trackPortfolioEvent } from "@/lib/portfolio-analytics"

export function SaleshandyFeatureActions({
  prototypeUrl,
  prdUrl,
  project,
}: {
  prototypeUrl: string
  prdUrl: string
  project: string
}) {
  return (
    <aside className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6">
      <h2 className="mb-2 text-lg font-semibold text-foreground">Explore the work</h2>
      <a
        href={prototypeUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackPortfolioEvent("prototype_click", { project })}
        className="inline-flex min-h-11 items-center justify-between gap-3 rounded-xl border border-border px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <span className="inline-flex items-center gap-2"><PanelsTopLeft aria-hidden="true" size={17} /> Open prototype</span>
        <ArrowUpRight aria-hidden="true" size={16} />
      </a>
      <Link
        href={prdUrl}
        onClick={() => trackPortfolioEvent("prd_click", { project })}
        className="inline-flex min-h-11 items-center justify-between gap-3 rounded-xl bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <span className="inline-flex items-center gap-2"><FileText aria-hidden="true" size={17} /> Read full PRD</span>
        <ArrowUpRight aria-hidden="true" size={16} />
      </Link>
    </aside>
  )
}
