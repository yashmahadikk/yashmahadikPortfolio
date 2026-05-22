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
          <span className="text-sm font-semibold text-foreground">The Hindu — Growth PM Case Study</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-[#1C1008] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[1fr_320px] gap-12">
            <div>
              <p className="text-[#BE1E2D] text-sm font-semibold tracking-wider mb-4">GROWTH PRODUCT MANAGER · APPLICATION CASE STUDY</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-2 text-[#F5F0E8]">
                {"The Hindu's"}
              </h1>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-[#BE1E2D]">
                Subscription Flywheel
              </h1>
              <p className="text-lg text-[#9E9386] italic max-w-xl mb-8 leading-relaxed">
                How The Hindu can convert 12 million monthly visitors into a loyal, paying digital readership — 
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
                <p className="text-4xl font-serif font-bold text-[#BE1E2D]">~12M</p>
                <p className="text-sm text-[#8A8078]">Estimated monthly unique visitors to thehindu.com</p>
              </div>
              <div className="border-b border-white/10 pb-6">
                <p className="text-4xl font-serif font-bold text-[#BE1E2D]">{"<1%"}</p>
                <p className="text-sm text-[#8A8078]">Typical paywall conversion rate — significant room to grow</p>
              </div>
              <div className="border-b border-white/10 pb-6">
                <p className="text-4xl font-serif font-bold text-[#BE1E2D]">4</p>
                <p className="text-sm text-[#8A8078]">Core growth levers: Reach · Engagement · Retention · Revenue</p>
              </div>
              <div>
                <p className="text-4xl font-serif font-bold text-[#BE1E2D]">143</p>
                <p className="text-sm text-[#8A8078]">Years of editorial trust — the brand moat no competitor can replicate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Context */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#BE1E2D] text-sm font-semibold tracking-wider mb-2">BUSINESS CONTEXT</p>
          <h2 className="text-3xl font-serif font-bold text-foreground mb-4">The Hindu in the Digital Era</h2>
          <p className="text-muted-foreground italic mb-8 max-w-2xl">
            Understanding the business model, the audience, and the structural opportunity before defining the product problem.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="border-l-4 border-[#BE1E2D] bg-card p-6 rounded-r-lg">
              <h3 className="text-[#BE1E2D] text-xs font-semibold tracking-wider uppercase mb-4">The Business Model</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2"><span className="text-[#BE1E2D]">•</span><span><strong className="text-foreground">Subscription revenue:</strong> The Hindu Premium (digital) + ePaper. {"India's"} most trusted English newspaper now behind a metered paywall.</span></li>
                <li className="flex gap-2"><span className="text-[#BE1E2D]">•</span><span><strong className="text-foreground">Advertising:</strong> Display, programmatic, and native advertising. Revenue tied directly to traffic volume and dwell time.</span></li>
                <li className="flex gap-2"><span className="text-[#BE1E2D]">•</span><span><strong className="text-foreground">Brand equity moat:</strong> 143-year editorial heritage. The FT of Indian journalism — quality over clicks.</span></li>
                <li className="flex gap-2"><span className="text-[#BE1E2D]">•</span><span><strong className="text-foreground">Reader loyalty:</strong> Generational readership in Tamil Nadu, Karnataka, Andhra Pradesh.</span></li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card border border-border p-4 rounded-lg text-center">
                <p className="text-3xl font-serif font-bold text-[#BE1E2D]">~12M</p>
                <p className="text-xs text-muted-foreground">Est. monthly unique visitors</p>
              </div>
              <div className="bg-card border border-border p-4 rounded-lg text-center">
                <p className="text-3xl font-serif font-bold text-[#BE1E2D]">143</p>
                <p className="text-xs text-muted-foreground">Years since 1878</p>
              </div>
              <div className="bg-card border border-border p-4 rounded-lg text-center">
                <p className="text-3xl font-serif font-bold text-[#BE1E2D]">#2</p>
                <p className="text-xs text-muted-foreground">English daily by credibility</p>
              </div>
              <div className="bg-card border border-border p-4 rounded-lg text-center">
                <p className="text-3xl font-serif font-bold text-[#BE1E2D]">5+</p>
                <p className="text-xs text-muted-foreground">Properties in portfolio</p>
              </div>
            </div>
          </div>

          <blockquote className="border-l-4 border-[#BE1E2D] bg-[#FFF0F1] p-6 rounded-r-lg">
            <p className="text-foreground italic font-serif">
              {"\"The Hindu is not competing with BuzzFeed — it's competing with the FT, The Guardian, and NYT for the same premium, educated reader who will pay for quality. The product strategy must start from this positioning.\""}
            </p>
          </blockquote>
        </div>
      </section>

      {/* Problem Definition */}
      <section className="py-16 px-6 bg-[#F5EFE6]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#BE1E2D] text-sm font-semibold tracking-wider mb-2">PROBLEM DEFINITION</p>
          <h2 className="text-3xl font-serif font-bold text-foreground mb-4">The Leaky Funnel: High Traffic, Low Conversion</h2>
          <p className="text-muted-foreground italic mb-8 max-w-2xl">
            The Hindu has world-class journalism and a recognisable brand. The product problem is not content — it is converting readers who already trust The Hindu into subscribers who pay for it.
          </p>

          <div className="bg-[#1C1008] text-white p-6 rounded-lg mb-8">
            <h3 className="text-[#BE1E2D] text-xs font-semibold tracking-wider uppercase mb-3">THE CORE PROBLEM</h3>
            <p className="text-[#9E9386]">
              An estimated <strong className="text-[#F5F0E8]">12 million people visit The Hindu every month.</strong> Most arrive via Google, read one article, and leave — never encountering the paywall, never registering, never subscribing. The funnel is leaking at every stage. <strong className="text-[#F5F0E8]">{"Fixing the funnel, not the journalism, is the Growth PM's mandate."}</strong>
            </p>
          </div>

          {/* Funnel */}
          <div className="space-y-2 mb-8">
            <div className="flex items-center gap-4 p-4 bg-card border border-border border-l-4 border-l-[#BE1E2D] rounded-r-lg">
              <p className="text-2xl font-serif font-bold text-[#BE1E2D] w-20">~12M</p>
              <div className="flex-1">
                <p className="font-semibold text-foreground">Monthly Unique Visitors</p>
                <p className="text-sm text-muted-foreground">~70% arrive from Google Search / Discover. High intent but low brand relationship.</p>
              </div>
              <span className="text-xs bg-muted px-2 py-1 rounded">TOP OF FUNNEL</span>
            </div>
            <div className="flex items-center gap-4 p-4 bg-card border border-border border-l-4 border-l-[#B8922A] rounded-r-lg">
              <p className="text-2xl font-serif font-bold text-[#B8922A] w-20">~2.5M</p>
              <div className="flex-1">
                <p className="font-semibold text-foreground">Repeat Visitors (3+ visits/month)</p>
                <p className="text-sm text-muted-foreground">~20% of total. Have some brand recognition. Not yet registered.</p>
              </div>
              <span className="text-xs bg-[#B8922A] text-white px-2 py-1 rounded">ENGAGED</span>
            </div>
            <div className="flex items-center gap-4 p-4 bg-card border border-border border-l-4 border-l-[#C0521A] rounded-r-lg">
              <p className="text-2xl font-serif font-bold text-[#C0521A] w-20">~400K</p>
              <div className="flex-1">
                <p className="font-semibold text-foreground">Registered (Non-Paying) Users</p>
                <p className="text-sm text-muted-foreground">Hit the paywall, registered for more free articles. The highest-value cohort.</p>
              </div>
              <span className="text-xs bg-[#C0521A] text-white px-2 py-1 rounded">HIGH INTENT</span>
            </div>
            <div className="flex items-center gap-4 p-4 bg-[#EFF7F3] border border-[#2B7A4B] border-l-4 border-l-[#2B7A4B] rounded-r-lg">
              <p className="text-2xl font-serif font-bold text-[#2B7A4B] w-20">~120K</p>
              <div className="flex-1">
                <p className="font-semibold text-foreground">Paying Subscribers (Estimated)</p>
                <p className="text-sm text-muted-foreground">~1% conversion rate. NYT runs at 3–5%. This gap is the product opportunity.</p>
              </div>
              <span className="text-xs bg-[#2B7A4B] text-white px-2 py-1 rounded">SUBSCRIBERS</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="border-l-4 border-[#BE1E2D] bg-card p-4 rounded-r-lg">
              <h4 className="text-[#BE1E2D] font-semibold text-sm mb-2">Google Traffic Problem</h4>
              <p className="text-sm text-muted-foreground">~60–70% of traffic comes via Google. These readers have zero brand relationship — they clicked an article, got their answer, left.</p>
            </div>
            <div className="border-l-4 border-[#B8922A] bg-card p-4 rounded-r-lg">
              <h4 className="text-[#B8922A] font-semibold text-sm mb-2">Metering Gap</h4>
              <p className="text-sm text-muted-foreground">The free article allotment, paywall trigger timing, and registration friction have likely never been A/B tested at scale.</p>
            </div>
            <div className="border-l-4 border-[#1A5276] bg-card p-4 rounded-r-lg">
              <h4 className="text-[#1A5276] font-semibold text-sm mb-2">Habit Deficit</h4>
              <p className="text-sm text-muted-foreground">No daily habit formation product — no morning newsletter, no personalized feed, no push notification strategy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* User Segmentation */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#BE1E2D] text-sm font-semibold tracking-wider mb-2">USER SEGMENTATION</p>
          <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Four Types of Hindu Readers — Only One Pays</h2>
          <p className="text-muted-foreground italic mb-8 max-w-2xl">
            Not all 12M monthly visitors are equal. Understanding which segments to activate determines the product roadmap.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-[#BE1E2D] bg-card p-6 rounded-r-lg">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-serif font-bold text-lg">The Loyal Lifer</h3>
                <span className="text-xs bg-[#2B7A4B] text-white px-2 py-1 rounded">PAYING · RETAIN</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3"><strong className="text-foreground">Who:</strong> 40–65. Has read The Hindu for 10+ years. Trusts only The Hindu. High ARPU, low churn risk.</p>
              <p className="text-sm text-muted-foreground mb-3"><strong className="text-foreground">Unmet need:</strong> Better digital experience that matches print quality. Frustrated by cluttered mobile UX.</p>
              <p className="text-xs text-[#2B7A4B] font-semibold border-t border-border pt-3">Strategy: Protect NPS. Reduce churn. Cross-sell ePaper + BusinessLine.</p>
            </div>

            <div className="border-l-4 border-[#B8922A] bg-card p-6 rounded-r-lg">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-serif font-bold text-lg">The Habitual Browser</h3>
                <span className="text-xs bg-[#C0521A] text-white px-2 py-1 rounded">HIGH VALUE · CONVERT</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3"><strong className="text-foreground">Who:</strong> 28–45. Opens The Hindu 4–8×/week. Registered but not subscribed. Price-sensitive.</p>
              <p className="text-sm text-muted-foreground mb-3"><strong className="text-foreground">Unmet need:</strong> Wants to justify the cost. Needs to feel The Hindu is daily-indispensable.</p>
              <p className="text-xs text-[#B8922A] font-semibold border-t border-border pt-3">Strategy: Smart paywall, email habit, personalised feed. Primary conversion target.</p>
            </div>

            <div className="border-l-4 border-[#1A5276] bg-card p-6 rounded-r-lg">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-serif font-bold text-lg">The Google Drifter</h3>
                <span className="text-xs bg-muted px-2 py-1 rounded">LARGEST GROUP · EDUCATE</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3"><strong className="text-foreground">Who:</strong> {"22–40. Clicks The Hindu links in Google Search/Discover. Reads one article. Leaves. ~65% of total traffic."}</p>
              <p className="text-sm text-muted-foreground mb-3"><strong className="text-foreground">Unmet need:</strong> {"Not actively looking for news. Needs to discover The Hindu's broader value."}</p>
              <p className="text-xs text-[#1A5276] font-semibold border-t border-border pt-3">Strategy: Google Discover optimisation, article experience, newsletter as capture tool.</p>
            </div>

            <div className="border-l-4 border-[#C0521A] bg-card p-6 rounded-r-lg">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-serif font-bold text-lg">The Young Sceptic</h3>
                <span className="text-xs bg-muted px-2 py-1 rounded">FUTURE REVENUE · ACQUIRE</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3"><strong className="text-foreground">Who:</strong> {"18–27. Gets news from Instagram reels and YouTube. Thinks newspapers are their parents' thing."}</p>
              <p className="text-sm text-muted-foreground mb-3"><strong className="text-foreground">Unmet need:</strong> Needs to be met where they are — reels, explainer videos, short-form.</p>
              <p className="text-xs text-[#C0521A] font-semibold border-t border-border pt-3">Strategy: Student tier (₹49/month), social-first content, reels and explainers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* RERE Solution Framework */}
      <section className="py-16 px-6 bg-[#F5EFE6]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#BE1E2D] text-sm font-semibold tracking-wider mb-2">SOLUTION FRAMEWORK</p>
          <h2 className="text-3xl font-serif font-bold text-foreground mb-4">The RERE Engine: Four Growth Levers</h2>
          <p className="text-muted-foreground italic mb-8 max-w-2xl">
            A structured approach to fixing the subscription funnel — one lever at a time. Each lever has specific metrics, experiments, and expected outcomes.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Reach */}
            <div className="bg-card border border-border p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#BE1E2D] rounded-lg flex items-center justify-center">
                  <TrendingUp className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">1. REACH</h3>
                  <p className="text-xs text-muted-foreground">Get more eyes on content</p>
                </div>
                <span className="ml-auto text-xs bg-[#BE1E2D] text-white px-2 py-1 rounded">RICE: 405</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                <strong className="text-foreground">Primary Initiative:</strong> Google Discover Optimization — structured data, headline testing, image guidelines to increase click-through from Google surfaces.
              </p>
              <div className="border-t border-border pt-4">
                <p className="text-xs text-muted-foreground"><strong className="text-foreground">Target:</strong> +20% organic traffic from Google Discover</p>
              </div>
            </div>

            {/* Engagement */}
            <div className="bg-card border border-border p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#B8922A] rounded-lg flex items-center justify-center">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">2. ENGAGEMENT</h3>
                  <p className="text-xs text-muted-foreground">Build daily habit</p>
                </div>
                <span className="ml-auto text-xs bg-[#B8922A] text-white px-2 py-1 rounded">RICE: 320</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                <strong className="text-foreground">Primary Initiative:</strong> The Hindu Morning Brief — a 7 AM newsletter with 5 must-read stories, delivered before readers open any other news app.
              </p>
              <div className="border-t border-border pt-4">
                <p className="text-xs text-muted-foreground"><strong className="text-foreground">Target:</strong> 500K subscribers, 45% open rate, ₹7.2 Cr ARR</p>
              </div>
            </div>

            {/* Retention */}
            <div className="bg-card border border-border p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#1A5276] rounded-lg flex items-center justify-center">
                  <Users className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">3. RETENTION</h3>
                  <p className="text-xs text-muted-foreground">Convert registered to paying</p>
                </div>
                <span className="ml-auto text-xs bg-[#1A5276] text-white px-2 py-1 rounded">RICE: 284</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                <strong className="text-foreground">Primary Initiative:</strong> Smart Paywall Metering — dynamic free article limits based on user engagement signals + frictionless registration flow.
              </p>
              <div className="border-t border-border pt-4">
                <p className="text-xs text-muted-foreground"><strong className="text-foreground">Target:</strong> +0.5% paywall conversion (1% → 1.5%)</p>
              </div>
            </div>

            {/* Revenue */}
            <div className="bg-card border border-border p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#2B7A4B] rounded-lg flex items-center justify-center">
                  <Target className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">4. REVENUE</h3>
                  <p className="text-xs text-muted-foreground">Expand ARPU</p>
                </div>
                <span className="ml-auto text-xs bg-[#2B7A4B] text-white px-2 py-1 rounded">RICE: 192</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                <strong className="text-foreground">Primary Initiative:</strong> Subscription Tier Expansion — Student (₹49), Corporate (₹2,999/seat), Hindu+ Premium (₹999) with archives and exclusive content.
              </p>
              <div className="border-t border-border pt-4">
                <p className="text-xs text-muted-foreground"><strong className="text-foreground">Target:</strong> +15% ARPU from tier mix optimization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#BE1E2D] text-sm font-semibold tracking-wider mb-2">SUCCESS METRICS</p>
          <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Measuring What Matters</h2>
          <p className="text-muted-foreground italic mb-8 max-w-2xl">
            The North Star metric and supporting L1/L2 metrics that will guide prioritization and measure success.
          </p>

          <div className="bg-[#1C1008] text-white p-8 rounded-lg mb-8">
            <div className="flex items-center gap-4 mb-4">
              <BarChart3 className="text-[#BE1E2D]" size={32} />
              <div>
                <p className="text-[#6A6058] text-xs uppercase tracking-wider">NORTH STAR METRIC</p>
                <p className="text-2xl font-serif font-bold text-[#F5F0E8]">Monthly Paying Subscribers (MPS)</p>
              </div>
            </div>
            <p className="text-[#9E9386]">
              The single metric that captures both acquisition and retention health. Target: grow from ~120K to 180K in 12 months (+50%).
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            <div className="border-l-4 border-[#BE1E2D] bg-card p-4 rounded-r-lg">
              <p className="text-xs text-[#BE1E2D] font-semibold uppercase mb-2">REACH</p>
              <p className="font-semibold text-foreground text-sm">Organic Traffic</p>
              <p className="text-xs text-muted-foreground">Google Discover CTR, SEO impressions</p>
            </div>
            <div className="border-l-4 border-[#B8922A] bg-card p-4 rounded-r-lg">
              <p className="text-xs text-[#B8922A] font-semibold uppercase mb-2">ENGAGEMENT</p>
              <p className="font-semibold text-foreground text-sm">Newsletter Subs</p>
              <p className="text-xs text-muted-foreground">Open rate, click rate, DAU/MAU</p>
            </div>
            <div className="border-l-4 border-[#1A5276] bg-card p-4 rounded-r-lg">
              <p className="text-xs text-[#1A5276] font-semibold uppercase mb-2">RETENTION</p>
              <p className="font-semibold text-foreground text-sm">Paywall Conversion</p>
              <p className="text-xs text-muted-foreground">Registration rate, trial starts</p>
            </div>
            <div className="border-l-4 border-[#2B7A4B] bg-card p-4 rounded-r-lg">
              <p className="text-xs text-[#2B7A4B] font-semibold uppercase mb-2">REVENUE</p>
              <p className="font-semibold text-foreground text-sm">ARPU & LTV</p>
              <p className="text-xs text-muted-foreground">Tier mix, churn rate, renewals</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#BE1E2D] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <Newspaper className="mx-auto mb-4" size={40} />
          <h2 className="text-3xl font-serif font-bold mb-4">Ready to Fix the Funnel?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            {"This case study outlines a structured approach to The Hindu's subscription growth challenge. Let's discuss how these frameworks can be applied to your product."}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#BE1E2D] font-semibold hover:bg-white/90 transition-colors rounded-md"
            >
              <Zap size={20} />
              Get In Touch
            </Link>
            <Link
              href="/#case-studies"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors rounded-md"
            >
              View More Case Studies
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
