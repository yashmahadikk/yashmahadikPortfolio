export interface Experience {
  id: string
  company: string
  role: string
  period: string
  location: string
  status: "Completed" | "Active"
  logo: { type: "image"; src: string; alt: string } | { type: "monogram"; text: string }
  description: string
  responsibilities: string[]
  skills: string[]
  projects?: { label: string; href: string }[]
}

export const experiences: Experience[] = [
  {
    id: "saleshandy",
    company: "Saleshandy",
    role: "Product Manager Growth",
    period: "Aug 2026 - Oct 2026",
    location: "Mumbai",
    status: "Completed",
    logo: {
      type: "image",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2RUpg8FNZizUbD1UiveZxsPQ2fYy4W.png",
      alt: "Saleshandy logo",
    },
    description: "Led growth-focused product initiatives and experiments to improve acquisition, activation, and customer value.",
    responsibilities: [
      "Growth strategy and experiment prioritization",
      "Product-led acquisition and activation initiatives",
      "Funnel analysis and KPI tracking",
    ],
    skills: ["Product Management", "Growth", "Experimentation", "Analytics"],
    projects: [
      { label: "Lead Finder — Import List", href: "/work/saleshandy-import-list" },
      { label: "Email Lookup", href: "/work/saleshandy-email-lookup" },
    ],
  },
  {
    id: "devanagari-ventures",
    company: "Devanagari Ventures",
    role: "PM & Co Founder",
    period: "May 2024 - May 2026",
    location: "Mumbai",
    status: "Active",
    logo: { type: "monogram", text: "DV" },
    description: "Leading product strategy and founding operations. Building growth systems for the startup ecosystem.",
    responsibilities: [
      "Product strategy and roadmap development",
      "Growth and go-to-market strategy",
      "Cross-functional team coordination",
    ],
    skills: ["Product Management", "Strategy", "Startup Growth", "Go-to-Market"],
    projects: [
      { label: "Agar", href: "/work/agar" },
      { label: "SprintUp", href: "/work/sprintup" },
    ],
  },
  {
    id: "funspire",
    company: "Funspire.in",
    role: "Product Manager",
    period: "May 2023 - May 2024",
    location: "Mumbai",
    status: "Completed",
    logo: { type: "monogram", text: "F" },
    description: "Managed product development and user growth for a sports entertainment platform.",
    responsibilities: [
      "Product roadmap and feature prioritization",
      "User research and analytics",
      "Cross-team collaboration with design and engineering",
    ],
    skills: ["Product Management", "Sports Tech", "User Growth", "Analytics"],
  },
  {
    id: "jsk-foods",
    company: "JSK Foods",
    role: "Operations",
    period: "Aug 2021 - Apr 2023",
    location: "Mumbai",
    status: "Completed",
    logo: { type: "monogram", text: "JSK" },
    description: "Managed operations and business development for a food service company.",
    responsibilities: [
      "Supply chain management and optimization",
      "Vendor and partner coordination",
      "Process improvement and automation",
    ],
    skills: ["Operations", "Business Development", "Supply Chain", "Process Improvement"],
  },
]
