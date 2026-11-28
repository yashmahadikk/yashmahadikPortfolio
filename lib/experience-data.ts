export interface Experience {
  id: string
  company: string
  role: string
  period: string
  location: string
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
    role: "Product Manager, Growth",
    period: "Aug 2026 – Oct 2026",
    location: "Mumbai",
    logo: {
      type: "image",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2RUpg8FNZizUbD1UiveZxsPQ2fYy4W.png",
      alt: "Saleshandy logo",
    },
    description: "Worked on growth-oriented product experiences for Saleshandy’s prospecting and data-enrichment workflows, with a focus on helping sales teams find and manage leads more effectively.",
    responsibilities: [
      "Shaped the Lead Finder Import List experience so teams could bring existing prospect data into Saleshandy, match records, and avoid paying twice for leads they already owned.",
      "Defined an email lookup workflow that uses Saleshandy’s internal profile data to identify prospects from work email addresses, including individual and bulk use cases.",
      "Connected the feature requirements to prototype and product documentation for the import and lookup experiences.",
    ],
    skills: ["Product Management", "Growth", "Product Discovery", "Product Requirements"],
    projects: [
      { label: "Lead Finder - Import List", href: "/work/saleshandy-import-list" },
      { label: "Email Lookup", href: "/work/saleshandy-email-lookup" },
    ],
  },
  {
    id: "agar",
    company: "Agar",
    role: "Product Manager & Co-founder",
    period: "May 2024 – May 2026",
    location: "Mumbai",
    logo: {
      type: "image",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/agar-TPJwUgTj3YMTi4lzyuwtYKJFsxyhMl.png",
      alt: "Agar wordmark",
    },
    description: "Co-founded and led product work at Agar, where the focus was an AI-powered, personalized entertainment concept that gives viewers more control over the stories they watch. Earlier company material referred to this work as Devanagari Ventures; the experience is presented here under the Agar product name.",
    responsibilities: [
      "Developed the product direction for a personalized film and web-series creation experience, including the idea of letting viewers shape a story around their own preferences.",
      "Worked on the MVP direction with attention to video-generation costs and generation time as practical constraints for the product.",
      "Contributed to product strategy, roadmap choices, and the early go-to-market approach.",
    ],
    skills: ["Product Management", "Product Strategy", "MVP Definition", "Go-to-Market"],
    projects: [
      { label: "Agar product", href: "/work/agar" },
      { label: "SprintUp", href: "/work/sprintup" },
    ],
  },
  {
    id: "funspire",
    company: "Funspire",
    role: "Assistant Product Manager",
    period: "May 2023 – May 2024",
    location: "Mumbai",
    logo: {
      type: "image",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7iEhcu67Z4NQvKWBC9jgxBcFUSGqxs.png",
      alt: "Funspire wordmark",
    },
    description: "Funspire is where my hands-on product work started. I worked as an Assistant Product Manager on a sports-entertainment product, contributing to the product roadmap and collaborating with design and engineering to shape the experience.",
    responsibilities: [
      "Supported product roadmap planning and feature prioritization for the sports-entertainment platform.",
      "Contributed to understanding user needs and product analytics to inform product decisions.",
      "Worked with design and engineering partners to coordinate product development.",
    ],
    skills: ["Product Management", "Product Discovery", "Sports Entertainment", "Analytics"],
  },
  {
    id: "jsk-foods",
    company: "JSK Foods",
    role: "Operations",
    period: "Aug 2021 – Apr 2023",
    location: "Mumbai",
    logo: {
      type: "image",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nnWAnV2nZEdMFMSKK1CaXIy4qGutLS.png",
      alt: "JSK Snacks logo",
    },
    description: "This was my family business. We make and sell food products, including cookies, biscuits, and other baked goods. My work gave me practical exposure to the day-to-day realities of making and selling physical products.",
    responsibilities: [
      "Handled operations for the family business that makes and sells cookies, biscuits, and other baked goods.",
      "Helped coordinate suppliers and the practical steps involved in producing and selling food products.",
      "Contributed to day-to-day business operations and process improvements.",
    ],
    skills: ["Operations", "Food Production", "Supplier Coordination", "Business Operations"],
  },
]
