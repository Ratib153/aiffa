import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="w-full">
      {/* 1) VIDEO SECTION */}
      <div
        className="w-full pt-28 pb-20"
        style={{ backgroundColor: "#f7f2ed" }} 
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="mb-3 text-left text-sm sm:text-base uppercase tracking-widest"
            style={{ color: "#C9A84F" }}
          >
            Experience a Gift for Life
          </p>

          <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/30 shadow-2xl bg-black/30">
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="/videos/hero-poster.jpg" // optional thumbnail 
            >
              <source src="/videos/hero.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      {/* LOGO SECTION */}
      <div
        className="w-full pt-2 pb-0"
        style={{ backgroundColor: "#000000" }} 
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <Image
            src="/images/aiffa-logo-full.png"
            alt="AIFFA – Arab International Film Festival of Australia"
            width={520}
            height={200}
            priority
            className="h-auto w-[280px] sm:w-[360px] md:w-[460px]"
          />
        </div>
      </div>

      {/* 3) DESCRIPTION + CTA SECTION */}
      <div
        className="w-full pt-12 py-10"
        style={{ backgroundColor: "#f7f2ed" }} 
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-libre-baskerville text-center text-sm sm:text-base max-w-3xl mx-auto leading-relaxed text-foreground/80 mb-10">
            AIFFA was established through a collaboration between the Oman Film Society and the
            International Film Festival of Australia (IFFA) to connect Omani and Arab filmmakers with
            Australia on an international platform, supporting youth and emerging talent through
            creative exchange, skills development, and global industry access.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/submissions"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-medium tracking-wide hover:bg-primary/90 transition-colors text-center"
            >
              Submit Film
            </Link>
            <Link
              href="/program"
              className="w-full sm:w-auto px-8 py-4 border border-champagne/30 text-champagne font-medium tracking-wide hover:border-primary hover:text-primary transition-colors text-center"
            >
              View Program
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
