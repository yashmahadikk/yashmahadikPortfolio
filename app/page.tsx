import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HomeHeroSection } from "@/components/home-hero-section"
import { HomeExperienceSection } from "@/components/home-experience-section"
import { HomeBlogSection } from "@/components/home-blog-section"
import { HomeExploreSection } from "@/components/home-explore-section"
import { HomeThinkingPartnerSection } from "@/components/home-thinking-partner-section"
import { AnimatedQuoteSection } from "@/components/animated-quote-section"

export default async function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HomeHeroSection />
      <HomeExperienceSection />
      <HomeBlogSection />
      <HomeExploreSection />
      <HomeThinkingPartnerSection />
      <AnimatedQuoteSection />
      <Footer />
    </main>
  )
}
