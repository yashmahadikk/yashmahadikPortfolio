"use client"

import Link from "next/link"
import { ArrowLeft, ArrowUpRight, Clock, Target, Zap, CheckCircle } from "lucide-react"

export default function AmazonPrimeCaseStudy() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 md:py-4">
          <Link href="/#case-studies" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm md:text-base">
            <ArrowLeft size={16} className="md:w-5 md:h-5" />
            <span className="hidden sm:inline">Back to Portfolio</span>
            <span className="sm:hidden">Back</span>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-20 md:pt-32 pb-12 md:pb-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary text-xs md:text-sm font-semibold tracking-wider mb-3 md:mb-4">
            AMAZON PRIME VIDEO | CONTENT DISCOVERY
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif italic text-foreground mb-4 md:mb-6 leading-tight">
            From 15 Minutes to 30 Seconds: Cutting Decision Fatigue in Streaming
          </h1>
          <p className="text-sm md:text-xl text-muted-foreground leading-relaxed mb-6 md:mb-8">
            A deep dive into reducing friction in Amazon Prime Video&apos;s content discovery experience. This case study explores how AI-powered personalization and streamlined UX can transform the way users find what to watch.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://canva.link/3wroonm1t092k4x"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-primary text-primary-foreground font-semibold text-sm md:text-base hover:bg-primary/90 transition-colors rounded-md"
            >
              View Full Deck & MVP
              <ArrowUpRight size={16} className="md:w-[18px] md:h-[18px]" />
            </a>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-amber-50 dark:bg-amber-900/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6 md:mb-8">The Problem</h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="flex flex-col items-start">
              <Clock className="text-primary mb-3 md:mb-4" size={28} />
              <h3 className="font-bold text-foreground mb-1 md:mb-2 text-sm md:text-base">15 Minutes Wasted</h3>
              <p className="text-xs md:text-sm text-muted-foreground">Average time users spend browsing before making a selection - often leading to abandonment.</p>
            </div>
            <div className="flex flex-col items-start">
              <Target className="text-primary mb-3 md:mb-4" size={28} />
              <h3 className="font-bold text-foreground mb-1 md:mb-2 text-sm md:text-base">Decision Fatigue</h3>
              <p className="text-xs md:text-sm text-muted-foreground">Overwhelming content catalog with no clear path to discovery creates cognitive overload.</p>
            </div>
            <div className="flex flex-col items-start">
              <Zap className="text-primary mb-3 md:mb-4" size={28} />
              <h3 className="font-bold text-foreground mb-1 md:mb-2 text-sm md:text-base">Missed Engagement</h3>
              <p className="text-xs md:text-sm text-muted-foreground">Users often give up and switch platforms rather than continue searching.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6 md:mb-8">My Approach</h2>
          <div className="space-y-4 md:space-y-6">
            {[
              {
                step: "01",
                title: "User Journey Analysis",
                description: "Mapped the complete content discovery journey, identifying key friction points and drop-off moments in the user experience."
              },
              {
                step: "02",
                title: "Competitive Benchmarking",
                description: "Analyzed Netflix, Disney+, and HBO Max to understand best practices in content recommendation and UI patterns."
              },
              {
                step: "03",
                title: "AI Recommendation Engine Design",
                description: "Proposed improvements to the recommendation algorithm incorporating viewing history, time of day, and mood-based suggestions."
              },
              {
                step: "04",
                title: "Streamlined UX Prototype",
                description: "Designed a simplified browsing experience with smart filters, quick previews, and personalized carousels."
              }
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <span className="text-4xl font-bold text-primary/20">{item.step}</span>
                <div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Results */}
      <section className="py-16 px-6 bg-slate-50 dark:bg-slate-900/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">Projected Impact</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-card p-8 rounded-lg shadow-sm">
              <p className="text-5xl font-bold text-primary mb-2">97%</p>
              <p className="text-muted-foreground">Reduction in decision time (15 min to 30 sec)</p>
            </div>
            <div className="bg-white dark:bg-card p-8 rounded-lg shadow-sm">
              <p className="text-5xl font-bold text-primary mb-2">40%</p>
              <p className="text-muted-foreground">Increase in content engagement projected</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Contributions */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">Key Contributions</h2>
          <ul className="space-y-4">
            {[
              "Analyzed user journey pain points in content selection",
              "Proposed AI-driven recommendation engine improvements",
              "Designed streamlined browsing experience reducing decision time by 97%",
              "Created MVP prototype for enhanced discovery flow"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Want to see the full case study?</h2>
          <p className="text-muted-foreground mb-8">Follow this link to see the complete deck and MVP prototype.</p>
          <a
            href="https://canva.link/3wroonm1t092k4x"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors rounded-md"
          >
            View Deck & MVP
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-serif italic text-foreground mb-6">
            Interested in discussing this strategy?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <Link
              href="/#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-primary text-primary-foreground font-semibold text-sm md:text-base hover:bg-primary/90 transition-colors rounded-md"
            >
              Get In Touch
            </Link>
            <Link
              href="/#case-studies"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-transparent text-foreground font-semibold text-sm md:text-base border border-border rounded-md hover:border-primary hover:text-primary transition-colors"
            >
              View More Case Studies
            </Link>
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
