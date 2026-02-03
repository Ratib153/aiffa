import Link from "next/link"

const prizes = [
  {
    title: "Best Feature Film",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
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
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="8" y="12" width="32" height="24" rx="2" />
        <polygon points="20,18 32,24 20,30" fill="none" />
      </svg>
    ),
  },
  {
    title: "Best Short Film",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
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
    title: "Best Director",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 36 L24 12 L36 36" />
        <circle cx="24" cy="36" r="6" />
        <line x1="18" y1="28" x2="30" y2="28" />
      </svg>
    ),
  },
  {
    title: "Best Cinematography",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 20 L24 10 L42 20 L24 30 Z" />
        <path d="M12 23 L12 36 L24 42 L36 36 L36 23" />
        <line x1="42" y1="20" x2="42" y2="38" />
        <circle cx="42" cy="38" r="2" />
      </svg>
    ),
  },
  {
    title: "Audience Choice Award",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="16" width="24" height="18" rx="2" />
        <circle cx="16" cy="25" r="6" />
        <path d="M28 20 L40 14 L40 36 L28 30 Z" />
      </svg>
    ),
  },
]

export function PrizeCategoriesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3">Recognition</p>
          <h2 className="font-libre-baskerville text-3xl sm:text-4xl font-bold text-champagne">
            Prize Categories
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {prizes.map((prize) => (
            <div
              key={prize.title}
              className="aspect-square flex flex-col items-center justify-center p-4 border border-primary/20 hover:border-primary/50 transition-colors duration-300 group"
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {prize.icon}
              </div>
              <h3 className="font-libre-baskerville text-sm sm:text-base text-center text-champagne group-hover:text-primary transition-colors">
                {prize.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/prizes"
            className="inline-block px-8 py-3 border border-primary text-primary font-medium tracking-wide hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            View All Awards
          </Link>
        </div>
      </div>
    </section>
  )
}
