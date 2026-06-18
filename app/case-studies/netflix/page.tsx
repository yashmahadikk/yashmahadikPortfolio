import Link from "next/link"
import { ArrowLeft, Brain, TrendingUp, Users, BarChart3, Target, Zap, Eye } from "lucide-react"

export const metadata = {
  title: "Netflix Recommendation Engine | Yash Mahaadik",
  description: "Data Analytics Case Study: How Netflix's Personalization Engine Drives $30B+ Revenue"
}

export default function NetflixCaseStudyPage() {
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
          <p className="text-primary text-sm font-semibold tracking-wider mb-4">NETFLIX | STREAMING ENTERTAINMENT</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-foreground mb-6 leading-tight">
            Predicting What You Want to Watch: Netflix&apos;s Recommendation Engine Optimization
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Deep dive into Netflix's data analytics framework for personalized recommendations. How machine learning models increased viewing time by 20% and reduced churn through predictive analytics.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-red-100 dark:bg-red-900/40 px-4 py-2 rounded-md">
              <span className="text-red-700 dark:text-red-300 font-semibold">$30B+ Revenue</span>
            </div>
            <div className="bg-purple-100 dark:bg-purple-900/40 px-4 py-2 rounded-md">
              <span className="text-purple-700 dark:text-purple-300 font-semibold">250M+ Subscribers</span>
            </div>
            <div className="bg-blue-100 dark:bg-blue-900/40 px-4 py-2 rounded-md">
              <span className="text-blue-700 dark:text-blue-300 font-semibold">80% Content Discovery via Recommendations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 px-6 bg-red-50 dark:bg-red-900/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-foreground mb-8">The Core Problem</h2>
          
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">
              Netflix's fundamental challenge: With 10,000+ hours of content and 250M+ subscribers, each with unique preferences, how do you ensure users find content they want to watch?
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-card p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Eye size={20} className="text-primary" />
                  The Discovery Problem
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• User spends 18 minutes browsing without watching</li>
                  <li>• 70% of content goes unwatched</li>
                  <li>• Decision paralysis reduces engagement</li>
                  <li>• Wrong recommendations hurt retention</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-card p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <TrendingUp size={20} className="text-primary" />
                  Business Impact
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Churn happens when users can't find good content</li>
                  <li>• Engagement time is Netflix's core metric</li>
                  <li>• 1 hour more watched per week = lower churn</li>
                  <li>• Faster decision = higher conversion rates</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Framework */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-foreground mb-8">Netflix's Analytics Framework</h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Brain size={24} className="text-primary" />
                1. Collaborative Filtering
              </h3>
              <p className="text-muted-foreground mb-4">
                Netflix's foundational approach: If User A and User B watched the same 100 shows and rated them similarly, they probably have similar taste. When User A watches a new show, recommend it to User B. This approach scales across millions of users and billions of data points.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg border border-border">
                <p className="text-sm font-semibold text-foreground mb-2">Data Inputs</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Viewing history (what users watched)</li>
                  <li>• Explicit ratings (thumbs up/down)</li>
                  <li>• Time watched (partial vs complete views)</li>
                  <li>• Search queries and browse patterns</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <BarChart3 size={24} className="text-primary" />
                2. Content-Based Filtering
              </h3>
              <p className="text-muted-foreground mb-4">
                Netflix analyzes content attributes (genre, cast, director, runtime, production company) and matches them to user preferences. If a user loved a sci-fi thriller with specific actors, recommend similar content. This approach works well for new content with limited viewing data.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Zap size={24} className="text-primary" />
                3. Context-Aware Personalization
              </h3>
              <p className="text-muted-foreground mb-4">
                Netflix considers temporal context: What you watch varies by time of day, day of week, season. Weekend might mean longer-form content. Thursday night might mean series episodes. Netflix factors in context (device, time, location) to refine recommendations in real-time.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Target size={24} className="text-primary" />
                4. Ranking & Optimization
              </h3>
              <p className="text-muted-foreground mb-4">
                Netflix doesn't just predict what users want—it ranks it. Recommendations appear in order of predicted engagement. The first row matters most (30% of clicks). Netflix runs thousands of A/B tests daily to optimize ranking algorithms, thumbnail selection, and content sequencing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Infrastructure */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-foreground mb-8">Data Infrastructure at Scale</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-foreground mb-4">Data Velocity</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Netflix processes petabytes of data daily. Every interaction (pause, skip, rewatch) gets tracked. This enables models to adapt in real-time—if you suddenly start watching horror movies, recommendations shift immediately.
              </p>
              <div className="text-xs bg-gray-50 p-3 rounded border border-border font-mono">
                3 billion events/day → 1 petabyte/week
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-foreground mb-4">Model Architecture</h3>
              <p className="text-sm text-muted-foreground">
                Netflix uses ensemble methods—multiple models (neural networks, gradient boosting, matrix factorization) vote on recommendations. Ensemble approaches are more robust and generalize better than single models.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-foreground mb-4">Cold Start Problem</h3>
              <p className="text-sm text-muted-foreground mb-3">
                New users have no history. New content has no views. Netflix addresses this through:
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                <li>• Content-based features for new shows</li>
                <li>• Demographic similarity for new users</li>
                <li>• Editorial picks and trending content</li>
                <li>• Bandit algorithms to explore/exploit</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-foreground mb-8">Measurable Business Impact</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <p className="text-4xl font-bold text-red-600 mb-2">20%</p>
              <p className="font-semibold text-foreground mb-2">Viewing Time Increase</p>
              <p className="text-sm text-muted-foreground">Users spend 20% more time watching when personalized recommendations improve</p>
            </div>
            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <p className="text-4xl font-bold text-red-600 mb-2">30%</p>
              <p className="font-semibold text-foreground mb-2">Churn Reduction</p>
              <p className="text-sm text-muted-foreground">Better recommendations directly correlate with lower subscription cancellations</p>
            </div>
            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <p className="text-4xl font-bold text-red-600 mb-2">80%</p>
              <p className="font-semibold text-foreground mb-2">Discovery via Recommendations</p>
              <p className="text-sm text-muted-foreground">4 out of 5 content discoveries come from personalized recommendations, not search</p>
            </div>
            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <p className="text-4xl font-bold text-red-600 mb-2">60%</p>
              <p className="font-semibold text-foreground mb-2">Browsing Time Reduction</p>
              <p className="text-muted-foreground text-sm">Better recommendations reduce the "what should I watch" paralysis</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-foreground mb-4">Annual Revenue Impact</h3>
            <p className="text-muted-foreground mb-3">
              If better recommendations prevent just 2% of monthly churn (250M × 2% × $12/month average):
            </p>
            <p className="text-3xl font-bold text-primary">$72M annual ARR</p>
            <p className="text-sm text-muted-foreground mt-2">And that's just from churn reduction. Increased viewing time boosts engagement metrics, attracting advertisers for Netflix's ad tier.</p>
          </div>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-foreground mb-8">Why Netflix's Recommendations Win</h2>
          
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg border border-border">
              <p className="font-semibold text-foreground mb-2">Data Advantage</p>
              <p className="text-muted-foreground text-sm">250M+ subscribers generating billions of signals daily. Disney+, Apple TV, Amazon Prime can't compete on data scale. Netflix has a 10-year head start.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-border">
              <p className="font-semibold text-foreground mb-2">Content Library Density</p>
              <p className="text-muted-foreground text-sm">Netflix's 10,000+ hour library means collaborative filtering works better. More content = more data patterns = better recommendations.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-border">
              <p className="font-semibold text-foreground mb-2">Technical Talent</p>
              <p className="text-muted-foreground text-sm">Netflix has 300+ machine learning engineers. They invented key algorithms (matrix factorization breakthroughs in the Netflix Prize). This talent concentration creates a moat.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-border">
              <p className="font-semibold text-foreground mb-2">Infrastructure Investment</p>
              <p className="text-muted-foreground text-sm">Netflix built massive real-time processing infrastructure. Billions of model predictions per day with sub-100ms latency. Competitors lack this infrastructure investment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Lessons */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-foreground mb-8">Strategic Insights for Product Teams</h2>
          
          <div className="space-y-4">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <p className="font-semibold text-foreground mb-2">Data Compounds</p>
              <p className="text-muted-foreground text-sm">Netflix's advantage today comes from data collected over 10 years. Early moats in data collection become unassailable advantages later. Start collecting data early.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <p className="font-semibold text-foreground mb-2">Personalization Drives Engagement</p>
              <p className="text-muted-foreground text-sm">Generic experiences don't scale. Every 1% improvement in recommendation quality drives measurable churn reduction. Personalization isn't a nice-to-have; it's essential.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <p className="font-semibold text-foreground mb-2">Infrastructure Enables Innovation</p>
              <p className="text-muted-foreground text-sm">Netflix's real-time recommendation engine requires massive infrastructure investment. Platform companies that invest early in infrastructure unlock capabilities competitors can't match.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <p className="font-semibold text-foreground mb-2">Measure What Matters</p>
              <p className="text-muted-foreground text-sm">Netflix doesn't optimize for clicks. It optimizes for viewing time and churn. Understanding your true north metric (not vanity metrics) guides investment priorities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-red-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground mb-6">
            Netflix's recommendation engine is a masterclass in how data analytics creates defensible competitive advantage. By combining scale, talent, infrastructure, and relentless measurement, Netflix transformed recommendation technology from a feature into a strategic moat that competitors still struggle to match.
          </p>
          <Link href="/#case-studies" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors">
            <ArrowLeft size={18} />
            Back to All Case Studies
          </Link>
        </div>
      </section>
    </main>
  )
}
