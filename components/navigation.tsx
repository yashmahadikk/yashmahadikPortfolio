'use client'

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg tracking-wide text-foreground hover:text-primary transition-colors">
          YASH MAHADIK
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/work" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
            WORK
          </Link>
          <Link href="/case-studies" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            CASE STUDIES
          </Link>
          <Link href="/skills" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            SKILLS
          </Link>
          <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            CONTACT
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground hover:text-primary transition-colors"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-6 py-4 flex flex-col gap-4">
            <Link 
              href="/work" 
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-primary"
            >
              WORK
            </Link>
            <Link 
              href="/case-studies" 
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              CASE STUDIES
            </Link>
            <Link 
              href="/skills" 
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              SKILLS
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              CONTACT
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
