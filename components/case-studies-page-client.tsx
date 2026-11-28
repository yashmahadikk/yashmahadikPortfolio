
"use client"

import { useMemo, useState } from "react"
import type { ReactNode } from "react"
import Link from "next/link"

import {
  ArrowUpRight,
  ArrowRight,
  Search,
  X,
  LayoutGrid,
  List,
  Presentation,
  BookOpen,
} from "lucide-react"

import { trackPortfolioEvent } from "@/lib/portfolio-analytics"

import {
  caseStudyEntries,
  type CaseStudyEntry,
} from "@/lib/case-study-data"

/* =====================================================
   CATEGORY CONFIGURATION
===================================================== */

const filters = [
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
    aliases: ["new-product-development", "product-journey"],
    color: "#83A6A5",
  },
]

function normalize(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[\s_&]+/g, "-")
}

function getCategory(study: CaseStudyEntry) {
  const category = normalize(study.category)

  return (
    filters.find((filter) =>
      filter.aliases.includes(category)
    )?.id || `other:${category}`
  )
}

/* =====================================================
   INDIVIDUAL VISUAL IDENTITIES
===================================================== */

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
  "how-i-work": {
    name: "Personal Process",
    color: "#86A397",
    visual: "process",
  },
  instamart: {
    name: "Instamart",
    color: "#C79A76",
    visual: "pickup",
  },
}

function getIdentity(study: CaseStudyEntry) {
  const slug =
    study.link.split("/").filter(Boolean).at(-1) ||
    study.id

  const text = `${slug} ${study.title}`.toLowerCase()

  if (
    text.includes("instamart") &&
    (text.includes("pickup") || text.includes("pick-up"))
  ) {
    return identities.instamart
  }

  return (
    identities[slug] ||
    identities[study.id] || {
      name: "",
      color:
        filters.find(
          (filter) =>
            filter.id === getCategory(study)
        )?.color || "#929B98",
      visual: getCategory(study),
    }
  )
}

/* =====================================================
   REUSABLE SVG PRIMITIVES
===================================================== */

function Frame({
  x = 25,
  y = 20,
  w = 310,
  h = 140,
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
        fill="currentColor"
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
          opacity={i === 0 ? .45 : .22}
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
  children,
}: {
  children: ReactNode
}) {
  return (
    <text
      x="180"
      y="172"
      textAnchor="middle"
      fontSize="8"
      letterSpacing="1.4"
      fill="currentColor"
      opacity=".55"
    >
      {children}
    </text>
  )
}

/* =====================================================
   REUSABLE PROCESS DIAGRAM
===================================================== */

function ProcessDiagram({
  steps,
  color,
}: {
  steps: string[]
  color: string
}) {
  const spacing = 340 / steps.length
  const width = spacing - 10

  return (
    <g>
      <path
        d="M25 83 H335"
        stroke={color}
        strokeDasharray="4 4"
      />

      {steps.map((step, i) => {
        const x = 10 + i * spacing

        return (
          <g key={step}>
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
              fontSize="10"
              textAnchor="middle"
              fill="currentColor"
            >
              0{i + 1}
            </text>

            <text
              x={x + width / 2}
              y="104"
              fontSize="9"
              textAnchor="middle"
              fill="currentColor"
            >
              {step}
            </text>
          </g>
        )
      })}

      <path
        d="M320 123 V145 H40 V123"
        fill="none"
        stroke={color}
        strokeOpacity=".6"
        strokeDasharray="4 4"
      />

      <FigureLabel>
        FEEDBACK & ITERATION
      </FigureLabel>
    </g>
  )
}

/* =====================================================
   ALL CASE STUDY ILLUSTRATIONS

   Each case study receives a dedicated illustration.
   All graphics are rendered directly in SVG.
===================================================== */

