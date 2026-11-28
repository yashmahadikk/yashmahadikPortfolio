"use client"

/**
 * Replace the entire contents of app/journey/page.tsx with this file.
 *
 * Uses the existing Next.js, Tailwind CSS, Figtree, Georgia,
 * Lucide icons, navigation, footer and theme variables.
 *
 * No additional dependencies or database changes are required.
 * Personal reflections are editable narrative copy.
 * Build and browser testing should be performed inside the existing project.
 */

import { useEffect, useState, useId } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Store,
  Layers,
  Rocket,
  Network,
  Compass,
  Eye,
  CircleHelp,
  FlaskConical,
  Hammer,
  BarChart3,
  RefreshCw,
  ChevronRight,
  GitBranch,
  Sparkles,
  Film,
  FileText,
  Mail,
} from "lucide-react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

/* =========================================================
   JOURNEY DATA
========================================================= */

const chapters = [
  {
    id: "operations",
    number: "01",
    year: "2021",
    period: "August 2021 — April 2023",
    organization: "JSK Foods",
    role: "Operations",
    title: "Understanding how businesses work.",
    subtitle: "Where everything began.",
    icon: Store,
    description:
      "My journey began inside my family business, where the challenges weren't theoretical. They involved real products, real customers, suppliers, production and the everyday decisions that keep a business running.",
    reflection:
      "Before understanding how to build products, I needed to understand how businesses actually work.",
    contributions: [
      "Working with suppliers and coordinating business operations.",
      "Understanding production and the economics of physical products.",
      "Exploring opportunities to improve everyday processes.",
    ],
    skills: [
      "Business Operations",
      "Supply Chain",
      "Process Improvement",
      "Vendor Management",
    ],
    projects: [],
    href: "/experience/jsk-foods",
  },
  {
    id: "product",
    number: "02",
    year: "2023",
    period: "May 2023 — May 2024",
    organization: "Funspire",
    role: "Assistant Product Manager",
    title: "Learning to build the right things.",
    subtitle: "From operations to product.",
    icon: Layers,
    description:
      "Moving into product management introduced me to a different set of questions. Instead of simply making processes work better, I began exploring what should be built, who it should be built for, and why it matters.",
    reflection:
      "Building something correctly is important. Building the right thing is even more important.",
    contributions: [
      "Contributing to product roadmap planning and prioritization.",
      "Understanding user requirements and product analytics.",
      "Collaborating with design and engineering teams.",
    ],
    skills: [
      "Product Discovery",
      "Prioritization",
      "Product Execution",
      "User Research",
    ],
    projects: [],
    href: "/experience/funspire",
  },
  {
    id: "founder",
    number: "03",
    year: "2024",
    period: "May 2024 — May 2026",
    organization: "Agar",
    role: "Product Manager & Co-founder",
    title: "Building with uncertainty.",
    subtitle: "Thinking like a founder.",
    icon: Rocket,
    description:
      "Entrepreneurship gave me the opportunity to explore ideas beyond established product boundaries. I worked on AI-powered product concepts, investigated technical feasibility, considered business models and explored how emerging technologies could enable new experiences.",
    reflection:
      "An interesting idea is not necessarily a viable product. Curiosity needs to be accompanied by discipline.",
    contributions: [
      "Exploring AI-powered entertainment experiences through AGAR.",
      "Defining MVP opportunities and practical technical constraints.",
      "Exploring agentic project management through SprintUp.",
      "Working on product positioning and go-to-market thinking.",
    ],
    skills: [
      "Entrepreneurship",
      "AI Products",
      "MVP Definition",
      "Product Strategy",
      "Go-to-Market",
    ],
    projects: [
      {
        name: "AGAR",
        description: "Exploring personalized AI-powered entertainment.",
        href: "/work/agar",
      },
      {
        name: "SprintUp",
        description: "Exploring agentic AI for project management.",
        href: "/work/sprintup",
      },
    ],
    href: "/experience/agar",
  },
  {
    id: "saas",
    number: "04",
    year: "2026",
    period: "August 2026 — October 2026",
    organization: "Saleshandy",
    role: "Product Manager, Growth",
    title: "Balancing complexity with simplicity.",
    subtitle: "Building within B2B SaaS.",
    icon: Network,
    description:
      "At Saleshandy, I worked on prospecting and data-enrichment experiences within Lead Finder. The work involved translating complex data requirements, business constraints and user needs into understandable product workflows.",
    reflection:
      "A simple user experience often requires solving a surprisingly complex problem behind the scenes.",
    contributions: [
      "Designing the Lead Finder Import List experience.",
      "Exploring CSV mapping, record matching and credit consumption.",
      "Defining email-based prospect lookup workflows.",
      "Creating product requirements and interactive prototypes.",
    ],
    skills: [
      "B2B SaaS",
      "Growth",
      "Product Requirements",
      "Data Workflows",
      "Prototyping",
    ],
    projects: [
      {
        name: "Lead Finder — Import List",
        description: "Making prospect data migration more accessible.",
        href: "/work/saleshandy-import-list",
      },
      {
        name: "Email Lookup",
        description: "Finding prospect profiles through email addresses.",
        href: "/work/saleshandy-email-lookup",
      },
    ],
    href: "/experience/saleshandy",
  },
  {
    id: "next",
    number: "05",
    year: "Now",
    period: "November 2026 — Present",
    organization: "An independent chapter",
    role: "Learning, exploring and building",
    title: "Still figuring things out.",
    subtitle: "The journey continues.",
    icon: Compass,
    description:
      "Having explored business operations, product management, entrepreneurship and SaaS, I continue to question how products work and how they could work better. My interests span artificial intelligence, business strategy, technology and human behaviour.",
    reflection:
      "There is always another question worth asking and another assumption worth challenging.",
    contributions: [
      "Exploring independent product and business hypotheses.",
      "Writing about product strategy and technology.",
      "Experimenting with AI-powered tools and prototypes.",
      "Exploring new professional opportunities.",
    ],
    skills: [
      "Continuous Learning",
      "Product Research",
      "AI Exploration",
      "Experimentation",
    ],
    projects: [],
    href: "/case-studies",
  },
]

const featuredProjects = [
  {
    name: "AGAR",
    category: "AI & ENTERTAINMENT",
    year: "2024 — 2026",
    description:
      "Exploring a future where entertainment experiences can adapt to the imagination and preferences of individual viewers.",
    href: "/work/agar",
    illustration: "film",
  },
  {
    name: "SprintUp",
    category: "AGENTIC AI",
    year: "2024 — 2026",
    description:
      "Reimagining project management through intelligent automation and conversational interfaces.",
    href: "/work/sprintup",
    illustration: "workflow",
  },
  {
    name: "Lead Finder — Import List",
    category: "B2B SAAS",
    year: "2026",
    description:
      "Designing a more accessible way for sales teams to bring existing prospect data into Lead Finder.",
    href: "/work/saleshandy-import-list",
    illustration: "database",
  },
  {
    name: "Email Lookup",
    category: "DATA ENRICHMENT",
    year: "2026",
    description:
      "Exploring how email addresses can become an effective starting point for finding relevant prospect profiles.",
    href: "/work/saleshandy-email-lookup",
    illustration: "search",
  },
]

