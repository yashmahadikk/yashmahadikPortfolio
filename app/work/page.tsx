
import Link from "next/link"
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  FileText,
  ExternalLink,
  Layers,
} from "lucide-react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

/*
 * FILE: app/work/page.tsx
 *
 * Redesigned Work landing page.
 * Preserve all existing individual project pages.
 * Uses existing typography, theme and navigation.
 * All project illustrations are original inline SVGs.
 * No new dependencies or database changes.
 *
 * Project descriptions are condensed for the landing page.
 * Metrics are retained from the existing project data.
 * Build and browser validation required before deployment.
 */

/* =========================================================
   PROJECT DATA
========================================================= */

interface Project {
  id: string
  title: string
  category: string
  description: string
  metrics: string[]
  accent: string
  href: string
  prototype?: string
  prd?: string
}

const projects: Project[] = [
  {
    id: "saleshandy-import-list",
    title: "Import List",
    category: "SALESHANDY · LEAD FINDER",
    description:
      "Bring existing prospect data into Lead Finder without paying twice for the same records.",
    metrics: [
      "CSV Import",
      "Deduplication",
      "Lead Finder",
    ],
    accent: "#77998A",
    href: "/work/saleshandy-import-list",
    prototype: "https://csvelf.vercel.app",
    prd: "/work/saleshandy-import-list/prd",
  },
  {
    id: "saleshandy-email-lookup",
    title: "Email Lookup",
    category: "SALESHANDY · LEAD FINDER",
    description:
      "Identify the right prospect from an email address using first-party data and intelligent matching.",
    metrics: [
      "918M Profile Database",
      "97%+ Reported Accuracy",
      "No Vendor Data",
    ],
    accent: "#8196B5",
    href: "/work/saleshandy-email-lookup",
    prototype: "https://emaillookup.vercel.app",
    prd: "/work/saleshandy-email-lookup/prd",
  },
  {
    id: "agar",
    title: "AGAR",
    category: "AI ENTERTAINMENT",
    description:
      "An AI-native cinema platform that turns passive viewers into directors of their own personalized films.",
    metrics: [
      "Generative AI",
      "Content Creation",
      "Visual Storytelling",
    ],
    accent: "#85999D",
    href: "/work/agar",
  },
  {
    id: "sprintup",
    title: "SprintUp",
    category: "AGENTIC AI · PRODUCTIVITY",
    description:
      "An autonomous AI project manager that coordinates teams, manages tasks and automates project execution.",
    metrics: [
      "25% Productivity Boost",
      "Workflow Automation",
      "Sprint Planning",
    ],
    accent: "#B5A078",
    href: "/work/sprintup",
  },
  {
    id: "measureai",
    title: "MeasureAI",
    category: "COMPUTER VISION",
    description:
      "An AI-powered dimension mapping tool that replaces manual measurements with a single intelligent scan.",
    metrics: [
      "87% Efficiency Gain",
      "12 Dimensions",
      "Sub-10 Sec",
    ],
    accent: "#82A397",
    href: "/work/measureai",
  },
  {
    id: "dataflow",
    title: "DataFlow",
    category: "DATA AUTOMATION",
    description:
      "An enterprise automation platform that accelerates large-scale data processing through intelligent pipelines.",
    metrics: [
      "60% Faster Processing",
      "Large-Scale Operations",
      "Pipeline Optimization",
    ],
    accent: "#B396A2",
    href: "/work/dataflow",
  },
  {
    id: "agileshift",
    title: "AgileShift",
    category: "ORGANIZATIONAL TRANSFORMATION",
    description:
      "A structured transformation framework that helps organizations adopt agile practices and improve product delivery.",
    metrics: [
      "100% Adoption",
      "50-Person Organization",
      "15-Week Rollout",
    ],
    accent: "#A395B3",
    href: "/work/agileshift",
  },
  {
    id: "electronic-soundbook",
    title: "Electronic Soundbook",
    category: "PHYSICAL PRODUCT",
    description:
      "A screen-free learning experience for toddlers, designed for multiple languages and five global markets.",
    metrics: [
      "$7 COGS",
      "5 Markets",
      "85% Parent Satisfaction",
    ],
    accent: "#83A6A5",
    href: "/case-studies/electronic-soundbook",
  },
]

