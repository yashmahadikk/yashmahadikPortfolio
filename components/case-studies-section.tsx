import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const caseStudies = [
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
      "Projected ₹53.3 Cr incremental GMV revenue from engagement lift"
    ],
    bgColor: "bg-slate-100",
    link: "https://canva.link/credcasestudybyyash",
    linkText: "View Full Case Study"
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
                  <a
                    href={study.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-muted-foreground font-medium hover:text-foreground"
                  >
                    {study.linkText}
                    <ArrowUpRight size={18} />
                  </a>
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
