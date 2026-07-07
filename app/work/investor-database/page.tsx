import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import InvestorDatabase from "@/components/investor-database"

export const metadata = {
  title: "Investor Database | Yash Mahadik",
  description: "A curated database of 90+ investors across India, International, and Southeast Asia. Built as a resource for founders seeking funding.",
}

export default function InvestorDatabasePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-6 pt-32">
        <div className="max-w-6xl mx-auto">
          <Link href="/work" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8">
            <ArrowLeft size={18} className="mr-2" />
            Back to Work
          </Link>
          <p className="text-primary text-sm font-semibold tracking-wider mb-2">BONUS PROJECT</p>
          <h1 className="text-4xl md:text-6xl font-serif italic text-foreground mb-6">
            Investor Database
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mb-8">
            A curated database of 90+ investors across India, International, and Southeast Asia regions. Though not part of day-to-day work, this list was created as a resource for founders and entrepreneurs seeking funding opportunities. Searchable, filterable, and organized by region, stage, and investment thesis.
          </p>

          <div className="flex flex-wrap gap-3">
            <div className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-md">
              <span className="text-indigo-700 dark:text-indigo-300 font-semibold text-sm">90+ Investors</span>
            </div>
            <div className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-md">
              <span className="text-purple-700 dark:text-purple-300 font-semibold text-sm">Filterable Data</span>
            </div>
            <div className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-md">
              <span className="text-blue-700 dark:text-blue-300 font-semibold text-sm">India, International, SEA</span>
            </div>
          </div>
        </div>
      </section>

      {/* Database Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="border border-border rounded-lg overflow-hidden bg-card">
          <InvestorDatabase />
        </div>
      </section>

      {/* Context Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Why This Database?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When exploring funding opportunities for AI-native and creative tech startups, I compiled this database of investors actively backing founders in these spaces. Instead of keeping it private, I created this as a shared resource.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">How to Use</h2>
            <ul className="text-muted-foreground leading-relaxed space-y-2">
              <li>• Filter by region (India, International, Southeast Asia)</li>
              <li>• Search by fund name or investment thesis</li>
              <li>• View check sizes and funding stages</li>
              <li>• See fit assessment for different founder profiles</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
