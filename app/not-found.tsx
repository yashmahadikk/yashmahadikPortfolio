import Link from 'next/link'
import { ArrowLeft, Github, Linkedin, Mail, Twitter } from 'lucide-react'

const sitemap = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Projects', href: '/work' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Journey', href: '/journey' },
  { label: 'Tools', href: '/tools' },
  { label: 'Books', href: '/books' },
  { label: 'Movies', href: '/movies' },
  { label: 'Games', href: '/games' },
  { label: 'Certificates', href: '/certificates' },
  { label: 'Mentors', href: '/mentors' },
  { label: 'Curated Links', href: '/curated-links' },
  { label: 'Bucket List', href: '/bucket-list' },
  { label: 'Contact', href: '/contact' },
]

const socials = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yashmahadik2', icon: Linkedin },
  { label: 'Twitter / X', href: 'https://x.com/yash_mahadik', icon: Twitter },
  { label: 'GitHub', href: 'https://github.com/yashmahaadik', icon: Github },
  { label: 'Email', href: 'mailto:yashmahadik2005@gmail.com', icon: Mail },
]

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background px-6 py-12 text-foreground sm:py-20">
      <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-6xl flex-col justify-between gap-16">
        <header className="flex items-center justify-between">
          <Link href="/" className="font-mono text-sm font-semibold tracking-[0.18em] hover:opacity-70">
            YASH MAHADIK
          </Link>
          <span className="font-mono text-xs text-muted-foreground">ERROR / 404</span>
        </header>

        <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="mb-5 font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground">Page not found</p>
            <h1 className="max-w-3xl text-balance text-5xl font-semibold tracking-tight sm:text-7xl">
              This page wandered off the map.
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
              The link may be outdated, or the page may never have existed. Use the sitemap below to find your way around.
            </p>
            <Link href="/" className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5">
              <ArrowLeft size={16} aria-hidden="true" />
              Back home
            </Link>
          </div>

          <div className="border-y border-border py-6">
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Sitemap</p>
            <nav aria-label="Sitemap" className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
              {sitemap.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-foreground/80 underline-offset-4 hover:text-foreground hover:underline">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </section>

        <footer className="flex flex-col gap-8 border-t border-border pt-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Find Yash elsewhere</p>
            <div className="flex flex-wrap gap-4">
              {socials.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                  <Icon size={16} aria-hidden="true" />
                  {label}
                </a>
              ))}
            </div>
          </div>
          <a href="https://chai4.me/yashmahadik" target="_blank" rel="noopener noreferrer" title="Support Yash Mahadik on Chai4Me" className="inline-flex w-fit flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white px-8 py-2 shadow-sm transition-transform hover:-translate-y-0.5">
            <img src="https://chai4.me/icons/wordmark.png" alt="Chai4Me" className="mb-1 h-8 object-contain" />
            <span className="font-sans text-sm font-semibold text-gray-500">@yashmahadik</span>
          </a>
        </footer>
      </div>
    </main>
  )
}
