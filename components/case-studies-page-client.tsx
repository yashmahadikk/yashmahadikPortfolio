
"use client"

import { useEffect, useMemo, useState } from "react"

import Link from "next/link"

import {
  ArrowUpRight,
  ArrowRight,
  ArrowDown,
  Search,
  X,
  LayoutGrid,
  List,
  Presentation,
  BookOpen,
  ChevronDown,
} from "lucide-react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

import { createClient } from "@/lib/supabase/client"
import { trackPortfolioEvent } from "@/lib/portfolio-analytics"

import {
  caseStudyEntries,
  type CaseStudyEntry,
} from "@/lib/case-study-data"

/* ==========================================
   CATEGORY CONFIGURATION
========================================== */

const categories = [
  {
    id: "all",
    label: "All studies",
    aliases: [],
    color: "#929B98",
  },
  {
    id: "hypotheses",
    label: "Feature Hypotheses",
    aliases: ["feature-hypothesis", "feature-hypotheses"],
    color: "#B5A078",
  },
  {
    id: "teardowns",
    label: "Product Teardowns",
    aliases: ["product-teardown", "product-teardowns"],
    color: "#A395B3",
  },
  {
    id: "design",
    label: "Wireframing & Design",
    aliases: [
      "wireframing",
      "wireframing-design",
      "wireframing-and-design",
    ],
    color: "#819BB8",
  },
  {
    id: "strategy",
    label: "Product Strategy",
    aliases: [
      "prd",
      "product-strategy",
      "strategy",
      "go-to-market",
    ],
    color: "#B5A078",
  },
  {
    id: "analytics",
    label: "Data & Analytics",
    aliases: ["data-analytics", "analytics"],
    color: "#86A397",
  },
  {
    id: "market",
    label: "Market Analysis",
    aliases: ["market-analysis", "market-case-study"],
    color: "#A395B3",
  },
  {
    id: "development",
    label: "New Product Development",
    aliases: [
      "new-product-development",
      "product-journey",
    ],
    color: "#83A6A5",
  },
]

function normalize(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[\s_&]+/g, "-")
}

function normalizeRoute(route: string) {
  return route.trim().toLowerCase().replace(/\/+$/, "")
}

function getCategory(study: CaseStudyEntry) {
  const category = normalize(study.category)

  return (
    categories.find((item) =>
      item.aliases.includes(category)
    )?.id || `other:${category}`
  )
}

function getCategoryLabel(category: string) {
  return (
    categories.find((item) =>
      item.aliases.includes(normalize(category))
    )?.label ||
    category ||
    "Case Study"
  )
}

/* ==========================================
   SUPABASE DATA NORMALIZATION
========================================== */

function normalizeDatabaseStudy(
  row: Record<string, unknown>
): CaseStudyEntry | null {
  const title =
    typeof row.title === "string"
      ? row.title.trim()
      : ""

  const slug =
    typeof row.slug === "string"
      ? row.slug.trim()
      : ""

  const description =
    typeof row.description === "string"
      ? row.description
      : ""

  const category =
    typeof row.category === "string"
      ? row.category
      : ""

  const storedLink =
    typeof row.link === "string"
      ? row.link
      : typeof row.route === "string"
        ? row.route
        : ""

  const link = storedLink.startsWith("/case-studies/")
    ? storedLink.replace(/\/+$/, "")
    : slug
      ? `/case-studies/${slug}`
      : ""

  if (!title || !link) return null

  if (
    row.is_published === false ||
    row.published === false ||
    ["draft", "unpublished"].includes(
      String(row.status ?? "").trim().toLowerCase()
    )
  ) {
    return null
  }

  return {
    id: slug || link.split("/").at(-1) || String(row.id),
    title,
    description,
    category,
    categoryLabel: getCategoryLabel(category),
    bgColor: "bg-slate-50",
    link,
    contentClassification: getCategoryLabel(category),

    ...(typeof row.featured === "boolean"
      ? { featured: row.featured }
      : {}),

    ...(typeof row.ppt_link === "string" &&
    /^https?:\/\//i.test(row.ppt_link)
      ? { pptLink: row.ppt_link }
      : {}),
  }
}

/* ==========================================
   INDIVIDUAL STUDY IDENTITIES
========================================== */

const identities: Record<
  string,
  {
    name: string
    color: string
    visual: string
  }
> = {
  zepto: {
    name: "Zepto",
    color: "#A08BB8",
    visual: "notifications",
  },

  "amazon-prime": {
    name: "Amazon Prime",
    color: "#819BB8",
    visual: "streaming",
  },

  sprintup: {
    name: "SprintUp",
    color: "#B5A078",
    visual: "voice",
  },

  "the-hindu": {
    name: "The Hindu",
    color: "#B88A83",
    visual: "subscription",
  },

  swiggy: {
    name: "Swiggy",
    color: "#C79A76",
    visual: "reviews",
  },

  netflix: {
    name: "Netflix",
    color: "#B77F7F",
    visual: "recommendations",
  },

  "harley-davidson": {
    name: "Harley-Davidson",
    color: "#B49B82",
    visual: "motorcycle",
  },

  yeezy: {
    name: "YEEZY",
    color: "#99978E",
    visual: "storefront",
  },

  figma: {
    name: "Figma",
    color: "#A395B3",
    visual: "collaboration",
  },

  chase: {
    name: "Chase",
    color: "#819BB8",
    visual: "finance",
  },

  cred: {
    name: "CRED",
    color: "#8E9AA6",
    visual: "habit",
  },

  notion: {
    name: "Notion",
    color: "#96958D",
    visual: "workspace",
  },

  "jpmc-india": {
    name: "JPMC",
    color: "#879BB3",
    visual: "market-entry",
  },

  "electronic-soundbook": {
    name: "Electronic Soundbook",
    color: "#83A6A5",
    visual: "soundbook",
  },

  instamart: {
    name: "Instamart",
    color: "#C79A76",
    visual: "pickup",
  },

  "how-i-work": {
    name: "Personal Process",
    color: "#86A397",
    visual: "process",
  },
}

function getIdentity(study: CaseStudyEntry) {
  const slug =
    study.link.split("/").filter(Boolean).at(-1) ||
    study.id

  const text = `${slug} ${study.title}`.toLowerCase()

  if (
    text.includes("instamart") &&
    (
      text.includes("pickup") ||
      text.includes("pick-up") ||
      text.includes("pick up")
    )
  ) {
    return identities.instamart
  }

  return (
    identities[slug] ||
    identities[study.id] || {
      name: "",
      color:
        categories.find(
          (item) => item.id === getCategory(study)
        )?.color || "#929B98",
      visual: getCategory(study),
    }
  )
}

/* ==========================================
   REUSABLE SVG ELEMENTS
========================================== */

