"use client"

import Link from "next/link"
import { ArrowLeft, Scan, Clock, Target, Cpu } from "lucide-react"

export default function MeasureAIProject() {
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
            COMPUTER VISION
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-foreground mb-6 leading-tight">
            MeasureAI - AI Dimension Mapper
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Cutting-edge computer vision solution that transforms customer measurement journeys. Reduced process time from 15 minutes to just 30 seconds, achieving 87% efficiency gain through intelligent automation.
          </p>
        </div>
      </section>

      {/* Visual */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video bg-emerald-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Scan size={80} className="text-emerald-600 mx-auto mb-4" />
              <span className="text-4xl font-bold text-emerald-600/50">MeasureAI</span>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 px-6 bg-emerald-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-5xl font-bold text-primary mb-2">97%</p>
              <p className="text-muted-foreground">Time Reduction</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-primary mb-2">15min</p>
              <p className="text-muted-foreground">To 30 Seconds</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-primary mb-2">87%</p>
              <p className="text-muted-foreground">Efficiency Gain</p>
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
              <Cpu className="text-primary mb-4" size={32} />
              <h3 className="font-bold text-foreground mb-2">Computer Vision</h3>
              <p className="text-muted-foreground">Advanced ML models for accurate real-time dimension detection and measurement.</p>
            </div>
            <div className="flex flex-col items-start">
              <Clock className="text-primary mb-4" size={32} />
              <h3 className="font-bold text-foreground mb-2">Instant Processing</h3>
              <p className="text-muted-foreground">Sub-second measurement results with 99.2% accuracy rate.</p>
            </div>
            <div className="flex flex-col items-start">
              <Target className="text-primary mb-4" size={32} />
              <h3 className="font-bold text-foreground mb-2">Precision Mapping</h3>
              <p className="text-muted-foreground">Millimeter-level accuracy for manufacturing and quality control.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Role */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">My Role</h2>
          <div className="prose prose-lg text-muted-foreground">
            <p>Drove the transformation of a manual measurement process into an AI-powered automated solution, dramatically improving customer experience and operational efficiency.</p>
            <ul className="space-y-2 mt-6">
              <li>Identified the 15-minute bottleneck through customer journey mapping</li>
              <li>Partnered with ML engineers to develop the computer vision model</li>
              <li>Designed the intuitive measurement interface</li>
              <li>Achieved 87% efficiency improvement in first 3 months</li>
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
