import Image from "next/image"
import Link from "next/link"

const timeline = [
  { year: "2025", description: "Expanding to multiple cities with 50+ films from 15 countries." },
  { year: "2024", description: "Introduced industry panels and networking events." },
  { year: "2023", description: "First awards ceremony recognizing excellence in Arab cinema." },
  { year: "2022", description: "Doubled attendance with 30+ films from 10 countries." },
  { year: "2021", description: "Inaugural festival featuring 15 films from 8 countries." },
]

const team = [
  {
    name: "Amira El-Sayed",
    role: "Festival Director",
    bio: "Film curator with 15 years of experience in international cinema.",
    image: "/images/team-1.jpg",
  },
  {
    name: "Hassan Mansour",
    role: "Program Director",
    bio: "Award-winning filmmaker and programming specialist.",
    image: "/images/team-2.jpg",
  },
  {
    name: "Leila Khoury",
    role: "Industry Coordinator",
    bio: "Film industry professional with expertise in Arab cinema.",
    image: "/images/team-3.jpg",
  },
  {
    name: "Omar Badawi",
    role: "Marketing Director",
    bio: "Communications expert passionate about cultural storytelling.",
    image: "/images/team-1.jpg",
  },
  {
    name: "Yasmin Farah",
    role: "Community Liaison",
    bio: "Building bridges between communities through film.",
    image: "/images/team-3.jpg",
  },
  {
    name: "Karim Rashid",
    role: "Technical Director",
    bio: "Cinema technology specialist ensuring perfect screenings.",
    image: "/images/team-2.jpg",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-cinema.jpg"
            alt="Cinema interior"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-eerie-black via-eerie-black/90 to-eerie-black" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-champagne mb-6">
            About the Festival
          </h1>
          <p className="text-champagne/70 text-lg max-w-2xl mx-auto">
            A platform for Arab voices, stories, and cinematic excellence
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="glass-card p-10">
              <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">Our Vision</p>
              <p className="text-champagne/80 leading-relaxed">
                To be Australia&apos;s premier showcase of Arab cinema, fostering cross-cultural understanding and celebrating the artistic achievements of Arab filmmakers. We envision a future where Arab stories are recognized, appreciated, and celebrated as essential contributions to world cinema.
              </p>
            </div>
            <div className="glass-card p-10">
              <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">Our Mission</p>
              <p className="text-champagne/80 leading-relaxed">
                We connect Australian audiences with the vibrant world of Arab cinema through carefully curated film programs, industry events, and cultural exchanges. Our mission is to provide a platform that elevates Arab voices, supports emerging filmmakers, and builds bridges between cultures through the universal language of cinema.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Arab Cinema in Australia */}
      <section className="py-24 bg-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <p className="text-primary tracking-[0.2em] uppercase text-sm">Our Purpose</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-champagne leading-tight">
                Why Arab Cinema in Australia
              </h2>
              <p className="text-champagne/70 leading-relaxed">
                Arab cinema represents a rich tapestry of cultures, languages, and perspectives from across 22 countries. In Australia, home to a vibrant Arab diaspora, these films provide both a connection to heritage and an opportunity for broader audiences to discover new perspectives.
              </p>
              <p className="text-champagne/70 leading-relaxed">
                By showcasing Arab cinema, we celebrate diversity, challenge stereotypes, and highlight the creativity and resilience of Arab storytellers who continue to push boundaries in one of the world&apos;s most dynamic film traditions.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/arab-culture.jpg"
                alt="Arab cultural heritage"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 border border-primary/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-champagne">
              Our Team
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-primary/30">
                  {/* <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  /> */}
                </div>
                <h3 className="font-serif text-xl font-semibold text-champagne mb-1">
                  {member.name}
                </h3>
                <p className="text-primary text-sm mb-3">{member.role}</p>
                <p className="text-champagne/60 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-champagne/70 text-lg mb-10">
            Join us in celebrating the power of Arab storytelling
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/program"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-medium tracking-wide hover:bg-primary/90 transition-colors text-center"
            >
              View Program
            </Link>
            <Link
              href="/membership"
              className="w-full sm:w-auto px-8 py-4 border border-champagne/30 text-champagne font-medium tracking-wide hover:border-primary hover:text-primary transition-colors text-center"
            >
              Become a Member
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}