function Frame({
  x = 25,
  y = 18,
  w = 310,
  h = 144,
  title,
}: {
  x?: number
  y?: number
  w?: number
  h?: number
  title: string
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="5"
        fill="currentColor"
        fillOpacity=".025"
        stroke="currentColor"
        strokeOpacity=".28"
      />

      <path
        d={`M${x} ${y + 23} H${x + w}`}
        stroke="currentColor"
        strokeOpacity=".18"
      />

      {[10, 19, 28].map((n) => (
        <circle
          key={n}
          cx={x + n}
          cy={y + 11}
          r="2.5"
          fill="currentColor"
          opacity=".3"
        />
      ))}

      <text
        x={x + w / 2}
        y={y + 15}
        textAnchor="middle"
        fontSize="9"
        opacity=".75"
      >
        {title}
      </text>
    </g>
  )
}

function Node({
  x,
  y,
  w = 90,
  h = 32,
  label,
  color,
}: {
  x: number
  y: number
  w?: number
  h?: number
  label: string
  color: string
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="4"
        fill={color}
        fillOpacity=".13"
        stroke={color}
        strokeOpacity=".85"
      />

      <text
        x={x + w / 2}
        y={y + h / 2 + 3}
        fontSize="9"
        textAnchor="middle"
        fill="currentColor"
      >
        {label}
      </text>
    </g>
  )
}

function Lines({
  x,
  y,
  w = 80,
  count = 3,
}: {
  x: number
  y: number
  w?: number
  count?: number
}) {
  return (
    <g fill="currentColor">
      {Array.from({ length: count }).map((_, i) => (
        <rect
          key={i}
          x={x}
          y={y + i * 9}
          width={i === count - 1 ? w * .65 : w}
          height="3"
          rx="1.5"
          opacity={i === 0 ? .45 : .2}
        />
      ))}
    </g>
  )
}

function Connection({
  d,
  color,
}: {
  d: string
  color: string
}) {
  return (
    <path
      d={d}
      stroke={color}
      strokeWidth="1.4"
      strokeDasharray="4 4"
      fill="none"
    />
  )
}

function FigureLabel({
  text,
}: {
  text: string
}) {
  return (
    <text
      x="180"
      y="174"
      fontSize="8"
      letterSpacing="1.3"
      textAnchor="middle"
      fill="currentColor"
      opacity=".6"
    >
      {text}
    </text>
  )
}

/* ==========================================
   PROCESS DIAGRAM
========================================== */

function ProcessDiagram({
  steps,
  color,
}: {
  steps: string[]
  color: string
}) {
  const spacing = 340 / steps.length
  const width = spacing - 9

  return (
    <g>

      <path
        d="M25 84 H335"
        stroke={color}
        strokeDasharray="4 4"
      />

      {steps.map((label, i) => {
        const x = 10 + i * spacing

        return (
          <g key={label}>

            <rect
              x={x}
              y="43"
              width={width}
              height="80"
              rx="4"
              fill={color}
              fillOpacity=".12"
              stroke={color}
            />

            <circle
              cx={x + width / 2}
              cy="66"
              r="12"
              fill={color}
              fillOpacity=".25"
            />

            <text
              x={x + width / 2}
              y="70"
              fontSize="9"
              textAnchor="middle"
            >
              0{i + 1}
            </text>

            <text
              x={x + width / 2}
              y="104"
              fontSize="9"
              textAnchor="middle"
            >
              {label}
            </text>

          </g>
        )
      })}

      <path
        d="M320 123 V145 H40 V123"
        stroke={color}
        strokeDasharray="4 4"
        fill="none"
        opacity=".7"
      />

      <FigureLabel text="FEEDBACK & ITERATION" />

    </g>
  )
}

/* ==========================================
   ALL CASE STUDY ILLUSTRATIONS
========================================== */

