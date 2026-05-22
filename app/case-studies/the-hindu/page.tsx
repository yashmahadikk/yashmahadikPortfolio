import Link from "next/link"
import { ArrowLeft, TrendingUp, Users, Mail, Target, BarChart3, Newspaper, Zap } from "lucide-react"

export default function TheHinduCaseStudy() {
  return (
    &lt;main className="min-h-screen bg-background"&gt;
      {/* Navigation */}
      &lt;nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border"&gt;
        &lt;div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between"&gt;
          &lt;Link href="/#case-studies" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"&gt;
            &lt;ArrowLeft size={18} /&gt;
            &lt;span className="text-sm font-medium"&gt;Back to Case Studies&lt;/span&gt;
          &lt;/Link&gt;
          &lt;span className="text-sm font-semibold text-foreground"&gt;The Hindu &amp;mdash; Growth PM Case Study&lt;/span&gt;
        &lt;/div&gt;
      &lt;/nav&gt;

      {/* Hero */}
      &lt;section className="bg-[#1C1008] text-white py-20 px-6"&gt;
        &lt;div className="max-w-6xl mx-auto"&gt;
          &lt;div className="grid md:grid-cols-[1fr_320px] gap-12"&gt;
            &lt;div&gt;
              &lt;p className="text-[#BE1E2D] text-sm font-semibold tracking-wider mb-4"&gt;GROWTH PRODUCT MANAGER &amp;middot; APPLICATION CASE STUDY&lt;/p&gt;
              &lt;h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-2 text-[#F5F0E8]"&gt;
                The Hindu&apos;s
              &lt;/h1&gt;
              &lt;h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-[#BE1E2D]"&gt;
                Subscription Flywheel
              &lt;/h1&gt;
              &lt;p className="text-lg text-[#9E9386] italic max-w-xl mb-8 leading-relaxed"&gt;
                How The Hindu can convert 12 million monthly visitors into a loyal, paying digital readership &amp;mdash; 
                by fixing the discovery-to-subscription funnel, one experiment at a time.
              &lt;/p&gt;
              &lt;div className="flex flex-wrap gap-8 text-sm"&gt;
                &lt;div&gt;
                  &lt;p className="text-[#6A6058] text-xs uppercase tracking-wider mb-1"&gt;Role Applied&lt;/p&gt;
                  &lt;p className="text-[#F5F0E8] font-semibold"&gt;Growth Product Manager&lt;/p&gt;
                &lt;/div&gt;
                &lt;div&gt;
                  &lt;p className="text-[#6A6058] text-xs uppercase tracking-wider mb-1"&gt;Company&lt;/p&gt;
                  &lt;p className="text-[#F5F0E8] font-semibold"&gt;The Hindu Group, Chennai&lt;/p&gt;
                &lt;/div&gt;
                &lt;div&gt;
                  &lt;p className="text-[#6A6058] text-xs uppercase tracking-wider mb-1"&gt;Author&lt;/p&gt;
                  &lt;p className="text-[#F5F0E8] font-semibold"&gt;Yash Mahadik&lt;/p&gt;
                &lt;/div&gt;
              &lt;/div&gt;
            &lt;/div&gt;
            &lt;div className="bg-white/5 p-8 rounded-lg space-y-6"&gt;
              &lt;div className="border-b border-white/10 pb-6"&gt;
                &lt;p className="text-4xl font-serif font-bold text-[#BE1E2D]"&gt;~12M&lt;/p&gt;
                &lt;p className="text-sm text-[#8A8078]"&gt;Estimated monthly unique visitors to thehindu.com&lt;/p&gt;
              &lt;/div&gt;
              &lt;div className="border-b border-white/10 pb-6"&gt;
                &lt;p className="text-4xl font-serif font-bold text-[#BE1E2D]"&gt;&amp;lt;1%&lt;/p&gt;
                &lt;p className="text-sm text-[#8A8078]"&gt;Typical paywall conversion rate &amp;mdash; significant room to grow&lt;/p&gt;
              &lt;/div&gt;
              &lt;div className="border-b border-white/10 pb-6"&gt;
                &lt;p className="text-4xl font-serif font-bold text-[#BE1E2D]"&gt;4&lt;/p&gt;
                &lt;p className="text-sm text-[#8A8078]"&gt;Core growth levers: Reach &amp;middot; Engagement &amp;middot; Retention &amp;middot; Revenue&lt;/p&gt;
              &lt;/div&gt;
              &lt;div&gt;
                &lt;p className="text-4xl font-serif font-bold text-[#BE1E2D]"&gt;143&lt;/p&gt;
                &lt;p className="text-sm text-[#8A8078]"&gt;Years of editorial trust &amp;mdash; the brand moat no competitor can replicate&lt;/p&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;

      {/* Business Context */}
      &lt;section className="py-16 px-6"&gt;
        &lt;div className="max-w-5xl mx-auto"&gt;
          &lt;p className="text-[#BE1E2D] text-sm font-semibold tracking-wider mb-2"&gt;BUSINESS CONTEXT&lt;/p&gt;
          &lt;h2 className="text-3xl font-serif font-bold text-foreground mb-4"&gt;The Hindu in the Digital Era&lt;/h2&gt;
          &lt;p className="text-muted-foreground italic mb-8 max-w-2xl"&gt;
            Understanding the business model, the audience, and the structural opportunity before defining the product problem.
          &lt;/p&gt;

          &lt;div className="grid md:grid-cols-2 gap-8 mb-8"&gt;
            &lt;div className="border-l-4 border-[#BE1E2D] bg-card p-6 rounded-r-lg"&gt;
              &lt;h3 className="text-[#BE1E2D] text-xs font-semibold tracking-wider uppercase mb-4"&gt;The Business Model&lt;/h3&gt;
              &lt;ul className="space-y-3 text-sm text-muted-foreground"&gt;
                &lt;li className="flex gap-2"&gt;&lt;span className="text-[#BE1E2D]"&gt;&amp;bull;&lt;/span&gt;&lt;span&gt;&lt;strong className="text-foreground"&gt;Subscription revenue:&lt;/strong&gt; The Hindu Premium (digital) + ePaper. India&apos;s most trusted English newspaper now behind a metered paywall.&lt;/span&gt;&lt;/li&gt;
                &lt;li className="flex gap-2"&gt;&lt;span className="text-[#BE1E2D]"&gt;&amp;bull;&lt;/span&gt;&lt;span&gt;&lt;strong className="text-foreground"&gt;Advertising:&lt;/strong&gt; Display, programmatic, and native advertising. Revenue tied directly to traffic volume and dwell time.&lt;/span&gt;&lt;/li&gt;
                &lt;li className="flex gap-2"&gt;&lt;span className="text-[#BE1E2D]"&gt;&amp;bull;&lt;/span&gt;&lt;span&gt;&lt;strong className="text-foreground"&gt;Brand equity moat:&lt;/strong&gt; 143-year editorial heritage. The FT of Indian journalism &amp;mdash; quality over clicks.&lt;/span&gt;&lt;/li&gt;
                &lt;li className="flex gap-2"&gt;&lt;span className="text-[#BE1E2D]"&gt;&amp;bull;&lt;/span&gt;&lt;span&gt;&lt;strong className="text-foreground"&gt;Reader loyalty:&lt;/strong&gt; Generational readership in Tamil Nadu, Karnataka, Andhra Pradesh.&lt;/span&gt;&lt;/li&gt;
              &lt;/ul&gt;
            &lt;/div&gt;
            &lt;div className="grid grid-cols-2 gap-4"&gt;
              &lt;div className="bg-card border border-border p-4 rounded-lg text-center"&gt;
                &lt;p className="text-3xl font-serif font-bold text-[#BE1E2D]"&gt;~12M&lt;/p&gt;
                &lt;p className="text-xs text-muted-foreground"&gt;Est. monthly unique visitors&lt;/p&gt;
              &lt;/div&gt;
              &lt;div className="bg-card border border-border p-4 rounded-lg text-center"&gt;
                &lt;p className="text-3xl font-serif font-bold text-[#BE1E2D]"&gt;143&lt;/p&gt;
                &lt;p className="text-xs text-muted-foreground"&gt;Years since 1878&lt;/p&gt;
              &lt;/div&gt;
              &lt;div className="bg-card border border-border p-4 rounded-lg text-center"&gt;
                &lt;p className="text-3xl font-serif font-bold text-[#BE1E2D]"&gt;#2&lt;/p&gt;
                &lt;p className="text-xs text-muted-foreground"&gt;English daily by credibility&lt;/p&gt;
              &lt;/div&gt;
              &lt;div className="bg-card border border-border p-4 rounded-lg text-center"&gt;
                &lt;p className="text-3xl font-serif font-bold text-[#BE1E2D]"&gt;5+&lt;/p&gt;
                &lt;p className="text-xs text-muted-foreground"&gt;Properties in portfolio&lt;/p&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;

          &lt;blockquote className="border-l-4 border-[#BE1E2D] bg-[#FFF0F1] p-6 rounded-r-lg"&gt;
            &lt;p className="text-foreground italic font-serif"&gt;
              &quot;The Hindu is not competing with BuzzFeed &amp;mdash; it&apos;s competing with the FT, The Guardian, and NYT for the same premium, educated reader who will pay for quality. The product strategy must start from this positioning.&quot;
            &lt;/p&gt;
          &lt;/blockquote&gt;
        &lt;/div&gt;
      &lt;/section&gt;

      {/* Problem Definition */}
      &lt;section className="py-16 px-6 bg-[#F5EFE6]"&gt;
        &lt;div className="max-w-5xl mx-auto"&gt;
          &lt;p className="text-[#BE1E2D] text-sm font-semibold tracking-wider mb-2"&gt;PROBLEM DEFINITION&lt;/p&gt;
          &lt;h2 className="text-3xl font-serif font-bold text-foreground mb-4"&gt;The Leaky Funnel: High Traffic, Low Conversion&lt;/h2&gt;
          &lt;p className="text-muted-foreground italic mb-8 max-w-2xl"&gt;
            The Hindu has world-class journalism and a recognisable brand. The product problem is not content &amp;mdash; it is converting readers who already trust The Hindu into subscribers who pay for it.
          &lt;/p&gt;

          &lt;div className="bg-[#1C1008] text-white p-6 rounded-lg mb-8"&gt;
            &lt;h3 className="text-[#BE1E2D] text-xs font-semibold tracking-wider uppercase mb-3"&gt;THE CORE PROBLEM&lt;/h3&gt;
            &lt;p className="text-[#9E9386]"&gt;
              An estimated &lt;strong className="text-[#F5F0E8]"&gt;12 million people visit The Hindu every month.&lt;/strong&gt; Most arrive via Google, read one article, and leave &amp;mdash; never encountering the paywall, never registering, never subscribing. The funnel is leaking at every stage. &lt;strong className="text-[#F5F0E8]"&gt;Fixing the funnel, not the journalism, is the Growth PM&apos;s mandate.&lt;/strong&gt;
            &lt;/p&gt;
          &lt;/div&gt;

          {/* Funnel */}
          &lt;div className="space-y-2 mb-8"&gt;
            &lt;div className="flex items-center gap-4 p-4 bg-card border border-border border-l-4 border-l-[#BE1E2D] rounded-r-lg"&gt;
              &lt;p className="text-2xl font-serif font-bold text-[#BE1E2D] w-20"&gt;~12M&lt;/p&gt;
              &lt;div className="flex-1"&gt;
                &lt;p className="font-semibold text-foreground"&gt;Monthly Unique Visitors&lt;/p&gt;
                &lt;p className="text-sm text-muted-foreground"&gt;~70% arrive from Google Search / Discover. High intent but low brand relationship.&lt;/p&gt;
              &lt;/div&gt;
              &lt;span className="text-xs bg-muted px-2 py-1 rounded"&gt;TOP OF FUNNEL&lt;/span&gt;
            &lt;/div&gt;
            &lt;div className="flex items-center gap-4 p-4 bg-card border border-border border-l-4 border-l-[#B8922A] rounded-r-lg"&gt;
              &lt;p className="text-2xl font-serif font-bold text-[#B8922A] w-20"&gt;~2.5M&lt;/p&gt;
              &lt;div className="flex-1"&gt;
                &lt;p className="font-semibold text-foreground"&gt;Repeat Visitors (3+ visits/month)&lt;/p&gt;
                &lt;p className="text-sm text-muted-foreground"&gt;~20% of total. Have some brand recognition. Not yet registered.&lt;/p&gt;
              &lt;/div&gt;
              &lt;span className="text-xs bg-[#B8922A] text-white px-2 py-1 rounded"&gt;ENGAGED&lt;/span&gt;
            &lt;/div&gt;
            &lt;div className="flex items-center gap-4 p-4 bg-card border border-border border-l-4 border-l-[#C0521A] rounded-r-lg"&gt;
              &lt;p className="text-2xl font-serif font-bold text-[#C0521A] w-20"&gt;~400K&lt;/p&gt;
              &lt;div className="flex-1"&gt;
                &lt;p className="font-semibold text-foreground"&gt;Registered (Non-Paying) Users&lt;/p&gt;
                &lt;p className="text-sm text-muted-foreground"&gt;Hit the paywall, registered for more free articles. The highest-value cohort.&lt;/p&gt;
              &lt;/div&gt;
              &lt;span className="text-xs bg-[#C0521A] text-white px-2 py-1 rounded"&gt;HIGH INTENT&lt;/span&gt;
            &lt;/div&gt;
            &lt;div className="flex items-center gap-4 p-4 bg-[#EFF7F3] border border-[#2B7A4B] border-l-4 border-l-[#2B7A4B] rounded-r-lg"&gt;
              &lt;p className="text-2xl font-serif font-bold text-[#2B7A4B] w-20"&gt;~120K&lt;/p&gt;
              &lt;div className="flex-1"&gt;
                &lt;p className="font-semibold text-foreground"&gt;Paying Subscribers (Estimated)&lt;/p&gt;
                &lt;p className="text-sm text-muted-foreground"&gt;~1% conversion rate. NYT runs at 3&amp;ndash;5%. This gap is the product opportunity.&lt;/p&gt;
              &lt;/div&gt;
              &lt;span className="text-xs bg-[#2B7A4B] text-white px-2 py-1 rounded"&gt;SUBSCRIBERS&lt;/span&gt;
            &lt;/div&gt;
          &lt;/div&gt;

          &lt;div className="grid md:grid-cols-3 gap-4"&gt;
            &lt;div className="border-l-4 border-[#BE1E2D] bg-card p-4 rounded-r-lg"&gt;
              &lt;h4 className="text-[#BE1E2D] font-semibold text-sm mb-2"&gt;Google Traffic Problem&lt;/h4&gt;
              &lt;p className="text-sm text-muted-foreground"&gt;~60&amp;ndash;70% of traffic comes via Google. These readers have zero brand relationship &amp;mdash; they clicked an article, got their answer, left.&lt;/p&gt;
            &lt;/div&gt;
            &lt;div className="border-l-4 border-[#B8922A] bg-card p-4 rounded-r-lg"&gt;
              &lt;h4 className="text-[#B8922A] font-semibold text-sm mb-2"&gt;Metering Gap&lt;/h4&gt;
              &lt;p className="text-sm text-muted-foreground"&gt;The free article allotment, paywall trigger timing, and registration friction have likely never been A/B tested at scale.&lt;/p&gt;
            &lt;/div&gt;
            &lt;div className="border-l-4 border-[#1A5276] bg-card p-4 rounded-r-lg"&gt;
              &lt;h4 className="text-[#1A5276] font-semibold text-sm mb-2"&gt;Habit Deficit&lt;/h4&gt;
              &lt;p className="text-sm text-muted-foreground"&gt;No daily habit formation product &amp;mdash; no morning newsletter, no personalized feed, no push notification strategy.&lt;/p&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;

      {/* User Segmentation */}
      &lt;section className="py-16 px-6"&gt;
        &lt;div className="max-w-5xl mx-auto"&gt;
          &lt;p className="text-[#BE1E2D] text-sm font-semibold tracking-wider mb-2"&gt;USER SEGMENTATION&lt;/p&gt;
          &lt;h2 className="text-3xl font-serif font-bold text-foreground mb-4"&gt;Four Types of Hindu Readers &amp;mdash; Only One Pays&lt;/h2&gt;
          &lt;p className="text-muted-foreground italic mb-8 max-w-2xl"&gt;
            Not all 12M monthly visitors are equal. Understanding which segments to activate determines the product roadmap.
          &lt;/p&gt;

          &lt;div className="grid md:grid-cols-2 gap-6"&gt;
            &lt;div className="border-l-4 border-[#BE1E2D] bg-card p-6 rounded-r-lg"&gt;
              &lt;div className="flex justify-between items-start mb-3"&gt;
                &lt;h3 className="font-serif font-bold text-lg"&gt;The Loyal Lifer&lt;/h3&gt;
                &lt;span className="text-xs bg-[#2B7A4B] text-white px-2 py-1 rounded"&gt;PAYING &amp;middot; RETAIN&lt;/span&gt;
              &lt;/div&gt;
              &lt;p className="text-sm text-muted-foreground mb-3"&gt;&lt;strong className="text-foreground"&gt;Who:&lt;/strong&gt; 40&amp;ndash;65. Has read The Hindu for 10+ years. Trusts only The Hindu. High ARPU, low churn risk.&lt;/p&gt;
              &lt;p className="text-sm text-muted-foreground mb-3"&gt;&lt;strong className="text-foreground"&gt;Unmet need:&lt;/strong&gt; Better digital experience that matches print quality. Frustrated by cluttered mobile UX.&lt;/p&gt;
              &lt;p className="text-xs text-[#2B7A4B] font-semibold border-t border-border pt-3"&gt;Strategy: Protect NPS. Reduce churn. Cross-sell ePaper + BusinessLine.&lt;/p&gt;
            &lt;/div&gt;

            &lt;div className="border-l-4 border-[#B8922A] bg-card p-6 rounded-r-lg"&gt;
              &lt;div className="flex justify-between items-start mb-3"&gt;
                &lt;h3 className="font-serif font-bold text-lg"&gt;The Habitual Browser&lt;/h3&gt;
                &lt;span className="text-xs bg-[#C0521A] text-white px-2 py-1 rounded"&gt;HIGH VALUE &amp;middot; CONVERT&lt;/span&gt;
              &lt;/div&gt;
              &lt;p className="text-sm text-muted-foreground mb-3"&gt;&lt;strong className="text-foreground"&gt;Who:&lt;/strong&gt; 28&amp;ndash;45. Opens The Hindu 4&amp;ndash;8&amp;times;/week. Registered but not subscribed. Price-sensitive.&lt;/p&gt;
              &lt;p className="text-sm text-muted-foreground mb-3"&gt;&lt;strong className="text-foreground"&gt;Unmet need:&lt;/strong&gt; Wants to justify the cost. Needs to feel The Hindu is daily-indispensable.&lt;/p&gt;
              &lt;p className="text-xs text-[#B8922A] font-semibold border-t border-border pt-3"&gt;Strategy: Smart paywall, email habit, personalised feed. Primary conversion target.&lt;/p&gt;
            &lt;/div&gt;

            &lt;div className="border-l-4 border-[#1A5276] bg-card p-6 rounded-r-lg"&gt;
              &lt;div className="flex justify-between items-start mb-3"&gt;
                &lt;h3 className="font-serif font-bold text-lg"&gt;The Google Drifter&lt;/h3&gt;
                &lt;span className="text-xs bg-muted px-2 py-1 rounded"&gt;LARGEST GROUP &amp;middot; EDUCATE&lt;/span&gt;
              &lt;/div&gt;
              &lt;p className="text-sm text-muted-foreground mb-3"&gt;&lt;strong className="text-foreground"&gt;Who:&lt;/strong&gt; 22&amp;ndash;40. Clicks The Hindu links in Google Search/Discover. Reads one article. Leaves. ~65% of total traffic.&lt;/p&gt;
              &lt;p className="text-sm text-muted-foreground mb-3"&gt;&lt;strong className="text-foreground"&gt;Unmet need:&lt;/strong&gt; Not actively looking for news. Needs to discover The Hindu&apos;s broader value.&lt;/p&gt;
              &lt;p className="text-xs text-[#1A5276] font-semibold border-t border-border pt-3"&gt;Strategy: Google Discover optimisation, article experience, newsletter as capture tool.&lt;/p&gt;
            &lt;/div&gt;

            &lt;div className="border-l-4 border-[#C0521A] bg-card p-6 rounded-r-lg"&gt;
              &lt;div className="flex justify-between items-start mb-3"&gt;
                &lt;h3 className="font-serif font-bold text-lg"&gt;The Young Sceptic&lt;/h3&gt;
                &lt;span className="text-xs bg-muted px-2 py-1 rounded"&gt;FUTURE REVENUE &amp;middot; ACQUIRE&lt;/span&gt;
              &lt;/div&gt;
              &lt;p className="text-sm text-muted-foreground mb-3"&gt;&lt;strong className="text-foreground"&gt;Who:&lt;/strong&gt; 18&amp;ndash;27. Gets news from Instagram reels and YouTube. Thinks newspapers are their parents&apos; thing.&lt;/p&gt;
              &lt;p className="text-sm text-muted-foreground mb-3"&gt;&lt;strong className="text-foreground"&gt;Unmet need:&lt;/strong&gt; Needs to be met where they are &amp;mdash; reels, explainer videos, short-form.&lt;/p&gt;
              &lt;p className="text-xs text-[#C0521A] font-semibold border-t border-border pt-3"&gt;Strategy: Student tier (&amp;#8377;49/month), social-first content, reels and explainers.&lt;/p&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;

      {/* RERE Solution Framework */}
      &lt;section className="py-16 px-6 bg-[#F5EFE6]"&gt;
        &lt;div className="max-w-5xl mx-auto"&gt;
          &lt;p className="text-[#BE1E2D] text-sm font-semibold tracking-wider mb-2"&gt;SOLUTION FRAMEWORK&lt;/p&gt;
          &lt;h2 className="text-3xl font-serif font-bold text-foreground mb-4"&gt;The RERE Engine: Four Growth Levers&lt;/h2&gt;
          &lt;p className="text-muted-foreground italic mb-8 max-w-2xl"&gt;
            Every initiative maps to one of the four core metrics: Reach, Engagement, Retention, Revenue.
          &lt;/p&gt;

          &lt;div className="grid md:grid-cols-4 gap-0 mb-12"&gt;
            {[
              { num: "01", title: "Reach", desc: "Google Discover optimisation. SEO improvements. AMP performance. Social distribution." },
              { num: "02", title: "Engagement", desc: "Flagship morning newsletter. Smart related articles. Article format improvements." },
              { num: "03", title: "Retention", desc: "Subscriber onboarding flow. Personalised feed. Smart push notifications." },
              { num: "04", title: "Revenue", desc: "Smart paywall metering A/B tests. Subscription page optimisation. Student tier." }
            ].map((step, i) =&gt; (
              &lt;div key={i} className="bg-card border border-border p-5 relative"&gt;
                &lt;span className="absolute top-4 right-4 text-3xl font-serif font-bold text-[#BE1E2D] opacity-30"&gt;{step.num}&lt;/span&gt;
                &lt;h4 className="text-[#BE1E2D] text-xs font-semibold tracking-wider uppercase mb-2"&gt;{step.title}&lt;/h4&gt;
                &lt;p className="text-sm text-muted-foreground"&gt;{step.desc}&lt;/p&gt;
              &lt;/div&gt;
            ))}
          &lt;/div&gt;

          {/* Solution Cards */}
          &lt;div className="space-y-6"&gt;
            &lt;div className="bg-card border border-border border-t-4 border-t-[#BE1E2D] rounded-lg p-6"&gt;
              &lt;div className="flex justify-between items-start mb-4"&gt;
                &lt;div&gt;
                  &lt;p className="text-[#BE1E2D] text-xs font-semibold tracking-wider uppercase mb-1"&gt;SOLUTION 01 &amp;mdash; REACH&lt;/p&gt;
                  &lt;h3 className="font-serif font-bold text-xl"&gt;Google Discover Optimisation: The &amp;#8377;0 Traffic Multiplier&lt;/h3&gt;
                &lt;/div&gt;
                &lt;span className="text-xs bg-[#BE1E2D] text-white px-2 py-1 rounded"&gt;RICE: 405&lt;/span&gt;
              &lt;/div&gt;
              &lt;p className="text-sm text-muted-foreground mb-4"&gt;
                Google Discover serves personalised article feeds to 800M+ monthly users &amp;mdash; and rewards exactly what The Hindu does: authoritative, high-quality journalism.
              &lt;/p&gt;
              &lt;div className="grid md:grid-cols-2 gap-6"&gt;
                &lt;ul className="space-y-2 text-sm text-muted-foreground"&gt;
                  &lt;li className="flex gap-2"&gt;&lt;span className="text-[#BE1E2D]"&gt;&amp;bull;&lt;/span&gt;&lt;span&gt;&lt;strong className="text-foreground"&gt;Hero image enforcement:&lt;/strong&gt; All articles must have 1,200&amp;times;628px image with descriptive alt text&lt;/span&gt;&lt;/li&gt;
                  &lt;li className="flex gap-2"&gt;&lt;span className="text-[#BE1E2D]"&gt;&amp;bull;&lt;/span&gt;&lt;span&gt;&lt;strong className="text-foreground"&gt;Headline A/B testing:&lt;/strong&gt; Test specificity and curiosity-driven headlines&lt;/span&gt;&lt;/li&gt;
                  &lt;li className="flex gap-2"&gt;&lt;span className="text-[#BE1E2D]"&gt;&amp;bull;&lt;/span&gt;&lt;span&gt;&lt;strong className="text-foreground"&gt;Structured data markup:&lt;/strong&gt; NewsArticle schema on all content&lt;/span&gt;&lt;/li&gt;
                  &lt;li className="flex gap-2"&gt;&lt;span className="text-[#BE1E2D]"&gt;&amp;bull;&lt;/span&gt;&lt;span&gt;&lt;strong className="text-foreground"&gt;Publish-time optimisation:&lt;/strong&gt; Major pieces at 6am for morning Discover distribution&lt;/span&gt;&lt;/li&gt;
                &lt;/ul&gt;
                &lt;div className="bg-[#F5EFE6] p-4 rounded-lg"&gt;
                  &lt;p className="text-[#BE1E2D] text-xs font-semibold tracking-wider uppercase mb-3"&gt;PROJECTED IMPACT&lt;/p&gt;
                  &lt;div className="space-y-2"&gt;
                    &lt;div className="flex items-center gap-2"&gt;
                      &lt;div className="flex-1 h-2 bg-white rounded"&gt;&lt;div className="h-2 bg-[#BE1E2D] rounded" style={{width: "70%"}} /&gt;&lt;/div&gt;
                      &lt;span className="text-sm text-[#BE1E2D] font-semibold w-20"&gt;+60&amp;ndash;90%&lt;/span&gt;
                    &lt;/div&gt;
                    &lt;p className="text-xs text-muted-foreground"&gt;Discover Traffic&lt;/p&gt;
                    &lt;div className="flex items-center gap-2"&gt;
                      &lt;div className="flex-1 h-2 bg-white rounded"&gt;&lt;div className="h-2 bg-[#B8922A] rounded" style={{width: "55%"}} /&gt;&lt;/div&gt;
                      &lt;span className="text-sm text-[#B8922A] font-semibold w-20"&gt;+1&amp;ndash;2M&lt;/span&gt;
                    &lt;/div&gt;
                    &lt;p className="text-xs text-muted-foreground"&gt;New Readers/Month&lt;/p&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
              &lt;/div&gt;
            &lt;/div&gt;

            &lt;div className="bg-card border border-border border-t-4 border-t-[#B8922A] rounded-lg p-6"&gt;
              &lt;div className="flex justify-between items-start mb-4"&gt;
                &lt;div&gt;
                  &lt;p className="text-[#B8922A] text-xs font-semibold tracking-wider uppercase mb-1"&gt;SOLUTION 02 &amp;mdash; ENGAGEMENT&lt;/p&gt;
                  &lt;h3 className="font-serif font-bold text-xl"&gt;The Hindu Morning Brief: Building the Daily Habit&lt;/h3&gt;
                &lt;/div&gt;
                &lt;span className="text-xs bg-[#BE1E2D] text-white px-2 py-1 rounded"&gt;RICE: 320&lt;/span&gt;
              &lt;/div&gt;
              &lt;p className="text-sm text-muted-foreground mb-4"&gt;
                The NYT&apos;s &apos;The Morning&apos; newsletter has 17M subscribers. The FT&apos;s &apos;FirstFT&apos; drives 30% of their subscription sign-ups. The Hindu has no equivalent.
              &lt;/p&gt;
              &lt;div className="grid md:grid-cols-2 gap-6"&gt;
                &lt;ul className="space-y-2 text-sm text-muted-foreground"&gt;
                  &lt;li className="flex gap-2"&gt;&lt;span className="text-[#B8922A]"&gt;&amp;bull;&lt;/span&gt;&lt;span&gt;&lt;strong className="text-foreground"&gt;Name:&lt;/strong&gt; &quot;The Hindu Morning Brief&quot; &amp;mdash; sends at 6:30am, 5 days/week&lt;/span&gt;&lt;/li&gt;
                  &lt;li className="flex gap-2"&gt;&lt;span className="text-[#B8922A]"&gt;&amp;bull;&lt;/span&gt;&lt;span&gt;&lt;strong className="text-foreground"&gt;Format:&lt;/strong&gt; 5 stories, 3 sentences each + a link. Readable in 4 minutes.&lt;/span&gt;&lt;/li&gt;
                  &lt;li className="flex gap-2"&gt;&lt;span className="text-[#B8922A]"&gt;&amp;bull;&lt;/span&gt;&lt;span&gt;&lt;strong className="text-foreground"&gt;Free to sign up, no paywall:&lt;/strong&gt; This is the acquisition funnel. After 4 weeks, a soft prompt.&lt;/span&gt;&lt;/li&gt;
                  &lt;li className="flex gap-2"&gt;&lt;span className="text-[#B8922A]"&gt;&amp;bull;&lt;/span&gt;&lt;span&gt;&lt;strong className="text-foreground"&gt;Personalisation v1:&lt;/strong&gt; Readers select 3 topics on sign-up.&lt;/span&gt;&lt;/li&gt;
                &lt;/ul&gt;
                &lt;div className="border-l-4 border-[#2B7A4B] bg-[#EFF7F3] p-4 rounded-r-lg"&gt;
                  &lt;p className="text-[#2B7A4B] text-xs font-semibold tracking-wider uppercase mb-2"&gt;YEAR 1 REVENUE IMPACT&lt;/p&gt;
                  &lt;p className="text-sm text-muted-foreground"&gt;
                    4,000 new subscribers/month &amp;times; &amp;#8377;149 ARPM &amp;times; 12 months = &lt;strong className="text-[#2B7A4B]"&gt;&amp;#8377;7.2 Cr annual recurring revenue&lt;/strong&gt; &amp;mdash; from one product initiative.
                  &lt;/p&gt;
                &lt;/div&gt;
              &lt;/div&gt;
            &lt;/div&gt;

            &lt;div className="bg-card border border-border border-t-4 border-t-[#1A5276] rounded-lg p-6"&gt;
              &lt;div className="flex justify-between items-start mb-4"&gt;
                &lt;div&gt;
                  &lt;p className="text-[#1A5276] text-xs font-semibold tracking-wider uppercase mb-1"&gt;SOLUTION 03 &amp;mdash; RETENTION&lt;/p&gt;
                  &lt;h3 className="font-serif font-bold text-xl"&gt;Smart Paywall Metering + Subscriber Onboarding&lt;/h3&gt;
                &lt;/div&gt;
                &lt;span className="text-xs bg-[#BE1E2D] text-white px-2 py-1 rounded"&gt;RICE: 284&lt;/span&gt;
              &lt;/div&gt;
              &lt;div className="grid md:grid-cols-2 gap-6"&gt;
                &lt;div&gt;
                  &lt;h4 className="font-semibold text-sm mb-3"&gt;Part A &amp;mdash; Paywall Metering Experiments&lt;/h4&gt;
                  &lt;ul className="space-y-2 text-sm text-muted-foreground"&gt;
                    &lt;li className="flex gap-2"&gt;&lt;span className="text-[#1A5276]"&gt;&amp;bull;&lt;/span&gt;&lt;span&gt;&lt;strong className="text-foreground"&gt;Test:&lt;/strong&gt; Reduce from 5 to 3 free articles&lt;/span&gt;&lt;/li&gt;
                    &lt;li className="flex gap-2"&gt;&lt;span className="text-[#1A5276]"&gt;&amp;bull;&lt;/span&gt;&lt;span&gt;&lt;strong className="text-foreground"&gt;Test:&lt;/strong&gt; Dynamic metering by article type&lt;/span&gt;&lt;/li&gt;
                    &lt;li className="flex gap-2"&gt;&lt;span className="text-[#1A5276]"&gt;&amp;bull;&lt;/span&gt;&lt;span&gt;&lt;strong className="text-foreground"&gt;Test:&lt;/strong&gt; Paywall copy overhaul with community focus&lt;/span&gt;&lt;/li&gt;
                    &lt;li className="flex gap-2"&gt;&lt;span className="text-[#1A5276]"&gt;&amp;bull;&lt;/span&gt;&lt;span&gt;&lt;strong className="text-foreground"&gt;Test:&lt;/strong&gt; &quot;Your last free article this month&quot; urgency&lt;/span&gt;&lt;/li&gt;
                  &lt;/ul&gt;
                &lt;/div&gt;
                &lt;div&gt;
                  &lt;h4 className="font-semibold text-sm mb-3"&gt;Part B &amp;mdash; Subscriber Onboarding Flow&lt;/h4&gt;
                  &lt;ul className="space-y-2 text-sm text-muted-foreground"&gt;
                    &lt;li className="flex gap-2"&gt;&lt;span className="text-[#1A5276]"&gt;&amp;bull;&lt;/span&gt;&lt;span&gt;&lt;strong className="text-foreground"&gt;Day 0:&lt;/strong&gt; Welcome email with 5 hidden features&lt;/span&gt;&lt;/li&gt;
                    &lt;li className="flex gap-2"&gt;&lt;span className="text-[#1A5276]"&gt;&amp;bull;&lt;/span&gt;&lt;span&gt;&lt;strong className="text-foreground"&gt;Day 3:&lt;/strong&gt; Social proof + personalised recommendation&lt;/span&gt;&lt;/li&gt;
                    &lt;li className="flex gap-2"&gt;&lt;span className="text-[#1A5276]"&gt;&amp;bull;&lt;/span&gt;&lt;span&gt;&lt;strong className="text-foreground"&gt;Day 7:&lt;/strong&gt; Value confirmation recap&lt;/span&gt;&lt;/li&gt;
                    &lt;li className="flex gap-2"&gt;&lt;span className="text-[#1A5276]"&gt;&amp;bull;&lt;/span&gt;&lt;span&gt;&lt;strong className="text-foreground"&gt;Day 25:&lt;/strong&gt; Pre-renewal loss aversion trigger&lt;/span&gt;&lt;/li&gt;
                  &lt;/ul&gt;
                &lt;/div&gt;
              &lt;/div&gt;
            &lt;/div&gt;

            &lt;div className="bg-card border border-border border-t-4 border-t-[#2B7A4B] rounded-lg p-6"&gt;
              &lt;div className="flex justify-between items-start mb-4"&gt;
                &lt;div&gt;
                  &lt;p className="text-[#2B7A4B] text-xs font-semibold tracking-wider uppercase mb-1"&gt;SOLUTION 04 &amp;mdash; REVENUE&lt;/p&gt;
                  &lt;h3 className="font-serif font-bold text-xl"&gt;Subscription Tier Expansion: Student, Corporate &amp;amp; The Hindu+&lt;/h3&gt;
                &lt;/div&gt;
                &lt;span className="text-xs bg-[#BE1E2D] text-white px-2 py-1 rounded"&gt;RICE: 192&lt;/span&gt;
              &lt;/div&gt;
              &lt;div className="grid md:grid-cols-3 gap-4"&gt;
                &lt;div className="border-l-4 border-[#2B7A4B] bg-card p-4 rounded-r-lg"&gt;
                  &lt;h4 className="font-serif font-bold"&gt;The Hindu Student&lt;/h4&gt;
                  &lt;p className="text-2xl font-serif font-bold text-[#2B7A4B] my-2"&gt;&amp;#8377;49/month&lt;/p&gt;
                  &lt;p className="text-sm text-muted-foreground"&gt;Full digital access + UPSC-optimised packaging. Targets 500K+ UPSC aspirants.&lt;/p&gt;
                &lt;/div&gt;
                &lt;div className="border-l-4 border-[#B8922A] bg-card p-4 rounded-r-lg"&gt;
                  &lt;h4 className="font-serif font-bold"&gt;The Hindu Corporate&lt;/h4&gt;
                  &lt;p className="text-2xl font-serif font-bold text-[#B8922A] my-2"&gt;&amp;#8377;2,999/seat/yr&lt;/p&gt;
                  &lt;p className="text-sm text-muted-foreground"&gt;Bulk licensing for offices, law firms, banks. 100 clients &amp;times; 10 seats = &amp;#8377;3Cr ARR.&lt;/p&gt;
                &lt;/div&gt;
                &lt;div className="border-l-4 border-[#1A5276] bg-card p-4 rounded-r-lg"&gt;
                  &lt;h4 className="font-serif font-bold"&gt;The Hindu+&lt;/h4&gt;
                  &lt;p className="text-2xl font-serif font-bold text-[#1A5276] my-2"&gt;&amp;#8377;999/year&lt;/p&gt;
                  &lt;p className="text-sm text-muted-foreground"&gt;Full access + exclusive subscriber events + archive access. Premium community tier.&lt;/p&gt;
                &lt;/div&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;

      {/* Metrics */}
      &lt;section className="py-16 px-6"&gt;
        &lt;div className="max-w-5xl mx-auto"&gt;
          &lt;p className="text-[#BE1E2D] text-sm font-semibold tracking-wider mb-2"&gt;SUCCESS METRICS&lt;/p&gt;
          &lt;h2 className="text-3xl font-serif font-bold text-foreground mb-4"&gt;How We Measure The Hindu&apos;s Growth Engine&lt;/h2&gt;
          &lt;p className="text-muted-foreground italic mb-8 max-w-2xl"&gt;
            Mapped directly to the four KPIs: Reach, Engagement, Retention, Revenue.
          &lt;/p&gt;

          &lt;div className="bg-[#1C1008] text-white p-6 rounded-lg mb-8"&gt;
            &lt;h3 className="text-[#BE1E2D] text-xs font-semibold tracking-wider uppercase mb-3"&gt;THE NORTH STAR&lt;/h3&gt;
            &lt;p className="text-[#9E9386]"&gt;
              &lt;strong className="text-[#F5F0E8]"&gt;Monthly Paying Subscribers&lt;/strong&gt; &amp;mdash; the singular metric that aligns Reach, Engagement, and Retention into one number. Secondary NSM: &lt;strong className="text-[#F5F0E8]"&gt;Monthly Active Subscribers&lt;/strong&gt; (subscribers who log in at least 8 days/month).
            &lt;/p&gt;
          &lt;/div&gt;

          &lt;div className="grid md:grid-cols-2 gap-6"&gt;
            &lt;div&gt;
              &lt;h3 className="text-[#BE1E2D] text-sm font-semibold tracking-wider uppercase border-b-2 border-[#BE1E2D] pb-2 mb-4"&gt;REACH METRICS&lt;/h3&gt;
              &lt;div className="space-y-3"&gt;
                &lt;div className="bg-card border border-border p-4 rounded-lg"&gt;
                  &lt;p className="text-[#BE1E2D] text-xs font-semibold"&gt;L1 &amp;middot; FOCUS&lt;/p&gt;
                  &lt;p className="font-semibold text-sm"&gt;Monthly Unique Visitors from Google Discover&lt;/p&gt;
                  &lt;p className="text-xs text-muted-foreground"&gt;Baseline: ~2M/month &amp;rarr; Target: 4M within 90 days&lt;/p&gt;
                &lt;/div&gt;
                &lt;div className="bg-card border border-border p-4 rounded-lg"&gt;
                  &lt;p className="text-[#BE1E2D] text-xs font-semibold"&gt;L1&lt;/p&gt;
                  &lt;p className="font-semibold text-sm"&gt;Direct + Email Traffic (% of total)&lt;/p&gt;
                  &lt;p className="text-xs text-muted-foreground"&gt;Target: 15% within 12 months (from est. 8% today)&lt;/p&gt;
                &lt;/div&gt;
              &lt;/div&gt;
            &lt;/div&gt;
            &lt;div&gt;
              &lt;h3 className="text-[#2B7A4B] text-sm font-semibold tracking-wider uppercase border-b-2 border-[#2B7A4B] pb-2 mb-4"&gt;REVENUE METRICS&lt;/h3&gt;
              &lt;div className="space-y-3"&gt;
                &lt;div className="bg-card border border-border p-4 rounded-lg"&gt;
                  &lt;p className="text-[#2B7A4B] text-xs font-semibold"&gt;NSM&lt;/p&gt;
                  &lt;p className="font-semibold text-sm"&gt;Monthly Paying Subscribers&lt;/p&gt;
                  &lt;p className="text-xs text-muted-foreground"&gt;Baseline: ~120K &amp;rarr; Target: 200,000 by Month 12&lt;/p&gt;
                &lt;/div&gt;
                &lt;div className="bg-card border border-border p-4 rounded-lg"&gt;
                  &lt;p className="text-[#2B7A4B] text-xs font-semibold"&gt;L1&lt;/p&gt;
                  &lt;p className="font-semibold text-sm"&gt;Paywall Conversion Rate&lt;/p&gt;
                  &lt;p className="text-xs text-muted-foreground"&gt;Current: ~1% &amp;rarr; Target: 1.5&amp;ndash;2% by Month 6&lt;/p&gt;
                &lt;/div&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;

      {/* CTA */}
      &lt;section className="py-16 px-6 bg-[#1C1008]"&gt;
        &lt;div className="max-w-3xl mx-auto text-center"&gt;
          &lt;h2 className="text-3xl font-serif font-bold text-[#F5F0E8] mb-4"&gt;Want to discuss this case study?&lt;/h2&gt;
          &lt;p className="text-[#9E9386] mb-8"&gt;
            I&apos;d love to walk through my thinking, methodology, and how I would execute this strategy at The Hindu.
          &lt;/p&gt;
          &lt;div className="flex flex-wrap justify-center gap-4"&gt;
            &lt;Link
              href="mailto:yashmahadik2005@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#BE1E2D] text-white font-semibold rounded hover:bg-[#8C1220] transition-colors"
            &gt;
              &lt;Mail size={18} /&gt;
              Get In Touch
            &lt;/Link&gt;
            &lt;Link
              href="/#case-studies"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-[#F5F0E8] font-semibold rounded hover:border-white/40 transition-colors"
            &gt;
              View More Case Studies
            &lt;/Link&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;
    &lt;/main&gt;
  )
}
