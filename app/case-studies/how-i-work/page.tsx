import Link from "next/link"
import { ArrowLeft, Download } from "lucide-react"
import { HowIWorkClient } from "@/components/how-i-work-client"

export const metadata = {
  title: "How I Work: Rapid Prototyping with AI | Yash Mahadik",
  description: "My repeatable process for building prototypes in an afternoon using version-by-version iteration, real data from message one, and logic before polish."
}

export default function HowIWorkCaseStudyPage() {
  return <HowIWorkClient />
}
