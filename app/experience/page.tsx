import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ExperienceAccordion } from "@/components/experience-accordion"
import { experiences } from "@/lib/experience-data"

export const metadata = {
  title: "Experience | Yash Mahadik",
  description: "My professional experience in product management and operations.",
}

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="px-6 pb-20 pt-32 md:pb-24">
        <div className="mx-auto max-w-4xl">
          <Link href="/" className="mb-8 inline-flex min-h-11 items-center gap-2 text-primary transition-colors hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <ArrowLeft aria-hidden="true" size={18} />
            Back to Home
          </Link>

          <header className="mb-10">
            <h1 className="mb-4 text-4xl font-semibold text-foreground md:text-5xl">Experience</h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              My professional journey in product management, strategy, and operations.
            </p>
          </header>

          <ExperienceAccordion experiences={experiences} />
        </div>
      </div>
      <Footer />
    </main>
  )
}
