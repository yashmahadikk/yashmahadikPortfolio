import { Target, LineChart, Users, Cog, Lightbulb } from "lucide-react"

const skillCategories = [
  {
    title: "Product Leadership",
    icon: Target,
    description: "End-to-end product ownership from strategy to execution, delivering AI-powered solutions that drive measurable business outcomes.",
    skills: ["Vision Setting", "Strategy Formulation", "Roadmapping", "Problem Discovery", "Go-to-Market Planning"],
  },
  {
    title: "Analytics & Execution",
    icon: LineChart,
    description: "Data-driven decision making with rigorous experimentation and metrics tracking to optimize product performance.",
    skills: ["A/B Testing", "Funnel Analysis", "Cohort Analysis", "OKRs & KPIs", "Growth Strategy"],
  },
  {
    title: "Stakeholder Management",
    icon: Users,
    description: "Proven track record of aligning cross-functional teams across technology, compliance, legal, and business units.",
    skills: ["Cross-functional Collaboration", "Leadership", "Communication", "Conflict Resolution", "Team Building"],
  },
  {
    title: "Delivery Excellence",
    icon: Cog,
    description: "Agile execution with continuous improvement, ensuring timely delivery of complex initiatives.",
    skills: ["Agile Execution", "Sprint Planning", "PRD Documentation", "Risk Mitigation", "Change Management"],
  },
  {
    title: "User Experience",
    icon: Lightbulb,
    description: "Deep understanding of user needs through research, testing, and iterative design collaboration.",
    skills: ["User Research", "Wireframing", "Prototyping", "Journey Mapping", "Usability Testing"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6 bg-muted/30 border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            A comprehensive arsenal of competencies, tools, and frameworks that drive successful product outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={index}
                className="bg-background border border-border p-6 hover:border-primary hover:shadow-md transition-all rounded-lg group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground">
                    {category.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
