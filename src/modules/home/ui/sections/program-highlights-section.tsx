import { GraduationCap, Users, Briefcase, Network, Globe, Film } from "lucide-react"

const programs = [
  {
    icon: GraduationCap,
    title: "Workshops & Masterclasses",
    description: "Hands-on workshops and masterclasses led by industry professionals, building real-world filmmaking skills.",
  },
  {
    icon: Users,
    title: "Mentorship Programs",
    description: "Mentorship programmes pairing emerging filmmakers with industry professionals for personalised creative and career guidance.",
  },
  {
    icon: Briefcase,
    title: "Training and Capacity Building",
    description: "Structured training programmes that build technical, creative, and professional skills for long-term careers in the global film industry.",
  },
  {
    icon: Network,
    title: "Industry Networking & Market Access",
    description: "Curated networking platforms connecting filmmakers with key industry decision-makers and global opportunities.",
  },
  {
    icon: Globe,
    title: "Talent and Cultural Exchange",
    description: "Talent and cultural exchange initiatives fostering collaboration and shared storytelling between Australian, Arab, and Omani filmmakers.",
  },
  {
    icon: Film,
    title: "Curated Film Showcases",
    description: "Curated, non-competitive film showcases highlighting voices from Australia, Oman, and the Arab region, fostering cultural exchange and dialogue.",
  },
]

export function ProgramHighlightsSection() {
  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3">What We Offer</p>
          <h2 className="font-libre-baskerville text-3xl sm:text-4xl font-bold text-champagne">
            Program Highlights
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <div
              key={program.title}
              className="glass-card p-8 hover:border-primary/30 transition-colors duration-300 group"
            >
              <div className="w-12 h-12 flex items-center justify-center mb-6">
                <program.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-libre-baskerville text-xl font-semibold text-champagne mb-4 group-hover:text-primary transition-colors">
                {program.title}
              </h3>
              <p className="text-champagne/60 text-sm leading-relaxed">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
