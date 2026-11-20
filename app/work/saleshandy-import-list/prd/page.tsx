import type { Metadata } from "next"
import { readFile } from "node:fs/promises"
import path from "node:path"
import { SaleshandyPrdPage } from "@/components/saleshandy-prd-page"

export const metadata: Metadata = {
  title: "Lead Finder: Import New List PRD | Yash Mahadik",
  description: "The complete product requirements document for Saleshandy Lead Finder Import New List.",
}

export default async function ImportListPrdPage() {
  const content = await readFile(path.join(process.cwd(), "public", "saleshandy-import-list-prd.txt"), "utf8")
  return <SaleshandyPrdPage title="Lead Finder: Import New List" content={content} />
}