const principles = [
  {
    number: "01",
    title: "Understand before solving.",
    description:
      "A solution is only as valuable as the problem it addresses. Start with context, users and constraints rather than jumping directly into features.",
    icon: Eye,
  },
  {
    number: "02",
    title: "Question the obvious.",
    description:
      "Existing conventions are not necessarily the best solutions. Challenge assumptions, including the ones that initially appear reasonable.",
    icon: CircleHelp,
  },
  {
    number: "03",
    title: "Build to learn.",
    description:
      "A prototype is not just a deliverable. It is a way of discovering what works, exposing uncertainty and making better decisions.",
    icon: FlaskConical,
  },
  {
    number: "04",
    title: "Complexity is not value.",
    description:
      "The best experiences often emerge from simplifying complicated systems without compromising their underlying capabilities.",
    icon: Layers,
  },
  {
    number: "05",
    title: "Think beyond the interface.",
    description:
      "A product decision must consider business viability, technical feasibility, customer behaviour and operational consequences.",
    icon: Network,
  },
  {
    number: "06",
    title: "Remain curious.",
    description:
      "Knowledge changes, technologies evolve and assumptions become outdated. Learning is not a separate activity from building products.",
    icon: Compass,
  },
]

const thinkingStages = [
  {
    name: "Observe",
    icon: Eye,
    description:
      "Understand people, existing behaviour, business context and the problems that are worth investigating.",
  },
  {
    name: "Question",
    icon: CircleHelp,
    description:
      "Challenge existing assumptions. Explore why the problem exists and whether it is worth solving.",
  },
  {
    name: "Validate",
    icon: FlaskConical,
    description:
      "Evaluate customer demand, technical feasibility, business viability and alternative approaches.",
  },
  {
    name: "Build",
    icon: Hammer,
    description:
      "Translate the most promising solution into a prototype, experiment or product experience.",
  },
  {
    name: "Measure",
    icon: BarChart3,
    description:
      "Understand how the solution performs against its intended objectives and success criteria.",
  },
  {
    name: "Learn",
    icon: RefreshCw,
    description:
      "Reflect on the outcome, refine the assumptions and carry the learning into the next decision.",
  },
]

/* =========================================================
   SHARED COMPONENTS
========================================================= */

function SectionHeading({
  number,
  eyebrow,
  title,
  description,
}: {
  number: string
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <header className="mb-8 md:mb-12">
      <div className="mb-4 flex items-center gap-3">
        <span className="font-mono text-xs text-muted-foreground">
          {number}
        </span>

        <span className="h-px w-8 bg-border" />

        <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          {eyebrow}
        </span>
      </div>

      <h2 className="text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </header>
  )
}

function SectionDivider() {
  return <div className="h-px w-full bg-border" />
}

/* =========================================================
   HERO SVG — WINDING JOURNEY
========================================================= */

function JourneyPath() {
  const patternId = useId()

  const milestones = [
    { x: 48, y: 225, year: "2021", label: "Operations" },
    { x: 155, y: 163, year: "2023", label: "Product" },
    { x: 270, y: 193, year: "2024", label: "Entrepreneurship" },
    { x: 385, y: 96, year: "2026", label: "SaaS" },
  ]

  return (
    <svg
      viewBox="0 0 540 300"
      className="h-auto w-full"
      role="img"
      aria-label="An illustrated winding path showing my journey from business operations through product management, entrepreneurship and SaaS."
    >
      <defs>
        <pattern
          id={patternId}
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <circle
            cx="2"
            cy="2"
            r="0.8"
            fill="currentColor"
            opacity="0.13"
          />
        </pattern>
      </defs>

      <rect
        width="540"
        height="300"
        rx="8"
        fill={`url(#${patternId})`}
      />

      {/* Background guide lines */}

      <g
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.08"
        strokeDasharray="3 7"
      >
        <path d="M48 20 V270" />
        <path d="M155 20 V270" />
        <path d="M270 20 V270" />
        <path d="M385 20 V270" />
      </g>

      {/* Winding path */}

      <path
        d="
          M 48 225
          C 85 225, 95 163, 155 163
          S 225 193, 270 193
          S 325 96, 385 96
          S 445 130, 494 42
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="5 8"
        strokeLinecap="round"
        opacity="0.25"
      />

      <path
        d="
          M 48 225
          C 85 225, 95 163, 155 163
          S 225 193, 270 193
          S 325 96, 385 96
          S 445 130, 494 42
        "
        fill="none"
        stroke="var(--primary)"
        strokeWidth="2"
        strokeLinecap="round"
        pathLength="100"
        className="journey-draw-path"
      />

      {/* Milestone markers */}

      {milestones.map((point) => (
        <g key={point.label}>
          <circle
            cx={point.x}
            cy={point.y}
            r="12"
            fill="var(--background)"
            stroke="var(--primary)"
            strokeWidth="1"
            opacity="0.95"
          />

          <circle
            cx={point.x}
            cy={point.y}
            r="4"
            fill="var(--primary)"
          />

          <text
            x={point.x}
            y={point.y + 28}
            textAnchor="middle"
            fontSize="11"
            fontWeight="600"
            fill="currentColor"
          >
            {point.year}
          </text>

          <text
            x={point.x}
            y={point.y + 44}
            textAnchor="middle"
            fontSize="10"
            fill="currentColor"
            opacity="0.55"
          >
            {point.label}
          </text>
        </g>
      ))}

      {/* Unfinished destination */}

      <circle
        cx="494"
        cy="42"
        r="22"
        fill="none"
        stroke="var(--primary)"
        strokeWidth="0.8"
        strokeDasharray="3 5"
        className="journey-orbit"
      />

      <circle
        cx="494"
        cy="42"
        r="12"
        fill="var(--background)"
        stroke="var(--primary)"
        strokeWidth="1.5"
      />

      <circle cx="494" cy="42" r="4" fill="var(--primary)" />

      <text
        x="494"
        y="80"
        fontSize="11"
        textAnchor="middle"
        fill="currentColor"
      >
        Next?
      </text>

      {/* Small editorial annotation */}

      <text
        x="24"
        y="30"
        fontSize="9"
        letterSpacing="1.6"
        fill="currentColor"
        opacity="0.35"
      >
        AN UNFINISHED JOURNEY
      </text>

      <text
        x="516"
        y="280"
        textAnchor="end"
        fontSize="9"
        letterSpacing="1"
        fill="currentColor"
        opacity="0.35"
      >
        NOT TO SCALE
      </text>
    </svg>
  )
}

/* =========================================================
   ORIGINAL SVG ILLUSTRATIONS
========================================================= */

