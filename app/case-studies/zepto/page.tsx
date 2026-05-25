import Link from "next/link"
import { ArrowLeft, Target, Users, TrendingUp, Lightbulb, CheckCircle, AlertTriangle, BarChart3, Bell, Smartphone, Clock } from "lucide-react"

export const metadata = {
  title: "Zepto Case Study | Yash Mahadik",
  description: "Product Teardown: App Notifications Strategy for Quick Commerce - A comprehensive analysis"
}

export default function ZeptoCaseStudyPage() {
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
          <p className="text-primary text-sm font-semibold tracking-wider mb-4">ZEPTO | QUICK COMMERCE</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-foreground mb-6 leading-tight">
            Turning Notifications Into Revenue: A Product Teardown of Zepto&apos;s Push Strategy
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            A deep analysis of how quick commerce platforms can leverage AI-driven personalization and interactive notifications to boost engagement and conversion.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-purple-100 px-4 py-2 rounded-md">
              <span className="text-purple-700 font-semibold">Market Share: 23%</span>
            </div>
            <div className="bg-emerald-100 px-4 py-2 rounded-md">
              <span className="text-emerald-700 font-semibold">6.2M Monthly Users</span>
            </div>
          </div>
        </div>
      </section>

      {/* Business Overview */}
      <section className="py-16 px-6 bg-purple-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-foreground mb-8">Business Context</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-foreground mb-4">Company Overview</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><strong>Founded:</strong> 2021</li>
                <li><strong>App Downloads:</strong> 50M+</li>
                <li><strong>Orders:</strong> 62M monthly</li>
                <li><strong>Monthly Transacting Customers:</strong> 6.2M</li>
                <li><strong>Monthly Active Riders:</strong> 85K</li>
                <li><strong>Dark Stores:</strong> 490+</li>
                <li><strong>Revenue:</strong> Rs. 2100 Cr</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-foreground mb-4">Value Proposition</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Clock className="text-primary flex-shrink-0 mt-0.5" size={16} />
                  <span>~10 minutes delivery - Solves last minute needs</span>
                </li>
                <li className="flex items-start gap-2">
                  <Target className="text-primary flex-shrink-0 mt-0.5" size={16} />
                  <span>Variety of daily use products - solves discovery cost</span>
                </li>
                <li className="flex items-start gap-2">
                  <Smartphone className="text-primary flex-shrink-0 mt-0.5" size={16} />
                  <span>Flexible payment options - solves payment anxiety</span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="text-primary flex-shrink-0 mt-0.5" size={16} />
                  <span>Competitive pricing - easy on the wallet</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-foreground mb-4">Market Share (Quick Commerce)</h3>
            <div className="grid grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold text-emerald-600">43%</p>
                <p className="text-sm text-muted-foreground">Blinkit</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-orange-500">28%</p>
                <p className="text-sm text-muted-foreground">Swiggy Instamart</p>
              </div>
              <div className="bg-primary/5 rounded-lg p-2">
                <p className="text-3xl font-bold text-primary">23%</p>
                <p className="text-sm text-muted-foreground">Zepto</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-400">6%</p>
                <p className="text-sm text-muted-foreground">Others</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Personas */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-foreground mb-8">User Personas</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-blue-600">RM</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Rahul Mehta</h3>
                  <p className="text-sm text-muted-foreground">34, Marketing Manager, Mumbai</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Single, job demands long hours, leaving little time for traditional shopping. Prefers convenience, speed, and hassle-free experience.</p>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Goals</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>Orders in small quantity to avoid waste</li>
                    <li>Orders during break time (lunch/post office)</li>
                    <li>Looks for promotional offers and restock reminders</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Pain Points</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>Hates too many notifications - turned off promos</li>
                    <li>Forgets to order frequently used items</li>
                    <li>Frustrated with longer delivery at surge times</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-pink-600">PS</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Priya Singh</h3>
                  <p className="text-sm text-muted-foreground">30, Home-maker, Bangalore</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Mother of two young children, manages household while husband works. Juggles childcare, chores, and grocery shopping while staying within budget.</p>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Goals</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>Weekly grocery - baby products & household items</li>
                    <li>Seeks particular brand for quality</li>
                    <li>Seeks good deals/discounts with large purchases</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Pain Points</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>Frustrated with too many irrelevant notifications</li>
                    <li>Forgets to order items, wants reminders</li>
                    <li>Frustrated with lack of particular brand availability</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Journey */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-foreground mb-8">User Journey Mapping</h2>
          
          <div className="overflow-x-auto">
            <div className="flex gap-4 min-w-max pb-4">
              {[
                { stage: "Notification", thought: "Not sure if this is useful but let me check", emotion: "Curious" },
                { stage: "Home Page", thought: "Checks pending cart, deals, searches products", emotion: "Exploring" },
                { stage: "Product Discovery", thought: "Hope they add people ratings for items", emotion: "Hopeful" },
                { stage: "Add to Cart", thought: "Why no easy comparison option?", emotion: "Frustrated" },
                { stage: "Checkout", thought: "Thanks for pricing transparency", emotion: "Satisfied" },
                { stage: "Waiting", thought: "Why is delivery taking longer than promised?", emotion: "Anxious" },
                { stage: "Delivery", thought: "Why is my package unsealed?", emotion: "Concerned" },
                { stage: "Feedback", thought: "Why rate if I don&apos;t see it on app?", emotion: "Skeptical" }
              ].map((item, i) => (
                <div key={i} className="bg-white p-4 rounded-lg shadow-sm min-w-[160px]">
                  <div className="w-8 h-8 rounded-full bg-primary text-white text-sm flex items-center justify-center mb-3">
                    {i + 1}
                  </div>
                  <h4 className="font-semibold text-foreground text-sm mb-2">{item.stage}</h4>
                  <p className="text-xs text-muted-foreground mb-2 italic">&quot;{item.thought}&quot;</p>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">{item.emotion}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Current State Analysis */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-foreground mb-8">Current Notification Strategy Analysis</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle className="text-emerald-500" size={20} />
                Design Strengths
              </h3>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0 mt-2"></span>
                  <span><strong>Consistency:</strong> Maintains visual identity aligned with app branding</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0 mt-2"></span>
                  <span><strong>Clarity:</strong> Concise messages, avoiding information overload</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0 mt-2"></span>
                  <span><strong>Actionability:</strong> Clear CTAs driving user engagement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0 mt-2"></span>
                  <span><strong>User-Centric:</strong> Focus on delivering value</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <AlertTriangle className="text-amber-500" size={20} />
                Areas for Improvement
              </h3>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0 mt-2"></span>
                  <span><strong>Limited Personalization:</strong> User data not fully leveraged</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0 mt-2"></span>
                  <span><strong>Primarily Informative:</strong> Just prompts to open app</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0 mt-2"></span>
                  <span><strong>Limited Customization:</strong> Standardized notification set</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="py-16 px-6 bg-purple-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-foreground mb-8">Strategic Recommendations</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">1. AI-Driven Personalization</h3>
                  <p className="text-muted-foreground text-sm mb-4">Implement AI-driven personalization that considers a broader range of factors beyond basic purchase history.</p>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground"><strong>Example:</strong> If a user typically orders snacks in the afternoon, Zepto could send a notification at 2 PM with a discount on their favorite snacks.</p>
                  </div>
                  <p className="text-sm text-emerald-600 mt-3">Impact: Likely to increase user engagement by making notifications more relevant to immediate needs</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Bell className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">2. Interactive Notifications</h3>
                  <p className="text-muted-foreground text-sm mb-4">Introduce interactive notifications allowing users to perform actions directly from the notification itself.</p>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground"><strong>Example:</strong> Users could reorder a past purchase, apply a discount code, or rate their last delivery without opening the app.</p>
                  </div>
                  <p className="text-sm text-emerald-600 mt-3">Impact: Quicker decision-making and higher conversion rates</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Smartphone className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">3. Notification Preference Control</h3>
                  <p className="text-muted-foreground text-sm mb-4">Give users choice for notification types (order updates, promotional offers, restock reminders) and preferred frequency.</p>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground"><strong>Example:</strong> User chooses promotional notifications only once a week but real-time updates on order status.</p>
                  </div>
                  <p className="text-sm text-emerald-600 mt-3">Impact: Reduce notification fatigue and increase user satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Framework */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-foreground mb-8">Metrics Framework</h2>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Target className="text-primary" size={20} />
                  North Star Metric
                </h3>
                <div className="bg-primary/5 p-4 rounded-lg">
                  <p className="font-medium text-foreground">Active User (DAU)</p>
                  <p className="text-sm text-muted-foreground">Percentage of active users who regularly engage with Zepto&apos;s notifications</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <BarChart3 className="text-emerald-500" size={20} />
                  L1 Metrics
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p className="font-medium text-foreground">Click Through Rate (CTR)</p>
                    <p className="text-xs text-muted-foreground">Per notification type - measures content, timing, and relevance effectiveness</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p className="font-medium text-foreground">Conversion Rate</p>
                    <p className="text-xs text-muted-foreground">Users who completed desired action (add to cart etc)</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <TrendingUp className="text-blue-500" size={20} />
                  L2 Metrics
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p className="font-medium text-foreground">Retention Rate</p>
                    <p className="text-xs text-muted-foreground">Users who continue using app after notifications (7-day, 30-day)</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p className="font-medium text-foreground">Engagement Time Post-Notification</p>
                    <p className="text-xs text-muted-foreground">How long users stay within app after notification</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p className="font-medium text-foreground">Session Frequency</p>
                    <p className="text-xs text-muted-foreground">Avg sessions after notification within specific timeframe</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <AlertTriangle className="text-red-500" size={20} />
                  Counter/Failure Metric
                </h3>
                <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                  <p className="font-medium text-foreground">Opt-out Rate</p>
                  <p className="text-xs text-muted-foreground">Percentage of users who don&apos;t find notifications solving their purpose. High number means overstepping user preferences.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Considerations */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-foreground mb-8">Technical Considerations</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-foreground mb-4">Current Tech Stack</h3>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-emerald-500 flex-shrink-0 mt-0.5" size={16} />
                  <span>Real-time data processing for timely messaging</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-emerald-500 flex-shrink-0 mt-0.5" size={16} />
                  <span>Scalability to handle large user volumes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-emerald-500 flex-shrink-0 mt-0.5" size={16} />
                  <span>Analytics integration for performance monitoring</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-foreground mb-4">Required Enhancements</h3>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex items-start gap-2">
                  <Lightbulb className="text-primary flex-shrink-0 mt-0.5" size={16} />
                  <span>Advanced ML targeting for highly personalized notifications</span>
                </li>
                <li className="flex items-start gap-2">
                  <Lightbulb className="text-primary flex-shrink-0 mt-0.5" size={16} />
                  <span>Interactive notification SDK integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <Lightbulb className="text-primary flex-shrink-0 mt-0.5" size={16} />
                  <span>User preference management system</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-serif text-foreground mb-4">Interested in discussing this analysis?</h2>
          <p className="text-muted-foreground mb-8">I&apos;d love to walk you through the full teardown and strategic recommendations.</p>
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
