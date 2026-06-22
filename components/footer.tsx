import Link from 'next/link';
import { Mail, Linkedin, Twitter, Github, FileText, Music } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="px-6 py-20 max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Left Column - Bio and Social */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-foreground mb-2">Yash Mahadik</h3>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Product Manager building growth systems and honest products.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4 mb-6">
              <a href="mailto:contact@yashmahadik.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://linkedin.com/in/yashmahadik" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" title="Product and strategy insights">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com/yash_mahadik" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://github.com/yashmahadikk" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Music size={20} />
              </a>
            </div>

            {/* Spotify Status */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Spotify — Not playing</span>
            </div>
          </div>

          {/* Middle Column - General Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-6">General</h4>
            <nav className="space-y-3">
              <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                Home
              </Link>
              <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                Blog
              </Link>
              <Link href="/work" className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                Projects
              </Link>
              <Link href="/case-studies" className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                Case Studies
              </Link>
              <Link href="/bucket-list" className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                Bucket List
              </Link>
            </nav>
          </div>

          {/* Middle-Right Column - The Website Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-6">The Website</h4>
            <nav className="space-y-3">
              <Link href="/journey" className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                Journey
              </Link>
              <Link href="/tools" className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                Gears & Setup
              </Link>
              <Link href="/books" className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                Books
              </Link>
              <Link href="/movies" className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                Movies
              </Link>
              <Link href="/games" className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                Games
              </Link>
              <Link href="/certificates" className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                Certificates
              </Link>
              <Link href="/mentors" className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                Mentors
              </Link>
              <Link href="/bucket-list" className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                Bucket List
              </Link>
            </nav>
          </div>

          {/* Right Column - Connect Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-6">Connect</h4>
            <nav className="space-y-3">
              <a href="mailto:contact@yashmahadik.com" className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                Email
              </a>
              <a href="https://linkedin.com/in/yashmahadik" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                LinkedIn
              </a>
              <a href="https://twitter.com/yash_mahadik" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                Twitter / X
              </a>
              <a href="https://github.com/yashmahadikk" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                GitHub
              </a>
              <a href="https://resume.yashmahadik.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors block flex items-center gap-2">
                <FileText size={14} /> Resume
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Divider and Copyright */}
        <div className="border-t border-border pt-8">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Yash Mahadik. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
