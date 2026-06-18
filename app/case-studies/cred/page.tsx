"use client"

import Link from "next/link"
import { ArrowLeft, ArrowUpRight, Users, TrendingUp, Target, CheckCircle, AlertTriangle } from "lucide-react"

export default function CredCaseStudy() {
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
            CRED | ENGAGEMENT & RETENTION
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif italic text-foreground mb-4 md:mb-6 leading-tight">
            Breaking the Monthly Habit: Transforming a $6.4B App with 3% DAU/MAU
          </h1>
          <p className="text-sm md:text-xl text-muted-foreground leading-relaxed mb-6 md:mb-8">
            How to transform CRED from a once-a-month bill payment utility into a daily financial companion. Addressing the core engagement challenge: users open the app exactly once a month on bill day.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://canva.link/credcasestudybyyash"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-primary text-primary-foreground font-semibold text-sm md:text-base hover:bg-primary/90 transition-colors rounded-md"
            >
              View the deck
              <ArrowUpRight size={16} className="md:w-[18px] md:h-[18px]" />
            </a>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-slate-100 dark:bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6 md:mb-8">The Problem</h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="flex flex-col items-start">
              <div className="text-2xl md:text-4xl font-bold text-primary mb-1 md:mb-2">3-5%</div>
              <p className="text-xs md:text-sm text-muted-foreground">Estimated DAU/MAU ratio - most users open the app exactly once a month on bill due date.</p>
            </div>
            <div className="flex flex-col items-start">
              <div className="text-2xl md:text-4xl font-bold text-primary mb-1 md:mb-2">65%</div>
              <p className="text-xs md:text-sm text-muted-foreground">Of earned coins are never redeemed - sitting unused in user accounts.</p>
            </div>
            <div className="flex flex-col items-start">
              <div className="text-2xl md:text-4xl font-bold text-primary mb-1 md:mb-2">90%+</div>
              <p className="text-xs md:text-sm text-muted-foreground">App opens happen in the first week of the month, collapsing to near-zero after.</p>
            </div>
          </div>
        </div>
      </section>

      {/* User Segmentation */}
      <section className="py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6 md:mb-8">User Segmentation</h2>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-amber-50 p-6 rounded-lg border-2 border-primary">
              <div className="flex items-center gap-2 mb-4">
                <Target className="text-primary" size={24} />
                <span className="text-xs font-bold text-primary">TARGET</span>
              </div>
              <h3 className="font-bold text-foreground mb-2">Bill Payers</h3>
              <p className="text-3xl font-bold text-primary mb-2">~65%</p>
              <p className="text-sm text-muted-foreground">Open app 1x/month. Pay bill, collect coins, leave. Have never visited CRED Store.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <Users className="text-muted-foreground" size={24} />
              </div>
              <h3 className="font-bold text-foreground mb-2">Occasional Redeemers</h3>
              <p className="text-3xl font-bold text-foreground/70 mb-2">~25%</p>
              <p className="text-sm text-muted-foreground">Open 2-3x/month. Pay bills + occasionally redeem coins for deals.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="text-muted-foreground" size={24} />
              </div>
              <h3 className="font-bold text-foreground mb-2">Power Users</h3>
              <p className="text-3xl font-bold text-foreground/70 mb-2">~10%</p>
              <p className="text-sm text-muted-foreground">Open 5-8x/month. Use CRED Pay, shop CRED Store. Revenue anchor.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Validated Hypotheses */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">Validated Hypotheses</h2>
          <div className="space-y-6">
            {[
              {
                title: "Users don&apos;t understand coin value",
                finding: "CRED shows coin balance (e.g., \"45,230 coins\") with no ₹ equivalent displayed anywhere on the home screen.",
                validated: true
              },
              {
                title: "Reward catalog is overwhelming",
                finding: "CRED Store shows 100+ brand tiles with no sorting by relevance to the user's spending profile. Hick&apos;s Law violation at scale.",
                validated: true
              },
              {
                title: "No reason to open between bill dates",
                finding: "Zero daily-value content on home screen. No spend insights, no personalized flash deals, no streak mechanics.",
                validated: true
              },
              {
                title: "Coins don&apos;t feel urgent",
                finding: "Coins expire in 1 year, but expiry is shown in small text deep in the coins section. Loss Aversion completely untapped.",
                validated: true
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.finding}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-4">The Solution: CRED Pulse</h2>
          <p className="text-muted-foreground mb-8">A personalized daily engagement layer that gives every CRED member a compelling reason to open the app between bill dates.</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Coin Value Display",
                description: "Shows ₹ equivalent of coins on home screen. Removes abstraction, makes value tangible."
              },
              {
                title: "Smart Coins Moment",
                description: "Immediately after bill payment, shows personalised 'here's what your coins can get you' card."
              },
              {
                title: "Flash Deals",
                description: "Time-limited exclusive deals (24hr) for categories matching the user's spending profile."
              },
              {
                title: "Expiry Urgency",
                description: "Proactive notification 30 days before coin expiry. Loss Aversion trigger at the right moment."
              }
            ].map((item, i) => (
              <div key={i} className="bg-slate-100 p-6 rounded-lg">
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 px-6 bg-primary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">Projected Impact</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-5xl font-bold text-primary mb-2">₹53.3 Cr</p>
              <p className="text-muted-foreground">Incremental GMV revenue projected from engagement lift</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-5xl font-bold text-primary mb-2">2.8</p>
              <p className="text-muted-foreground">Target Monthly Active Days/User (up from 1.2)</p>
            </div>
          </div>
          
          <div className="mt-8 bg-white p-6 rounded-lg">
            <h3 className="font-bold text-foreground mb-4">Impact Calculation</h3>
            <p className="text-muted-foreground font-mono text-sm">
              3.7M Reachable Users × 4% Store Conversion × ₹2,400 Avg GMV × 15% Commission = ₹53.3 Cr
            </p>
          </div>
        </div>
      </section>

      {/* Key Contributions */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">Key Contributions</h2>
          <ul className="space-y-4">
            {[
              "Identified root cause: 65% of users are 'Bill Payers' who never return",
              "Validated hypotheses through UX audit and competitor analysis",
              "Designed 'CRED Pulse' - a lightweight daily engagement layer",
              "Created RICE-scored feature prioritization framework",
              "Designed 6 screens with detailed user stories and acceptance criteria",
              "Projected ₹53.3 Cr incremental GMV revenue from engagement lift"
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
      <section className="py-16 px-6 bg-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Want to see the full case study?</h2>
          <p className="text-muted-foreground mb-8">Follow this link to see the complete deck with all screens, user stories, and success metrics.</p>
          <a
            href="https://canva.link/credcasestudybyyash"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors rounded-md"
          >
            View Full Case Study
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
