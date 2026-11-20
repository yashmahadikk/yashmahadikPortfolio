import type { Metadata } from "next"
import { SaleshandyFeaturePage } from "@/components/saleshandy-feature-page"

export const metadata: Metadata = {
  title: "Email Lookup | Yash Mahadik",
  description: "A Saleshandy Lead Finder concept for matching a prospect to an email using Saleshandy's own profile database.",
}

export default function EmailLookupPage() {
  return (
    <SaleshandyFeaturePage
      title="Email Lookup"
      subtitle="Find the person behind an email address using Saleshandy’s own profile data—not third-party vendor lookups."
      description="Email Lookup was designed to help sales teams resolve work-email-only lists directly in Lead Finder and Data Enrichment. The matching approach first checked for an exact stored email, then used the email’s name and company-domain clues to identify likely profiles. N-gram tokenization helped interpret less predictable name formats, including initials and partial names. The project targeted at least 97% matching accuracy across an internal profile database of roughly 8–10 million records."
      prototypeUrl="https://emaillookup.vercel.app"
      prdUrl="/work/saleshandy-email-lookup/prd"
      highlights={[
        "Search for people from a single email or a bulk list in Lead Finder’s People search.",
        "Use the email as a standalone mapped field for People enrichment.",
        "Check Saleshandy’s own profile database first; do not send lookups to external data vendors.",
        "Resolve names and company domains from email patterns, using n-gram matching for ambiguous or partial names.",
      ]}
    />
  )
}