function ChapterIllustration({ type }: { type: string }) {
  const patternId = useId()

  return (
    <svg
      viewBox="0 0 320 240"
      className="h-auto w-full"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <defs>
        <pattern
          id={patternId}
          width="16"
          height="16"
          patternUnits="userSpaceOnUse"
        >
          <circle
            cx="1"
            cy="1"
            r="0.7"
            fill="currentColor"
            stroke="none"
            opacity="0.14"
          />
        </pattern>
      </defs>

      <rect
        width="320"
        height="240"
        fill={`url(#${patternId})`}
        stroke="none"
      />

      {/* OPERATIONS — STOREFRONT AND SUPPLY */}

      {type === "operations" && (
        <>
          <path d="M30 205 H290" opacity="0.2" />

          <rect x="85" y="85" width="150" height="120" rx="3" />

          <path
            d="M70 85 L90 45 H230 L250 85 Z"
            fill="var(--primary)"
            fillOpacity="0.08"
          />

          {[98, 128, 158, 188, 218].map((x) => (
            <path key={x} d={`M${x} 46 L${x - 5} 85`} />
          ))}

          <path
            d="
              M70 85
              Q82 108 94 85
              Q106 108 118 85
              Q130 108 142 85
              Q154 108 166 85
              Q178 108 190 85
              Q202 108 214 85
              Q226 108 238 85
              Q244 100 250 85
            "
            fill="var(--background)"
          />

          <rect x="105" y="122" width="65" height="49" rx="2" />

          <path d="M137.5 122 V171 M105 146 H170" />

          <rect
            x="187"
            y="122"
            width="30"
            height="83"
            rx="2"
            fill="var(--primary)"
            fillOpacity="0.07"
          />

          <circle cx="209" cy="167" r="1.5" />

          <rect
            x="38"
            y="170"
            width="32"
            height="35"
            rx="2"
            fill="var(--background)"
          />

          <path d="M38 182 H70 M54 170 V182" />

          <rect
            x="250"
            y="181"
            width="31"
            height="24"
            rx="2"
            fill="var(--background)"
          />

          <path d="M265 181 V192" />

          <path d="M25 120 H65" strokeDasharray="3 5" opacity="0.4" />

          <circle cx="25" cy="120" r="3" fill="var(--primary)" />

          <path d="M270 35 V49 M263 42 H277" opacity="0.45" />

          <text
            x="160"
            y="226"
            textAnchor="middle"
            fontSize="9"
            letterSpacing="2"
            fill="currentColor"
            stroke="none"
            opacity="0.4"
          >
            BUSINESS FUNDAMENTALS
          </text>
        </>
      )}

      {/* PRODUCT — WIREFRAME */}

      {type === "product" && (
        <>
          <rect
            x="45"
            y="35"
            width="230"
            height="150"
            rx="7"
            fill="var(--background)"
          />

          <path d="M45 60 H275" />

          {[58, 68, 78].map((x) => (
            <circle key={x} cx={x} cy="48" r="2" />
          ))}

          <rect
            x="59"
            y="75"
            width="66"
            height="95"
            rx="3"
            fill="var(--primary)"
            fillOpacity="0.07"
          />

          <circle cx="92" cy="100" r="11" />

          <path d="M72 137 Q92 113 112 137" />

          <path d="M72 150 H112" opacity="0.35" />

          <rect x="140" y="76" width="120" height="32" rx="3" />

          <path d="M151 87 H230 M151 97 H210" opacity="0.45" />

          <rect x="140" y="120" width="54" height="50" rx="3" />

          <rect x="206" y="120" width="54" height="50" rx="3" />

          <path d="M153 133 H181 M153 142 H175" opacity="0.4" />

          <path d="M220 146 L231 135 L244 153" />

          <path
            d="M209 160 L228 202 L236 188 L252 183 Z"
            fill="var(--primary)"
            fillOpacity="0.2"
          />

          <circle
            cx="209"
            cy="160"
            r="13"
            stroke="var(--primary)"
            strokeDasharray="2 4"
            opacity="0.5"
          />

          <path d="M20 88 H45" strokeDasharray="3 5" opacity="0.4" />

          <circle cx="20" cy="88" r="3" fill="var(--primary)" />

          <text
            x="160"
            y="226"
            textAnchor="middle"
            fontSize="9"
            letterSpacing="2"
            fill="currentColor"
            stroke="none"
            opacity="0.4"
          >
            PROBLEM TO PRODUCT
          </text>
        </>
      )}

      {/* FOUNDER — ROCKET AND ORBIT */}

      {type === "founder" && (
        <>
          <ellipse
            cx="160"
            cy="118"
            rx="126"
            ry="49"
            transform="rotate(-30 160 118)"
            strokeDasharray="4 7"
            opacity="0.35"
          />

          <ellipse
            cx="160"
            cy="118"
            rx="126"
            ry="49"
            transform="rotate(30 160 118)"
            strokeDasharray="4 7"
            opacity="0.2"
          />

          <path
            d="M160 27 Q200 76 181 140 H139 Q120 76 160 27 Z"
            fill="var(--primary)"
            fillOpacity="0.1"
          />

          <circle
            cx="160"
            cy="85"
            r="16"
            fill="var(--background)"
          />

          <circle cx="160" cy="85" r="8" opacity="0.35" />

          <path
            d="M134 110 L109 156 L140 145"
            fill="var(--background)"
          />

          <path
            d="M186 110 L211 156 L180 145"
            fill="var(--background)"
          />

          <path d="M144 140 L147 151 H173 L176 140" />

          <path
            d="M149 158 Q160 207 171 158"
            stroke="var(--primary)"
            fill="var(--primary)"
            fillOpacity="0.08"
          />

          <path d="M160 165 V182" stroke="var(--primary)" />

          <circle cx="55" cy="155" r="6" fill="var(--background)" />

          <circle cx="265" cy="75" r="5" fill="var(--primary)" />

          <circle cx="70" cy="45" r="3" opacity="0.4" />

          <path d="M250 170 V184 M243 177 H257" opacity="0.4" />

          <path d="M100 20 V30 M95 25 H105" opacity="0.4" />

          <text
            x="160"
            y="226"
            textAnchor="middle"
            fontSize="9"
            letterSpacing="2"
            fill="currentColor"
            stroke="none"
            opacity="0.4"
          >
            EXPLORING THE POSSIBLE
          </text>
        </>
      )}

      {/* SAAS — CONNECTED DATA SYSTEM */}

      {type === "saas" && (
        <>
          {[55, 115, 175].map((y) => (
            <g key={y}>
              <rect
                x="22"
                y={y - 17}
                width="72"
                height="34"
                rx="4"
                fill="var(--background)"
              />

              <circle
                cx="35"
                cy={y}
                r="4"
                fill="var(--primary)"
                fillOpacity="0.3"
              />

              <path
                d={`M45 ${y - 4} H81 M45 ${y + 4} H72`}
                opacity="0.5"
              />

              <path
                d={`M94 ${y} C120 ${y}, 120 115, 132 115`}
                strokeDasharray="3 5"
                opacity="0.5"
              />
            </g>
          ))}

          <rect
            x="132"
            y="75"
            width="57"
            height="80"
            rx="6"
            fill="var(--primary)"
            fillOpacity="0.1"
          />

          {[92, 115, 138].map((y) => (
            <g key={y}>
              <rect x="143" y={y - 6} width="35" height="12" rx="2" />

              <circle cx="150" cy={y} r="1.5" fill="var(--primary)" />

              <path d={`M156 ${y} H171`} opacity="0.4" />
            </g>
          ))}

          {[70, 160].map((y) => (
            <g key={y}>
              <path
                d={`M189 115 C218 115, 210 ${y}, 233 ${y}`}
                strokeDasharray="3 5"
                opacity="0.55"
              />

              <rect
                x="233"
                y={y - 25}
                width="65"
                height="50"
                rx="4"
                fill="var(--background)"
              />

              <circle
                cx="250"
                cy={y - 5}
                r="7"
                fill="var(--primary)"
                fillOpacity="0.15"
              />

              <path
                d={`M241 ${y + 11} Q250 ${y + 1} 259 ${y + 11}`}
              />

              <path
                d={`M269 ${y - 5} H287 M269 ${y + 3} H281`}
                opacity="0.5"
              />
            </g>
          ))}

          <circle
            cx="160"
            cy="115"
            r="58"
            stroke="var(--primary)"
            opacity="0.2"
            strokeDasharray="3 6"
          />

          <text
            x="160"
            y="226"
            textAnchor="middle"
            fontSize="9"
            letterSpacing="2"
            fill="currentColor"
            stroke="none"
            opacity="0.4"
          >
            CONNECTING COMPLEX SYSTEMS
          </text>
        </>
      )}

      {/* NEXT CHAPTER — COMPASS */}

      {type === "next" && (
        <>
          <circle cx="160" cy="115" r="85" opacity="0.25" />

          <circle
            cx="160"
            cy="115"
            r="71"
            strokeDasharray="2 7"
            opacity="0.4"
          />

          <circle cx="160" cy="115" r="56" opacity="0.2" />

          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
            const rad = (angle * Math.PI) / 180

            return (
              <path
                key={angle}
                d={`
                  M${160 + Math.cos(rad) * 73}
                  ${115 + Math.sin(rad) * 73}
                  L${160 + Math.cos(rad) * 85}
                  ${115 + Math.sin(rad) * 85}
                `}
                opacity="0.5"
              />
            )
          })}

          <g transform="rotate(30 160 115)">
            <path
              d="M160 51 L178 115 L160 179 L142 115 Z"
              fill="var(--background)"
            />

            <path
              d="M160 51 L178 115 L160 109 L142 115 Z"
              fill="var(--primary)"
              fillOpacity="0.7"
              stroke="var(--primary)"
            />
          </g>

          <circle
            cx="160"
            cy="115"
            r="5"
            fill="var(--background)"
          />

          <text
            x="160"
            y="20"
            fontSize="11"
            textAnchor="middle"
            fill="currentColor"
            stroke="none"
            opacity="0.5"
          >
            N
          </text>

          <path
            d="M35 190 C85 210 112 187 130 169"
            stroke="var(--primary)"
            strokeDasharray="4 6"
            opacity="0.6"
          />

          <path
            d="M196 65 C230 37 260 60 290 24"
            stroke="var(--primary)"
            strokeDasharray="4 6"
            opacity="0.6"
          />

          <circle cx="290" cy="24" r="5" stroke="var(--primary)" />

          <text
            x="160"
            y="226"
            textAnchor="middle"
            fontSize="9"
            letterSpacing="2"
            fill="currentColor"
            stroke="none"
            opacity="0.4"
          >
            THE UNKNOWN IS AN OPPORTUNITY
          </text>
        </>
      )}
    </svg>
  )
}

