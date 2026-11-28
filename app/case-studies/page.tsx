import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CaseStudiesPageClient } from "@/components/case-studies-page-client"
import { createClient } from "@/lib/supabase/server"
import { caseStudyEntries, type CaseStudyEntry } from "@/lib/case-study-data"

export const metadata = {
  title: "Case Studies | Yash Mahadik",
  description: "In-depth case studies on product strategy, market analysis, and digital transformation.",
}

const allowedBackgrounds = new Set(caseStudyEntries.map((study) => study.bgColor))

function categoryLabel(category: string) {
  const labels: Record<string, string> = {
    "product-teardown": "Product Teardown",
    "product-teardowns": "Product Teardown",
    wireframing: "Wireframing & Design",
    "wireframing-design": "Wireframing & Design",
    prd: "Product Strategy",
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
  return labels[category.trim().toLowerCase().replace(/[\s_&]+/g, "-")] ?? category
}

function normalizeDatabaseStudy(row: Record<string, unknown>): CaseStudyEntry | null {
  const title = typeof row.title === "string" ? row.title.trim() : ""
  const description = typeof row.description === "string" ? row.description : ""
  const category = typeof row.category === "string" ? row.category : ""
  const slug = typeof row.slug === "string" ? row.slug.trim() : ""
  const storedLink = typeof row.link === "string" ? row.link : typeof row.route === "string" ? row.route : ""
  const link = storedLink.startsWith("/case-studies/") ? storedLink.replace(/\/+$/, "") : slug ? `/case-studies/${slug}` : ""

  if (!title || !link) return null
  if (row.is_published === false || row.published === false || ["draft", "unpublished"].includes(String(row.status ?? "").toLowerCase())) return null

  const requestedBackground = typeof row.bg_color === "string" ? row.bg_color : ""
  return {
    id: slug || link.split("/").at(-1) || (typeof row.id === "string" ? row.id : link),
    title,
    description,
    category,
    categoryLabel: category ? categoryLabel(category) : "Case Study",
    bgColor: allowedBackgrounds.has(requestedBackground) ? requestedBackground : "bg-slate-50",
    link,
    contentClassification: category ? categoryLabel(category) : undefined,
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
      const normalizeRoute = (route: string) => route.trim().toLowerCase().replace(/\/+$/, "")
      const merged = new Map(caseStudyEntries.map((study) => [normalizeRoute(study.link), study]))
      for (const row of data as Record<string, unknown>[]) {
        const study = normalizeDatabaseStudy(row)
        if (study) merged.set(normalizeRoute(study.link), study)
      }
      studies = Array.from(merged.values())
    }
  } catch (error) {
    console.error("Error fetching case studies:", error)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <section className="px-6 pb-14 pt-32 md:pb-20">
        <div className="mx-auto max-w-6xl">
          <Link href="/" className="mb-8 inline-flex min-h-11 items-center gap-2 text-primary transition-colors hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <ArrowLeft aria-hidden="true" size={18} />
            Back
          </Link>
          <p className="mb-2 text-sm font-semibold tracking-wider text-primary">CASE STUDIES</p>
          <h1 className="mb-5 max-w-4xl text-balance font-serif text-4xl text-foreground md:text-6xl">
            Strategic Product & Market Analysis
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            In-depth explorations of product strategy, market positioning, and digital transformation across industry leaders.
          </p>
        </div>
      </section>
      <CaseStudiesPageClient studies={studies} />
      <Footer />
    </main>
  )
}
