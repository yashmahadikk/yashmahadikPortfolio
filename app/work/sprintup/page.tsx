"use client"

import Link from "next/link"
import { ArrowLeft, Kanban, Brain, BarChart3, Users } from "lucide-react"

export default function SprintUpProject() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link href="/#work" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft size={18} />
            Back to Portfolio
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary text-sm font-semibold tracking-wider mb-4">
            AI PRODUCTIVITY
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-foreground mb-6 leading-tight">
            SprintUp - AI Project Manager
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Intelligent project management system that unifies workflows across teams. AI-driven sprint planning, automated task allocation, and predictive analytics to keep projects on track and teams aligned.
          </p>
        </div>
      </section>

      {/* Visual */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video bg-amber-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Kanban size={80} className="text-amber-600 mx-auto mb-4" />
              <span className="text-4xl font-bold text-amber-600/50">SprintUp</span>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 px-6 bg-amber-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-5xl font-bold text-primary mb-2">25%</p>
              <p className="text-muted-foreground">Productivity Boost</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-primary mb-2">40%</p>
              <p className="text-muted-foreground">Faster Sprint Planning</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-primary mb-2">60%</p>
              <p className="text-muted-foreground">Reduced Manual Updates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-start">
              <Brain className="text-primary mb-4" size={32} />
              <h3 className="font-bold text-foreground mb-2">AI Sprint Planning</h3>
              <p className="text-muted-foreground">Automatic story point estimation and sprint capacity planning based on historical velocity.</p>
            </div>
            <div className="flex flex-col items-start">
              <BarChart3 className="text-primary mb-4" size={32} />
              <h3 className="font-bold text-foreground mb-2">Predictive Analytics</h3>
              <p className="text-muted-foreground">Real-time burndown predictions and risk alerts for potential blockers.</p>
            </div>
            <div className="flex flex-col items-start">
              <Users className="text-primary mb-4" size={32} />
              <h3 className="font-bold text-foreground mb-2">Team Alignment</h3>
              <p className="text-muted-foreground">Unified dashboard for cross-functional visibility and dependency tracking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Role */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">My Role</h2>
          <div className="prose prose-lg text-muted-foreground">
            <p>Led product development from concept to launch, focusing on making AI-powered project management accessible to teams of all sizes.</p>
            <ul className="space-y-2 mt-6">
              <li>Conducted extensive user research with 50+ engineering teams</li>
              <li>Designed the AI recommendation engine architecture</li>
              <li>Built Project Management Dashboard</li>
              <li>Achieved 25% productivity improvement in pilot programs</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Yash Mahadik. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
