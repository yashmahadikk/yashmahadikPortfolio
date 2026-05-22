import Link from "next/link"
import { ArrowLeft, TrendingUp, Users, Mail, Target, BarChart3, Newspaper, Zap } from "lucide-react"

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
                The Hindu&apos;s
              </h1>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-[#BE1E2D]">
                Subscription Flywheel
              </h1>
              <p className="text-lg text-[#9E9386] italic max-w-xl mb-8 leading-relaxed">
                How The Hindu can convert 12 million monthly visitors into a loyal, paying digital readership - 
                by fixing the discovery-to-subscription funnel, one experiment at a time.
              </p>
              <div className="flex flex-wrap gap-8 text-sm">
                <div>
                  <p className="text-[#6A6058] text-xs uppercase tracking-wider mb-1">Role Applied</p>
                  <p className="text-[#F5F0E8] font-semibold">Growth Product Manager</p>
                </div>
                <div>
                  <p className="text-[#6A6058] text-xs uppercase tracking-wider mb-1">Company</p>
                  <p className="text-[#F5F0E8] font-semibold">The Hindu Group, Chennai</p>
                </div>
                <div>
                  <p className="text-[#6A6058] text-xs uppercase tracking-wider mb-1">Author</p>
                  <p className="text-[#F5F0E8] font-semibold">Yash Mahadik</p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 p-8 rounded-lg space-y-6">
              <div className="border-b border-white/10 pb-6">
                <p className="text-[#6A6058] text-xs uppercase tracking-wider mb-2">Monthly Visitors</p>
                <p className="text-4xl font-bold text-[#F5F0E8]">12M</p>
              </div>
              <div className="border-b border-white/10 pb-6">
                <p className="text-[#6A6058] text-xs uppercase tracking-wider mb-2">Current Conversion</p>
                <p className="text-4xl font-bold text-[#BE1E2D]">{"<"}1%</p>
              </div>
              <div className="border-b border-white/10 pb-6">
                <p className="text-[#6A6058] text-xs uppercase tracking-wider mb-2">Growth Levers</p>
                <p className="text-4xl font-bold text-[#F5F0E8]">4</p>
              </div>
              <div>
                <p className="text-[#6A6058] text-xs uppercase tracking-wider mb-2">Brand Heritage</p>
                <p className="text-4xl font-bold text-[#F5F0E8]">143 Years</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Context */}
      <section className="py-16 px-6 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Newspaper className="text-primary" size={24} />
            <h2 className="text-2xl font-bold text-foreground">Business Context</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-3">The Hindu Group</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Hindu is one of India&apos;s most respected English-language newspapers, with 143 years of editorial trust. 
                The digital arm receives 12 million monthly visitors but struggles to convert them into paying subscribers.
              </p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm font-medium text-foreground mb-2">Business Model</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>- Print subscriptions (declining)</li>
                  <li>- Digital advertising (commoditized)</li>
                  <li>- Digital subscriptions (growth focus)</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-3">Competitive Positioning</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-muted/30 rounded">
                  <span className="text-sm text-muted-foreground">The Hindu</span>
                  <span className="text-sm font-semibold text-foreground">12M visitors, 120K paying</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted/30 rounded">
                  <span className="text-sm text-muted-foreground">Times of India</span>
                  <span className="text-sm font-semibold text-foreground">Ad-heavy, low conversion</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted/30 rounded">
                  <span className="text-sm text-muted-foreground">Indian Express</span>
                  <span className="text-sm font-semibold text-foreground">Growing digital subs</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted/30 rounded">
                  <span className="text-sm text-muted-foreground">Mint/ET</span>
                  <span className="text-sm font-semibold text-foreground">Premium positioning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Definition */}
      <section className="py-16 px-6 bg-muted/30 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Target className="text-primary" size={24} />
            <h2 className="text-2xl font-bold text-foreground">The Problem: A Leaky Funnel</h2>
          </div>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            Despite 143 years of editorial trust and 12M monthly visitors, The Hindu converts less than 1% to paying subscribers. 
            The funnel leaks at every stage.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-background p-6 rounded-lg text-center border border-border">
              <p className="text-3xl font-bold text-foreground mb-2">12M</p>
              <p className="text-sm text-muted-foreground">Monthly Visitors</p>
              <p className="text-xs text-primary mt-2">100%</p>
            </div>
            <div className="bg-background p-6 rounded-lg text-center border border-border">
              <p className="text-3xl font-bold text-foreground mb-2">2.5M</p>
              <p className="text-sm text-muted-foreground">Engaged Readers</p>
              <p className="text-xs text-red-500 mt-2">-79% drop</p>
            </div>
            <div className="bg-background p-6 rounded-lg text-center border border-border">
              <p className="text-3xl font-bold text-foreground mb-2">400K</p>
              <p className="text-sm text-muted-foreground">Registered Users</p>
              <p className="text-xs text-red-500 mt-2">-84% drop</p>
            </div>
            <div className="bg-background p-6 rounded-lg text-center border border-border">
              <p className="text-3xl font-bold text-foreground mb-2">120K</p>
              <p className="text-sm text-muted-foreground">Paying Subscribers</p>
              <p className="text-xs text-red-500 mt-2">-70% drop</p>
            </div>
          </div>
        </div>
      </section>

      {/* User Segmentation */}
      <section className="py-16 px-6 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Users className="text-primary" size={24} />
            <h2 className="text-2xl font-bold text-foreground">User Segmentation</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mb-4">1</div>
              <h3 className="font-semibold text-foreground mb-2">The Loyal Lifer</h3>
              <p className="text-sm text-muted-foreground mb-3">40+ years old, reads print edition daily, subscribes out of habit and trust</p>
              <p className="text-xs font-medium text-green-600">HIGH LTV - Low churn risk</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mb-4">2</div>
              <h3 className="font-semibold text-foreground mb-2">The Habitual Browser</h3>
              <p className="text-sm text-muted-foreground mb-3">25-40, visits 3-5x/week, reads headlines but rarely deep-dives</p>
              <p className="text-xs font-medium text-blue-600">MEDIUM LTV - Conversion opportunity</p>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold mb-4">3</div>
              <h3 className="font-semibold text-foreground mb-2">The Google Drifter</h3>
              <p className="text-sm text-muted-foreground mb-3">Arrives via search, reads one article, bounces. No brand loyalty.</p>
              <p className="text-xs font-medium text-amber-600">LOW LTV - Acquisition challenge</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mb-4">4</div>
              <h3 className="font-semibold text-foreground mb-2">The Young Sceptic</h3>
              <p className="text-sm text-muted-foreground mb-3">18-25, digital native, questions paying for news when free options exist</p>
              <p className="text-xs font-medium text-purple-600">FUTURE LTV - Education needed</p>
            </div>
          </div>
        </div>
      </section>

      {/* RERE Solution */}
      <section className="py-16 px-6 bg-muted/30 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="text-primary" size={24} />
            <h2 className="text-2xl font-bold text-foreground">The RERE Growth Engine</h2>
          </div>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            A four-lever framework to fix the funnel at each stage: Reach, Engagement, Retention, Revenue.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Reach */}
            <div className="bg-background p-6 rounded-lg border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center text-white font-bold text-sm">R</div>
                <h3 className="font-semibold text-foreground">Reach: Google Discover Optimization</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Optimize article metadata, images, and headlines for Google Discover to increase organic traffic by 30%.
              </p>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>RICE Score: 405</span>
                <span className="text-green-600 font-medium">Priority: P0</span>
              </div>
            </div>
            {/* Engagement */}
            <div className="bg-background p-6 rounded-lg border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white font-bold text-sm">E</div>
                <h3 className="font-semibold text-foreground">Engagement: Morning Brief Newsletter</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Launch The Hindu Morning Brief - a curated 5-minute daily newsletter with projected 7.2 Cr ARR.
              </p>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>RICE Score: 320</span>
                <span className="text-blue-600 font-medium">Priority: P0</span>
              </div>
            </div>
            {/* Retention */}
            <div className="bg-background p-6 rounded-lg border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-amber-500 rounded flex items-center justify-center text-white font-bold text-sm">R</div>
                <h3 className="font-semibold text-foreground">Retention: Smart Paywall + Onboarding</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Implement metered paywall with personalized article recommendations and progressive onboarding.
              </p>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>RICE Score: 284</span>
                <span className="text-amber-600 font-medium">Priority: P1</span>
              </div>
            </div>
            {/* Revenue */}
            <div className="bg-background p-6 rounded-lg border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-purple-500 rounded flex items-center justify-center text-white font-bold text-sm">E</div>
                <h3 className="font-semibold text-foreground">Revenue: Subscription Tier Expansion</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Launch Student (Rs.49), Corporate (Rs.2,999/seat), and Hindu+ Premium (Rs.999) tiers.
              </p>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>RICE Score: 192</span>
                <span className="text-purple-600 font-medium">Priority: P2</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Deep Dive */}
      <section className="py-16 px-6 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Mail className="text-primary" size={24} />
            <h2 className="text-2xl font-bold text-foreground">Deep Dive: The Hindu Morning Brief</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-3">Product Concept</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                A 5-minute daily newsletter delivered at 6 AM with curated top stories, 
                analysis, and exclusive subscriber content. Designed to build habit and drive conversions.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">5 top stories with 2-line summaries</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">1 deep-dive analysis piece</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Quote of the day + editorial cartoon</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Personalized reading recommendations</span>
                </div>
              </div>
            </div>
            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="font-semibold text-foreground mb-4">Projected Impact</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Target Subscribers</span>
                  <span className="font-semibold text-foreground">500K</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Open Rate Target</span>
                  <span className="font-semibold text-foreground">45%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">CTR Target</span>
                  <span className="font-semibold text-foreground">12%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Conversion to Paid</span>
                  <span className="font-semibold text-foreground">4%</span>
                </div>
                <div className="flex justify-between items-center border-t border-border pt-4 mt-4">
                  <span className="text-sm font-medium text-foreground">Projected ARR</span>
                  <span className="font-bold text-primary text-lg">Rs.7.2 Cr</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 px-6 bg-muted/30 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <BarChart3 className="text-primary" size={24} />
            <h2 className="text-2xl font-bold text-foreground">Success Metrics</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-background p-6 rounded-lg border border-border">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="text-primary" size={18} />
                <h3 className="font-semibold text-foreground">North Star</h3>
              </div>
              <p className="text-2xl font-bold text-foreground mb-2">Monthly Paying Subscribers</p>
              <p className="text-sm text-muted-foreground">Target: 120K to 200K in 12 months</p>
            </div>
            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-4">L1 Metrics (Leading)</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>- Newsletter subscribers: 500K</li>
                <li>- Registered users: 400K to 800K</li>
                <li>- Articles/session: 1.2 to 2.5</li>
                <li>- Return visitor rate: 25% to 40%</li>
              </ul>
            </div>
            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-4">L2 Metrics (Health)</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>- Subscriber churn rate: {"<"}5%/month</li>
                <li>- NPS score: {">"} 50</li>
                <li>- Support tickets: {"<"}2% of subs</li>
                <li>- Payment success rate: {">"}95%</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Interested in discussing this case study?</h2>
          <p className="text-muted-foreground mb-8">
            I&apos;d love to walk you through my approach to growth product management and how these frameworks can apply to your organization.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors rounded-md"
            >
              Get In Touch
            </Link>
            <Link
              href="/#case-studies"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-foreground font-semibold border border-border hover:border-primary hover:text-primary transition-colors rounded-md"
            >
              View Other Case Studies
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
