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
        <div className="hidden sm:flex items-center gap-8">
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
        <div className="sm:hidden flex items-center gap-2">
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

      {/* Mobile Navigation Drawer - Full Screen */}
      {isOpen && (
        <div className="sm:hidden fixed inset-0 z-50 bg-background overflow-y-auto animate-in fade-in slide-in-from-top duration-300">
          {/* Dark Header */}
          <div className="bg-foreground text-background px-6 py-6 flex items-center justify-between sticky top-0">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Menu</h2>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-background hover:opacity-70 transition-opacity"
              aria-label="Close menu"
            >
              <X size={32} />
            </button>
          </div>

          {/* Menu Items - Scrollable */}
          <div className="px-6 py-12 flex flex-col gap-12">
            <Link 
              href="/" 
              onClick={() => setIsOpen(false)}
              className="text-5xl font-bold text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/work" 
              onClick={() => setIsOpen(false)}
              className="text-5xl font-bold text-foreground hover:text-primary transition-colors"
            >
              Work
            </Link>
            <Link 
              href="/case-studies" 
              onClick={() => setIsOpen(false)}
              className="text-5xl font-bold text-foreground hover:text-primary transition-colors"
            >
              Case Studies
            </Link>
            <Link 
              href="/blog" 
              onClick={() => setIsOpen(false)}
              className="text-5xl font-bold text-foreground hover:text-primary transition-colors"
            >
              Blog
            </Link>
            <Link 
              href="/books" 
              onClick={() => setIsOpen(false)}
              className="text-5xl font-bold text-foreground hover:text-primary transition-colors"
            >
              Books
            </Link>
            <Link 
              href="/bucket-list" 
              onClick={() => setIsOpen(false)}
              className="text-5xl font-bold text-foreground hover:text-primary transition-colors"
            >
              Bucket List
            </Link>
            <div className="h-20" />
          </div>
        </div>
      )}
    </header>
  )
}
