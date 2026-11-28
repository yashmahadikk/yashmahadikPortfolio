
import Link from "next/link"
import {
  ArrowUpRight,
  ArrowDown,
  ArrowRight,
  Layers,
  FileText,
  ExternalLink,
} from "lucide-react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

interface Project {
  id: string
  title: string
  category: string
  description: string
  metrics: string[]
  accent: string
  href: string
  prd?: string
  prototype?: string
}

const projects: Project[] = [
  {
    id: "saleshandy-import-list",
    title: "Import List",
    category: "SALESHANDY · LEAD FINDER",
    description:
      "Bring existing prospect data into Lead Finder without paying twice for the same records.",
    metrics: ["CSV Import", "Deduplication", "Lead Finder"],
    accent: "#77998A",
    href: "/work/saleshandy-import-list",
    prd: "/work/saleshandy-import-list/prd",
    prototype: "https://csvelf.vercel.app",
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
    prd: "/work/saleshandy-email-lookup/prd",
    prototype: "https://emaillookup.vercel.app",
  },
  {
    id: "agar",
    title: "AGAR",
    category: "AI ENTERTAINMENT",
    description:
      "An AI-native cinema platform that turns passive viewers into directors of their own personalised films.",
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
      "AI-powered dimension mapping that replaces manual measurements with a single intelligent scan.",
    metrics: [
      "87% Efficiency Gain",
      "Computer Vision",
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
    description: "Solving real customer problems within established products.",
    ids: [
      "saleshandy-import-list",
      "saleshandy-email-lookup",
    ],
  },
  {
    number: "02",
    label: "INDEPENDENT PRODUCTS",
    title: "Building from zero.",
    description: "Exploring new possibilities through entrepreneurship and artificial intelligence.",
    ids: ["agar", "sprintup"],
  },
  {
    number: "03",
    label: "MULTIDISCIPLINARY PRODUCT DEVELOPMENT",
    title: "Beyond conventional software.",
    description: "Applying product thinking across software, organizations and physical products.",
    ids: [
      "measureai",
      "dataflow",
      "agileshift",
      "electronic-soundbook",
    ],
  },
]

/* ==========================================
   SVG PRIMITIVES
========================================== */

function BrowserFrame({
  title,
}: {
  title: string
}) {
  return (
    <g>
      <rect
        x="36"
        y="20"
        width="348"
        height="180"
        rx="5"
        fill="currentColor"
        fillOpacity=".025"
        stroke="currentColor"
        strokeOpacity=".23"
      />

      <path
        d="M36 45 H384"
        stroke="currentColor"
        strokeOpacity=".15"
      />

      {[48, 58, 68].map((x) => (
        <circle
          key={x}
          cx={x}
          cy="32"
          r="2.5"
          fill="currentColor"
          opacity=".3"
        />
      ))}

      <text
        x="210"
        y="36"
        textAnchor="middle"
        fontSize="9"
        fill="currentColor"
        opacity=".7"
      >
        {title}
      </text>
    </g>
  )
}

function TextLines({
  x,
  y,
  width = 80,
  count = 3,
}: {
  x: number
  y: number
  width?: number
  count?: number
}) {
  return (
    <g fill="currentColor">
      {Array.from({ length: count }).map((_, i) => (
        <rect
          key={i}
          x={x}
          y={y + i * 9}
          width={i === count - 1 ? width * .65 : width}
          height="3"
          rx="1.5"
          opacity={i === 0 ? .4 : .18}
        />
      ))}
    </g>
  )
}

function Node({
  x,
  y,
  width,
  label,
  color,
}: {
  x: number
  y: number
  width: number
  label: string
  color: string
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height="32"
        rx="4"
        fill={color}
        fillOpacity=".12"
        stroke={color}
      />

      <text
        x={x + width / 2}
        y={y + 20}
        textAnchor="middle"
        fontSize="9"
        fill="currentColor"
      >
        {label}
      </text>
    </g>
  )
}

/* ==========================================
   ALL EIGHT PROJECT ILLUSTRATIONS
========================================== */

function ProjectIllustration({
  project,
}: {
  project: Project
}) {
  const c = project.accent

  switch (project.id) {

    /* 01 — CSV IMPORT */

    case "saleshandy-import-list":
      return (
        <g>
          <BrowserFrame title="Import new list" />

          {[
            "Upload",
            "Map fields",
            "Review & import",
          ].map((label, i) => (
            <g key={label}>
              <circle
                cx={56 + i * 111}
                cy="67"
                r="8"
                fill={c}
                opacity={i === 1 ? 1 : .35}
              />

              <text
                x={56 + i * 111}
                y="70"
                textAnchor="middle"
                fontSize="8"
                fill="white"
              >
                {i + 1}
              </text>

              <text
                x={69 + i * 111}
                y="70"
                fontSize="9"
                fill="currentColor"
              >
                {label}
              </text>
            </g>
          ))}

          <text x="52" y="94" fontSize="8" opacity=".6">
            CSV COLUMNS
          </text>

          <text x="215" y="94" fontSize="8" opacity=".6">
            LEAD FINDER FIELDS
          </text>

          {[
            "First name",
            "Last name",
            "Email address",
          ].map((label, i) => (
            <g key={label}>
              <rect
                x="50"
                y={104 + i * 27}
                width="320"
                height="24"
                rx="3"
                fill="currentColor"
                fillOpacity=".035"
              />

              <text
                x="61"
                y={120 + i * 27}
                fontSize="10"
              >
                {label}
              </text>

              <path
                d={`M181 ${116 + i * 27} H199 M194 ${111 + i * 27} L199 ${116 + i * 27} L194 ${121 + i * 27}`}
                stroke={c}
                strokeWidth="1.5"
                fill="none"
              />

              <rect
                x="215"
                y={107 + i * 27}
                width="143"
                height="18"
                rx="2"
                stroke="currentColor"
                strokeOpacity=".2"
                fill="none"
              />

              <text
                x="223"
                y={120 + i * 27}
                fontSize="9"
              >
                {label}
              </text>

              <path
                d={`M342 ${116 + i * 27} l4 4 7 -9`}
                stroke={c}
                strokeWidth="1.5"
                fill="none"
              />
            </g>
          ))}
        </g>
      )

    /* 02 — EMAIL LOOKUP */

    case "saleshandy-email-lookup":
      return (
        <g>
          <BrowserFrame title="Lead Finder" />

          <text x="53" y="68" fontSize="14" fontWeight="500">
            Email lookup
          </text>

          <rect
            x="53"
            y="82"
            width="314"
            height="30"
            rx="3"
            stroke="currentColor"
            strokeOpacity=".25"
            fill="none"
          />

          <text x="65" y="101" fontSize="10" opacity=".6">
            name@company.com
          </text>

          <rect
            x="288"
            y="87"
            width="73"
            height="20"
            rx="3"
            fill={c}
          />

          <text
            x="324"
            y="100"
            fontSize="9"
            textAnchor="middle"
            fill="white"
          >
            Find lead
          </text>

          <rect
            x="53"
            y="128"
            width="314"
            height="54"
            rx="4"
            fill={c}
            fillOpacity=".12"
            stroke={c}
            strokeOpacity=".4"
          />

          <circle
            cx="81"
            cy="155"
            r="17"
            fill={c}
            opacity=".2"
          />

          <circle cx="81" cy="150" r="5" fill={c} />

          <path
            d="M70 166 Q81 150 92 166"
            stroke={c}
            strokeWidth="2"
            fill="none"
          />

          <TextLines x={109} y={143} width={139} />

          <circle
            cx="343"
            cy="155"
            r="11"
            fill="#77998A"
            opacity=".2"
          />

          <path
            d="M338 155 l4 4 7 -9"
            stroke="#77998A"
            strokeWidth="2"
            fill="none"
          />
        </g>
      )

    /* 03 — AGAR */

    case "agar":
      return (
        <g>
          <rect
            x="105"
            y="20"
            width="210"
            height="29"
            rx="4"
            fill={c}
            fillOpacity=".08"
            stroke={c}
          />

          <text x="119" y="38" fontSize="10">
            Imagine a world...
          </text>

          <circle
            cx="298"
            cy="34"
            r="8"
            fill={c}
            opacity=".25"
          />

          <path
            d="M294 34 H302 M298 30 V38 M210 49 V72"
            stroke={c}
            fill="none"
          />

          {[
            "#879DA5",
            "#B5A08E",
            "#78918A",
          ].map((color, i) => (
            <rect
              key={color}
              x={27 + i * 124}
              y="74"
              width="118"
              height="88"
              rx="4"
              fill={color}
              fillOpacity=".15"
              stroke={color}
            />
          ))}

          <circle
            cx="113"
            cy="98"
            r="12"
            fill="#879DA5"
            opacity=".3"
          />

          <path
            d="M27 161 L65 103 L111 161 M82 161 L116 119 L145 161"
            stroke="#879DA5"
            fill="#879DA5"
            fillOpacity=".13"
          />

          <circle
            cx="211"
            cy="105"
            r="17"
            fill="#B5A08E"
            opacity=".25"
          />

          <path
            d="M151 143 Q190 104 232 140 T269 141 M151 155 Q192 133 225 155 T269 149"
            stroke="#B5A08E"
            fill="none"
          />

          <circle
            cx="334"
            cy="118"
            r="23"
            stroke="#78918A"
            fill="none"
          />

          <path
            d="M327 105 L345 118 L327 131Z"
            fill="#78918A"
          />

          <text
            x="210"
            y="192"
            textAnchor="middle"
            fontSize="10"
            letterSpacing="2"
            opacity=".65"
          >
            PROMPT → WORLD → FILM
          </text>
        </g>
      )

    /* 04 — SPRINTUP */

    case "sprintup":
      return (
        <g>
          <BrowserFrame title="SprintUp · Workspace" />

          {["To do", "In progress", "Done"].map(
            (label, i) => (
              <g key={label}>
                <rect
                  x={48 + i * 110}
                  y="57"
                  width="104"
                  height="128"
                  rx="3"
                  fill="currentColor"
                  fillOpacity=".035"
                />

                <circle
                  cx={59 + i * 110}
                  cy="70"
                  r="3"
                  fill={[c, "#8196B5", "#77998A"][i]}
                />

                <text
                  x={68 + i * 110}
                  y="73"
                  fontSize="9"
                >
                  {label}
                </text>

                {[0, 1].map((row) => (
                  <g key={row}>
                    <rect
                      x={54 + i * 110}
                      y={83 + row * 46}
                      width="92"
                      height="38"
                      rx="3"
                      stroke="currentColor"
                      strokeOpacity=".17"
                      fill={c}
                      fillOpacity=".045"
                    />

                    <TextLines
                      x={62 + i * 110}
                      y={92 + row * 46}
                      width={63}
                      count={2}
                    />

                    <rect
                      x={62 + i * 110}
                      y={108 + row * 46}
                      width="26"
                      height="6"
                      rx="2"
                      fill={c}
                      opacity=".5"
                    />

                    <circle
                      cx={133 + i * 110}
                      cy={111 + row * 46}
                      r="4"
                      fill={c}
                      opacity=".4"
                    />
                  </g>
                ))}
              </g>
            )
          )}

          <rect
            x="250"
            y="8"
            width="124"
            height="23"
            rx="3"
            stroke={c}
            fill={c}
            fillOpacity=".12"
          />

          <text x="262" y="23" fontSize="9">
            ✦ AI agent active
          </text>
        </g>
      )

    /* 05 — MEASUREAI */

    case "measureai":
      return (
        <g>
          <rect
            x="104"
            y="14"
            width="212"
            height="186"
            rx="5"
            stroke="currentColor"
            strokeOpacity=".2"
            fill="none"
          />

          <g
            stroke={c}
            strokeWidth="1.8"
            fill="none"
          >
            <path d="M116 50 V26 H143" />
            <path d="M278 26 H304 V50" />
            <path d="M116 164 V188 H143" />
            <path d="M278 188 H304 V164" />
          </g>

          <g stroke={c} strokeWidth="1.5" fill={c}>
            <path
              d="M146 85 L220 50 L274 85 L200 122Z"
              fillOpacity=".18"
            />

            <path
              d="M146 85 V137 L200 173 V122Z"
              fillOpacity=".07"
            />

            <path
              d="M200 122 L274 85 V137 L200 173Z"
              fillOpacity=".13"
            />
          </g>

          <g
            stroke={c}
            strokeDasharray="3 4"
            fill="none"
          >
            <path d="M141 71 L215 36" />
            <path d="M288 85 V137" />
            <path d="M141 151 L193 187" />
            <path d="M120 111 H300" />
          </g>

          <g fontSize="9" opacity=".7">
            <text x="154" y="42">WIDTH</text>
            <text x="294" y="115">H</text>
            <text x="145" y="179">DEPTH</text>
          </g>

          <text
            x="210"
            y="214"
            fontSize="8"
            textAnchor="middle"
            letterSpacing="1.6"
            opacity=".6"
          >
            INTELLIGENT DIMENSION MAPPING
          </text>
        </g>
      )

    /* 06 — DATAFLOW */

    case "dataflow":
      return (
        <g>
          {["INPUT", "PROCESS", "OUTPUT"].map(
            (label, i) => (
              <text
                key={label}
                x={65 + i * 145}
                y="30"
                textAnchor="middle"
                fontSize="9"
                letterSpacing="1.5"
                opacity=".6"
              >
                {label}
              </text>
            )
          )}

          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect
                x="24"
                y={48 + i * 48}
                width="82"
                height="32"
                rx="4"
                stroke={c}
                fill={c}
                fillOpacity=".08"
              />

              <TextLines
                x={36}
                y={59 + i * 48}
                width={57}
                count={2}
              />

              <path
                d={`M106 ${64 + i * 48} H132 Q147 ${64 + i * 48} 147 112 H170`}
                stroke={c}
                strokeDasharray="4 4"
                fill="none"
              />

              <path
                d={`M250 112 H273 Q288 112 288 ${64 + i * 48} H314`}
                stroke={c}
                strokeDasharray="4 4"
                fill="none"
              />

              <rect
                x="314"
                y={48 + i * 48}
                width="82"
                height="32"
                rx="4"
                stroke={c}
                fill={c}
                fillOpacity=".13"
              />

              <TextLines
                x={325}
                y={59 + i * 48}
                width={43}
                count={2}
              />

              <path
                d={`M375 ${64 + i * 48} l4 4 7 -9`}
                stroke={c}
                fill="none"
              />
            </g>
          ))}

          <rect
            x="170"
            y="73"
            width="80"
            height="78"
            rx="6"
            stroke={c}
            fill={c}
            fillOpacity=".12"
          />

          <rect
            x="192"
            y="94"
            width="36"
            height="36"
            rx="3"
            fill="none"
            stroke={c}
            strokeWidth="2"
          />

          <path
            d="M201 86 V94 M210 86 V94 M219 86 V94 M201 130 V138 M210 130 V138 M219 130 V138 M184 103 H192 M184 112 H192 M184 121 H192 M228 103 H236 M228 112 H236 M228 121 H236"
            stroke={c}
            strokeWidth="1.5"
          />

          <text
            x="210"
            y="205"
            textAnchor="middle"
            fontSize="9"
            letterSpacing="1.5"
            opacity=".6"
          >
            PARALLEL PROCESSING ENGINE
          </text>
        </g>
      )

    /* 07 — AGILESHIFT */

    case "agileshift":
      return (
        <g>
          <path
            d="M45 172 H375"
            stroke="currentColor"
            strokeOpacity=".2"
          />

          {[
            "Assess",
            "Align",
            "Pilot",
            "Scale",
            "Adopt",
          ].map((label, i) => {
            const height = 38 + i * 26

            return (
              <g key={label}>
                <rect
                  x={61 + i * 65}
                  y={172 - height}
                  width="40"
                  height={height}
                  rx="3"
                  fill={c}
                  fillOpacity={.2 + i * .16}
                  stroke={c}
                  strokeOpacity=".6"
                />

                <circle
                  cx={81 + i * 65}
                  cy={162 - height}
                  r="3.5"
                  fill={c}
                />

                <text
                  x={81 + i * 65}
                  y="190"
                  fontSize="9"
                  textAnchor="middle"
                >
                  {label}
                </text>
              </g>
            )
          })}

          <path
            d="M81 124 L146 98 L211 72 L276 46 L341 20"
            stroke={c}
            strokeDasharray="4 4"
            strokeWidth="1.5"
            fill="none"
          />

          <text
            x="210"
            y="212"
            textAnchor="middle"
            fontSize="8"
            letterSpacing="1.6"
            opacity=".6"
          >
            CONCEPTUAL ADOPTION JOURNEY
          </text>
        </g>
      )

    /* 08 — ELECTRONIC SOUNDBOOK */

    case "electronic-soundbook":
      return (
        <g>
          <path
            d="M210 48 Q149 18 67 35 V163 Q142 150 210 179 Q278 150 353 163 V35 Q271 18 210 48Z"
            stroke={c}
            strokeWidth="1.6"
            fill={c}
            fillOpacity=".09"
          />

          <path
            d="M210 48 V179 M60 171 Q142 157 210 188 Q278 157 360 171"
            stroke={c}
            fill="none"
          />

          <circle
            cx="139"
            cy="95"
            r="34"
            stroke={c}
            fill={c}
            fillOpacity=".1"
          />

          <path
            d="M116 88 H131 L144 76 V114 L131 102 H116Z"
            stroke={c}
            fill={c}
            fillOpacity=".2"
          />

          <path
            d="M151 84 Q167 95 151 106 M158 76 Q181 95 158 114"
            stroke={c}
            strokeWidth="1.6"
            fill="none"
          />

          <text
            x="139"
            y="144"
            fontSize="9"
            textAnchor="middle"
          >
            Touch to listen
          </text>

          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect
                x="234"
                y={54 + i * 30}
                width="94"
                height="24"
                rx="4"
                stroke={c}
                fill={c}
                fillOpacity=".1"
              />

              <circle
                cx="248"
                cy={66 + i * 30}
                r="5"
                fill={c}
              />

              <rect
                x="261"
                y={64 + i * 30}
                width={44 + i * 4}
                height="4"
                rx="2"
                fill={c}
                opacity=".6"
              />
            </g>
          ))}

          <g stroke={c} fill="none" opacity=".6">
            <path d="M46 70 Q20 95 46 120" />
            <path d="M35 59 Q0 95 35 131" />
            <path d="M374 70 Q400 95 374 120" />
            <path d="M385 59 Q420 95 385 131" />
          </g>

          <text
            x="210"
            y="213"
            textAnchor="middle"
            fontSize="8"
            letterSpacing="1.5"
            opacity=".6"
          >
            SCREEN-FREE INTERACTIVE LEARNING
          </text>
        </g>
      )

    default:
      return (
        <g>
          <Node
            x={45}
            y={85}
            width={150}
            label="Problem"
            color={c}
          />

          <Node
            x={225}
            y={85}
            width={150}
            label="Solution"
            color={c}
          />

          <path
            d="M195 101 H225"
            stroke={c}
            strokeDasharray="3 3"
          />
        </g>
      )
  }
}

