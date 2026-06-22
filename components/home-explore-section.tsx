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
    <section className="py-24 md:py-32 px-6 border-b border-border">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-12">Explore</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <Link key={item.href} href={item.href} className="group">
                <div className="p-6 rounded-lg border border-border hover:border-primary transition-colors hover:bg-card/50 h-full bg-card/30">
                  <Icon size={24} className="text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
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
