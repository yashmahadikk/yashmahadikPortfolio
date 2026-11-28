import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import type { Experience } from "@/lib/experience-data"

export function ExperienceAccordion({ experiences }: { experiences: Experience[] }) {
  return (
    <div className="divide-y divide-border border-y border-border">
      {experiences.map((experience) => (
        <article key={experience.id} className="py-5">
          <Link
            href={`/experience/${experience.id}`}
            className="group flex min-h-14 items-center gap-4 rounded-sm text-left transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:gap-6"
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
                <span className="block font-semibold text-foreground group-hover:text-primary">{experience.company}</span>
                <span className="block text-sm text-muted-foreground">{experience.role}</span>
              </span>
              <span className="flex flex-col text-left text-sm text-muted-foreground sm:shrink-0 sm:text-right">
                <span>{experience.period}</span>
                <span>{experience.location}</span>
              </span>
            </span>
            <ArrowUpRight aria-hidden="true" size={18} className="shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
          </Link>
          {experience.projects?.length ? (
            <div className="ml-16 mt-3 flex flex-wrap gap-x-5 gap-y-2 sm:ml-18">
              {experience.projects.map((project) => (
                <Link
                  key={project.href}
                  href={project.href}
                  className="inline-flex min-h-11 items-center gap-1 text-sm text-muted-foreground underline-offset-4 hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {project.label}
                  <ArrowUpRight aria-hidden="true" size={14} />
                </Link>
              ))}
            </div>
          ) : null}
        </article>
      ))}
    </div>
  )
}
