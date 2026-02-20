import dynamic from "next/dynamic"
import { Fragment } from "react"
import Image from "next/image"
import Link from "next/link"
import { Check, Calendar, ArrowRight } from "lucide-react"

const SubmissionsForm = dynamic(() => import("./submissions-form").then((m) => m.default), {
  ssr: true,
  loading: () => (
    <div className="min-h-[400px] flex items-center justify-center text-champagne/60">
      Loading form...
    </div>
  ),
})

const eligibilityRequirements = [
  "Film projects completed from 1 January 2025 onwards are eligible.",
  "The film project should reflect Arab heritage, culture, stories, or themes in a meaningful way.",
  "Film projects may be in any language. English subtitles are required if the film is not in English or Arabic.",
  "All genres and formats are welcome, including narrative, documentary, experimental, and animation.",
  "We welcome film projects that are seeking their Australian premiere or wider exposure in Australia.",
  "Submissions may be provided in digital formats such as DCP, ProRes, or high-quality MP4.",
]

const importantDates = [
  {
    title: "Early Bird Deadline",
    date: "March 31, 2025",
    feature: "20% off submission fees",
  },
  {
    title: "Regular Deadline",
    date: "May 31, 2025",
    feature: null,
  },
  {
    title: "Late Deadline",
    date: "July 15, 2025",
    feature: "Additional $20 fee",
  },
  {
    title: "Notification Date",
    date: "September 1, 2025",
    feature: null,
  },
]

const selectionSteps = [
  {
    title: "Submit",
    description: "Upload your film via our submission platform.",
  },
  {
    title: "Review",
    description: "Programming committee evaluates all entries.",
  },
  {
    title: "Selection",
    description: "Selected filmmakers notified by September 1.",
  },
]

export default function SubmissionsPage() {
  return (
    <main className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/film-set.jpg"
            alt="Professional film set"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-champagne mb-6">
            Film Submissions
          </h1>
          <p className="text-champagne/70 text-lg max-w-2xl mx-auto">
            Share your story with audiences across Australia
          </p>
        </div>
      </section>

      {/* Call for Submissions */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <p className="text-primary tracking-[0.2em] uppercase text-sm">Call for Submissions 2026</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-champagne leading-tight">
                Share Your Vision
              </h2>
              <p className="text-champagne/70 leading-relaxed">
                The International Arab Film Festival of Australia invites filmmakers from around the world to submit their work for consideration in our 2026 edition. We are seeking bold, innovative, and compelling films that showcase the diversity and depth of Arab cinema.
              </p>
              <p className="text-champagne/70 leading-relaxed">
                Whether you&apos;re an established filmmaker or emerging talent, if your work explores Arab themes, cultures, or perspectives, we want to see it. Join us in celebrating the art of Arab storytelling.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/film-set.jpg"
                alt="Film production"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 border border-primary/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Requirements */}
      <section className="py-24 bg-secondary">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center mb-16 px-6 sm:px-8 lg:px-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-champagne">
              Eligibility Requirements
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full px-6 sm:px-8 lg:px-12">
            {eligibilityRequirements.map((requirement) => (
              <div
                key={requirement}
                className="flex items-start gap-4 glass-card p-8 min-h-[120px]"
              >
                <div className="shrink-0 w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <p className="text-champagne/80 text-base leading-relaxed">{requirement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selection Process */}
      <section className="py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-champagne">
              Selection Process
            </h2>
          </div>
          <p className="text-center text-champagne/70 mb-12 max-w-2xl mx-auto">
            All submissions are carefully reviewed by our programming committee, which includes film industry professionals, critics, and cultural experts.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            {selectionSteps.map((step, index) => (
              <Fragment key={step.title}>
                <div className="glass-card p-8 text-center flex-1 max-w-xs w-full">
                  <h3 className="font-serif text-xl font-semibold text-champagne mb-3">
                    {step.title}
                  </h3>
                  <p className="text-champagne/60 text-sm leading-relaxed">{step.description}</p>
                </div>
                {index < selectionSteps.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-primary/50 flex-shrink-0 hidden md:block" />
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      <SubmissionsForm />

    </main>
  )
}