const sections = [
  {
    number: "01",
    label: "SAAS PRODUCT MANAGEMENT",
    title: "Building for businesses.",
    description:
      "Solving real customer problems within established products.",
    ids: [
      "saleshandy-import-list",
      "saleshandy-email-lookup",
    ],
  },
  {
    number: "02",
    label: "INDEPENDENT PRODUCTS",
    title: "Building from zero.",
    description:
      "Exploring new possibilities through entrepreneurship and artificial intelligence.",
    ids: ["agar", "sprintup"],
  },
  {
    number: "03",
    label: "MULTIDISCIPLINARY PRODUCT DEVELOPMENT",
    title: "Beyond conventional software.",
    description:
      "Applying product thinking across automation, computer vision, organizations and physical products.",
    ids: [
      "measureai",
      "dataflow",
      "agileshift",
      "electronic-soundbook",
    ],
  },
]

/* =========================================================
   REUSABLE SVG BROWSER WINDOW
========================================================= */

function BrowserFrame({
  title,
}: {
  title: string
}) {
  return (
    <g>
      <rect
        x="36"
        y="24"
        width="348"
        height="172"
        rx="5"
        fill="var(--background)"
        stroke="currentColor"
        strokeOpacity="0.18"
      />

      <path
        d="M36 48 H384"
        stroke="currentColor"
        strokeOpacity="0.12"
      />

      {[47, 57, 67].map((x) => (
        <circle
          key={x}
          cx={x}
          cy="36"
          r="2.5"
          fill="currentColor"
          opacity="0.23"
        />
      ))}

      <text
        x="210"
        y="39"
        fontSize="9"
        textAnchor="middle"
        fill="currentColor"
        opacity="0.65"
      >
        {title}
      </text>
    </g>
  )
}

/* =========================================================
   01 — IMPORT LIST ILLUSTRATION
========================================================= */

function ImportListVisual({
  accent,
}: {
  accent: string
}) {
  return (
    <g>
      <BrowserFrame title="Import new list" />

      {/* Three-step import flow */}

      {[
        "Upload",
        "Map fields",
        "Review & import",
      ].map((label, index) => (
        <g key={label}>
          <circle
            cx={55 + index * 111}
            cy="68"
            r="8"
            fill={accent}
            opacity={index === 1 ? 1 : 0.35}
          />

          <text
            x={55 + index * 111}
            y="71"
            fill="white"
            textAnchor="middle"
            fontSize="8"
          >
            {index + 1}
          </text>

          <text
            x={68 + index * 111}
            y="71"
            fontSize="8"
            fill="currentColor"
            opacity={index === 1 ? 1 : 0.6}
          >
            {label}
          </text>
        </g>
      ))}

      <text
        x="52"
        y="94"
        fontSize="8"
        fill="currentColor"
        opacity="0.5"
      >
        CSV COLUMNS
      </text>

      <text
        x="218"
        y="94"
        fontSize="8"
        fill="currentColor"
        opacity="0.5"
      >
        LEAD FINDER FIELDS
      </text>

      {[
        "First name",
        "Last name",
        "Email address",
      ].map((field, index) => (
        <g key={field}>
          <rect
            x="50"
            y={102 + index * 25}
            width="320"
            height="23"
            rx="2"
            fill="currentColor"
            fillOpacity="0.025"
          />

          <text
            x="60"
            y={117 + index * 25}
            fontSize="9"
            fill="currentColor"
            opacity="0.7"
          >
            {field}
          </text>

          <path
            d={`M181 ${113 + index * 25} H197 M193 ${109 + index * 25} L197 ${113 + index * 25} L193 ${117 + index * 25}`}
            stroke={accent}
            strokeWidth="1.3"
            fill="none"
          />

          <rect
            x="215"
            y={105 + index * 25}
            width="143"
            height="17"
            rx="2"
            stroke="currentColor"
            strokeOpacity="0.15"
            fill="none"
          />

          <text
            x="224"
            y={117 + index * 25}
            fontSize="8"
            fill="currentColor"
            opacity="0.65"
          >
            {field}
          </text>

          <path
            d={`M345 ${112 + index * 25} L348 ${115 + index * 25} L353 ${109 + index * 25}`}
            fill="none"
            stroke={accent}
            strokeWidth="1.4"
          />
        </g>
      ))}
    </g>
  )
}

/* =========================================================
   02 — EMAIL LOOKUP ILLUSTRATION
========================================================= */

