import Link from "next/link"

export function BePartSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">Join Us</p>
        <h2 className="font-libre-baskerville text-3xl sm:text-4xl lg:text-5xl font-bold text-champagne leading-tight mb-6">
          Be Part of the Story
        </h2>
        <p className="text-champagne/70 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          Whether you&apos;re a filmmaker looking to showcase your work or a cinema lover eager to explore new perspectives, the International Arab Film Festival of Australia welcomes you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/submissions"
            className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-medium tracking-wide hover:bg-primary/90 transition-colors text-center"
          >
            Submit Your Film
          </Link>
          <Link
            href="/membership"
            className="w-full sm:w-auto px-8 py-4 border border-champagne/30 text-champagne font-medium tracking-wide hover:border-primary hover:text-primary transition-colors text-center"
          >
            Become Member
          </Link>
        </div>
      </div>
    </section>
  )
}
