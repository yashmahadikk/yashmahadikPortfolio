"use client"

import { Film, Kanban, Scan, Workflow, Bot, Package } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: "agar",
    category: "AI ENTERTAINMENT",
    title: "Agar",
    subtitle: "AI Movies/Web Series Creation",
    description: "Revolutionary AI-powered platform for creating immersive movies and web series. Leveraging generative AI to transform storytelling, enabling creators to produce high-quality visual content at unprecedented speed and scale.",
    icon: Film,
    metrics: ["Generative AI", "Content Creation", "Visual Storytelling"],
    bgColor: "bg-cyan-100",
    pptLink: "https://canva.link/rwk5uu8nrkfhuu1",
  },
  {
    id: "sprintup",
    category: "AI PRODUCTIVITY",
    title: "SprintUp",
    subtitle: "AI Project Manager",
    description: "Intelligent project management system that unifies workflows across teams. AI-driven sprint planning, automated task allocation, and predictive analytics to keep projects on track and teams aligned.",
    icon: Kanban,
    metrics: ["25% Productivity Boost", "Workflow Automation", "Sprint Planning"],
    bgColor: "bg-amber-100",
  },
  {
    id: "measureai",
    category: "COMPUTER VISION",
    title: "MeasureAI",
    subtitle: "AI Dimension Mapper",
    description: "Cutting-edge computer vision solution that transforms customer measurement journeys. Reduced process time from 15 minutes to just 30 seconds, achieving 87% efficiency gain through intelligent automation.",
    icon: Scan,
    metrics: ["15min to 30sec", "Computer Vision", "87% Efficiency"],
    bgColor: "bg-emerald-100",
  },
  {
    id: "dataflow",
    category: "DATA AUTOMATION",
    title: "DataFlow",
    subtitle: "Enterprise Automation Platform",
    description: "High-performance automation platform architected for large-scale data operations. Achieved 60% faster processing through intelligent pipeline optimization and parallel processing capabilities.",
    icon: Workflow,
    metrics: ["60% Faster", "Large-Scale Ops", "Pipeline Optimization"],
    bgColor: "bg-rose-100",
  },
  {
    id: "agileshift",
    category: "TRANSFORMATION",
    title: "AgileShift",
    subtitle: "Organization Transformation Framework",
    description: "Comprehensive Agile transformation framework that successfully transitioned entire organizations. Achieved 100% adoption rate while significantly reducing time-to-market for product releases.",
    icon: Bot,
    metrics: ["100% Adoption", "Reduced TTM", "Cultural Shift"],
    bgColor: "bg-violet-100",
  },
  {
    id: "electronic-soundbook",
    category: "PHYSICAL PRODUCT",
    title: "Electronic Soundbook",
    subtitle: "Screen-Free Learning for Toddlers",
    description: "A product development journey building a screen-free alternative to smartphones for toddlers across five global markets. Zero redesigns post-DVT, multi-language support, and compliance across US, EU, UK, GCC, and India markets.",
    icon: Package,
    metrics: ["$7 COGS", "5 Markets", "85% PSR"],
    bgColor: "bg-teal-100",
    pptLink: "https://canva.link/5pkm57zpt9t04qt",
  },
]

export function PortfolioSection() {
  return (
    <section id="work" className="py-24 px-6 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 right-10 w-64 h-64 opacity-5 pointer-events-none hidden md:block">
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
                className={`${project.bgColor} p-8 rounded-lg h-full flex flex-col justify-between hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group`}
              >
                {/* Header */}
                <div className="mb-4">
                  <div className="flex items-start gap-3 mb-4">
                    <Icon size={28} className="text-foreground flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="text-primary text-xs font-semibold tracking-wider mb-1">
                        {project.category}
                      </p>
                      <h3 className="text-xl font-serif text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{project.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-black/10 mb-4">
                  {project.metrics.map((metric, i) => (
                    <span key={i} className="px-2 py-1 bg-white/60 text-xs font-medium text-foreground rounded">
                      {metric}
                    </span>
                  ))}
                </div>

                {/* Learn More Link */}
                <div className="pt-4 border-t border-black/10">
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
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