function EmailLookupVisual({
  accent,
}: {
  accent: string
}) {
  return (
    <g>
      <BrowserFrame title="Lead Finder" />

      <text
        x="54"
        y="70"
        fontSize="13"
        fontWeight="600"
        fill="currentColor"
      >
        Email lookup
      </text>

      <rect
        x="53"
        y="81"
        width="314"
        height="29"
        rx="3"
        stroke="currentColor"
        strokeOpacity="0.2"
        fill="none"
      />

      <text
        x="65"
        y="99"
        fontSize="10"
        fill="currentColor"
        opacity="0.5"
      >
        name@company.com
      </text>

      <rect
        x="295"
        y="86"
        width="66"
        height="19"
        rx="2"
        fill={accent}
      />

      <text
        x="328"
        y="99"
        fontSize="8"
        fill="white"
        textAnchor="middle"
      >
        Find lead
      </text>

      {/* Matched profile */}

      <rect
        x="53"
        y="125"
        width="314"
        height="53"
        rx="3"
        fill={accent}
        fillOpacity="0.08"
        stroke={accent}
        strokeOpacity="0.25"
      />

      <circle
        cx="79"
        cy="151"
        r="16"
        fill={accent}
        opacity="0.2"
      />

      <circle
        cx="79"
        cy="146"
        r="5"
        fill={accent}
      />

      <path
        d="M69 161 Q79 147 89 161"
        stroke={accent}
        strokeWidth="2"
        fill="none"
      />

      <rect
        x="106"
        y="140"
        width="91"
        height="6"
        rx="2"
        fill="currentColor"
        opacity="0.35"
      />

      <rect
        x="106"
        y="153"
        width="129"
        height="5"
        rx="2"
        fill="currentColor"
        opacity="0.13"
      />

      <rect
        x="106"
        y="164"
        width="65"
        height="4"
        rx="2"
        fill="currentColor"
        opacity="0.13"
      />

      <circle
        cx="343"
        cy="151"
        r="11"
        fill="#77998A"
        opacity="0.18"
      />

      <path
        d="M338 151 L342 155 L349 146"
        stroke="#77998A"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </g>
  )
}

/* =========================================================
   03 — AGAR ILLUSTRATION
========================================================= */

function AgarVisual({
  accent,
}: {
  accent: string
}) {
  return (
    <g>
      {/* Prompt input */}

      <rect
        x="110"
        y="22"
        width="200"
        height="28"
        rx="4"
        fill="var(--background)"
        stroke="currentColor"
        strokeOpacity="0.18"
      />

      <text
        x="124"
        y="39"
        fontSize="10"
        fill="currentColor"
        opacity="0.6"
      >
        Imagine a world...
      </text>

      <circle
        cx="293"
        cy="36"
        r="8"
        fill={accent}
        fillOpacity="0.2"
      />

      <path
        d="M289 36 H297 M293 32 V40"
        stroke={accent}
        strokeWidth="1.3"
      />

      <path
        d="M210 50 V70"
        stroke={accent}
        strokeDasharray="3 3"
      />

      {/* Cinematic storyboard */}

      {[
        "#879DA5",
        "#B5A08E",
        "#78918A",
      ].map((color, index) => (
        <g key={color}>
          <rect
            x={27 + index * 124}
            y="75"
            width="118"
            height="83"
            rx="3"
            fill={color}
            fillOpacity="0.13"
            stroke={color}
            strokeOpacity="0.7"
          />

          <text
            x={35 + index * 124}
            y="89"
            fontSize="7"
            fill="currentColor"
            opacity="0.45"
          >
            0{index + 1}
          </text>
        </g>
      ))}

      {/* First cinematic frame */}

      <circle
        cx="114"
        cy="98"
        r="10"
        fill="#879DA5"
        opacity="0.25"
      />

      <path
        d="M28 157 L66 104 L111 157 M82 157 L115 119 L144 157"
        stroke="#879DA5"
        strokeWidth="1.3"
        fill="#879DA5"
        fillOpacity="0.09"
      />

      {/* Second cinematic frame */}

      <circle
        cx="210"
        cy="104"
        r="15"
        fill="#B5A08E"
        opacity="0.2"
      />

      <path
        d="M151 141 Q191 104 232 138 T268 139"
        stroke="#B5A08E"
        strokeWidth="1.3"
        fill="none"
      />

      <path
        d="M151 151 Q192 133 225 151 T268 145"
        stroke="#B5A08E"
        strokeOpacity="0.6"
        fill="none"
      />

      {/* Third cinematic frame */}

      <circle
        cx="334"
        cy="117"
        r="20"
        fill="var(--background)"
        stroke="#78918A"
      />

      <path
        d="M328 106 L344 117 L328 128 Z"
        fill="#78918A"
      />

      <text
        x="210"
        y="188"
        textAnchor="middle"
        fontSize="10"
        letterSpacing="2"
        fill="currentColor"
        opacity="0.55"
      >
        PROMPT → WORLD → FILM
      </text>
    </g>
  )
}

