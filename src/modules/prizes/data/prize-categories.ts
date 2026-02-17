export type Benefit =
  | string
  | {
      label: string
      href: string
    }

export type PrizeCategory = {
  title: string
  slug: string
  description: string
  detailedDescription: string
  benefits: Benefit[]
}

export const prizeCategories: PrizeCategory[] = [
  {
    title: "Best Feature Film",
    slug: "best-feature-film",
    description: "Outstanding narrative feature film",
    detailedDescription:
      "The Best Feature Film award recognizes exceptional narrative feature films that demonstrate outstanding storytelling, artistic vision, and cultural significance. This category celebrates full-length films that captivate audiences with compelling narratives, strong character development, and innovative filmmaking techniques.",
    benefits: [
      "IFFA Best Feature Film Trophy",
      "Winner Certificate + Official Winner Laurel",
      "Winner Spotlight across IFFA website and social channels (featured placement + dedicated winner page)",
      "Official Press Release announcement",
      { label: "Entry to the IFFA Awards Ceremony 2026 (complimentary)", href: "https://www.iffa.com.au/" },
      "Filmmaker consultation: next-project development guidance and strategy",
      "International positioning support: festival/market pathway guidance (optional)",
      "Curated introductions to producers and industry professionals where appropriate",
    ],
  },
  {
    title: "Best Documentary",
    slug: "best-documentary",
    description: "Excellence in non-fiction filmmaking",
    detailedDescription:
      "The Best Documentary award honors excellence in non-fiction filmmaking, recognizing films that explore real-world stories with depth, authenticity, and journalistic integrity. This category celebrates documentaries that shed light on important issues, document cultural heritage, and provide meaningful insights into the human experience.",
    benefits: [
      "IFFA Best Documentary Trophy",
      "Winner Certificate + Official Winner Laurel",
      "Winner Spotlight across IFFA website and social channels (featured placement + dedicated winner page)",
      "Official Press Release announcement",
      { label: "Entry to the IFFA Awards Ceremony 2026 (complimentary)", href: "https://www.iffa.com.au/" },
      "Documentary impact positioning support (festival + outreach strategy guidance)",
      "Curated introductions to documentary programmers / industry professionals where appropriate",
    ],
  },
  {
    title: "Best Short Film",
    slug: "best-short-film",
    description: "Exceptional short-form storytelling",
    detailedDescription:
      "The Best Short Film award celebrates exceptional short-form storytelling, recognizing films that deliver powerful narratives within a condensed format. This category honors filmmakers who master the art of concise storytelling, creating impactful experiences that resonate with audiences despite their brief duration.",
    benefits: [
      "IFFA Best Short Film Trophy",
      "Winner Certificate + Official Winner Laurel",
      "Winner Spotlight across IFFA website and social channels (featured placement + dedicated winner page)",
      "Official Press Release announcement",
      { label: "Entry to the IFFA Awards Ceremony 2026 (complimentary)", href: "https://www.iffa.com.au/" },
      "Career pathway support for emerging talent (next steps guidance)",
      "Priority consideration for future IFFA showcases, industry sessions, and development initiatives",
    ],
  },
  {
    title: "Best Director",
    slug: "best-director",
    description: "Outstanding directorial achievement",
    detailedDescription:
      "The Best Director award recognizes outstanding directorial achievement, honoring filmmakers who demonstrate exceptional vision, leadership, and creative excellence in bringing stories to life. This category celebrates directors who masterfully guide all aspects of filmmaking, from performance to visual composition, creating cohesive and compelling cinematic experiences.",
    benefits: [
      "IFFA Best Director Trophy",
      "Winner Certificate + Official Winner Laurel",
      "Winner Spotlight across IFFA website and social channels (featured placement + dedicated winner page)",
      "Official Press Release announcement",
      { label: "Entry to the IFFA Awards Ceremony 2026 (complimentary)", href: "https://www.iffa.com.au/" },
      "Director profile positioning (pitch + bio guidance for international visibility)",
      "Curated introductions to producers / development partners where appropriate",
    ],
  },
  {
    title: "Best Cinematography",
    slug: "best-cinematography",
    description: "Excellence in visual storytelling",
    detailedDescription:
      "The Best Cinematography award celebrates excellence in visual storytelling, recognizing the artistry and technical skill of cinematographers who create stunning visual narratives. This category honors the craft of capturing light, composition, and movement to enhance storytelling and create memorable cinematic imagery.",
    benefits: [
      "IFFA Best Cinematography Trophy",
      "Winner Certificate + Official Winner Laurel",
      "Winner Spotlight across IFFA website and social channels (featured placement + dedicated winner page)",
      "Official Press Release announcement",
      { label: "Entry to the IFFA Awards Ceremony 2026 (complimentary)", href: "https://www.iffa.com.au/" },
      "Industry visibility support (showreel/credit presentation guidance)",
      "Curated introductions to directors/producers where appropriate",
    ],
  },
  {
    title: "Audience Choice Award",
    slug: "audience-choice-award",
    description: "Selected by festival attendees",
    detailedDescription:
      "The Audience Choice Award is selected by festival attendees, giving voice to the viewers who experience and connect with the films. This special recognition honors films that resonate most deeply with audiences, celebrating the power of cinema to move, inspire, and create meaningful connections between filmmakers and viewers.",
    benefits: [
      "IFFA Audience Choice Award Trophy",
      "Winner Certificate + Official Winner Laurel",
      "Official recognition as 'Voted by the Audience'",
      "Winner Spotlight across IFFA website and social channels (featured placement + dedicated winner page)",
      "Official Press Release announcement",
      { label: "Entry to the IFFA Awards Ceremony 2026 (complimentary)", href: "https://www.iffa.com.au/" },
      "Highlighted audience engagement feature across IFFA digital platforms",
      "Priority consideration for future IFFA showcases and audience-driven initiatives",
    ],
  },
]
