import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      
      {/* About Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <p className="text-primary text-sm font-semibold tracking-wider mb-2">ABOUT</p>
          <h2 className="text-3xl md:text-4xl font-serif italic text-foreground mb-6">
            About
          </h2>
        </div>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
          Founder of Devanagari Ventures, where I built, iterated, and sunset three AI products across B2B and entertainment. I&apos;ve run full product cycles — from user research and discovery to shutting down what didn&apos;t work. Now bringing that operator&apos;s judgment into a PM role.
        </p>
      </section>

      <StatsSection />
      <PortfolioSection />
      <CaseStudiesSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
