
import Image from "next/image"
import Link from "next/link"
import { Check, Calendar, ChevronDown, ChevronUp } from "lucide-react"
import { SubmissionsFAQ } from "../components/faq"
import SubmissionsForm from "./submissions-form"

const eligibilityRequirements = [
  "Films must be completed after January 1, 2023.",
  "Director must be of Arab heritage OR film must have significant Arab content.",
  "Films can be in any language (with English subtitles if not in English or Arabic).",
  "All genres and formats accepted (narrative, documentary, experimental, animation).",
  "Films must not have been commercially released or screened in Australia.",
  "Films can be submitted in digital formats (DCP, ProRes, or high-quality MP4).",
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
    number: "01",
    title: "Submit",
    description: "Upload your film via our submission platform.",
  },
  {
    number: "02",
    title: "Review",
    description: "Programming committee evaluates all entries.",
  },
  {
    number: "03",
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
          <div className="absolute inset-0 bg-gradient-to-b from-eerie-black via-eerie-black/90 to-eerie-black" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-champagne mb-6">
            Film Submissions
          </h1>
          <p className="text-champagne/70 text-lg max-w-2xl mx-auto mb-10">
            Share your story with audiences across Australia
          </p>
          <Link
            href="#submit"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground font-medium tracking-wide hover:bg-primary/90 transition-colors"
          >
            Submit Your Film
          </Link>
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-champagne">
              Eligibility Requirements
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {eligibilityRequirements.map((requirement) => (
              <div
                key={requirement}
                className="flex items-start gap-4 glass-card p-6"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <p className="text-champagne/80 text-sm leading-relaxed">{requirement}</p>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {selectionSteps.map((step) => (
              <div key={step.number} className="text-center">
                <span className="font-serif text-5xl font-bold text-primary/30">{step.number}</span>
                <h3 className="font-serif text-xl font-semibold text-champagne mt-4 mb-2">
                  {step.title}
                </h3>
                <p className="text-champagne/60 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
          
    <SubmissionsForm/>

      {/* FAQs */}
      <section id="faq" className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-champagne">
              Filmmaker FAQs
            </h2>
          </div>
          <SubmissionsFAQ />
        </div>
      </section>

      {/* Final CTA */}
      <section id="submit" className="py-24 bg-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-champagne mb-6">
            Ready to Submit?
          </h2>
          <p className="text-champagne/70 mb-10 max-w-xl mx-auto">
            Join us in celebrating Arab cinema. Submit your film today and be part of Australia&apos;s premier international Arab film festival.
          </p>
          <Link
            href="#"
            className="inline-block px-8 py-4 bg-eerie-black border border-primary text-primary font-medium tracking-wide hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Submit Your Film
          </Link>
        </div>
      </section>
    </main>
  )
}
