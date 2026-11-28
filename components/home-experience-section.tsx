import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ExperienceAccordion } from "./experience-accordion"
import { experiences } from "@/lib/experience-data"

export function HomeExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-20 border-b border-border px-5 py-10 lg:scroll-mt-24 lg:px-6 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-6 text-3xl font-semibold text-foreground lg:mb-8 lg:text-4xl">Experience</h2>
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
