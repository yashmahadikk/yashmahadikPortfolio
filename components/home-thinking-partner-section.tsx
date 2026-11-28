import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HomeThinkingPartnerSection() {
  return (
    <section className="border-b border-border px-5 py-10 lg:px-6 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-6 text-3xl font-semibold text-foreground lg:mb-12 lg:text-4xl">Need a Thinking Partner?</h2>
        
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* 1:1 Sessions */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">1:1 Sessions</h3>
            <p className="text-sm text-muted-foreground mb-6">
              60 min · 1:1 · Free intro call
            </p>
            <p className="text-base text-muted-foreground mb-8 leading-relaxed">
              Bring your roadmap, your ideas, or a problem you can't stop thinking about. We'll work through it together — no fluff, no scripts, just thinking. Perfect for exploring new product directions or validating market hypotheses.
            </p>
            <a
              href="https://calendar.app.google/7XqQhTTXGzGNLyHp9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center rounded bg-foreground px-5 py-3 font-medium text-background transition-colors hover:bg-foreground/90"
            >
              Book a Session
              <ArrowRight size={16} className="ml-2" />
            </a>
          </div>

          {/* Content & Insights */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Product & Strategy Insights</h3>
            <p className="text-sm text-muted-foreground mb-6">
              LinkedIn · 2-3 posts a week
            </p>
            <p className="text-base text-muted-foreground mb-8 leading-relaxed">
              Deep dives into product strategy, market analysis, and frameworks for building products. I share breakdowns of how top companies win in their markets, monetization strategies, and lessons from building AI products.
            </p>
            <a
              href="https://linkedin.com/in/yashmahadik2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center rounded border border-border px-5 py-3 font-medium text-foreground transition-colors hover:border-foreground"
            >
              Follow on LinkedIn
              <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
