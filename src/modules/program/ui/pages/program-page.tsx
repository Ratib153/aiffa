import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Calendar, MapPin, Download, Link } from "lucide-react"
import ScheduleGrid from "../sections/sample-programs-grid"

const programCards = [
  {
    title: "Workshops",
    description: "Our workshops are designed to nurture creativity, technical skills, and storytelling abilities in filmmakers at all stages of their careers. From screenwriting and directing to cinematography and post-production, participants gain hands-on experience led by seasoned industry professionals.",
  },
  {
    title: "Mentorship and Training Programs",
    description: "IAFFA mentorship programs pair emerging talent with established filmmakers, producers, and industry experts. These one on one or small group sessions provide guidance on career development, project strategy, and navigating the global film industry.",
  },
  {
    title: "Talent Exchange",
    description: "Through our talent exchange initiatives, the festival facilitates collaboration between Arab filmmakers and Australian cinema professionals. Participants gain opportunities to work on cross-cultural projects, share creative perspectives, and expand their professional networks internationally.",
  },
  {
    title: "Curated Film Screenings",
    description: "Our curated screenings celebrate the richness and diversity of Arab cinema. Each selection highlights compelling narratives, innovative storytelling, and exceptional filmmaking from the Arab world. Screenings are complemented by Q&A sessions, panel discussions, and audience interactions.",
  },
]

const sampleSchedule = [
  {
    day: 1,
    title: "Orientation & Foundations",
    focus: "Context, skills, and community",
    dayActivities: [
      "Festival welcome and programme overview",
      "Foundational filmmaking workshops (story, directing, producing)",
    ],
    eveningActivities: [
      "Opening networking gathering",
      "Welcome reception",
    ],
  },
  {
    day: 2,
    title: "Mentorship & Talent Exchange",
    focus: "Individual growth and collaboration",
    dayActivities: [
      "One-on-one and small-group mentorship sessions",
      "Talent exchange across creative roles",
    ],
    eveningActivities: [
      "Curated film screening",
      "Q&A with filmmakers",
    ],
  },
  {
    day: 3,
    title: "Industry & Career Pathways",
    focus: "Professional development",
    dayActivities: [
      "Festival strategy and international circulation",
      "Distribution, markets, and co-production pathways",
    ],
    eveningActivities: [
      "Industry screening",
    ],
  },
  {
    day: 4,
    title: "From Development to Practice",
    focus: "Preparing for production",
    dayActivities: [
      "Script development workshops",
      "Budgeting and production planning",
    ],
    eveningActivities: [
      "Curated screening",
    ],
  },
  {
    day: 5,
    title: "Practical Film Production",
    focus: "Hands-on filmmaking",
    dayActivities: [
      "Commencement of practical film production",
      "On-set mentorship across departments",
    ],
    eveningActivities: [
      "Team check-ins and networking",
    ],
  },
  {
    day: 6,
    title: "Completion & Post-Production",
    focus: "Refinement and reflection",
    dayActivities: [
      "Continued filming and pickups",
      "Post-production workflow introduction",
    ],
    eveningActivities: [
      "Final curated screening",
    ],
  },
  {
    day: 7,
    title: "Showcase, Awards & Closing",
    focus: "Outcomes and celebration",
    dayActivities: [
      "Final project presentations",
      "Group feedback and reflection",
    ],
    eveningActivities: [
      "Film showcase screening",
      "Awards ceremony and closing reception",
    ],
  },
]


const venues = [
  {
    name: "Palace Cinema Central",
    location: "Sydney",
    description: "Premium cinema with state-of-the-art projection and sound.",
    address: "123 George Street",
    image: "/images/palace-cinema.jpg",
  },
  {
    name: "Dendy Opera Quays",
    location: "Sydney",
    description: "Boutique cinema with stunning harbour views.",
    address: "2 East Circular Quay",
    image: "/images/dendy-cinema.jpg",
  },
]

export default function ProgramPage() {
  return (
    <main className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-cinema.jpg"
            alt="Theater interior"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-eerie-black via-eerie-black/90 to-eerie-black" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-champagne mb-6">
            Festival Program
          </h1>
          <p className="text-champagne/70 text-lg max-w-2xl mx-auto">
            Discover our carefully curated selection of films, workshops, and industry events celebrating Arab cinema.
          </p>
        </div>
      </section>

      {/* Program Detail Cards */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {programCards.map((card) => (
              <div
                key={card.title}
                className="glass-card p-8 border-l-2 border-l-primary"
              >
                <h3 className="font-serif text-2xl font-semibold text-champagne mb-4">
                  {card.title}
                </h3>
                <p className="text-champagne/70 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Schedule */}
      <section className="py-24 bg-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3">
              Schedule
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-champagne">
              Sample Schedule
            </h2>
          </div>

          <ScheduleGrid sampleSchedule={sampleSchedule} />
        </div>
      </section>


      {/* Venues Section */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3">Locations</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-champagne">
              Festival Venues
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {venues.map((venue) => (
              <div key={venue.name} className="group overflow-hidden">
                <div className="relative aspect-video overflow-hidden mb-6">
                  <Image
                    src={venue.image || "/placeholder.svg"}
                    alt={venue.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-eerie-black/60 to-transparent" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-champagne mb-2 group-hover:text-primary transition-colors">
                  {venue.name}
                </h3>
                <p className="text-champagne/70 text-sm mb-3">{venue.description}</p>
                <div className="flex items-center gap-2 text-champagne/50 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>{venue.address}, {venue.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main >
  )
}
