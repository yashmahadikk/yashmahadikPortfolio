"use client"

import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

// Flattened case studies with methodology tag
const allCaseStudies = [
  {
    id: "zepto",
    title: "Turning Notifications Into Revenue: A Product Teardown of Push Strategy",
    description: "A deep analysis of how quick commerce platforms can leverage AI-driven personalization and interactive notifications to boost engagement and conversion.",
    methodology: "PRODUCT TEARDOWN",
    bgColor: "bg-purple-50",
    link: "/case-studies/zepto"
  },
  {
    id: "amazon-prime",
    title: "Redesigning Discovery: How Amazon Prime Can Reduce Content Abandonment by 40%",
    description: "Wireframes and user flows for Amazon Prime's content discovery redesign with interactive prototypes.",
    methodology: "WIREFRAMING",
    bgColor: "bg-amber-50",
    link: "/case-studies/amazon-prime"
  },
  {
    id: "sprintup",
    title: "SprintUp: Voice-Activated Project Management for Engineering Teams",
    description: "A deep-dive PRD into SprintUp's voice-activated project management system — covering problem framing, user research, feature prioritisation, technical architecture decisions, and the go-to-market strategy. Includes the full requirements document behind the product's core loop.",
    methodology: "PRD",
    bgColor: "bg-indigo-50",
    link: "/case-studies/sprintup"
  },
  {
    id: "the-hindu",
    title: "Converting 32M Monthly Visitors Into Paying Subscribers",
    description: "Comprehensive data analytics and growth funnel optimization for The Hindu's subscription model.",
    methodology: "DATA ANALYTICS",
    bgColor: "bg-red-50",
    link: "/case-studies/the-hindu"
  },
  {
    id: "swiggy",
    title: "Doubling Meaningful Reviews & Unlocking $800M in Annual GOV (projected opportunity)",
    description: "Analytics-driven case study on Swiggy's review engagement metrics and conversion optimization.",
    methodology: "DATA ANALYTICS",
    bgColor: "bg-orange-50",
    link: "/case-studies/swiggy"
  },
  {
    id: "netflix",
    title: "Optimising Netflix's Recommendation Engine to Increase Viewing Time by 20%",
    description: "Deep dive into Netflix's data analytics framework for personalized recommendations. How machine learning models increased viewing time by 20% and reduced churn through predictive analytics.",
    methodology: "DATA ANALYTICS",
    bgColor: "bg-red-100",
    link: "/case-studies/netflix"
  },
  {
    id: "harley-davidson",
    title: "Enjoy Till It Lasts: Unlocking $1.5B Before the ICE Era Ends (projected opportunity)",
    description: "Market analysis and competitive positioning strategy for Harley-Davidson in the transitioning motorcycle industry.",
    methodology: "MARKET CASE STUDY",
    bgColor: "bg-orange-100",
    link: "/case-studies/harley-davidson"
  },
  {
    id: "yeezy",
    title: "The Anti-User Experience: How YEEZY Scored 1.7/10 on UX and Still Won",
    description: "Market case study on YEEZY's deliberate rejection of UX conventions and its commercial success.",
    methodology: "MARKET CASE STUDY",
    bgColor: "bg-gray-100",
    link: "/case-studies/yeezy"
  },
  {
    id: "figma",
    title: "From Free Tools to Enterprise: How Figma Captured the Design Market",
    description: "Strategic market analysis of Figma's competitive positioning, pricing strategy, and network effects that transformed the $50B+ design tools landscape.",
    methodology: "MARKET CASE STUDY",
    bgColor: "bg-pink-100",
    link: "/case-studies/figma"
  },
  {
    id: "chase",
    title: "Increasing Financial Feature Engagement: Unlocking $1.9B in Annual Revenue (projected opportunity)",
    description: "New product feature development strategy for Chase Compass — an AI-powered financial navigation platform designed to increase engagement and unlock substantial annual revenue.",
    methodology: "NEW PRODUCT",
    bgColor: "bg-blue-100",
    link: "/case-studies/chase"
  },
  {
    id: "cred",
    title: "Breaking the Monthly Habit: Transforming a $6.4B App with 3% DAU/MAU",
    description: "New product feature development strategy for CRED's daily engagement layer and habit formation.",
    methodology: "NEW PRODUCT",
    bgColor: "bg-slate-100",
    link: "/case-studies/cred",
    pptLink: "https://canva.link/credcasestudybyyash"
  },
  {
    id: "notion",
    title: "Building Notion's AI Layer: A Feature Strategy to Capture the $47B Productivity Market",
    description: "New product feature strategy for Notion AI — seamless AI integration into workflows. How Notion expanded from a document tool into a $10B+ AI-first workspace platform through strategic feature development.",
    methodology: "NEW PRODUCT",
    bgColor: "bg-gray-50",
    link: "/case-studies/notion"
  },
  {
    id: "jpmc-india",
    title: "JPMC India Market Entry: GTM Strategy & Revenue Roadmap",
    description: "Go-to-market strategy and market entry execution plan for JPMC's India expansion.",
    methodology: "GO TO MARKET",
    bgColor: "bg-blue-50",
    link: "/case-studies/jpmc-india"
  },
  {
    id: "electronic-soundbook",
    title: "Electronic Soundbook: From Brief to Shelf",
    description: "A product development journey — Building a screen-free alternative to smartphones for toddlers across five global markets with zero redesigns post-DVT. Covers research, engineering, compliance architecture, prototyping, and go-to-market strategy.",
    methodology: "PRODUCT JOURNEY",
    bgColor: "bg-teal-50",
    link: "/case-studies/electronic-soundbook",
    pptLink: "https://canva.link/5pkm57zpt9t04qt"
  }
]

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-24 px-6 bg-muted/30 relative overflow-hidden">
      <div className="absolute bottom-0 left-10 w-80 h-80 opacity-5 dark:opacity-3 pointer-events-none hidden md:block">
        <img 
          src="/illustrations/analytics.png" 
          alt="" 
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-12">
          <p className="text-primary text-sm font-semibold tracking-wider mb-2">CASE STUDIES</p>
          <h2 className="text-4xl md:text-6xl font-serif italic text-foreground mb-6">
            Strategic Product Insights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Explore case studies organized by methodology—from product teardowns to go-to-market strategies. Each case study showcases strategic thinking across different product disciplines.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allCaseStudies.map((study) => (
            <Link
              key={study.id}
              href={study.link}
              className="group"
            >
              <div className={`${study.bgColor} dark:bg-card p-6 rounded-lg h-full flex flex-col justify-between transition-transform hover:scale-105 border border-border/20`}>
                {/* Methodology Tag - Large and Prominent at Top */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-foreground/10 text-foreground text-xs font-bold tracking-wider rounded-sm">
                    {study.methodology}
                  </span>
                </div>

                {/* Title and Description */}
                <div className="mb-4 flex-1">
                  <h3 className="text-lg font-serif text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                    {study.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {study.description}
                  </p>
                </div>

                {/* Links at Bottom */}
                <div className="space-y-2 border-t border-border/10 pt-3">
                  <div className="flex items-center text-primary font-medium text-sm">
                    Read Case Study
                    <ArrowUpRight size={14} className="ml-2" />
                  </div>
                  {study.pptLink && (
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(study.pptLink, '_blank')
                      }}
                      className="inline-flex items-center text-primary font-medium text-sm hover:underline underline-offset-2 bg-transparent border-0 cursor-pointer p-0 appearance-none"
                    >
                      View the deck
                      <span className="ml-2">&gt;</span>
                    </button>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
