import type { Metadata } from "next"
import { SaleshandyFeaturePage } from "@/components/saleshandy-feature-page"

export const metadata: Metadata = {
  title: "Lead Finder: Import List | Yash Mahadik",
  description: "A Saleshandy Lead Finder import experience for bringing in existing prospect data and excluding owned records from future searches.",
}

export default function ImportListPage() {
  return (
    <SaleshandyFeaturePage
      title="Lead Finder: Import List"
      subtitle="Bring your existing prospect data into Saleshandy—and avoid paying twice for leads you already own."
      description="Import List was designed for teams switching from prospecting platforms such as Apollo, Lusha, or Clay. Users could bring their existing lists into Saleshandy, match them against Lead Finder, and exclude owned records from future searches. Imported profiles could also support CRM workflows and active sequences, creating a reusable source of truth for prospect data."
      prototypeUrl="https://csvelf.vercel.app"
      prdUrl="/work/saleshandy-import-list/prd"
      highlights={[
        "Import existing CSV prospect lists as part of a platform migration or team onboarding.",
        "Match imported records against Lead Finder and exclude them from future searches to prevent repurchasing data.",
        "Make imported profiles reusable across prospecting, CRM, and sequence workflows.",
        "Keep importing and matching free, with no credits charged during the import flow.",
      ]}
    />
  )
}