function StudyIllustration({
  type,
  color: c,
}: {
  type: string
  color: string
}) {
  switch (type) {

    /* ZEPTO */

    case "notifications":
      return (
        <g>
          <rect
            x="102"
            y="9"
            width="156"
            height="157"
            rx="12"
            stroke={c}
            strokeWidth="1.5"
            fill={c}
            fillOpacity=".04"
          />

          <rect
            x="155"
            y="16"
            width="50"
            height="4"
            rx="2"
            fill="currentColor"
            opacity=".25"
          />

          <text
            x="180"
            y="34"
            textAnchor="middle"
            fontSize="10"
          >
            Notifications
          </text>

          {[
            "Personalised offer",
            "Your favourites",
            "Time to restock?",
          ].map((label, i) => (
            <g key={label}>
              <rect
                x="112"
                y={44 + i * 35}
                width="136"
                height="29"
                rx="4"
                fill={c}
                fillOpacity=".13"
                stroke={c}
                strokeOpacity=".5"
              />

              <rect
                x="119"
                y={51 + i * 35}
                width="15"
                height="15"
                rx="3"
                fill={c}
                opacity=".8"
              />

              <text
                x="141"
                y={55 + i * 35}
                fontSize="8"
              >
                {label}
              </text>

              <rect
                x="141"
                y={62 + i * 35}
                width="90"
                height="3"
                rx="1.5"
                fill="currentColor"
                opacity=".25"
              />
            </g>
          ))}

          <Connection d="M102 70 H49 V107" color={c} />

          <Node
            x={8}
            y={107}
            w={82}
            label="Relevance"
            color={c}
          />

          <Connection d="M258 119 H309 V64" color={c} />

          <Node
            x={269}
            y={32}
            w={82}
            label="Engagement"
            color={c}
          />
        </g>
      )

    /* AMAZON PRIME */

    case "streaming":
      return (
        <g>
          <Frame title="Content discovery" />

          <text x="38" y="57" fontSize="10">
            Find something to watch
          </text>

          <rect
            x="38"
            y="66"
            width="284"
            height="46"
            rx="4"
            fill={c}
            fillOpacity=".18"
            stroke={c}
          />

          <path
            d="M38 111 L86 78 L130 111 M106 111 L157 80 L201 111"
            fill={c}
            fillOpacity=".2"
            stroke={c}
          />

          <circle
            cx="265"
            cy="90"
            r="13"
            stroke={c}
            fill="none"
          />

          <path
            d="M261 83 L272 90 L261 97Z"
            fill={c}
          />

          {[0, 1, 2, 3, 4].map((i) => (
            <rect
              key={i}
              x={38 + i * 57}
              y="124"
              width="53"
              height="24"
              rx="3"
              fill={c}
              fillOpacity={.15 + i * .1}
              stroke={c}
              strokeOpacity=".5"
            />
          ))}
        </g>
      )

    /* SPRINTUP */

    case "voice":
      return (
        <g>
          <rect
            x="12"
            y="39"
            width="88"
            height="95"
            rx="5"
            stroke={c}
            fill={c}
            fillOpacity=".07"
          />

          {[12, 23, 34, 18, 44, 27, 12, 33, 20].map(
            (h, i) => (
              <rect
                key={i}
                x={24 + i * 7}
                y={80 - h / 2}
                width="4"
                height={h}
                rx="2"
                fill={c}
              />
            )
          )}

          <text
            x="56"
            y="119"
            fontSize="9"
            textAnchor="middle"
          >
            Voice input
          </text>

          <Connection d="M100 85 H130" color={c} />

          <rect
            x="130"
            y="50"
            width="85"
            height="70"
            rx="6"
            stroke={c}
            fill={c}
            fillOpacity=".15"
          />

          <path
            d="M172 61 V84 M161 72 H183"
            stroke={c}
            strokeWidth="2"
          />

          <text
            x="172"
            y="103"
            fontSize="11"
            textAnchor="middle"
          >
            AI agent
          </text>

          {["Create task", "Set priority", "Assign owner"].map(
            (label, i) => (
              <g key={label}>
                <Connection
                  d={`M215 85 H232 V${43 + i * 43} H247`}
                  color={c}
                />

                <Node
                  x={247}
                  y={27 + i * 43}
                  w={104}
                  label={label}
                  color={c}
                />
              </g>
            )
          )}

          <FigureLabel text="VOICE → TASK → EXECUTION" />
        </g>
      )

    /* THE HINDU */

    case "subscription":
      return (
        <g>
          {[
            "Monthly visitors",
            "Engaged readers",
            "Paywall exposure",
            "Subscribers",
          ].map((label, i) => {
            const width = 270 - i * 57

            return (
              <Node
                key={label}
                x={(360 - width) / 2}
                y={12 + i * 37}
                w={width}
                h={29}
                label={label}
                color={c}
              />
            )
          })}

          <FigureLabel text="CONCEPTUAL SUBSCRIPTION FUNNEL" />
        </g>
      )

    /* SWIGGY */

    case "reviews":
      return (
        <g>
          <Frame
            x={12}
            y={16}
            w={206}
            h={149}
            title="Customer reviews"
          />

          {[0, 1].map((i) => (
            <g key={i}>
              <circle
                cx="34"
                cy={58 + i * 50}
                r="9"
                fill={c}
                opacity=".4"
              />

              <text
                x="50"
                y={60 + i * 50}
                fontSize="13"
                fill={c}
              >
                ★★★★★
              </text>

              <Lines
                x={50}
                y={70 + i * 50}
                w={145}
              />
            </g>
          ))}

          <Connection d="M218 90 H242" color={c} />

          {["Review quality", "Customer trust", "Conversion"].map(
            (label, i) => (
              <g key={label}>
                <Node
                  x={242}
                  y={24 + i * 48}
                  w={108}
                  label={label}
                  color={c}
                />

                {i < 2 && (
                  <Connection
                    d={`M296 ${56 + i * 48} V${72 + i * 48}`}
                    color={c}
                  />
                )}
              </g>
            )
          )}
        </g>
      )

    /* NETFLIX */

    case "recommendations":
      return (
        <g>
          {["Watch history", "Preferences", "Interactions"].map(
            (label, i) => (
              <g key={label}>
                <Node
                  x={10}
                  y={22 + i * 47}
                  w={88}
                  label={label}
                  color={c}
                />

                <Connection
                  d={`M98 ${38 + i * 47} H120 Q132 ${38 + i * 47} 132 85 H144`}
                  color={c}
                />
              </g>
            )
          )}

          <rect
            x="144"
            y="46"
            width="81"
            height="81"
            rx="8"
            stroke={c}
            fill={c}
            fillOpacity=".13"
          />

          <path
            d="M160 65 L185 57 L209 70 L200 103 L178 116 L158 94Z M160 65 L200 103 M185 57 L178 116 M209 70 L158 94"
            stroke={c}
            fill="none"
          />

          {[
            [160, 65],
            [185, 57],
            [209, 70],
            [200, 103],
            [178, 116],
            [158, 94],
          ].map(([x, y], i) => (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="4"
              fill={c}
            />
          ))}

          <Connection d="M225 85 H247" color={c} />

          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect
                x="247"
                y={22 + i * 47}
                width="103"
                height="35"
                rx="4"
                fill={c}
                fillOpacity=".13"
                stroke={c}
              />

              <path
                d={`M260 ${32 + i * 47} L273 ${39 + i * 47} L260 ${46 + i * 47}Z`}
                fill={c}
              />

              <Lines
                x={281}
                y={33 + i * 47}
                w={55}
                count={2}
              />
            </g>
          ))}

          <FigureLabel text="PERSONALISED RECOMMENDATION ENGINE" />
        </g>
      )

    /* HARLEY-DAVIDSON */

    case "motorcycle":
      return (
        <g>
          <g
            transform="translate(12 8)"
            stroke={c}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          >
            <circle cx="42" cy="105" r="27" />
            <circle cx="154" cy="105" r="27" />

            <circle cx="42" cy="105" r="18" opacity=".4" />
            <circle cx="154" cy="105" r="18" opacity=".4" />

            <path d="M42 105 L76 62 L114 105 H42" />
            <path d="M114 105 L128 43 L154 105" />
            <path d="M128 43 L144 30 H164" />
            <path d="M76 62 H114 L128 43" />
            <path d="M57 54 H90" strokeWidth="5" />

            <rect
              x="83"
              y="78"
              width="23"
              height="20"
              rx="3"
              fill={c}
              fillOpacity=".15"
            />

            <path d="M70 114 H128" strokeWidth="4" />
          </g>

          <Connection d="M202 90 H230" color={c} />

          {[
            "Protect demand",
            "Market transition",
            "Future positioning",
          ].map((label, i) => (
            <Node
              key={label}
              x={230}
              y={21 + i * 47}
              w={120}
              label={label}
              color={c}
            />
          ))}

          <FigureLabel text="STRATEGY THROUGH MARKET TRANSITION" />
        </g>
      )

    /* YEEZY */

    case "storefront":
      return (
        <g>
          <Frame
            x={12}
            y={12}
            w={205}
            h={148}
            title="Minimal storefront"
          />

          <text
            x="115"
            y="56"
            fontSize="14"
            letterSpacing="4"
            textAnchor="middle"
          >
            YZY
          </text>

          <path
            d="M42 107 Q62 98 75 82 L99 85 Q112 100 142 98 L183 113 Q195 123 181 131 H63 Q40 131 42 107Z"
            fill={c}
            fillOpacity=".17"
            stroke={c}
            strokeWidth="1.5"
          />

          <path d="M43 119 H185" stroke={c} />

          <Connection d="M217 86 H236" color={c} />

          <Node
            x={236}
            y={30}
            w={115}
            label="UX conventions"
            color={c}
          />

          <text
            x="293"
            y="88"
            fontSize="16"
            textAnchor="middle"
            opacity=".6"
          >
            vs.
          </text>

          <Node
            x={236}
            y={103}
            w={115}
            label="Brand demand"
            color={c}
          />

          <FigureLabel text="THE UX PARADOX" />
        </g>
      )

    /* FIGMA */

    case "collaboration":
      return (
        <g>
          <Frame title="Collaborative workspace" />

          <rect
            x="35"
            y="51"
            width="60"
            height="99"
            fill="currentColor"
            opacity=".06"
          />

          {["Pages", "Frames", "Layers"].map((label, i) => (
            <text
              key={label}
              x="43"
              y={67 + i * 22}
              fontSize="8"
            >
              {label}
            </text>
          ))}

          {[
            [111, 59, 61, 70],
            [183, 59, 61, 44],
            [183, 111, 61, 29],
          ].map(([x, y, w, h], i) => (
            <rect
              key={i}
              x={x}
              y={y}
              width={w}
              height={h}
              rx="3"
              stroke={c}
              fill={c}
              fillOpacity=".13"
            />
          ))}

          {[
            {
              x: 145,
              y: 80,
              color: "#86A397",
              name: "Design",
            },
            {
              x: 218,
              y: 94,
              color: "#819BB8",
              name: "Product",
            },
            {
              x: 266,
              y: 119,
              color: "#B5A078",
              name: "Engineer",
            },
          ].map((cursor) => (
            <g key={cursor.name}>
              <path
                d={`M${cursor.x} ${cursor.y} v15 l5 -5 5 3Z`}
                fill={cursor.color}
              />

              <rect
                x={cursor.x + 7}
                y={cursor.y + 12}
                width="48"
                height="13"
                rx="2"
                fill={cursor.color}
              />

              <text
                x={cursor.x + 31}
                y={cursor.y + 21}
                fontSize="7"
                textAnchor="middle"
                fill="white"
              >
                {cursor.name}
              </text>
            </g>
          ))}
        </g>
      )

    /* CHASE */

    case "finance":
      return (
        <g>
          <Frame title="Financial compass" />

          <rect
            x="36"
            y="54"
            width="111"
            height="45"
            rx="4"
            fill={c}
            fillOpacity=".15"
            stroke={c}
          />

          <text x="45" y="68" fontSize="8">
            Financial overview
          </text>

          <Lines x={45} y={78} w={90} count={2} />

          {["Spending", "Saving", "Planning"].map(
            (label, i) => (
              <text
                key={label}
                x="44"
                y={114 + i * 15}
                fontSize="9"
              >
                {label}
              </text>
            )
          )}

          <rect
            x="159"
            y="54"
            width="163"
            height="95"
            rx="4"
            stroke={c}
            fill={c}
            fillOpacity=".05"
          />

          <text x="169" y="68" fontSize="9">
            AI financial guide
          </text>

          <rect
            x="184"
            y="77"
            width="126"
            height="20"
            rx="4"
            fill={c}
            fillOpacity=".25"
          />

          <text x="194" y="90" fontSize="8">
            How can I save more?
          </text>

          <rect
            x="169"
            y="105"
            width="134"
            height="30"
            rx="4"
            stroke={c}
            fill="none"
          />

          <Lines x={179} y={114} w={111} count={2} />
        </g>
      )

    /* CRED */

    case "habit":
      return (
        <g>
          <circle
            cx="180"
            cy="85"
            r="63"
            stroke={c}
            strokeDasharray="4 5"
            fill="none"
          />

          <circle
            cx="180"
            cy="85"
            r="33"
            stroke={c}
            fill={c}
            fillOpacity=".15"
          />

          <path
            d="M169 69 H191 V91 H169Z M175 63 V74 M185 63 V74 M169 77 H191"
            stroke={c}
            strokeWidth="1.5"
            fill="none"
          />

          <text
            x="180"
            y="105"
            fontSize="8"
            textAnchor="middle"
          >
            Daily habit
          </text>

          {[
            { x: 140, y: 7, label: "Trigger" },
            { x: 244, y: 69, label: "Action" },
            { x: 140, y: 132, label: "Reward" },
            { x: 36, y: 69, label: "Return" },
          ].map((node) => (
            <Node
              key={node.label}
              x={node.x}
              y={node.y}
              w={80}
              h={29}
              label={node.label}
              color={c}
            />
          ))}

          <g stroke={c} fill="none">
            <path d="M225 41 L237 44 L232 54" />
            <path d="M252 121 L243 131 L236 124" />
            <path d="M124 132 L114 127 L119 119" />
            <path d="M109 46 L119 38 L123 47" />
          </g>
        </g>
      )

    /* NOTION */

    case "workspace":
      return (
        <g>
          <Frame title="AI-enabled workspace" />

          <rect
            x="35"
            y="50"
            width="73"
            height="101"
            fill="currentColor"
            opacity=".06"
          />

          {["Workspace", "Projects", "Documents", "Tasks"].map(
            (label, i) => (
              <text
                key={label}
                x="43"
                y={65 + i * 20}
                fontSize="8"
              >
                {label}
              </text>
            )
          )}

          <text
            x="122"
            y="63"
            fontSize="13"
            fontWeight="500"
          >
            Product strategy
          </text>

          <Lines x={122} y={76} w={183} count={4} />

          <rect
            x="119"
            y="114"
            width="202"
            height="33"
            rx="4"
            fill={c}
            fillOpacity=".15"
            stroke={c}
          />

          <path
            d="M134 121 V139 M125 130 H143"
            stroke={c}
            strokeWidth="1.7"
          />

          <text x="151" y="129" fontSize="9">
            Ask AI about this workspace
          </text>

          <rect
            x="151"
            y="136"
            width="142"
            height="3"
            rx="1.5"
            fill="currentColor"
            opacity=".25"
          />
        </g>
      )

    /* JPMC INDIA */

    case "market-entry":
      return (
        <g>
          <circle
            cx="66"
            cy="62"
            r="35"
            stroke={c}
            fill={c}
            fillOpacity=".12"
          />

          <ellipse
            cx="66"
            cy="62"
            rx="15"
            ry="35"
            stroke={c}
            fill="none"
          />

          <path
            d="M31 62 H101 M38 43 H94 M38 81 H94"
            stroke={c}
          />

          <Connection
            d="M101 62 H133 V37 H158"
            color={c}
          />

          <Connection
            d="M101 62 H133 V83 H158"
            color={c}
          />

          <Node
            x={158}
            y={21}
            w={180}
            label="Market opportunity"
            color={c}
          />

          <Node
            x={158}
            y={67}
            w={180}
            label="Local customer needs"
            color={c}
          />

          <path
            d="M45 132 H315"
            stroke={c}
            strokeWidth="1.5"
          />

          {["Research", "Localise", "Enter", "Scale"].map(
            (label, i) => (
              <g key={label}>
                <circle
                  cx={45 + i * 90}
                  cy="132"
                  r="8"
                  fill={c}
                />

                <text
                  x={45 + i * 90}
                  y="155"
                  fontSize="9"
                  textAnchor="middle"
                >
                  {label}
                </text>
              </g>
            )
          )}
        </g>
      )

    /* ELECTRONIC SOUNDBOOK */

    case "soundbook":
      return (
        <g>
          <path
            d="M180 39 Q128 14 57 28 V133 Q124 120 180 145 Q236 120 303 133 V28 Q232 14 180 39Z"
            fill={c}
            fillOpacity=".08"
            stroke={c}
            strokeWidth="1.5"
          />

          <path
            d="M180 39 V145 M50 139 Q121 127 180 152 Q239 127 310 139"
            stroke={c}
            fill="none"
          />

          <circle
            cx="119"
            cy="76"
            r="28"
            fill={c}
            fillOpacity=".13"
            stroke={c}
          />

          <path
            d="M101 70 H112 L124 59 V93 L112 82 H101Z"
            fill={c}
            fillOpacity=".25"
            stroke={c}
          />

          <path
            d="M130 67 Q142 76 130 85 M136 59 Q154 76 136 93"
            stroke={c}
            strokeWidth="1.5"
            fill="none"
          />

          <text
            x="119"
            y="119"
            fontSize="8"
            textAnchor="middle"
          >
            Touch to listen
          </text>

          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect
                x="199"
                y={43 + i * 26}
                width="84"
                height="20"
                rx="3"
                stroke={c}
                fill={c}
                fillOpacity=".13"
              />

              <circle
                cx="211"
                cy={53 + i * 26}
                r="4"
                fill={c}
              />

              <rect
                x="222"
                y={51 + i * 26}
                width="45"
                height="4"
                rx="2"
                fill={c}
                opacity=".6"
              />
            </g>
          ))}

          <g stroke={c} fill="none" opacity=".6">
            <path d="M43 54 Q18 78 43 102" />
            <path d="M33 44 Q0 78 33 112" />
            <path d="M317 54 Q342 78 317 102" />
            <path d="M327 44 Q360 78 327 112" />
          </g>

          <FigureLabel text="SCREEN-FREE INTERACTIVE LEARNING" />
        </g>
      )

    /* INSTAMART PICKUP */

    case "pickup":
      return (
        <g>
          <circle
            cx="180"
            cy="84"
            r="76"
            stroke={c}
            strokeDasharray="5 5"
            fill={c}
            fillOpacity=".04"
          />

          <circle
            cx="180"
            cy="84"
            r="53"
            stroke={c}
            strokeOpacity=".4"
            fill="none"
          />

          <g
            stroke="currentColor"
            strokeOpacity=".15"
            strokeWidth="6"
            fill="none"
          >
            <path d="M14 45 H346 M14 136 H346" />
            <path d="M76 10 V160 M282 10 V160" />
          </g>

          {[
            [65, 70],
            [280, 70],
            [95, 133],
            [265, 133],
          ].map(([x, y], i) => (
            <g key={i}>
              <Connection
                d={`M${x} ${y} Q180 ${y} 180 84`}
                color={c}
              />

              <circle
                cx={x}
                cy={y}
                r="7"
                fill={c}
                fillOpacity=".4"
                stroke={c}
              />
            </g>
          ))}

          <rect
            x="147"
            y="61"
            width="66"
            height="48"
            rx="4"
            fill={c}
            fillOpacity=".3"
            stroke={c}
          />

          <path
            d="M143 62 L151 46 H209 L217 62Z"
            fill={c}
            fillOpacity=".5"
            stroke={c}
          />

          <g stroke={c} fill="none">
            <rect x="174" y="78" width="15" height="31" />
            <rect x="154" y="75" width="12" height="14" />
            <rect x="194" y="75" width="12" height="14" />
          </g>

          <text
            x="180"
            y="123"
            fontSize="9"
            textAnchor="middle"
          >
            Pickup point
          </text>

          <FigureLabel text="ORDER ONLINE → COLLECT IN STORE" />
        </g>
      )

    /* PERSONAL PROCESS */

    case "process":
      return (
        <ProcessDiagram
          steps={[
            "Idea",
            "Logic",
            "Real data",
            "Iterate",
            "Prototype",
          ]}
          color={c}
        />
      )

    /* AUTOMATIC FUTURE STUDY VISUALS */

    case "analytics":
      return (
        <g>
          {[
            "Acquisition",
            "Activation",
            "Engagement",
            "Conversion",
          ].map((label, i) => {
            const width = 270 - i * 55

            return (
              <Node
                key={label}
                x={(360 - width) / 2}
                y={12 + i * 37}
                w={width}
                h={29}
                label={label}
                color={c}
              />
            )
          })}

          <FigureLabel text="CONCEPTUAL ANALYTICS FRAMEWORK" />
        </g>
      )

    case "market":
      return (
        <g>
          <rect
            x="37"
            y="15"
            width="286"
            height="137"
            rx="4"
            stroke={c}
            fill="none"
          />

          <path
            d="M180 15 V152 M37 83 H323"
            stroke={c}
            strokeDasharray="4 4"
          />

          {[
            [85, 110, 18],
            [132, 44, 14],
            [225, 111, 22],
            [267, 48, 26],
          ].map(([x, y, r], i) => (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={r}
              stroke={c}
              fill={c}
              fillOpacity=".17"
            />
          ))}

          <FigureLabel text="COMPETITIVE POSITIONING FRAMEWORK" />
        </g>
      )

    case "design":
    case "teardowns":
      return (
        <g>
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect
                x={20 + i * 113}
                y="15"
                width="91"
                height="142"
                rx="7"
                stroke={c}
                fill={c}
                fillOpacity=".04"
              />

              <rect
                x={30 + i * 113}
                y="35"
                width="71"
                height="40"
                rx="3"
                fill={c}
                fillOpacity=".25"
              />

              <Lines
                x={30 + i * 113}
                y={89}
                w={71}
              />

              <rect
                x={30 + i * 113}
                y="129"
                width="71"
                height="15"
                rx="3"
                fill={c}
                opacity=".75"
              />
            </g>
          ))}
        </g>
      )

    case "development":
      return (
        <ProcessDiagram
          steps={[
            "Problem",
            "Research",
            "Prototype",
            "Test",
          ]}
          color={c}
        />
      )

    default:
      return (
        <ProcessDiagram
          steps={[
            "Question",
            "Research",
            "Validate",
            "Decide",
          ]}
          color={c}
        />
      )
  }
}