function Illustration({
  type,
  color,
}: {
  type: string
  color: string
}) {
  switch (type) {

    /* 01 — ZEPTO */

    case "notifications":
      return (
        <g>
          <rect
            x="102"
            y="9"
            width="156"
            height="157"
            rx="12"
            stroke={color}
            strokeWidth="1.5"
            fill={color}
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
            fill="currentColor"
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
                fill={color}
                fillOpacity=".13"
                stroke={color}
                strokeOpacity=".5"
              />

              <rect
                x="119"
                y={51 + i * 35}
                width="15"
                height="15"
                rx="3"
                fill={color}
                opacity=".8"
              />

              <text
                x="141"
                y={55 + i * 35}
                fontSize="8"
                fill="currentColor"
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

          <Connection
            d="M102 70 H49 V107"
            color={color}
          />

          <Node
            x={8}
            y={107}
            w={82}
            label="Relevance"
            color={color}
          />

          <Connection
            d="M258 119 H309 V64"
            color={color}
          />

          <Node
            x={269}
            y={32}
            w={82}
            label="Engagement"
            color={color}
          />
        </g>
      )

    /* 02 — AMAZON PRIME */

    case "streaming":
      return (
        <g>
          <Frame title="Content discovery" />

          <text
            x="38"
            y="58"
            fontSize="10"
            fill="currentColor"
          >
            Find something to watch
          </text>

          <rect
            x="38"
            y="67"
            width="284"
            height="46"
            rx="4"
            fill={color}
            fillOpacity=".18"
            stroke={color}
          />

          <path
            d="M38 112 L86 78 L130 112 M106 112 L157 80 L201 112"
            fill={color}
            fillOpacity=".2"
            stroke={color}
          />

          <circle
            cx="265"
            cy="90"
            r="13"
            stroke={color}
            fill="none"
          />

          <path
            d="M261 83 L272 90 L261 97Z"
            fill={color}
          />

          {[0, 1, 2, 3, 4].map((i) => (
            <rect
              key={i}
              x={38 + i * 57}
              y="124"
              width="53"
              height="24"
              rx="3"
              fill={color}
              fillOpacity={.15 + i * .1}
              stroke={color}
              strokeOpacity=".5"
            />
          ))}
        </g>
      )

    /* 03 — SPRINTUP */

    case "voice":
      return (
        <g>
          <rect
            x="12"
            y="39"
            width="88"
            height="95"
            rx="5"
            stroke={color}
            fill={color}
            fillOpacity=".07"
          />

          {[12, 23, 34, 18, 44, 27, 12, 33, 20].map(
            (height, i) => (
              <rect
                key={i}
                x={24 + i * 7}
                y={80 - height / 2}
                width="4"
                height={height}
                rx="2"
                fill={color}
              />
            )
          )}

          <text
            x="56"
            y="119"
            fontSize="9"
            textAnchor="middle"
            fill="currentColor"
          >
            Voice input
          </text>

          <Connection d="M100 85 H130" color={color} />

          <rect
            x="130"
            y="50"
            width="85"
            height="70"
            rx="6"
            stroke={color}
            fill={color}
            fillOpacity=".15"
          />

          <path
            d="M172 61 V84 M161 72 H183"
            stroke={color}
            strokeWidth="2"
          />

          <text
            x="172"
            y="103"
            textAnchor="middle"
            fontSize="11"
            fill="currentColor"
          >
            AI agent
          </text>

          {["Create task", "Set priority", "Assign owner"].map(
            (label, i) => (
              <g key={label}>
                <Connection
                  d={`M215 85 H232 V${43 + i * 43} H247`}
                  color={color}
                />

                <Node
                  x={247}
                  y={27 + i * 43}
                  w={104}
                  label={label}
                  color={color}
                />
              </g>
            )
          )}

          <FigureLabel>
            VOICE → TASK → EXECUTION
          </FigureLabel>
        </g>
      )

    /* 04 — THE HINDU */

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
                color={color}
              />
            )
          })}

          <FigureLabel>
            CONCEPTUAL SUBSCRIPTION FUNNEL
          </FigureLabel>
        </g>
      )

    /* 05 — SWIGGY */

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
                fill={color}
                opacity=".4"
              />

              <text
                x="50"
                y={60 + i * 50}
                fontSize="13"
                fill={color}
              >
                ★★★★★
              </text>

              <Lines
                x={50}
                y={70 + i * 50}
                w={145}
                count={3}
              />
            </g>
          ))}

          <Connection d="M218 90 H242" color={color} />

          {["Review quality", "Customer trust", "Conversion"].map(
            (label, i) => (
              <g key={label}>
                <Node
                  x={242}
                  y={24 + i * 48}
                  w={108}
                  label={label}
                  color={color}
                />

                {i < 2 && (
                  <Connection
                    d={`M296 ${56 + i * 48} V${72 + i * 48}`}
                    color={color}
                  />
                )}
              </g>
            )
          )}
        </g>
      )

    /* 06 — NETFLIX */

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
                  color={color}
                />

                <Connection
                  d={`M98 ${38 + i * 47} H120 Q132 ${38 + i * 47} 132 85 H144`}
                  color={color}
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
            stroke={color}
            fill={color}
            fillOpacity=".13"
          />

          <path
            d="M160 65 L185 57 L209 70 L200 103 L178 116 L158 94Z M160 65 L200 103 M185 57 L178 116 M209 70 L158 94"
            stroke={color}
            strokeOpacity=".8"
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
              fill={color}
            />
          ))}

          <Connection d="M225 85 H247" color={color} />

          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect
                x="247"
                y={22 + i * 47}
                width="103"
                height="35"
                rx="4"
                fill={color}
                fillOpacity=".13"
                stroke={color}
              />

              <path
                d={`M260 ${32 + i * 47} L273 ${39 + i * 47} L260 ${46 + i * 47}Z`}
                fill={color}
              />

              <Lines
                x={281}
                y={33 + i * 47}
                w={55}
                count={2}
              />
            </g>
          ))}

          <FigureLabel>
            PERSONALISED RECOMMENDATION ENGINE
          </FigureLabel>
        </g>
      )

    /* 07 — HARLEY-DAVIDSON */

    case "motorcycle":
      return (
        <g>
          <g
            transform="translate(12 8)"
            stroke={color}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          >
            <circle cx="42" cy="105" r="27" />
            <circle cx="154" cy="105" r="27" />

            <circle
              cx="42"
              cy="105"
              r="18"
              opacity=".4"
            />

            <circle
              cx="154"
              cy="105"
              r="18"
              opacity=".4"
            />

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
              fill={color}
              fillOpacity=".15"
            />

            <path d="M70 114 H128" strokeWidth="4" />
          </g>

          <Connection d="M202 90 H230" color={color} />

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
              color={color}
            />
          ))}

          <FigureLabel>
            STRATEGY THROUGH MARKET TRANSITION
          </FigureLabel>
        </g>
      )

    /* 08 — YEEZY */

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
            fill="currentColor"
          >
            YZY
          </text>

          <path
            d="M42 107 Q62 98 75 82 L99 85 Q112 100 142 98 L183 113 Q195 123 181 131 H63 Q40 131 42 107Z"
            fill={color}
            fillOpacity=".17"
            stroke={color}
            strokeWidth="1.5"
          />

          <path
            d="M43 119 H185"
            stroke={color}
          />

          <Connection d="M217 86 H236" color={color} />

          <Node
            x={236}
            y={30}
            w={115}
            label="UX conventions"
            color={color}
          />

          <text
            x="293"
            y="88"
            fontSize="16"
            textAnchor="middle"
            fill="currentColor"
            opacity=".6"
          >
            vs.
          </text>

          <Node
            x={236}
            y={103}
            w={115}
            label="Brand demand"
            color={color}
          />

          <FigureLabel>THE UX PARADOX</FigureLabel>
        </g>
      )

    /* 09 — FIGMA */

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
              fill="currentColor"
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
              stroke={color}
              fill={color}
              fillOpacity=".13"
            />
          ))}

          {[
            [145, 80, "#86A397", "Design"],
            [218, 94, "#819BB8", "Product"],
            [266, 119, "#B5A078", "Engineer"],
          ].map(([x, y, c, name]) => (
            <g key={String(name)}>
              <path
                d={`M${x} ${y} v15 l5 -5 5 3Z`}
                fill={String(c)}
              />

              <rect
                x={Number(x) + 7}
                y={Number(y) + 12}
                width="48"
                height="13"
                rx="2"
                fill={String(c)}
              />

              <text
                x={Number(x) + 31}
                y={Number(y) + 21}
                fontSize="7"
                textAnchor="middle"
                fill="#ffffff"
              >
                {name}
              </text>
            </g>
          ))}
        </g>
      )

    /* 10 — CHASE */

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
            fill={color}
            fillOpacity=".15"
            stroke={color}
          />

          <text
            x="45"
            y="68"
            fontSize="8"
            fill="currentColor"
          >
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
                fill="currentColor"
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
            stroke={color}
            fill={color}
            fillOpacity=".05"
          />

          <text
            x="169"
            y="68"
            fontSize="9"
            fill="currentColor"
          >
            AI financial guide
          </text>

          <rect
            x="184"
            y="77"
            width="126"
            height="20"
            rx="4"
            fill={color}
            fillOpacity=".25"
          />

          <text
            x="194"
            y="90"
            fontSize="8"
            fill="currentColor"
          >
            How can I save more?
          </text>

          <rect
            x="169"
            y="105"
            width="134"
            height="30"
            rx="4"
            stroke={color}
            strokeOpacity=".6"
            fill="none"
          />

          <Lines
            x={179}
            y={114}
            w={111}
            count={2}
          />
        </g>
      )

    /* 11 — CRED */

    case "habit":
      return (
        <g>
          <circle
            cx="180"
            cy="85"
            r="63"
            stroke={color}
            strokeDasharray="4 5"
            fill="none"
          />

          <circle
            cx="180"
            cy="85"
            r="33"
            stroke={color}
            fill={color}
            fillOpacity=".15"
          />

          <path
            d="M169 69 H191 V91 H169Z M175 63 V74 M185 63 V74 M169 77 H191"
            stroke={color}
            strokeWidth="1.5"
            fill="none"
          />

          <text
            x="180"
            y="105"
            fontSize="8"
            textAnchor="middle"
            fill="currentColor"
          >
            Daily habit
          </text>

          {[
            [140, 7, "Trigger"],
            [244, 69, "Action"],
            [140, 132, "Reward"],
            [36, 69, "Return"],
          ].map(([x, y, label]) => (
            <Node
              key={String(label)}
              x={Number(x)}
              y={Number(y)}
              w={80}
              h={29}
              label={String(label)}
              color={color}
            />
          ))}

          <g stroke={color} fill="none">
            <path d="M225 41 L237 44 L232 54" />
            <path d="M252 121 L243 131 L236 124" />
            <path d="M124 132 L114 127 L119 119" />
            <path d="M109 46 L119 38 L123 47" />
          </g>
        </g>
      )

    /* 12 — NOTION */

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
                fill="currentColor"
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
            fill="currentColor"
          >
            Product strategy
          </text>

          <Lines
            x={122}
            y={76}
            w={183}
            count={4}
          />

          <rect
            x="119"
            y="114"
            width="202"
            height="33"
            rx="4"
            fill={color}
            fillOpacity=".15"
            stroke={color}
          />

          <path
            d="M134 121 V139 M125 130 H143"
            stroke={color}
            strokeWidth="1.7"
          />

          <text
            x="151"
            y="129"
            fontSize="9"
            fill="currentColor"
          >
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

    /* 13 — JPMC INDIA */

    case "market-entry":
      return (
        <g>
          <circle
            cx="66"
            cy="62"
            r="35"
            stroke={color}
            fill={color}
            fillOpacity=".12"
          />

          <ellipse
            cx="66"
            cy="62"
            rx="15"
            ry="35"
            stroke={color}
            fill="none"
          />

          <path
            d="M31 62 H101 M38 43 H94 M38 81 H94"
            stroke={color}
          />

          <Connection
            d="M101 62 H133 V37 H158"
            color={color}
          />

          <Connection
            d="M101 62 H133 V83 H158"
            color={color}
          />

          <Node
            x={158}
            y={21}
            w={180}
            label="Market opportunity"
            color={color}
          />

          <Node
            x={158}
            y={67}
            w={180}
            label="Local customer needs"
            color={color}
          />

          <path
            d="M45 132 H315"
            stroke={color}
            strokeWidth="1.5"
          />

          {["Research", "Localise", "Enter", "Scale"].map(
            (label, i) => (
              <g key={label}>
                <circle
                  cx={45 + i * 90}
                  cy="132"
                  r="8"
                  fill={color}
                />

                <text
                  x={45 + i * 90}
                  y="155"
                  fontSize="9"
                  textAnchor="middle"
                  fill="currentColor"
                >
                  {label}
                </text>
              </g>
            )
          )}
        </g>
      )

    /* 14 — ELECTRONIC SOUNDBOOK */

    case "soundbook":
      return (
        <g>
          <path
            d="M180 39 Q128 14 57 28 V133 Q124 120 180 145 Q236 120 303 133 V28 Q232 14 180 39Z"
            fill={color}
            fillOpacity=".08"
            stroke={color}
            strokeWidth="1.5"
          />

          <path
            d="M180 39 V145"
            stroke={color}
          />

          <path
            d="M50 139 Q121 127 180 152 Q239 127 310 139"
            stroke={color}
            fill="none"
          />

          <circle
            cx="119"
            cy="76"
            r="28"
            fill={color}
            fillOpacity=".13"
            stroke={color}
          />

          <path
            d="M101 70 H112 L124 59 V93 L112 82 H101Z"
            fill={color}
            fillOpacity=".25"
            stroke={color}
          />

          <path
            d="M130 67 Q142 76 130 85 M136 59 Q154 76 136 93"
            stroke={color}
            strokeWidth="1.5"
            fill="none"
          />

          <text
            x="119"
            y="119"
            textAnchor="middle"
            fontSize="8"
            fill="currentColor"
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
                stroke={color}
                fill={color}
                fillOpacity=".13"
              />

              <circle
                cx="211"
                cy={53 + i * 26}
                r="4"
                fill={color}
              />

              <rect
                x="222"
                y={51 + i * 26}
                width="45"
                height="4"
                rx="2"
                fill={color}
                opacity=".6"
              />
            </g>
          ))}

          <g stroke={color} fill="none">
            <path d="M43 54 Q18 78 43 102" />
            <path d="M33 44 Q0 78 33 112" />
            <path d="M317 54 Q342 78 317 102" />
            <path d="M327 44 Q360 78 327 112" />
          </g>

          <FigureLabel>
            SCREEN-FREE INTERACTIVE LEARNING
          </FigureLabel>
        </g>
      )

    /* 15 — INSTAMART PICKUP */

    case "pickup":
      return (
        <g>
          {/* Pickup radius — conceptual */}

          <circle
            cx="180"
            cy="84"
            r="76"
            stroke={color}
            strokeDasharray="5 5"
            fill={color}
            fillOpacity=".04"
          />

          <circle
            cx="180"
            cy="84"
            r="53"
            stroke={color}
            strokeOpacity=".35"
            fill="none"
          />

          {/* Street network */}

          <g
            stroke="currentColor"
            strokeOpacity=".16"
            strokeWidth="6"
            fill="none"
          >
            <path d="M14 45 H346" />
            <path d="M14 136 H346" />
            <path d="M76 10 V160" />
            <path d="M282 10 V160" />
          </g>

          {/* Store */}

          <rect
            x="147"
            y="61"
            width="66"
            height="48"
            rx="4"
            fill={color}
            fillOpacity=".25"
            stroke={color}
          />

          <path
            d="M143 62 L151 46 H209 L217 62Z"
            fill={color}
            fillOpacity=".5"
            stroke={color}
          />

          <rect
            x="174"
            y="78"
            width="15"
            height="31"
            stroke={color}
            fill="none"
          />

          <rect
            x="154"
            y="75"
            width="12"
            height="14"
            stroke={color}
            fill="none"
          />

          <rect
            x="194"
            y="75"
            width="12"
            height="14"
            stroke={color}
            fill="none"
          />

          <text
            x="180"
            y="123"
            textAnchor="middle"
            fontSize="9"
            fill="currentColor"
          >
            Pickup point
          </text>

          {[
            [65, 70],
            [280, 70],
            [95, 133],
            [265, 133],
          ].map(([x, y], i) => (
            <g key={i}>
              <circle
                cx={x}
                cy={y}
                r="7"
                fill={color}
                fillOpacity=".4"
                stroke={color}
              />

              <Connection
                d={`M${x} ${y} Q180 ${y} 180 84`}
                color={color}
              />
            </g>
          ))}

          <FigureLabel>
            ORDER ONLINE → COLLECT IN STORE
          </FigureLabel>
        </g>
      )

    /* 16 — PERSONAL PROCESS */

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
          color={color}
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
                color={color}
              />
            )
          })}

          <FigureLabel>
            CONCEPTUAL ANALYTICS FRAMEWORK
          </FigureLabel>
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
            stroke={color}
            fill="none"
          />

          <path
            d="M180 15 V152 M37 83 H323"
            stroke={color}
            strokeDasharray="4 4"
            opacity=".65"
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
              stroke={color}
              fill={color}
              fillOpacity=".17"
            />
          ))}

          <FigureLabel>
            COMPETITIVE POSITIONING FRAMEWORK
          </FigureLabel>
        </g>
      )

    case "teardowns":
    case "design":
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
                stroke={color}
                fill={color}
                fillOpacity=".04"
              />

              <rect
                x={30 + i * 113}
                y="35"
                width="71"
                height="40"
                rx="3"
                fill={color}
                fillOpacity=".25"
              />

              <Lines
                x={30 + i * 113}
                y={89}
                w={71}
                count={3}
              />

              <rect
                x={30 + i * 113}
                y="129"
                width="71"
                height="15"
                rx="3"
                fill={color}
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
          color={color}
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
          color={color}
        />
      )
  }
}