/* =========================================================
   04 — SPRINTUP ILLUSTRATION
========================================================= */

function SprintUpVisual({
  accent,
}: {
  accent: string
}) {
  return (
    <g>
      <BrowserFrame title="SprintUp · Workspace" />

      {[
        "To do",
        "In progress",
        "Done",
      ].map((column, index) => (
        <g key={column}>
          <rect
            x={48 + index * 110}
            y="59"
            width="104"
            height="121"
            rx="3"
            fill="currentColor"
            fillOpacity="0.025"
          />

          <circle
            cx={58 + index * 110}
            cy="71"
            r="3"
            fill={[
              accent,
              "#8196B5",
              "#77998A",
            ][index]}
          />

          <text
            x={67 + index * 110}
            y="74"
            fontSize="9"
            fill="currentColor"
            opacity="0.65"
          >
            {column}
          </text>

          {[0, 1].map((row) => (
            <g key={row}>
              <rect
                x={54 + index * 110}
                y={83 + row * 43}
                width="92"
                height="36"
                rx="3"
                fill="var(--background)"
                stroke="currentColor"
                strokeOpacity="0.1"
              />

              <rect
                x={62 + index * 110}
                y={91 + row * 43}
                width={48 + row * 15}
                height="4"
                rx="1.5"
                fill="currentColor"
                opacity="0.28"
              />

              <rect
                x={62 + index * 110}
                y={101 + row * 43}
                width="30"
                height="6"
                rx="2"
                fill={accent}
                opacity="0.4"
              />

              <circle
                cx={133 + index * 110}
                cy={106 + row * 43}
                r="4.5"
                fill={accent}
                opacity="0.3"
              />
            </g>
          ))}
        </g>
      ))}

      {/* Autonomous agent indicator */}

      <rect
        x="250"
        y="12"
        width="124"
        height="24"
        rx="4"
        fill="var(--background)"
        stroke={accent}
        strokeOpacity="0.7"
      />

      <path
        d="M263 18 V30 M257 24 H269"
        stroke={accent}
        strokeWidth="1.2"
      />

      <text
        x="279"
        y="27"
        fontSize="8"
        fill="currentColor"
        opacity="0.75"
      >
        AI agent active
      </text>
    </g>
  )
}

/* =========================================================
   05 — MEASUREAI ILLUSTRATION
========================================================= */

function MeasureAIVisual({
  accent,
}: {
  accent: string
}) {
  return (
    <g>
      {/* Scan viewport */}

      <rect
        x="105"
        y="20"
        width="210"
        height="176"
        rx="5"
        fill="var(--background)"
        stroke="currentColor"
        strokeOpacity="0.12"
      />

      <g
        stroke={accent}
        strokeWidth="1.7"
        fill="none"
        strokeLinecap="round"
      >
        <path d="M116 53 V31 H141" />
        <path d="M279 31 H304 V53" />
        <path d="M116 162 V185 H141" />
        <path d="M279 185 H304 V162" />
      </g>

      {/* Isometric object */}

      <path
        d="M147 87 L219 53 L273 86 L201 122 Z"
        fill={accent}
        fillOpacity="0.15"
        stroke={accent}
        strokeWidth="1.6"
      />

      <path
        d="M147 87 V137 L201 172 V122 Z"
        fill={accent}
        fillOpacity="0.07"
        stroke={accent}
        strokeWidth="1.6"
      />

      <path
        d="M201 122 L273 86 V137 L201 172 Z"
        fill={accent}
        fillOpacity="0.12"
        stroke={accent}
        strokeWidth="1.6"
      />

      {/* Dimension annotations */}

      <g
        stroke={accent}
        strokeWidth="1"
        fill="none"
      >
        <path d="M142 72 L213 37" strokeDasharray="3 3" />
        <path d="M287 86 V138" strokeDasharray="3 3" />
        <path d="M143 153 L195 187" strokeDasharray="3 3" />

        <path d="M138 68 L146 76 M209 33 L217 41" />
        <path d="M283 86 H291 M283 138 H291" />
        <path d="M139 157 L147 149 M191 191 L199 183" />
      </g>

      <g
        fontSize="8"
        fill="currentColor"
        opacity="0.65"
      >
        <text x="159" y="42">WIDTH</text>
        <text x="294" y="115">H</text>
        <text x="145" y="178">DEPTH</text>
      </g>

      {/* Scan line */}

      <path
        d="M120 111 H300"
        stroke={accent}
        strokeWidth="1.3"
        strokeDasharray="5 5"
        opacity="0.65"
      />

      <text
        x="210"
        y="213"
        textAnchor="middle"
        fontSize="9"
        letterSpacing="2"
        fill="currentColor"
        opacity="0.5"
      >
        INTELLIGENT DIMENSION MAPPING
      </text>
    </g>
  )
}

