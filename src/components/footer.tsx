import Link from "next/link"
import { Facebook, Instagram, Linkedin, X, Youtube } from "lucide-react"
import Image from "next/image";


const festivalLinks = [
  { label: "About", href: "/about" },
  { label: "Program", href: "/program" },
  { label: "Awards", href: "/prizes" },
  { label: "Submissions", href: "/submissions" },
]

const resourceLinks = [
  { label: "Media & Press", href: "/contact" },
  { label: "Partners", href: "/oman-partnership" },
]

const connectLinks = [
  { label: "Contact", href: "/contact" },
  { label: "Membership", href: "/membership" },
]

export function Footer() {
  return (
    <footer className="bg-background border-t border-primary/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Image
              src="/images/aiffalogo-bg.png"
              alt="AIFFA logo"
              width={140}
              height={40}
              className="h-auto w-[140px]"
              priority
            />
            <p className="text-champagne/60 text-sm leading-relaxed">
              Celebrating the richness and diversity of Arab cinema in Australia.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.facebook.com/profile.php?id=61588401630735"
                target="_blank"
                rel="noopener noreferrer"
                className="text-champagne/40 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/arabfilmfestivalofaustralia?igsh=MWZncHdtYndocmlkaQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-champagne/40 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/arab-international-film-festival-of-australia/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-champagne/40 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCO2xJ6Cw1-5o1iolIJtO4yQ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-champagne/40 hover:text-primary transition-colors"
                aria-label="Youtube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Festival Column */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-champagne mb-6">Festival</h4>
            <ul className="space-y-3">
              {festivalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-champagne/60 hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-champagne mb-6">Resources</h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-champagne/60 hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-champagne mb-6">Connect</h4>
            <ul className="space-y-3">
              {connectLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-champagne/60 hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link
                href="/membership"
                className="inline-block px-6 py-2.5 border border-primary text-primary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Newsletter
              </Link>
            </div>
          </div>
        </div>

        {/* Legal Bar */}
        <div className="mt-16 pt-8 border-t border-primary/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-champagne/40 text-sm">
            © 2026 Arab International Film Festival of Australia
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-champagne/40 hover:text-primary text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-champagne/40 hover:text-primary text-sm transition-colors">
              Terms of Use
            </Link>
            <Link href="/accessibility" className="text-champagne/40 hover:text-primary text-sm transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
