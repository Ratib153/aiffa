import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/oman.jpg"
          alt="Oman landscape"
          fill
          className="object-cover"
          priority
        />
        <div 
          className="absolute inset-0 border-0"
          style={{ 
            border: 'none',
            boxShadow: 'none',
            background: 'linear-gradient(to bottom, transparent 0%, rgba(18, 18, 18, 0.07) 10%, rgba(18, 18, 18, 0.21) 30%, rgba(18, 18, 18, 0.35) 50%, rgba(18, 18, 18, 0.49) 70%, rgba(18, 18, 18, 0.7) 100%)'
          }}
        />
      </div>

      {/* Bottom Fade Overlay */}
      <div 
        className="absolute inset-x-0 bottom-0 h-32 pointer-events-none z-20"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(18, 18, 18, 0.14) 20%, rgba(18, 18, 18, 0.35) 50%, rgba(18, 18, 18, 0.56) 80%, rgba(18, 18, 18, 0.7) 100%)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Main Heading */}
        <h1 
          className="font-libre-baskerville text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8"
          style={{ transform: 'scale(0.96)', color: '#FCEFB4' }}
        >
          Arab International Film Festival of Australia
        </h1>
        
        {/* Subtitle */}
        <p className="font-libre-baskerville italic text-champagne/70 text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Celebrating the rich tapestry of Arab cinema and culture
        </p>

        {/* CTA Buttons */}
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
    </section>
  )
}
