"use client"

import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

const professionalLinks = [
  { label: "Work", href: "/work" },
  { label: "Experience", href: "/experience" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
]

const exploreLinks = [
  { label: "Books", href: "/books" },
  { label: "Movies", href: "/movies" },
  { label: "Games", href: "/games" },
  { label: "Bucket List", href: "/bucket-list" },
  { label: "My Journey", href: "/journey" },
  { label: "Tools", href: "/tools" },
  { label: "Mentors", href: "/mentors" },
  { label: "Certificates", href: "/certificates" },
  { label: "Curated Links", href: "/curated-links" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isExploreOpen, setIsExploreOpen] = useState(false)
  const exploreTriggerRef = useRef<HTMLButtonElement>(null)
  const mobileMenuTriggerRef = useRef<HTMLButtonElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    setIsOpen(false)
    setIsExploreOpen(false)
  }, [pathname])

  const isActive = (path: string) => pathname === path || pathname.startsWith(`${path}/`)
  const isExploreActive = exploreLinks.some((item) => isActive(item.href))
  const linkClass = (active: boolean) =>
    `min-h-11 inline-flex items-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${active ? "text-foreground underline decoration-2 underline-offset-8" : "text-muted-foreground hover:text-foreground"}`

  const closeOnEscape = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "Escape") {
      if (isExploreOpen) exploreTriggerRef.current?.focus()
      else if (isOpen) mobileMenuTriggerRef.current?.focus()
      setIsExploreOpen(false)
      setIsOpen(false)
    }
  }

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <nav aria-label="Main navigation" onKeyDown={closeOnEscape} className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
        <Link href="/" className="min-h-11 inline-flex items-center font-bold tracking-wide text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          YASH MAHADIK
        </Link>

        <div className="hidden items-center gap-4 lg:flex xl:gap-6">
          {professionalLinks.map((item) => (
            <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? "page" : undefined} className={linkClass(isActive(item.href))}>
              {item.label}
            </Link>
          ))}
          <div className="relative">
            <button
              type="button"
              ref={exploreTriggerRef}
              aria-controls={isExploreOpen ? "explore-destinations" : undefined}
              aria-expanded={isExploreOpen}
              onClick={() => setIsExploreOpen((open) => !open)}
              className={`${linkClass(isExploreActive)} gap-1`}
            >
              Explore
              <ChevronDown aria-hidden="true" size={15} className={`transition-transform ${isExploreOpen ? "rotate-180" : ""}`} />
            </button>
            {isExploreOpen && (
              <div id="explore-destinations" aria-label="Explore destinations" className="absolute right-0 top-full z-50 mt-2 min-w-52 rounded-md border border-border bg-background p-2 shadow-md">
                {exploreLinks.map((item) => (
                  <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? "page" : undefined} className={`flex min-h-11 items-center rounded px-3 text-sm transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${isActive(item.href) ? "font-medium text-foreground underline decoration-2 underline-offset-4" : "text-muted-foreground hover:text-foreground"}`}>
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            ref={mobileMenuTriggerRef}
            aria-controls={isOpen ? "mobile-navigation" : undefined}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex size-11 items-center justify-center rounded text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {isOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div id="mobile-navigation" className="max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-border bg-background px-6 py-4 lg:hidden">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Professional</p>
          <div className="flex flex-col">
            {professionalLinks.map((item) => (
              <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? "page" : undefined} className={linkClass(isActive(item.href))}>
                {item.label}
              </Link>
            ))}
          </div>
          <p className="mb-2 mt-5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Explore</p>
          <div className="grid grid-cols-2 gap-x-4">
            {exploreLinks.map((item) => (
              <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? "page" : undefined} className={linkClass(isActive(item.href))}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
