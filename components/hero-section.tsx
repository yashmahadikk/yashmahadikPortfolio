import Link from "next/link"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-20 pb-12">
      <div className="max-w-5xl mx-auto w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-primary mb-8 italic text-balance">
          Build products and teams people love
        </h1>
        
        <div className="max-w-3xl">
          <p className="text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed">
            Hi, I&apos;m Yash. I have 4 years of experience in Product Management and operations, and 5 years in product management, leading diverse, cross-functional teams to build digital products that people love and drive business results.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed">
            This includes as a Product Manager and as an operations strategy partner for{" "}
            <span className="text-primary font-medium">product + design leaders</span>.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Let&apos;s build something great together.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Link
            href="#work"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors rounded-md"
          >
            Explore Portfolio
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-foreground font-semibold border border-border hover:border-primary hover:text-primary transition-colors rounded-md"
          >
            Get In Touch
          </Link>
          <a
            href="https://drive.google.com/drive/folders/1jll4Xyqc_uIfkDlBFyuh_4Y6SufN_P5D?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-foreground font-semibold border border-border hover:border-primary hover:text-primary transition-colors rounded-md"
          >
            View Resume
          </a>
        </div>

        <div className="flex items-center gap-2 text-muted-foreground animate-bounce">
          <ArrowDown size={20} />
          <span className="text-sm tracking-wide">Scroll to explore</span>
        </div>
      </div>
    </section>
  )
}
