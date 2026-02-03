"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "What is the submission fee?",
    answer: "Fees vary by category and deadline. Early bird rates start at $20 for student films and $30 for shorts.",
  },
  {
    question: "Can I submit a film that has screened at other festivals?",
    answer: "Yes, but they must not have been commercially released or screened in Australia.",
  },
  {
    question: "Do I need to be of Arab heritage to submit?",
    answer: "No, but your film must have significant Arab content, themes, or perspectives.",
  },
  {
    question: "Will you cover travel costs for selected filmmakers?",
    answer: "We provide travel assistance for select filmmakers based on available funding.",
  },
]

export function SubmissionsFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={faq.question}
          className="glass-card overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-6 text-left"
          >
            <span className="font-serif text-lg text-champagne pr-4">{faq.question}</span>
            <ChevronDown
              className={cn(
                "w-5 h-5 text-primary flex-shrink-0 transition-transform duration-200",
                openIndex === index && "rotate-180"
              )}
            />
          </button>
          <div
            className={cn(
              "grid transition-all duration-200",
              openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            )}
          >
            <div className="overflow-hidden">
              <p className="px-6 pb-6 text-champagne/70 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
