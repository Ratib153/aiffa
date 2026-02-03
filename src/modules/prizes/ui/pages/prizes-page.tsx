import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"

export const prizeCategories = [
  {
    title: "Best Feature Film",
    slug: "best-feature-film",
    description: "Outstanding narrative feature film",
    detailedDescription: "The Best Feature Film award recognizes exceptional narrative feature films that demonstrate outstanding storytelling, artistic vision, and cultural significance. This category celebrates full-length films that captivate audiences with compelling narratives, strong character development, and innovative filmmaking techniques.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="6" y="10" width="36" height="28" rx="2" />
        <circle cx="24" cy="24" r="8" />
        <circle cx="24" cy="24" r="3" />
        <line x1="6" y1="16" x2="42" y2="16" />
        <line x1="6" y1="32" x2="42" y2="32" />
      </svg>
    ),
  },
  {
    title: "Best Documentary",
    slug: "best-documentary",
    description: "Excellence in non-fiction filmmaking",
    detailedDescription: "The Best Documentary award honors excellence in non-fiction filmmaking, recognizing films that explore real-world stories with depth, authenticity, and journalistic integrity. This category celebrates documentaries that shed light on important issues, document cultural heritage, and provide meaningful insights into the human experience.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="24" cy="24" r="16" />
        <circle cx="24" cy="24" r="6" />
        <line x1="24" y1="8" x2="24" y2="14" />
        <line x1="24" y1="34" x2="24" y2="40" />
        <line x1="8" y1="24" x2="14" y2="24" />
        <line x1="34" y1="24" x2="40" y2="24" />
      </svg>
    ),
  },
  {
    title: "Best Short Film",
    slug: "best-short-film",
    description: "Exceptional short-form storytelling",
    detailedDescription: "The Best Short Film award celebrates exceptional short-form storytelling, recognizing films that deliver powerful narratives within a condensed format. This category honors filmmakers who master the art of concise storytelling, creating impactful experiences that resonate with audiences despite their brief duration.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="8" y="12" width="32" height="24" rx="2" />
        <polygon points="20,18 32,24 20,30" />
      </svg>
    ),
  },
  {
    title: "Best Director",
    slug: "best-director",
    description: "Outstanding directorial achievement",
    detailedDescription: "The Best Director award recognizes outstanding directorial achievement, honoring filmmakers who demonstrate exceptional vision, leadership, and creative excellence in bringing stories to life. This category celebrates directors who masterfully guide all aspects of filmmaking, from performance to visual composition, creating cohesive and compelling cinematic experiences.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="24" cy="14" r="8" />
        <path d="M8 42 L24 32 L40 42" />
        <line x1="24" y1="32" x2="24" y2="22" />
      </svg>
    ),
  },
  {
    title: "Best Cinematography",
    slug: "best-cinematography",
    description: "Excellence in visual storytelling",
    detailedDescription: "The Best Cinematography award celebrates excellence in visual storytelling, recognizing the artistry and technical skill of cinematographers who create stunning visual narratives. This category honors the craft of capturing light, composition, and movement to enhance storytelling and create memorable cinematic imagery.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="16" width="24" height="18" rx="2" />
        <circle cx="16" cy="25" r="6" />
        <path d="M28 20 L40 14 L40 36 L28 30 Z" />
      </svg>
    ),
  },
  {
    title: "Audience Choice Award",
    slug: "audience-choice-award",
    description: "Selected by festival attendees",
    detailedDescription: "The Audience Choice Award is selected by festival attendees, giving voice to the viewers who experience and connect with the films. This special recognition honors films that resonate most deeply with audiences, celebrating the power of cinema to move, inspire, and create meaningful connections between filmmakers and viewers.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M24 6 L28 18 L40 18 L30 26 L34 38 L24 30 L14 38 L18 26 L8 18 L20 18 Z" />
      </svg>
    ),
  },
]

const juryPanel = [
  {
    name: "Amira El-Sayed",
    role: "Festival Director & Jury Chair",
    bio: "Film curator with 15 years of experience in international cinema.",
    image: "/images/team-1.jpg",
  },
  {
    name: "Hassan Mansour",
    role: "Award-Winning Filmmaker",
    bio: "Director of multiple acclaimed Arab films.",
    image: "/images/team-2.jpg",
  },
  {
    name: "Leila Khoury",
    role: "Film Critic & Scholar",
    bio: "Expert in Arab cinema and cultural studies.",
    image: "/images/team-3.jpg",
  },
]

export default function PrizesPage() {
  return (
    <main className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="relative pt-32 pb-2 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/ceremony-1.jpg"
            alt="Awards ceremony"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-eerie-black via-eerie-black/90 to-eerie-black" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-champagne mb-6">
            Prizes
          </h1>
          <p className="text-champagne/70 text-lg max-w-2xl mx-auto">
            Celebrating excellence in Arab cinema
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="pt-2 pb-24 bg-background flex items-center min-h-[400px]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <p className="text-champagne/70 leading-relaxed text-center">
            The International Arab Film Festival of Australia recognizes outstanding achievements in filmmaking through our annual awards ceremony. Our awards celebrate the artistry, innovation, and cultural significance of Arab cinema, honoring filmmakers who push boundaries and tell compelling stories that resonate with audiences worldwide.
          </p>
        </div>
      </section>

      {/* Prize Categories */}
      <section className="py-24 bg-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-champagne">
              Prize Categories
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {prizeCategories.map((prize) => (
              <Link
                key={prize.title}
                href={`/prizes/${prize.slug}`}
                className="glass-card p-8 text-center hover:border-primary/30 transition-colors duration-300 group cursor-pointer block"
              >
                <div className="text-primary mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {prize.icon}
                </div>
                <h3 className="font-serif text-xl font-semibold text-champagne mb-2 group-hover:text-primary transition-colors">
                  {prize.title}
                </h3>
                <p className="text-champagne/60 text-sm leading-relaxed">{prize.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>



    </main>
  )
}