/* =====================================================
   VISUAL CONTAINER

   This component MUST appear inside every research card.
===================================================== */

function StudyVisual({
  study,
  compact = false,
}: {
  study: CaseStudyEntry
  compact?: boolean
}) {
  const identity = getIdentity(study)

  return (
    <div
      className={`relative isolate w-full overflow-hidden rounded-md border border-border ${
        compact
          ? "aspect-[16/9]"
          : "aspect-[1.85/1]"
      }`}
      style={{
        backgroundColor: `${identity.color}16`,
      }}
    >
      {/* Dotted technical illustration background */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(currentColor 0.7px, transparent 0.7px)",
          backgroundSize: "15px 15px",
        }}
      />

      <svg
        viewBox="0 0 380 200"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={`Conceptual illustration for ${study.title}`}
        className={`relative block h-full w-full ${
          compact ? "p-1" : "p-3"
        } transition-transform duration-300 group-hover:scale-[1.025] motion-reduce:transform-none`}
      >
        <g transform="translate(10 10)">
          <Illustration
            type={identity.visual}
            color={identity.color}
          />
        </g>
      </svg>

      {!compact && (
        <span className="absolute bottom-2 right-3">
          <ArrowUpRight
            size={14}
            className="text-muted-foreground"
          />
        </span>
      )}
    </div>
  )
}

