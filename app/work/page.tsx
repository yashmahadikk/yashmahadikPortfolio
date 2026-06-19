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
  {
    id: "agar",
    category: "AI ENTERTAINMENT",
    title: "Agar",
    subtitle: "AI Movies/Web Series Creation",
    description: "Revolutionary AI-powered platform for creating immersive movies and web series.",
    metrics: ["Generative AI", "Content Creation", "Visual Storytelling"],
    bg_color: "bg-cyan-100",
  },
  {
    id: "sprintup",
    category: "AI PRODUCTIVITY",
    title: "SprintUp",
    subtitle: "AI Project Manager",
    description: "Intelligent project management system that unifies workflows across teams.",
    metrics: ["25% Productivity Boost", "Workflow Automation", "Sprint Planning"],
    bg_color: "bg-amber-100",
  },
]

export default function WorkPage() {
  const [projects, setProjects] = useState(defaultProjects)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const supabase = createClient()
        const { data, error } = await supabase
          .from('work_projects')
          .select('*')
          .order('created_at', { ascending: false })

        if (error) {
          console.error('Error fetching work projects:', error)
          setProjects(defaultProjects)
        } else if (data && data.length > 0) {
          setProjects(data)
        } else {
          setProjects(defaultProjects)
        }
      } catch (error) {
        console.error('Error:', error)
        setProjects(defaultProjects)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
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
                  <span className="text-3xl flex-shrink-0">{iconMap[project.category]?.() || '📌'}</span>
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
