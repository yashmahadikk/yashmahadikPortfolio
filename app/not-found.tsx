
import Link from "next/link"

import {
  ArrowLeft,
  ArrowUpRight,
  Layers,
  FileSearch,
  BookOpen,
  Compass,
  Github,
  Linkedin,
  Mail,
  Twitter,
  ChevronDown,
} from "lucide-react"

/*
 * File: app/not-found.tsx
 *
 * Standalone 404 page.
 * Uses existing theme variables and typography.
 * All illustrations are coded using SVG.
 * Preserves existing sitemap and social links.
 * No additional dependencies.
 * Build and browser validation required.
 */

const destinations = [
  {
    label: "Work",
    description: "Things I've built",
    href: "/work",
    icon: Layers,
  },
  {
    label: "Case studies",
    description: "How I think",
    href: "/case-studies",
    icon: FileSearch,
  },
  {
    label: "Blog",
    description: "Things I've written",
    href: "/blog",
    icon: BookOpen,
  },
  {
    label: "My journey",
    description: "How I got here",
    href: "/journey",
    icon: Compass,
  },
]

const sitemap = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Experience", href: "/experience" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "My Journey", href: "/journey" },
  { label: "Books", href: "/books" },
  { label: "Movies", href: "/movies" },
  { label: "Games", href: "/games" },
  { label: "Tools", href: "/tools" },
  { label: "Mentors", href: "/mentors" },
  { label: "Certificates", href: "/certificates" },
  { label: "Bucket List", href: "/bucket-list" },
  { label: "Curated Links", href: "/curated-links" },
  { label: "Contact", href: "/contact" },
]

const socials = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/yashmahadik2",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/yashmahadikk",
    icon: Github,
  },
  {
    label: "Twitter / X",
    href: "https://x.com/yash_mahadik",
    icon: Twitter,
  },
  {
    label: "Email",
    href: "mailto:yashmahadik2005@gmail.com",
    icon: Mail,
  },
]

/* =========================================================
   ORIGINAL SVG CARTOGRAPHIC ILLUSTRATION
========================================================= */

