'use client'

import { Film, Kanban, Scan, Workflow, Bot, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

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
    metrics: ["100% Adoption", "Agile Transition", "Time-to-Market"],
    bgColor: "bg-violet-100",
  }
]

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-6 pt-32">
        <div className="max-w-6xl mx-auto">
          <p className="text-primary text-sm font-semibold tracking-wider mb-2">WORK</p>
          <h1 className="text-4xl md:text-6xl font-serif italic text-foreground mb-6">
            Strategic Initiatives & Innovation
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A portfolio of transformative projects spanning AI, automation, and organizational transformation. Each project demonstrates strategic vision and execution excellence.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">
            {projects.map((project, index) => {
              const IconComponent = project.icon
              return (
                <div 
                  key={project.id} 
                  className={`grid md:grid-cols-2 gap-8 items-start ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Content Card */}
                  <div className={`${project.bgColor} p-8 md:p-12 rounded-lg ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="flex items-start gap-4 mb-6">
                      <IconComponent size={32} className="text-foreground flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-primary text-xs font-semibold tracking-wider mb-2">
                          {project.category}
                        </p>
                        <h3 className="text-3xl font-serif text-foreground">{project.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{project.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.metrics.map((metric, i) => (
                        <span key={i} className="px-3 py-1 bg-white/50 text-xs font-medium text-foreground rounded-full">
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Details Card */}
                  <div className={`p-8 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2 tracking-wider">PROJECT STATUS</h4>
                        <p className="text-muted-foreground">Active</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2 tracking-wider">IMPACT</h4>
                        <p className="text-muted-foreground">Strategic initiative with significant organizational impact</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
