
import Link from "next/link"
import { ArrowLeft, ArrowDownRight } from "lucide-react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CaseStudiesPageClient } from "@/components/case-studies-page-client"
import { createClient } from "@/lib/supabase/server"

import {
  caseStudyEntries,
  type CaseStudyEntry,
} from "@/lib/case-study-data"

export const metadata = {
  title: "Case Studies | Yash Mahadik",
  description:
    "Exploring product strategy, user behaviour, markets and the decisions that shape them.",
}

const allowedBackgrounds = new Set(
  caseStudyEntries.map((study) => study.bgColor)
)

function categoryLabel(category: string) {
  const labels: Record<string, string> = {
    "product-teardown": "Product Teardown",
    "product-teardowns": "Product Teardown",
    wireframing: "Wireframing & Design",
    "wireframing-design": "Wireframing & Design",
    "wireframing-and-design": "Wireframing & Design",
    prd: "Product Strategy",
    strategy: "Product Strategy",
    "product-strategy": "Product Strategy",
    "go-to-market": "Product Strategy",
    "data-analytics": "Data & Analytics",
    analytics: "Data & Analytics",
    "market-case-study": "Market Analysis",
    "market-analysis": "Market Analysis",
    "new-product-development": "New Product Development",
    "feature-hypothesis": "Feature Hypotheses",
    "feature-hypotheses": "Feature Hypotheses",
    "product-journey": "New Product Development",
  }

  return (
    labels[
      category.trim().toLowerCase().replace(/[\s_&]+/g, "-")
    ] || category
  )
}

function normalizeDatabaseStudy(
  row: Record<string, unknown>
): CaseStudyEntry | null {
  const title =
    typeof row.title === "string" ? row.title.trim() : ""

  const description =
    typeof row.description === "string" ? row.description : ""

  const category =
    typeof row.category === "string" ? row.category : ""

  const slug =
    typeof row.slug === "string" ? row.slug.trim() : ""

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

  const background =
    typeof row.bg_color === "string" ? row.bg_color : ""

  return {
    id: slug || link.split("/").at(-1) || String(row.id),
    title,
    description,
    category,
    categoryLabel: category
      ? categoryLabel(category)
      : "Case Study",
    bgColor: allowedBackgrounds.has(background)
      ? background
      : "bg-slate-50",
    link,
    contentClassification: category
      ? categoryLabel(category)
      : undefined,
    ...(typeof row.featured === "boolean"
      ? { featured: row.featured }
      : {}),
  }
}

export default async function CaseStudiesPage() {
  let studies = [...caseStudyEntries]

  try {
    const supabase = await createClient()

    const { data, error } = await supabase
      .from("case_studies")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Error fetching case studies:", error)
    } else if (data?.length) {
      const normalizeRoute = (route: string) =>
        route.trim().toLowerCase().replace(/\/+$/, "")

      const merged = new Map(
        caseStudyEntries.map((study) => [
          normalizeRoute(study.link),
          study,
        ])
      )

      for (const row of data as Record<string, unknown>[]) {
        const study = normalizeDatabaseStudy(row)

        if (study) {
          const key = normalizeRoute(study.link)

          // Preserve existing featured flags and presentation links.
          const existing = merged.get(key)

          merged.set(key, {
            ...existing,
            ...study,
            featured: study.featured ?? existing?.featured,
            pptLink: existing?.pptLink,
          })
        }
      }

      studies = Array.from(merged.values())
    }
  } catch (error) {
    console.error("Error fetching case studies:", error)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main>
        {/* Compact editorial hero */}

        <section className="mx-auto max-w-6xl px-5 pb-10 pt-28 md:px-8 md:pb-14 md:pt-32">
          <Link
            href="/"
            className="mb-6 inline-flex min-h-11 items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft size={14} />
            Back home
          </Link>

          <div className="grid gap-6 md:grid-cols-[1.25fr_0.75fr] md:items-end md:gap-16">
            <div>
              <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Portfolio / Case studies
              </p>

              <h1 className="font-serif text-[clamp(2.8rem,6vw,4.8rem)] font-normal leading-[1.08] tracking-[-0.035em]">
                An exercise in

                <span className="mt-1 block italic text-muted-foreground">
                  asking why.
                </span>
              </h1>
            </div>

            <div className="pb-1">
              <p className="max-w-sm text-base leading-[1.8] text-muted-foreground md:text-lg">
                Exploring products, markets, user behaviour
                and the decisions that shape them.
              </p>

              <div className="mt-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                <span className="font-medium tabular-nums text-foreground">
                  {studies.length} Case studies
                </span>

                <span className="h-px w-5 bg-border" />

                Research & analysis
              </div>
            </div>
          </div>

          <nav
            aria-label="Case study sections"
            className="mt-7 flex flex-wrap gap-x-6 gap-y-1"
          >
            {[
              ["approach", "How I work"],
              ["featured", "Featured research"],
              ["archive", "Research archive"],
            ].map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="inline-flex min-h-11 items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground"
              >
                {label}
                <ArrowDownRight size={12} />
              </a>
            ))}
          </nav>
        </section>

        <CaseStudiesPageClient studies={studies} />
      </main>

      <Footer />
    </div>
  )
}
