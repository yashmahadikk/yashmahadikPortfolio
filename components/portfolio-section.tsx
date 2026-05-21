import { Film, Kanban, Scan, Workflow, Bot } from "lucide-react"

const projects = [
  {
    id: "agar",
    category: "AI ENTERTAINMENT",
    title: "Agar",
    subtitle: "AI Movies/Web Series Creation",
    description: "Revolutionary AI-powered platform for creating immersive movies and web series. Leveraging generative AI to transform storytelling, enabling creators to produce high-quality visual content at unprecedented speed and scale.",
    icon: Film,
    metrics: ["Generative AI", "Content Creation", "Visual Storytelling"],
    color: "primary",
  },
  {
    id: "sprintup",
    category: "AI PRODUCTIVITY",
    title: "SprintUp",
    subtitle: "AI Project Manager",
    description: "Intelligent project management system that unifies workflows across teams. AI-driven sprint planning, automated task allocation, and predictive analytics to keep projects on track and teams aligned.",
    icon: Kanban,
    metrics: ["25% Productivity Boost", "Workflow Automation", "Sprint Planning"],
    color: "secondary",
  },
  {
    id: "measureai",
    category: "COMPUTER VISION",
    title: "MeasureAI",
    subtitle: "AI Dimension Mapper",
    description: "Cutting-edge computer vision solution that transforms customer measurement journeys. Reduced process time from 15 minutes to just 30 seconds, achieving 87% efficiency gain through intelligent automation.",
    icon: Scan,
    metrics: ["15min → 30sec", "Computer Vision", "87% Efficiency"],
    color: "accent",
  },
  {
    id: "dataflow",
    category: "DATA AUTOMATION",
    title: "DataFlow",
    subtitle: "Enterprise Automation Platform",
    description: "High-performance automation platform architected for large-scale data operations. Achieved 60% faster processing through intelligent pipeline optimization and parallel processing capabilities.",
    icon: Workflow,
    metrics: ["60% Faster", "Large-Scale Ops", "Pipeline Optimization"],
    color: "destructive",
  },
  {
    id: "agileshift",
    category: "TRANSFORMATION",
    title: "AgileShift",
    subtitle: "Organization Transformation Framework",
    description: "Comprehensive Agile transformation framework that successfully transitioned entire organizations. Achieved 100% adoption rate while significantly reducing time-to-market for product releases.",
    icon: Bot,
    metrics: ["100% Adoption", "Reduced TTM", "Cultural Shift"],
    color: "primary",
  },
]

export function PortfolioSection() {
  return (
    <section id="work" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Work
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Driving innovation at the intersection of technology and business. Specialized in AI-powered solutions and enterprise transformation.
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => {
            const Icon = project.icon
            const isEven = index % 2 === 0

            return (
              <article
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  !isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Project Visual */}
                <div className={`${!isEven ? "lg:order-2" : ""}`}>
                  <div className={`aspect-[4/3] bg-card border-2 border-border relative overflow-hidden group`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-${project.color}/20 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <Icon size={80} className="text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-4xl md:text-5xl font-bold text-primary/20 uppercase tracking-widest">
                          {project.title}
                        </span>
                      </div>
                    </div>
                    {/* Grid overlay */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="w-full h-full" style={{
                        backgroundImage: "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
                        backgroundSize: "40px 40px"
                      }} />
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className={`${!isEven ? "lg:order-1" : ""}`}>
                  <span className="text-xs font-bold text-primary uppercase tracking-widest mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    {project.subtitle}
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.metrics.map((metric, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium bg-card border border-border text-foreground uppercase tracking-wider"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                  <button className="inline-flex items-center text-primary font-semibold uppercase tracking-wider hover:underline underline-offset-4 group">
                    Learn more
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