function LostMap() {
  return (
    <svg
      viewBox="0 0 480 340"
      className="h-auto w-full"
      role="img"
      aria-label="An unfinished map showing a lost destination and alternative paths back home."
    >
      <defs>
        <pattern
          id="map-grid-404"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <circle
            cx="1"
            cy="1"
            r="0.8"
            fill="currentColor"
            opacity="0.12"
          />
        </pattern>

        <pattern
          id="unknown-region-404"
          width="8"
          height="8"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <path
            d="M0 0 V8"
            stroke="currentColor"
            strokeOpacity="0.07"
            strokeWidth="2"
          />
        </pattern>

        <clipPath id="map-boundary-404">
          <rect
            x="1"
            y="1"
            width="478"
            height="338"
            rx="5"
          />
        </clipPath>
      </defs>

      {/* Map boundary */}

      <rect
        x="1"
        y="1"
        width="478"
        height="338"
        rx="5"
        fill="url(#map-grid-404)"
        stroke="currentColor"
        strokeOpacity="0.1"
      />

      <g clipPath="url(#map-boundary-404)">

        {/* Topographic contour lines */}

        <g
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.1"
          strokeWidth="1"
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <path
              key={`top-${i}`}
              d={`
                M -15 ${35 + i * 19}
                C 55 ${-25 + i * 19},
                  100 ${65 + i * 19},
                  170 ${30 + i * 19}
                S 310 ${-20 + i * 19},
                  500 ${52 + i * 19}
              `}
            />
          ))}

          {Array.from({ length: 5 }).map((_, i) => (
            <path
              key={`bottom-${i}`}
              d={`
                M -15 ${245 + i * 19}
                C 65 ${205 + i * 19},
                  115 ${290 + i * 19},
                  190 ${260 + i * 19}
                S 320 ${210 + i * 19},
                  500 ${252 + i * 19}
              `}
            />
          ))}
        </g>

        {/* Uncharted territory */}

        <path
          d="
            M302 35
            L455 28
            L463 210
            L401 235
            L315 196
            L282 113
            Z
          "
          fill="url(#unknown-region-404)"
          stroke="currentColor"
          strokeOpacity="0.14"
          strokeDasharray="4 6"
        />

        <text
          x="379"
          y="63"
          fontSize="9"
          letterSpacing="2"
          textAnchor="middle"
          fill="currentColor"
          opacity="0.4"
        >
          UNCHARTED TERRITORY
        </text>

        {/* Alternative paths */}

        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeOpacity="0.3"
          strokeDasharray="4 6"
        >
          <path
            d="M160 150 C168 93 205 90 224 61"
          />

          <path
            d="M160 150 C186 201 240 230 284 251"
          />

          <path
            d="M262 151 C265 115 260 96 291 86"
          />
        </g>

        {/* Main journey path */}

        <path
          d="
            M 58 234
            C 103 234, 108 150, 160 150
            S 214 197, 262 151
            S 317 119, 366 153
          "
          fill="none"
          stroke="var(--primary)"
          strokeWidth="2"
          strokeDasharray="5 7"
          strokeLinecap="round"
          opacity="0.65"
        />

        {/* Home marker */}

        <circle
          cx="58"
          cy="234"
          r="14"
          fill="var(--background)"
          stroke="var(--primary)"
          strokeOpacity="0.6"
        />

        <circle
          cx="58"
          cy="234"
          r="4"
          fill="var(--primary)"
        />

        <text
          x="58"
          y="261"
          fontSize="10"
          fontWeight="500"
          textAnchor="middle"
          letterSpacing="1.5"
          fill="currentColor"
          opacity="0.65"
        >
          HOME
        </text>

        {/* Junction markers */}

        <circle
          cx="160"
          cy="150"
          r="5"
          fill="var(--background)"
          stroke="var(--primary)"
          strokeWidth="1.5"
        />

        <circle
          cx="262"
          cy="151"
          r="4"
          fill="var(--primary)"
          opacity="0.7"
        />

        {/* Work destination */}

        <circle
          cx="224"
          cy="61"
          r="6"
          fill="var(--background)"
          stroke="currentColor"
          strokeOpacity="0.4"
        />

        <circle
          cx="224"
          cy="61"
          r="2"
          fill="currentColor"
          opacity="0.4"
        />

        <text
          x="224"
          y="43"
          fontSize="9"
          textAnchor="middle"
          letterSpacing="1.5"
          fill="currentColor"
          opacity="0.5"
        >
          WORK
        </text>

        {/* Explore destination */}

        <circle
          cx="284"
          cy="251"
          r="6"
          fill="var(--background)"
          stroke="currentColor"
          strokeOpacity="0.4"
        />

        <text
          x="284"
          y="274"
          textAnchor="middle"
          fontSize="9"
          letterSpacing="1.5"
          fill="currentColor"
          opacity="0.5"
        >
          EXPLORE
        </text>

        {/* Lost destination marker */}

        <circle
          cx="366"
          cy="153"
          r="35"
          fill="#B58C79"
          fillOpacity="0.035"
          stroke="#B58C79"
          strokeOpacity="0.5"
          strokeDasharray="3 6"
        />

        <circle
          cx="366"
          cy="153"
          r="23"
          fill="var(--background)"
          stroke="#B58C79"
          strokeOpacity="0.7"
          strokeWidth="1.2"
        >
          <animate
            attributeName="stroke-opacity"
            values="0.7;0.7"
            dur="1s"
            repeatCount="1"
          />
        </circle>

        <circle
          cx="366"
          cy="153"
          r="14"
          fill="#B58C79"
          fillOpacity="0.12"
          stroke="#B58C79"
        />

        <path
          d="M361 148 L371 158 M371 148 L361 158"
          stroke="#B58C79"
          strokeWidth="1.7"
          strokeLinecap="round"
        />

        <text
          x="366"
          y="203"
          fontSize="10"
          fontWeight="500"
          textAnchor="middle"
          letterSpacing="1.2"
          fill="currentColor"
          opacity="0.8"
        >
          YOU ARE HERE
        </text>

        <text
          x="366"
          y="217"
          fontSize="8"
          textAnchor="middle"
          fill="currentColor"
          opacity="0.4"
        >
          Destination not found
        </text>

        {/* Compass */}

        <g transform="translate(38 38)">
          <circle
            cx="0"
            cy="0"
            r="17"
            fill="var(--background)"
            stroke="currentColor"
            strokeOpacity="0.25"
          />

          <circle
            cx="0"
            cy="0"
            r="11"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.15"
          />

          <path
            d="M0 -11 L5 2 L0 0 L-5 2 Z"
            fill="currentColor"
            opacity="0.55"
          />

          <path
            d="M0 11 L5 -2 L0 0 L-5 -2 Z"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.25"
          />

          <text
            x="0"
            y="-23"
            textAnchor="middle"
            fontSize="8"
            fill="currentColor"
            opacity="0.45"
          >
            N
          </text>
        </g>

        {/* Cartographic annotations */}

        <g
          stroke="currentColor"
          strokeOpacity="0.3"
          strokeWidth="0.8"
        >
          <path d="M25 304 H85" />
          <path d="M25 299 V309 M55 301 V307 M85 299 V309" />
        </g>

        <text
          x="25"
          y="324"
          fontSize="8"
          letterSpacing="1"
          fill="currentColor"
          opacity="0.35"
        >
          NOT TO SCALE
        </text>

        <text
          x="455"
          y="324"
          fontSize="9"
          textAnchor="end"
          letterSpacing="2"
          fill="currentColor"
          opacity="0.35"
        >
          MAP / 404
        </text>

      </g>
    </svg>
  )
}

