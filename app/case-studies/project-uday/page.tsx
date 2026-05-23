'use client'

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ProjectUdayCaseStudy() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed left-0 top-0 w-[230px] h-screen bg-[#071B3E] text-white p-0 z-50 overflow-y-auto">
        <div className="px-5 py-6 border-b border-[rgba(196,154,42,.25)]">
          <div className="flex flex-col gap-1.5 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[#005EB8] rounded flex items-center justify-center text-xs font-bold">C</div>
              <div className="text-sm font-semibold">Chase</div>
            </div>
            <div className="flex items-center gap-2 pt-1.5 border-t border-[rgba(255,255,255,.08)]">
              <div className="w-6 h-6 bg-[#C49A2A] rounded flex items-center justify-center text-[9px] font-bold text-[#0B0C10]">J</div>
              <div className="text-sm font-semibold">JPMorgan</div>
            </div>
          </div>
          <div className="text-xs text-[#C49A2A] font-bold uppercase tracking-widest">Project Uday</div>
        </div>
        
        <div className="py-4 flex-1">
          {['Cover', 'Market Opportunity', 'Go-To-Market', 'Revenue Model', 'Success Factors', 'Implementation', 'Conclusion'].map((item, i) => (
            <a key={i} href={`#section-${i}`} className="flex items-start gap-2.5 px-5 py-2 text-[10.5px] text-[rgba(255,255,255,.45)] hover:bg-[rgba(255,255,255,.05)] border-l-2 border-transparent hover:border-[#C49A2A] transition-colors">
              <div className="w-4 h-4 rounded-full bg-[rgba(255,255,255,.08)] flex items-center justify-center text-[8px] font-bold flex-shrink-0 mt-0.5">{i + 1}</div>
              <span className="leading-tight">{item}</span>
            </a>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <div className="ml-[230px]">
        {/* Back Button */}
        <div className="sticky top-0 z-40 bg-white border-b border-[#DDD9CE] px-8 py-4">
          <Link href="/#case-studies" className="inline-flex items-center gap-2 text-sm font-medium text-[#0B0C10] hover:text-[#005EB8] transition-colors">
            <ArrowLeft size={16} />
            Back to Case Studies
          </Link>
        </div>

        {/* Cover Section */}
        <section className="min-h-screen bg-[#0B0C10] relative overflow-hidden flex">
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(14,50,112,.5)] via-transparent to-[rgba(196,154,42,.06)]" />
          
          <div className="flex-1 px-16 py-20 flex flex-col justify-between relative z-10">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-6 h-1 bg-[#C49A2A]" />
                <span className="text-xs text-[#C49A2A] font-bold uppercase tracking-widest">Strategic Market Entry</span>
              </div>
              
              <h1 className="text-7xl font-serif font-bold text-white mb-2 leading-tight">
                Project <span className="text-[#C49A2A]">Uday</span>
              </h1>
              <p className="text-2xl font-serif text-[rgba(255,255,255,.4)] italic mb-8">JPMorgan Chase India Digital Banking Market Entry Strategy</p>
              
              <div className="border-l-4 border-[#C49A2A] bg-[rgba(196,154,42,.04)] px-6 py-4 text-sm text-[rgba(255,255,255,.65)] mb-8 leading-relaxed">
                <strong className="text-[#C49A2A]">Strategic Objective:</strong> Define JPMorgan Chase&apos;s market entry into India&apos;s ₹2.5 trillion digital banking TAM through fintech infrastructure partnerships, corporate treasury solutions, and regulatory-as-a-service offerings.
              </div>

              <div className="flex gap-3 mb-12">
                <span className="px-4 py-2 bg-[#005EB8] text-white text-xs font-bold rounded">Growth Strategy</span>
                <span className="px-4 py-2 bg-[#C49A2A] text-[#0B0C10] text-xs font-bold rounded">Market Entry</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'TAM', value: '₹2.5Tr', desc: 'India Digital Banking' },
                { label: 'Entry Model', value: '3 Levers', desc: 'Partnerships, Treasury, Compliance' },
                { label: 'Y1 Revenue', value: '₹145Cr', desc: 'Conservative projection' },
                { label: 'Timeline', value: '12M', desc: 'To market readiness' }
              ].map((stat, i) => (
                <div key={i} className="p-4 bg-white/5 border border-[rgba(196,154,42,.15)] rounded">
                  <div className="text-[9px] text-[#C49A2A] font-bold uppercase tracking-wider mb-1">{stat.label}</div>
                  <div className="text-3xl font-serif text-white font-bold mb-1">{stat.value}</div>
                  <div className="text-[11px] text-[rgba(255,255,255,.35)]">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel */}
          <div className="w-80 bg-[#071B3E] border-l border-[rgba(196,154,42,.2)] p-0 flex flex-col">
            <div className="bg-[#C49A2A] text-[#0B0C10] px-5 py-4 font-serif text-sm font-bold uppercase tracking-widest">Key Metrics</div>
            
            <div className="flex-1 flex flex-col">
              {[
                { num: '18%', unit: 'CAGR', desc: '5-year revenue growth rate' },
                { num: '₹700Cr', unit: 'Target', desc: 'Year 5 annual revenue' },
                { num: '12M', unit: 'Timeline', desc: 'From kickoff to go-live' },
                { num: '3', unit: 'Levers', desc: 'Revenue generation models' }
              ].map((metric, i) => (
                <div key={i} className="px-5 py-5 border-b border-[rgba(196,154,42,.15)]">
                  <div className="font-serif text-4xl text-white font-bold mb-1">{metric.num}</div>
                  <div className="text-xs text-[#C49A2A] font-bold mb-1">{metric.unit}</div>
                  <div className="text-[11px] text-[rgba(255,255,255,.35)]">{metric.desc}</div>
                </div>
              ))}
            </div>

            <div className="px-5 py-4 border-t border-[rgba(196,154,42,.1)] text-[11px] text-[rgba(255,255,255,.3)] italic">
              Full India market entry playbook with partnership model, treasury solutions, and compliance infrastructure.
            </div>
          </div>
        </section>

        {/* Section 1: Market Opportunity */}
        <section id="section-0" className="px-16 py-20 bg-[#FDFCF8]">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-1 bg-[#C49A2A]" />
              <span className="text-xs text-[#8B6914] font-bold uppercase tracking-widest">Market Understanding</span>
            </div>
            <h2 className="text-4xl font-serif font-bold text-[#071B3E] mb-2">1. Market Opportunity & Sizing</h2>
            <p className="text-base text-[#4A4A5A] mb-8 leading-relaxed max-w-2xl">
              India&apos;s fintech ecosystem is at an inflection point. Digital banking adoption is accelerating, regulatory frameworks are maturing, and enterprise demand for cross-border solutions is exploding. JPMorgan Chase can capture ₹2.5 trillion TAM through partnership-first GTM.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-12">
              <div className="p-5 bg-white border border-[#DDD9CE] rounded">
                <h4 className="text-xs font-bold uppercase text-[#8A8A9A] tracking-wider mb-3">India Digital Banking TAM</h4>
                <div className="font-serif text-5xl font-bold text-[#071B3E] mb-1">₹2.5Tr</div>
                <p className="text-sm text-[#4A4A5A]">Estimated addressable market across payments, lending, treasury, and compliance infrastructure.</p>
              </div>

              <div className="p-5 bg-white border border-[#DDD9CE] rounded">
                <h4 className="text-xs font-bold uppercase text-[#8A8A9A] tracking-wider mb-3">Market Growth Rate</h4>
                <div className="font-serif text-5xl font-bold text-[#071B3E] mb-1">28%</div>
                <p className="text-sm text-[#4A4A5A]">CAGR 2022–2027 (fintech + banking digital transformation combined).</p>
              </div>

              <div className="p-5 bg-[#EBF3FC] border border-[rgba(0,94,184,.15)] rounded">
                <h4 className="text-xs font-bold uppercase text-[#005EB8] tracking-wider mb-3">Corporate Treasury Market</h4>
                <div className="font-serif text-5xl font-bold text-[#005EB8] mb-1">₹500B</div>
                <p className="text-sm text-[#4A4A5A]">Forex, trade finance, and liquidity management addressable by JPM treasury solutions.</p>
              </div>

              <div className="p-5 bg-[#FAF3DC] border border-[rgba(196,154,42,.25)] rounded">
                <h4 className="text-xs font-bold uppercase text-[#8B6914] tracking-wider mb-3">Fintech Regulation TAM</h4>
                <div className="font-serif text-5xl font-bold text-[#C49A2A] mb-1">₹150B</div>
                <p className="text-sm text-[#4A4A5A]">Compliance infrastructure, KYC/AML, and regulatory reporting for 2000+ fintechs.</p>
              </div>
            </div>

            <div className="bg-[#071B3E] text-white p-6 rounded border-l-4 border-[#C49A2A]">
              <strong className="text-[#C49A2A]">Market Dynamics:</strong> India has witnessed fintech unicorns (Razorpay, Pine Labs, Nykaa Financial), but institutional-grade infrastructure—cross-border payments, corporate treasury, regulatory-as-a-service—remains under-served. JPMorgan Chase can own this infrastructure layer.
            </div>
          </div>
        </section>

        {/* Section 2: Go-To-Market Strategy */}
        <section id="section-1" className="px-16 py-20 bg-white">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-1 bg-[#C49A2A]" />
              <span className="text-xs text-[#8B6914] font-bold uppercase tracking-widest">Strategic Framework</span>
            </div>
            <h2 className="text-4xl font-serif font-bold text-[#071B3E] mb-2">2. Three-Lever Go-To-Market Strategy</h2>
            <p className="text-base text-[#4A4A5A] mb-12 leading-relaxed max-w-2xl">
              JPMorgan Chase will pursue a three-pronged market entry, each targeting distinct customer cohorts and revenue streams.
            </p>

            <div className="space-y-6">
              <div className="border border-[#DDD9CE] rounded p-6 bg-[#FDFCF8]">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#005EB8] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                  <h3 className="text-xl font-bold text-[#071B3E]">Lever 1: Partnership-First Model (₹45Cr Y1)</h3>
                </div>
                <p className="text-sm text-[#4A4A5A] mb-4 leading-relaxed">
                  White-label payment infrastructure for Tier-1 Indian banks (ICICI, Axis, Kotak). JPM provides API, compliance, and settlement—banks brand and distribute.
                </p>
                <ul className="space-y-2 text-sm text-[#4A4A5A]">
                  <li>• Revenue: Per-transaction fees (₹45Cr based on transaction volume models)</li>
                  <li>• Timeline: 6 months partnership + integration</li>
                  <li>• Customers: 3–5 Tier-1 banks in Year 1</li>
                  <li>• Risk: Banks may prefer building in-house after learning from JPM</li>
                </ul>
              </div>

              <div className="border border-[#DDD9CE] rounded p-6 bg-[#FDFCF8]">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#C49A2A] text-[#0B0C10] flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                  <h3 className="text-xl font-bold text-[#071B3E]">Lever 2: Treasury &amp; Corporate Solutions (₹60Cr Y1)</h3>
                </div>
                <p className="text-sm text-[#4A4A5A] mb-4 leading-relaxed">
                  Liquidity management, forex hedging, and trade finance for multinational corporations and Indian conglomerates. JPM&apos;s global treasury infrastructure + India market access.
                </p>
                <ul className="space-y-2 text-sm text-[#4A4A5A]">
                  <li>• Revenue: AUM-based fees (0.10–0.15% on ₹500B TAM)</li>
                  <li>• Timeline: 3–4 months to first client</li>
                  <li>• Customers: 8–12 large corporates (TATA, Reliance, Infosys tier)</li>
                  <li>• Differentiation: Cross-border capabilities + real-time settlement</li>
                </ul>
              </div>

              <div className="border border-[#DDD9CE] rounded p-6 bg-[#FDFCF8]">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#165C36] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                  <h3 className="text-xl font-bold text-[#071B3E]">Lever 3: Regulatory-as-a-Service (₹40Cr Y1)</h3>
                </div>
                <p className="text-sm text-[#4A4A5A] mb-4 leading-relaxed">
                  Compliance infrastructure for Indian fintechs: KYC/AML, regulatory reporting, audit trails. JPM becomes the compliance backbone for 500+ fintechs.
                </p>
                <ul className="space-y-2 text-sm text-[#4A4A5A]">
                  <li>• Revenue: Per-entity subscription (₹10–50L annually per fintech)</li>
                  <li>• Timeline: 2 months product + pilot with 5 fintechs</li>
                  <li>• Customers: 80–100 fintechs within Year 1</li>
                  <li>• Stickiness: Regulatory infrastructure has high switching costs</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-[#F5F4EF] p-6 rounded">
              <h4 className="font-bold text-[#071B3E] mb-3">Combined Y1 Revenue Projection</h4>
              <div className="space-y-2 text-sm text-[#4A4A5A]">
                <div className="flex justify-between"><span>Lever 1 (Partnerships)</span><span className="font-bold">₹45Cr</span></div>
                <div className="flex justify-between"><span>Lever 2 (Treasury)</span><span className="font-bold">₹60Cr</span></div>
                <div className="flex justify-between"><span>Lever 3 (Compliance)</span><span className="font-bold">₹40Cr</span></div>
                <div className="border-t border-[#DDD9CE] pt-2 mt-2 flex justify-between font-bold text-[#071B3E]"><span>Total Y1</span><span>₹145Cr</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Revenue Model */}
        <section id="section-2" className="px-16 py-20 bg-[#F5F4EF]">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-1 bg-[#C49A2A]" />
              <span className="text-xs text-[#8B6914] font-bold uppercase tracking-widest">Financial Modeling</span>
            </div>
            <h2 className="text-4xl font-serif font-bold text-[#071B3E] mb-2">3. Revenue Model &amp; 5-Year Projection</h2>
            <p className="text-base text-[#4A4A5A] mb-12 leading-relaxed max-w-2xl">
              Three independent revenue streams scale at different rates. By Year 5, JPMorgan Chase controls ₹700Cr in annual India digital banking revenue.
            </p>

            <div className="space-y-8">
              {/* Lever 1 Growth */}
              <div className="border border-[#DDD9CE] rounded p-6 bg-white">
                <h3 className="text-lg font-bold text-[#071B3E] mb-4">Lever 1: Partnership-First (5-Year Trajectory)</h3>
                <div className="space-y-3 text-sm text-[#4A4A5A] mb-6">
                  <div className="flex justify-between py-2 border-b border-[#DDD9CE]"><span>Y1: 5 bank partners, ₹100B transaction volume</span><span className="font-bold">₹45Cr</span></div>
                  <div className="flex justify-between py-2 border-b border-[#DDD9CE]"><span>Y2: 10 banks, ₹280B volume, expanded product suite</span><span className="font-bold">₹110Cr</span></div>
                  <div className="flex justify-between py-2 border-b border-[#DDD9CE]"><span>Y3: 20 banks + fintech layer, ₹600B volume</span><span className="font-bold">₹200Cr</span></div>
                  <div className="flex justify-between py-2 border-b border-[#DDD9CE]"><span>Y4–5: Market saturation, margin expansion via AI/ML</span><span className="font-bold">₹250Cr</span></div>
                </div>
                <div className="text-xs text-[#8A8A9A] bg-[#FDFCF8] p-3 rounded italic">Growth driver: Banks increase payment volume as consumer adoption grows. Rate compression offsets volume upside.</div>
              </div>

              {/* Lever 2 Growth */}
              <div className="border border-[#DDD9CE] rounded p-6 bg-white">
                <h3 className="text-lg font-bold text-[#071B3E] mb-4">Lever 2: Corporate Treasury (5-Year Trajectory)</h3>
                <div className="space-y-3 text-sm text-[#4A4A5A] mb-6">
                  <div className="flex justify-between py-2 border-b border-[#DDD9CE]"><span>Y1: 10 corporates, ₹150B AUM under management</span><span className="font-bold">₹60Cr</span></div>
                  <div className="flex justify-between py-2 border-b border-[#DDD9CE]"><span>Y2: 25 corporates, ₹350B AUM, 0.12% fee rate</span><span className="font-bold">₹140Cr</span></div>
                  <div className="flex justify-between py-2 border-b border-[#DDD9CE]"><span>Y3: 50 corporates, ₹500B AUM (market saturation point)</span><span className="font-bold">₹175Cr</span></div>
                  <div className="flex justify-between py-2 border-b border-[#DDD9CE]"><span>Y4–5: Higher-margin advisory + execution services</span><span className="font-bold">₹200Cr</span></div>
                </div>
                <div className="text-xs text-[#8A8A9A] bg-[#FDFCF8] p-3 rounded italic">Growth driver: Cross-border trade expansion + rupee volatility = higher treasury demand. Network effects from bank partnerships.</div>
              </div>

              {/* Lever 3 Growth */}
              <div className="border border-[#DDD9CE] rounded p-6 bg-white">
                <h3 className="text-lg font-bold text-[#071B3E] mb-4">Lever 3: Compliance-as-a-Service (5-Year Trajectory)</h3>
                <div className="space-y-3 text-sm text-[#4A4A5A] mb-6">
                  <div className="flex justify-between py-2 border-b border-[#DDD9CE]"><span>Y1: 100 fintechs, ₹30L avg annual fee</span><span className="font-bold">₹40Cr</span></div>
                  <div className="flex justify-between py-2 border-b border-[#DDD9CE]"><span>Y2: 300 fintechs, increased tiering (₹20L–₹100L)</span><span className="font-bold">₹95Cr</span></div>
                  <div className="flex justify-between py-2 border-b border-[#DDD9CE]"><span>Y3: 600 fintechs, compliance API monetization</span><span className="font-bold">₹160Cr</span></div>
                  <div className="flex justify-between py-2 border-b border-[#DDD9CE]"><span>Y4–5: Regulatory AI tools, governance-as-a-service</span><span className="font-bold">₹250Cr</span></div>
                </div>
                <div className="text-xs text-[#8A8A9A] bg-[#FDFCF8] p-3 rounded italic">Growth driver: Fintech proliferation (est. 5000+ active fintechs by 2028). Regulatory tightening increases compliance demand.</div>
              </div>
            </div>

            {/* 5-Year Summary */}
            <div className="mt-12 bg-gradient-to-r from-[#071B3E] to-[#0E3270] text-white p-8 rounded">
              <h4 className="text-lg font-bold mb-6">5-Year Revenue &amp; Growth Summary</h4>
              <div className="grid grid-cols-5 gap-4 text-center">
                {[
                  { year: 'Y1', rev: '₹145Cr', growth: '—' },
                  { year: 'Y2', rev: '₹345Cr', growth: '+138%' },
                  { year: 'Y3', rev: '₹535Cr', growth: '+55%' },
                  { year: 'Y4', rev: '₹700Cr', growth: '+31%' },
                  { year: 'Y5', rev: '₹700Cr', growth: '+0%' }
                ].map((item, i) => (
                  <div key={i}>
                    <div className="text-sm font-bold mb-1">{item.year}</div>
                    <div className="font-serif text-2xl font-bold text-[#C49A2A] mb-1">{item.rev}</div>
                    <div className="text-xs text-[rgba(255,255,255,.6)]">{item.growth}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-sm text-[rgba(255,255,255,.8)]">
                <strong>Compounded Annual Growth Rate (CAGR) Y1–Y5: 48%</strong>. By Year 5, JPMorgan Chase is the de facto infrastructure provider for India digital banking.
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Success Factors */}
        <section id="section-3" className="px-16 py-20 bg-white">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-1 bg-[#C49A2A]" />
              <span className="text-xs text-[#8B6914] font-bold uppercase tracking-widest">Risk &amp; Mitigation</span>
            </div>
            <h2 className="text-4xl font-serif font-bold text-[#071B3E] mb-2">4. Critical Success Factors &amp; Risks</h2>
            <p className="text-base text-[#4A4A5A] mb-12 leading-relaxed max-w-2xl">
              Project Uday success depends on execution of regulatory relationships, technical excellence, and partnership dynamics.
            </p>

            <div className="space-y-6">
              <div className="border border-[#DDD9CE] rounded overflow-hidden">
                <div className="bg-[#E8F5EE] border-b border-[#DDD9CE] px-6 py-4">
                  <h4 className="font-bold text-[#165C36]">✓ Success Factor 1: RBI Partnership &amp; Regulatory Approval</h4>
                </div>
                <div className="px-6 py-4 text-sm text-[#4A4A5A]">
                  <p className="mb-3">JPMorgan Chase must secure RBI&apos;s endorsement for payment infrastructure and compliance services. Without regulatory approval, market entry is blocked.</p>
                  <ul className="space-y-1 ml-4">
                    <li>• <strong>Mitigation:</strong> Hire former RBI officials, engage regulatory consultants, align with RBI&apos;s fintech vision docs.</li>
                    <li>• <strong>Timeline:</strong> 6 months for regulatory dialogue + approvals</li>
                  </ul>
                </div>
              </div>

              <div className="border border-[#DDD9CE] rounded overflow-hidden">
                <div className="bg-[#E8F5EE] border-b border-[#DDD9CE] px-6 py-4">
                  <h4 className="font-bold text-[#165C36]">✓ Success Factor 2: Technology Excellence &amp; Uptime</h4>
                </div>
                <div className="px-6 py-4 text-sm text-[#4A4A5A]">
                  <p className="mb-3">Payment infrastructure must achieve 99.99% uptime. Any outage damages bank partnerships and compliance customer trust.</p>
                  <ul className="space-y-1 ml-4">
                    <li>• <strong>Mitigation:</strong> Multi-region deployment, real-time monitoring, dedicated 24/7 ops team in India.</li>
                    <li>• <strong>Investment:</strong> ₹20–25Cr in infrastructure + talent</li>
                  </ul>
                </div>
              </div>

              <div className="border border-[#DDD9CE] rounded overflow-hidden">
                <div className="bg-[#E8F5EE] border-b border-[#DDD9CE] px-6 py-4">
                  <h4 className="font-bold text-[#165C36]">✓ Success Factor 3: Partnership Model Lock-in</h4>
                </div>
                <div className="px-6 py-4 text-sm text-[#4A4A5A]">
                  <p className="mb-3">Banks must commit to multi-year agreements. Competitors (Stripe, Razorpay, Amazon Pay) will target Tier-1 bank partnerships post-JPM pilot.</p>
                  <ul className="space-y-1 ml-4">
                    <li>• <strong>Mitigation:</strong> Lock 3–5 year agreements with revenue share + equity upside to banks.</li>
                    <li>• <strong>Positioning:</strong> Become &quot;infrastructure partner&quot; not &quot;vendor.&quot;</li>
                  </ul>
                </div>
              </div>

              <div className="border border-[#9B1C1C] rounded overflow-hidden">
                <div className="bg-[#F9EAEA] border-b border-[#DDD9CE] px-6 py-4">
                  <h4 className="font-bold text-[#8B1C1C]">⚠ Risk 1: Regulatory Tightening</h4>
                </div>
                <div className="px-6 py-4 text-sm text-[#4A4A5A]">
                  <p className="mb-3">RBI could tighten KYC/AML rules or introduce new compliance requirements mid-project, rendering revenue models invalid.</p>
                  <ul className="space-y-1 ml-4">
                    <li>• <strong>Mitigation:</strong> Monitor regulatory calendar quarterly, adjust product roadmap ahead of changes.</li>
                    <li>• <strong>Impact if occurs:</strong> 6–12 month delay, ₹20–40Cr sunk costs.</li>
                  </ul>
                </div>
              </div>

              <div className="border border-[#9B1C1C] rounded overflow-hidden">
                <div className="bg-[#F9EAEA] border-b border-[#DDD9CE] px-6 py-4">
                  <h4 className="font-bold text-[#8B1C1C]">⚠ Risk 2: Competitive Disruption</h4>
                </div>
                <div className="px-6 py-4 text-sm text-[#4A4A5A]">
                  <p className="mb-3">Stripe, Google Pay, or Amazon could enter India market aggressively during JPM&apos;s buildout phase, undercutting pricing.</p>
                  <ul className="space-y-1 ml-4">
                    <li>• <strong>Mitigation:</strong> Move fast—lock partnerships before competitors enter. Emphasize compliance + treasury expertise as moat.</li>
                    <li>• <strong>Impact if occurs:</strong> Revenue compression 15–30%, increased go-to-market spend.</li>
                  </ul>
                </div>
              </div>

              <div className="border border-[#9B1C1C] rounded overflow-hidden">
                <div className="bg-[#F9EAEA] border-b border-[#DDD9CE] px-6 py-4">
                  <h4 className="font-bold text-[#8B1C1C]">⚠ Risk 3: Fintech Collapse Contagion</h4>
                </div>
                <div className="px-6 py-4 text-sm text-[#4A4A5A]">
                  <p className="mb-3">If major Indian fintechs collapse (e.g., regulatory issues), compliance-as-a-service TAM shrinks by 30–50%.</p>
                  <ul className="space-y-1 ml-4">
                    <li>• <strong>Mitigation:</strong> Diversify compliance customer base—focus on profitability not speed of growth.</li>
                    <li>• <strong>Impact if occurs:</strong> Lever 3 (compliance) revenue cut from ₹250Cr Y5 to ₹100–125Cr.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Implementation */}
        <section id="section-4" className="px-16 py-20 bg-[#F5F4EF]">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-1 bg-[#C49A2A]" />
              <span className="text-xs text-[#8B6914] font-bold uppercase tracking-widest">Execution Plan</span>
            </div>
            <h2 className="text-4xl font-serif font-bold text-[#071B3E] mb-2">5. 12-Month Implementation Roadmap</h2>
            <p className="text-base text-[#4A4A5A] mb-12 leading-relaxed max-w-2xl">
              Project Uday launches in phases. Months 1–3 focus on regulatory engagement and technical foundation. Months 4–8 bring first customers online. Months 9–12 scale and optimize.
            </p>

            <div className="space-y-4 mb-12">
              {[
                { quarter: 'Q1 (Months 1–3)', title: 'Foundation &amp; Regulatory Engagement', items: ['Establish India office + hire leadership team (CEO, COO, Chief Regulatory Officer)', 'Engage RBI + Ministry of Finance on partnership framework', 'Build core payment infrastructure (API, settlement engine)', 'Recruit first 10 fintechs for compliance-as-a-service alpha'] },
                { quarter: 'Q2 (Months 4–6)', title: 'Go-Live with Early Customers', items: ['Secure RBI preliminary approval for Lever 1 + Lever 3', 'Launch payment API with 2 Tier-1 banks (ICICI, Axis)', 'Onboard first 50 fintechs to compliance platform', 'Pitch corporate treasury to 5 large multinationals'] },
                { quarter: 'Q3 (Months 7–9)', title: 'Scale &amp; Optimize', items: ['Expand to 5 bank partners, ₹50B transaction volume', 'Scale fintech cohort to 100 customers', 'Secure first 3–5 corporate treasury clients', 'Launch AI-powered compliance monitoring features'] },
                { quarter: 'Q4 (Months 10–12)', title: 'Year-End &amp; Full Operation', items: ['Achieve ₹100B bank payment volume', '100+ fintech customers, ₹40Cr compliance revenue run-rate', '10 corporate treasury clients, ₹60Cr treasury revenue run-rate', 'Plan Year 2 expansion into Tier-2 cities + emerging fintechs'] }
              ].map((phase, i) => (
                <div key={i} className="border border-[#DDD9CE] rounded p-6 bg-white">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#071B3E] text-white flex items-center justify-center font-bold flex-shrink-0">Q{i + 1}</div>
                    <div>
                      <h4 className="font-bold text-[#071B3E]">{phase.quarter}</h4>
                      <p className="text-sm text-[#005EB8] font-medium">{phase.title}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 ml-11 text-sm text-[#4A4A5A]">
                    {phase.items.map((item, j) => (
                      <li key={j}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-[#071B3E] text-white p-6 rounded border-l-4 border-[#C49A2A]">
              <strong className="text-[#C49A2A]">Team &amp; Budget:</strong> 80-person India team by Month 12 (30 engineering, 20 product/partnerships, 15 regulatory/compliance, 15 ops/support). Total Year 1 OpEx: ₹80–100Cr. Breakeven achievable by Y2 Q3 if revenue trajectory holds.
            </div>
          </div>
        </section>

        {/* Section 6: Conclusion */}
        <section id="section-5" className="px-16 py-20 bg-white">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-1 bg-[#C49A2A]" />
              <span className="text-xs text-[#8B6914] font-bold uppercase tracking-widest">Summary</span>
            </div>
            <h2 className="text-4xl font-serif font-bold text-[#071B3E] mb-2">6. Strategic Recommendation</h2>
            <p className="text-base text-[#4A4A5A] mb-8 leading-relaxed max-w-2xl">
              <strong>Project Uday represents a ₹2.5 trillion market opportunity for JPMorgan Chase to own India&apos;s digital banking infrastructure layer.</strong>
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-[#005EB8] bg-[#EBF3FC] px-6 py-4 rounded-r">
                <h4 className="font-bold text-[#005EB8] mb-2">Why JPMorgan Chase Wins:</h4>
                <ul className="space-y-1 text-sm text-[#4A4A5A]">
                  <li>• <strong>Global infrastructure:</strong> JPM&apos;s cross-border payment + treasury expertise has no Indian competitor.</li>
                  <li>• <strong>Regulatory credibility:</strong> RBI trusts JPM; competitors lack institutional relationships.</li>
                  <li>• <strong>Capital:</strong> ₹80–100Cr Year 1 investment is manageable for JPM; barriers for startups.</li>
                  <li>• <strong>Network effects:</strong> Partnerships with banks → compliance for fintechs → treasury for corporates. Flywheel.</li>
                </ul>
              </div>

              <div className="bg-[#FAF3DC] border border-[rgba(196,154,42,.25)] p-6 rounded">
                <h4 className="font-bold text-[#8B6914] mb-2">Financial Upside (5-Year Window):</h4>
                <ul className="space-y-2 text-sm text-[#4A4A5A]">
                  <li>• Y1 revenue: ₹145Cr (break-even by Y2)</li>
                  <li>• Y5 revenue: ₹700Cr (48% CAGR)</li>
                  <li>• Cumulative 5-year revenue: ₹2,400Cr</li>
                  <li>• Cumulative gross profit (60% margin): ₹1,440Cr</li>
                  <li>• Platform valuation (Year 5): ₹3,500–5,000Cr (5–7× revenue multiple)</li>
                </ul>
              </div>

              <div className="bg-white border border-[#DDD9CE] p-6 rounded">
                <h4 className="font-bold text-[#071B3E] mb-3">Next Steps (Immediate):</h4>
                <ol className="space-y-2 text-sm text-[#4A4A5A]">
                  <li><strong>1. Regulatory Scoping (Week 1–2):</strong> Engage RBI, Ministry of Finance to validate partnership framework.</li>
                  <li><strong>2. Team Formation (Week 3–4):</strong> Hire India MD + Chief Regulatory Officer. Recruit first 10 engineers.</li>
                  <li><strong>3. Bank Outreach (Week 2–6):</strong> Pitch partnership model to ICICI, Axis, Kotak. Lock intent letters.</li>
                  <li><strong>4. Technical Spec (Week 1–8):</strong> Finalize API design, compliance infrastructure requirements, corporate treasury roadmap.</li>
                  <li><strong>5. Board Approval (Week 8–10):</strong> Present business case for ₹80–100Cr Year 1 investment. Secure capital commitment.</li>
                </ol>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-[#071B3E] via-[#0E3270] to-[#005EB8] text-white p-8 rounded text-center">
              <p className="text-lg font-serif font-bold mb-2">Project Uday is not just a market entry.</p>
              <p className="text-sm text-[rgba(255,255,255,.8)]">It&apos;s JPMorgan Chase becoming the infrastructure partner for India&apos;s next era of financial innovation—payments, treasury, compliance, and capital markets. The 12-month window to establish regulatory trust and lock bank partnerships is now. By Year 5, JPM controls ₹700Cr in recurring revenue and holds irreplaceable strategic positioning in India&apos;s FinTech ecosystem.</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="px-16 py-12 bg-[#F5F4EF] border-t border-[#DDD9CE] text-center text-sm text-[#8A8A9A]">
          <p>Project Uday: India Digital Banking Market Entry Strategy | JPMorgan Chase 2026</p>
        </section>
      </div>
    </main>
  )
}
