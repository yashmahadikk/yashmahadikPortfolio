'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function ProjectUdayCaseStudy() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/#case-studies" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <ArrowLeft size={20} />
            <span className="text-sm font-medium">Back to Case Studies</span>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-24 px-6 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="inline-block px-3 py-1 bg-yellow-400/20 text-yellow-300 text-xs font-semibold rounded-full mb-4">JPMORGAN CHASE | MARKET ENTRY</span>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Project Uday
            </h1>
            <p className="text-2xl text-blue-100 mb-6 font-light">
              India Digital Banking Market Entry Strategy
            </p>
            <p className="text-lg text-blue-100 leading-relaxed max-w-2xl">
              A comprehensive Go-To-Market strategy for JPMorgan Chase's entry into India's digital banking and fintech infrastructure market. Addresses how to capture ₹2.5 Trillion TAM through partnerships, treasury solutions, and regulatory compliance services.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div className="p-4 bg-white/10 backdrop-blur rounded-lg border border-white/20">
              <p className="text-xs text-blue-200 font-semibold uppercase mb-2">TAM</p>
              <p className="text-2xl font-bold text-yellow-300">₹2.5Tr</p>
            </div>
            <div className="p-4 bg-white/10 backdrop-blur rounded-lg border border-white/20">
              <p className="text-xs text-blue-200 font-semibold uppercase mb-2">Timeline</p>
              <p className="text-2xl font-bold text-yellow-300">12 Months</p>
            </div>
            <div className="p-4 bg-white/10 backdrop-blur rounded-lg border border-white/20">
              <p className="text-xs text-blue-200 font-semibold uppercase mb-2">Revenue Y1</p>
              <p className="text-2xl font-bold text-yellow-300">₹145Cr</p>
            </div>
            <div className="p-4 bg-white/10 backdrop-blur rounded-lg border border-white/20">
              <p className="text-xs text-blue-200 font-semibold uppercase mb-2">5Y CAGR</p>
              <p className="text-2xl font-bold text-yellow-300">18%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-12 px-6 bg-blue-50 border-b border-blue-200">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg border border-blue-200 shadow-sm">
              <h3 className="font-semibold text-foreground mb-3">3 Growth Levers</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Partnership Banking (₹45Cr)</li>
                <li>• Treasury & Corporate (₹60Cr)</li>
                <li>• Compliance-as-a-Service (₹40Cr)</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-lg border border-blue-200 shadow-sm">
              <h3 className="font-semibold text-foreground mb-3">Market Position</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Infrastructure, not competitor</li>
                <li>• Tier-1 bank partnerships</li>
                <li>• Regulatory compliance leader</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-lg border border-blue-200 shadow-sm">
              <h3 className="font-semibold text-foreground mb-3">5-Year Outcome</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• ₹145Cr → ₹600Cr+ ARR</li>
                <li>• 18% CAGR trajectory</li>
                <li>• Regional headquarters</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Section 1 */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
              1. Market Opportunity
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p><strong>India's Digital Banking TAM: ₹2.5 Trillion</strong></p>
              <p>Breakdown: (1) Corporate Treasury: ₹500B+ annual forex/derivatives volume; (2) Bank Infrastructure: Tier-2/3 banks need deposit management solutions; (3) Fintech Compliance: 800+ licensed fintechs need RBI-approved KYC, AML, sanctions screening.</p>
              <p><strong>JPMorgan's Advantage:</strong> 24/7 global liquidity, treasury expertise, RBI relationship, compliance infrastructure from 50+ global markets.</p>
              <p><strong>Competition:</strong> HSBC, Citi (weak in India), local players (Axis, ICICI tech) under-equipped for institutional scale.</p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <span className="w-3 h-3 bg-purple-600 rounded-full"></span>
              2. Go-To-Market Strategy (3 Levers)
            </h2>
            <div className="space-y-6">
              <div className="p-4 bg-white rounded border border-purple-200">
                <h3 className="font-semibold text-foreground mb-2">Lever 1: Partnership Banking (₹45Cr Y1)</h3>
                <p className="text-sm text-muted-foreground mb-3">Approach: White-label correspondent banking for 5-8 Tier-1 Indian banks. Offer: 24/7 SWIFT settlement, FX pricing, liquidity management.</p>
                <p className="text-sm font-medium text-purple-700">Pilot: HDFC Bank (3 months), then rollout to Axis, ICICI.</p>
              </div>

              <div className="p-4 bg-white rounded border border-purple-200">
                <h3 className="font-semibold text-foreground mb-2">Lever 2: Treasury & Corporate Solutions (₹60Cr Y1)</h3>
                <p className="text-sm text-muted-foreground mb-3">Target: ₹500B+ corporates (Infosys, TCS, Reliance, HUL) with cross-border needs. Offerings: Deposit optimization (1-5% yield lift), FX hedging, liquidity pooling.</p>
                <p className="text-sm font-medium text-purple-700">Enterprise sales team: 6 bankers covering top 50 corporates.</p>
              </div>

              <div className="p-4 bg-white rounded border border-purple-200">
                <h3 className="font-semibold text-foreground mb-2">Lever 3: Compliance-as-a-Service SaaS (₹40Cr Y1)</h3>
                <p className="text-sm text-muted-foreground mb-3">Target: 800+ licensed Indian fintechs needing RBI-compliant KYC, AML, sanctions screening. Offering: Off-the-shelf compliance module, API-based integration, RBI pre-approved.</p>
                <p className="text-sm font-medium text-purple-700">Pricing: ₹50K-200K/month per fintech. Gross margin: 75%.</p>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <span className="w-3 h-3 bg-green-600 rounded-full"></span>
              3. 5-Year Revenue Projections
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-white rounded border border-green-200">
                <p className="text-sm font-semibold text-foreground mb-2">Year 1: ₹145 Crores</p>
                <p className="text-xs text-muted-foreground">Partnership Banking: ₹45Cr | Corporate Treasury: ₹60Cr | Compliance SaaS: ₹40Cr</p>
              </div>
              <div className="p-4 bg-white rounded border border-green-200">
                <p className="text-sm font-semibold text-foreground mb-2">Year 3: ₹350 Crores</p>
                <p className="text-xs text-muted-foreground">12 partner banks → market penetration | 150+ corporates → ₹200Cr revenue | Fintech base: 200+ active users</p>
              </div>
              <div className="p-4 bg-white rounded border border-green-200">
                <p className="text-sm font-semibold text-foreground mb-2">Year 5: ₹600+ Crores</p>
                <p className="text-xs text-muted-foreground">Achieved 18% CAGR | Regional HQ established | 40% of Tier-1 bank correspondent business | ₹100B+ AUM in compliance SaaS</p>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <span className="w-3 h-3 bg-amber-600 rounded-full"></span>
              4. Critical Success Factors & Risks
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-foreground mb-3 text-green-700">Success Factors</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>✓ RBI relationship & regulatory approval</li>
                  <li>✓ Partnership with Tier-1 bank (HDFC/Axis)</li>
                  <li>✓ Compliance SaaS traction (50+ fintech pilots)</li>
                  <li>✓ Talent: Senior treasury + India regulators team</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3 text-red-700">Key Risks</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>⚠ RBI delays approval (6-9 months possible)</li>
                  <li>⚠ Local CIBIL/credit bureau competition</li>
                  <li>⚠ Banking partner bandwidth constraints</li>
                  <li>⚠ Fintech churn if compliance SaaS too rigid</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <span className="w-3 h-3 bg-indigo-600 rounded-full"></span>
              5. 12-Month Implementation Roadmap
            </h2>
            <div className="space-y-3">
              <div className="p-3 bg-white rounded border border-indigo-200 text-sm">
                <span className="font-semibold text-indigo-700">Q1:</span> RBI approval + HDFC Bank pilot launch (correspondent banking, 3 corridors: USD, GBP, EUR)
              </div>
              <div className="p-3 bg-white rounded border border-indigo-200 text-sm">
                <span className="font-semibold text-indigo-700">Q2:</span> Corporate treasury sales: target 20 enterprise clients, ₹30Cr revenue. Compliance SaaS MVP launch.
              </div>
              <div className="p-3 bg-white rounded border border-indigo-200 text-sm">
                <span className="font-semibold text-indigo-700">Q3:</span> Expand partnerships (Axis, ICICI). Scale treasury revenue to ₹45Cr. Fintech pilot cohort: 50 users.
              </div>
              <div className="p-3 bg-white rounded border border-indigo-200 text-sm">
                <span className="font-semibold text-indigo-700">Q4:</span> Year 1 close: ₹145Cr ARR. Plan regional expansion (Mumbai HQ, 20 staff). Announce Series B for Compliance SaaS.
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <div className="bg-rose-50 border border-rose-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <span className="w-3 h-3 bg-rose-600 rounded-full"></span>
              6. Strategic Recommendation
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p><strong>Positioning:</strong> JPMorgan Chase as infrastructure partner to India's banking & fintech ecosystem, not a direct competitor to retail banks.</p>
              <p><strong>Why Now:</strong> (1) RBI's fintech licensing explosion (800+ licenses in 2 years); (2) Tier-1 banks' treasury tech gap; (3) ₹500B+ corporate FX market underserved.</p>
              <p><strong>Expected Outcome:</strong> ₹145Cr Year 1 → ₹600Cr+ by Year 5. Regional HQ catalyst for broader Asia expansion. 18% CAGR = institutional quality investment.</p>
              <p className="pt-4"><strong>Go/No-Go Gate:</strong> Q2 milestone: HDFC pilot generating ₹8Cr ARR + 20 enterprise treasury clients acquired. If not met, pivot to banking partnerships only (reduce Y1 to ₹60Cr).</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-12 px-6 bg-background border-t border-border">
        <div className="max-w-4xl mx-auto text-center text-muted-foreground">
          <p className="text-sm">Project Uday: JPMorgan Chase India Market Entry | 12-Month GTM Strategy</p>
        </div>
      </section>
    </main>
  )
}
