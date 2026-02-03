import Image from "next/image"

export function ExperienceCinemaSection() {
  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/cinema.jpg"
              alt="Cinema experience"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 border border-primary/20" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-primary tracking-[0.2em] uppercase text-sm">Discover</p>
            <h2 className="font-libre-baskerville text-3xl sm:text-4xl font-bold text-champagne leading-tight">
              Experience Arab Cinema
            </h2>
            <div className="space-y-4 text-champagne/70 leading-relaxed">
              <p>
                Join us for an unforgettable celebration of Arab storytelling. From thought-provoking documentaries to powerful dramas, our carefully curated program showcases the best of contemporary Arab cinema.
              </p>
              <p>
                Meet filmmakers, engage in discussions, and immerse yourself in diverse narratives from across the Arab world.
              </p>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div>
                <p className="font-serif text-3xl font-bold text-primary">50+</p>
                <p className="text-champagne/60 text-sm">Films Screened</p>
              </div>
              <div className="w-px h-12 bg-primary/20" />
              <div>
                <p className="font-serif text-3xl font-bold text-primary">15</p>
                <p className="text-champagne/60 text-sm">Countries</p>
              </div>
              <div className="w-px h-12 bg-primary/20" />
              <div>
                <p className="font-serif text-3xl font-bold text-primary">10</p>
                <p className="text-champagne/60 text-sm">Festival Days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