/* =========================================================
   06 — DATAFLOW ILLUSTRATION
========================================================= */

function DataFlowVisual({
  accent,
}: {
  accent: string
}) {
  return (
    <g>
      <g
        fill="currentColor"
        fontSize="9"
        letterSpacing="1.2"
        opacity="0.5"
      >
        <text x="65" y="31" textAnchor="middle">INPUT</text>
        <text x="210" y="31" textAnchor="middle">PROCESS</text>
        <text x="355" y="31" textAnchor="middle">OUTPUT</text>
      </g>

      {[0, 1, 2].map((index) => (
        <g key={index}>
          {/* Input nodes */}

          <rect
            x="24"
            y={48 + index * 48}
            width="82"
            height="32"
            rx="4"
            fill="var(--background)"
            stroke={accent}
            strokeOpacity="0.6"
          />

          <path
            d={`M37 ${60 + index * 48} H92 M37 ${68 + index * 48} H77`}
            stroke={accent}
            strokeWidth="2"
            opacity="0.45"
          />

          {/* Pipeline connectors */}

          <path
            d={`M106 ${64 + index * 48} H132 Q147 ${64 + index * 48} 147 112 H170`}
            stroke={accent}
            strokeOpacity="0.7"
            strokeDasharray="4 4"
            fill="none"
          />

          <path
            d={`M250 112 H273 Q288 112 288 ${64 + index * 48} H314`}
            stroke={accent}
            strokeOpacity="0.7"
            strokeDasharray="4 4"
            fill="none"
          />

          {/* Output nodes */}

          <rect
            x="314"
            y={48 + index * 48}
            width="82"
            height="32"
            rx="4"
            fill={accent}
            fillOpacity="0.1"
            stroke={accent}
            strokeOpacity="0.6"
          />

          <path
            d={`M327 ${60 + index * 48} H365 M327 ${68 + index * 48} H352`}
            stroke={accent}
            strokeWidth="2"
            opacity="0.6"
          />

          <path
            d={`M375 ${63 + index * 48} L379 ${67 + index * 48} L385 ${59 + index * 48}`}
            stroke={accent}
            strokeWidth="1.4"
            fill="none"
          />
        </g>
      ))}

      {/* Central processing engine */}

      <rect
        x="170"
        y="73"
        width="80"
        height="78"
        rx="7"
        fill="var(--background)"
        stroke={accent}
        strokeWidth="1.5"
      />

      <rect
        x="183"
        y="86"
        width="54"
        height="52"
        rx="4"
        fill={accent}
        fillOpacity="0.12"
      />

      <g
        stroke={accent}
        strokeWidth="1.7"
        fill="none"
      >
        <path d="M196 100 H224 V124 H196 Z" />
        <path d="M201 94 V100 M210 94 V100 M219 94 V100" />
        <path d="M201 124 V130 M210 124 V130 M219 124 V130" />
        <path d="M190 105 H196 M190 113 H196 M190 121 H196" />
        <path d="M224 105 H230 M224 113 H230 M224 121 H230" />
      </g>

      <text
        x="210"
        y="193"
        fontSize="9"
        letterSpacing="1.7"
        textAnchor="middle"
        fill="currentColor"
        opacity="0.5"
      >
        PARALLEL PROCESSING ENGINE
      </text>
    </g>
  )
}

/* =========================================================
   07 — AGILESHIFT ILLUSTRATION

   Conceptual stages, not a fabricated performance chart.
========================================================= */

