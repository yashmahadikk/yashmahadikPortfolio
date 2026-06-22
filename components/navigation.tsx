"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname.startsWith(path)
  }

  const getLinkClass = (path: string) => {
    const baseClass = "text-sm font-medium transition-colors"
    const activeClass = "text-primary hover:text-primary/80"
    const inactiveClass = "text-muted-foreground hover:text-foreground"
    return `${baseClass} ${isActive(path) ? activeClass : inactiveClass}`
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg tracking-wide text-foreground hover:text-primary transition-colors">
          YASH MAHADIK
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ThemeToggle />
          <Link href="/work" className={getLinkClass("/work")}>
            WORK
          </Link>
          <Link href="/case-studies" className={getLinkClass("/case-studies")}>
            CASE STUDIES
          </Link>
          <Link href="/blog" className={getLinkClass("/blog")}>
            BLOG
          </Link>
          <Link href="/books" className={getLinkClass("/books")}>
            BOOKS
          </Link>
          <Link href="/bucket-list" className={getLinkClass("/bucket-list")}>
            BUCKET LIST
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground hover:text-primary transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-6 py-4 flex flex-col gap-4">
            <Link 
              href="/work" 
              onClick={() => setIsOpen(false)}
              className={getLinkClass("/work")}
            >
              WORK
            </Link>
            <Link 
              href="/case-studies" 
              onClick={() => setIsOpen(false)}
              className={getLinkClass("/case-studies")}
            >
              CASE STUDIES
            </Link>
            <Link 
              href="/blog" 
              onClick={() => setIsOpen(false)}
              className={getLinkClass("/blog")}
            >
              BLOG
            </Link>
            <Link 
              href="/books" 
              onClick={() => setIsOpen(false)}
              className={getLinkClass("/books")}
            >
              BOOKS
            </Link>
            <Link 
              href="/bucket-list" 
              onClick={() => setIsOpen(false)}
              className={getLinkClass("/bucket-list")}
            >
              BUCKET LIST
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
