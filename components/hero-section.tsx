import Link from "next/link"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-20 pb-12">
      <div className="max-w-5xl mx-auto w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-primary mb-8 text-balance">
          Build products and teams people love
        </h1>
        
        <div className="max-w-3xl">
          <p className="text-lg md:text-xl text-muted-foreground mb-4">
            <span className="text-2xl mr-2">👋</span>
            {"Hi, I'm Yash. I have 15 years of experience leading diverse, cross-functional teams to build digital products that people love and drive business results."}
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-4">
            This includes as a Product Manager and as an operations strategy partner for Fortune 100{" "}
            <span className="text-primary font-medium">product + design leaders</span>.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            {"Let's build something great together."}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Link
            href="#work"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold uppercase tracking-wider hover:bg-primary/90 transition-colors border-2 border-primary"
          >
            Explore Portfolio
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-foreground font-semibold uppercase tracking-wider border-2 border-border hover:border-primary hover:text-primary transition-colors"
          >
            Get In Touch
          </Link>
        </div>

        <div className="flex items-center gap-2 text-muted-foreground animate-bounce">
          <ArrowDown size={20} />
          <span className="text-sm uppercase tracking-widest">Scroll to explore</span>
        </div>
      </div>
    </section>
  )
}