function AgileShiftVisual({
  accent,
}: {
  accent: string
}) {
  const stages = [
    "Assess",
    "Align",
    "Pilot",
    "Scale",
    "Adopt",
  ]

  return (
    <g>
      <path
        d="M46 174 H374 M46 35 V174"
        stroke="currentColor"
        strokeOpacity="0.15"
        fill="none"
      />

      {[0, 1, 2, 3].map((index) => (
        <path
          key={index}
          d={`M46 ${43 + index * 34} H374`}
          stroke="currentColor"
          strokeOpacity="0.08"
          strokeDasharray="3 5"
        />
      ))}

      {stages.map((stage, index) => {
        const height = 27 + index * 26

        return (
          <g key={stage}>
            <rect
              x={63 + index * 64}
              y={174 - height}
              width="36"
              height={height}
              rx="3"
              fill={accent}
              fillOpacity={0.25 + index * 0.15}
            />

            <text
              x={81 + index * 64}
              y="191"
              fontSize="9"
              textAnchor="middle"
              fill="currentColor"
              opacity="0.65"
            >
              {stage}
            </text>

            <circle
              cx={81 + index * 64}
              cy={164 - height}
              r="3.5"
              fill={accent}
            />
          </g>
        )
      })}

      <path
        d="M81 137 L145 111 L209 85 L273 59 L337 33"
        fill="none"
        stroke={accent}
        strokeWidth="1.6"
        strokeDasharray="4 4"
      />

      <text
        x="210"
        y="213"
        fontSize="8"
        letterSpacing="1.5"
        textAnchor="middle"
        fill="currentColor"
        opacity="0.5"
      >
        CONCEPTUAL ADOPTION JOURNEY
      </text>
    </g>
  )
}

/* =========================================================
   08 — ELECTRONIC SOUNDBOOK ILLUSTRATION
========================================================= */

function SoundbookVisual({
  accent,
}: {
  accent: string
}) {
  return (
    <g>
      {/* Book body */}

      <path
        d="
          M210 52
          Q151 20 68 37
          V167
          Q143 151 210 180
          Q277 151 352 167
          V37
          Q269 20 210 52 Z
        "
        fill="var(--background)"
        stroke={accent}
        strokeWidth="1.5"
      />

      <path
        d="M210 52 V180"
        stroke={accent}
        strokeWidth="1.3"
      />

      <path
        d="M61 173 Q144 160 210 188 Q276 160 359 173"
        stroke={accent}
        strokeOpacity="0.6"
        fill="none"
      />

      <path
        d="M55 180 Q144 169 210 196 Q276 169 365 180"
        stroke="currentColor"
        strokeOpacity="0.15"
        fill="none"
      />

      {/* Left page audio interaction */}

      <circle
        cx="139"
        cy="97"
        r="33"
        fill={accent}
        fillOpacity="0.09"
        stroke={accent}
        strokeOpacity="0.7"
      />

      <path
        d="M117 90 H131 L144 78 V116 L131 104 H117 Z"
        stroke={accent}
        strokeWidth="1.8"
        fill={accent}
        fillOpacity="0.12"
      />

      <path
        d="M151 86 Q166 97 151 108 M158 79 Q181 97 158 115"
        stroke={accent}
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
      />

      <text
        x="139"
        y="144"
        fontSize="8"
        textAnchor="middle"
        fill="currentColor"
        opacity="0.55"
      >
        TOUCH TO LISTEN
      </text>

      {/* Right page learning elements */}

      {[0, 1, 2].map((index) => (
        <g key={index}>
          <rect
            x="234"
            y={55 + index * 30}
            width="94"
            height="24"
            rx="4"
            fill={accent}
            fillOpacity="0.08"
            stroke={accent}
            strokeOpacity="0.65"
          />

          <circle
            cx="247"
            cy={67 + index * 30}
            r="5"
            fill={accent}
            fillOpacity="0.65"
          />

          <rect
            x="260"
            y={64 + index * 30}
            width={45 + index * 5}
            height="5"
            rx="2"
            fill={accent}
            fillOpacity="0.4"
          />
        </g>
      ))}

      {/* Sound waves around book */}

      <g
        stroke={accent}
        strokeOpacity="0.45"
        fill="none"
        strokeWidth="1.3"
      >
        <path d="M46 75 Q22 97 46 119" />
        <path d="M35 64 Q1 97 35 130" />
        <path d="M374 75 Q398 97 374 119" />
        <path d="M385 64 Q419 97 385 130" />
      </g>

      <text
        x="210"
        y="214"
        fontSize="9"
        textAnchor="middle"
        letterSpacing="1.8"
        fill="currentColor"
        opacity="0.5"
      >
        SCREEN-FREE INTERACTIVE LEARNING
      </text>
    </g>
  )
}

/* =========================================================
   PROJECT VISUAL CONTAINER
========================================================= */