/* ==========================================
   RESPONSIVE VISUAL CONTAINER
========================================== */

function StudyVisual({
  study,
}: {
  study: CaseStudyEntry
}) {
  const identity = getIdentity(study)

  return (
    <div
      className="relative isolate flex aspect-[1.85/1] w-full items-center justify-center overflow-hidden rounded-md border border-border"
      style={{
        backgroundColor: `${identity.color}16`,
      }}
    >

      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage:
            "radial-gradient(currentColor 0.7px, transparent 0.7px)",
          backgroundSize: "15px 15px",
        }}
      />

      <svg
        viewBox="0 0 380 200"
        preserveAspectRatio="xMidYMid meet"
        fill="currentColor"
        role="img"
        aria-label={`Conceptual research illustration for ${study.title}`}
        className="relative block h-full w-full p-2 transition-transform duration-300 group-hover:scale-[1.025] motion-reduce:transform-none"
      >

        <g transform="translate(10 10)">
          <StudyIllustration
            type={identity.visual}
            color={identity.color}
          />
        </g>

      </svg>

      <ArrowUpRight
        size={14}
        className="absolute bottom-2 right-3 text-muted-foreground"
      />

    </div>
  )
}

/* ==========================================
   ANALYTICS
========================================== */

function trackStudy(study: CaseStudyEntry) {
  trackPortfolioEvent(
    "case_study_card_click",
    { study: study.id }
  )
}

