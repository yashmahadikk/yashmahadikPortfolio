import Link from "next/link"
import { ArrowLeft, TrendingUp, Users, Mail, Target, BarChart3, Newspaper, Zap, CheckCircle2 } from "lucide-react"

export default function TheHinduCaseStudy() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/#case-studies" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft size={18} />
            <span className="text-sm font-medium">Back to Case Studies</span>
          </Link>
          <span className="text-sm font-semibold text-foreground">The Hindu - Growth PM Case Study</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-[#1C1008] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[1fr_320px] gap-12">
            <div>
              <p className="text-[#BE1E2D] text-sm font-semibold tracking-wider mb-4">GROWTH PRODUCT MANAGER - APPLICATION CASE STUDY</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-2 text-[#F5F0E8]">
                Breaking the Bounce
              </h1>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-[#BE1E2D]">
                32M Visitors, 79% Bounce Rate, ₹22Cr Opportunity
              </h1>
              <p className="text-lg text-[#9E9386] italic max-w-xl mb-8 leading-relaxed">
                How The Hindu can transform India&apos;s most trusted news brand into its most engaged digital platform by fixing the discovery-to-subscription funnel through product and distribution intelligence.
              </p>
              <div className="flex flex-wrap gap-8 text-sm">
                <div>
                  <p className="text-[#6A6058] text-xs uppercase tracking-wider mb-1">Role</p>
                  <p className="text-[#F5F0E8] font-semibold">Growth Product Manager</p>
                </div>
                <div>
                  <p className="text-[#6A6058] text-xs uppercase tracking-wider mb-1">Focus</p>
                  <p className="text-[#F5F0E8] font-semibold">Engagement, Retention & Revenue</p>
                </div>
                <div>
                  <p className="text-[#6A6058] text-xs uppercase tracking-wider mb-1">Author</p>
                  <p className="text-[#F5F0E8] font-semibold">Yash Mahadik</p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 p-8 rounded-lg space-y-6">
              <div className="border-b border-white/10 pb-6">
                <p className="text-[#6A6058] text-xs uppercase tracking-wider mb-2">Total Addressable</p>
                <p className="text-3xl font-bold text-white">₹200Cr</p>
              </div>
              <div className="border-b border-white/10 pb-6">
                <p className="text-[#6A6058] text-xs uppercase tracking-wider mb-2">Year 1 Impact</p>
                <p className="text-3xl font-bold text-[#BE1E2D]">₹22-25Cr</p>
              </div>
              <div>
                <p className="text-[#6A6058] text-xs uppercase tracking-wider mb-2">Growth Metric</p>
                <p className="text-2xl font-bold text-white">1.8 → 4.0</p>
                <p className="text-xs text-[#9E9386] mt-1">Monthly Active Days</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif italic font-bold text-foreground mb-8">Executive Summary</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-background border border-border p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Newspaper className="text-primary" size={24} />
                <h3 className="font-semibold text-foreground">The Problem</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">32M monthly visitors but 79% bounce rate. Users read one article and leave. No daily habit formation means no subscription conversion. Revenue opportunity abandoned at the product layer.</p>
            </div>
            <div className="bg-background border border-border p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-primary" size={24} />
                <h3 className="font-semibold text-foreground">The Opportunity</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">4.6M highly engaged users who visit 3+ times monthly. Converting 20% from 3 visits/month to 8 visits/month unlocks ₹22-25Cr Year 1, growing to ₹40-50Cr Year 2.</p>
            </div>
            <div className="bg-background border border-border p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-primary" size={24} />
                <h3 className="font-semibold text-foreground">The Solution</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">The Hindu Pulse: personalised morning push, article-end recommendations, redesigned paywall with trial, and SEO/Discover optimisation. 3 MVP features, 4 L2 features, 6 month runway.</p>
            </div>
          </div>

          {/* Key Data */}
          <div className="bg-red-50 p-8 rounded-lg mb-12">
            <h3 className="text-lg font-bold text-foreground mb-6">The Funnel Problem</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-white rounded border border-red-200">
                <p className="text-3xl font-bold text-[#BE1E2D] mb-1">32M</p>
                <p className="text-xs font-semibold text-muted-foreground">Monthly Visitors</p>
                <p className="text-xs text-red-500 mt-2">100%</p>
              </div>
              <div className="text-center p-4 bg-white rounded border border-red-200">
                <p className="text-3xl font-bold text-[#BE1E2D] mb-1">2.5M</p>
                <p className="text-xs font-semibold text-muted-foreground">Engaged Readers</p>
                <p className="text-xs text-red-500 mt-2">-79% drop</p>
              </div>
              <div className="text-center p-4 bg-white rounded border border-red-200">
                <p className="text-3xl font-bold text-[#BE1E2D] mb-1">400K</p>
                <p className="text-xs font-semibold text-muted-foreground">Registered Users</p>
                <p className="text-xs text-red-500 mt-2">-84% drop</p>
              </div>
              <div className="text-center p-4 bg-white rounded border border-red-200">
                <p className="text-3xl font-bold text-[#BE1E2D] mb-1">120K</p>
                <p className="text-xs font-semibold text-muted-foreground">Paying Subscribers</p>
                <p className="text-xs text-red-500 mt-2">-70% drop</p>
              </div>
            </div>
          </div>

          {/* Root Causes */}
          <div className="mb-12">
            <h3 className="text-lg font-bold text-foreground mb-6">Five Root Causes of Engagement Failure</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-primary bg-background p-4 rounded">
                <h4 className="font-semibold text-foreground mb-2">01. No Daily Habit Trigger</h4>
                <p className="text-sm text-muted-foreground">No personalised morning brief creating a daily opening ritual. Newsletters exist but are not habit-forming or positioned as &quot;your reason to start the day.&quot;</p>
              </div>
              <div className="border-l-4 border-primary bg-background p-4 rounded">
                <h4 className="font-semibold text-foreground mb-2">02. Article Recommendation Doesn&apos;t Respect History</h4>
                <p className="text-sm text-muted-foreground">&quot;Related Articles&quot; at article-end surfaces weak algorithmic suggestions instead of respecting the reader&apos;s actual reading pattern and interests.</p>
              </div>
              <div className="border-l-4 border-primary bg-background p-4 rounded">
                <h4 className="font-semibold text-foreground mb-2">03. Homepage Not Personalised</h4>
                <p className="text-sm text-muted-foreground">19-story editorial selection identical for every visitor. Returning users with clear interest signals see the same homepage as first-time visitors.</p>
              </div>
              <div className="border-l-4 border-primary bg-background p-4 rounded">
                <h4 className="font-semibold text-foreground mb-2">04. Subscription Value Unclear</h4>
                <p className="text-sm text-muted-foreground">Paywall is a hard stop with minimal value communication. No free trial. No &quot;you&apos;ve read 15 articles, here&apos;s what subscribers have access to&quot; moment.</p>
              </div>
              <div className="border-l-4 border-primary bg-background p-4 rounded">
                <h4 className="font-semibold text-foreground mb-2">05. Google Dependency Risk</h4>
                <p className="text-sm text-muted-foreground">65% of traffic from search/Discover. Direct traffic only 20-25%. Algorithm changes could cut 30-40% of traffic overnight. No owned audience moat.</p>
              </div>
            </div>
          </div>

          {/* The Solution */}
          <div className="mb-12">
            <h3 className="text-lg font-bold text-foreground mb-6">The Hindu Pulse: MVP Solution</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-background border border-border p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 size={20} className="text-green-600" />
                  <h4 className="font-semibold text-foreground">Morning Pulse Notification</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Personalised 7 AM briefing with 3 headlines + 1 missed story. Drives daily opening ritual and 22%+ open rate target (vs 18% baseline).</p>
                <p className="text-xs font-medium text-primary">RICE Score: 324 - MVP</p>
              </div>
              <div className="bg-background border border-border p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 size={20} className="text-green-600" />
                  <h4 className="font-semibold text-foreground">Next Read Module</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Article-end 3-card module: &quot;Next in this story,&quot; &quot;More from [Reporter],&quot; &quot;Recommended for you.&quot; Target 28%+ CTR (vs 10% baseline).</p>
                <p className="text-xs font-medium text-primary">RICE Score: 240 - MVP</p>
              </div>
              <div className="bg-background border border-border p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 size={20} className="text-green-600" />
                  <h4 className="font-semibold text-foreground">Paywall Redesign + Trial</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Visible article counter, personalised value messaging (&quot;You read 12 articles about [topic]&quot;), 7-day free trial. Target 8-12% trial start rate.</p>
                <p className="text-xs font-medium text-primary">RICE Score: 160 - MVP</p>
              </div>
            </div>
          </div>

          {/* Metrics */}
          <div className="bg-background border border-border p-8 rounded-lg">
            <h3 className="text-lg font-bold text-foreground mb-6">Success Metrics & Targets</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-foreground mb-4">North Star: Monthly Active Days (MAD)</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 bg-background">
                    <span className="text-sm text-muted-foreground">Baseline</span>
                    <span className="font-bold text-foreground">1.8-2.2 days/month</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-primary/5 rounded">
                    <span className="text-sm text-foreground">Target (6 months)</span>
                    <span className="font-bold text-primary">4.0 days/month</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">This single metric drives both ad revenue per user and subscription conversion. 2.2× improvement compounds into ₹22-25Cr Year 1 impact.</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-4">Revenue Impact Projection</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-background rounded border border-border">
                    <p className="text-xs text-muted-foreground">Ad Revenue Lift</p>
                    <p className="text-lg font-bold text-foreground">₹5.5Cr</p>
                  </div>
                  <div className="p-3 bg-background rounded border border-border">
                    <p className="text-xs text-muted-foreground">Subscription Revenue Lift</p>
                    <p className="text-lg font-bold text-foreground">₹17.3Cr</p>
                  </div>
                  <div className="p-3 bg-primary/10 rounded border border-primary">
                    <p className="text-xs text-foreground font-semibold">Year 1 Total</p>
                    <p className="text-lg font-bold text-primary">₹22-25Cr</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Full case study with 20 detailed sections, UX law applications, A/B testing roadmap, risk mitigation, and V2/V3 roadmap available on request.
          </p>
          <p className="text-xs text-muted-foreground">
            Tags: Engagement · Subscription Conversion · SEO · Retention · Digital Revenue · DAU/MAU · Content Discovery
          </p>
        </div>
      </section>
    </main>
  )
}
