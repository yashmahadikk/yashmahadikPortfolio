import Link from "next/link"
import { ArrowLeft, ArrowUpRight, Target, Users, TrendingUp, Lightbulb, BarChart3, Shield, Zap } from "lucide-react"

export const metadata = {
  title: "Chase Compass Case Study | Yash Mahadik",
  description: "Increasing Financial Feature Engagement on Chase Mobile through AI-powered personalization - a comprehensive product case study."
}

export default function ChaseCaseStudyPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between flex-wrap gap-2">
          <Link href="/#case-studies" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm md:text-base">
            <ArrowLeft size={16} className="md:w-5 md:h-5" />
            <span className="hidden sm:inline">Back to Case Studies</span>
            <span className="sm:hidden">Back</span>
          </Link>
          <a 
            href="https://chasecompass.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 md:px-4 py-2 bg-primary text-primary-foreground text-xs md:text-sm rounded-md hover:bg-primary/90 transition-colors"
          >
            View MVP
            <ArrowUpRight size={14} className="md:w-4 md:h-4" />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 md:pt-32 pb-12 md:pb-16 px-4 md:px-6 bg-[#002D6A] text-white">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#B8912A]/20 border border-[#B8912A]/30 rounded-full px-2 md:px-4 py-1 md:py-1.5 text-xs md:text-sm text-[#F0D078] mb-4 md:mb-6">
            Product Case Study
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-serif italic mb-4 md:mb-6 leading-tight">
            Increasing <span className="text-[#F0D078]">Financial Feature</span> Engagement on Chase Compass
          </h1>
          <p className="text-sm md:text-xl text-white/70 mb-6 md:mb-8 max-w-2xl leading-relaxed">
            Chase Compass is a ground-up redesign of Chase Mobile - built to guide every user toward financial clarity through an AI-powered compass experience.
          </p>
          <div className="bg-white/5 border border-white/10 border-l-4 border-l-[#B8912A] rounded-lg p-4 md:p-5 mb-6 md:mb-8">
            <p className="text-sm md:text-base text-white/90">
              <span className="text-[#F0D078] font-semibold">Objective:</span> Increase Monthly Active Feature Engagement (MAFE) by <span className="text-[#F0D078] font-semibold">25%</span> through Chase Compass to reduce churn, deepen retention, and grow Assets Under Management.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
            <div className="bg-white/5 border border-white/10 rounded-lg p-3 md:p-4 text-center">
              <div className="text-2xl md:text-3xl font-serif text-[#F0D078]">47%</div>
              <div className="text-xs md:text-sm text-white/50 mt-1">of MAU targeted</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-3 md:p-4 text-center">
              <div className="text-2xl md:text-3xl font-serif text-[#F0D078]">+25%</div>
              <div className="text-xs md:text-sm text-white/50 mt-1">MAFE target lift</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-3 md:p-4 text-center">
              <div className="text-2xl md:text-3xl font-serif text-[#F0D078]">$1.9B</div>
              <div className="text-xs md:text-sm text-white/50 mt-1">annual revenue impact</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-3 md:p-4 text-center">
              <div className="text-2xl md:text-3xl font-serif text-[#F0D078]">6 mo</div>
              <div className="text-xs md:text-sm text-white/50 mt-1">measurement window</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Business & Product Outcome */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-primary text-xs md:text-sm font-semibold mb-2">
            <span className="bg-[#002D6A] text-white px-2 py-0.5 rounded text-xs">01</span>
            BUSINESS & PRODUCT OUTCOME
          </div>
          <h2 className="text-2xl md:text-3xl font-serif italic text-foreground mb-3 md:mb-4">Business & Product Outcome Mapping</h2>
          <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">Understanding how increasing financial feature engagement connects to Chase&apos;s core business goals and unit economics.</p>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">The US Digital Banking Market</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="border border-border rounded-lg p-4">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Market Size</div>
                  <div className="text-2xl font-serif text-[#002D6A]">$12.7B</div>
                  <div className="text-xs text-muted-foreground">US digital banking revenue, 2024</div>
                </div>
                <div className="border border-border rounded-lg p-4">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Annual Growth</div>
                  <div className="text-2xl font-serif text-[#002D6A]">8.4%</div>
                  <div className="text-xs text-muted-foreground">CAGR projected 2024-2029</div>
                </div>
                <div className="border border-border rounded-lg p-4">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Chase Digital Users</div>
                  <div className="text-2xl font-serif text-[#002D6A]">57M</div>
                  <div className="text-xs text-muted-foreground">Monthly active digital customers</div>
                </div>
                <div className="border border-border rounded-lg p-4">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Mobile Penetration</div>
                  <div className="text-2xl font-serif text-[#002D6A]">78%</div>
                  <div className="text-xs text-muted-foreground">Of Chase customers use mobile</div>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-5">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Chase is the <strong className="text-foreground">#1 US bank by assets ($3.9T)</strong>, yet faces structural pressure from neobanks (Chime, SoFi) and wealth apps (Robinhood, Betterment) that capture user mindshare on financial planning. Compass reframes Chase Mobile from a transactional utility to a <strong className="text-foreground">financial navigation platform</strong>.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-border rounded-lg overflow-hidden">
              <div className="bg-blue-50 px-4 py-3 text-sm font-semibold text-[#002D6A] uppercase tracking-wider">Revenue Items - Per Active User / Month</div>
              <div className="p-4 space-y-3">
                <div className="flex justify-between text-sm"><span className="text-muted-foreground">Base Interchange (debit/credit)</span><span className="font-medium">$4.20</span></div>
                <div className="flex justify-between text-sm"><span className="text-muted-foreground">Advisory / Wealth Mgmt</span><span className="font-medium">$2.80</span></div>
                <div className="flex justify-between text-sm"><span className="text-muted-foreground">NII Contribution</span><span className="font-medium">$5.50</span></div>
                <div className="flex justify-between text-sm"><span className="text-muted-foreground">Premium Products</span><span className="font-medium">$1.90</span></div>
                <div className="border-t pt-3 flex justify-between"><span className="font-semibold">Total Revenue / Engaged User:</span><span className="font-serif text-xl text-[#B8912A]">$14.40</span></div>
              </div>
            </div>
            <div>
              <div className="border border-border rounded-lg overflow-hidden mb-3">
                <div className="bg-orange-50 px-4 py-3 text-sm font-semibold text-orange-700 uppercase tracking-wider">Cost Items - Per Active User / Month</div>
                <div className="p-4 space-y-3">
                  <div className="flex justify-between text-sm"><span className="text-muted-foreground">Platform & Infra</span><span className="font-medium">$2.10</span></div>
                  <div className="flex justify-between text-sm"><span className="text-muted-foreground">Compliance & Fraud</span><span className="font-medium">$3.20</span></div>
                  <div className="flex justify-between text-sm"><span className="text-muted-foreground">Customer Support</span><span className="font-medium">$1.60</span></div>
                  <div className="flex justify-between text-sm"><span className="text-muted-foreground">Retention Discounts</span><span className="font-medium">$0.90</span></div>
                  <div className="border-t pt-3 flex justify-between"><span className="font-semibold">Total Cost:</span><span className="font-serif text-xl text-orange-600">$7.80</span></div>
                </div>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="text-sm text-muted-foreground"><strong className="text-foreground">Profit per engaged user = $6.60/mo.</strong> A disengaged user (1-2 features) generates only $3.10/mo - less than cost. Every 1% lift in MAFE converts ~570K disengaged users to profitable.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Market & Segmentation */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-primary text-sm font-semibold mb-2">
            <span className="bg-[#002D6A] text-white px-2 py-0.5 rounded text-xs">02</span>
            MARKET & SEGMENTATION
          </div>
          <h2 className="text-3xl font-serif italic text-foreground mb-4">Market Understanding & User Segmentation</h2>
          <p className="text-muted-foreground mb-8">Mapping the competitive landscape, identifying user behavioral clusters, and selecting the highest-opportunity target segment.</p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="font-semibold text-foreground mb-4">Market Share & Competitive Differentiation</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-sm w-28 text-right text-muted-foreground">Chase</span>
                  <div className="flex-1 h-6 bg-gray-200 rounded overflow-hidden"><div className="h-full bg-[#002D6A] flex items-center justify-end pr-2 text-white text-xs font-medium" style={{width: '31%'}}>31%</div></div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm w-28 text-right text-muted-foreground">Bank of America</span>
                  <div className="flex-1 h-6 bg-gray-200 rounded overflow-hidden"><div className="h-full bg-[#1A4B9C] flex items-center justify-end pr-2 text-white text-xs font-medium" style={{width: '25%'}}>25%</div></div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm w-28 text-right text-muted-foreground">Wells Fargo</span>
                  <div className="flex-1 h-6 bg-gray-200 rounded overflow-hidden"><div className="h-full bg-gray-400 flex items-center justify-end pr-2 text-white text-xs font-medium" style={{width: '16%'}}>16%</div></div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm w-28 text-right text-muted-foreground">Citi</span>
                  <div className="flex-1 h-6 bg-gray-200 rounded overflow-hidden"><div className="h-full bg-gray-400 flex items-center justify-end pr-2 text-white text-xs font-medium" style={{width: '13%'}}>13%</div></div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm w-28 text-right text-muted-foreground">Chime + Others</span>
                  <div className="flex-1 h-6 bg-gray-200 rounded overflow-hidden"><div className="h-full bg-orange-500 flex items-center justify-end pr-2 text-white text-xs font-medium" style={{width: '15%'}}>15%</div></div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">US digital banking MAU share, 2024 estimates</p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Problem Hypotheses (Validated via Survey, n=52)</h3>
              <div className="space-y-3">
                <div className="border border-border rounded-lg p-4 bg-white">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold text-[#1A4B9C] uppercase tracking-wider">H1</span>
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded">ACCEPTED</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Majority of Chase Mobile users (55%+) use the app for 2 or fewer features (balance check + transfers only).</p>
                </div>
                <div className="border border-border rounded-lg p-4 bg-white">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold text-[#1A4B9C] uppercase tracking-wider">H2</span>
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded">ACCEPTED</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Less than 20% of users actively use financial planning features (budgeting, goals, Wealth Plan) monthly.</p>
                </div>
                <div className="border border-border rounded-lg p-4 bg-white">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold text-[#1A4B9C] uppercase tracking-wider">H3</span>
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded">ACCEPTED</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Users with low feature engagement are 3x more likely to churn or open a secondary account at a fintech competitor within 12 months.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-3 mb-6">
            <div className="border border-border rounded-lg p-4 bg-white">
              <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Transaction-Only</div>
              <div className="text-2xl font-serif text-[#002D6A]">47%</div>
              <div className="text-xs text-muted-foreground">of users - our target</div>
            </div>
            <div className="border border-border rounded-lg p-4 bg-white">
              <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Uses 2 or fewer features</div>
              <div className="text-2xl font-serif text-[#002D6A]">62%</div>
              <div className="text-xs text-muted-foreground">of all active users</div>
            </div>
            <div className="border border-border rounded-lg p-4 bg-white">
              <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Power Planners</div>
              <div className="text-2xl font-serif text-[#002D6A]">23%</div>
              <div className="text-xs text-muted-foreground">use 5+ features monthly</div>
            </div>
            <div className="border border-border rounded-lg p-4 bg-white">
              <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Planning features</div>
              <div className="text-2xl font-serif text-[#002D6A]">18%</div>
              <div className="text-xs text-muted-foreground">monthly adoption rate</div>
            </div>
          </div>

          <div className="bg-[#002D6A] text-white rounded-lg p-4 border-l-4 border-[#B8912A]">
            <strong>Target User Segment:</strong> Transaction-Only users (47% of MAU) who log in 10+ times/month but use 2 or fewer features - high frequency signals intent; low feature use signals discovery failure and a solvable engagement gap.
          </div>
        </div>
      </section>

      {/* Section 3: User Research */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-primary text-sm font-semibold mb-2">
            <span className="bg-[#002D6A] text-white px-2 py-0.5 rounded text-xs">03</span>
            USER RESEARCH
          </div>
          <h2 className="text-3xl font-serif italic text-foreground mb-4">User Research & Root Cause Identification</h2>
          <p className="text-muted-foreground mb-8">A mixed-methods research study with 52 participants to validate hypotheses and uncover the root cause of low feature engagement.</p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Persona */}
            <div className="border border-border rounded-xl overflow-hidden">
              <div className="bg-[#002D6A] p-5 flex gap-4">
                <div className="w-14 h-14 rounded-full bg-[#B8912A] flex items-center justify-center text-2xl font-serif text-[#002D6A] flex-shrink-0">M</div>
                <div>
                  <div className="text-xl font-serif text-white">Marcus Patel</div>
                  <div className="text-sm text-white/50">Age 27 - Marketing Manager - Chicago, IL</div>
                  <div className="text-sm text-white/50 mt-0.5">Income: $72,000/yr - Tech-comfortable - Chase customer for 4 yrs</div>
                  <div className="text-sm italic text-white/70 mt-3 border-l-2 border-[#B8912A] pl-3">
                    &quot;I know Chase has all these financial tools but I never know where to find them. I just check my balance, transfer money, and close the app.&quot;
                  </div>
                </div>
              </div>
              <div className="p-5 grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Frustrations</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>- Overwhelming navigation</li>
                    <li>- No sense of financial progress</li>
                    <li>- Features feel &quot;hidden&quot;</li>
                    <li>- Doesn&apos;t know app capabilities</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Goals</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>- Save for home in 3 years</li>
                    <li>- Understand spending</li>
                    <li>- Feel in control</li>
                    <li>- Consolidate financial tools</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Research quotes */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Research Methodology (n=52, Urban, 22-35 yrs)</h3>
              <div className="flex gap-2 flex-wrap mb-4">
                <span className="bg-[#002D6A] text-white text-xs font-semibold px-3 py-1 rounded-full">52 Participants</span>
                <span className="bg-[#B8912A] text-white text-xs font-semibold px-3 py-1 rounded-full">User Surveys</span>
                <span className="bg-[#002D6A] text-white text-xs font-semibold px-3 py-1 rounded-full">12 In-Depth Interviews</span>
              </div>
              <div className="space-y-3">
                <div className="border-l-3 border-[#B8912A] bg-amber-50 rounded-r-lg p-4">
                  <p className="text-sm text-muted-foreground italic">&quot;I know Chase has budgeting tools somewhere but every time I try to find them I give up after 3 taps.&quot;</p>
                  <p className="text-xs text-muted-foreground font-semibold mt-2">- 26 yr old, Financial Analyst</p>
                </div>
                <div className="border-l-3 border-[#B8912A] bg-amber-50 rounded-r-lg p-4">
                  <p className="text-sm text-muted-foreground italic">&quot;I open the app to check my balance and leave. It never gives me a reason to explore.&quot;</p>
                  <p className="text-xs text-muted-foreground font-semibold mt-2">- 28 yr old, Product Manager</p>
                </div>
                <div className="border-l-3 border-[#B8912A] bg-amber-50 rounded-r-lg p-4">
                  <p className="text-sm text-muted-foreground italic">&quot;I use a separate app for budgeting because Chase&apos;s version feels buried and generic.&quot;</p>
                  <p className="text-xs text-muted-foreground font-semibold mt-2">- 24 yr old, Software Engineer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Root Cause */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="border border-border rounded-lg p-5 border-l-4 border-l-orange-500">
              <h4 className="text-xs font-bold text-orange-600 uppercase tracking-wider mb-2">User Insight 1: Navigation Overwhelm</h4>
              <p className="text-sm text-muted-foreground mb-3">Users are confronted with a complex, flat navigation structure housing 30+ features across 6 tabs. With no hierarchy or personalization, users default to muscle memory: balance, transfer, close.</p>
              <div className="bg-blue-50 rounded-lg p-3">
                <p className="text-sm text-muted-foreground"><strong className="text-foreground">No Personalized Entry Point:</strong> Every user sees the same static dashboard regardless of their life stage, goals, or past behavior.</p>
              </div>
            </div>
            <div className="border border-border rounded-lg p-5 border-l-4 border-l-[#1A4B9C]">
              <h4 className="text-xs font-bold text-[#1A4B9C] uppercase tracking-wider mb-2">User Insight 2: No Sense of Progress</h4>
              <p className="text-sm text-muted-foreground mb-3">Users have no visibility into their financial health trajectory. Without a tangible score, milestone, or goal representation, financial planning features feel abstract.</p>
              <div className="bg-blue-50 rounded-lg p-3">
                <p className="text-sm text-muted-foreground"><strong className="text-foreground">Absence of a Financial Identity Layer:</strong> Chase Mobile treats users as account numbers, not individuals with goals.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#002D6A] text-white rounded-lg p-5">
            <div className="text-xs text-white/50 uppercase tracking-wider mb-2">Root Cause of Low MAFE</div>
            <p className="leading-relaxed">The absence of a <strong className="text-[#F0D078]">personalized navigation layer</strong> and <strong className="text-[#F0D078]">financial progress identity</strong> creates a blank experience that offers no reason to explore. Users with genuine financial intent leave to use third-party apps, fragmenting engagement.</p>
          </div>
        </div>
      </section>

      {/* Section 4: Problem Framing */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-primary text-sm font-semibold mb-2">
            <span className="bg-[#002D6A] text-white px-2 py-0.5 rounded text-xs">04</span>
            PROBLEM FRAMING
          </div>
          <h2 className="text-3xl font-serif italic text-foreground mb-4">Problem Framing & Impact Mapping</h2>
          <p className="text-muted-foreground mb-8">Translating user research insights into a precise problem statement and quantifying the business value of solving it.</p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">What is the true problem?</h3>
                <p className="text-sm text-muted-foreground">Chase Mobile&apos;s generic, undifferentiated interface fails to give users a financial direction - leaving 47% of high-frequency users in a &quot;transactional loop&quot; that yields no financial progress, creates no loyalty, and generates below-cost economics.</p>
              </div>
              <div className="border border-border rounded-lg p-5 bg-white">
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Who faces it?</h3>
                <p className="text-sm text-muted-foreground">Urban adults aged 22-35 who are financially motivated but time-constrained - they want to grow their wealth and manage their money smartly, but find the current app too opaque.</p>
              </div>
              <div className="border border-border rounded-lg p-5 bg-white">
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Why solve this now?</h3>
                <p className="text-sm text-muted-foreground">Gen Z and Millennials collectively represent <strong>$25 trillion in wealth transfer</strong> over the next decade. Winning their financial engagement now creates irreplaceable lifetime value.</p>
              </div>
            </div>

            <div>
              <div className="bg-[#002D6A] text-white rounded-lg p-5 mb-4">
                <h3 className="text-xs text-white/50 uppercase tracking-wider mb-3">Jobs-to-be-Done</h3>
                <div className="space-y-3 text-sm">
                  <div><span className="text-white/50">When I</span> attempt to take control of my financial future using my banking app,</div>
                  <div><span className="text-white/50">But struggle to</span> navigate a complex interface with no personalized guidance,</div>
                  <div><span className="text-white/50">Help me</span> discover, set, and track personalized financial goals from within Chase,</div>
                  <div><span className="text-white/50">So that I can</span> build wealth, feel financially confident, and stop splitting my financial life across multiple apps.</div>
                </div>
              </div>

              {/* Impact Math */}
              <div className="bg-[#001740] text-white rounded-lg p-5">
                <h4 className="text-xs text-white/40 uppercase tracking-wider mb-4">Impact Mapping: Quantifying the Opportunity</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-white/60">Target segment (Transaction-Only)</span>
                    <span className="font-serif text-[#F0D078]">47% of 57M = 26.8M users</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-white/60">Conversion to 3+ features</span>
                    <span className="font-serif text-[#F0D078]">40% (conservative)</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-white/60">Additional revenue / user / mo</span>
                    <span className="font-serif text-[#F0D078]">+$3.50</span>
                  </div>
                </div>
                <div className="bg-[#B8912A]/20 border border-[#B8912A]/30 rounded-lg p-4 mt-4 text-center">
                  <div className="text-xs text-white/40 uppercase tracking-wider">Projected Annual Incremental Revenue</div>
                  <div className="text-4xl font-serif text-[#F0D078] mt-1">$1.9B</div>
                  <div className="text-sm text-white/50 mt-1">10.7M converted users x $3.50/mo x 12 months</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Solution */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-primary text-sm font-semibold mb-2">
            <span className="bg-[#002D6A] text-white px-2 py-0.5 rounded text-xs">05</span>
            SOLUTION IDEATION
          </div>
          <h2 className="text-3xl font-serif italic text-foreground mb-4">Solution Ideation & Prioritization</h2>
          <p className="text-muted-foreground mb-8">Two distinct solutions designed to address the root cause - evaluated against Value, Usability, Feasibility, Viability, and Scalability.</p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="border-2 border-[#002D6A] rounded-xl p-6 relative">
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-lg">&#10003;</div>
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Solution 01 - Selected</div>
              <h3 className="text-2xl font-serif text-[#002D6A] mb-3">CompassGuide</h3>
              <p className="text-sm text-muted-foreground mb-4">An AI-powered financial navigation layer that gives every user a personalized <strong>Financial Health Score</strong>, a visual goal tracker, and proactive nudges to surface relevant features at the right moment.</p>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-muted-foreground"><strong className="text-[#002D6A]">If</strong> we implement an AI-driven personalization layer that greets users with their Financial Health Score, recommends a daily financial action, and surfaces relevant features based on behavior patterns,</p>
                <p className="text-sm text-muted-foreground mt-2"><strong className="text-[#002D6A]">Then</strong> we will increase feature engagement because users will have a clear, personalized financial direction every time they open the app.</p>
              </div>
            </div>

            <div className="border border-border rounded-xl p-6">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Solution 02 - Not Selected</div>
              <h3 className="text-2xl font-serif text-foreground mb-3">SmartNav Redesign</h3>
              <p className="text-sm text-muted-foreground mb-4">A full bottom-navigation overhaul that reorganizes Chase Mobile&apos;s information architecture - reducing tab count from 6 to 4, grouping features into intuitive mega-categories.</p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-muted-foreground"><strong>If</strong> we redesign the navigation structure to reduce cognitive load,</p>
                <p className="text-sm text-muted-foreground mt-2"><strong>Then</strong> we will improve feature discovery - however, this does not solve the personalization gap; users may find features but still lack a reason to use them.</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-sm text-muted-foreground"><strong className="text-green-700">Why CompassGuide wins:</strong> Solves both root causes simultaneously - personalized navigation AND a financial progress identity. High confidence grounded in 3 validated hypotheses and 12 qualitative interviews.</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-sm text-muted-foreground"><strong className="text-red-700">Why SmartNav falls short:</strong> Purely structural change - reduces friction but doesn&apos;t motivate action. A user who doesn&apos;t know why to use budgeting tools will ignore them regardless of how easy they are to find.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Prototyping */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-primary text-sm font-semibold mb-2">
            <span className="bg-[#002D6A] text-white px-2 py-0.5 rounded text-xs">06</span>
            PROTOTYPING
          </div>
          <h2 className="text-3xl font-serif italic text-foreground mb-4">Prototyping & Solution Detailing</h2>
          <p className="text-muted-foreground mb-8">CompassGuide reimagines the Chase Compass home experience as a personalized financial dashboard anchored by three core components.</p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="border border-border rounded-lg p-5 bg-white border-l-4 border-l-[#B8912A]">
              <div className="text-xs font-bold text-[#B8912A] uppercase tracking-wider mb-3">Financial Health Score (FHS)</div>
              <p className="text-sm text-muted-foreground mb-2"><strong>Algorithm inputs:</strong> credit score trend, savings rate, debt-to-income ratio, monthly cash flow, goal progress, feature engagement depth.</p>
              <p className="text-sm text-muted-foreground mb-2"><strong>Display:</strong> Persistent score (300-900 scale) on the Compass home. Color-coded dial.</p>
              <p className="text-sm text-muted-foreground"><strong>Update cadence:</strong> Refreshed weekly; real-time for transaction-driven changes.</p>
            </div>
            <div className="border border-border rounded-lg p-5 bg-white border-l-4 border-l-[#1A4B9C]">
              <div className="text-xs font-bold text-[#1A4B9C] uppercase tracking-wider mb-3">Goal Compass</div>
              <p className="text-sm text-muted-foreground mb-2"><strong>Onboarding:</strong> 3-step goal wizard during first app launch post-update. Up to 3 concurrent goals.</p>
              <p className="text-sm text-muted-foreground mb-2"><strong>Progress logic:</strong> Goals tied to real account activity - savings transferred, debt reduced, portfolio value.</p>
              <p className="text-sm text-muted-foreground"><strong>Milestone moments:</strong> Celebratory animation at 25%, 50%, 75%, 100% milestones.</p>
            </div>
            <div className="border border-border rounded-lg p-5 bg-white border-l-4 border-l-orange-500">
              <div className="text-xs font-bold text-orange-600 uppercase tracking-wider mb-3">Smart Nudge Engine</div>
              <p className="text-sm text-muted-foreground mb-2"><strong>Contextual triggers:</strong> Payday detection, overspend in category, goal at risk, unused Chase feature with high relevance.</p>
              <p className="text-sm text-muted-foreground mb-2"><strong>Frequency cap:</strong> Max 2 nudges/week; user-controllable.</p>
              <p className="text-sm text-muted-foreground"><strong>Delivery:</strong> Non-intrusive banner on home screen; optional push notification.</p>
            </div>
          </div>

          <div className="bg-[#002D6A] text-white rounded-lg p-4 border-l-4 border-[#B8912A]">
            <strong>Detailed Solutioning:</strong> CompassGuide surfaces personalized financial direction on every app open - transforming Chase Compass from a transaction viewer into a financial co-pilot that users return to with intent.
          </div>
        </div>
      </section>

      {/* Section 7: System Design */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-primary text-sm font-semibold mb-2">
            <span className="bg-[#002D6A] text-white px-2 py-0.5 rounded text-xs">07</span>
            SYSTEM DESIGN
          </div>
          <h2 className="text-3xl font-serif italic text-foreground mb-4">System Design, Constraints & Second-Order Thinking</h2>
          <p className="text-muted-foreground mb-8">How CompassGuide&apos;s ML pipeline works, the architectural constraints it must respect, and the downstream effects.</p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="border border-border rounded-lg p-4">
              <h4 className="text-sm font-semibold text-red-600 mb-2">1. Regulatory Compliance</h4>
              <p className="text-sm text-muted-foreground">All behavioral data requires explicit user consent. FHS must be accompanied by clear explanation of its non-binding nature (not a credit score).</p>
            </div>
            <div className="border border-border rounded-lg p-4">
              <h4 className="text-sm font-semibold text-foreground mb-2">2. Notification Fatigue</h4>
              <p className="text-sm text-muted-foreground">Nudge frequency caps (max 2/week) enforced server-side. Users must be able to fully disable nudges from Settings.</p>
            </div>
            <div className="border border-border rounded-lg p-4">
              <h4 className="text-sm font-semibold text-foreground mb-2">3. Model Fairness</h4>
              <p className="text-sm text-muted-foreground">FHS model must be audited quarterly for demographic parity. Explainability component required for regulatory review.</p>
            </div>
          </div>

          <h3 className="font-semibold text-foreground mb-4">Second-Order Thinking</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="border border-border rounded-lg p-4">
              <h4 className="text-sm font-semibold text-[#002D6A] mb-2 flex items-center gap-2"><Zap size={16} /> Score anxiety could harm confidence</h4>
              <p className="text-sm text-muted-foreground">A user with low FHS may feel discouraged. Mitigation: frame as &quot;direction indicator&quot; rather than absolute grade. Celebrate any positive change.</p>
            </div>
            <div className="border border-border rounded-lg p-4">
              <h4 className="text-sm font-semibold text-[#002D6A] mb-2 flex items-center gap-2"><Zap size={16} /> Over-reliance on app-driven decisions</h4>
              <p className="text-sm text-muted-foreground">Users may make significant moves based solely on nudges. Mitigation: nudges link to J.P. Morgan advisor option.</p>
            </div>
            <div className="border border-border rounded-lg p-4">
              <h4 className="text-sm font-semibold text-[#002D6A] mb-2 flex items-center gap-2"><Zap size={16} /> Privacy perception risk</h4>
              <p className="text-sm text-muted-foreground">Deep personalization may feel &quot;creepy&quot; to privacy-conscious users. Mitigation: transparent &quot;How your Compass works&quot; explainer. Opt-out available.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Metrics */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-primary text-sm font-semibold mb-2">
            <span className="bg-[#002D6A] text-white px-2 py-0.5 rounded text-xs">08</span>
            METRICS
          </div>
          <h2 className="text-3xl font-serif italic text-foreground mb-4">Metrics & Pitfall Mitigation</h2>
          <p className="text-muted-foreground mb-8">A multi-layer measurement framework to track product success, user satisfaction, and business outcomes.</p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="font-semibold text-foreground mb-4">Measuring Success</h3>
              <div className="border border-border rounded-lg overflow-hidden">
                <div className="flex"><div className="bg-[#B8912A] text-white text-xs font-semibold px-4 py-3 w-28 flex items-center justify-center">NORTH STAR</div><div className="p-3 text-sm text-muted-foreground flex-1">% Increase in Monthly Active Feature Engagement (MAFE)</div></div>
                <div className="flex border-t"><div className="bg-[#2260B0] text-white text-xs font-semibold px-4 py-3 w-28 flex items-center justify-center">L1</div><div className="p-3 text-sm text-muted-foreground flex-1">% Increase in Financial Health Score interactions</div></div>
                <div className="flex border-t"><div className="bg-[#3B7ACA] text-white text-xs font-semibold px-4 py-3 w-28 flex items-center justify-center">L2</div><div className="p-3 text-sm text-muted-foreground flex-1">% Increase in Goal Compass activation rate</div></div>
                <div className="flex border-t"><div className="bg-[#5E9EDF] text-white text-xs font-semibold px-4 py-3 w-28 flex items-center justify-center">ACTIVATION</div><div className="p-3 text-sm text-muted-foreground flex-1">% Users completing Goal Compass onboarding wizard</div></div>
                <div className="flex border-t"><div className="bg-[#1A4B9C] text-white text-xs font-semibold px-4 py-3 w-28 flex items-center justify-center">RETENTION</div><div className="p-3 text-sm text-muted-foreground flex-1">% Reduction in 90-day churn rate for target segment</div></div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Possible Pitfalls & Opportunities</h3>
              <div className="space-y-3">
                <div className="border border-border rounded-lg overflow-hidden">
                  <div className="bg-red-50 p-3 border-b border-red-100">
                    <p className="text-xs font-bold text-red-600 uppercase tracking-wider">Risk 1:</p>
                    <p className="text-sm text-muted-foreground mt-1">FHS model may produce inaccurate scores for users with multi-institution finances.</p>
                  </div>
                  <div className="bg-green-50 p-3">
                    <p className="text-xs font-bold text-green-600 uppercase tracking-wider">Opportunity:</p>
                    <p className="text-sm text-muted-foreground mt-1">Implement confidence indicators. Prompt users to link external accounts via Plaid.</p>
                  </div>
                </div>
                <div className="border border-border rounded-lg overflow-hidden">
                  <div className="bg-red-50 p-3 border-b border-red-100">
                    <p className="text-xs font-bold text-red-600 uppercase tracking-wider">Risk 2:</p>
                    <p className="text-sm text-muted-foreground mt-1">Nudges may reduce autonomous exploration, creating dependency.</p>
                  </div>
                  <div className="bg-green-50 p-3">
                    <p className="text-xs font-bold text-green-600 uppercase tracking-wider">Opportunity:</p>
                    <p className="text-sm text-muted-foreground mt-1">Implement progressive nudge-fade model: frequency decreases as engagement increases.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="bg-[#001740] text-white rounded-xl p-8">
            <div className="text-xs text-white/40 uppercase tracking-wider mb-4">Case Study Summary</div>
            <h3 className="text-2xl md:text-3xl font-serif mb-6 leading-tight">
              Chase Compass gives 47% of disengaged users a financial north star - and unlocks <span className="text-[#F0D078]">$1.9B</span> in annual incremental revenue.
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <div className="text-3xl font-serif text-[#F0D078]">47%</div>
                <div className="text-xs text-white/50 mt-1">of MAU targeted</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif text-[#F0D078]">+25%</div>
                <div className="text-xs text-white/50 mt-1">MAFE target lift</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif text-[#F0D078]">$1.9B</div>
                <div className="text-xs text-white/50 mt-1">annual revenue impact</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif text-[#F0D078]">6 mo</div>
                <div className="text-xs text-white/50 mt-1">measurement window</div>
              </div>
            </div>
            <p className="text-sm text-white/60 border-t border-white/10 pt-4 leading-relaxed">
              CompassGuide solves a structural engagement failure in Chase Mobile by replacing a generic, static dashboard with a personalized financial navigation layer - anchored by the Financial Health Score, Goal Compass, and Smart Nudge Engine. By converting Transaction-Only users into Active Planners, Chase Compass establishes a durable loyalty moat.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-serif italic text-foreground mb-4">Want to see the prototype?</h2>
          <p className="text-muted-foreground mb-6">Explore the live MVP of Chase Compass to experience the CompassGuide solution firsthand.</p>
          <a 
            href="https://chasecompass.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#002D6A] text-white rounded-md hover:bg-[#001740] transition-colors"
          >
            View Chase Compass MVP
            <ArrowUpRight size={20} />
          </a>
        </div>
      </section>
    </main>
  )
}