/* ==========================================
   ILLUSTRATED CASE STUDY CARD
========================================== */

function StudyCard({
  study,
}: {
  study: CaseStudyEntry
}) {
  const identity = getIdentity(study)

  return (
    <article className="group flex min-w-0 flex-col">

      <Link
        href={study.link}
        onClick={() => trackStudy(study)}
        className="flex flex-1 flex-col rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >

        {/* Every case study has a visual cover. */}

        <StudyVisual study={study} />

        <div className="flex flex-1 flex-col pt-4">

          <p className="mb-2 text-[10px] font-medium uppercase leading-relaxed tracking-[0.12em] text-muted-foreground">
            {identity.name && `${identity.name} / `}
            {study.categoryLabel}
          </p>

          <h3 className="font-serif text-[22px] leading-[1.3] tracking-tight transition-colors group-hover:text-primary lg:text-[25px]">
            {study.title}
          </h3>

          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {study.description}
          </p>

          <span className="mt-auto inline-flex min-h-11 items-center gap-2 pt-4 text-sm font-medium group-hover:text-primary">
            Read case study
            <ArrowUpRight size={14} />
          </span>

        </div>

      </Link>

      {study.pptLink && (
        <a
          href={study.pptLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-2 text-xs text-muted-foreground hover:text-foreground"
        >
          <Presentation size={13} />
          View presentation
          <ArrowUpRight size={11} />
        </a>
      )}

    </article>
  )
}

/* ==========================================
   LIST VIEW
========================================== */

function StudyRow({
  study,
}: {
  study: CaseStudyEntry
}) {
  const identity = getIdentity(study)

  return (
    <article className="group border-b border-border py-5">

      <Link
        href={study.link}
        onClick={() => trackStudy(study)}
        className="grid items-center gap-4 sm:grid-cols-[190px_minmax(0,1fr)] lg:grid-cols-[260px_minmax(0,1fr)_24px] lg:gap-8"
      >

        <StudyVisual study={study} />

        <div className="min-w-0">

          <p className="mb-2 text-[10px] uppercase tracking-widest text-muted-foreground">
            {identity.name && `${identity.name} / `}
            {study.categoryLabel}
          </p>

          <h3 className="font-serif text-xl leading-snug group-hover:text-primary lg:text-[27px]">
            {study.title}
          </h3>

          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {study.description}
          </p>

          <span className="mt-2 inline-flex items-center gap-2 text-sm lg:hidden">
            Read case study
            <ArrowUpRight size={13} />
          </span>

        </div>

        <ArrowUpRight
          size={19}
          className="hidden text-muted-foreground lg:block"
        />

      </Link>

      {study.pptLink && (
        <a
          href={study.pptLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex min-h-11 items-center gap-2 text-xs text-muted-foreground hover:text-primary"
        >
          <Presentation size={13} />
          View presentation
        </a>
      )}

    </article>
  )
}

/* ==========================================
   COMPACT CASE STUDIES HERO
========================================== */

function CaseStudiesHero({
  count,
}: {
  count: number
}) {
  return (
    <section className="pb-6 pt-24 lg:pb-7 lg:pt-24">

      <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground md:text-xs">
        Portfolio / Case studies
      </p>

      <div className="grid items-end gap-4 lg:grid-cols-[1.8fr_1fr] lg:gap-10">

        <h1 className="font-serif text-[36px] font-normal leading-[1.08] tracking-[-0.035em] sm:text-[46px] lg:text-[clamp(44px,4vw,60px)]">

          An exercise in{" "}

          <span className="italic text-muted-foreground">
            asking why.
          </span>

        </h1>

        <div className="lg:pb-1">

          <p className="max-w-md text-sm leading-relaxed text-muted-foreground lg:text-base">
            Exploring products, markets, user behaviour
            and the decisions that shape them.
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-widest text-muted-foreground">

            <span className="font-medium text-foreground">
              {count} Case studies
            </span>

            <span className="h-px w-5 bg-border" />

            <span>Research & analysis</span>

          </div>

        </div>

      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-x-6 gap-y-1">

        <nav
          aria-label="Research sections"
          className="flex flex-wrap gap-x-5 gap-y-1"
        >
          {[
            ["featured", "Featured research"],
            ["approach", "How I work"],
            ["archive", "Research archive"],
          ].map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className="inline-flex min-h-11 items-center gap-2 text-xs text-muted-foreground hover:text-foreground"
            >
              {label}
              <ArrowDown size={11} />
            </a>
          ))}
        </nav>

        <a
          href="#featured"
          className="inline-flex min-h-11 items-center gap-2 text-xs text-muted-foreground hover:text-foreground"
        >
          Explore the research
          <ArrowDown size={13} />
        </a>

      </div>

    </section>
  )
}