/* =====================================================
   ANALYTICS
===================================================== */

function trackStudy(study: CaseStudyEntry) {
  trackPortfolioEvent(
    "case_study_card_click",
    { study: study.id }
  )
}

/* =====================================================
   HOW I WORK — LARGE LANDSCAPE CARD
===================================================== */

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
      className="scroll-mt-28 border-t border-border py-8 md:py-10"
    >
      <p className="mb-5 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        01 / My approach
      </p>

      <Link
        href={processStudy.link}
        onClick={() => trackStudy(processStudy)}
        className="group grid w-full items-center gap-6 rounded-md border border-border p-5 transition-colors hover:border-primary/50 md:grid-cols-[1fr_1fr] md:gap-10 md:p-8"
      >
        <div>
          <p className="mb-3 text-[10px] uppercase tracking-widest text-muted-foreground">
            How I work
          </p>

          <h2 className="font-serif text-[30px] leading-tight tracking-tight md:text-[36px]">
            Turning ideas into

            <span className="block italic text-muted-foreground">
              working tools with AI.
            </span>
          </h2>

          <p className="mt-4 max-w-lg text-sm leading-[1.8] text-muted-foreground">
            {processStudy.description}
          </p>

          <span className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-medium group-hover:text-primary">
            Explore my process
            <ArrowUpRight size={15} />
          </span>
        </div>

        {/* Required visual — right side on desktop */}

        <StudyVisual study={processStudy} />
      </Link>
    </section>
  )
}