/* =========================================================
   HERO SECTION
========================================================= */

function JourneyHero() {
  return (
    <section className="border-b border-border px-5 pb-12 pt-32 md:px-6 md:pb-24 md:pt-40">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/"
          className="mb-10 inline-flex min-h-11 items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to home
        </Link>

        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <div>
            <div className="mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              <span className="size-1.5 rounded-full bg-primary" />
              The story so far
            </div>

            <h1 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.1] tracking-tight text-foreground">
              Never a straight line.
              <span className="mt-2 block italic text-muted-foreground">
                Always moving forward.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              From understanding how a business operates to building
              products, exploring artificial intelligence and questioning
              how things could work better.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Not a perfectly planned career. Just a collection of
              experiences, questions, experiments and things I&apos;ve
              learned along the way.
            </p>

            <a
              href="#chapters"
              className="mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              Explore the journey
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>

          <div className="relative">
            <JourneyPath />
          </div>
        </div>

        {/* Journey overview */}

        <div className="mt-12 grid grid-cols-3 divide-x divide-border border-y border-border py-6 md:mt-20 md:py-9">
          <div className="pr-3 md:pr-8">
            <p className="font-serif text-3xl tabular-nums md:text-5xl">
              2021
            </p>

            <p className="mt-2 text-xs leading-relaxed text-muted-foreground md:text-sm">
              Where it began
            </p>
          </div>

          <div className="px-4 md:px-8">
            <p className="font-serif text-3xl tabular-nums md:text-5xl">
              04
            </p>

            <p className="mt-2 text-xs leading-relaxed text-muted-foreground md:text-sm">
              Completed chapters
            </p>
          </div>

          <div className="pl-4 md:pl-8">
            <p className="font-serif text-3xl md:text-5xl">∞</p>

            <p className="mt-2 text-xs leading-relaxed text-muted-foreground md:text-sm">
              More to learn
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* =========================================================
   INTERACTIVE CAREER TIMELINE
========================================================= */

function CareerTimeline() {
  const [activeChapter, setActiveChapter] = useState(0)

  const chapter = chapters[activeChapter]
  const ActiveIcon = chapter.icon

  function changeChapter(index: number) {
    if (index >= 0 && index < chapters.length) {
      setActiveChapter(index)
    }
  }

  return (
    <section
      id="chapters"
      className="scroll-mt-32 border-b border-border px-5 py-12 md:px-6 md:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          number="01"
          eyebrow="The timeline"
          title="Different chapters. Different questions."
          description="Each chapter introduced a new perspective on business, products, technology and the people who use them."
        />

        {/* Timeline navigation */}

        <div
          className="relative mb-8"
          role="group"
          aria-label="Journey chapters"
        >
          <div className="absolute left-[10%] right-[10%] top-6 h-px bg-border" />

          <div
            className="absolute left-[10%] top-6 h-px bg-primary transition-all duration-500 motion-reduce:transition-none"
            style={{
              width: `${(activeChapter / (chapters.length - 1)) * 80}%`,
            }}
          />

          <div className="relative grid grid-cols-5">
            {chapters.map((item, index) => {
              const Icon = item.icon
              const isActive = activeChapter === index

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => changeChapter(index)}
                  aria-pressed={isActive}
                  aria-label={`${item.year}: ${item.organization}`}
                  className="group flex min-w-0 flex-col items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span
                    className={`
                      flex size-12 items-center justify-center
                      rounded-full border bg-background
                      transition-all duration-300
                      ${
                        isActive
                          ? "border-primary text-primary ring-4 ring-primary/10"
                          : "border-border text-muted-foreground group-hover:border-primary group-hover:text-primary"
                      }
                    `}
                  >
                    <Icon size={19} aria-hidden="true" />
                  </span>

                  <span
                    className={`text-xs font-medium md:text-sm ${
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {item.year}
                  </span>

                  <span className="hidden max-w-full truncate text-xs text-muted-foreground sm:block">
                    {item.id === "next" ? "Next chapter" : item.organization}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Interactive chapter content */}

        <article
          key={chapter.id}
          aria-label={`Chapter ${chapter.number}`}
          className="journey-enter overflow-hidden rounded-lg border border-border"
        >
          <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-4 md:px-8">
            <div className="flex items-center gap-2">
              <ActiveIcon
                size={16}
                className="text-primary"
                aria-hidden="true"
              />

              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Chapter {chapter.number}
              </span>
            </div>

            <span className="text-right text-xs text-muted-foreground">
              {chapter.period}
            </span>
          </div>

          <div className="grid lg:grid-cols-[1.25fr_0.75fr]">
            <div className="p-5 sm:p-8 md:p-10">
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-primary">
                {chapter.subtitle}
              </p>

              <h3 className="font-serif text-3xl leading-tight tracking-tight md:text-4xl">
                {chapter.title}
              </h3>

              <div className="mt-4">
                <p className="font-semibold">{chapter.organization}</p>

                <p className="mt-1 text-sm text-muted-foreground">
                  {chapter.role}
                </p>
              </div>

              <p className="mt-6 text-base leading-[1.85] text-muted-foreground">
                {chapter.description}
              </p>

              <div className="mt-8">
                <p className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  What I worked on
                </p>

                <ul className="space-y-4">
                  {chapter.contributions.map((contribution) => (
                    <li
                      key={contribution}
                      className="flex items-start gap-3 text-sm leading-relaxed text-foreground"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />

                      <span>{contribution}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {chapter.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-sm border border-border px-2.5 py-1.5 text-xs text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center border-t border-border bg-muted/20 p-6 lg:border-l lg:border-t-0">
              <ChapterIllustration type={chapter.id} />

              <div className="mt-5 border-t border-border pt-5">
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  A lesson from this chapter
                </p>

                <blockquote className="mt-4 font-serif text-xl italic leading-relaxed text-foreground md:text-2xl">
                  “{chapter.reflection}”
                </blockquote>
              </div>
            </div>
          </div>

          {/* Related project links */}

          {chapter.projects.length > 0 && (
            <div className="border-t border-border px-5 py-6 md:px-10">
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Related work
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {chapter.projects.map((project) => (
                  <Link
                    key={project.href}
                    href={project.href}
                    className="group flex items-center justify-between gap-4 rounded-md border border-border p-4 transition-colors hover:border-primary/60"
                  >
                    <div>
                      <p className="text-sm font-medium group-hover:text-primary">
                        {project.name}
                      </p>

                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        {project.description}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={16}
                      className="shrink-0 text-muted-foreground group-hover:text-primary"
                      aria-hidden="true"
                    />
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="border-t border-border px-5 py-4 md:px-10">
            <Link
              href={chapter.href}
              className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              {chapter.id === "next"
                ? "Explore my independent work"
                : "Explore this experience"}

              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </article>

        {/* Progress indicator */}

        <div className="mt-6 flex items-center justify-between gap-3">
          <button
            type="button"
            disabled={activeChapter === 0}
            onClick={() => changeChapter(activeChapter - 1)}
            className="inline-flex min-h-11 items-center gap-2 rounded border border-border px-3 text-sm transition-colors hover:border-foreground disabled:cursor-not-allowed disabled:opacity-35 sm:px-4"
          >
            <ArrowLeft size={15} aria-hidden="true" />
            Previous
          </button>

          <div className="flex max-w-32 flex-1 flex-col items-center gap-2">
            <p
              className="text-xs tabular-nums text-muted-foreground"
              aria-live="polite"
            >
              {String(activeChapter + 1).padStart(2, "0")} / 05
            </p>

            <div
              className="h-1 w-full overflow-hidden rounded-full bg-muted"
              role="progressbar"
              aria-label="Selected chapter"
              aria-valuemin={1}
              aria-valuemax={5}
              aria-valuenow={activeChapter + 1}
            >
              <div
                className="h-full rounded-full bg-primary transition-all duration-500 motion-reduce:transition-none"
                style={{
                  width: `${((activeChapter + 1) / chapters.length) * 100}%`,
                }}
              />
            </div>
          </div>

          <button
            type="button"
            disabled={activeChapter === chapters.length - 1}
            onClick={() => changeChapter(activeChapter + 1)}
            className="inline-flex min-h-11 items-center gap-2 rounded border border-border px-3 text-sm transition-colors hover:border-foreground disabled:cursor-not-allowed disabled:opacity-35 sm:px-4"
          >
            Next
            <ArrowRight size={15} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}

/* =========================================================
   MINIATURE PROJECT ILLUSTRATIONS
========================================================= */

function ProjectIllustration({ type }: { type: string }) {
  return (
    <svg
      viewBox="0 0 260 130"
      className="h-auto w-full"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {type === "film" && (
        <>
          <rect
            x="34"
            y="17"
            width="192"
            height="96"
            rx="5"
            opacity="0.7"
          />

          <path d="M34 33 H226 M34 97 H226" opacity="0.5" />

          {Array.from({ length: 10 }).map((_, index) => (
            <g key={index} opacity="0.4">
              <rect
                x={42 + index * 18}
                y="22"
                width="10"
                height="6"
                rx="1"
              />

              <rect
                x={42 + index * 18}
                y="102"
                width="10"
                height="6"
                rx="1"
              />
            </g>
          ))}

          <path
            d="M34 97 L90 51 L134 97 M105 97 L170 43 L226 97"
            fill="var(--primary)"
            fillOpacity="0.06"
          />

          <circle
            cx="130"
            cy="65"
            r="19"
            fill="var(--background)"
            stroke="var(--primary)"
          />

          <path
            d="M125 55 L140 65 L125 75 Z"
            fill="var(--primary)"
            stroke="none"
          />

          <path d="M205 44 V56 M199 50 H211" opacity="0.5" />
        </>
      )}

      {type === "workflow" && (
        <>
          <rect x="17" y="43" width="64" height="44" rx="4" />

          <path d="M29 57 H66 M29 65 H58 M29 73 H63" opacity="0.5" />

          <path d="M81 65 H108" strokeDasharray="3 4" />

          <rect
            x="108"
            y="42"
            width="44"
            height="46"
            rx="5"
            fill="var(--primary)"
            fillOpacity="0.1"
          />

          <path d="M130 51 V79 M116 65 H144" stroke="var(--primary)" />

          {[34, 65, 96].map((y) => (
            <g key={y}>
              <path
                d={`M152 65 Q170 65 180 ${y} H191`}
                strokeDasharray="3 4"
                opacity="0.5"
              />

              <rect x="191" y={y - 12} width="53" height="24" rx="3" />

              <circle cx="202" cy={y} r="3" fill="var(--primary)" />

              <path d={`M210 ${y} H235`} opacity="0.5" />
            </g>
          ))}
        </>
      )}

      {type === "database" && (
        <>
          <rect x="18" y="20" width="224" height="90" rx="5" />

          <path d="M18 41 H242" />

          <circle cx="29" cy="31" r="2" />
          <circle cx="37" cy="31" r="2" />
          <circle cx="45" cy="31" r="2" />

          <path d="M90 41 V110 M166 41 V110" opacity="0.4" />

          {[57, 74, 91].map((y) => (
            <g key={y}>
              <path d={`M18 ${y + 8} H242`} opacity="0.2" />

              <path
                d={`M30 ${y} H75 M102 ${y} H151 M179 ${y} H229`}
                opacity="0.5"
              />

              <rect
                x="96"
                y={y - 6}
                width="60"
                height="12"
                rx="2"
                fill="var(--primary)"
                fillOpacity="0.08"
                stroke="var(--primary)"
                strokeOpacity="0.3"
              />
            </g>
          ))}
        </>
      )}

      {type === "search" && (
        <>
          <rect x="22" y="17" width="216" height="96" rx="5" />

          <rect x="34" y="29" width="141" height="22" rx="3" />

          <text
            x="43"
            y="43"
            fontSize="8"
            fill="currentColor"
            stroke="none"
            opacity="0.6"
          >
            name@example.com
          </text>

          <rect
            x="184"
            y="29"
            width="42"
            height="22"
            rx="3"
            fill="var(--primary)"
            fillOpacity="0.1"
            stroke="var(--primary)"
          />

          <circle cx="203" cy="38" r="4" stroke="var(--primary)" />

          <path d="M206 41 L210 45" stroke="var(--primary)" />

          <rect x="34" y="64" width="192" height="37" rx="3" />

          <circle
            cx="52"
            cy="81"
            r="10"
            fill="var(--primary)"
            fillOpacity="0.1"
          />

          <circle cx="52" cy="78" r="3" />

          <path d="M46 87 Q52 80 58 87" />

          <path d="M71 77 H141 M71 87 H119" opacity="0.5" />

          <circle cx="211" cy="82" r="7" stroke="var(--primary)" />

          <path d="M207 82 L210 85 L215 79" stroke="var(--primary)" />
        </>
      )}
    </svg>
  )
}

/* =========================================================
   PROJECTS SECTION
========================================================= */

function JourneyProjects() {
  return (
    <section className="border-b border-border px-5 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          number="02"
          eyebrow="Ideas into reality"
          title="Things I've built along the way."
          description="A few selected projects that reflect the different questions and problems I've explored."
        />

        <div className="grid gap-4 sm:grid-cols-2 md:gap-6">
          {featuredProjects.map((project) => (
            <Link
              key={project.name}
              href={project.href}
              className="group overflow-hidden rounded-lg border border-border transition-colors hover:border-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <div className="border-b border-border bg-muted/30 px-8 py-6 text-muted-foreground transition-colors group-hover:text-primary">
                <ProjectIllustration type={project.illustration} />
              </div>

              <div className="p-5 md:p-7">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-medium tracking-widest text-muted-foreground">
                    {project.category}
                  </span>

                  <span className="text-xs text-muted-foreground">
                    {project.year}
                  </span>
                </div>

                <h3 className="mt-3 font-serif text-2xl leading-snug transition-colors group-hover:text-primary">
                  {project.name}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-6 flex min-h-11 items-center justify-between border-t border-border pt-3 text-sm font-medium">
                  Explore project

                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="/work"
          className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          View all work
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}

/* =========================================================
   PROFESSIONAL EVOLUTION CHART
========================================================= */

const focusAreas = [
  {
    name: "Business operations",
    period: "2021 — 2023",
    start: "2021-08",
    end: "2023-04",
    icon: Store,
  },
  {
    name: "Product execution",
    period: "2023 — 2024",
    start: "2023-05",
    end: "2024-05",
    icon: Layers,
  },
  {
    name: "Product strategy",
    period: "2024 — 2026",
    start: "2024-05",
    end: "2026-05",
    icon: GitBranch,
  },
  {
    name: "Entrepreneurship",
    period: "2024 — 2026",
    start: "2024-05",
    end: "2026-05",
    icon: Rocket,
  },
  {
    name: "AI products",
    period: "2024 — 2026",
    start: "2024-05",
    end: "2026-05",
    icon: Sparkles,
  },
  {
    name: "B2B SaaS",
    period: "Aug — Oct 2026",
    start: "2026-08",
    end: "2026-10",
    icon: Network,
  },
]

function monthIndex(date: string) {
  const [year, month] = date.split("-").map(Number)

  return (year - 2021) * 12 + month - 1
}

const totalMonths = 72

function ProfessionalEvolution() {
  const [activeArea, setActiveArea] = useState<string | null>(null)

  return (
    <section className="border-b border-border px-5 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          number="03"
          eyebrow="Professional evolution"
          title="How my focus has changed."
          description="Not a collection of skill scores, but a chronological view of the different areas I've worked in."
        />

        <div className="rounded-lg border border-border p-5 md:p-8">
          {/* Desktop chart */}

          <div className="hidden md:block">
            <div className="mb-5 grid grid-cols-[190px_1fr] gap-6">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">
                Area of work
              </span>

              <div className="relative h-6">
                {[2021, 2022, 2023, 2024, 2025, 2026].map(
                  (year, index) => (
                    <span
                      key={year}
                      className="absolute text-xs tabular-nums text-muted-foreground"
                      style={{
                        left: `${(index / 6) * 100}%`,
                      }}
                    >
                      {year}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="space-y-3">
              {focusAreas.map((area) => {
                const Icon = area.icon
                const start = (monthIndex(area.start) / totalMonths) * 100
                const width =
                  ((monthIndex(area.end) - monthIndex(area.start) + 1) /
                    totalMonths) *
                  100

                const selected = activeArea === area.name

                return (
                  <button
                    type="button"
                    key={area.name}
                    onClick={() =>
                      setActiveArea(selected ? null : area.name)
                    }
                    aria-pressed={selected}
                    className="group grid w-full grid-cols-[190px_1fr] items-center gap-6 rounded-md py-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <span className="flex items-center gap-3 text-sm">
                      <Icon
                        size={16}
                        className="text-muted-foreground"
                        aria-hidden="true"
                      />

                      {area.name}
                    </span>

                    <span className="relative block h-9 rounded-sm bg-muted/35">
                      {[0, 1, 2, 3, 4, 5].map((year) => (
                        <span
                          key={year}
                          className="absolute bottom-0 top-0 w-px bg-border"
                          style={{
                            left: `${(year / 6) * 100}%`,
                          }}
                        />
                      ))}

                      <span
                        className={`absolute top-2 h-5 rounded-sm bg-primary transition-opacity ${
                          selected
                            ? "opacity-100"
                            : activeArea
                              ? "opacity-20"
                              : "opacity-55 group-hover:opacity-90"
                        }`}
                        style={{
                          left: `${start}%`,
                          width: `${width}%`,
                        }}
                      />
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Mobile chart */}

          <div className="space-y-6 md:hidden">
            {focusAreas.map((area) => {
              const Icon = area.icon

              const start = (monthIndex(area.start) / totalMonths) * 100

              const width =
                ((monthIndex(area.end) - monthIndex(area.start) + 1) /
                  totalMonths) *
                100

              return (
                <div key={area.name}>
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <Icon
                        size={15}
                        className="text-muted-foreground"
                        aria-hidden="true"
                      />

                      <p className="text-sm font-medium">{area.name}</p>
                    </div>

                    <p className="text-xs tabular-nums text-muted-foreground">
                      {area.period}
                    </p>
                  </div>

                  <div className="relative h-3 overflow-hidden rounded-sm bg-muted">
                    <div
                      className="absolute inset-y-0 rounded-sm bg-primary/60"
                      style={{
                        left: `${start}%`,
                        width: `${width}%`,
                      }}
                    />
                  </div>
                </div>
              )
            })}

            <div className="flex justify-between border-t border-border pt-3 text-xs tabular-nums text-muted-foreground">
              <span>2021</span>
              <span>2023</span>
              <span>2026</span>
            </div>
          </div>

          {activeArea && (
            <div
              className="mt-6 hidden rounded-md bg-muted/40 p-4 text-sm md:block"
              aria-live="polite"
            >
              <span className="font-medium">{activeArea}</span>

              <span className="ml-3 text-muted-foreground">
                {focusAreas.find((item) => item.name === activeArea)?.period}
              </span>
            </div>
          )}

          <p className="mt-6 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
            The bars represent periods of professional focus based on
            career experience. They do not represent proficiency scores
            or the full extent of my skills.
          </p>
        </div>
      </div>
    </section>
  )
}

/* =========================================================
   PRODUCT PRINCIPLES
========================================================= */

function ProductPrinciples() {
  return (
    <section className="border-b border-border px-5 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          number="04"
          eyebrow="Lessons along the way"
          title="What experience has taught me."
          description="A few ideas that shape the way I approach products, decisions and uncertainty."
        />

        <div className="grid sm:grid-cols-2">
          {principles.map((principle, index) => {
            const Icon = principle.icon

            return (
              <article
                key={principle.number}
                className={`group border-b border-border py-7 md:py-9 ${
                  index % 2 === 0
                    ? "sm:border-r sm:pr-8"
                    : "sm:pl-8"
                }`}
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="font-mono text-xs text-muted-foreground">
                    {principle.number}
                  </span>

                  <Icon
                    size={24}
                    strokeWidth={1.3}
                    className="text-muted-foreground transition-colors group-hover:text-primary"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="font-serif text-2xl tracking-tight">
                  {principle.title}
                </h3>

                <p className="mt-3 text-sm leading-[1.85] text-muted-foreground">
                  {principle.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* =========================================================
   INTERACTIVE PRODUCT THINKING CYCLE
========================================================= */

function ProductThinkingCycle() {
  const [activeStage, setActiveStage] = useState(0)

  const stage = thinkingStages[activeStage]
  const ActiveIcon = stage.icon

  return (
    <section className="border-b border-border px-5 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          number="05"
          eyebrow="How I think"
          title="From curiosity to creation."
          description="A simple framework for moving from an initial question to an informed product decision. Select any stage to explore it."
        />

        <div className="grid items-center gap-8 rounded-lg border border-border p-5 md:grid-cols-2 md:gap-12 md:p-10">
          {/* Interactive radial diagram */}

          <div className="relative mx-auto aspect-square w-full max-w-[360px]">
            <svg
              viewBox="0 0 320 320"
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              <circle
                cx="160"
                cy="160"
                r="104"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="3 7"
                fill="none"
                opacity="0.23"
              />

              <circle
                cx="160"
                cy="160"
                r="78"
                stroke="currentColor"
                strokeWidth="0.7"
                fill="none"
                opacity="0.1"
              />

              {thinkingStages.map((item, index) => {
                const angle = ((index * 60 - 90) * Math.PI) / 180

                const nextAngle =
                  (((index + 1) * 60 - 90) * Math.PI) / 180

                const x1 = 160 + 104 * Math.cos(angle)
                const y1 = 160 + 104 * Math.sin(angle)

                const x2 = 160 + 104 * Math.cos(nextAngle)
                const y2 = 160 + 104 * Math.sin(nextAngle)

                return (
                  <path
                    key={item.name}
                    d={`M ${x1} ${y1} A 104 104 0 0 1 ${x2} ${y2}`}
                    fill="none"
                    stroke="var(--primary)"
                    strokeWidth={activeStage === index ? 2 : 1}
                    opacity={activeStage === index ? 0.85 : 0.08}
                  />
                )
              })}

              <circle
                cx="160"
                cy="160"
                r="49"
                fill="var(--background)"
                stroke="currentColor"
                strokeWidth="0.8"
                opacity="0.35"
              />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <Sparkles
                size={20}
                strokeWidth={1.2}
                className="mb-2 text-primary"
                aria-hidden="true"
              />

              <p className="font-serif text-xl md:text-2xl">Curiosity</p>

              <p className="mt-1 text-[10px] text-muted-foreground">
                At the centre
              </p>
            </div>

            {thinkingStages.map((item, index) => {
              const Icon = item.icon

              const angle = ((index * 60 - 90) * Math.PI) / 180

              const x = 50 + 32.5 * Math.cos(angle)
              const y = 50 + 32.5 * Math.sin(angle)

              const selected = index === activeStage

              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActiveStage(index)}
                  aria-pressed={selected}
                  aria-label={`Explore ${item.name} stage`}
                  className="group absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                  }}
                >
                  <span
                    className={`flex size-12 items-center justify-center rounded-full border bg-background transition-all md:size-14 ${
                      selected
                        ? "border-primary text-primary ring-4 ring-primary/10"
                        : "border-border text-muted-foreground group-hover:border-primary"
                    }`}
                  >
                    <Icon size={20} aria-hidden="true" />
                  </span>

                  <span
                    className={`absolute top-full mt-2 whitespace-nowrap bg-background px-1 text-[11px] font-medium ${
                      selected
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {item.name}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Stage explanation */}

          <div
            key={stage.name}
            className="journey-enter border-t border-border pt-6 md:border-l md:border-t-0 md:pl-10 md:pt-0"
            aria-live="polite"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-md border border-border text-primary">
                <ActiveIcon size={22} aria-hidden="true" />
              </div>

              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Stage {String(activeStage + 1).padStart(2, "0")} / 06
              </span>
            </div>

            <h3 className="font-serif text-3xl md:text-4xl">
              {stage.name}.
            </h3>

            <p className="mt-5 min-h-[100px] text-base leading-[1.85] text-muted-foreground">
              {stage.description}
            </p>

            <div className="mt-5 grid grid-cols-6 gap-1.5">
              {thinkingStages.map((item, index) => (
                <div
                  key={item.name}
                  className={`h-1 rounded-full ${
                    index === activeStage
                      ? "bg-primary"
                      : "bg-border"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() =>
                setActiveStage(
                  (activeStage + 1) % thinkingStages.length
                )
              }
              className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary"
            >
              {activeStage === thinkingStages.length - 1
                ? "Start again"
                : "Next stage"}

              {activeStage === thinkingStages.length - 1 ? (
                <RefreshCw size={15} aria-hidden="true" />
              ) : (
                <ArrowRight size={15} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        <p className="mt-5 text-center text-xs leading-relaxed text-muted-foreground">
          Observe. Question. Validate. Build. Measure. Learn. Repeat.
        </p>
      </div>
    </section>
  )
}

/* =========================================================
   PERSONAL INTERESTS / CURRENT EXPLORATION
========================================================= */

function CurrentExploration() {
  const interests = [
    {
      title: "Artificial intelligence",
      description:
        "Understanding where intelligence adds meaningful value rather than unnecessary complexity.",
      icon: Sparkles,
    },
    {
      title: "Product hypotheses",
      description:
        "Questioning existing product decisions and evaluating whether alternative approaches could work.",
      icon: FlaskConical,
    },
    {
      title: "Business models",
      description:
        "Exploring the relationship between customer value, monetization, distribution and business viability.",
      icon: BarChart3,
    },
    {
      title: "Human behaviour",
      description:
        "Understanding why people make decisions, develop habits and interact with technology.",
      icon: Compass,
    },
  ]

  return (
    <section className="border-b border-border px-5 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          number="06"
          eyebrow="Present interests"
          title="Questions I'm exploring."
          description="Some of the areas that continue to shape my curiosity."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {interests.map((interest) => {
            const Icon = interest.icon

            return (
              <article
                key={interest.title}
                className="flex items-start gap-4 rounded-md border border-border p-5 md:p-6"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-md bg-muted/50">
                  <Icon
                    size={21}
                    strokeWidth={1.4}
                    className="text-primary"
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <h3 className="text-base font-semibold">
                    {interest.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {interest.description}
                  </p>
                </div>
              </article>
            )
          })}
        </div>

        <Link
          href="/case-studies"
          className="mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          Explore my product thinking
          <ArrowUpRight size={15} aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}

/* =========================================================
   CONCLUSION — THE UNFINISHED JOURNEY
========================================================= */

function JourneyConclusion() {
  return (
    <section className="relative overflow-hidden px-5 py-16 md:px-6 md:py-28">
      <div className="relative mx-auto max-w-5xl">
        <div className="grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="font-mono text-xs text-muted-foreground">
                07
              </span>

              <span className="h-px w-8 bg-border" />

              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                To be continued
              </span>
            </div>

            <h2 className="font-serif text-4xl leading-tight tracking-tight md:text-6xl">
              Still figuring
              <span className="block italic text-muted-foreground">
                things out.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-[1.9] text-muted-foreground md:text-lg">
              I don&apos;t see my journey as a straight path towards
              a fixed destination. It&apos;s a continuing process of
              exploring ideas, understanding problems, building things
              and learning what could be done better.
            </p>

            <p className="mt-5 font-serif text-xl italic">
              Curious by default. Always a work in progress.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/work"
                className="inline-flex min-h-11 items-center gap-2 rounded bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-85"
              >
                Explore my work
                <ArrowUpRight size={15} aria-hidden="true" />
              </Link>

              <Link
                href="/case-studies"
                className="inline-flex min-h-11 items-center gap-2 rounded border border-border px-5 py-3 text-sm font-medium transition-colors hover:border-foreground"
              >
                Case studies
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center gap-2 px-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Get in touch
              </Link>
            </div>
          </div>

          {/* Branching path illustration */}

          <div className="mx-auto w-full max-w-xs">
            <svg
              viewBox="0 0 300 260"
              className="h-auto w-full"
              fill="none"
              aria-hidden="true"
            >
              <g
                stroke="currentColor"
                opacity="0.1"
                strokeWidth="0.8"
              >
                {[45, 90, 135, 180, 225].map((y) => (
                  <path key={y} d={`M15 ${y} H285`} />
                ))}

                {[45, 90, 135, 180, 225, 270].map((x) => (
                  <path key={x} d={`M${x} 15 V245`} />
                ))}
              </g>

              <path
                d="M30 230 C30 180 150 185 150 125"
                stroke="var(--primary)"
                strokeWidth="2"
                strokeDasharray="5 7"
              />

              <g stroke="currentColor" strokeWidth="1.2">
                <path
                  d="M150 125 C150 75 40 90 40 25"
                  strokeDasharray="4 7"
                  opacity="0.35"
                />

                <path
                  d="M150 125 C150 75 150 55 150 25"
                  strokeDasharray="4 7"
                  opacity="0.35"
                />

                <path
                  d="M150 125 C150 75 260 90 260 25"
                  strokeDasharray="4 7"
                  opacity="0.35"
                />
              </g>

              <path
                d="M150 125 C150 75 260 90 260 25"
                stroke="var(--primary)"
                strokeWidth="1.7"
                strokeDasharray="4 7"
                opacity="0.7"
              />

              {[40, 150, 260].map((x) => (
                <g key={x}>
                  <circle
                    cx={x}
                    cy="25"
                    r="11"
                    fill="var(--background)"
                    stroke="currentColor"
                    strokeOpacity="0.35"
                  />

                  <text
                    x={x}
                    y="29"
                    fontSize="12"
                    textAnchor="middle"
                    fill="currentColor"
                    opacity="0.6"
                  >
                    ?
                  </text>
                </g>
              ))}

              <circle
                cx="150"
                cy="125"
                r="11"
                fill="var(--background)"
                stroke="var(--primary)"
              />

              <circle
                cx="150"
                cy="125"
                r="4"
                fill="var(--primary)"
              />

              <circle
                cx="30"
                cy="230"
                r="5"
                fill="var(--primary)"
              />

              <text
                x="150"
                y="151"
                textAnchor="middle"
                fontSize="10"
                fill="currentColor"
                opacity="0.5"
              >
                HERE & NOW
              </text>
            </svg>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-between gap-4 border-t border-border pt-5">
          <p className="text-xs text-muted-foreground">
            An ongoing journey since 2021.
          </p>

          <p className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" />
            Work in progress
          </p>
        </div>
      </div>
    </section>
  )
}

/* =========================================================
   MAIN JOURNEY PAGE
========================================================= */

export default function JourneyPage() {
  useEffect(() => {
    const previousTitle = document.title

    document.title = "My Journey | Yash Mahadik"

    return () => {
      document.title = previousTitle
    }
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main>
        <JourneyHero />

        <CareerTimeline />

        <JourneyProjects />

        <ProfessionalEvolution />

        <ProductPrinciples />

        <ProductThinkingCycle />

        <CurrentExploration />

        <JourneyConclusion />
      </main>

      <Footer />

      {/* Scoped visual animations.
          No third-party animation dependencies. */}

      <style jsx global>{`
        @keyframes journey-draw {
          from {
            stroke-dasharray: 100;
            stroke-dashoffset: 100;
          }

          to {
            stroke-dasharray: 100;
            stroke-dashoffset: 0;
          }
        }

        @keyframes journey-enter {
          from {
            opacity: 0;
            transform: translateY(5px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .journey-draw-path {
          stroke-dasharray: 100;
          stroke-dashoffset: 0;
          animation: journey-draw 1.8s ease-out both;
        }

        .journey-enter {
          animation: journey-enter 240ms ease-out both;
        }

        @media (prefers-reduced-motion: reduce) {
          .journey-draw-path,
          .journey-enter,
          .journey-orbit {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
            stroke-dashoffset: 0 !important;
          }
        }
      `}</style>
    </div>
  )
}
