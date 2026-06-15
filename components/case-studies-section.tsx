"use client"

import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const caseStudiesByCategory = {
  "product-teardown": [
    {
      id: "zepto",
      title: "Turning Notifications Into Revenue: A Product Teardown of Push Strategy",
      description: "A deep analysis of how quick commerce platforms can leverage AI-driven personalization and interactive notifications to boost engagement and conversion.",
      bgColor: "bg-purple-50",
      link: "/case-studies/zepto"
    }
  ],
  "wireframing": [
    {
      id: "amazon-prime",
      title: "From 15 Minutes to 30 Seconds: Cutting Decision Fatigue in Streaming",
      description: "Wireframes and user flows for Amazon Prime's content discovery redesign with interactive prototypes.",
      bgColor: "bg-amber-50",
      link: "/case-studies/amazon-prime"
    }
  ],
  "prd": [
    {
      id: "sprintup",
      title: "SprintUp: Voice-Activated Project Management for Engineering Teams",
      description: "Product Requirements Document for SprintUp — an AI-powered platform that eliminates post-meeting admin overhead by automatically converting verbal commitments and blockers into actionable tickets. Achieve 70% reduction in administrative work and reclaim 2+ hours per sprint per developer.",
      bgColor: "bg-indigo-50",
      link: "/case-studies/sprintup"
    }
  ],
  "data-analytics": [
    {
      id: "the-hindu",
      title: "Converting 32M Monthly Visitors Into Paying Subscribers",
      description: "Comprehensive data analytics and growth funnel optimization for The Hindu's subscription model.",
      bgColor: "bg-red-50",
      link: "/case-studies/the-hindu"
    },
    {
      id: "swiggy",
      title: "How to 2X Quality Text Reviews & Unlock $800M in Annual GOV",
      description: "Analytics-driven case study on Swiggy's review engagement metrics and conversion optimization.",
      bgColor: "bg-orange-50",
      link: "/case-studies/swiggy"
    },
    {
      id: "netflix",
      title: "Predicting What You Want to Watch: Netflix's Recommendation Engine Optimization",
      description: "Deep dive into Netflix's data analytics framework for personalized recommendations. How machine learning models increased viewing time by 20% and reduced churn through predictive analytics.",
      bgColor: "bg-red-100",
      link: "/case-studies/netflix"
    }
  ],
  "market-case-study": [
    {
      id: "harley-davidson",
      title: "Enjoy Till It Lasts: Unlocking $1.5B Before the ICE Era Ends",
      description: "Market analysis and competitive positioning strategy for Harley-Davidson in the transitioning motorcycle industry.",
      bgColor: "bg-orange-100",
      link: "/case-studies/harley-davidson"
    },
    {
      id: "yeezy",
      title: "The Anti-User Experience: Why Conventional UX Fails (Sometimes)",
      description: "Market case study on YEEZY's deliberate rejection of UX conventions and its commercial success.",
      bgColor: "bg-gray-100",
      link: "/case-studies/yeezy"
    },
    {
      id: "figma",
      title: "From Free Tools to Enterprise: How Figma Captured the Design Market",
      description: "Strategic market analysis of Figma's competitive positioning, pricing strategy, and network effects that transformed the $50B+ design tools landscape.",
      bgColor: "bg-pink-100",
      link: "/case-studies/figma"
    }
  ],
  "new-product-development": [
    {
      id: "chase",
      title: "Increasing Financial Feature Engagement: Unlocking $1.9B in Annual Revenue",
      description: "New product feature development strategy for Chase Compass — an AI-powered financial navigation platform designed to increase engagement and unlock substantial annual revenue.",
      bgColor: "bg-blue-100",
      link: "/case-studies/chase"
    },
    {
      id: "cred",
      title: "Breaking the Monthly Habit: Transforming a $6.4B App with 3% DAU/MAU",
      description: "New product feature development strategy for CRED's daily engagement layer and habit formation.",
      bgColor: "bg-slate-100",
      link: "/case-studies/cred",
      pptLink: "https://canva.link/credcasestudybyyash"
    },
    {
      id: "notion",
      title: "From Document Editor to AI-Powered Workspace: Notion's Feature Roadmap",
      description: "New product feature strategy for Notion AI — seamless AI integration into workflows. How Notion expanded from a document tool into a $10B+ AI-first workspace platform through strategic feature development.",
      bgColor: "bg-gray-50",
      link: "/case-studies/notion"
    }
  ],
  "go-to-market": [
    {
      id: "jpmc-india",
      title: "How JPMC Could Make Their Next Billions In India",
      description: "Go-to-market strategy and market entry execution plan for JPMC's India expansion.",
      bgColor: "bg-blue-50",
      link: "/case-studies/jpmc-india"
    }
  ],
  "product-development-journey": [
    {
      id: "electronic-soundbook",
      title: "Electronic Soundbook: From Brief to Shelf",
      description: "A product development journey — Building a screen-free alternative to smartphones for toddlers across five global markets with zero redesigns post-DVT. Covers research, engineering, compliance architecture, prototyping, and go-to-market strategy.",
      bgColor: "bg-teal-50",
      link: "/case-studies/electronic-soundbook"
    }
  ]
}

const categories = [
  { key: "product-teardown", label: "Product Teardown", icon: "🔍" },
  { key: "wireframing", label: "Wireframing", icon: "📐" },
  { key: "prd", label: "PRD", icon: "📋" },
  { key: "data-analytics", label: "Data Analytics", icon: "📊" },
  { key: "market-case-study", label: "Market Case Study", icon: "📈" },
  { key: "new-product-development", label: "New Product Development", icon: "🚀" },
  { key: "go-to-market", label: "Go to Market", icon: "🎯" },
  { key: "product-development-journey", label: "Product Development Journey", icon: "🛣️" }
]

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-24 px-6 bg-muted/30 relative overflow-hidden">
      <div className="absolute bottom-0 left-10 w-80 h-80 opacity-5 pointer-events-none hidden md:block">
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

        {/* Categories Section */}
        <div className="space-y-16">
          {categories.map((category) => (
            <div key={category.key}>
              <div className="flex items-center gap-3 mb-8">
                <span className="text-3xl">{category.icon}</span>
                <h2 className="text-2xl md:text-3xl font-serif text-foreground">
                  {category.label}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {caseStudiesByCategory[category.key]?.map((study) => (
                  <Link
                    key={study.id}
                    href={study.link}
                    className="group"
                  >
                    <div className={`${study.bgColor} p-8 rounded-lg h-full flex flex-col justify-between transition-transform hover:scale-105`}>
                      <div>
                        <h3 className="text-xl font-serif text-foreground mb-3 group-hover:text-primary transition-colors">
                          {study.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          {study.description}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center text-primary font-medium text-sm">
                          Read Case Study
                          <ArrowUpRight size={16} className="ml-2" />
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
          ))}
        </div>
      </div>
    </section>
  )
}
