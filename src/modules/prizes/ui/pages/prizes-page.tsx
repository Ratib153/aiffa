"use client"

import { prizeCategories } from "../../data/prize-categories"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import type { ReactNode } from "react"

const iconsBySlug: Record<string, ReactNode> = {
  "best-feature-film": (
    <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="6" y="10" width="36" height="28" rx="2" />
      <circle cx="24" cy="24" r="8" />
      <circle cx="24" cy="24" r="3" />
      <line x1="6" y1="16" x2="42" y2="16" />
      <line x1="6" y1="32" x2="42" y2="32" />
    </svg>
  ),
  "best-documentary": (
    <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="24" cy="24" r="16" />
      <circle cx="24" cy="24" r="6" />
      <line x1="24" y1="8" x2="24" y2="14" />
      <line x1="24" y1="34" x2="24" y2="40" />
      <line x1="8" y1="24" x2="14" y2="24" />
      <line x1="34" y1="24" x2="40" y2="24" />
    </svg>
  ),
  "best-short-film": (
    <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="8" y="12" width="32" height="24" rx="2" />
      <polygon points="20,18 32,24 20,30" />
    </svg>
  ),
  "best-director": (
    <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="24" cy="14" r="8" />
      <path d="M8 42 L24 32 L40 42" />
      <line x1="24" y1="32" x2="24" y2="22" />
    </svg>
  ),
  "best-cinematography": (
    <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="16" width="24" height="18" rx="2" />
      <circle cx="16" cy="25" r="6" />
      <path d="M28 20 L40 14 L40 36 L28 30 Z" />
    </svg>
  ),
  "audience-choice-award": (
    <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M24 6 L28 18 L40 18 L30 26 L34 38 L24 30 L14 38 L18 26 L8 18 L20 18 Z" />
    </svg>
  ),
}

// optional fallback icon if slug doesn’t exist in the map
const defaultIcon = (
  <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="24" cy="24" r="16" />
  </svg>
)


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
  const router = useRouter()
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
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
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

      {/* Prize Categories */}
      <section className="py-24 bg-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-champagne">
              Prize Categories
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {prizeCategories.map((prize) => (
              <div
                key={prize.title}
                role="link"
                tabIndex={0}
                onClick={() => router.push(`/prizes/${prize.slug}`)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    router.push(`/prizes/${prize.slug}`)
                  }
                }}
                className="glass-card p-8 sm:p-10 hover:border-primary/30 transition-colors duration-300 group cursor-pointer block"
              >
                <div className="flex items-start gap-5">
                  <div className="text-primary shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                    {iconsBySlug[prize.slug] ?? defaultIcon}
                  </div>

                  <div className="flex-1">
                    <h3 className="font-serif text-2xl font-semibold text-champagne mb-1 group-hover:text-primary transition-colors">
                      {prize.title}
                    </h3>

                    <p className="text-champagne/60 text-sm mb-5">{prize.description}</p>

                    <div className="flex items-center justify-between mb-3">
                      <p className="text-champagne/80 font-medium">Winner Benefits</p>

                      {/* This acts like internal "View details" link without nesting anchors */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation()
                          router.push(`/prizes/${prize.slug}`)
                        }}
                        className="text-primary/80 text-sm group-hover:text-primary transition-colors cursor-pointer block"
                      >
                        View details →
                      </button>
                    </div>

                    {prize.benefits?.length ? (
                      <ul className="space-y-2 text-champagne/70 text-sm leading-relaxed">
                        {prize.benefits.map((b) => {
                          const label = typeof b === "string" ? b : b.label
                          const href = typeof b === "string" ? undefined : b.href

                          return (
                            <li key={label} className="flex gap-3">
                              <span className="text-primary mt-[2px]">•</span>

                              {href ? (
                                <a
                                  href={href}
                                  target="_blank"
                                  rel="noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                  className="text-champagne/70 underline underline-offset-4 decoration-champagne/30 hover:text-primary hover:decoration-primary/60 transition-colors"
                                >
                                  {label}
                                </a>
                              ) : (
                                <span>{label}</span>
                              )}
                            </li>
                          )
                        })}
                      </ul>
                    ) : (
                      <p className="text-champagne/60 text-sm">Click to view details.</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
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



    </main>
  )
}
