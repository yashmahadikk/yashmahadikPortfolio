import type { Metadata } from "next"
import { readFile } from "node:fs/promises"
import path from "node:path"
import { SaleshandyPrdPage } from "@/components/saleshandy-prd-page"

export const metadata: Metadata = {
  title: "Email Lookup PRD | Yash Mahadik",
  description: "The complete product requirements document for Saleshandy Email Lookup.",
}

export default async function EmailLookupPrdPage() {
  const content = await readFile(path.join(process.cwd(), "public", "saleshandy-email-lookup-prd.txt"), "utf8")
  return <SaleshandyPrdPage title="Email Lookup" content={content} />
}
