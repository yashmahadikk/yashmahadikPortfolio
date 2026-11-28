"use client"

import { useId, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, ChevronDown } from "lucide-react"
import { trackPortfolioEvent } from "@/lib/portfolio-analytics"
import type { Experience } from "@/lib/experience-data"

export function ExperienceAccordion({ experiences }: { experiences: Experience[] }) {
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const panelPrefix = useId()

  return (
    <div className="divide-y divide-border border-y border-border">
      {experiences.map((experience) => {
        const expanded = expandedId === experience.id
        const panelId = `${panelPrefix}-${experience.id}`

        return (
          <article key={experience.id} className="group">
            <button
              type="button"
              aria-expanded={expanded}
              aria-controls={panelId}
              onClick={() => {
                const nextId = expanded ? null : experience.id
                setExpandedId(nextId)
                if (nextId) trackPortfolioEvent("experience_accordion_expand", { company: experience.id })
              }}
              className="flex w-full cursor-pointer items-center gap-4 py-5 text-left transition-colors hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:gap-6"
            >
              <span className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-md border border-border bg-card text-sm font-semibold text-muted-foreground">
                {experience.logo.type === "image" ? (
                  <Image
                    src={experience.logo.src}
                    alt={experience.logo.alt}
                    width={48}
                    height={48}
                    className="size-12 object-contain"
                    unoptimized
                  />
                ) : (
                  experience.logo.text
                )}
              </span>
              <span className="flex min-w-0 flex-1 flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <span className="min-w-0">
                  <span className="block font-semibold text-foreground">{experience.company}</span>
                  <span className="block text-sm text-muted-foreground">{experience.role}</span>
                </span>
                <span className="flex flex-col text-left text-sm text-muted-foreground sm:shrink-0 sm:text-right">
                  <span>{experience.period}</span>
                  <span>{experience.location}</span>
                  <span className="text-xs uppercase tracking-wide">{experience.status}</span>
                </span>
              </span>
              <ChevronDown
                aria-hidden="true"
                size={18}
                className={`shrink-0 text-muted-foreground transition-transform duration-200 motion-reduce:transition-none ${expanded ? "rotate-180" : ""}`}
              />
            </button>

            <div
              id={panelId}
              aria-hidden={!expanded}
              inert={!expanded}
              className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out motion-reduce:transition-none ${expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="min-h-0 overflow-hidden">
                <div className="pb-6 pl-16 pr-4 sm:pl-18 sm:pr-10">
                  <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">{experience.description}</p>
                  <ul className="mt-4 flex flex-col gap-2">
                    {experience.responsibilities.slice(0, 3).map((responsibility) => (
                      <li key={responsibility} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                        <span aria-hidden="true" className="text-foreground">—</span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                  {experience.projects && (
                    <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
                      {experience.projects.map((project) => (
                        <Link
                          key={project.href}
                          href={project.href}
                          onClick={(event) => event.stopPropagation()}
                          className="inline-flex min-h-11 items-center gap-1 text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          {project.label}
                          <ArrowUpRight aria-hidden="true" size={14} />
                        </Link>
                      ))}
                    </div>
                  )}
                  <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{experience.skills.join(" · ")}</p>
                </div>
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}
