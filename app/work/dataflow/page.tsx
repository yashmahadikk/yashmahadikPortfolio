"use client"

import Link from "next/link"
import { ArrowLeft, Workflow, Zap, Database, GitBranch } from "lucide-react"

export default function DataFlowProject() {
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
            DATA AUTOMATION
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-foreground mb-6 leading-tight">
            DataFlow - Enterprise Automation Platform
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            High-performance automation platform architected for large-scale data operations. Achieved 60% faster processing through intelligent pipeline optimization and parallel processing capabilities.
          </p>
        </div>
      </section>

      {/* Visual */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video bg-rose-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Workflow size={80} className="text-rose-600 mx-auto mb-4" />
              <span className="text-4xl font-bold text-rose-600/50">DataFlow</span>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 px-6 bg-rose-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-5xl font-bold text-primary mb-2">60%</p>
              <p className="text-muted-foreground">Faster Processing</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-primary mb-2">10M+</p>
              <p className="text-muted-foreground">Records/Hour</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-primary mb-2">99.9%</p>
              <p className="text-muted-foreground">Uptime SLA</p>
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
              <GitBranch className="text-primary mb-4" size={32} />
              <h3 className="font-bold text-foreground mb-2">Pipeline Optimization</h3>
              <p className="text-muted-foreground">Intelligent workflow routing and automatic bottleneck detection.</p>
            </div>
            <div className="flex flex-col items-start">
              <Zap className="text-primary mb-4" size={32} />
              <h3 className="font-bold text-foreground mb-2">Parallel Processing</h3>
              <p className="text-muted-foreground">Distributed computing architecture for massive throughput.</p>
            </div>
            <div className="flex flex-col items-start">
              <Database className="text-primary mb-4" size={32} />
              <h3 className="font-bold text-foreground mb-2">Large-Scale Ops</h3>
              <p className="text-muted-foreground">Enterprise-grade reliability for mission-critical workloads.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Role */}
      <section className="py-16 px-6 bg-slate-50 dark:bg-slate-900/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">My Role</h2>
          <div className="prose prose-lg text-muted-foreground">
            <p>Led the product strategy for transforming legacy batch processing into a modern, real-time data automation platform.</p>
            <ul className="space-y-2 mt-6">
              <li>Architected the pipeline optimization engine</li>
              <li>Defined SLA requirements and monitoring dashboards</li>
              <li>Managed stakeholder alignment across data and engineering teams</li>
              <li>Delivered 60% performance improvement within 6 months</li>
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
