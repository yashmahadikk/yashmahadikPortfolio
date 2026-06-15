import Link from "next/link"
import { ArrowLeft, Target, TrendingUp, Users, Lock, Zap, Globe, BarChart3 } from "lucide-react"

export const metadata = {
  title: "Figma Market Analysis | Yash Mahadik",
  description: "Market Case Study: How Figma Captured the Design Tools Market - Strategic Analysis"
}

export default function FigmaCaseStudyPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link href="/#case-studies" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft size={18} />
            Back to Case Studies
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary text-sm font-semibold tracking-wider mb-4">FIGMA | DESIGN TOOLS</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-foreground mb-6 leading-tight">
            From Free Tools to Enterprise: How Figma Captured the Design Market
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Strategic market analysis of Figma's competitive positioning, pricing strategy, and network effects that transformed the $50B+ design tools landscape.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-pink-100 px-4 py-2 rounded-md">
              <span className="text-pink-700 font-semibold">$10B Valuation</span>
            </div>
            <div className="bg-purple-100 px-4 py-2 rounded-md">
              <span className="text-purple-700 font-semibold">4M+ Users</span>
            </div>
            <div className="bg-blue-100 px-4 py-2 rounded-md">
              <span className="text-blue-700 font-semibold">$200M+ ARR</span>
            </div>
          </div>
        </div>
      </section>

      {/* Context */}
      <section className="py-16 px-6 bg-pink-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-foreground mb-8">Market Context</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-foreground mb-4">The Problem Figma Solved</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Target className="text-primary flex-shrink-0 mt-0.5" size={16} />
                  <span>Design tools were expensive and desktop-only (Sketch, Adobe)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Users className="text-primary flex-shrink-0 mt-0.5" size={16} />
                  <span>Collaboration required manual file sharing and versions</span>
                </li>
                <li className="flex items-start gap-2">
                  <Globe className="text-primary flex-shrink-0 mt-0.5" size={16} />
                  <span>Remote teams had fragmented design processes</span>
                </li>
                <li className="flex items-start gap-2">
                  <Lock className="text-primary flex-shrink-0 mt-0.5" size={16} />
                  <span>Design systems weren't accessible to entire teams</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-foreground mb-4">Figma's Competitive Advantages</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Zap className="text-primary flex-shrink-0 mt-0.5" size={16} />
                  <span>Cloud-native: Real-time collaboration from day one</span>
                </li>
                <li className="flex items-start gap-2">
                  <Globe className="text-primary flex-shrink-0 mt-0.5" size={16} />
                  <span>Browser-based: No installation, works everywhere</span>
                </li>
                <li className="flex items-start gap-2">
                  <Users className="text-primary flex-shrink-0 mt-0.5" size={16} />
                  <span>Multiplayer editing: Teams work together in real-time</span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="text-primary flex-shrink-0 mt-0.5" size={16} />
                  <span>Developer tools: Plugins, APIs, and integrations ecosystem</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-foreground mb-4">Market Share Evolution (Design Tools)</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold text-pink-600">32%</p>
                <p className="text-sm text-muted-foreground">Figma</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-orange-500">28%</p>
                <p className="text-sm text-muted-foreground">Sketch</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-400">40%</p>
                <p className="text-sm text-muted-foreground">Adobe XD / Others</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-foreground mb-8">Strategic Positioning</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">1. Pricing Strategy</h3>
              <p className="text-muted-foreground mb-4">
                Figma's freemium model was revolutionary—offering unlimited files for a single editor, making it accessible to individual designers and startups. This created a network effect where millions of designers learned Figma, making it the default tool for new projects. Teams then scaled to paid plans as collaboration needs grew.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg border border-border">
                <p className="text-sm font-semibold text-foreground mb-2">Pricing Tiers</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>Free: Perfect for learning and personal projects</li>
                  <li>Professional ($12/mo): For small teams and freelancers</li>
                  <li>Organization ($45/mo): For enterprise-scale collaboration</li>
                  <li>Premium support and advanced features unlock at scale</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">2. Network Effects</h3>
              <p className="text-muted-foreground mb-4">
                Every designer that switched to Figma created lock-in for their team. Design files became portable across the web. Teams adopted Figma because their freelancers, contractors, and new hires already knew it. This created a virtuous cycle of adoption that was hard for competitors to combat.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">3. Ecosystem & Developer Tools</h3>
              <p className="text-muted-foreground mb-4">
                Figma invested heavily in APIs and plugin infrastructure, enabling developers to extend Figma's capabilities. This turned Figma from a design tool into a design platform. Integrations with Slack, Jira, GitHub, and thousands of other tools made Figma indispensable in the product development workflow.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">4. Go-to-Market</h3>
              <p className="text-muted-foreground">
                Rather than selling top-down to enterprises, Figma grew bottoms-up. It targeted designers and frontend teams who had autonomy to choose tools. As teams grew and executives realized the productivity gains, upgrade decisions were natural. This approach avoided the lengthy sales cycles that plague enterprise software.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Analysis */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-foreground mb-8">Why Competitors Lost</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-foreground mb-4">Sketch</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Mac-only, forcing Windows users to alternatives</li>
                <li>• Desktop-first architecture made collaboration difficult</li>
                <li>• Premium pricing ($99) created barrier to entry</li>
                <li>• Lost mindshare as remote work accelerated</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-foreground mb-4">Adobe XD</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Perceived as legacy tool, part of expensive Creative Suite</li>
                <li>• Collaboration felt bolted-on, not native</li>
                <li>• Subscription to Creative Cloud felt predatory</li>
                <li>• Slower innovation due to Adobe's legacy systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-foreground mb-8">Key Strategic Insights</h2>
          
          <div className="space-y-4">
            <div className="bg-pink-50 p-6 rounded-lg border border-pink-200">
              <p className="font-semibold text-foreground mb-2">Network effects beat features</p>
              <p className="text-muted-foreground text-sm">Figma wasn't technically superior initially, but its collaboration features and freemium model created network effects that made it the default choice.</p>
            </div>
            <div className="bg-pink-50 p-6 rounded-lg border border-pink-200">
              <p className="font-semibold text-foreground mb-2">Bottom-up beats top-down</p>
              <p className="text-muted-foreground text-sm">By winning designers first, Figma created organic demand. Enterprises adopted it because teams were already using it, not because of sales pitches.</p>
            </div>
            <div className="bg-pink-50 p-6 rounded-lg border border-pink-200">
              <p className="font-semibold text-foreground mb-2">Platform &gt; Point Solution</p>
              <p className="text-muted-foreground text-sm">Figma's investment in APIs, plugins, and integrations turned it from a design tool into an essential part of product development infrastructure.</p>
            </div>
            <div className="bg-pink-50 p-6 rounded-lg border border-pink-200">
              <p className="font-semibold text-foreground mb-2">Timing matters (+ technical execution)</p>
              <p className="text-muted-foreground text-sm">Figma launched when browsers became powerful enough for real-time collaborative tools. It executed brilliantly on this timing, building a web app that rivaled desktop tools.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-pink-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground mb-6">
            Figma's story is one of how a well-timed product with network effects, smart pricing, and bottoms-up distribution can reshape an entire industry. The design tools landscape fundamentally changed when Figma proved that collaboration and accessibility could be features, not afterthoughts.
          </p>
          <Link href="/#case-studies" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors">
            <ArrowLeft size={18} />
            Back to All Case Studies
          </Link>
        </div>
      </section>
    </main>
  )
}
