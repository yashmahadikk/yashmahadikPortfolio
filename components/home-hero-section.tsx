import Link from "next/link"
import { Mail, Linkedin, Github, Twitter, Dribbble, MapPin, Clock } from "lucide-react"
import { CurrentTime } from "./current-time"

export function HomeHeroSection() {
  return (
    <section className="py-24 md:py-32 px-6 border-b border-border">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-sans font-semibold text-foreground mb-8 leading-tight">
          yash mahadik
        </h1>
        
        <p className="text-lg text-muted-foreground max-w-3xl mb-8 leading-relaxed">
          Product Manager & Builder building AI-powered products. 5 years of experience across product management, project management, and startup operations. Currently exploring how AI can transform product creation and user experiences.
        </p>

        <div className="flex items-center gap-6 mb-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>Mumbai, Maharashtra</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} />
            <CurrentTime />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a
            href="https://calendar.app.google/egKUNyvZPyCgwNUq7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors rounded"
          >
            Book a meeting
          </a>
          <a
            href="https://drive.google.com/drive/folders/1jll4Xyqc_uIfkDlBFyuh_4Y6SufN_P5D?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-border text-foreground font-medium hover:border-foreground transition-colors rounded"
          >
            Resume
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-muted-foreground">
          <a href="https://x.com/yash_mahadik" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            <Twitter size={20} />
          </a>
          <a href="https://linkedin.com/in/yashmahadik2" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="https://github.com/yashmahaadik" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            <Github size={20} />
          </a>
          <a href="mailto:yashmahaadik@gmail.com" className="hover:text-foreground transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}
