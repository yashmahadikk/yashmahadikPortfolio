import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const caseStudies = [
  {
    id: "chase",
    category: "CHASE | FINTECH & BANKING",
    title: "Increasing Financial Feature Engagement: Unlocking $1.9B in Annual Revenue",
    description: "A comprehensive product case study on revamping Chase Mobile into Chase Compass - an AI-powered financial navigation platform. Addresses the structural engagement failure where 47% of high-frequency users only check balance and transfer money.",
    highlights: [
      "Identified 47% of users stuck in 'transactional loop' with 2 or fewer features",
      "Designed CompassGuide with Financial Health Score, Goal Compass, and Smart Nudges",
      "Projected $1.9B annual incremental revenue from 25% MAFE lift",
      "Built working MVP at chasecompass.vercel.app"
    ],
    bgColor: "bg-blue-100",
    link: "https://chasecompass.vercel.app",
    linkText: "View MVP"
  },
  {
    id: "harley-davidson",
    category: "HARLEY-DAVIDSON | BRAND STRATEGY",
    title: "Enjoy Till It Lasts: Unlocking $1.5B Before the ICE Era Ends",
    description: "A bold brand strategy case study on how Harley-Davidson can turn the end of the ICE motorcycle era into its biggest commercial opportunity. Explores nostalgia marketing, scarcity positioning, and community activation to drive revenue growth.",
    highlights: [
      "Analyzed the 30-year ICE countdown and competitive threat from Royal Enfield",
      "Segmented customers into The Faithful, Aspiring Riders, and Nostalgic Prospects",
      "Designed 'Enjoy Till It Lasts' campaign with experiential programs",
      "Projected $1.5B+ addressable incremental revenue over 5-year window"
    ],
    bgColor: "bg-orange-100",
    link: null,
    linkText: null
  },
  {
    id: "amazon-prime",
    category: "AMAZON PRIME | CONTENT DISCOVERY",
    title: "From 15 Minutes to 30 Seconds: Cutting Decision Fatigue in Streaming",
    description: "A deep dive into reducing friction in Amazon Prime Video's content discovery experience. This case study explores how AI-powered personalization and streamlined UX can transform the way users find what to watch, dramatically improving time-to-play metrics.",
    highlights: [
      "Analyzed user journey pain points in content selection",
      "Proposed AI-driven recommendation engine improvements",
      "Designed streamlined browsing experience reducing decision time by 97%",
      "Created MVP prototype for enhanced discovery flow"
    ],
    bgColor: "bg-amber-50",
    link: "https://canva.link/3wroonm1t092k4x",
    linkText: "View Deck & MVP"
  },
  {
    id: "cred",
    category: "CRED | ENGAGEMENT & RETENTION",
    title: "Breaking the Monthly Habit: Transforming a $6.4B App with 3% DAU/MAU",
    description: "How to transform CRED from a once-a-month bill payment utility into a daily financial companion. This case study addresses the core engagement challenge: users open the app exactly once a month on bill day, leaving billions of coins unredeemed.",
    highlights: [
      "Identified root cause: 65% of users are 'Bill Payers' who never return",
      "Validated hypotheses through UX audit and competitor analysis",
      "Designed 'CRED Pulse' - a lightweight daily engagement layer",
      "Projected Rs.53.3 Cr incremental GMV revenue from engagement lift"
    ],
    bgColor: "bg-slate-100",
    link: "https://canva.link/credcasestudybyyash",
    linkText: "View Full Case Study"
  },
  {
    id: "swiggy",
    category: "SWIGGY | FOOD DELIVERY",
    title: "How to 2X Quality Text Reviews & Unlock $800M in Annual GOV",
    description: "A comprehensive product case study on increasing quality text reviews on Swiggy's food delivery vertical. Explores the friction in the review process and proposes AI-powered voice reviews with smart hashtag tagging to drive menu page conversion.",
    highlights: [
      "Identified 2.2M target users who value reviews but only leave ratings",
      "Mapped user behavior: 63% find reviews inconvenient, 28% see no value",
      "Designed Lean Review with Speech-to-Text and contextual hashtags",
      "Projected $800M GOV increase from improved conversion rates"
    ],
    bgColor: "bg-orange-50",
    link: null,
    linkText: null
  },
  {
    id: "zepto",
    category: "ZEPTO | QUICK COMMERCE",
    title: "Turning Notifications Into Revenue: A Product Teardown of Push Strategy",
    description: "A deep analysis of how quick commerce platforms can leverage AI-driven personalization and interactive notifications to boost engagement and conversion. Includes user personas, journey mapping, and strategic recommendations.",
    highlights: [
      "Analyzed current notification strategy strengths and gaps",
      "Created detailed user personas for busy professionals and homemakers",
      "Proposed AI-driven personalization and interactive notifications",
      "Defined comprehensive metrics framework with North Star and guardrails"
    ],
    bgColor: "bg-purple-50",
    link: null,
    linkText: null
  }
]

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-primary text-sm font-semibold tracking-wider mb-2">CASE STUDIES</p>
          <h2 className="text-4xl md:text-5xl font-serif italic text-foreground">
            Strategic Product Thinking
          </h2>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div 
              key={study.id} 
              className={`grid md:grid-cols-2 gap-8 items-start ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Content Card */}
              <div className={`${study.bgColor} p-8 md:p-12 rounded-lg ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <p className="text-primary text-xs font-semibold tracking-wider mb-4">
                  {study.category}
                </p>
                <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-4 leading-tight">
                  {study.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {study.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href={`/case-studies/${study.id}`}
                    className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                  >
                    Read Case Study
                    <ArrowUpRight size={18} />
                  </Link>
                  {study.link && (
                    <a
                      href={study.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-muted-foreground font-medium hover:text-foreground"
                    >
                      {study.linkText}
                      <ArrowUpRight size={18} />
                    </a>
                  )}
                </div>
              </div>

              {/* Highlights Card */}
              <div className={`p-8 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <h4 className="text-sm font-semibold text-foreground mb-6 tracking-wider">
                  KEY CONTRIBUTIONS
                </h4>
                <ul className="space-y-4">
                  {study.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-muted-foreground leading-relaxed">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
