import Link from "next/link"
import { ArrowLeft, TrendingUp, Users, Target, DollarSign } from "lucide-react"

export default function ProjectUdayCaseStudy() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/#case-studies" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft size={20} />
            <span className="text-sm font-medium">Back to Case Studies</span>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-950 to-blue-900 py-24 px-6 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-transparent to-blue-500/20"></div>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="mb-8 flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-amber-500 flex items-center justify-center text-blue-900 font-bold text-sm">JP</div>
            <span className="text-amber-500 text-xs font-semibold tracking-wider uppercase">JPMorgan Chase</span>
          </div>
          
          <h1 className="text-6xl font-serif font-bold mb-4 leading-tight">
            Project <span className="text-amber-500">Uday</span>
          </h1>
          
          <p className="text-xl text-blue-100 italic font-serif mb-8">
            India market entry strategy through fintech infrastructure innovation
          </p>

          <div className="bg-blue-900/50 border border-amber-500/30 rounded-lg p-6 mb-8">
            <p className="text-blue-50">
              <strong className="text-amber-500">Objective:</strong> Design a go-to-market strategy for JPMorgan Chase's entry into India's digital banking ecosystem through partnerships, regulatory navigation, and user-centric fintech solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-blue-800/50 rounded p-4 border border-amber-500/20">
              <p className="text-amber-500 font-serif text-2xl font-bold">₹2.5Tr</p>
              <p className="text-xs text-blue-200 mt-1">TAM (Digital Banking)</p>
            </div>
            <div className="bg-blue-800/50 rounded p-4 border border-amber-500/20">
              <p className="text-amber-500 font-serif text-2xl font-bold">12M</p>
              <p className="text-xs text-blue-200 mt-1">Timeline Phase 1</p>
            </div>
            <div className="bg-blue-800/50 rounded p-4 border border-amber-500/20">
              <p className="text-amber-500 font-serif text-2xl font-bold">3 Levers</p>
              <p className="text-xs text-blue-200 mt-1">Growth Strategy</p>
            </div>
            <div className="bg-blue-800/50 rounded p-4 border border-amber-500/20">
              <p className="text-amber-500 font-serif text-2xl font-bold">₹145Cr</p>
              <p className="text-xs text-blue-200 mt-1">Year 1 Revenue</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-8">
            {["Strategy", "Market Entry", "GTM", "Fintech", "India", "Regulatory"].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-amber-500/20 text-amber-400 text-xs font-semibold rounded border border-amber-500/40">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="bg-amber-50 border-y border-amber-200 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <TrendingUp className="text-blue-900" size={24} />
              </div>
              <p className="text-3xl font-bold text-blue-900 mb-1">₹145Cr</p>
              <p className="text-xs text-blue-800 font-medium">Year 1 Revenue</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="text-blue-900" size={24} />
              </div>
              <p className="text-3xl font-bold text-blue-900 mb-1">2.5M</p>
              <p className="text-xs text-blue-800 font-medium">Active Users Target</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Target className="text-blue-900" size={24} />
              </div>
              <p className="text-3xl font-bold text-blue-900 mb-1">3 Levers</p>
              <p className="text-xs text-blue-800 font-medium">GTM Strategy</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <DollarSign className="text-blue-900" size={24} />
              </div>
              <p className="text-3xl font-bold text-blue-900 mb-1">18% CAGR</p>
              <p className="text-xs text-blue-800 font-medium">5-Year Growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-20">

          {/* Section 1 */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
            <h2 className="text-3xl font-serif font-bold text-blue-900 mb-6 flex items-center gap-2">
              <span className="w-1 h-8 bg-blue-900"></span>
              India's Digital Banking Opportunity
            </h2>
            <div className="prose prose-sm max-w-none">
              <p className="text-muted-foreground mb-4">
                India's digital banking market represents a ₹2.5 trillion opportunity driven by: (1) 500M+ smartphone users, (2) RBI&apos;s regulatory openness to fintech partnerships, (3) 70% unbanked population underserved by traditional institutions, (4) government push toward cashless economy.
              </p>
              <p className="text-muted-foreground mb-4">
                Current barriers: regulatory complexity, legacy infrastructure, local competitive intensity. JPMorgan&apos;s advantage: global brand trust, institutional relationships, technology infrastructure. Market entry strategy must balance premium positioning with mass-market accessibility.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-8">
            <h2 className="text-3xl font-serif font-bold text-amber-900 mb-6 flex items-center gap-2">
              <span className="w-1 h-8 bg-amber-900"></span>
              Go-To-Market Strategy: 3 Levers
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded border border-amber-200 p-6">
                <h3 className="font-semibold text-amber-900 mb-2">Lever 1: Partnership Model</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Partner with Tier-1 Indian banks (ICICI, Axis, Kotak) rather than direct launch. Benefits: regulatory fast-track, instant customer base (20M+ affluent segments), technology co-development. Structure: White-label platform + revenue share model. Projected addressable: 5-8M premium customers in Year 1.
                </p>
              </div>
              <div className="bg-white rounded border border-amber-200 p-6">
                <h3 className="font-semibold text-amber-900 mb-2">Lever 2: Treasury & Corporate</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Target $500B+ corporate treasury and forex markets dominated by legacy players. Offer: API-driven solutions, multi-currency settlement, AI-powered fx algorithms. Projected revenue: ₹60Cr Year 1 (high margin, sticky customers).
                </p>
              </div>
              <div className="bg-white rounded border border-amber-200 p-6">
                <h3 className="font-semibold text-amber-900 mb-2">Lever 3: Compliance & Infrastructure</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Build &quot;regulatory-as-a-service&quot; for Indian fintech startups (KYC, AML, reporting). Market: 500+ unlicensed fintechs seeking compliance path. Revenue model: SaaS + transaction fees. Projected impact: ₹40Cr Year 1, strong moat.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
            <h2 className="text-3xl font-serif font-bold text-blue-900 mb-6 flex items-center gap-2">
              <span className="w-1 h-8 bg-blue-900"></span>
              Revenue Projections & Impact
            </h2>
            <div className="space-y-4">
              <div className="bg-white rounded p-4 border border-blue-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-sm text-blue-900">Partnership Revenue</span>
                  <span className="text-sm font-bold text-blue-900">₹45Cr</span>
                </div>
                <div className="w-full bg-blue-100 rounded h-2">
                  <div className="bg-blue-900 h-2 rounded" style={{width: "31%"}}></div>
                </div>
              </div>
              <div className="bg-white rounded p-4 border border-blue-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-sm text-blue-900">Treasury & Corporate</span>
                  <span className="text-sm font-bold text-blue-900">₹60Cr</span>
                </div>
                <div className="w-full bg-blue-100 rounded h-2">
                  <div className="bg-blue-900 h-2 rounded" style={{width: "41%"}}></div>
                </div>
              </div>
              <div className="bg-white rounded p-4 border border-blue-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-sm text-blue-900">Compliance SaaS</span>
                  <span className="text-sm font-bold text-blue-900">₹40Cr</span>
                </div>
                <div className="w-full bg-blue-100 rounded h-2">
                  <div className="bg-blue-900 h-2 rounded" style={{width: "28%"}}></div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-900 text-white rounded font-serif">
                <div className="text-sm text-blue-100 mb-1">Total Year 1 Revenue</div>
                <div className="text-4xl font-bold text-amber-500">₹145Cr</div>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-8">
            <h2 className="text-3xl font-serif font-bold text-amber-900 mb-6 flex items-center gap-2">
              <span className="w-1 h-8 bg-amber-900"></span>
              Key Success Factors & Risks
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-green-700 mb-4 text-sm uppercase">Success Factors</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>RBI regulatory alignment from Day 1</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Anchor partnerships with ICICI/Axis by Q2</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Local tech talent acquisition (50+ engineers)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Brand positioning as &quot;trusted global partner&quot;</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-red-700 mb-4 text-sm uppercase">Key Risks</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-red-600 font-bold">!</span>
                    <span>Regulatory change (FDI caps, data localization)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-600 font-bold">!</span>
                    <span>Local competition intensity (Paytm, PhonePe, Google Pay)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-600 font-bold">!</span>
                    <span>Talent retention in competitive market</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-600 font-bold">!</span>
                    <span>Trust-building in informal economy</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
            <h2 className="text-3xl font-serif font-bold text-blue-900 mb-6 flex items-center gap-2">
              <span className="w-1 h-8 bg-blue-900"></span>
              Implementation Timeline
            </h2>
            <div className="space-y-3">
              <div className="flex gap-4">
                <div className="w-20 font-semibold text-blue-900 text-sm">Months 0-3</div>
                <div className="text-sm text-muted-foreground">Regulatory discussions, bank partnership negotiation, setup India operations office</div>
              </div>
              <div className="flex gap-4">
                <div className="w-20 font-semibold text-blue-900 text-sm">Months 3-6</div>
                <div className="text-sm text-muted-foreground">Close first partnership deal, launch beta with Tier-1 bank, hire 30+ core team</div>
              </div>
              <div className="flex gap-4">
                <div className="w-20 font-semibold text-blue-900 text-sm">Months 6-9</div>
                <div className="text-sm text-muted-foreground">Scale to 2M+ active users via bank channels, launch treasury product for corporates</div>
              </div>
              <div className="flex gap-4">
                <div className="w-20 font-semibold text-blue-900 text-sm">Months 9-12</div>
                <div className="text-sm text-muted-foreground">Hit ₹145Cr revenue target, expand to 2-3 additional bank partnerships, launch compliance SaaS</div>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-lg p-8 border border-amber-500/30">
            <h3 className="text-2xl font-serif font-bold mb-4">Strategic Conclusion</h3>
            <p className="mb-4">
              Project Uday positions JPMorgan Chase not as a direct fintech competitor, but as the <strong>trusted infrastructure partner</strong> enabling India&apos;s financial ecosystem. By leveraging existing bank relationships, avoiding retail competition, and focusing on B2B2C + B2B opportunities, JPMorgan can capture ₹145Cr+ Year 1 revenue while building a defensible moat through regulatory relationships and compliance expertise.
            </p>
            <p>
              Success requires: (1) speed to first partnership, (2) deep regulatory alignment, (3) local talent + global IP blend. 18% CAGR projections assume 3-4 partnership deals and corporate treasury scale within 24 months.
            </p>
          </div>

        </div>
      </section>
    </main>
  )
}
