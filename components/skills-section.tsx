 import { Target, LineChart, Users, Cog, Lightbulb, Wrench, Blocks, Award, BookOpen, FileText, ExternalLink } from "lucide-react"

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
    items: ["Notion", "Confluence", "Google Docs", "Google Slides", "ChatGPT"],
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
  {
    category: "Collaboration & Communication",
    items: ["Slack", "Microsoft Teams", "Google Meet", "Zoho Cliq", "Zoom", "Miro", "Figjam", "Mural", "Fireflies", "Otter"],
  },
  {
    category: "Product Marketing & GTM",
    items: ["Zoho Desk", "Mailchimp", "Clueso", "Storylane", "Gamma", "Loom", "Clipchamp"],
  },
]

const frameworks = [
  {
    category: "Strategic & Discovery",
    items: ["Product-Market Fit (PMF)", "Jobs To Be Done (JTBD)", "Lean Startup", "Design Thinking", "North Star Metric", "Aha Moment", "Porter's 5 Forces", "SWOT Analysis", "Business Model Canvas"],
  },
  {
    category: "Prioritization",
    items: ["RICE", "MoSCoW", "Kano", "Value vs Effort", "Cost of Delay", "Weighted Shortest Job First (WSJF)"],
  },
  {
    category: "Execution & Delivery",
    items: ["Agile", "Scrum", "Kanban", "OKRs", "SAFe"],
  },
  {
    category: "Growth & Metrics",
    items: ["AARRR (Pirate Metrics)", "Growth Loops", "Cohort Analysis"],
  },
  {
    category: "Experimentation & Validation",
    items: ["Hypothesis Testing", "Prototyping", "Minimum Viable Product (MVP)", "A/B Testing"],
  },
]

const certifications = [
  "Microsoft AI Product Manager",
  "Aha Product Management",
  "IBM AI Product Manager",
  "Digital Product Management",
  "Atlassian Professional Project Manager",
  "Scrum Advanced",
  "Scrum Basics",
  "Agile Project Manager LinkedIn 1, 2 & 3",
  "Mistakes to Avoid in Agile",
  "Google Project Manager",
  "Google GA4",
  "Enterprise Product Management by Microsoft",
]

const publications = [
  {
    title: "Zero To Build",
    subtitle: "A Product Manager's Guide To Create Rapid & Working Prototypes",
    type: "Book",
  },
  {
    title: "WTF Is AI",
    subtitle: "Explains how AI Works to a 10 Year Old",
    type: "Book",
  },
  {
    title: "Sustainable Business Strategies",
    subtitle: "Why Most Businesses Fail Within 5 Years of Starting",
    type: "Publication",
    journal: "International Journal for Advanced and Innovative Research (IJAIR)",
    link: "https://iaraedu.com/about-journal/ijair-volume-9-issue-4-ii-october-december-2022.php",
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 bg-muted/30 border-y border-border">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-primary text-sm font-semibold tracking-wider mb-2">SKILLS</p>
          <h2 className="text-4xl md:text-5xl font-serif italic text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            A comprehensive arsenal of competencies, tools, and frameworks that drive successful product outcomes.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
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

        {/* Tools Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Wrench size={24} className="text-primary" />
            <h3 className="text-2xl font-bold text-foreground">Tools</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="bg-background border border-border p-5 rounded-lg">
                <h4 className="font-semibold text-foreground mb-3 text-sm">{tool.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {tool.items.map((item, i) => (
                    <span key={i} className="px-2 py-1 text-xs bg-primary/10 text-primary rounded">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Frameworks Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Blocks size={24} className="text-primary" />
            <h3 className="text-2xl font-bold text-foreground">Frameworks</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {frameworks.map((framework, index) => (
              <div key={index} className="bg-background border border-border p-5 rounded-lg">
                <h4 className="font-semibold text-foreground mb-3 text-sm">{framework.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {framework.items.map((item, i) => (
                    <span key={i} className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Award size={24} className="text-primary" />
            <h3 className="text-2xl font-bold text-foreground">Certifications</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {certifications.map((cert, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-background border border-border text-foreground text-sm rounded-full hover:border-primary transition-colors"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>

        {/* Books & Publications Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <BookOpen size={24} className="text-primary" />
            <h3 className="text-2xl font-bold text-foreground">Books & Publications</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publications.map((pub, index) => (
              <div key={index} className="bg-background border border-border p-6 rounded-lg hover:border-primary transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  {pub.type === "Book" ? (
                    <BookOpen size={18} className="text-primary" />
                  ) : (
                    <FileText size={18} className="text-primary" />
                  )}
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">{pub.type}</span>
                </div>
                <h4 className="font-bold text-foreground mb-2">{pub.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">{pub.subtitle}</p>
                {pub.journal && (
                  <p className="text-xs text-muted-foreground mb-2">Published in: {pub.journal}</p>
                )}
                {pub.link && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    View Publication <ExternalLink size={14} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
