'use client'

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function SprintUpPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-6 pt-32">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold tracking-wider text-primary mb-2">SPRINTUP | PRD</p>
          <h1 className="text-4xl md:text-5xl font-serif italic text-foreground mb-6">
            Voice-Activated Project Management for Engineering Teams
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            A comprehensive Product Requirements Document for SprintUp — an AI-powered platform that eliminates post-meeting admin overhead by automatically converting verbal commitments and blockers into actionable tickets. Achieve 70% reduction in administrative work and reclaim 2+ hours per sprint per developer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Type</span>
              <span className="text-sm font-medium">B2B SaaS / Development Productivity</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Market</span>
              <span className="text-sm font-medium">Agile Software Development Teams</span>
            </div>
          </div>
          <div className="pt-4">
            <a
              href="https://docs.google.com/document/d/1FiJ5XTT9VRfQ_OwUkULP6cbIpZL1zYyEOLrXMsoo36Q/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Read Full In-Depth PRD
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* Problem Statement */}
          <div>
            <h2 className="text-2xl md:text-3xl font-serif italic text-foreground mb-4">Problem Statement</h2>
            <p className="text-base text-muted-foreground mb-4">
              Software development teams are hemorrhaging time on invisible administrative work. Every sprint, engineers spend 2–3 hours transcribing stand-ups, manually creating tickets from verbal discussions, updating project boards, and documenting decisions — none of which produces a single line of code. This "invisible tax" compounds across team size and sprint cycles, silently destroying velocity, accelerating burnout, and frustrating the engineers who built their careers to solve problems, not fill out forms.
            </p>
            <p className="text-base text-muted-foreground">
              The core failure is structural: the tools that manage development work (Jira, Asana, Linear) were designed to store tasks, not generate them. They sit passively while engineers manually bridge the gap between what was said in a meeting and what needs to happen on the board. SprintUp eliminates that gap entirely.
            </p>
          </div>

          {/* Key Pain Points */}
          <div>
            <h2 className="text-2xl md:text-3xl font-serif italic text-foreground mb-4">Key Pain Points</h2>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span className="text-muted-foreground"><strong>No voice-to-action capability:</strong> All existing PM tools require 100% manual data entry. Nothing listens, nothing acts.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span className="text-muted-foreground"><strong>Post-meeting admin tax:</strong> A 30-minute stand-up typically generates 20 additional minutes of ticket updates per engineer.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span className="text-muted-foreground"><strong>Action item decay:</strong> Verbal commitments and blockers go untracked within 24 hours (55% of cases).</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span className="text-muted-foreground"><strong>Context-switching penalty:</strong> 23 minutes on average to restore full focus after interruptions.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span className="text-muted-foreground"><strong>Poor documentation quality:</strong> Manual notes are incomplete and inconsistent; critical decisions get lost.</span>
              </li>
            </ul>
          </div>

          {/* Quantified Metrics */}
          <div>
            <h2 className="text-2xl md:text-3xl font-serif italic text-foreground mb-4">Quantified Pain Points</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 p-6 rounded-lg">
                <p className="text-3xl font-bold text-red-600 mb-2">62%</p>
                <p className="text-sm text-muted-foreground">of developers report admin overhead consuming 2–3 hours per sprint</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <p className="text-3xl font-bold text-orange-600 mb-2">55%</p>
                <p className="text-sm text-muted-foreground">of verbal commitments go untracked within 24 hours</p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <p className="text-3xl font-bold text-yellow-600 mb-2">57%</p>
                <p className="text-sm text-muted-foreground">report burnout symptoms with admin overhead as top-3 factor</p>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg">
                <p className="text-3xl font-bold text-amber-600 mb-2">48%</p>
                <p className="text-sm text-muted-foreground">cite context-switching as primary productivity killer</p>
              </div>
            </div>
          </div>

          {/* Objectives */}
          <div>
            <h2 className="text-2xl md:text-3xl font-serif italic text-foreground mb-4">Primary Objectives</h2>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-primary font-bold">1.</span>
                <span className="text-muted-foreground">Reduce administrative overhead by <strong>70%</strong>, reclaiming 2+ hours per sprint per developer</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">2.</span>
                <span className="text-muted-foreground">Improve sprint velocity by <strong>20%</strong> through maximized actual development time</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">3.</span>
                <span className="text-muted-foreground">Achieve <strong>95%+ action item capture rate</strong> from verbal discussions</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">4.</span>
                <span className="text-muted-foreground">Eliminate post-meeting documentation through automated summaries and decision logs</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">5.</span>
                <span className="text-muted-foreground">Improve developer satisfaction scores (ASAT) by <strong>30%</strong> within 6 months</span>
              </li>
            </ul>
          </div>

          {/* Three Pillars */}
          <div>
            <h2 className="text-2xl md:text-3xl font-serif italic text-foreground mb-6">Solution: Three Product Pillars</h2>
            <div className="space-y-6">
              <div className="bg-indigo-50 p-8 rounded-lg">
                <h3 className="text-xl font-serif italic text-foreground mb-3">Pillar 1: Voice-to-Ticket Automation</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  The core engine. Real-time NLP identifies actionable intents and auto-generates draft tickets directly on the SprintUp board. Engineering managers approve all tickets in one click.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Multi-speaker intent recognition trained on developer vocabulary</li>
                  <li>• Auto-populated ticket fields: title, description, assignee, priority</li>
                  <li>• Real-time blocker detection with Slack alerts</li>
                  <li>• One-click batch approval for entire meeting's tickets</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-xl font-serif italic text-foreground mb-3">Pillar 2: Meeting Intelligence Dashboard</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  A native project board that understands conversations. Every ticket and decision is hyperlinked to its source timestamp in searchable transcripts.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Live-synced Kanban and Scrum board views</li>
                  <li>• Full searchable transcript linked to ticket creation points</li>
                  <li>• AI-generated meeting summary distributed within 3 minutes</li>
                  <li>• Developer Focus Mode: strips board to priority tasks only</li>
                </ul>
              </div>

              <div className="bg-cyan-50 p-8 rounded-lg">
                <h3 className="text-xl font-serif italic text-foreground mb-3">Pillar 3: Predictive Velocity Modeling</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Proactive sprint health insights using clean, real-time data from voice automation. Predicts sprint completion probability and flags risks early.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Time-to-completion scoring per ticket and sprint</li>
                  <li>• Sentiment analysis on complex discussions as early warning</li>
                  <li>• Automatic capacity recalculation with blocker adjustments</li>
                  <li>• Sprint health dashboard for managers and CTOs</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Architecture */}
          <div>
            <h2 className="text-2xl md:text-3xl font-serif italic text-foreground mb-4">Technical Architecture</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Frontend Stack</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>Next.js 14</strong> with App Router for optimal performance and nested layouts</li>
                  <li>• <strong>Zustand</strong> for local UI state; <strong>React Query</strong> for server state and live data</li>
                  <li>• <strong>WebSockets (Socket.io)</strong> for real-time board updates during meetings</li>
                  <li>• <strong>Shadcn/UI + Tailwind</strong> for component foundation</li>
                  <li>• <strong>dnd-kit</strong> for performant Kanban drag-and-drop</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Microservices Architecture</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li><strong>Auth Service:</strong> JWT tokens, SAML/OAuth 2.0 for enterprise SSO</li>
                  <li><strong>Board Service:</strong> CRUD operations, WebSocket sync for live updates</li>
                  <li><strong>Transcription Service:</strong> OpenAI Whisper v3 (self-hosted GPU), domain-tuned for developer vocabulary</li>
                  <li><strong>NLP Intent Engine:</strong> Fine-tuned DeBERTa-v3 for task/blocker/decision classification</li>
                  <li><strong>Meeting Intelligence:</strong> Claude API for summary generation and decision extraction</li>
                  <li><strong>Prediction Service:</strong> XGBoost/LightGBM for explainable velocity forecasting</li>
                  <li><strong>Integration Service:</strong> Bi-directional sync with Jira, Linear, GitHub</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Data Infrastructure</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>PostgreSQL:</strong> Primary relational data with read replicas</li>
                  <li>• <strong>MongoDB:</strong> Unstructured transcripts, summaries, decision logs</li>
                  <li>• <strong>Redis:</strong> JWT cache, session state, pub/sub for real-time events</li>
                  <li>• <strong>ClickHouse:</strong> Analytics and telemetry data warehouse</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">AI/ML Infrastructure</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>AWS EC2 P4d (NVIDIA A100)</strong> for GPU compute, auto-scaling via EKS</li>
                  <li>• <strong>NVIDIA Triton Inference Server</strong> for low-latency model serving with dynamic batching</li>
                  <li>• <strong>Anthropic Claude API</strong> for post-meeting intelligence generation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* User Personas */}
          <div>
            <h2 className="text-2xl md:text-3xl font-serif italic text-foreground mb-6">Primary User Personas</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Engineering Manager (Primary)</h3>
                <p className="text-sm text-muted-foreground mb-3">Leading 5–15 person scrum team, accountable for velocity metrics and sprint outcomes.</p>
                <p className="text-xs text-primary font-medium">Trigger: "My team is spending more time on tickets than on code."</p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Senior Engineer / Tech Lead (Secondary)</h3>
                <p className="text-sm text-muted-foreground mb-3">High-impact IC context-switching between deep coding and team coordination.</p>
                <p className="text-xs text-primary font-medium">Trigger: "I said I'd do something in standup and it never got tracked."</p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">CTO / VP Engineering (Economic Buyer)</h3>
                <p className="text-sm text-muted-foreground mb-3">Responsible for engineering output, team health, and technology ROI.</p>
                <p className="text-xs text-primary font-medium">Trigger: "I need to show the board we're shipping faster without adding headcount."</p>
              </div>
            </div>
          </div>

          {/* Market Opportunity */}
          <div>
            <h2 className="text-2xl md:text-3xl font-serif italic text-foreground mb-4">Market Opportunity</h2>
            <div className="bg-indigo-50 p-8 rounded-lg">
              <p className="text-muted-foreground mb-4">
                <strong>Developer Productivity Crisis:</strong> 30–40% of a developer's week is consumed by meetings, administrative tasks, and context-switching. 57% of developers report burnout symptoms with administrative overhead as a top-3 contributing factor.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Market Gap:</strong> The global project management software market is multi-billion dollars but dominated by tools that excel at displaying work without reducing the effort of managing it. No major player has built voice intelligence natively into the project tracking workflow.
              </p>
              <p className="text-muted-foreground">
                <strong>Demand Signal:</strong> Rapid adoption of tools like Otter.ai, Fireflies, and Notion AI demonstrates clear appetite for AI-assisted meeting intelligence, but none close the loop from transcript to tracked action items.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-serif italic text-foreground mb-6">
            Interested in discussing this PRD?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <Link
              href="/#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-primary text-primary-foreground font-semibold text-sm md:text-base hover:bg-primary/90 transition-colors rounded-md"
            >
              Get In Touch
            </Link>
            <Link
              href="/case-studies"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-transparent text-foreground font-semibold text-sm md:text-base border border-border rounded-md hover:border-primary hover:text-primary transition-colors"
            >
              Explore Other Case Studies
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
