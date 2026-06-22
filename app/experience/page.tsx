import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Experience | Yash Mahadik',
  description: 'My professional experience in product management and operations.',
}

const experiences = [
  {
    company: 'Devanagari Ventures',
    role: 'PM & Co Founder',
    period: 'May 2024 - May 2026',
    location: 'Mumbai',
    status: 'Active',
    logo: '🚀',
    description: 'Leading product strategy and founding operations. Building growth systems for the startup ecosystem.',
    responsibilities: [
      'Product strategy and roadmap development',
      'Growth and go-to-market strategy',
      'Cross-functional team coordination',
      'Investment and partnership discussions',
    ],
    skills: ['Product Management', 'Strategy', 'Startup Growth', 'Go-to-Market'],
  },
  {
    company: 'Funspire.in',
    role: 'Product Manager',
    period: 'May 2023 - May 2024',
    location: 'Mumbai',
    status: 'Completed',
    logo: '🎯',
    description: 'Managed product development and user growth for a sports entertainment platform.',
    responsibilities: [
      'Product roadmap and feature prioritization',
      'User research and analytics',
      'Cross-team collaboration with design and engineering',
      'Performance metrics and KPI tracking',
    ],
    skills: ['Product Management', 'Sports Tech', 'User Growth', 'Analytics'],
  },
  {
    company: 'JSK Foods',
    role: 'Operations',
    period: 'Aug 2021 - Apr 2023',
    location: 'Mumbai',
    status: 'Completed',
    logo: '🍛',
    description: 'Managed operations and business development for a food service company.',
    responsibilities: [
      'Supply chain management and optimization',
      'Vendor and partner coordination',
      'Process improvement and automation',
      'Business development and market expansion',
    ],
    skills: ['Operations', 'Business Development', 'Supply Chain', 'Process Improvement'],
  },
]

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="py-20 md:py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-12">
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Experience
            </h1>
            <p className="text-lg text-muted-foreground">
              My professional journey in product management, strategy, and operations.
            </p>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className="border border-border rounded-lg p-8 hover:border-primary/50 transition-colors">
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{exp.logo}</div>
                    <div>
                      <h2 className="text-2xl font-semibold text-foreground">{exp.company}</h2>
                      <p className="text-lg text-primary font-medium mb-1">{exp.role}</p>
                      <p className="text-sm text-muted-foreground">{exp.period}</p>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-sm font-medium text-muted-foreground">{exp.location}</p>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-2 ${
                      exp.status === 'Active'
                        ? 'bg-green-500/20 text-green-300'
                        : 'bg-gray-500/20 text-gray-300'
                    }`}>
                      {exp.status}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-foreground mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Responsibilities */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Key Responsibilities</h3>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex gap-3">
                        <span className="text-primary flex-shrink-0">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div>
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Skills & Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
