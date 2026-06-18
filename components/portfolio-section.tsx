"use client"

import { Film, Kanban, Scan, Workflow, Bot, Package } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: "agar",
    category: "AI ENTERTAINMENT",
    title: "Agar",
    subtitle: "AI Movies/Web Series Creation",
    description: "AGAR converts passive streaming consumers — the 1.5 billion people on Netflix, YouTube, and Amazon Prime — into directors of personalized AI-generated films. You select your vibe, story direction, and world. AGAR generates a film made entirely for you. No camera. No crew. No studio.",
    icon: Film,
    metrics: ["Generative AI", "Content Creation", "Visual Storytelling"],
    bgColor: "bg-cyan-100",
    company: "Devanagari Ventures",
    status: "MVP in Development",
    pptLink: "https://canva.link/rwk5uu8nrkfhuu1",
    waitlistLink: "https://forms.gle/YH1cJnupbnoYiS1BA",
  },
  {
    id: "sprintup",
    category: "AI PRODUCTIVITY",
    title: "SprintUp",
    subtitle: "AI Project Manager",
    description: "An autonomous AI project manager that eliminates the overhead of human-run project management cycles. SprintUp chases task updates, pings team members, creates and updates tasks, sets priorities, documents meetings, generates minutes, assigns tasks to the right person — then repeats the loop automatically. Shut down after ClickUp replicated core features and made them free.",
    icon: Kanban,
    metrics: ["25% Productivity Boost", "Workflow Automation", "Sprint Planning"],
    bgColor: "bg-amber-100",
    company: "Devanagari Ventures",
    statusTag: "Shut down · ClickUp replicated core feature and went free",
  },
  {
    id: "measureai",
    category: "COMPUTER VISION",
    title: "MeasureAI",
    subtitle: "AI Dimension Mapper",
    description: "An AI-powered dimension mapping tool that captures up to 12 measurements in under 10 seconds — reducing a 15-minute manual measurement journey to a single scan. Built for furniture and retail, eliminating sizing errors and reducing return rates at scale.",
    icon: Scan,
    metrics: ["87% Efficiency Gain", "Computer Vision", "Sub-10 Sec"],
    bgColor: "bg-emerald-100",
    company: "Devanagari Ventures",
  },
  {
    id: "dataflow",
    category: "DATA AUTOMATION",
    title: "DataFlow",
    subtitle: "Enterprise Automation Platform",
    description: "High-performance automation platform built for large-scale data operations in the IT & finance sector. Achieved 60% faster processing through intelligent pipeline optimisation and parallel processing architecture.",
    icon: Workflow,
    metrics: ["60% Faster", "Large-Scale Ops", "Pipeline Optimization"],
    bgColor: "bg-rose-100",
    company: "Devanagari Ventures",
  },
  {
    id: "agileshift",
    category: "TRANSFORMATION",
    title: "AgileShift",
    subtitle: "Organization Transformation Framework",
    description: "Comprehensive Agile transformation framework that successfully transitioned entire organizations. Achieved 100% adoption rate while significantly reducing time-to-market for product releases.",
    icon: Bot,
    metrics: ["100% Adoption", "50-Person Org", "15-Week Rollout"],
    bgColor: "bg-violet-100",
    company: "QAI",
  },
  {
    id: "electronic-soundbook",
    category: "PHYSICAL PRODUCT",
    title: "Electronic Soundbook",
    subtitle: "Screen-Free Learning for Toddlers",
    description: "A product development journey building a screen-free alternative to smartphones for toddlers across five global markets. Zero redesigns post-DVT, multi-language support, and compliance across US, EU, UK, GCC, and India markets.",
    icon: Package,
    metrics: ["$7 COGS", "5 Markets", "85% Parent Satisfaction Rate"],
    bgColor: "bg-teal-100",
    company: "Funspire",
    pptLink: "https://canva.link/5pkm57zpt9t04qt",
  },
]

export function PortfolioSection() {
  return (
    <section id="work" className="py-24 px-6 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 right-10 w-64 h-64 opacity-5 dark:opacity-3 pointer-events-none hidden md:block">
        <img 
          src="/illustrations/growth-abstract.png" 
          alt="" 
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-12">
          <p className="text-primary text-sm font-semibold tracking-wider mb-2">WORK</p>
          <h2 className="text-4xl md:text-6xl font-serif italic text-foreground mb-6">
            Products I have Built
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A portfolio of transformative projects spanning AI, automation, and organizational transformation. Each project demonstrates strategic vision and execution excellence.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const Icon = project.icon
            return (
              <Link
                key={project.id}
                href={project.id === "electronic-soundbook" ? `/case-studies/electronic-soundbook` : `/work/${project.id}`}
                className={`${project.bgColor} dark:bg-card p-8 rounded-lg h-full flex flex-col justify-between hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group`}
              >
                {/* Header */}
                <div className="mb-4">
                  <div className="flex items-start gap-3 mb-4">
                    <Icon size={28} className="text-foreground flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                    <div className="flex-1">
                      <p className="text-primary text-xs font-semibold tracking-wider mb-1">
                        {project.category}
                      </p>
                      <h3 className="text-xl font-serif text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{project.subtitle}</p>
                      {project.company && (
                        <p className="text-xs text-muted-foreground mt-2 font-medium">for {project.company}</p>
                      )}
                      {project.status && (
                        <p className="text-xs text-primary mt-2 font-semibold">{project.status}</p>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-black/10 dark:border-white/10 mb-4">
                  {project.metrics.map((metric, i) => (
                    <span key={i} className="px-2 py-1 bg-white/60 dark:bg-white/10 text-xs font-medium text-foreground rounded">
                      {metric}
                    </span>
                  ))}
                  {project.statusTag && (
                    <span className="px-2 py-1 bg-amber-200/40 dark:bg-amber-900/30 text-xs font-medium text-foreground rounded">
                      {project.statusTag}
                    </span>
                  )}
                </div>

                {/* Learn More Link */}
                <div className="pt-4 border-t border-black/10 dark:border-white/10">
                  <span className="inline-flex items-center text-primary font-medium group-hover:underline underline-offset-2 text-sm">
                    Learn more
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">&gt;</span>
                  </span>
                </div>
                {project.pptLink && (
                  <div className="pt-3">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(project.pptLink, '_blank')
                      }}
                      className="inline-flex items-center text-primary font-medium hover:underline underline-offset-2 text-sm bg-transparent border-0 cursor-pointer p-0 appearance-none"
                    >
                      View the deck
                      <span className="ml-2">&gt;</span>
                    </button>
                  </div>
                )}
                {project.waitlistLink && (
                  <div className="pt-3">
                    <a
                      href={project.waitlistLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary font-medium hover:underline underline-offset-2 text-sm"
                    >
                      Join Waitlist
                      <span className="ml-2">→</span>
                    </a>
                  </div>
                )}
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
