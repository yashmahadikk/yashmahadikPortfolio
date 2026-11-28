import Link from "next/link"
import { BookOpen, Zap, CheckSquare, Globe, Briefcase, Code } from "lucide-react"

export function HomeExploreSection() {
  const items = [
    {
      icon: BookOpen,
      title: "My Journey",
      description: "Overview of my learning and career journey.",
      href: "/journey"
    },

    {
      icon: Zap,
      title: "Tools & Software",
      description: "Tools and software I use daily.",
      href: "/tools"
    },
    {
      icon: Briefcase,
      title: "Work",
      description: "Things I've built and shipped.",
      href: "/work"
    },
    {
      icon: CheckSquare,
      title: "Bucket List",
      description: "Things I want to do, become, and build.",
      href: "/bucket-list"
    },
    {
      icon: Globe,
      title: "Curated Links",
      description: "Interesting resources and things I find valuable.",
      href: "/curated-links"
    },
    {
      icon: Code,
      title: "Case Studies",
      description: "In-depth analysis of products and strategies.",
      href: "/case-studies"
    }
  ]

  return (
    <section className="border-b border-border px-5 py-10 lg:px-6 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-6 text-3xl font-semibold text-foreground lg:mb-12 lg:text-4xl">Explore</h2>
        
        <div className="grid grid-cols-2 gap-4 md:grid-cols-2 md:gap-6">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <Link key={item.href} href={item.href} className="group">
                <div className="h-full rounded-lg border border-border bg-card/30 p-4 transition-colors hover:border-primary hover:bg-card/50 lg:p-6">
                  <Icon size={20} className="mb-3 text-primary lg:mb-4 lg:size-6" />
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="hidden text-sm text-muted-foreground lg:block">
                    {item.description}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
