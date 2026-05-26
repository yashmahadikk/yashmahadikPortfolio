import { Film, Kanban, Scan, Workflow, Bot, Package } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: "agar",
    category: "AI ENTERTAINMENT",
    title: "Agar",
    subtitle: "AI Movies/Web Series Creation",
    description: "Revolutionary AI-powered platform for creating immersive movies and web series. Leveraging generative AI to transform storytelling, enabling creators to produce high-quality visual content at unprecedented speed and scale.",
    icon: Film,
    metrics: ["Generative AI", "Content Creation", "Visual Storytelling"],
    bgColor: "bg-cyan-100",
  },
  {
    id: "sprintup",
    category: "AI PRODUCTIVITY",
    title: "SprintUp",
    subtitle: "AI Project Manager",
    description: "Intelligent project management system that unifies workflows across teams. AI-driven sprint planning, automated task allocation, and predictive analytics to keep projects on track and teams aligned.",
    icon: Kanban,
    metrics: ["25% Productivity Boost", "Workflow Automation", "Sprint Planning"],
    bgColor: "bg-amber-100",
  },
  {
    id: "measureai",
    category: "COMPUTER VISION",
    title: "MeasureAI",
    subtitle: "AI Dimension Mapper",
    description: "Cutting-edge computer vision solution that transforms customer measurement journeys. Reduced process time from 15 minutes to just 30 seconds, achieving 87% efficiency gain through intelligent automation.",
    icon: Scan,
    metrics: ["15min to 30sec", "Computer Vision", "87% Efficiency"],
    bgColor: "bg-emerald-100",
  },
  {
    id: "dataflow",
    category: "DATA AUTOMATION",
    title: "DataFlow",
    subtitle: "Enterprise Automation Platform",
    description: "High-performance automation platform architected for large-scale data operations. Achieved 60% faster processing through intelligent pipeline optimization and parallel processing capabilities.",
    icon: Workflow,
    metrics: ["60% Faster", "Large-Scale Ops", "Pipeline Optimization"],
    bgColor: "bg-rose-100",
  },
  {
    id: "agileshift",
    category: "TRANSFORMATION",
    title: "AgileShift",
    subtitle: "Organization Transformation Framework",
    description: "Comprehensive Agile transformation framework that successfully transitioned entire organizations. Achieved 100% adoption rate while significantly reducing time-to-market for product releases.",
    icon: Bot,
    metrics: ["100% Adoption", "Reduced TTM", "Cultural Shift"],
    bgColor: "bg-violet-100",
  },
  {
    id: "electronic-soundbook",
    category: "PHYSICAL PRODUCT",
    title: "Electronic Soundbook",
    subtitle: "Screen-Free Learning for Toddlers",
    description: "A product development journey building a screen-free alternative to smartphones for toddlers across five global markets. Zero redesigns post-DVT, multi-language support, and compliance across US, EU, UK, GCC, and India markets.",
    icon: Package,
    metrics: ["$7 COGS", "5 Markets", "85% PSR"],
    bgColor: "bg-teal-100",
  },
]

export function PortfolioSection() {
  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-primary text-sm font-semibold tracking-wider mb-2">WORK</p>
          <h2 className="text-4xl md:text-5xl font-serif italic text-foreground">
            Products I&apos;ve Built
          </h2>
        </div>
        <div className="space-y-24">
          {projects.map((project, index) => {
            const Icon = project.icon
            const isEven = index % 2 === 0

            return (
              <article
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center`}
              >
                {/* Project Visual */}
                <div className={`${!isEven ? "lg:order-2" : ""}`}>
                  <div className={`aspect-[4/3] ${project.bgColor} relative overflow-hidden group rounded-lg`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-8">
                        <Icon size={64} className="text-foreground/70 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-3xl md:text-4xl font-bold text-foreground/30">
                          {project.title}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className={`${!isEven ? "lg:order-1" : ""}`}>
                  <span className="text-xs font-bold text-primary tracking-wide mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {project.subtitle}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <Link href={project.id === "electronic-soundbook" ? `/case-studies/electronic-soundbook` : `/work/${project.id}`} className="inline-flex items-center text-primary font-medium hover:underline underline-offset-4 group">
                    Learn more
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">&gt;</span>
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
