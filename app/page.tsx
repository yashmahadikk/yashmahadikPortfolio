import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HomeHeroSection } from "@/components/home-hero-section"
import { HomeExperienceSection } from "@/components/home-experience-section"
import { HomeBlogSection } from "@/components/home-blog-section"
import { HomeExploreSection } from "@/components/home-explore-section"
import { HomeThinkingPartnerSection } from "@/components/home-thinking-partner-section"
import { HomeQuoteSection } from "@/components/home-quote-section"
import { HomeMoviesSection } from "@/components/home-movies-section"
import { HomeGamesSection } from "@/components/home-games-section"

export default async function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HomeHeroSection />
      <HomeExperienceSection />
      <HomeBlogSection />
      <HomeExploreSection />
      <HomeThinkingPartnerSection />
      <HomeQuoteSection />
      <HomeMoviesSection />
      <HomeGamesSection />
      <Footer />
    </main>
  )
}
