import Link from "next/link"
import { Calendar, MapPin, ArrowLeft } from "lucide-react"
import { programDays } from "@/modules/program/data/programs"

type Props = {
  day: string
}

export function ProgramDayPage({ day }: Props) {
  const normalized = day.startsWith("day-") ? day : `day-${day}`
  const key = normalized as keyof typeof programDays
  const data = programDays[key]

  if (!data) return null

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/program"
            className="inline-flex items-center gap-2 text-primary hover:text-champagne transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Program & Schedule
          </Link>

          {/* Header */}
          <div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-champagne mb-4">
                Day {data.day} – {data.title}
              </h1>

              <p className="text-champagne/70 text-lg italic mb-6">
                Focus: {data.focus}
              </p>

              <div className="flex flex-col sm:flex-row gap-6 text-champagne/80">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="font-medium">{data.date}</span>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="font-medium">{data.venue}</span>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 lg:p-12">

            {/* Day Activities */}
            <section className="mb-12">
              <h2 className="text-primary font-serif text-2xl font-semibold uppercase tracking-wider mb-8">
                Day Activities
              </h2>
              <ul className="space-y-4">
                {data.dayActivities.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0" />
                    <p className="text-champagne/80 text-lg font-light leading-relaxed">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            {/* Evening Activities */}
            <section className="pt-12 border-t border-champagne/10">
              <h2 className="text-primary font-serif text-2xl font-semibold uppercase tracking-wider mb-8">
                Evening Activities
              </h2>
              <ul className="space-y-4">
                {data.eveningActivities.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0" />
                    <p className="text-champagne/80 text-lg font-light leading-relaxed">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            {/* CTA */}
            <div className="mt-12 pt-8 border-t border-champagne/10">
              <Link
                href="/program"
                className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-eerie-black font-semibold px-8 py-4 rounded-lg text-center transition-all"
              >
                View All Days
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
