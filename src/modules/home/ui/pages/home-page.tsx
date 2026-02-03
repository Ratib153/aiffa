import { Footer } from "@/components/footer"
import { HeroSection } from "@/modules/home/ui/sections/hero-section"
import { FeaturedFilmsSection } from "@/modules/home/ui/sections/featured-films-section"
import { ProgramHighlightsSection } from "@/modules/home/ui/sections/program-highlights-section"
import { PrizeCategoriesSection } from "@/modules/home/ui/sections/prize-categories-section"
import { ExperienceCinemaSection } from "@/modules/home/ui/sections/experience-cinema-section"
import { BePartSection } from "@/modules/home/ui/sections/be-part-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      
      <HeroSection />
      <FeaturedFilmsSection />
      <ProgramHighlightsSection />
      <PrizeCategoriesSection />
      <ExperienceCinemaSection />
      <BePartSection />
    </main>
  )
}

