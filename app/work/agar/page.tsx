"use client"

import Link from "next/link"
import { ArrowLeft, Film, Sparkles, Zap, Play, ArrowUpRight } from "lucide-react"

export default function AgarProject() {
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
            AI ENTERTAINMENT
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-foreground mb-6 leading-tight">
            Agar - AI Movies/Web Series Creation
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Revolutionary AI-powered platform for creating immersive movies and web series. Leveraging generative AI to transform storytelling, enabling creators to produce high-quality visual content at unprecedented speed and scale.
          </p>
          <a
            href="https://canva.link/rwk5uu8nrkfhuu1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors rounded-md"
          >
            View the deck
            <ArrowUpRight size={20} />
          </a>
        </div>
      </section>

      {/* Visual */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video bg-cyan-100 dark:bg-cyan-900/40 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Film size={80} className="text-cyan-600 dark:text-cyan-400 mx-auto mb-4" />
              <span className="text-4xl font-bold text-cyan-600/50 dark:text-cyan-500/50">Agar</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 bg-cyan-50 dark:bg-cyan-900/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-start">
              <Sparkles className="text-primary mb-4" size={32} />
              <h3 className="font-bold text-foreground mb-2">Generative AI</h3>
              <p className="text-muted-foreground">State-of-the-art AI models for script generation, scene composition, and visual storytelling.</p>
            </div>
            <div className="flex flex-col items-start">
              <Play className="text-primary mb-4" size={32} />
              <h3 className="font-bold text-foreground mb-2">Content Creation</h3>
              <p className="text-muted-foreground">End-to-end pipeline from concept to finished video content ready for distribution.</p>
            </div>
            <div className="flex flex-col items-start">
              <Zap className="text-primary mb-4" size={32} />
              <h3 className="font-bold text-foreground mb-2">Visual Storytelling</h3>
              <p className="text-muted-foreground">Cinematic quality output with AI-driven camera angles, lighting, and post-production.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Role */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">My Role</h2>
          <div className="prose prose-lg text-muted-foreground">
            <p>As Product Manager, I led the vision and roadmap for Agar, working closely with AI engineers and creative teams to build a platform that democratizes video content creation.</p>
            <ul className="space-y-2 mt-6">
              <li>Defined product strategy and go-to-market approach</li>
              <li>Led user research to understand creator pain points</li>
              <li>Prioritized features using data-driven decision making</li>
              <li>Coordinated cross-functional teams for delivery</li>
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
