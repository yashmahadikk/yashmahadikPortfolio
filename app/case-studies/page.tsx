import { ArrowUpRight, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { createClient } from "@/lib/supabase/server"

export const metadata = {
  title: "Case Studies | Yash Mahadik",
  description: "In-depth case studies on product strategy, market analysis, and digital transformation.",
}

export default async function CaseStudiesPage() {
  const supabase = await createClient()

  // Fetch case studies from Supabase
  const { data: supabaseStudies = [], error } = await supabase
    .from("case_studies")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching case studies:", error)
  }

  // Group case studies by category
  const groupedByCategory: Record<string, typeof supabaseStudies> = {}
  supabaseStudies.forEach((study) => {
    if (!groupedByCategory[study.category]) {
      groupedByCategory[study.category] = []
    }
    groupedByCategory[study.category].push(study)
  })

  // Fallback hardcoded data if Supabase is empty
  const caseStudiesByCategory = supabaseStudies.length > 0 ? groupedByCategory : {
    "product-teardown": [
      {
        id: "zepto",
        title: "Turning Notifications Into Revenue: A Product Teardown of Push Strategy",
        description: "A deep analysis of how quick commerce platforms can leverage AI-driven personalization and interactive notifications to boost engagement and conversion.",
        bg_color: "bg-purple-50",
        link: "/case-studies/zepto",
        category: "product-teardown"
      }
    ],
    "wireframing": [
      {
        id: "amazon-prime",
        title: "From 15 Minutes to 30 Seconds: Cutting Decision Fatigue in Streaming",
        description: "Wireframes and user flows for Amazon Prime's content discovery redesign with interactive prototypes.",
        bg_color: "bg-amber-50",
        link: "/case-studies/amazon-prime",
        category: "wireframing"
      }
    ],
    "prd": [
      {
        id: "sprintup",
        title: "SprintUp: Voice-Activated Project Management for Engineering Teams",
        description: "Product Requirements Document for SprintUp — an AI-powered platform that eliminates post-meeting admin overhead.",
        bg_color: "bg-indigo-50",
        link: "/case-studies/sprintup",
        category: "prd"
      }
    ],
    "data-analytics": [
      {
        id: "the-hindu",
        title: "Converting 32M Monthly Visitors Into Paying Subscribers",
        description: "Comprehensive data analytics and growth funnel optimization for The Hindu's subscription model.",
        bg_color: "bg-red-50",
        link: "/case-studies/the-hindu",
        category: "data-analytics"
      },
      {
        id: "swiggy",
        title: "How to 2X Quality Text Reviews & Unlock $800M in Annual GOV",
        description: "Analytics-driven case study on Swiggy's review engagement metrics and conversion optimization.",
        bg_color: "bg-orange-50",
        link: "/case-studies/swiggy",
        category: "data-analytics"
      }
    ],
    "market-case-study": [
      {
        id: "harley-davidson",
        title: "Enjoy Till It Lasts: Unlocking $1.5B Before the ICE Era Ends",
        description: "Market analysis and competitive positioning strategy for Harley-Davidson.",
        bg_color: "bg-orange-100",
        link: "/case-studies/harley-davidson",
        category: "market-case-study"
      },
      {
        id: "figma",
        title: "From Free Tools to Enterprise: How Figma Captured the Design Market",
        description: "Strategic market analysis of Figma's competitive positioning and network effects.",
        bg_color: "bg-pink-100",
        link: "/case-studies/figma",
        category: "market-case-study"
      }
    ],
    "new-product-development": [
      {
        id: "chase",
        title: "Increasing Financial Feature Engagement: Unlocking $1.9B in Annual Revenue",
        description: "New product feature development strategy for Chase Compass.",
        bg_color: "bg-blue-100",
        link: "/case-studies/chase",
        category: "new-product-development"
      },
      {
        id: "notion",
        title: "From Document Editor to AI-Powered Workspace: Notion's Feature Roadmap",
        description: "New product feature strategy for Notion AI integration.",
        bg_color: "bg-purple-100",
        link: "/case-studies/notion",
        category: "new-product-development"
      }
    ]
  }

  const categoryLabels: Record<string, string> = {
    "product-teardown": "Product Teardowns",
    "wireframing": "Wireframing & Design",
    "prd": "Product Strategy",
    "data-analytics": "Data & Analytics",
    "market-case-study": "Market Analysis",
    "new-product-development": "New Product Development"
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-6 pt-32">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8">
            <ArrowLeft size={18} className="mr-2" />
            Back
          </Link>
          <p className="text-primary text-sm font-semibold tracking-wider mb-2">CASE STUDIES</p>
          <h1 className="text-5xl md:text-6xl font-serif text-balance mb-6">
            Strategic Product & Market Analysis
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            In-depth explorations of product strategy, market positioning, and digital transformation across industry leaders.
          </p>
        </div>
      </section>

      {/* Case Studies by Category */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto space-y-16">
          {Object.entries(caseStudiesByCategory).map(([category, studies]) => (
            <div key={category}>
              <h2 className="text-2xl md:text-3xl font-serif mb-8 text-foreground">
                {categoryLabels[category] || category}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {studies.map((study) => (
                  <Link
                    key={study.id || study.slug}
                    href={study.link || `/case-studies/${study.slug}`}
                    className={`${study.bg_color || study.bgColor} group p-8 rounded-lg h-full flex flex-col justify-between hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer`}
                  >
                    <div className="mb-4">
                      <h3 className="text-xl font-serif text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-3">
                        {study.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {study.description}
                      </p>
                    </div>
                    <div className="flex items-center text-primary font-medium group-hover:underline underline-offset-2 text-sm">
                      Read case study
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">
                        <ArrowUpRight size={18} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
