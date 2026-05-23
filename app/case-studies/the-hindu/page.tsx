'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen, TrendingUp, Zap, Users, BarChart3 } from 'lucide-react'

export default function TheHinduCaseStudy() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/#case-studies" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft size={20} />
            <span className="text-sm font-medium">Back to Case Studies</span>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <p className="text-primary text-sm font-semibold tracking-wider mb-4">CASE STUDY</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-foreground">
            Converting 12M Monthly Visitors Into Paying Subscribers
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed">
            A comprehensive Growth PM case study on fixing The Hindu's discovery-to-subscription funnel. How to translate 143 years of editorial trust into daily engagement and subscriber revenue through product intelligence.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <p className="text-primary text-xs uppercase tracking-wider font-semibold mb-2">Year 1 Impact</p>
              <p className="text-2xl font-bold text-foreground">₹22-25Cr</p>
            </div>
            <div>
              <p className="text-primary text-xs uppercase tracking-wider font-semibold mb-2">Growth Metric</p>
              <p className="text-2xl font-bold text-foreground">1.8 → 4.0</p>
              <p className="text-xs text-muted-foreground">Monthly Active Days</p>
            </div>
            <div>
              <p className="text-primary text-xs uppercase tracking-wider font-semibold mb-2">Target Conversion</p>
              <p className="text-2xl font-bold text-foreground">8-12%</p>
              <p className="text-xs text-muted-foreground">Free to Trial</p>
            </div>
            <div>
              <p className="text-primary text-xs uppercase tracking-wider font-semibold mb-2">UX Laws Applied</p>
              <p className="text-2xl font-bold text-foreground">8+</p>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-foreground mb-6">Executive Summary</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The Hindu has the most trusted journalism brand in India, commanding editorial respect among civil service aspirants, policy makers, and the professional class. Yet the product converts less than 1% of its 12M monthly visitors into paying subscribers.
              </p>
              <p>
                The problem is not content quality or audience size. It is that The Hindu's digital product fails to create daily habit formation, relies entirely on Google-driven discovery, and presents a paywall value proposition that is unclear and abrupt. Every major international news brand that solved engagement (NYT, Guardian, FT) did so through product layers built on top of editorial content — not by changing the content itself.
              </p>
              <p>
                This case study details a Growth PM approach called "The Hindu Pulse" — a lightweight daily engagement layer that adds: personalised morning push notifications, improved article-end recommendations, a redesigned paywall with trial, and SEO/Discover distribution optimisation. The approach is additive (respects editorial hierarchy), testable (A/B testable from launch), and targets ₹22-25Cr Year 1 incremental revenue through engagement and subscription conversion lift.
              </p>
            </div>
          </div>
          <div className="bg-background border border-border rounded-lg p-6">
            <h3 className="font-bold text-foreground mb-4">Key Contributions</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary font-bold">1</span>
                <span>Mapped the leaky funnel: 12M visitors → 2.5M engaged → 400K registered → 120K paying</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">2</span>
                <span>Designed 8-component engagement layer: morning push, article recommendations, paywall, SEO strategy</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">3</span>
                <span>Created 6-month A/B testing roadmap with 80% statistical power targets</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">4</span>
                <span>Detailed V2/V3 roadmap with topic-follows, UPSC vertical, and subscriber community</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-background border-y border-border py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-foreground mb-12">The Problem: The Leaky Funnel</h2>
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            <div className="text-center p-6 bg-white rounded border border-primary/20">
              <p className="text-3xl font-bold text-primary mb-2">12M</p>
              <p className="text-sm font-semibold text-muted-foreground">Monthly Visitors</p>
              <p className="text-xs text-muted-foreground mt-3">100%</p>
            </div>
            <div className="text-center p-6 bg-white rounded border border-red-200">
              <p className="text-3xl font-bold text-red-600 mb-2">2.5M</p>
              <p className="text-sm font-semibold text-muted-foreground">Engaged Readers (2+ visits/month)</p>
              <p className="text-xs text-red-600 mt-3">-79% drop</p>
            </div>
            <div className="text-center p-6 bg-white rounded border border-red-200">
              <p className="text-3xl font-bold text-red-600 mb-2">400K</p>
              <p className="text-sm font-semibold text-muted-foreground">Registered Users</p>
              <p className="text-xs text-red-600 mt-3">-84% drop</p>
            </div>
            <div className="text-center p-6 bg-white rounded border border-red-200">
              <p className="text-3xl font-bold text-red-600 mb-2">120K</p>
              <p className="text-sm font-semibold text-muted-foreground">Paying Subscribers</p>
              <p className="text-xs text-red-600 mt-3">0.7% conversion</p>
            </div>
          </div>
          
          <h3 className="text-lg font-bold text-foreground mb-6">Root Causes (5 Identified)</h3>
          <div className="space-y-4">
            <div className="p-4 bg-white border border-border rounded-lg flex gap-4">
              <div className="text-primary font-bold text-lg min-w-8">1</div>
              <div>
                <p className="font-semibold text-foreground mb-1">No Owned Daily Habit Trigger</p>
                <p className="text-sm text-muted-foreground">No personalised morning ritual. Users arrive through Google search, read one article, leave. No reason to return tomorrow.</p>
              </div>
            </div>
            <div className="p-4 bg-white border border-border rounded-lg flex gap-4">
              <div className="text-primary font-bold text-lg min-w-8">2</div>
              <div>
                <p className="font-semibold text-foreground mb-1">Broken Article Recommendation</p>
                <p className="text-sm text-muted-foreground">Article-end "Related Articles" are algorithmically weak. Highest-intent moment (end of good story) is wasted on irrelevant suggestions.</p>
              </div>
            </div>
            <div className="p-4 bg-white border border-border rounded-lg flex gap-4">
              <div className="text-primary font-bold text-lg min-w-8">3</div>
              <div>
                <p className="font-semibold text-foreground mb-1">No Personalisation Layer</p>
                <p className="text-sm text-muted-foreground">Homepage identical for UPSC aspirant and tech executive. 19-story editorial selection, no reading-history signal. Maximum decision paralysis.</p>
              </div>
            </div>
            <div className="p-4 bg-white border border-border rounded-lg flex gap-4">
              <div className="text-primary font-bold text-lg min-w-8">4</div>
              <div>
                <p className="font-semibold text-foreground mb-1">Unclear Subscription Value Prop</p>
                <p className="text-sm text-muted-foreground">Paywall is a hard stop with minimal context. No visible article count. No trial. No "here's what you're missing" frame. Abrupt, not conversational.</p>
              </div>
            </div>
            <div className="p-4 bg-white border border-border rounded-lg flex gap-4">
              <div className="text-primary font-bold text-lg min-w-8">5</div>
              <div>
                <p className="font-semibold text-foreground mb-1">Google Dependency Risk</p>
                <p className="text-sm text-muted-foreground">Direct traffic ≈ 20-25% of total. 75% of audience is "borrowed" from Google Discover and search. Algorithm changes = traffic cliff.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Persona */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-foreground mb-8">User Persona: Priya Raghavan</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-background border border-border rounded-lg p-6">
            <p className="text-primary text-xs uppercase tracking-wider font-semibold mb-2">Demographics</p>
            <p className="text-lg font-bold text-foreground mb-4">Deputy Manager, Public Sector Bank, Chennai</p>
            <p className="text-sm text-muted-foreground leading-relaxed">32 years old. Postgraduate degree (Economics). UPSC Mains aspirant. Reads The Hindu for work context and exam prep.</p>
          </div>
          <div className="bg-background border border-border rounded-lg p-6">
            <p className="text-primary text-xs uppercase tracking-wider font-semibold mb-2">Core Quote</p>
            <p className="text-sm italic text-muted-foreground leading-relaxed">
              "I check The Hindu when something big happens — election, budget, SC judgment. The rest of the time I forget it exists even though I know I should read it every day."
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-foreground mb-4">Unmet Goals</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Stay current on national affairs without spending 20+ minutes/day</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Use The Hindu as primary UPSC prep resource (currently multi-app juggling)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Build consistent daily reading habit without friction</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Trust a single authoritative source instead of triangulating</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-4">Core Pain Points</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Homepage overwhelming — 20 stories, no hierarchy for her interests</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>No "catch up" — missed stories while away, no way to know</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>No article save feature — uses screenshots + WhatsApp notes</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Paywall appears mid-article with no warning about remaining free reads</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="bg-background border-y border-border py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-foreground mb-12">The Solution: The Hindu Pulse</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            A lightweight, additive daily engagement layer that gives every reader a compelling reason to open The Hindu each morning — and a clear, honest reason to become a subscriber.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Component 1 */}
            <div className="border border-border rounded-lg p-6">
              <div className="flex items-start gap-3 mb-4">
                <Zap className="text-primary mt-1 flex-shrink-0" size={20} />
                <h3 className="font-bold text-foreground">Component 1: Morning Pulse</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Personalised daily push notification at 7:00 AM with: 3 headlines based on reading history + 1 "missed story" + 1 ongoing thread update.</p>
              <p className="text-xs text-primary font-semibold">UX Law: Zeigarnik Effect (unfinished story pulls users back)</p>
            </div>

            {/* Component 2 */}
            <div className="border border-border rounded-lg p-6">
              <div className="flex items-start gap-3 mb-4">
                <BookOpen className="text-primary mt-1 flex-shrink-0" size={20} />
                <h3 className="font-bold text-foreground">Component 2: Next Read Module</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">At article end: 3 curated cards — "Next in story" (editorial), "More from reporter," "Recommended for you" (collaborative filtering).</p>
              <p className="text-xs text-primary font-semibold">UX Law: Miller's Law (exactly 3 options at highest-intent moment)</p>
            </div>

            {/* Component 3 */}
            <div className="border border-border rounded-lg p-6">
              <div className="flex items-start gap-3 mb-4">
                <TrendingUp className="text-primary mt-1 flex-shrink-0" size={20} />
                <h3 className="font-bold text-foreground">Component 3: Paywall Redesign</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Visible article counter + personalised value messaging ("You read 12 economy articles — subscribers like you read 48") + 7-day free trial.</p>
              <p className="text-xs text-primary font-semibold">UX Law: Loss Aversion & Anchoring</p>
            </div>

            {/* Component 4 */}
            <div className="border border-border rounded-lg p-6">
              <div className="flex items-start gap-3 mb-4">
                <BarChart3 className="text-primary mt-1 flex-shrink-0" size={20} />
                <h3 className="font-bold text-foreground">Component 4: SEO + Discover</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Structured data markup, AMP optimisation, topic cluster strategy, visual explainer format for Google Discover eligibility.</p>
              <p className="text-xs text-primary font-semibold">Hedges Google dependency risk</p>
            </div>
          </div>

          {/* MVP Scope */}
          <div className="bg-white border border-primary/20 rounded-lg p-8">
            <h3 className="font-bold text-foreground mb-6">MVP Scope (RICE Score ≥ 150)</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-background rounded">
                <p className="font-semibold text-foreground mb-2">Morning Pulse Notification</p>
                <p className="text-xs text-muted-foreground">Reach 9, Impact 9, Confidence 8, Effort 2 → Score 324</p>
              </div>
              <div className="p-4 bg-background rounded">
                <p className="font-semibold text-foreground mb-2">Article Recommendation Redesign</p>
                <p className="text-xs text-muted-foreground">Reach 10, Impact 9, Confidence 8, Effort 3 → Score 240</p>
              </div>
              <div className="p-4 bg-background rounded">
                <p className="font-semibold text-foreground mb-2">Paywall Redesign + Trial</p>
                <p className="text-xs text-muted-foreground">Reach 6, Impact 10, Confidence 8, Effort 3 → Score 160</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A/B Testing */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-foreground mb-8">6-Month A/B Testing Roadmap</h2>
        <div className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-6 border border-border rounded-lg">
              <p className="font-bold text-foreground mb-2">Month 1-2</p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Test 1: Personalised vs. editorial top 3 push</li>
                <li>• Test 2: 3-card vs. 5-card article module</li>
              </ul>
            </div>
            <div className="p-6 border border-border rounded-lg">
              <p className="font-bold text-foreground mb-2">Month 3-4</p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Test 3: Visible vs. hidden counter</li>
                <li>• Test 4: Generic vs. personalised paywall copy</li>
              </ul>
            </div>
            <div className="p-6 border border-border rounded-lg">
              <p className="font-bold text-foreground mb-2">Month 5-6</p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Test 5: 7-day vs. 14-day trial</li>
                <li>• Test 6: Evening push cadence impact</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="bg-background border-y border-border py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-foreground mb-12">Success Metrics</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="font-bold text-foreground mb-6">North Star: Monthly Active Days (MAD)</h3>
              <div className="space-y-3">
                <div className="p-4 bg-white border border-border rounded">
                  <p className="text-sm text-muted-foreground">Baseline</p>
                  <p className="font-bold text-foreground">1.8-2.2 days/month</p>
                </div>
                <div className="p-4 bg-white border border-primary/30 rounded">
                  <p className="text-sm text-muted-foreground">6-Month Target</p>
                  <p className="font-bold text-primary">4.0 days/month</p>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mt-4">Single metric drives both ad revenue and subscription conversion. 2.2× improvement = ₹22-25Cr Year 1.</p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-foreground mb-6">L1 Primary Metrics</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between p-3 bg-white border border-border rounded">
                  <span className="text-muted-foreground">Morning Push Open Rate</span>
                  <span className="font-bold text-foreground">Target: 22%+</span>
                </div>
                <div className="flex justify-between p-3 bg-white border border-border rounded">
                  <span className="text-muted-foreground">Article-End CTR</span>
                  <span className="font-bold text-foreground">Target: 28%+</span>
                </div>
                <div className="flex justify-between p-3 bg-white border border-border rounded">
                  <span className="text-muted-foreground">Trial Start Rate</span>
                  <span className="font-bold text-foreground">Target: 8-12%</span>
                </div>
                <div className="flex justify-between p-3 bg-white border border-border rounded">
                  <span className="text-muted-foreground">Trial to Paid Conv.</span>
                  <span className="font-bold text-foreground">Target: 35-40%</span>
                </div>
              </div>
            </div>
          </div>

          <h3 className="font-bold text-foreground mb-6">Failure Metrics (Kill Signals)</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white border border-red-200 rounded">
              <p className="font-semibold text-red-700 mb-1">Push Opt-Out Rate {'>'}4%</p>
              <p className="text-xs text-muted-foreground">Notification is too aggressive or irrelevant</p>
            </div>
            <div className="p-4 bg-white border border-red-200 rounded">
              <p className="font-semibold text-red-700 mb-1">Subscription Churn Increase</p>
              <p className="text-xs text-muted-foreground">Paywall redesign negatively impacts retention</p>
            </div>
            <div className="p-4 bg-white border border-red-200 rounded">
              <p className="font-semibold text-red-700 mb-1">Organic Share {'>'}70%</p>
              <p className="text-xs text-muted-foreground">Owned channel strategy not working</p>
            </div>
            <div className="p-4 bg-white border border-red-200 rounded">
              <p className="font-semibold text-red-700 mb-1">Editorial NPS ↓</p>
              <p className="text-xs text-muted-foreground">Quality perception degraded by personalisation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Risks */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-foreground mb-8">Risk & Mitigation</h2>
        <div className="space-y-6">
          <div className="border border-border rounded-lg p-6">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-bold text-foreground">Risk 1: Editorial Resistance</h3>
              <span className="text-xs font-semibold text-orange-600 bg-orange-50 px-2 py-1 rounded">HIGH</span>
            </div>
            <p className="text-sm text-muted-foreground mb-3">Editorial team may resist algorithmic influence on reading paths. Risk of perceived editorial compromise.</p>
            <p className="text-sm font-semibold text-foreground mb-2">Mitigation:</p>
            <p className="text-sm text-muted-foreground">Next Read module is editorially guardrailed — "Next in story" manually tagged by reporters, not algo-generated. Propose joint editorial-product working group owning content taxonomy.</p>
          </div>

          <div className="border border-border rounded-lg p-6">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-bold text-foreground">Risk 2: Notification Fatigue</h3>
              <span className="text-xs font-semibold text-orange-600 bg-orange-50 px-2 py-1 rounded">MEDIUM</span>
            </div>
            <p className="text-sm text-muted-foreground mb-3">Daily briefs to 350K users risks opt-out spikes if personalisation is weak early.</p>
            <p className="text-sm font-semibold text-foreground mb-2">Mitigation:</p>
            <p className="text-sm text-muted-foreground">Rollout to 20% users first month. Monitor open rate weekly. Only scale if {'>'}18%. Cap total notifications per user per day at 2. No promotional-only pushes.</p>
          </div>

          <div className="border border-border rounded-lg p-6">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-bold text-foreground">Risk 3: Trial Abuse</h3>
              <span className="text-xs font-semibold text-yellow-600 bg-yellow-50 px-2 py-1 rounded">LOW</span>
            </div>
            <p className="text-sm text-muted-foreground mb-3">7-day free trial could be exploited with multiple accounts for indefinite free access.</p>
            <p className="text-sm font-semibold text-foreground mb-2">Mitigation:</p>
            <p className="text-sm text-muted-foreground">Require payment method capture at signup. Flag duplicate payment methods. Limit one trial per payment instrument. Monitor trial-start-to-completion ratio — if below 40%, improve experience not access controls.</p>
          </div>
        </div>
      </section>

      {/* V2 Roadmap */}
      <section className="bg-background border-y border-border py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-foreground mb-12">V2 & V3 Roadmap</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-border rounded-lg p-6 bg-white">
              <h3 className="font-bold text-foreground mb-4">V2: Topic & Journalist Follows</h3>
              <p className="text-sm text-muted-foreground mb-4">Users follow beats (Supreme Court, Budget, Climate) or journalists. Drives loyalty and reduces churn. Most-followed journalists have lowest subscriber churn across news orgs.</p>
              <p className="text-xs text-primary font-semibold">Timeline: Months 9-12</p>
            </div>

            <div className="border border-border rounded-lg p-6 bg-white">
              <h3 className="font-bold text-foreground mb-4">V2: The Hindu UPSC Vertical</h3>
              <p className="text-sm text-muted-foreground mb-4">Dedicated daily brief mapping stories to GS syllabus + vocabulary notes + practice questions. Premium tier ₹2,500-3,000/year. Addressable: 2-3M UPSC aspirants.</p>
              <p className="text-xs text-primary font-semibold">Timeline: Months 9-12</p>
            </div>

            <div className="border border-border rounded-lg p-6 bg-white">
              <h3 className="font-bold text-foreground mb-4">V3: Subscriber Community</h3>
              <p className="text-sm text-muted-foreground mb-4">Curated comments, journalist AMAs, subscriber-exclusive webinars. "Guardian Community" model for India. Projected 15-20% churn reduction for community members.</p>
              <p className="text-xs text-primary font-semibold">Timeline: Months 15-18</p>
            </div>

            <div className="border border-border rounded-lg p-6 bg-white">
              <h3 className="font-bold text-foreground mb-4">V3: AI Newsroom Tools</h3>
              <p className="text-sm text-muted-foreground mb-4">CMS-integrated AI assistant for SEO scoring, article tagging, headline A/B testing, structured data markup. Empowers reporters without compromising editorial judgment.</p>
              <p className="text-xs text-primary font-semibold">Timeline: Months 18-24</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Outcomes */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-foreground mb-8">Target Outcomes (6 Months)</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-background border border-border rounded-lg">
              <span className="text-muted-foreground">Monthly Active Days</span>
              <span className="font-bold text-foreground">1.8 → 4.0<span className="text-xs text-muted-foreground"> /month</span></span>
            </div>
            <div className="flex justify-between items-center p-4 bg-background border border-border rounded-lg">
              <span className="text-muted-foreground">Article-End CTR</span>
              <span className="font-bold text-foreground">10% → 28%<span className="text-xs text-muted-foreground">+</span></span>
            </div>
            <div className="flex justify-between items-center p-4 bg-background border border-border rounded-lg">
              <span className="text-muted-foreground">Push Open Rate</span>
              <span className="font-bold text-foreground">— → 22%<span className="text-xs text-muted-foreground">+</span></span>
            </div>
            <div className="flex justify-between items-center p-4 bg-background border border-border rounded-lg">
              <span className="text-muted-foreground">Trial Start Rate</span>
              <span className="font-bold text-foreground">0.5% → 8-12%</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-background border border-border rounded-lg">
              <span className="text-muted-foreground">Trial-to-Paid Conv.</span>
              <span className="font-bold text-foreground">— → 35-40%</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-background border border-border rounded-lg">
              <span className="text-muted-foreground">Direct Traffic Share</span>
              <span className="font-bold text-foreground">20-25% → 30%</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-background border border-border rounded-lg">
              <span className="text-muted-foreground">Year 1 Revenue Impact</span>
              <span className="font-bold text-primary">₹22-25Cr</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-background border border-border rounded-lg">
              <span className="text-muted-foreground">Year 2 Revenue Impact</span>
              <span className="font-bold text-primary">₹40-50Cr</span>
            </div>
          </div>
        </div>

        <div className="bg-primary/5 border border-primary/30 rounded-lg p-8 text-center">
          <p className="text-sm text-muted-foreground mb-2">THE CORE INSIGHT</p>
          <p className="text-lg font-bold text-foreground leading-relaxed">
            The Hindu has the most trusted journalism brand in India, the most premium digital audience of any Indian news property, and a product that currently fails to translate either of those advantages into daily engagement or subscriber revenue — and every one of those failures is fixable at the product layer, without touching a single editorial decision.
          </p>
        </div>
      </section>

      {/* Footer */}
      <section className="border-t border-border py-12 bg-background">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Full case study with detailed roadmaps, wireframes, and supporting research.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="https://linkedin.com/in/yashmahadik2" target="_blank" className="text-primary hover:text-primary/80 text-sm font-medium">
              LinkedIn
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="mailto:yashmahadik2005@gmail.com" className="text-primary hover:text-primary/80 text-sm font-medium">
              Email
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
