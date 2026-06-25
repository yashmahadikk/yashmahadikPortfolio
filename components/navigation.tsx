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

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div 
          className="sm:hidden fixed inset-0 top-20 bg-black/30 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Navigation Drawer with Animation */}
      <div className={`sm:hidden fixed top-20 left-0 right-0 z-50 overflow-hidden transition-all duration-300 ease-out ${
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        {/* Header */}
        <div className="bg-foreground text-background px-6 py-6 flex items-center justify-between animate-in fade-in slide-in-from-top-2 duration-300">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Menu</h2>
            <p className="text-sm opacity-80 mt-1">Navigation</p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-background hover:opacity-70 transition-opacity"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>

        {/* Menu Items */}
        <div className="bg-background px-6 py-8 flex flex-col gap-8 animate-in fade-in slide-in-from-top-3 duration-300 delay-100">
          <Link 
            href="/" 
            onClick={() => setIsOpen(false)}
            className="text-4xl font-bold text-foreground hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link 
            href="/work" 
            onClick={() => setIsOpen(false)}
            className="text-4xl font-bold text-foreground hover:text-primary transition-colors"
          >
            Work
          </Link>
          <Link 
            href="/case-studies" 
            onClick={() => setIsOpen(false)}
            className="text-4xl font-bold text-foreground hover:text-primary transition-colors"
          >
            Case Studies
          </Link>
          <Link 
            href="/blog" 
            onClick={() => setIsOpen(false)}
            className="text-4xl font-bold text-foreground hover:text-primary transition-colors"
          >
            Blog
          </Link>
          <Link 
            href="/books" 
            onClick={() => setIsOpen(false)}
            className="text-4xl font-bold text-foreground hover:text-primary transition-colors"
          >
            Books
          </Link>
          <Link 
            href="/bucket-list" 
            onClick={() => setIsOpen(false)}
            className="text-4xl font-bold text-foreground hover:text-primary transition-colors"
          >
            Bucket List
          </Link>
        </div>
      </div>
    </header>
  )
}