/* ==========================================
   RESPONSIVE VISUAL CONTAINER
========================================== */

function ProjectVisual({
  project,
}: {
  project: Project
}) {
  return (
    <div
      className="relative isolate flex w-full items-center justify-center overflow-hidden rounded-md border border-border"
      style={{
        backgroundColor: `${project.accent}15`,
        height: "clamp(190px, 19vw, 290px)",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage:
            "radial-gradient(currentColor 0.7px, transparent 0.7px)",
          backgroundSize: "16px 16px",
        }}
      />

      <svg
        viewBox="0 0 420 220"
        preserveAspectRatio="xMidYMid meet"
        fill="currentColor"
        className="relative block h-full w-full p-3 transition-transform duration-300 group-hover:scale-[1.025] motion-reduce:transform-none sm:p-5"
        role="img"
        aria-label={`Conceptual product illustration for ${project.title}`}
      >
        <ProjectIllustration project={project} />
      </svg>

      <ArrowUpRight
        size={16}
        className="absolute bottom-3 right-3 text-muted-foreground"
      />
    </div>
  )
}

/* ==========================================
   PROJECT CARD
========================================== */

function ProjectCard({
  project,
}: {
  project: Project
}) {
  return (
    <article className="group flex min-w-0 flex-col">

      <Link
        href={project.href}
        className="block rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <ProjectVisual project={project} />
      </Link>

      <div className="flex flex-1 flex-col pt-4">

        <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
          {project.category}
        </p>

        <Link href={project.href}>
          <h3 className="font-serif text-[27px] leading-tight tracking-tight transition-colors group-hover:text-primary lg:text-[32px]">
            {project.title}
          </h3>
        </Link>

        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
          {project.metrics.map((metric, i) => (
            <span
              key={metric}
              className="inline-flex items-center gap-2 text-xs"
            >
              {i > 0 && (
                <span className="size-0.5 rounded-full bg-muted-foreground" />
              )}

              <span
                className={
                  i === 0
                    ? "font-medium text-foreground"
                    : "text-muted-foreground"
                }
              >
                {metric}
              </span>
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-1 pt-3">

          <Link
            href={project.href}
            className="inline-flex min-h-11 items-center gap-2 text-sm font-medium hover:text-primary"
          >
            View project
            <ArrowUpRight size={14} />
          </Link>

          {project.prd && (
            <Link
              href={project.prd}
              className="inline-flex min-h-11 items-center gap-2 text-xs text-muted-foreground hover:text-foreground"
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
              className="inline-flex min-h-11 items-center gap-2 text-xs text-muted-foreground hover:text-foreground"
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

/* ==========================================
   COMPACT HERO
========================================== */

function WorkHero() {
  return (
    <section className="pb-6 pt-24 lg:pb-7 lg:pt-24">

      <p className="mb-3 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground md:text-xs">
        <Layers size={14} strokeWidth={1.5} />
        Portfolio / Selected work
      </p>

      <div className="grid items-end gap-4 lg:grid-cols-[1.8fr_1fr] lg:gap-10">

        <h1 className="font-serif text-[36px] font-normal leading-[1.08] tracking-[-0.035em] sm:text-[46px] lg:text-[clamp(44px,4vw,60px)]">

          From problems to{" "}

          <span className="italic text-muted-foreground">
            products.
          </span>

        </h1>

        <div className="lg:pb-1">
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground lg:text-base">
            Products I&apos;ve built, problems I&apos;ve solved,
            and ideas I&apos;ve brought to life.
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-widest text-muted-foreground">

            <span className="font-medium text-foreground">
              {String(projects.length).padStart(2, "0")} Projects
            </span>

            <span className="h-px w-5 bg-border" />

            <span>Multiple disciplines</span>

          </div>
        </div>

      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-x-6 gap-y-1">

        <nav
          aria-label="Work sections"
          className="flex flex-wrap gap-x-5 gap-y-1"
        >
          {[
            ["01", "SaaS products"],
            ["02", "Independent products"],
            ["03", "Other work"],
          ].map(([number, label]) => (
            <a
              key={number}
              href={`#section-${number}`}
              className="inline-flex min-h-11 items-center gap-2 text-xs text-muted-foreground hover:text-foreground"
            >
              <span className="font-mono text-[10px] opacity-60">
                {number}
              </span>

              {label}
              <ArrowRight size={11} />
            </a>
          ))}
        </nav>

        <a
          href="#section-01"
          className="inline-flex min-h-11 items-center gap-2 text-xs text-muted-foreground hover:text-foreground"
        >
          Explore selected work
          <ArrowDown size={13} />
        </a>

      </div>

    </section>
  )
}

/* ==========================================
   PROJECT SECTIONS
========================================== */

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
      className="scroll-mt-24 border-t border-border py-7 lg:py-9"
    >

      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">

        <div>
          <h2 className="font-serif text-[26px] leading-tight tracking-tight lg:text-[32px]">
            {section.title}
          </h2>

          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {section.description}
          </p>
        </div>

        <p className="flex items-center gap-3 text-[10px] uppercase tracking-[0.13em] text-muted-foreground">
          <span className="font-mono">
            {section.number}
          </span>

          <span className="h-px w-5 bg-border" />

          {section.label}
        </p>

      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 xl:gap-x-10">

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

/* ==========================================
   CONCLUSION
========================================== */

function WorkConclusion() {
  return (
    <section className="grid items-end gap-6 border-t border-border py-10 lg:grid-cols-[1.3fr_1fr] lg:py-14">

      <div>
        <p className="mb-3 text-[10px] uppercase tracking-widest text-muted-foreground">
          Beyond the outcome
        </p>

        <h2 className="font-serif text-3xl leading-tight tracking-tight lg:text-[42px]">

          Every product begins{" "}

          <span className="italic text-muted-foreground">
            with a question.
          </span>

        </h2>

        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Different problems, industries and approaches.
          Connected by a curiosity about how things can work better.
        </p>
      </div>

      <div className="flex flex-wrap gap-3 lg:justify-end">

        <Link
          href="/case-studies"
          className="inline-flex min-h-12 items-center gap-2 rounded-md bg-foreground px-5 text-sm font-medium text-background hover:opacity-80"
        >
          Explore case studies
          <ArrowUpRight size={15} />
        </Link>

        <Link
          href="/journey"
          className="inline-flex min-h-12 items-center gap-2 rounded-md border border-border px-5 text-sm hover:bg-muted"
        >
          My journey
          <ArrowUpRight size={15} />
        </Link>

      </div>

    </section>
  )
}

/* ==========================================
   MAIN WORK PAGE
========================================== */

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      <Navigation />

      <main>

        <div
          data-layout="work-wide-v4"
          className="mx-auto w-full max-w-[1600px] px-5 md:px-8 lg:px-12 2xl:px-16"
        >

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
