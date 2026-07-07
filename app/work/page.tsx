'use client'

import { ArrowUpRight, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"

// Icon mapping
const iconMap: any = {
  Film: () => <span>🎬</span>,
  Kanban: () => <span>📊</span>,
  Scan: () => <span>📏</span>,
  Workflow: () => <span>⚙️</span>,
  Bot: () => <span>🤖</span>,
  Package: () => <span>📦</span>,
}

const defaultProjects = [
  // {
  //   project_id: "investor-database",
  //   category: "BONUS PROJECT",
  //   title: "Investor Database",
  //   subtitle: "Curated Funding Resource",
  //   description: "A comprehensive database of 90+ investors across India, International, and Southeast Asia. Created as a shared resource for founders seeking funding. Features searchable data, region filtering, stage preferences, and investment thesis matching.",
  //   metrics: ["90+ Investors", "3 Regions", "Open Resource"],
  //   bg_color: "bg-indigo-50",
  // },
  {
    project_id: "agar",
    category: "AI ENTERTAINMENT",
    title: "Agar",
    subtitle: "AI Movies/Web Series Creation",
    description: "AGAR converts passive streaming consumers — the 1.5 billion people on Netflix, YouTube, and Amazon Prime — into directors of personalized AI-generated films. You select your vibe, story direction, and world. AGAR generates a film made entirely for you. No camera. No crew. No studio.",
    metrics: ["Generative AI", "Content Creation", "Visual Storytelling"],
    bg_color: "bg-cyan-50",
  },
  {
    project_id: "sprintup",
    category: "AI PRODUCTIVITY",
    title: "SprintUp",
    subtitle: "AI Project Manager",
    description: "An autonomous AI project manager that eliminates the overhead of human-run project management cycles. SprintUp chases task updates, pings team members, creates and updates tasks, sets priorities, documents meetings, generates minutes, assigns tasks to the right person — then repeats the loop automatically.",
    metrics: ["25% Productivity Boost", "Workflow Automation", "Sprint Planning"],
    bg_color: "bg-amber-50",
  },
  {
    project_id: "measureai",
    category: "COMPUTER VISION",
    title: "MeasureAI",
    subtitle: "AI Dimension Mapper",
    description: "An AI-powered dimension mapping tool that captures up to 12 measurements in under 10 seconds — reducing a 15-minute manual measurement journey to a single scan. Built for furniture and retail, eliminating sizing errors and reducing return rates at scale.",
    metrics: ["87% Efficiency Gain", "Computer Vision", "Sub-10 Sec"],
    bg_color: "bg-emerald-50",
  },
  {
    project_id: "dataflow",
    category: "DATA AUTOMATION",
    title: "DataFlow",
    subtitle: "Enterprise Automation Platform",
    description: "High-performance automation platform built for large-scale data operations in the IT & finance sector. Achieved 60% faster processing through intelligent pipeline optimisation and parallel processing architecture.",
    metrics: ["60% Faster", "Large-Scale Ops", "Pipeline Optimization"],
    bg_color: "bg-rose-50",
  },
  {
    project_id: "agileshift",
    category: "TRANSFORMATION",
    title: "AgileShift",
    subtitle: "Organization Transformation Framework",
    description: "Comprehensive Agile transformation framework that successfully transitioned entire organizations. Achieved 100% adoption rate while significantly reducing time-to-market for product releases.",
    metrics: ["100% Adoption", "50-Person Org", "15-Week Rollout"],
    bg_color: "bg-violet-50",
  },
  {
    project_id: "electronic-soundbook",
    category: "PHYSICAL PRODUCT",
    title: "Electronic Soundbook",
    subtitle: "Screen-Free Learning for Toddlers",
    description: "A product development journey building a screen-free alternative to smartphones for toddlers across five global markets. Zero redesigns post-DVT, multi-language support, and compliance across US, EU, UK, GCC, and India markets.",
    metrics: ["$7 COGS", "5 Markets", "85% Parent Satisfaction Rate"],
    bg_color: "bg-teal-50",
  },
]

export default function WorkPage() {
  const [projects, setProjects] = useState(defaultProjects)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setProjects(defaultProjects)
    setLoading(false)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-6 pt-32">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8">
            <ArrowLeft size={18} className="mr-2" />
            Back
          </Link>
          <p className="text-primary text-sm font-semibold tracking-wider mb-2">WORK</p>
          <h1 className="text-4xl md:text-6xl font-serif italic text-foreground mb-6">
            Selected Work
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            A showcase of projects I've built and led. From product strategy to execution, focusing on impact and innovation.
          </p>
        </div>
      </section>

      {/* Work Grid */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        {loading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading projects...</p>
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects yet.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project: any) => (
              <Link
                key={project.project_id || project.id}
                href={`/work/${project.project_id || project.id}`}
                className={`${project.bg_color} dark:bg-card p-8 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group`}
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-1">
                    <p className="text-primary text-xs font-semibold tracking-wider mb-1">
                      {project.category}
                    </p>
                    <h3 className="text-2xl font-serif text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{project.subtitle}</p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.metrics?.map((metric: string, i: number) => (
                    <span key={i} className="px-2 py-1 bg-white/60 dark:bg-white/10 text-xs font-medium text-foreground rounded">
                      {metric}
                    </span>
                  ))}
                </div>

                <div className="inline-flex items-center text-primary font-medium group-hover:underline underline-offset-2">
                  View Project
                  <ArrowUpRight size={16} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </main>
  )
}
