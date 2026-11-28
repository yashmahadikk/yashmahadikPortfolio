import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { experiences } from "@/lib/experience-data"

type ExperienceDetailPageProps = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: ExperienceDetailPageProps): Promise<Metadata> {
  const { id } = await params
  const experience = experiences.find((item) => item.id === id)

  if (!experience) return { title: "Experience not found | Yash Mahadik" }

  return {
    title: `${experience.company} | Experience | Yash Mahadik`,
    description: `${experience.role} at ${experience.company}. ${experience.description}`,
  }
}

export default async function ExperienceDetailPage({ params }: ExperienceDetailPageProps) {
  const { id } = await params
  const experience = experiences.find((item) => item.id === id)
  if (!experience) notFound()

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="px-6 pb-20 pt-32 md:pb-24">
        <article className="mx-auto max-w-4xl">
          <Link href="/experience" className="mb-10 inline-flex min-h-11 items-center gap-2 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <ArrowLeft aria-hidden="true" size={18} />
            All experience
          </Link>

          <header className="mb-12 border-b border-border pb-10">
            <div className="mb-8 flex items-center gap-5">
              <span className="flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-md border border-border bg-card text-sm font-semibold text-muted-foreground">
                {experience.logo.type === "image" ? (
                  <Image src={experience.logo.src} alt={experience.logo.alt} width={64} height={64} className="size-16 object-contain" unoptimized />
                ) : experience.logo.text}
              </span>
              <div>
                <p className="text-sm text-muted-foreground">{experience.period} · {experience.location}</p>
                <p className="mt-1 font-medium text-foreground">{experience.role}</p>
              </div>
            </div>
            <h1 className="text-balance text-4xl font-semibold text-foreground md:text-5xl">{experience.company}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">{experience.description}</p>
          </header>

          <section aria-labelledby="contributions-heading" className="mb-12">
            <h2 id="contributions-heading" className="mb-5 text-2xl font-semibold text-foreground">What I worked on</h2>
            <ul className="flex flex-col gap-5">
              {experience.responsibilities.map((responsibility) => (
                <li key={responsibility} className="flex gap-3 text-base leading-relaxed text-muted-foreground">
                  <span aria-hidden="true" className="text-foreground">•</span>
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </section>

          {experience.projects?.length ? (
            <section aria-labelledby="projects-heading" className="mb-12 border-t border-border pt-8">
              <h2 id="projects-heading" className="mb-4 text-2xl font-semibold text-foreground">Related product work</h2>
              <div className="flex flex-col divide-y divide-border border-y border-border">
                {experience.projects.map((project) => (
                  <Link key={project.href} href={project.href} className="group flex min-h-14 items-center justify-between gap-4 py-3 text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    <span>{project.label}</span>
                    <ArrowUpRight aria-hidden="true" size={18} className="shrink-0" />
                  </Link>
                ))}
              </div>
            </section>
          ) : null}

          <section aria-labelledby="skills-heading" className="border-t border-border pt-8">
            <h2 id="skills-heading" className="mb-4 text-xl font-semibold text-foreground">Areas of work</h2>
            <p className="leading-relaxed text-muted-foreground">{experience.skills.join(" · ")}</p>
          </section>
        </article>
      </div>
      <Footer />
    </main>
  )
}
