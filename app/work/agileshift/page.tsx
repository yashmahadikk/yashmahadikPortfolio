"use client"

import Link from "next/link"
import { ArrowLeft, Bot, Users, TrendingUp, RefreshCw } from "lucide-react"

export default function AgileShiftProject() {
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
            TRANSFORMATION
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-foreground mb-6 leading-tight">
            AgileShift - Organization Transformation Framework
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Comprehensive Agile transformation framework that successfully transitioned entire organizations. Achieved 100% adoption rate while significantly reducing time-to-market for product releases.
          </p>
        </div>
      </section>

      {/* Visual */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video bg-violet-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Bot size={80} className="text-violet-600 mx-auto mb-4" />
              <span className="text-4xl font-bold text-violet-600/50">AgileShift</span>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 px-6 bg-violet-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-5xl font-bold text-primary mb-2">100%</p>
              <p className="text-muted-foreground">Agile Adoption</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-primary mb-2">40%</p>
              <p className="text-muted-foreground">Reduced TTM</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-primary mb-2">200+</p>
              <p className="text-muted-foreground">Team Members Trained</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">Key Components</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-start">
              <RefreshCw className="text-primary mb-4" size={32} />
              <h3 className="font-bold text-foreground mb-2">Process Redesign</h3>
              <p className="text-muted-foreground">End-to-end workflow transformation from waterfall to iterative delivery.</p>
            </div>
            <div className="flex flex-col items-start">
              <Users className="text-primary mb-4" size={32} />
              <h3 className="font-bold text-foreground mb-2">Cultural Shift</h3>
              <p className="text-muted-foreground">Training programs and change management for sustainable adoption.</p>
            </div>
            <div className="flex flex-col items-start">
              <TrendingUp className="text-primary mb-4" size={32} />
              <h3 className="font-bold text-foreground mb-2">Metrics Framework</h3>
              <p className="text-muted-foreground">OKRs and velocity tracking to measure transformation success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Role */}
      <section className="py-16 px-6 bg-slate-50 dark:bg-slate-900/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">My Role</h2>
          <div className="prose prose-lg text-muted-foreground">
            <p>Spearheaded the organization-wide Agile transformation, creating frameworks, training programs, and measurement systems for sustainable change.</p>
            <ul className="space-y-2 mt-6">
              <li>Designed the phased transformation roadmap</li>
              <li>Created training curriculum for 200+ team members</li>
              <li>Established Agile Centers of Excellence</li>
              <li>Achieved 100% adoption with 40% time-to-market improvement</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Yash Mahaadik. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
