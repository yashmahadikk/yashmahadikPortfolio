'use client'

import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

interface CaseStudy {
  id?: string
  slug?: string
  title: string
  description: string
  bg_color?: string
  bgColor?: string
  link?: string
  category: string
}

interface CaseStudiesGridProps {
  caseStudiesByCategory: Record<string, CaseStudy[]>
  categoryLabels: Record<string, string>
}

export function CaseStudiesPageClient({ caseStudiesByCategory, categoryLabels }: CaseStudiesGridProps) {
  return (
    <section className="px-6 pb-24">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* How I Work Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-serif mb-8 text-foreground">
            How I Work
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/case-studies/how-i-work"
              className="bg-indigo-50 dark:bg-indigo-950/20 group p-8 rounded-lg h-full flex flex-col justify-between hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="mb-4">
                <h3 className="text-xl font-serif text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-3">
                  Rapid Prototyping: How I Turn Ideas Into Working Tools with AI
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  My repeatable process for building prototypes in an afternoon using version-by-version iteration, real data from message one, and logic before polish.
                </p>
              </div>
              <div className="flex items-center text-primary font-medium group-hover:underline underline-offset-2 text-sm">
                View Case Study
                <span className="ml-2 group-hover:translate-x-1 transition-transform">
                  <ArrowUpRight size={18} />
                </span>
              </div>
            </Link>
          </div>
        </div>

          {/* Product Journey and Other Case Studies */}
          {Object.entries(caseStudiesByCategory).map(([category, studies]) => (
            <div key={category}>
              <h2 className="text-2xl md:text-3xl font-serif mb-8 text-foreground">
                {categoryLabels[category] || category}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {studies.map((study) => (
                  <Link
                    key={study.id || study.slug}
                    href={study.link || `/case-studies/${study.slug}`}
                    className={`${study.bg_color || study.bgColor} group p-8 rounded-lg h-full flex flex-col justify-between hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer`}
                  >
                    <div className="mb-4">
                      <h3 className="text-xl font-serif text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-3">
                        {study.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {study.description}
                      </p>
                    </div>
                    <div className="flex items-center text-primary font-medium group-hover:underline underline-offset-2 text-sm">
                      Read case study
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">
                        <ArrowUpRight size={18} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    )
}
