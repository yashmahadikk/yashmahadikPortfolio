'use client'

import Link from "next/link"
import { ArrowLeft, Download } from "lucide-react"
import { useState, useRef } from "react"

export function HowIWorkClient() {
  const [isDownloading, setIsDownloading] = useState(false)
  const pdfRef = useRef<HTMLIFrameElement>(null)

  const handleDownload = async () => {
    setIsDownloading(true)
    try {
      const response = await fetch('/how-i-work.pdf')
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'How-I-Work-Rapid-Prototyping-with-AI.pdf'
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft size={18} />
            Back to Case Studies
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary text-sm font-semibold tracking-wider mb-4">METHODOLOGY | PRODUCT DEVELOPMENT</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-foreground mb-6 leading-tight">
            How I Work: Rapid Prototyping with AI
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            My repeatable process for building prototypes in an afternoon using version-by-version iteration, real data from message one, and logic before polish.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-indigo-100 dark:bg-indigo-900/30 px-4 py-2 rounded-md">
              <span className="text-indigo-700 dark:text-indigo-300 font-semibold">Methodology</span>
            </div>
            <div className="bg-emerald-100 dark:bg-emerald-900/30 px-4 py-2 rounded-md">
              <span className="text-emerald-700 dark:text-emerald-300 font-semibold">Product Strategy</span>
            </div>
            <div className="bg-orange-100 dark:bg-orange-900/30 px-4 py-2 rounded-md">
              <span className="text-orange-700 dark:text-orange-300 font-semibold">AI-Powered Development</span>
            </div>
          </div>
        </div>
      </section>

      {/* PDF Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <h2 className="text-3xl font-serif text-foreground">Complete Guide</h2>
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold whitespace-nowrap"
            >
              <Download size={20} />
              {isDownloading ? 'Downloading...' : 'Download PDF'}
            </button>
          </div>
          
          {/* PDF Viewer */}
          <div className="bg-white dark:bg-slate-900 rounded-lg shadow-lg overflow-hidden border border-border">
            <div className="h-full min-h-96 md:min-h-screen">
              <iframe
                ref={pdfRef}
                src="/how-i-work.pdf"
                className="w-full h-full"
                style={{ minHeight: 'calc(100vh - 200px)' }}
              />
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="p-6 border border-border rounded-lg bg-slate-50 dark:bg-slate-900/50">
              <h3 className="font-semibold text-foreground mb-3">Quick Overview</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Learn my step-by-step methodology for turning ideas into working prototypes in hours instead of weeks.
              </p>
            </div>
            <div className="p-6 border border-border rounded-lg bg-slate-50 dark:bg-slate-900/50">
              <h3 className="font-semibold text-foreground mb-3">Best For</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Product managers, entrepreneurs, and builders who want to validate ideas quickly without over-engineering.
              </p>
            </div>
            <div className="p-6 border border-border rounded-lg bg-slate-50 dark:bg-slate-900/50">
              <h3 className="font-semibold text-foreground mb-3">Key Insights</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Discover how AI accelerates prototyping while maintaining focus on user problems and business value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 px-6 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif text-foreground mb-8">Other Case Studies</h2>
          <Link 
            href="/case-studies"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors font-semibold"
          >
            <ArrowLeft size={18} />
            Explore More Case Studies
          </Link>
        </div>
      </section>
    </main>
  )
}
