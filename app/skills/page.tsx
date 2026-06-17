'use client'

import { Target, LineChart, Users, Cog, Lightbulb, Wrench, Blocks, Briefcase, Award } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const workExperience = [
  {
    company: "Devanagari Ventures",
    role: "Co-Founder & Product Manager",
    period: "2024 - Present",
    description: "Founded and led AI product development with focus on innovation and market strategy.",
    responsibilities: [
      "New product development and AI solutions architecture",
      "Regulatory compliance and market adaptation",
      "Growth strategy and product retention mechanics",
      "Complete product lifecycle management",
      "Go-to-market strategy and sales alignment",
    ],
    highlights: "Led development of AGAR, SprintUp, MeasureAI, DataFlow, and AgileShift AI products"
  },
  {
    company: "Funspire.in",
    role: "Associate Product Manager",
    period: "May 2023 - May 2024",
    description: "Managed extensive operations across 300+ retail stores with comprehensive product and go-to-market responsibilities.",
    responsibilities: [
      "Managed 300+ stores in Bombay with sales team coordination",
      "Sales operations and go-to-market execution",
      "New product development and market expansion",
      "International compliance (BIS, UKCA, Gulf mark, ASTM, CE mark)",
      "Supplier sourcing and vendor relationship management",
      "Legal compliance including intellectual property rights",
      "International shipping partnerships (DHL, Blue Dart)",
      "Chinese vendor relations and supply chain optimization",
    ],
    highlights: "Handled end-to-end operations for physical product distribution across multiple geographies"
  },
  {
    company: "JSW",
    role: "Operations Specialist",
    period: "August 2021 - March 2023",
    description: "Part-time role focused on operational excellence and process optimization.",
    responsibilities: [
      "Operations management and process optimization",
      "Family business operations support",
      "Cross-functional coordination",
    ],
    highlights: "Contributed to operational efficiency in a family-run business environment"
  },
]

const skillCategories = [
  {
    title: "Product Strategy & Vision",
    icon: Target,
    skills: ["Vision Setting", "Strategy Formulation", "Roadmapping", "Problem Discovery & Validation", "Pain Point Synthesis", "Market Research", "Competitive Benchmarking", "Pricing & Monetization", "Go-to-Market Planning", "Product Lifecycle Management"],
  },
  {
    title: "Product Execution & Analytics",
    icon: LineChart,
    skills: ["Prioritization", "Trade-off Analysis", "A/B Testing & Experimentation", "Funnel & Cohort Analysis", "Customer Segmentation", "User Personas", "OKRs", "KPIs", "Metrics Tracking", "Growth Strategy"],
  },
  {
    title: "User Experience & Design",
    icon: Lightbulb,
    skills: ["User Experience Design", "Systems Thinking", "Wireframing", "Prototyping", "User Journey Mapping", "Usability Testing", "Design & Engineering Collaboration"],
  },
  {
    title: "Delivery & Process Excellence",
    icon: Cog,
    skills: ["Agile Execution", "Sprint Planning", "Iteration & Continuous Improvement", "PRD Documentation", "Cross-functional Collaboration", "Stakeholder Management", "Risk Mitigation", "Change Management"],
  },
  {
    title: "Leadership & Collaboration",
    icon: Users,
    skills: ["Team Building", "Mentorship", "Leadership", "Communication", "Conflict Resolution", "Time Management", "Cross-functional Alignment", "Organizational Scaling"],
  },
]

const tools = [
  {
    category: "Product Planning & Documentation",
    items: ["Notion", "Confluence", "Google Docs", "Google Slides", "AI Tools (Claude, ChatGPT)"],
  },
  {
    category: "Designing & Prototyping",
    items: ["Figma", "Draw.io", "Moqups", "Napkin AI", "Lovable", "Replit", "Bolt.New", "Magic Patterns"],
  },
  {
    category: "Project Management & Agile Delivery",
    items: ["Atlassian Jira", "Trello", "Zoho Projects", "Zoho Sprints"],
  },
  {
    category: "Analytics & Insights",
    items: ["Google Analytics", "Zoho Analytics", "Mixpanel", "Hotjar"],
  },
  {
    category: "User Research & Feedback",
    items: ["SurveyMonkey", "Google Forms", "Kraftful"],
  },
]

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-6 pt-32">
        <div className="max-w-6xl mx-auto">
          <p className="text-primary text-sm font-semibold tracking-wider mb-2">SKILLS</p>
          <h1 className="text-4xl md:text-6xl font-serif italic text-foreground mb-6">
            Product Management Excellence
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A comprehensive skill set spanning product strategy, execution, design, delivery, and leadership. Built through years of hands-on experience across diverse industries and scales.
          </p>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-primary text-sm font-semibold tracking-wider mb-2">EXPERIENCE</p>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground">
              Professional Journey
            </h2>
          </div>

          <div className="space-y-8">
            {workExperience.map((exp, index) => (
              <div key={index} className="bg-background rounded-lg p-8 border border-border/50 hover:border-primary/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground">{exp.role}</h3>
                    <p className="text-primary font-medium text-lg">{exp.company}</p>
                  </div>
                  <span className="text-muted-foreground font-medium mt-2 md:mt-0">{exp.period}</span>
                </div>
                
                <p className="text-muted-foreground mb-6">{exp.description}</p>
                
                <div className="mb-4">
                  <p className="text-sm font-semibold text-foreground mb-3">Key Responsibilities:</p>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-border/50">
                  <p className="text-sm text-foreground font-medium">
                    <span className="text-primary">Highlights:</span> {exp.highlights}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Categories */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <div key={index} className="bg-background rounded-lg p-8 md:p-12 border border-border/50">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <IconComponent size={24} className="text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-serif text-foreground">
                      {category.title}
                    </h2>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-3">
                    {category.skills.map((skill, i) => (
                      <div 
                        key={i} 
                        className="px-4 py-3 bg-muted/50 rounded-lg flex items-center justify-between hover:bg-muted transition-colors"
                      >
                        <span className="text-foreground font-medium text-sm">{skill}</span>
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Tools & Platforms */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-primary text-sm font-semibold tracking-wider mb-2">TOOLS & PLATFORMS</p>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground">
              Tech Stack & Software
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {tools.map((toolGroup, index) => (
              <div key={index} className="bg-muted/30 rounded-lg p-8 border border-border/50">
                <h3 className="text-lg font-semibold text-foreground mb-6">{toolGroup.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {toolGroup.items.map((tool, i) => (
                    <span 
                      key={i}
                      className="px-4 py-2 bg-background border border-border rounded-full text-sm text-foreground hover:bg-primary/5 transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