/* =====================================================
   REUSABLE ILLUSTRATED RESEARCH CARD
===================================================== */

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
        {/* Every card starts with a coded visual */}

        <StudyVisual study={study} />

        <div className="flex flex-1 flex-col pt-5">
          <p className="mb-3 text-[10px] font-medium uppercase leading-relaxed tracking-[0.12em] text-muted-foreground">
            {identity.name && `${identity.name} / `}
            {study.categoryLabel}
          </p>

          <h3 className="font-serif text-[23px] leading-[1.3] tracking-tight transition-colors group-hover:text-primary md:text-[25px]">
            {study.title}
          </h3>

          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {study.description}
          </p>

          {study.contentClassification &&
            study.contentClassification.toLowerCase() !==
              study.categoryLabel.toLowerCase() && (
              <p className="mt-3 text-xs text-muted-foreground">
                {study.contentClassification}
              </p>
            )}

          <span className="mt-auto inline-flex min-h-11 items-center gap-2 pt-5 text-sm font-medium group-hover:text-primary">
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

/* =====================================================
   RESEARCH ARCHIVE — LIST VIEW

   Even list rows retain a proper illustrated thumbnail.
===================================================== */

function StudyRow({
  study,
}: {
  study: CaseStudyEntry
}) {
  const identity = getIdentity(study)

  return (
    <article className="group border-b border-border py-6">
      <Link
        href={study.link}
        onClick={() => trackStudy(study)}
        className="grid items-start gap-4 sm:grid-cols-[190px_minmax(0,1fr)] sm:gap-6 md:grid-cols-[260px_minmax(0,1fr)_24px] md:items-center"
      >
        <StudyVisual study={study} compact />

        <div className="min-w-0">
          <p className="mb-2 text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
            {identity.name && `${identity.name} / `}
            {study.categoryLabel}
          </p>

          <h3 className="font-serif text-xl leading-snug transition-colors group-hover:text-primary md:text-[26px]">
            {study.title}
          </h3>

          <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {study.description}
          </p>

          <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium sm:hidden">
            Read case study
            <ArrowUpRight size={13} />
          </span>
        </div>

        <ArrowUpRight
          size={19}
          className="hidden text-muted-foreground md:block"
        />
      </Link>

      {study.pptLink && (
        <a
          href={study.pptLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex min-h-11 items-center gap-2 text-xs text-muted-foreground hover:text-primary"
        >
          <Presentation size={13} />
          View presentation
          <ArrowUpRight size={12} />
        </a>
      )}
    </article>
  )
}

/* =====================================================
   FEATURED RESEARCH SECTION
===================================================== */

function FeaturedResearch({
  studies,
}: {
  studies: CaseStudyEntry[]
}) {
  const featured = studies.filter(
    (study) => study.featured
  )

  return (
    <section
      id="featured"
      className="scroll-mt-28 border-t border-border py-10 md:py-14"
    >
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-3 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            02 / Selected research
          </p>

          <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
            Featured case studies
          </h2>

          <p className="mt-3 text-sm text-muted-foreground">
            A closer look at product decisions.
          </p>
        </div>

        <span className="text-xs text-muted-foreground">
          {featured.length} selected studies
        </span>
      </div>

      {featured.length > 0 ? (
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
          {featured.map((study) => (
            <StudyCard
              key={study.link}
              study={study}
            />
          ))}
        </div>
      ) : (
        <p className="text-sm text-muted-foreground">
          Explore all published research in the archive.
        </p>
      )}
    </section>
  )
}

/* =====================================================
   RESEARCH ARCHIVE
===================================================== */

function ResearchArchive({
  studies,
}: {
  studies: CaseStudyEntry[]
}) {
  const [query, setQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState("all")

  // Grid is intentionally the default so every study
  // has a large visual cover.

  const [view, setView] = useState<"grid" | "list">(
    "grid"
  )

  const [limit, setLimit] = useState(12)

  const availableFilters = useMemo(() => {
    const known = filters.map((filter) => ({
      id: filter.id,
      label: filter.label,
      count:
        filter.id === "all"
          ? studies.length
          : studies.filter(
              (study) =>
                getCategory(study) === filter.id
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

    return [...known, ...custom.values()]
  }, [studies])

  const filtered = useMemo(() => {
    const search = query.trim().toLowerCase()

    return studies.filter((study) => {
      const identity = getIdentity(study)

      const matchesCategory =
        activeFilter === "all" ||
        getCategory(study) === activeFilter

      const text = [
        study.title,
        study.description,
        study.categoryLabel,
        study.contentClassification,
        identity.name,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()

      return (
        matchesCategory &&
        (!search || text.includes(search))
      )
    })
  }, [studies, query, activeFilter])

  const visible = filtered.slice(0, limit)

  function clearFilters() {
    setQuery("")
    setActiveFilter("all")
    setLimit(12)
  }

  return (
    <section
      id="archive"
      className="scroll-mt-28 border-t border-border py-10 md:py-14"
    >
      <div className="mb-8">
        <p className="mb-3 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          03 / The research archive
        </p>

        <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
          Explore the research.
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          An ongoing collection of product teardowns,
          market analysis, feature hypotheses,
          growth strategies and product development studies.
        </p>
      </div>

      {/* Search and view controls */}

      <div className="mb-5 flex flex-wrap items-center gap-3">
        <div className="relative min-w-[200px] flex-1">
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
            aria-label="Search case studies"
            placeholder="Search companies, topics, problems..."
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
          aria-label="Case study layout"
          className="flex rounded-md border border-border p-1"
        >
          <button
            type="button"
            aria-label="Grid view"
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
            aria-label="List view"
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

      {/* Underlined category navigation */}

      <div className="flex gap-6 overflow-x-auto border-b border-border">
        {availableFilters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            aria-pressed={activeFilter === filter.id}
            onClick={() => {
              setActiveFilter(filter.id)
              setLimit(12)
            }}
            className={`inline-flex min-h-12 shrink-0 items-center gap-2 whitespace-nowrap border-b-2 text-xs transition-colors md:text-sm ${
              activeFilter === filter.id
                ? "border-foreground font-medium text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {filter.label}

            <span className="text-[10px] tabular-nums opacity-60">
              {filter.count}
            </span>
          </button>
        ))}
      </div>

      {/* Result count */}

      <div className="flex min-h-14 items-center justify-between gap-3">
        <p
          aria-live="polite"
          className="text-xs text-muted-foreground"
        >
          {filtered.length} case studies
        </p>

        {(query || activeFilter !== "all") && (
          <button
            type="button"
            onClick={clearFilters}
            className="inline-flex min-h-11 items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground"
          >
            <X size={13} />
            Clear filters
          </button>
        )}
      </div>

      {/* Actual research cards */}

      {visible.length > 0 ? (
        <>
          {view === "grid" ? (
            <div className="grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
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

          <div className="mt-12 flex flex-col items-center gap-4">
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
                <ArrowRight size={14} />
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

/* =====================================================
   EDITORIAL CONCLUSION
===================================================== */

function Conclusion() {
  return (
    <section className="grid items-center gap-8 border-t border-border py-12 md:grid-cols-[1.2fr_.8fr] md:py-16">
      <div>
        <p className="mb-4 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          Research before decisions
        </p>

        <h2 className="font-serif text-3xl leading-tight tracking-tight md:text-[42px]">
          A good answer begins

          <span className="block italic text-muted-foreground">
            with a better question.
          </span>
        </h2>

        <p className="mt-5 max-w-lg text-sm leading-[1.8] text-muted-foreground">
          Product thinking is not simply about proposing
          solutions. It is about understanding whether
          a problem deserves to be solved in the first place.
        </p>
      </div>

      <div>
        <svg
          viewBox="0 0 360 180"
          role="img"
          aria-label="Problem, evidence and decision framework"
          className="h-auto w-full"
        >
          <ProcessDiagram
            steps={["Problem", "Evidence", "Decision"]}
            color="#86A397"
          />
        </svg>

        <Link
          href="/work"
          className="flex min-h-11 items-center justify-center gap-2 text-sm font-medium hover:text-primary md:justify-end"
        >
          See what I've built
          <ArrowUpRight size={15} />
        </Link>
      </div>
    </section>
  )
}

/* =====================================================
   MAIN COMPONENT

   Preserves all server-loaded Supabase data.
   Restores original featured flags and presentation links
   when the server's database merge omits those fields.
===================================================== */

export function CaseStudiesPageClient({
  studies,
}: {
  studies: CaseStudyEntry[]
}) {
  const researchStudies = useMemo(() => {
    const staticStudies = new Map(
      caseStudyEntries.map((study) => [
        study.link.replace(/\/+$/, "").toLowerCase(),
        study,
      ])
    )

    return studies
      .filter(
        (study) =>
          study.link.replace(/\/+$/, "").toLowerCase() !==
          "/case-studies/how-i-work"
      )
      .map((study) => {
        const original = staticStudies.get(
          study.link.replace(/\/+$/, "").toLowerCase()
        )

        return {
          ...study,
          featured:
            study.featured ?? original?.featured,
          pptLink:
            study.pptLink ?? original?.pptLink,
        }
      })
  }, [studies])

  return (
    <div
      data-case-studies-layout="illustrated-v2"
      className="mx-auto max-w-6xl px-5 md:px-8"
    >
      <HowIWork />

      <FeaturedResearch
        studies={researchStudies}
      />

      <ResearchArchive
        studies={researchStudies}
      />

      <Conclusion />
    </div>
  )
}
