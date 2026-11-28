import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ExperienceAccordion } from "./experience-accordion"
import { experiences } from "@/lib/experience-data"

export function HomeExperienceSection() {
  return (
    <section id="experience" className="border-b border-border px-6 py-20 md:py-24 scroll-mt-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-3xl font-semibold text-foreground md:text-4xl">Experience</h2>
        <ExperienceAccordion experiences={experiences} />
        <Link
          href="/experience"
          className="mt-8 inline-flex min-h-11 items-center gap-2 font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          See full experience
          <ArrowRight aria-hidden="true" size={16} />
        </Link>
      </div>
    </section>
  )
}
