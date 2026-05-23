import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TheHinduCaseStudy() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/#case-studies" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <ArrowLeft size={18} />
            Back to Case Studies
          </Link>
          <p className="text-sm text-muted-foreground">THE HINDU</p>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary text-sm font-semibold tracking-wider mb-4">THE HINDU | DIGITAL MEDIA & GROWTH</p>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-foreground">Breaking the Bounce</h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            How to transform The Hindu from India&apos;s most trusted news source into its most engaged digital media platform. A comprehensive Growth PM case study addressing engagement, retention, and digital revenue.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="p-4 bg-primary/5 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground mb-1">Role</p>
              <p className="font-semibold text-foreground">Growth Product Manager</p>
            </div>
            <div className="p-4 bg-primary/5 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground mb-1">Focus Areas</p>
              <p className="font-semibold text-foreground">8 product surfaces</p>
            </div>
            <div className="p-4 bg-primary/5 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground mb-1">Year 1 Revenue Impact</p>
              <p className="font-semibold text-primary">₹22–25Cr</p>
            </div>
            <div className="p-4 bg-primary/5 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground mb-1">Target Metric</p>
              <p className="font-semibold text-foreground">MAD: 1.8 {String.fromCharCode(8594)} 4.0</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Section 1 */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Section 1: Assumptions & Data Sources</h2>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Financial Assumptions:</h3>
                <p>The Hindu Group (THG Publishing Private Limited) does not publicly release line-item revenue statements. Based on financial registry data from Tofler.in and Bitscale.ai, operating revenue is consistently above ₹500 crore annually. This case study assumes a FY2024–25 base revenue of ₹520 crore, with revenue mix: print advertising ~45%, digital advertising ~25%, digital subscriptions ~12%, print subscriptions ~10%, events and licensing ~8%.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Revenue Growth Trajectory:</h3>
                <p>FY25 actual ~₹520Cr, FY26 projected ~₹572Cr (+10%), FY27 projected ~₹640Cr (+12%), FY28 projected ~₹720Cr (+12.5%), driven primarily by digital subscription and programmatic ad revenue growth. Conservative 10–12% growth assumption relative to 15–18% CAGR seen by digital-first Indian media peers.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Digital Traffic (Semrush, May 2025):</h3>
                <p>Monthly visits: ~29–37M (average 32M). Bounce rate: approximately 77–80%, meaningfully higher than international peers like NYT (~55%) and The Guardian (~60%).</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Digital Subscription:</h3>
                <p>Current paid digital subscribers estimated at 300,000–400,000 (case uses 350,000). Average ARPU ~₹750/year. Digital subscription revenue estimated at ~₹26Cr annually.</p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Section 2: Product Overview</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>What is The Hindu?</strong> Founded in 1878 as a weekly broadsheet, The Hindu is one of India&apos;s most institutionally respected English-language dailies. It represents something rare in contemporary Indian media: a reputation for restraint, editorial independence, and fact-first journalism. The Hindu Group operates 17 print editions across India with the website thehindu.com as a growing digital ecosystem.
              </p>
              <p>
                <strong>The Business Model:</strong> Revenue engine has three pillars: print advertising (~45%, structurally declining), digital advertising (~25%, growing), and subscriptions (~22% combined digital and print, highest-margin and most strategic). Credible journalism attracts a high-quality, high-intent audience of professionals, students, and policymakers (70% in upper-middle or high income brackets).
              </p>
              <p>
                <strong>The Problem:</strong> Despite 32 million monthly website visitors, The Hindu&apos;s bounce rate sits at 77–80%. Most visitors read one article and leave. Sessions are shallow. Subscription funnel converts poorly because visitors never develop a daily habit that precedes a payment decision.
              </p>
              <p>
                <strong>The Opportunity:</strong> The digital transformation opportunity is a ₹200Cr upside over 3 years if the engagement gap is closed.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Section 3: Focus Area — The Revenue Chain</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>Revenue Chain:</strong> Total Revenue flows into two buckets. Advertising Revenue is driven by page views per session, return visit frequency, time on site, and ad fill rates. Subscription Revenue is driven by subscriber count, driven by subscription conversion rate, driven by habit formation, driven by daily active engagement.
              </p>
              <p>
                <strong>The Focus Metric: Monthly Active Days per User (MAD)</strong> — currently estimated at 1.8–2.2 days per month for the average thehindu.com visitor. Target: 4.5 days per month within 12 months. A user who visits once contributes fractionally to ad revenue and near-zero to subscription likelihood. A user who returns four days a week contributes 4–8× more ad revenue.
              </p>
              <p>
                <strong>Key Insight:</strong> The Hindu&apos;s brand value and Google Discover traffic bring users to the door every day. The product is failing to make them stay, return, or pay. This is entirely fixable without editorial change.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Section 4: The Problem — 32M Visitors, 77% Bounce Rate</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Most users arrive from search or social, read one article, and leave. The homepage and article experience offer no compelling reason to continue reading, return tomorrow, or subscribe.</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-6">
                <div className="p-4 bg-background border border-border rounded-lg">
                  <p className="text-xs text-muted-foreground mb-1">The Hindu DAU/MAU</p>
                  <p className="text-2xl font-bold text-foreground">6–8%</p>
                </div>
                <div className="p-4 bg-background border border-border rounded-lg">
                  <p className="text-xs text-muted-foreground mb-1">The Guardian</p>
                  <p className="text-2xl font-bold text-foreground">18%</p>
                </div>
                <div className="p-4 bg-background border border-border rounded-lg">
                  <p className="text-xs text-muted-foreground mb-1">NYT Digital</p>
                  <p className="text-2xl font-bold text-foreground">22%</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Core Problem Numbers:</h3>
                <ul className="space-y-2 text-sm">
                  <li>• ~77% of visits end after reading a single article</li>
                  <li>• Average session depth: 1.8 articles</li>
                  <li>• Returning visitor rate: 55% (nearly half traffic is one-time)</li>
                  <li>• Digital subscription conversion rate: under 0.5%</li>
                  <li>• Google Discover & SEO: drive ~65% of traffic (algorithmic dependency risk)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Section 5: User Segmentation</h2>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Segment 1: Search Arrivals (45% of monthly visitors)</h3>
                <p>Come via Google search for specific story, read one article, leave. Bounce rate ~85–90%. No brand relationship with The Hindu.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Segment 2: Occasional Readers / Primary Target (40% of monthly visitors)</h3>
                <p>Visit 2–5 times/month, have brand awareness, read 2–3 sections, never subscribed. Highest volume of addressable users. Converting 20% from 3 visits/month to 8 visits/month would move the needle dramatically.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Segment 3: Habitual Daily Readers (15% of monthly visitors)</h3>
                <p>Visit 15–25 times/month, read across sections, many are UPSC aspirants. High subscription intent but high resistance due to paywall friction.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Segment 4: Paid Subscribers (~350,000, ~1% of monthly visitors)</h3>
                <p>Unlimited access, highest loyalty, highest LTV. Each subscriber represents ~₹750/year in direct revenue. 5% churn reduction is worth ~₹1.3Cr annually.</p>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Section 6: Size & Impact Calculation</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>The Funnel:</strong> 32M monthly unique visitors, ~12.8M Occasional Readers, ~7.7M reachable via nudges, ~4.6M with 3+ visits in past 30 days.
              </p>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Impact Model:</h3>
                <ul className="space-y-2 text-sm">
                  <li>• 25% session depth improvement (1.8 {String.fromCharCode(8594)} 2.25 articles/visit)</li>
                  <li>• 15% return visit lift (3 {String.fromCharCode(8594)} 3.45 visits/month)</li>
                  <li>• Subscription conversion: 0.4% {String.fromCharCode(8594)} 0.9% (8+ articles/month users)</li>
                  <li>• Average ARPU: ₹750/year</li>
                </ul>
              </div>
              <div className="bg-primary/5 p-4 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-3">Projected Impact:</h3>
                <p className="mb-2"><strong>Ad Revenue Impact:</strong> 4.6M users × 15% lift × ₹0.80 RPM ≈ ₹5.5Cr incremental annual</p>
                <p className="mb-2"><strong>Subscription Revenue Impact:</strong> 4.6M users × 0.5% conversion lift = 23,000 new subscribers × ₹750 ≈ ₹17.3Cr incremental</p>
                <p><strong>Total Year 1:</strong> ₹22–25Cr incremental revenue, growing to ₹40–50Cr in Year 2</p>
              </div>
            </div>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Section 7: Problem Validation & Competitor Research</h2>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">5 Validated Hypotheses:</h3>
                <ul className="space-y-2 text-sm">
                  <li><strong>H1:</strong> Homepage has no personalisation — users see identical content regardless of reading history</li>
                  <li><strong>H2:</strong> Paywall experience creates confusion with unclear value proposition</li>
                  <li><strong>H3:</strong> No daily reason to open thehindu.com — reactive, event-driven notifications only</li>
                  <li><strong>H4:</strong> Article recommendation is weak — related articles are tangentially related or old</li>
                  <li><strong>H5:</strong> Google Discover dependency is vulnerability — 50–65% of traffic is algorithmic</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Competitor Benchmarking (NYT, Guardian, FT, HT, Indian Express vs The Hindu):</h3>
                <div className="overflow-x-auto text-xs">
                  <table className="w-full">
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="py-2 font-semibold">Feature</td>
                        <td className="py-2">NYT</td>
                        <td className="py-2">Guardian</td>
                        <td className="py-2">The Hindu</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2">Personalised homepage</td>
                        <td className="py-2">Yes</td>
                        <td className="py-2">Yes</td>
                        <td className="py-2 text-red-600">No</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2">Topic-follow feature</td>
                        <td className="py-2">Yes</td>
                        <td className="py-2">Yes</td>
                        <td className="py-2 text-red-600">No</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2">Morning briefing push</td>
                        <td className="py-2">Yes</td>
                        <td className="py-2">Yes</td>
                        <td className="py-2 text-red-600">No</td>
                      </tr>
                      <tr>
                        <td className="py-2">Free trial offer</td>
                        <td className="py-2">Yes</td>
                        <td className="py-2">Yes</td>
                        <td className="py-2 text-red-600">No</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm"><strong>Key Learning:</strong> The Hindu has the worst digital engagement feature set among global peers — despite strongest editorial brand among Indian peers. Enormous gap between brand quality and product quality.</p>
              </div>
            </div>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Section 8: User Persona — Priya Raghavan</h2>
            <div className="bg-background border border-border rounded-lg p-6 space-y-4 text-muted-foreground">
              <div>
                <p className="font-semibold text-foreground">32 years old. Deputy Manager, public sector bank. Chennai. Economics postgraduate. Preparing for UPSC Mains.</p>
                <p className="italic mt-2">{String.fromCharCode(34)}I check The Hindu when there&apos;s something big happening — an election result, a Budget. The rest of the time I forget it exists.{String.fromCharCode(34)}</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Unmet Goals:</h3>
                <ul className="text-sm space-y-1">
                  <li>• Stay current on national affairs without 20+ min/day investment</li>
                  <li>• Use The Hindu for UPSC prep (currently switches between apps)</li>
                  <li>• Trust a single source instead of triangulating across three</li>
                  <li>• Build consistent reading habit</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Pain Points:</h3>
                <ul className="text-sm space-y-1">
                  <li>• Homepage overwhelming, no hierarchy for her interests</li>
                  <li>• No {String.fromCharCode(34)}catch up{String.fromCharCode(34)} feature when away</li>
                  <li>• Can{String.fromCharCode(39)}t save articles within The Hindu (screenshots instead)</li>
                  <li>• Paywall appears mid-article with no warning</li>
                  <li>• No clarity on subscription cost until hit paywall in frustration</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 9 */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Section 9: User Journey Map — Daily News Cycle</h2>
            <div className="space-y-4">
              {[
                { stage: "Stage 1: Trigger (Morning)", thought: "Let me see what The Hindu says", emotion: "Purposeful, focused" },
                { stage: "Stage 2: Article Consumption", thought: "This is exactly the reporting I wanted", emotion: "Satisfied" },
                { stage: "Stage 3: End of Article", thought: "What else should I read?", emotion: "Uncertain, lost" },
                { stage: "Stage 4: Brief Exploration", thought: "I don't know where to go from here", emotion: "Overwhelmed" },
                { stage: "Stage 5: Exit", thought: "I should subscribe but I don't open it enough", emotion: "Guilty, not compelled" }
              ].map((item, idx) => (
                <div key={idx} className="p-4 bg-background border border-border rounded-lg">
                  <p className="font-semibold text-foreground mb-2">{item.stage}</p>
                  <p className="text-sm text-muted-foreground">Thought: {item.thought}</p>
                  <p className="text-sm text-muted-foreground">Emotion: {item.emotion}</p>
                </div>
              ))}
              <div className="p-4 bg-primary/5 border border-border rounded-lg mt-4">
                <p className="font-semibold text-foreground mb-2">The Engagement Graveyard Moment:</p>
                <p className="text-sm text-muted-foreground">Article-end is The Hindu&apos;s highest-engagement moment, immediately followed by a void. No personalised next read. No topic thread. The highest-intent moment is completely wasted.</p>
              </div>
            </div>
          </div>

          {/* Section 10 */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Section 10: Root Cause Analysis — 5 Core Issues</h2>
            <div className="space-y-4 text-muted-foreground">
              <div className="p-4 bg-background border border-border rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">Root Cause 1: No Owned Daily Habit Trigger</h3>
                <p className="text-sm">Every major digital media brand solved engagement through proprietary daily ritual — NYT (The Morning), Guardian (Today in Focus), FT (Daily Briefing). The Hindu lacks this.</p>
              </div>
              <div className="p-4 bg-background border border-border rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">Root Cause 2: Article Recommendation Does Not Respect Reading History</h3>
                <p className="text-sm">{String.fromCharCode(34)}Related Articles{String.fromCharCode(34)} at bottom of articles surfaces algorithmically weak or generic suggestions. User after reading RBI analysis sees old interest rates story, not related RBI pieces.</p>
              </div>
              <div className="p-4 bg-background border border-border rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">Root Cause 3: Homepage Is Not Personalised</h3>
                <p className="text-sm">19-story editorial selection identical for every visitor. Right for print newspaper, wrong for digital product with reading history data. Hick&apos;s Law violation: equal visual weight causes decision paralysis.</p>
              </div>
              <div className="p-4 bg-background border border-border rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">Root Cause 4: Subscription Funnel Lacks Value Narrative</h3>
                <p className="text-sm">Paywall is hard stop without context. No {String.fromCharCode(34)}you&apos;ve read 15 articles this month{String.fromCharCode(34)}} message. No cost anchoring. No free trial. NYT paywall converts 1.5–2% of free users; The Hindu under 0.5%.</p>
              </div>
              <div className="p-4 bg-background border border-border rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">Root Cause 5: Google Dependency Is Existential Risk</h3>
                <p className="text-sm">50–65% of traffic from search/Discover (borrowed traffic). Direct traffic only 20–25%. Google algorithm changes cause documented drops. Goal-Gradient Effect: engaged users invested in 5 topics, 3 newsletters, app = won{String.fromCharCode(39)}t leave if Google changes.</p>
              </div>
            </div>
          </div>

          {/* Section 11 */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Section 11: Solution Ideation — Three Options</h2>
            <div className="space-y-4 text-muted-foreground">
              <div className="p-4 bg-background border border-border rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">Option 1: Full Platform Personalisation Overhaul</h3>
                <p className="text-sm mb-2">ML-driven homepage like Spotify. Every user different homepage. Benefits: Highest engagement lift. Risks: 12–18 month investment, over-personalisation filter bubbles, editorial resistance.</p>
              </div>
              <div className="p-4 bg-background border border-border rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">Option 2: Subscription-First Funnel Redesign</h3>
                <p className="text-sm mb-2">Focus on converting Habitual Readers (15%) via paywall redesign, trial, subscriber-exclusive features. Benefits: Direct monetisation. Risks: Doesn{String.fromCharCode(39)}t solve engagement — high conversion of low traffic.</p>
              </div>
              <div className="p-4 bg-primary/5 border border-border rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">Option 3: The Hindu Pulse — Chosen for MVP (Recommended)</h3>
                <p className="text-sm mb-2"><strong>Lightweight daily engagement layer:</strong> Personalised morning push + newsletter, topic-follow feature, improved article-end recommendations, {String.fromCharCode(34)}catch-up{String.fromCharCode(34)}} homepage state, redesigned subscription with trial.</p>
                <p className="text-sm"><strong>Benefits:</strong> Solves all 4 pain points, lower engineering effort (additive), incremental A/B testing, respects editorial hierarchy. <strong>Philosophy:</strong> Editorial experience must remain editorial. Product serves reader intelligence, never exploits attention psychology.</p>
              </div>
            </div>
          </div>

          {/* Section 12 */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Section 12: MVP Scope via RICE Scoring</h2>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="p-3 bg-background border border-border rounded">
                <p className="font-semibold text-foreground">Personalised Morning Push / Daily Brief</p>
                <p>Reach 9 × Impact 9 × Confidence 8 ÷ Effort 2 = <strong>Score 324</strong> ✓ MVP</p>
              </div>
              <div className="p-3 bg-background border border-border rounded">
                <p className="font-semibold text-foreground">Improved Article-End Recommendation</p>
                <p>Reach 10 × Impact 9 × Confidence 8 ÷ Effort 3 = <strong>Score 240</strong> ✓ MVP</p>
              </div>
              <div className="p-3 bg-background border border-border rounded">
                <p className="font-semibold text-foreground">Paywall Value Proposition + Trial</p>
                <p>Reach 6 × Impact 10 × Confidence 8 ÷ Effort 3 = <strong>Score 160</strong> ✓ MVP</p>
              </div>
              <div className="p-3 bg-background border border-border rounded">
                <p className="font-semibold text-foreground">Topic-Follow / Journalist-Follow</p>
                <p>Reach 7 × Impact 8 × Confidence 7 ÷ Effort 4 = <strong>Score 98</strong> → V2</p>
              </div>
              <div className="p-3 bg-background border border-border rounded">
                <p className="font-semibold text-foreground">Homepage Personalisation</p>
                <p>Reach 8 × Impact 9 × Confidence 7 ÷ Effort 6 = <strong>Score 84</strong> → V2</p>
              </div>
            </div>
          </div>

          {/* Section 13 */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Section 13: Solution Overview — The Hindu Pulse</h2>
            <div className="space-y-6 text-muted-foreground">
              <p><strong>A personalised daily engagement layer giving every reader a compelling reason to open thehindu.com each morning and a clear reason to subscribe.</strong></p>
              
              <div className="space-y-4">
                <div className="p-4 bg-background border border-border rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Component 1: The Morning Pulse</h3>
                  <p className="text-sm">7:00 AM personalised digest with: 3 top stories based on topic history, 1 &quot;missed&quot; story from past 24h, 1 continuing thread update if read 3+ articles. Subject lines editorially guardrailed, never clickbait. UX Law: Zeigarnik Effect (unfinished threads pull users back).</p>
                </div>
                <div className="p-4 bg-background border border-border rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Component 2: The Next Read Module</h3>
                  <p className="text-sm mb-2">Article-end redesign with 3 cards: (1) &quot;Next in this story&quot; — most recent same-thread article, (2) &quot;More from [Reporter]&quot; — drives journalist loyalty, (3) &quot;Readers in your area also read&quot; — collaborative filtering.</p>
                  <p className="text-sm">UX Law: Miller&apos;s Law (exactly 3 options, not 8) + Peak-End Rule (end of good article = highest intent).</p>
                </div>
                <div className="p-4 bg-background border border-border rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Component 3: Paywall & Subscription Redesign</h3>
                  <p className="text-sm mb-2">Soft counter: &quot;5 articles remaining this week&quot; visible to logged-in users (removes surprise). Paywall shows: &quot;You&apos;ve read 12 articles about Indian economy. Subscribers read avg 48.&quot; Pricing: &quot;₹65/month — less than your morning coffee.&quot; 7-day free trial (no charge until Day 8).</p>
                  <p className="text-sm">UX Law: Loss Aversion (&quot;missing&quot; framing) + Transparency Heuristic (visible counter) + Anchoring (₹65 vs coffee).</p>
                </div>
                <div className="p-4 bg-background border border-border rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Component 4: Google Discover & SEO Optimisation</h3>
                  <p className="text-sm">Domain authority 94–96 (extraordinary asset). Initiatives: structured data markup improvements, AMP optimisation, topic cluster strategy (10–15 hubs like &quot;Union Budget&quot;, &quot;Supreme Court&quot;), web stories for Discover.</p>
                </div>
                <div className="p-4 bg-background border border-border rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Component 5: Push Notification Cadence</h3>
                  <p className="text-sm">Morning: personalised brief (7 AM). Breaking: high-importance only (max 1/day). Evening: {{String.fromCharCode(34)}Top read today{{String.fromCharCode(34)}} (if no morning open). Weekly: {{String.fromCharCode(34)}Your reading month{{String.fromCharCode(34)}} (Spotify Wrapped style). <strong>Rule:</strong> No purely commercial pushes — editorial value first.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 14 */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Section 14: User Stories & Acceptance Criteria</h2>
            <div className="space-y-4 text-muted-foreground">
              <div className="p-4 bg-background border border-border rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">User Story 1: Morning Pulse (MVP)</h3>
                <p className="text-sm mb-2"><strong>As a</strong> registered user, <strong>I want</strong> personalised morning brief, <strong>so that</strong> I have reason to open The Hindu first not Twitter.</p>
                <p className="text-sm"><strong>Acceptance Criteria:</strong> 6:45–7:15 AM delivery by timezone, 3 personalised headlines, 1 missed story from top topics, deep-link to articles, 4-hour deduplication, customisable time, 1-tap opt-out, open rate tracked and shared.</p>
              </div>
              <div className="p-4 bg-background border border-border rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">User Story 2: Next Read Module (MVP)</h3>
                <p className="text-sm mb-2"><strong>As a</strong> user who finished article, <strong>I want</strong> curated {{String.fromCharCode(34)}what next{{String.fromCharCode(34)}} selection, <strong>so that</strong> I continue without returning to homepage.</p>
                <p className="text-sm"><strong>Acceptance Criteria:</strong> Render within 200ms at {{String.fromCharCode(34)}scroll end, 3 cards (Next in story / More from Reporter / Recommended), show headline/section/read-time/age, SPA transition, never older than 14 days, A/B test vs current 5-card layout measuring next-article CTR.</p>
              </div>
              <div className="p-4 bg-background border border-border rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">User Story 3: Paywall & Trial (MVP)</h3>
                <p className="text-sm mb-2"><strong>As a</strong> paywall-hitting user, <strong>I want</strong> clear value + low-friction trial, <strong>so that</strong> I make confident decision.</p>
                <p className="text-sm"><strong>Acceptance Criteria:</strong> Soft counter visible to logged-in users, personalised {{String.fromCharCode(34)}you{{String.fromCharCode(39)}ve read N articles{{String.fromCharCode(34)}} messaging, monthly pricing + annual default, 7-day trial button prominent (email + payment method, not charged until Day 8), Day 6 reminder push, trial conversion tracked, no paywall on AMP first article per session.</p>
              </div>
            </div>
          </div>

          {/* Section 15 */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Section 15: A/B Testing Roadmap (6 Months)</h2>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="p-3 bg-background border border-border rounded">
                <p className="font-semibold text-foreground mb-1">Month 1–2</p>
                <p>Test 1: Morning push personalised vs editorial top 3 (measure 7-day open rate + Day 30 return rate)</p>
                <p>Test 2: Article-end 3 curated cards vs 5 generic related (measure next-article CTR, session depth, bounce)</p>
              </div>
              <div className="p-3 bg-background border border-border rounded">
                <p className="font-semibold text-foreground mb-1">Month 3–4</p>
                <p>Test 3: Paywall soft counter visible vs invisible (measure surprise abandonment + trial start rate)</p>
                <p>Test 4: Generic {{String.fromCharCode(34)}subscribe{String.fromCharCode(34)}} vs personalised {{String.fromCharCode(34)}you{String.fromCharCode(39)}ve read N{String.fromCharCode(34)}} copy (measure trial + subscription conversion)</p>
              </div>
              <div className="p-3 bg-background border border-border rounded">
                <p className="font-semibold text-foreground mb-1">Month 5–6</p>
                <p>Test 5: 7-day trial vs 14-day trial (measure trial-to-paid conversion + abuse rate)</p>
                <p>Test 6: {{String.fromCharCode(34)}Top read today{{String.fromCharCode(34)}} evening push vs no push (measure incremental daily opens + opt-out rate)</p>
              </div>
              <p className="text-xs italic mt-4">All tests run minimum 2 weeks, 80% statistical power before winner declared. Learnings documented, presented fortnightly.</p>
            </div>
          </div>

          {/* Section 16 */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Section 16: Success Metrics Framework</h2>
            <div className="space-y-4 text-muted-foreground">
              <div className="p-4 bg-primary/5 border border-border rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">North Star: Monthly Active Days per User (MAD)</h3>
                <p className="text-sm mb-2">Baseline: 1.8–2.2 days/month (Occasional Readers). Target: 4.0 days/month (6 months). Leading indicator of both ad revenue per user and subscription conversion.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3">L1 — Primary Functional Metrics:</h3>
                <div className="space-y-2 text-sm">
                  <div className="p-3 bg-background border border-border rounded">
                    <p><strong>Morning Push Open Rate</strong></p>
                    <p>Target: {String.fromCharCode(62)}22% (WhatsApp-level for high-trust senders)</p>
                  </div>
                  <div className="p-3 bg-background border border-border rounded">
                    <p><strong>Article-End Module CTR</strong></p>
                    <p>Target: {String.fromCharCode(62)}28% vs current est. 8–12%</p>
                  </div>
                  <div className="p-3 bg-background border border-border rounded">
                    <p><strong>Session Depth</strong></p>
                    <p>Baseline: 1.8 articles/session. Target: 2.5</p>
                  </div>
                  <div className="p-3 bg-background border border-border rounded">
                    <p><strong>Subscription Trial Start Rate</strong></p>
                    <p>Target: 8–12% of paywall-hit users (vs {{String.fromCharCode(60)}}1% currently)</p>
                  </div>
                  <div className="p-3 bg-background border border-border rounded">
                    <p><strong>Trial-to-Paid Conversion</strong></p>
                    <p>Industry benchmark: 35–45%</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3">L2 — Secondary Functional Metrics:</h3>
                <ul className="text-sm space-y-2">
                  <li>• Direct Traffic Share: 20–25% {String.fromCharCode(8594)} 30% (12 months)</li>
                  <li>• Newsletter Open Rate: Target {String.fromCharCode(62)}35% (above industry avg)</li>
                  <li>• App DAU: tracked separately from web</li>
                  <li>• UPSC segment engagement: articles-per-visit + return rate</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3">Failure / Counter-Metrics (Circuit Breakers):</h3>
                <ul className="text-sm space-y-2">
                  <li>• Push opt-out rate {{String.fromCharCode(62)}}4% = notification too aggressive</li>
                  <li>• Subscription churn increase = paywall redesign failed</li>
                  <li>• Organic search {String.fromCharCode(62)}70% of traffic = owned channels not working</li>
                  <li>• Editorial NPS decline = product compromised journalism perception</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 17 */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Section 17: Risk & Mitigation Strategies</h2>
            <div className="space-y-4 text-muted-foreground">
              <div className="p-4 bg-background border border-border rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">Risk 1: Editorial Resistance</h3>
                <p className="text-sm mb-2"><strong>Problem:</strong> Editorial team may resist algorithmic personalisation, viewing it as compromising curation.</p>
                <p className="text-sm"><strong>Mitigation:</strong> {{String.fromCharCode(34)}Next Read{{String.fromCharCode(34)}} editorially guardrailed — stories tagged by reporters, not algorithm. Personalisation supplements curation, not replaces. Propose joint editorial-product working group owning taxonomy.</p>
              </div>
              <div className="p-4 bg-background border border-border rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">Risk 2: Notification Fatigue</h3>
                <p className="text-sm mb-2"><strong>Problem:</strong> Daily morning briefs to 350k+ users risks opt-out spikes if personalisation weak early.</p>
                <p className="text-sm"><strong>Mitigation:</strong> Rollout to 20% first month. Monitor open + opt-out weekly. Scale only if {{String.fromCharCode(62)}}18% open rate. Cap 2 notifications/user/day (morning + breaking). Never purely promotional.</p>
              </div>
              <div className="p-4 bg-background border border-border rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">Risk 3: Trial Abuse</h3>
                <p className="text-sm mb-2"><strong>Problem:</strong> 7-day free trial exploitable via multiple accounts.</p>
                <p className="text-sm"><strong>Mitigation:</strong> Require payment method at trial start (industry standard). Flag duplicate payment methods. One trial per instrument. Monitor trial-completion ratio — if {{String.fromCharCode(60)}}40%, trial experience needs fixing not access controls.</p>
              </div>
              <div className="p-4 bg-background border border-border rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">Risk 4: Google Algorithm Vulnerability</h3>
                <p className="text-sm mb-2"><strong>Problem:</strong> Transitioning from SEO to owned channels risks traffic dip if Discover deprioritised.</p>
                <p className="text-sm"><strong>Mitigation:</strong> Maintain parallel SEO/Discover workstream. Never sacrifice SEO for engagement experiments. Track Google Discover impressions weekly as health metric.</p>
              </div>
              <div className="p-4 bg-background border border-border rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">Risk 5: Digital Cannibalising Print</h3>
                <p className="text-sm mb-2"><strong>Problem:</strong> Aggressive digital growth may hurt print subscriptions.</p>
                <p className="text-sm"><strong>Mitigation:</strong> Digital skews younger/urban/mobile. Print different demographic = relatively clean segmentation. Monitor by region/cohort. Offer print-plus-digital bundles to prevent substitution.</p>
              </div>
            </div>
          </div>

          {/* Section 18 */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Section 18: Future Roadmap — V2 & V3</h2>
            <div className="space-y-4 text-muted-foreground">
              <div className="p-4 bg-background border border-border rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">V2 — Topic & Journalist Follows</h3>
                <p className="text-sm">Follow Supreme Court, Union Budget, Climate topics. Follow individual journalists. Drives loyalty — NYT{String.fromCharCode(39)}s most-followed journalists have lowest churn.</p>
              </div>
              <div className="p-4 bg-background border border-border rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">V2 — The Hindu Wrapped (Annual)</h3>
                <p className="text-sm">Spotify Wrapped model: total articles read, top topics/journalists/headlines. Shareable. Drives affinity + social proof. Subscribers get exclusive {{String.fromCharCode(34)}top 10% depth{String.fromCharCode(34)}} stats.</p>
              </div>
              <div className="p-4 bg-background border border-border rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">V2 — The Hindu for UPSC</h3>
                <p className="text-sm">Dedicated UPSC track with daily curated brief mapping stories to GS syllabus, editorials, vocabulary, practice questions. Premium tier ₹2,500–3,000/year. Addressable: 2–3M aspirants (highest-intent niche).</p>
              </div>
              <div className="p-4 bg-background border border-border rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">V3 — The Hindu Community</h3>
                <p className="text-sm">Subscriber community: curated comments, journalist AMAs, subscriber-exclusive webinars, offline reader events (Chennai/Bengaluru/Delhi/Mumbai). Guardian model translated to India. Est. 15–20% churn reduction for members.</p>
              </div>
              <div className="p-4 bg-background border border-border rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">V3 — AI Newsroom Tools</h3>
                <p className="text-sm">CMS-integrated AI: real-time SEO score, suggested article tags, automated structured data, headline A/B testing. Bridges editorial + tech. Journalists spend more time reporting, less on workflow.</p>
              </div>
            </div>
          </div>

          {/* Section 19 */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Section 19: Target Outcomes (6 Months)</h2>
            <div className="space-y-3 text-sm">
              <div className="p-3 bg-primary/5 border border-border rounded-lg">
                <div className="flex justify-between items-center font-semibold text-foreground">
                  <span>Monthly Active Days (MAD)</span>
                  <span>1.8 {String.fromCharCode(8594)} 4.0 days/month</span>
                </div>
              </div>
              <div className="p-3 bg-background border border-border rounded-lg">
                <div className="flex justify-between items-center">
                  <span>Article-End CTR</span>
                  <span className="font-semibold">~10% {String.fromCharCode(8594)} 28%+</span>
                </div>
              </div>
              <div className="p-3 bg-background border border-border rounded-lg">
                <div className="flex justify-between items-center">
                  <span>Morning Push Open Rate</span>
                  <span className="font-semibold">New {String.fromCharCode(8594)} {String.fromCharCode(62)}}22%</span>
                </div>
              </div>
              <div className="p-3 bg-background border border-border rounded-lg">
                <div className="flex justify-between items-center">
                  <span>Trial Start Rate</span>
                  <span className="font-semibold">~0.5% {String.fromCharCode(8594)} 8–12%</span>
                </div>
              </div>
              <div className="p-3 bg-background border border-border rounded-lg">
                <div className="flex justify-between items-center">
                  <span>Trial-to-Paid Conversion</span>
                  <span className="font-semibold">New {String.fromCharCode(8594)} 35–40%</span>
                </div>
              </div>
              <div className="p-3 bg-background border border-border rounded-lg">
                <div className="flex justify-between items-center">
                  <span>Direct Traffic Share</span>
                  <span className="font-semibold">20–25% {String.fromCharCode(8594)} 30%</span>
                </div>
              </div>
              <div className="p-3 bg-primary/5 border border-border rounded-lg font-semibold text-foreground">
                <div>Est. Incremental Revenue (Year 1)</div>
                <div className="text-lg">₹22–25Cr</div>
                <div className="text-xs font-normal text-muted-foreground mt-1">Growing to ₹40–50Cr in Year 2</div>
              </div>
            </div>
          </div>

          {/* Section 20 */}
          <div className="bg-primary/5 border border-border rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Summary: The Case in One Sentence</h2>
            <p className="text-lg text-muted-foreground italic">
              The Hindu has the most trusted journalism brand in India, the most premium digital audience of any Indian news property, and a product that currently fails to translate either into daily engagement or subscriber revenue — and every one of those failures is fixable at the product layer, without touching a single editorial decision.
            </p>
          </div>

          {/* Meta */}
          <div className="text-center pt-8 border-t border-border">
            <p className="text-muted-foreground text-sm mb-2">Authored by Yash Mahadik</p>
            <div className="flex items-center justify-center gap-4 text-sm">
              <Link href="https://yashmahadik.vercel.app" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Portfolio
              </Link>
              <span className="text-border">•</span>
              <Link href="https://linkedin.com/in/yashmahadik2" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                LinkedIn
              </Link>
            </div>
            <p className="text-xs text-muted-foreground mt-4">Pain Points Addressed: 5 core | Product Areas: 8 | Experiments Designed: 6 | Revenue Uplift (Year 1): ₹22–25Cr | UX Laws Applied: 8+</p>
          </div>
        </div>
      </section>
    </main>
  )
}
