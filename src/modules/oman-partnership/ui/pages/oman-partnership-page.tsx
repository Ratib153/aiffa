import Image from "next/image"
import { Film, MessageSquare, Globe } from "lucide-react"

const goals = [
  "Connect filmmakers and audiences across Oman, the Arab world, and Australia.",
  "Support Arab filmmakers through education and professional development.",
  "Promote cultural understanding through storytelling and cinema.",
  "Encourage long-term creative and industry collaboration.",
]

const mentorshipItems = [
  "One-on-one mentorship with experienced industry professionals.",
  "Group masterclasses and practical workshops.",
  "Script and project development support.",
  "Career guidance and industry insight.",
]

const spotlightCards = [
  {
    icon: Film,
    title: "Screenings",
    description: "Screenings of selected Omani films.",
  },
  {
    icon: MessageSquare,
    title: "Dialogue",
    description: "Filmmaker talks and audience Q&A sessions.",
  },
  {
    icon: Globe,
    title: "Showcases",
    description: "Cultural showcases highlighting Omani stories and perspectives.",
  },
]

export default function OmanPartnershipPage() {
  return (
    <main className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/oman-australia.jpg"
            alt="Oman and Australia landscapes"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-eerie-black via-eerie-black/90 to-eerie-black" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-champagne mb-6">
            Oman Partnership
          </h1>
          <p className="text-champagne/70 text-lg max-w-2xl mx-auto">
            Connecting cultures through the universal language of cinema
          </p>
        </div>
      </section>

      {/* Partnership Overview */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-champagne/80 leading-relaxed text-lg text-center">
            The Arab International Film Festival of Australia (AIFFA) was initiated through a partnership between the Oman Film Society and the International Film Festival of Australia (IFFA), with a shared vision of using cinema to connect Oman, the Arab world, and Australia. Through this collaboration, the Oman Film Society supports AIFFA as a cultural and creative initiative designed to strengthen cross-cultural understanding, artistic exchange, and people-to-people connections through film.
          </p>
        </div>
      </section>

      {/* The Shared Vision */}
      <section className="py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-10 border border-primary/30">
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4 text-center">The Shared Vision</p>
            <p className="text-champagne/80 leading-relaxed text-center mb-8">
              AIFFA was developed with a clear and common purpose: to create a platform where Arab cinema can be celebrated internationally while fostering meaningful cultural dialogue between regions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {goals.map((goal) => (
                <div key={goal} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2" />
                  <p className="text-champagne/70 text-sm">{goal}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mentorship & Masterclasses */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-[4/3] overflow-hidden order-2 lg:order-1">
              <Image
                src="/images/gala-event.jpg"
                alt="Film masterclass"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 border border-primary/20" />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <p className="text-primary tracking-[0.2em] uppercase text-sm">Programs</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-champagne leading-tight">
                Mentorship & Masterclasses
              </h2>
              <p className="text-champagne/70 leading-relaxed">
                As part of this joint initiative, AIFFA delivers mentorship and masterclass programmes that support filmmakers at different stages of their creative journey. These programmes may include:
              </p>
              <ul className="space-y-3">
                {mentorshipItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2" />
                    <p className="text-champagne/70">{item}</p>
                  </li>
                ))}
              </ul>
              <p className="text-champagne/50 text-sm italic">
                These activities are delivered through AIFFA, with IFFA as the delivery partner, in collaboration with the Oman Film Society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Oman Spotlight */}
      <section className="py-24 bg-secondary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-champagne">
              Oman Spotlight
            </h2>
          </div>
          <p className="text-center text-champagne/70 mb-12 max-w-2xl mx-auto">
            AIFFA may present a dedicated Oman Spotlight within the festival programme, recognising the creative contribution of Omani filmmakers within a broader Arab and international context. This may include:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {spotlightCards.map((card) => (
              <div
                key={card.title}
                className="glass-card p-8 text-center hover:border-primary/30 transition-colors duration-300 group"
              >
                <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <card.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-champagne mb-3 group-hover:text-primary transition-colors">
                  {card.title}
                </h3>
                <p className="text-champagne/60 text-sm">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural & Industry Exchange */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">Cultural Bridge</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-champagne mb-6">
            Cultural & Industry Exchange
          </h2>
          <p className="text-champagne/70 leading-relaxed max-w-2xl mx-auto">
            Through this partnership, AIFFA serves as a bridge between Oman, the Arab world, and Australia, using cinema as a tool for cultural diplomacy and creative exchange. These exchanges encourage dialogue, collaboration, and lasting creative relationships that extend beyond the festival.
          </p>
        </div>
      </section>

      {/* Final Authority Line */}
      <section className="py-16 bg-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-serif text-lg text-primary">
            AIFFA is delivered by the International Film Festival of Australia (IFFA), in partnership with the Oman Film Society.
          </p>
        </div>
      </section>
    </main>
  )
}
