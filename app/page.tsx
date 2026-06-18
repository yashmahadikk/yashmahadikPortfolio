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
      <StatsSection />
      <PortfolioSection />
      <CaseStudiesSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
