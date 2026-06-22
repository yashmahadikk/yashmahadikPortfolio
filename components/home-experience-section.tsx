import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HomeExperienceSection() {
  const experiences = [
    {
      company: "Devanagari Ventures",
      role: "PM & Co Founder",
      period: "May 2024 - May 2026",
      location: "Mumbai",
      status: "Active",
      logo: "🚀"
    },
    {
      company: "Funspire.in",
      role: "Product Manager",
      period: "May 2023 - May 2024",
      location: "Mumbai",
      status: "Completed",
      logo: "🎯"
    },
    {
      company: "JSK Foods",
      role: "Operations",
      period: "Aug 2021 - Apr 2023",
      location: "Mumbai",
      status: "Completed",
      logo: "🍛"
    }
  ]

  return (
    <section className="py-24 md:py-32 px-6 border-b border-border">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-12">Experience</h2>
        
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="flex gap-6">
              <div className="text-3xl flex-shrink-0 w-12 h-12 flex items-center justify-center">
                {exp.logo}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{exp.company}</h3>
                    <p className="text-muted-foreground">{exp.role}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link 
          href="/experience" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium mt-12"
        >
          See full experience
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  )
}