/* =========================================================
   MAIN 404 PAGE
========================================================= */

export default function NotFound() {
  return (
    <main className="min-h-svh bg-background text-foreground">

      <div className="mx-auto flex min-h-svh max-w-6xl flex-col px-5 md:px-8">

        {/* ===============================================
            MINIMAL HEADER
        ================================================ */}

        <header className="flex items-center justify-between border-b border-border py-3 md:py-4">

          <Link
            href="/"
            className="text-lg font-semibold tracking-tight transition-opacity hover:opacity-60"
          >
            yash mahadik.
          </Link>

          <div className="flex items-center gap-2">

            <span className="size-1.5 rounded-full bg-[#B58C79]" />

            <span className="font-mono text-[11px] tracking-widest text-muted-foreground">
              ERROR / 404
            </span>

          </div>

        </header>

        {/* ===============================================
            MAIN ERROR SECTION
        ================================================ */}

        <section className="grid items-center gap-3 py-3 md:gap-5 md:py-4 lg:grid-cols-[1fr_1fr]">

          {/* Text content */}

          <div className="order-2 lg:order-1">

            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Not every path leads somewhere.
            </p>

            <h1 className="font-serif text-[clamp(2.5rem,4vw,3.5rem)] font-normal leading-[1.05] tracking-tight">

              This page wandered

              <span className="block italic text-muted-foreground">
                off the map.
              </span>

            </h1>

            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">

              Even good products have dead ends.
              This happens to be one of mine.

            </p>

            <p className="mt-2 max-w-md text-xs leading-relaxed text-muted-foreground">

              The link may be outdated, or the page may
              never have existed. Either way, there are
              still plenty of things to explore.

            </p>

            {/* Primary recovery actions */}

            <div className="mt-4 flex flex-wrap items-center gap-3">

              <Link
                href="/"
                className="inline-flex min-h-11 items-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >

                <ArrowLeft size={16} aria-hidden="true" />

                Back home

              </Link>

              <Link
                href="/work"
                className="inline-flex min-h-11 items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium transition-colors hover:border-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >

                Explore my work

                <ArrowUpRight size={15} aria-hidden="true" />

              </Link>

            </div>

          </div>

          {/* Coded illustration */}

          <div className="order-1 mx-auto w-full max-w-[420px] lg:order-2">

            <LostMap />

            <div className="mt-3 flex items-center justify-between">

              <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                Fig. 01 — A wrong turn
              </span>

              <span className="font-mono text-[9px] text-muted-foreground">
                404
              </span>

            </div>

          </div>

        </section>

        {/* ===============================================
            RECOMMENDED DESTINATIONS
        ================================================ */}

        <section className="border-t border-border py-3 md:py-4">

          <div className="mb-2 flex items-center gap-3">

            <Compass
              size={17}
              strokeWidth={1.4}
              className="text-muted-foreground"
            />

            <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Perhaps you were looking for...
            </h2>

          </div>

          <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">

            {destinations.map((destination) => {
              const Icon = destination.icon

              return (
                <Link
                  key={destination.href}
                  href={destination.href}
                  className="group flex min-w-0 flex-col rounded-md border border-border p-3 transition-colors hover:border-primary/60 hover:bg-muted/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:p-3"
                >

                  <div className="mb-2 flex items-center justify-between">

                    <Icon
                      size={23}
                      strokeWidth={1.4}
                      className="text-muted-foreground transition-colors group-hover:text-primary"
                    />

                    <ArrowUpRight
                      size={15}
                      className="text-muted-foreground/60 transition-colors group-hover:text-primary"
                    />

                  </div>

                  <h3 className="text-sm font-semibold md:text-base">
                    {destination.label}
                  </h3>

                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground md:text-sm">
                    {destination.description}
                  </p>

                </Link>
              )
            })}

          </div>

        </section>

        {/* ===============================================
            COLLAPSIBLE FULL SITEMAP
        ================================================ */}

        <section className="border-y border-border">

          <details className="group">

            <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 py-3 [&::-webkit-details-marker]:hidden">

              <div className="flex items-center gap-3">

                <Compass
                  size={17}
                  strokeWidth={1.4}
                  className="text-muted-foreground"
                />

                <span className="text-sm font-medium">
                  Explore the full sitemap
                </span>

              </div>

              <ChevronDown
                size={17}
                className="text-muted-foreground transition-transform group-open:rotate-180 motion-reduce:transition-none"
              />

            </summary>

            <nav
              aria-label="Full sitemap"
              className="grid grid-cols-2 gap-x-5 gap-y-1 border-t border-border py-5 sm:grid-cols-3 lg:grid-cols-5"
            >

              {sitemap.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group/link inline-flex min-h-11 items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >

                  {item.label}

                  <ArrowUpRight
                    size={12}
                    className="opacity-0 transition-opacity group-hover/link:opacity-100 group-focus-visible/link:opacity-100"
                  />

                </Link>
              ))}

            </nav>

          </details>

        </section>

        {/* ===============================================
            PERSONAL FOOTER
        ================================================ */}

        <footer className="mt-auto py-1 md:py-2">

          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">

            <div>

              <p className="font-serif text-xl italic">
                Not lost. Just exploring.
              </p>

              
            </div>

            {/* Existing social links */}

            <div className="flex flex-wrap items-center gap-2">

              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  title={label}
                  className="flex size-11 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
                >

                  <Icon size={17} strokeWidth={1.6} />

                </a>
              ))}

            </div>

          </div>

          <div className="mt-1 flex flex-wrap items-center justify-between gap-2 border-t border-border pt-1">

            <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              404 — End of this road
            </span>

            <a
              href="https://chai4.me/yashmahadik"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-1.5 text-xs text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            >

              Support my work

              <ArrowUpRight size={12} />

            </a>

          </div>

        </footer>

      </div>

    </main>
  )
}
