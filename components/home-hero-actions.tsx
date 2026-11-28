"use client"

import Link from "next/link"
import { trackPortfolioEvent } from "@/lib/portfolio-analytics"

const resumeHref = "https://drive.google.com/drive/folders/1jll4Xyqc_uIfkDlBFyuh_4Y6SufN_P5D?usp=drive_link"
const emailHref = "mailto:yashmahadik2005@gmail.com?subject=Let's%20Connect%20-%20Product%20Management%20Discussion&body=Hi%20Yash%2C%0A%0AI'd%20like%20to%20connect%20with%20you%20regarding%20product%20management%2C%20strategy%2C%20or%20a%20potential%20collaboration.%0A%0ALooking%20forward%20to%20hearing%20from%20you!%0A%0ABest%20regards"

export function HomeHeroActions() {
  return (
    <div className="mb-8 flex flex-wrap items-center gap-3">
      <Link
        href="/work"
        onClick={() => trackPortfolioEvent("hero_work_cta_click")}
        className="inline-flex min-h-11 items-center justify-center rounded bg-foreground px-5 py-3 font-medium text-background transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        Explore my work
      </Link>
      <a
        href={resumeHref}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackPortfolioEvent("resume_cta_click")}
        className="inline-flex min-h-11 items-center justify-center rounded border border-border px-5 py-3 font-medium text-foreground transition-colors hover:border-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        Resume
      </a>
      <a
        href={emailHref}
        onClick={() => trackPortfolioEvent("contact_cta_click", { placement: "hero" })}
        className="inline-flex min-h-11 items-center justify-center rounded px-3 py-3 font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        Get in touch
      </a>
    </div>
  )
}