function ProjectVisual({
  project,
}: {
  project: Project
}) {
  const { id, accent } = project

  function renderVisual() {
    switch (id) {
      case "saleshandy-import-list":
        return <ImportListVisual accent={accent} />

      case "saleshandy-email-lookup":
        return <EmailLookupVisual accent={accent} />

      case "agar":
        return <AgarVisual accent={accent} />

      case "sprintup":
        return <SprintUpVisual accent={accent} />

      case "measureai":
        return <MeasureAIVisual accent={accent} />

      case "dataflow":
        return <DataFlowVisual accent={accent} />

      case "agileshift":
        return <AgileShiftVisual accent={accent} />

      case "electronic-soundbook":
        return <SoundbookVisual accent={accent} />

      default:
        return null
    }
  }

  return (
    <div
      className="relative isolate overflow-hidden rounded-md border border-border/60"
      style={{
        backgroundColor: `${accent}12`,
      }}
    >
      {/* Subtle technical dot pattern */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.09]"
        style={{
          backgroundImage:
            "radial-gradient(currentColor 0.7px, transparent 0.7px)",
          backgroundSize: "16px 16px",
        }}
      />

      <svg
        viewBox="0 0 420 220"
        role="img"
        aria-label={`Conceptual product illustration for ${project.title}`}
        className="relative h-auto w-full p-4 transition-transform duration-500 group-hover:scale-[1.025] motion-reduce:transform-none sm:p-6"
        fontFamily="inherit"
      >
        {renderVisual()}
      </svg>

      {/* Technical figure label */}

      <div className="absolute bottom-3 left-4 text-[9px] uppercase tracking-[0.15em] text-muted-foreground/70">
        Product illustration
      </div>

      <div className="absolute bottom-3 right-4">
        <ArrowUpRight
          size={14}
          className="text-muted-foreground/60 transition-colors group-hover:text-foreground"
        />
      </div>
    </div>
  )
}

/* =========================================================
   PROJECT CARD

   Image first.
   No additional outer card background.
   No heavy shadows.
   Direct access to project, PRD and prototype.
========================================================= */

function ProjectCard({
  project,
}: {
  project: Project
}) {
  return (
    <article className="group flex min-w-0 flex-col">

      {/* Clickable project illustration */}

      <Link
        href={project.href}
        aria-label={`View ${project.title} project`}
        className="block rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
      >
        <ProjectVisual project={project} />
      </Link>

      {/* Project information */}

      <div className="flex flex-1 flex-col pt-5 md:pt-6">

        <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground md:text-[11px]">
          {project.category}
        </p>

        <Link
          href={project.href}
          className="w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <h3 className="font-serif text-[30px] font-normal leading-tight tracking-tight transition-colors group-hover:text-primary md:text-[34px]">
            {project.title}
          </h3>
        </Link>

        <p className="mt-3 max-w-lg text-sm leading-[1.8] text-muted-foreground md:text-base">
          {project.description}
        </p>

        {/* Outcome and capability summary */}

        <div className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-2">

          {project.metrics.map((metric, index) => (
            <span
              key={metric}
              className="inline-flex items-center gap-2 text-xs font-medium leading-relaxed"
            >
              {index > 0 && (
                <span
                  aria-hidden="true"
                  className="size-0.5 rounded-full bg-muted-foreground/50"
                />
              )}

              <span
                className={
                  index === 0
                    ? "text-foreground"
                    : "text-muted-foreground"
                }
              >
                {metric}
              </span>
            </span>
          ))}

        </div>

        {/* Project navigation */}

        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-5">

          <Link
            href={project.href}
            className="inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-foreground underline-offset-4 hover:text-primary hover:underline"
          >
            View project

            <ArrowUpRight size={14} />
          </Link>

          {project.prd && (
            <Link
              href={project.prd}
              className="inline-flex min-h-11 items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              <FileText size={13} />

              PRD

              <ArrowUpRight size={11} />
            </Link>
          )}

          {project.prototype && (
            <a
              href={project.prototype}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Prototype

              <ExternalLink size={12} />
            </a>
          )}

        </div>
      </div>
    </article>
  )
}

/* =========================================================
   SECTION COMPONENT
========================================================= */

function ProjectSection({
  section,
}: {
  section: (typeof sections)[number]
}) {
  const sectionProjects = section.ids
    .map((id) =>
      projects.find((project) => project.id === id)
    )
    .filter(
      (project): project is Project =>
        project !== undefined
    )

  return (
    <section
      id={`section-${section.number}`}
      className="scroll-mt-28 border-t border-border py-10 md:py-14"
    >

      {/* Editorial section heading */}

      <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">

        <div>
          <div className="mb-3 flex items-center gap-2 md:hidden">
            <span className="font-mono text-[10px] text-muted-foreground">
              {section.number}
            </span>

            <span className="h-px w-4 bg-border" />

            <span className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
              {section.label}
            </span>
          </div>

          <h2 className="font-serif text-[28px] font-normal leading-tight tracking-tight md:text-[36px]">
            {section.title}
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            {section.description}
          </p>
        </div>

        <div className="hidden shrink-0 items-center gap-3 pb-1 md:flex">
          <span className="font-mono text-[11px] text-muted-foreground">
            {section.number}
          </span>

          <span className="h-px w-6 bg-border" />

          <span className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            {section.label}
          </span>
        </div>

      </div>

      {/* Desktop two-column grid.
          Mobile single-column editorial feed. */}

      <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-14 lg:gap-x-10">

        {sectionProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}

      </div>

    </section>
  )
}