/* ==========================================
   FEATURED RESEARCH
   First content section — immediately below hero.
========================================== */

function FeaturedResearch({
  studies,
}: {
  studies: CaseStudyEntry[]
}) {
  const selected = studies.filter(
    (study) => study.featured
  )

  const featured = selected.length
    ? selected
    : studies.slice(0, 3)

  return (
    <section
      id="featured"
      className="scroll-mt-24 border-t border-border py-7 lg:py-9"
    >

      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">

        <div>
          <p className="mb-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            01 / Selected research
          </p>

          <h2 className="font-serif text-[28px] leading-tight tracking-tight lg:text-[34px]">
            Featured case studies
          </h2>

          <p className="mt-2 text-sm text-muted-foreground">
            A closer look at product decisions.
          </p>
        </div>

        <a
          href="#archive"
          className="inline-flex min-h-11 items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground"
        >
          View all {studies.length} case studies
          <ArrowRight size={13} />
        </a>

      </div>

      <div className="grid grid-cols-1 gap-x-7 gap-y-9 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">

        {featured.map((study) => (
          <StudyCard
            key={study.link}
            study={study}
          />
        ))}

      </div>

    </section>
  )
}

/* ==========================================
   HOW I WORK
========================================== */

const processStudy: CaseStudyEntry = {
  id: "how-i-work",
  title:
    "Rapid Prototyping: How I Turn Ideas Into Working Tools with AI",
  description:
    "My repeatable process for building prototypes in an afternoon using version-by-version iteration, real data from message one, and logic before polish.",
  category: "process",
  categoryLabel: "Personal Process",
  bgColor: "bg-indigo-50",
  link: "/case-studies/how-i-work",
}

