import Link from "next/link"
import { ArrowLeft, Target, Users, TrendingUp, Lightbulb, CheckCircle, AlertTriangle, BarChart3 } from "lucide-react"

export const metadata = {
  title: "Swiggy Case Study | Yash Mahadik",
  description: "Increasing Quality Text Reviews on Swiggy Food Delivery - A comprehensive product case study"
}

export default function SwigyCaseStudyPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link href="/#case-studies" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft size={18} />
            Back to Case Studies
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary text-sm font-semibold tracking-wider mb-4">SWIGGY | FOOD DELIVERY</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-foreground mb-6 leading-tight">
            How Swiggy Can 2X Quality Text Reviews & Unlock $800M in Annual GOV
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            A deep-dive into solving the review quality problem on food delivery platforms through AI-powered voice reviews and smart hashtag tagging.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-primary/10 px-4 py-2 rounded-md">
              <span className="text-primary font-semibold">Potential Impact: $800M GOV</span>
            </div>
            <div className="bg-emerald-100 px-4 py-2 rounded-md">
              <span className="text-emerald-700 font-semibold">Target: 2.2M Active Users</span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-6 bg-orange-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-foreground mb-8">Business Context</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Target className="text-primary mb-4" size={32} />
              <h3 className="font-semibold text-foreground mb-2">The Goal</h3>
              <p className="text-muted-foreground text-sm">Increase quality text reviews on Swiggy&apos;s food delivery vertical to drive menu page conversion and user trust.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Users className="text-primary mb-4" size={32} />
              <h3 className="font-semibold text-foreground mb-2">Target Segment</h3>
              <p className="text-muted-foreground text-sm">~2.2M highly active users (4+ orders/month) who value reviews but only leave ratings due to friction.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <TrendingUp className="text-primary mb-4" size={32} />
              <h3 className="font-semibold text-foreground mb-2">Revenue Impact</h3>
              <p className="text-muted-foreground text-sm">From $3.6B to $4.4B annual GOV through improved menu page conversion rates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Reviews Matter */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-foreground mb-8">Why Text Reviews Matter for Swiggy</h2>
          <div className="bg-slate-50 p-8 rounded-lg mb-8">
            <h3 className="font-semibold text-foreground mb-4">The Growth Loop</h3>
            <div className="grid md:grid-cols-6 gap-4 text-center text-sm">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-medium">User Visits Swiggy</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-medium">Checks Restaurant Reviews</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-medium">Makes Ordering Decision</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-medium">Receives Predictable Experience</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-medium">Trusts Platform</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-2 border-primary">
                <p className="font-medium text-primary">Reviews the Order</p>
              </div>
            </div>
            <p className="text-muted-foreground mt-6 text-center">Google indexes reviews, driving organic discovery and completing the growth loop.</p>
          </div>
        </div>
      </section>

      {/* User Segmentation */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-foreground mb-8">User Segmentation & Impact Mapping</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-slate-300">
              <h3 className="font-semibold text-foreground mb-2">Non-Reviewer</h3>
              <p className="text-sm text-muted-foreground mb-2">1-3 orders/month</p>
              <p className="text-sm text-muted-foreground">Neither values nor rates experience</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-400">
              <h3 className="font-semibold text-foreground mb-2">Casual Reviewer</h3>
              <p className="text-sm text-muted-foreground mb-2">4-8 orders/month</p>
              <p className="text-sm text-muted-foreground">Values reviews but mostly just rates</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary">
              <h3 className="font-semibold text-foreground mb-2">Loyal Reviewer</h3>
              <p className="text-sm text-muted-foreground mb-2">9+ orders/month</p>
              <p className="text-sm text-muted-foreground">Values reviews and writes often</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="font-semibold text-foreground mb-4">Target Segment Analysis</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-4xl font-bold text-primary mb-2">~19M</p>
                <p className="text-sm text-muted-foreground">Swiggy&apos;s MAU</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary mb-2">~3.5M</p>
                <p className="text-sm text-muted-foreground">Users with 50+ yearly orders</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary mb-2">~2.2M</p>
                <p className="text-sm text-muted-foreground">Feel text reviews are important (65%)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Identification */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-foreground mb-8">Why Users Don&apos;t Write Reviews</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-red-50 p-6 rounded-lg border border-red-100">
              <AlertTriangle className="text-red-500 mb-4" size={28} />
              <h3 className="font-semibold text-foreground mb-2">Lack of Convenience (63%)</h3>
              <p className="text-muted-foreground text-sm">Users find the review experience time-intensive. Too many decision points feel like a chore without perceived value.</p>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100">
              <AlertTriangle className="text-amber-500 mb-4" size={28} />
              <h3 className="font-semibold text-foreground mb-2">Lack of Value (28%)</h3>
              <p className="text-muted-foreground text-sm">Users find the experience similar as promised or seek some benefit for their effort. No reward or recognition.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <AlertTriangle className="text-blue-500 mb-4" size={28} />
              <h3 className="font-semibold text-foreground mb-2">Lack of Recall (6%)</h3>
              <p className="text-muted-foreground text-sm">Users forget to review on time. No timely nudges or reminders.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <AlertTriangle className="text-slate-500 mb-4" size={28} />
              <h3 className="font-semibold text-foreground mb-2">Lack of Awareness (3%)</h3>
              <p className="text-muted-foreground text-sm">Users never discovered the review feature or don&apos;t know where to find it.</p>
            </div>
          </div>

          <div className="bg-primary/5 p-8 rounded-lg border border-primary/20">
            <h3 className="font-semibold text-foreground mb-4">Primary Research Findings</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-primary flex-shrink-0 mt-1" size={18} />
                <span>52% check text reviews before ordering. 36% check only ratings (unaware of review section).</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-primary flex-shrink-0 mt-1" size={18} />
                <span>While 100% rate their order, only 26% write a text review.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-primary flex-shrink-0 mt-1" size={18} />
                <span>73% of reviewers are intrinsically motivated. Only 27% seek external rewards.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* User Persona */}
      <section className="py-16 px-6 bg-orange-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-foreground mb-8">User Persona</h2>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl font-bold text-primary">AS</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Aditya Sharma</h3>
                <p className="text-muted-foreground">28 Yr, Software Engineer, Pune</p>
                <p className="text-sm text-muted-foreground mt-2">Shifted to Hyderabad 5 months back. Orders at least once a week. Busy, Ambivert, Foodie.</p>
              </div>
              <div className="md:w-2/3">
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Quote</h4>
                  <p className="text-muted-foreground italic">&quot;I want to discover new taste, and help others like me with my feedback.&quot;</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Needs</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>Discover new & popular taste through relevant text reviews</li>
                      <li>Share experience with minimal effort</li>
                      <li>Be rewarded unless self-motivated</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Pain Points</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>Cannot find relevant/quality text reviews</li>
                      <li>Text review process is too cumbersome</li>
                      <li>Too much effort without rewards</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-foreground mb-8">Proposed Solution: Lean Review with Voice + Hashtags</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
              <Lightbulb className="text-primary mb-4" size={28} />
              <h3 className="font-semibold text-foreground mb-2">Lean Review with Speech-to-Text</h3>
              <p className="text-muted-foreground text-sm mb-4">User gives overall feedback, tags shown for each food item. Detailed review captured via voice input.</p>
              <div className="space-y-2 text-xs">
                <p className="text-emerald-600">User Benefit: High</p>
                <p className="text-emerald-600">Business Benefit: High</p>
                <p className="text-amber-600">Risk: Usability</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
              <Lightbulb className="text-amber-500 mb-4" size={28} />
              <h3 className="font-semibold text-foreground mb-2">Keyword AI Review</h3>
              <p className="text-muted-foreground text-sm mb-4">User selects keywords for taste, quantity, package. GPT creates human-like reviews from tags.</p>
              <div className="space-y-2 text-xs">
                <p className="text-emerald-600">User Benefit: Medium</p>
                <p className="text-emerald-600">Business Benefit: High</p>
                <p className="text-amber-600">Risk: Value & Usability</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
              <Lightbulb className="text-slate-400 mb-4" size={28} />
              <h3 className="font-semibold text-foreground mb-2">AI Review Assistant</h3>
              <p className="text-muted-foreground text-sm mb-4">Default text populated by GPT based on rating and past similar reviews.</p>
              <div className="space-y-2 text-xs">
                <p className="text-amber-600">User Benefit: Medium</p>
                <p className="text-amber-600">Business Benefit: Medium</p>
                <p className="text-amber-600">Risk: Value & Usability</p>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 p-8 rounded-lg border border-primary/20">
            <h3 className="font-semibold text-foreground mb-4">RICE Prioritization: Lean Review with Speech-to-Text Wins</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-2xl font-bold text-primary">5</p>
                <p className="text-sm text-muted-foreground">Reach</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">5</p>
                <p className="text-sm text-muted-foreground">Impact</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">4</p>
                <p className="text-sm text-muted-foreground">Confidence</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">3</p>
                <p className="text-sm text-muted-foreground">Effort</p>
              </div>
            </div>
            <p className="text-center text-muted-foreground mt-4">RICE Score: 33 (Highest among alternatives)</p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-foreground mb-8">Solution Design Highlights</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-foreground mb-4">Rating Flow</h3>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary text-white text-xs flex items-center justify-center flex-shrink-0">1</span>
                  <span>User finds rating nudge at bottom when opening app</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary text-white text-xs flex items-center justify-center flex-shrink-0">2</span>
                  <span>Upon selecting rating, page expands with hashtag options</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary text-white text-xs flex items-center justify-center flex-shrink-0">3</span>
                  <span>User taps hashtags like #GenerousPortion, #BurstOfFlavors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary text-white text-xs flex items-center justify-center flex-shrink-0">4</span>
                  <span>Press-to-speak button for voice review (optional)</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-foreground mb-4">Contextual Hashtags</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm">#GenerousPortion</span>
                <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm">#BurstOfFlavors</span>
                <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm">#NeatlyPacked</span>
                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">#LessForThePrice</span>
                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">#BlandBites</span>
                <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm">#JustRightServing</span>
              </div>
              <p className="text-sm text-muted-foreground">Tags dynamically change based on rating (positive/negative mix for low ratings)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-foreground mb-8">Success Metrics & Guardrails</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <BarChart3 className="text-primary" size={20} />
                Focus Metrics
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-500 flex-shrink-0 mt-1" size={18} />
                  <span><strong>North Star:</strong> % change in monthly reviews</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-500 flex-shrink-0 mt-1" size={18} />
                  <span><strong>L1:</strong> % change in monthly reviewers, % orders with reviews</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-500 flex-shrink-0 mt-1" size={18} />
                  <span><strong>L2:</strong> % change in menu page conversion, time to write review</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <AlertTriangle className="text-red-500" size={20} />
                Failure Metrics
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0 mt-2"></span>
                  <span>Review Abandonment Rate - users drop off after starting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0 mt-2"></span>
                  <span>Order Abandonment Rate - recent review causes cart abandonment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0 mt-2"></span>
                  <span>Avg clicks on mic button/rating - usability issues</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 px-6 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-foreground mb-8">Projected Impact</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-sm text-muted-foreground mb-2">Current Annual GOV</p>
              <p className="text-4xl font-bold text-foreground">$3.6 Bn</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border-2 border-primary">
              <p className="text-sm text-muted-foreground mb-2">Potential Annual GOV</p>
              <p className="text-4xl font-bold text-primary">$4.4 Bn</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="font-semibold text-foreground mb-4">Key Assumptions</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left text-sm text-muted-foreground">
              <p>Avg. orders/year for target segment: 68 (6/month)</p>
              <p>Growth in %reviewer: 2X (22%)</p>
              <p>Growth in %orders with text review: 3X (32%)</p>
              <p>Text review - Menu page conversion correlation: 1% up leads to 0.2% conversion lift</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
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
    </main>
  )
}
