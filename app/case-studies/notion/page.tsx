import Link from "next/link"
import { ArrowLeft, Sparkles, Zap, Users, Workflow, Brain, TrendingUp, Code } from "lucide-react"

export const metadata = {
  title: "Notion AI Feature Development | Yash Mahadik",
  description: "New Product Development: How Notion AI Transformed from Document Editor to AI Workspace"
}

export default function NotionCaseStudyPage() {
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
          <p className="text-primary text-sm font-semibold tracking-wider mb-4">NOTION | PRODUCTIVITY SOFTWARE</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-foreground mb-6 leading-tight">
            From Document Editor to AI-Powered Workspace: Notion&apos;s Feature Roadmap
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            New product feature strategy for Notion AI—seamless AI integration into workflows. How Notion expanded from a document tool into a $10B+ AI-first workspace platform through strategic feature development.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-gray-100 px-4 py-2 rounded-md">
              <span className="text-gray-700 font-semibold">$10B Valuation</span>
            </div>
            <div className="bg-purple-100 px-4 py-2 rounded-md">
              <span className="text-purple-700 font-semibold">8M+ Users</span>
            </div>
            <div className="bg-blue-100 px-4 py-2 rounded-md">
              <span className="text-blue-700 font-semibold">AI Feature Launch 2023</span>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-foreground mb-8">The Challenge</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-foreground mb-4">Notion's Strength</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Workflow className="text-primary flex-shrink-0 mt-0.5" size={16} />
                  <span>Infinitely flexible database-first architecture</span>
                </li>
                <li className="flex items-start gap-2">
                  <Users className="text-primary flex-shrink-0 mt-0.5" size={16} />
                  <span>Strong community and 8M+ loyal users</span>
                </li>
                <li className="flex items-start gap-2">
                  <Code className="text-primary flex-shrink-0 mt-0.5" size={16} />
                  <span>Open API and developer ecosystem</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-foreground mb-4">The Problem to Solve</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Brain className="text-primary flex-shrink-0 mt-0.5" size={16} />
                  <span>Repetitive tasks: Writing, summarization, formatting</span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="text-primary flex-shrink-0 mt-0.5" size={16} />
                  <span>Keeping up with ChatGPT/Claude momentum</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="text-primary flex-shrink-0 mt-0.5" size={16} />
                  <span>Making AI accessible without leaving Notion</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-foreground mb-8">Feature Development Strategy</h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Sparkles size={24} className="text-primary" />
                1. Contextual AI Integration
              </h3>
              <p className="text-muted-foreground mb-4">
                Rather than a separate AI tool, Notion integrated AI directly into the workflow. Users could highlight text and get suggestions for completion, expansion, or summarization. This kept users in Notion, didn't require them to learn new interfaces, and felt native to their existing workflows.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg border border-border">
                <p className="text-sm font-semibold text-foreground mb-2">Key Features Released</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Auto-complete for text and data</li>
                  <li>• Summarization for long documents</li>
                  <li>• Tone adjustment (formal, casual, etc.)</li>
                  <li>• Question answering from your workspace</li>
                  <li>• Brainstorming and idea generation</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Code size={24} className="text-primary" />
                2. Database-Level AI
              </h3>
              <p className="text-muted-foreground mb-4">
                Notion's database infrastructure became a playground for AI. New properties like "AI-generated summary" or "sentiment analysis" turned tables into intelligent workspaces. This added significant value for teams managing CRMs, project trackers, and content databases.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Users size={24} className="text-primary" />
                3. Transparent, User-Controlled Pricing
              </h3>
              <p className="text-muted-foreground mb-4">
                Rather than adding AI as a mystery tax, Notion created a transparent "Add-On" model. Users earned AI credits through various actions (sharing templates, inviting team members, etc.) or purchased them directly. This transparency prevented price shock and maintained trust.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Zap size={24} className="text-primary" />
                4. Iterative Launch & Feedback
              </h3>
              <p className="text-muted-foreground">
                Notion AI didn't launch as a complete suite. It rolled out incrementally, with each feature tested with power users first, gathering feedback, then expanding. This approach prevented over-building the wrong features and kept existing users engaged during the rollout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 px-6 bg-purple-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-foreground mb-8">Projected Impact</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <p className="text-4xl font-bold text-primary mb-2">35%</p>
              <p className="text-muted-foreground text-sm">Expected increase in daily active features</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <p className="text-4xl font-bold text-primary mb-2">$50M+</p>
              <p className="text-muted-foreground text-sm">Estimated incremental ARR from AI features</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <p className="text-4xl font-bold text-primary mb-2">28%</p>
              <p className="text-muted-foreground text-sm">Projected reduction in churn from enterprise features</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-foreground mb-4">Why This Approach Works</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Workflow className="text-primary flex-shrink-0 mt-0.5" size={16} />
                <span>Contextual AI feels like a natural extension, not a separate tool</span>
              </li>
              <li className="flex items-start gap-2">
                <Users className="text-primary flex-shrink-0 mt-0.5" size={16} />
                <span>Existing users get AI superpowers without learning new interfaces</span>
              </li>
              <li className="flex items-start gap-2">
                <Brain className="text-primary flex-shrink-0 mt-0.5" size={16} />
                <span>AI adds the "thinking" layer that Notion was missing</span>
              </li>
              <li className="flex items-start gap-2">
                <TrendingUp className="text-primary flex-shrink-0 mt-0.5" size={16} />
                <span>Captures more user time and stickiness through productivity gains</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Competitive Landscape */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-foreground mb-8">Competitive Positioning</h2>
          
          <p className="text-muted-foreground mb-8">
            Notion positioned Notion AI against both ChatGPT-style interfaces and enterprise knowledge management tools. By keeping AI native to Notion's workspace, users never had to leave their "system of record" to get intelligence. This contextualized AI feel became Notion's competitive advantage.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-3">ChatGPT / Claude</h3>
              <p className="text-sm text-muted-foreground">General purpose, requires switching context</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <h3 className="font-semibold text-foreground mb-3">Notion AI (Notion's Advantage)</h3>
              <p className="text-sm text-muted-foreground">Contextual, knows your workspace, integrated workflow</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-3">Microsoft Copilot</h3>
              <p className="text-sm text-muted-foreground">Enterprise-focused, tied to Microsoft ecosystem</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lessons */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-foreground mb-8">Strategic Lessons</h2>
          
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg border border-border">
              <p className="font-semibold text-foreground mb-2">AI should be contextual, not modal</p>
              <p className="text-muted-foreground text-sm">Users don't want to switch to ChatGPT. They want intelligence where they work. Notion's approach of integrating AI into the workspace feels natural.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-border">
              <p className="font-semibold text-foreground mb-2">Transparency builds trust</p>
              <p className="text-muted-foreground text-sm">By creating a clear credit system rather than hidden AI costs, Notion maintained user trust during a sensitive feature rollout.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-border">
              <p className="font-semibold text-foreground mb-2">Iteration &gt; Big Bang Launch</p>
              <p className="text-muted-foreground text-sm">Rolling out features incrementally allowed Notion to gather feedback and avoid building expensive features users didn't want.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-border">
              <p className="font-semibold text-foreground mb-2">Platform advantages compound</p>
              <p className="text-muted-foreground text-sm">Notion's existing database architecture and API ecosystem made AI integration faster and more natural than it would be for point solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground mb-6">
            Notion's AI strategy shows how product companies can integrate emerging technologies without losing focus on their core value proposition. By making AI contextual and maintaining user control, Notion positioned itself as an AI-first workspace rather than a tool that bolted AI on as an afterthought.
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