function HowIWork() {
  return (
    <section
      id="approach"
      className="scroll-mt-24 border-t border-border py-7 lg:py-9"
    >

      <p className="mb-4 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        02 / My approach
      </p>

      <Link
        href={processStudy.link}
        onClick={() => trackStudy(processStudy)}
        className="group grid w-full items-center gap-6 rounded-md border border-border p-5 transition-colors hover:border-primary/50 lg:grid-cols-[1fr_1fr] lg:gap-10 lg:p-7"
      >

        <div>

          <p className="mb-3 text-[10px] uppercase tracking-widest text-muted-foreground">
            How I work
          </p>

          <h2 className="font-serif text-[28px] leading-tight tracking-tight lg:text-[36px]">

            Turning ideas into{" "}

            <span className="italic text-muted-foreground">
              working tools with AI.
            </span>

          </h2>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            {processStudy.description}
          </p>

          <span className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-medium group-hover:text-primary">
            Explore my process
            <ArrowUpRight size={15} />
          </span>

        </div>

        <div className="w-full lg:max-w-[550px] lg:justify-self-end">
          <StudyVisual study={processStudy} />
        </div>

      </Link>

    </section>
  )
}

/* ==========================================
   SEARCHABLE RESEARCH ARCHIVE
========================================== */

function ResearchArchive({
  studies,
}: {
  studies: CaseStudyEntry[]
}) {
  const [query, setQuery] = useState("")
  const [active, setActive] = useState("all")
  const [view, setView] = useState<"grid" | "list">("grid")
  const [limit, setLimit] = useState(12)

  const availableCategories = useMemo(() => {
    const known = categories.map((category) => ({
      id: category.id,
      label: category.label,
      count:
        category.id === "all"
          ? studies.length
          : studies.filter(
              (study) => getCategory(study) === category.id
            ).length,
    }))

    const custom = new Map<
      string,
      {
        id: string
        label: string
        count: number
      }
    >()

    for (const study of studies) {
      const category = getCategory(study)

      if (!category.startsWith("other:")) continue

      const existing = custom.get(category)

      custom.set(category, {
        id: category,
        label: study.categoryLabel || "Other research",
        count: (existing?.count || 0) + 1,
      })
    }

    return [
      ...known,
      ...custom.values(),
    ].filter(
      (category) =>
        category.id === "all" || category.count > 0
    )
  }, [studies])

  const filtered = useMemo(() => {
    const search = query.trim().toLowerCase()

    return studies.filter((study) => {
      const matchesCategory =
        active === "all" ||
        getCategory(study) === active

      const searchableText = [
        study.title,
        study.description,
        study.categoryLabel,
        study.contentClassification,
        getIdentity(study).name,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()

      return (
        matchesCategory &&
        (!search || searchableText.includes(search))
      )
    })
  }, [studies, active, query])

  const visible = filtered.slice(0, limit)

  function clearFilters() {
    setQuery("")
    setActive("all")
    setLimit(12)
  }

  return (
    <section
      id="archive"
      className="scroll-mt-24 border-t border-border py-8 lg:py-12"
    >

      <div className="mb-6">

        <p className="mb-3 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          03 / The research archive
        </p>

        <h2 className="font-serif text-3xl tracking-tight lg:text-4xl">
          Explore the research.
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          An ongoing collection of product teardowns,
          market analysis, feature hypotheses,
          growth strategies and product development studies.
        </p>

      </div>

      {/* Search and view controls */}

      <div className="mb-4 flex flex-wrap items-center gap-3">

        <div className="relative min-w-[180px] flex-1">

          <Search
            size={17}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          />

          <input
            type="search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value)
              setLimit(12)
            }}
            placeholder="Search companies, topics, problems..."
            aria-label="Search case studies"
            className="min-h-12 w-full rounded-md border border-border bg-background py-3 pl-10 pr-11 text-base outline-none focus:border-primary md:text-sm"
          />

          {query && (
            <button
              type="button"
              aria-label="Clear search"
              onClick={() => {
                setQuery("")
                setLimit(12)
              }}
              className="absolute inset-y-0 right-0 flex w-11 items-center justify-center text-muted-foreground"
            >
              <X size={15} />
            </button>
          )}

        </div>

        <div
          role="group"
          aria-label="Research layout"
          className="flex rounded-md border border-border p-1"
        >

          <button
            type="button"
            aria-pressed={view === "grid"}
            onClick={() => setView("grid")}
            className={`flex min-h-10 items-center gap-2 rounded-sm px-3 text-xs ${
              view === "grid"
                ? "bg-muted text-foreground"
                : "text-muted-foreground"
            }`}
          >
            <LayoutGrid size={15} />
            Grid
          </button>

          <button
            type="button"
            aria-pressed={view === "list"}
            onClick={() => setView("list")}
            className={`flex min-h-10 items-center gap-2 rounded-sm px-3 text-xs ${
              view === "list"
                ? "bg-muted text-foreground"
                : "text-muted-foreground"
            }`}
          >
            <List size={15} />
            List
          </button>

        </div>

      </div>

      {/* Dynamic category tabs */}

      <div
        role="group"
        aria-label="Case study categories"
        className="flex gap-6 overflow-x-auto border-b border-border"
      >

        {availableCategories.map((category) => (
          <button
            key={category.id}
            type="button"
            aria-pressed={active === category.id}
            onClick={() => {
              setActive(category.id)
              setLimit(12)
            }}
            className={`inline-flex min-h-12 shrink-0 items-center gap-2 whitespace-nowrap border-b-2 text-xs transition-colors md:text-sm ${
              active === category.id
                ? "border-foreground font-medium text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >

            {category.label}

            <span className="text-[10px] tabular-nums opacity-60">
              {category.count}
            </span>

          </button>
        ))}

      </div>

      {/* Results */}

      <div className="flex min-h-14 items-center justify-between gap-3">

        <p
          aria-live="polite"
          className="text-xs text-muted-foreground"
        >
          {filtered.length} case studies
        </p>

        {(query || active !== "all") && (
          <button
            type="button"
            onClick={clearFilters}
            className="inline-flex min-h-11 items-center gap-2 text-xs text-muted-foreground hover:text-foreground"
          >
            <X size={13} />
            Clear filters
          </button>
        )}

      </div>

      {visible.length > 0 ? (
        <>

          {view === "grid" ? (

            <div className="grid grid-cols-1 gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">

              {visible.map((study) => (
                <StudyCard
                  key={study.link}
                  study={study}
                />
              ))}

            </div>

          ) : (

            <div className="border-t border-border">

              {visible.map((study) => (
                <StudyRow
                  key={study.link}
                  study={study}
                />
              ))}

            </div>

          )}

          {/* Load more */}

          <div className="mt-10 flex flex-col items-center gap-4">

            <p className="text-xs text-muted-foreground">
              Showing {visible.length} of {filtered.length} studies
            </p>

            <div
              role="progressbar"
              aria-label="Case studies displayed"
              aria-valuemin={0}
              aria-valuemax={filtered.length}
              aria-valuenow={visible.length}
              className="h-1 w-36 overflow-hidden rounded-full bg-muted"
            >

              <div
                className="h-full rounded-full bg-primary/60"
                style={{
                  width: `${
                    (visible.length / filtered.length) * 100
                  }%`,
                }}
              />

            </div>

            {limit < filtered.length && (
              <button
                type="button"
                onClick={() =>
                  setLimit((value) => value + 12)
                }
                className="inline-flex min-h-12 items-center gap-2 rounded-md border border-border px-6 text-sm hover:bg-muted"
              >
                Load more studies
                <ChevronDown size={14} />
              </button>
            )}

          </div>

        </>
      ) : (

        <div className="flex flex-col items-center border-y border-border py-16 text-center">

          <BookOpen
            size={32}
            strokeWidth={1.2}
            className="text-muted-foreground"
          />

          <h3 className="mt-5 font-serif text-2xl">
            Nothing quite matches.
          </h3>

          <p className="mt-3 text-sm text-muted-foreground">
            Try another search or category.
          </p>

          <button
            type="button"
            onClick={clearFilters}
            className="mt-5 min-h-11 rounded-md border border-border px-4 text-sm hover:bg-muted"
          >
            Clear filters
          </button>

        </div>

      )}

    </section>
  )
}

/* ==========================================
   RESEARCH CONCLUSION
========================================== */

function Conclusion() {
  return (
    <section className="grid items-center gap-8 border-t border-border py-10 lg:grid-cols-[1.3fr_1fr] lg:py-14">

      <div>
        <p className="mb-4 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          Research before decisions
        </p>

        <h2 className="font-serif text-3xl leading-tight tracking-tight lg:text-[42px]">

          A good answer begins{" "}

          <span className="italic text-muted-foreground">
            with a better question.
          </span>

        </h2>

        <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Product thinking is not simply about proposing
          solutions. It is about understanding whether
          a problem deserves to be solved in the first place.
        </p>
      </div>

      <div>

        <svg
          viewBox="0 0 360 180"
          fill="currentColor"
          className="mx-auto h-auto w-full max-w-[420px]"
          role="img"
          aria-label="Problem, evidence and decision framework"
        >
          <ProcessDiagram
            steps={["Problem", "Evidence", "Decision"]}
            color="#86A397"
          />
        </svg>

        <Link
          href="/work"
          className="flex min-h-11 items-center justify-center gap-2 text-sm font-medium hover:text-primary lg:justify-end"
        >
          See what I&apos;ve built
          <ArrowUpRight size={15} />
        </Link>

      </div>

    </section>
  )
}

/* ==========================================
   MAIN CASE STUDIES PAGE

   Self-contained implementation.
   Static entries are immediately visible.
   Supabase entries are merged dynamically.
========================================== */

export function CaseStudiesPageClient() {
  const [studies, setStudies] = useState<CaseStudyEntry[]>(
    [...caseStudyEntries]
  )

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [retry, setRetry] = useState(0)

  useEffect(() => {
    let cancelled = false

    async function fetchStudies() {
      setLoading(true)
      setError(false)

      try {
        const supabase = createClient()

        const records: Record<string, unknown>[] = []

        const batchSize = 200
        let offset = 0

        while (true) {
          const { data, error } = await supabase
            .from("case_studies")
            .select("*")
            .order("created_at", { ascending: false })
            .order("id", { ascending: true })
            .range(offset, offset + batchSize - 1)

          if (error) throw error
          if (cancelled) return

          const batch =
            (data || []) as Record<string, unknown>[]

          records.push(...batch)

          if (batch.length < batchSize) break

          offset += batchSize
        }

        const merged = new Map(
          caseStudyEntries.map((study) => [
            normalizeRoute(study.link),
            study,
          ])
        )

        for (const row of records) {
          const study = normalizeDatabaseStudy(row)

          if (!study) continue

          const key = normalizeRoute(study.link)
          const original = merged.get(key)

          merged.set(key, {
            ...original,
            ...study,

            featured:
              study.featured ?? original?.featured,

            pptLink:
              study.pptLink ?? original?.pptLink,
          })
        }

        if (!cancelled) {
          setStudies(Array.from(merged.values()))
        }

      } catch (error) {
        console.error(
          "Error fetching case studies:",
          error
        )

        if (!cancelled) {
          setError(true)
        }

      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    fetchStudies()

    return () => {
      cancelled = true
    }

  }, [retry])

  const researchStudies = useMemo(
    () =>
      studies.filter(
        (study) =>
          normalizeRoute(study.link) !==
          "/case-studies/how-i-work"
      ),
    [studies]
  )

  return (
    <div className="min-h-screen bg-background text-foreground">

      <Navigation />

      <main>

        <div
          data-layout="case-studies-wide-v4"
          className="mx-auto w-full max-w-[1600px] px-5 md:px-8 lg:px-12 2xl:px-16"
        >

          <CaseStudiesHero
            count={researchStudies.length}
          />

          {/* Research comes first, not the process card. */}

          <FeaturedResearch
            studies={researchStudies}
          />

          {loading && (
            <p
              role="status"
              className="py-3 text-xs text-muted-foreground"
            >
              Loading additional research...
            </p>
          )}

          {error && (
            <div
              role="status"
              className="flex flex-wrap items-center justify-between gap-3 border-t border-border py-3 text-xs text-muted-foreground"
            >
              <span>
                Showing the existing research collection.
                Additional studies could not be loaded.
              </span>

              <button
                type="button"
                onClick={() =>
                  setRetry((value) => value + 1)
                }
                className="min-h-11 underline underline-offset-4 hover:text-foreground"
              >
                Try again
              </button>
            </div>
          )}

          <HowIWork />

          <ResearchArchive
            studies={researchStudies}
          />

          <Conclusion />

        </div>

      </main>

      <Footer />

    </div>
  )
}
