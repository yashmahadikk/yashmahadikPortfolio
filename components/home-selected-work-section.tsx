"use client"

import Link from "next/link"
import { ArrowUpRight, FileText, PanelsTopLeft } from "lucide-react"
import { trackPortfolioEvent } from "@/lib/portfolio-analytics"

const featuredProjects = [
  {
    id: "saleshandy-import-list",
    category: "SALESHANDY · LEAD FINDER",
    title: "Lead Finder — Import List",
    description: "Designed the Import New List experience for teams moving from tools like Apollo, Lusha, or Clay. Users can bring existing prospect data into Saleshandy, match it against Lead Finder, and exclude records they already own from future searches—while reusing imported profiles in their CRM and sequences.",
    href: "/work/saleshandy-import-list",
    prototype: "https://csvelf.vercel.app",
    prd: "/work/saleshandy-import-list/prd",
  },
  {
    id: "saleshandy-email-lookup",
    category: "SALESHANDY · LEAD FINDER",
    title: "Email Lookup",
    description: "Designed an email-based people lookup that matches against Saleshandy's own database of 918 million profiles—without relying on third-party data vendors. The matching approach parses name and company-domain clues, including partial-name patterns with n-gram tokenization, and was reported to reach at least 97% accuracy.",
    href: "/work/saleshandy-email-lookup",
    prototype: "https://emaillookup.vercel.app",
    prd: "/work/saleshandy-email-lookup/prd",
  },
]

export function HomeSelectedWorkSection() {
  return (
    <section className="border-b border-border px-6 py-20 md:py-24">
      <div className="mx-auto max-w-4xl">
        <header className="mb-8">
          <h2 className="mb-3 text-3xl font-semibold text-foreground md:text-4xl">Selected Work</h2>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            A selection of products and features I've worked on, from problem discovery to execution.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <article key={project.id} className="group relative flex h-full flex-col rounded-md border border-border bg-card p-6 transition-colors hover:border-primary/60">
              <Link
                href={project.href}
                aria-label={`Explore project: ${project.title}`}
                onClick={() => trackPortfolioEvent("project_card_click", { project: project.id })}
                className="absolute inset-0 z-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
              <div className="relative z-10 flex flex-1 flex-col gap-4 pointer-events-none">
                <div>
                  <p className="mb-2 text-xs font-semibold tracking-wider text-muted-foreground">{project.category}</p>
                  <h3 className="text-2xl font-serif text-foreground transition-colors group-hover:text-primary">{project.title}</h3>
                </div>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                  <span className="rounded-sm border border-border px-2 py-1">PRD</span>
                  <span className="rounded-sm border border-border px-2 py-1">Prototype</span>
                </div>
                <span className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary">
                  Explore project
                  <ArrowUpRight aria-hidden="true" size={16} />
                </span>
              </div>
              <div className="relative z-20 mt-3 flex flex-wrap gap-x-4 gap-y-2 border-t border-border pt-3">
                <a
                  href={project.prototype}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackPortfolioEvent("prototype_click", { project: project.id })}
                  className="inline-flex min-h-11 items-center gap-1 text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <PanelsTopLeft aria-hidden="true" size={15} /> Prototype
                </a>
                <Link
                  href={project.prd}
                  onClick={() => trackPortfolioEvent("prd_click", { project: project.id })}
                  className="inline-flex min-h-11 items-center gap-1 text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <FileText aria-hidden="true" size={15} /> PRD
                </Link>
              </div>
            </article>
          ))}
        </div>

        <Link href="/work" className="mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          View all work
          <ArrowUpRight aria-hidden="true" size={16} />
        </Link>
      </div>
    </section>
  )
}