/* =========================================================
   WORK PAGE HERO

   Compact landscape layout.
   Large editorial heading on the left.
   Context and collection size on the right.
========================================================= */

function WorkHero() {
  return (
    <section className="pb-10 pt-28 md:pb-14 md:pt-36">

      <Link
        href="/"
        className="mb-6 inline-flex min-h-11 items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground md:mb-8"
      >
        <ArrowLeft size={14} />

        Back home
      </Link>

      <div className="grid gap-6 md:grid-cols-[1.3fr_0.7fr] md:items-end md:gap-16">

        <div>
          <div className="mb-5 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground md:text-xs">

            <Layers size={14} strokeWidth={1.5} />

            Portfolio / Selected work

          </div>

          <h1 className="font-serif text-[clamp(2.8rem,6vw,4.8rem)] font-normal leading-[1.08] tracking-[-0.035em]">

            From problems to

            <span className="mt-1 block italic text-muted-foreground">
              products.
            </span>

          </h1>
        </div>

        <div className="pb-1 md:pb-2">

          <p className="max-w-sm text-base leading-[1.8] text-muted-foreground md:text-lg">
            Products I&apos;ve built, problems I&apos;ve solved,
            and ideas I&apos;ve brought to life.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-[0.13em] text-muted-foreground">

            <span className="font-medium tabular-nums text-foreground">
              {String(projects.length).padStart(2, "0")} Projects
            </span>

            <span className="h-px w-4 bg-border" />

            <span>Multiple disciplines</span>

          </div>

        </div>

      </div>

      {/* Compact anchor navigation */}

      <nav
        aria-label="Work categories"
        className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-1 md:mt-10 md:gap-x-7"
      >
        {[
          { number: "01", label: "SaaS products" },
          { number: "02", label: "Independent products" },
          { number: "03", label: "Other work" },
        ].map((item) => (
          <a
            key={item.number}
            href={`#section-${item.number}`}
            className="inline-flex min-h-11 items-center gap-2 text-xs text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            <span className="font-mono text-[10px] opacity-60">
              {item.number}
            </span>

            {item.label}

            <ArrowRight size={11} />
          </a>
        ))}
      </nav>

    </section>
  )
}

/* =========================================================
   EDITORIAL CONCLUSION
========================================================= */

function WorkConclusion() {
  return (
    <section className="border-t border-border py-12 md:py-20">

      <div className="grid gap-7 md:grid-cols-[1.2fr_0.8fr] md:items-end md:gap-12">

        <div>

          <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Beyond the outcome
          </p>

          <h2 className="font-serif text-[32px] leading-[1.15] tracking-tight md:text-[44px]">

            Every product begins

            <span className="block italic text-muted-foreground">
              with a question.
            </span>

          </h2>

          <p className="mt-5 max-w-lg text-sm leading-[1.8] text-muted-foreground md:text-base">
            The work above represents different problems,
            industries and approaches. What connects them
            is a curiosity about how things can work better.
          </p>

        </div>

        <div className="flex flex-wrap items-center gap-3 md:justify-end">

          <Link
            href="/case-studies"
            className="inline-flex min-h-12 items-center gap-2 rounded-md bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-85"
          >
            Explore case studies

            <ArrowUpRight size={15} />
          </Link>

          <Link
            href="/journey"
            className="inline-flex min-h-12 items-center gap-2 rounded-md border border-border px-5 text-sm font-medium transition-colors hover:bg-muted"
          >
            My journey

            <ArrowUpRight size={15} />
          </Link>

        </div>

      </div>

    </section>
  )
}

/* =========================================================
   MAIN WORK LANDING PAGE
========================================================= */

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      <Navigation />

      <main>

        <div className="mx-auto max-w-6xl px-5 md:px-8">

          <WorkHero />

          {sections.map((section) => (
            <ProjectSection
              key={section.number}
              section={section}
            />
          ))}

          <WorkConclusion />

        </div>

      </main>

      <Footer />

    </div>
  )
}
