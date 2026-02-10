"use client"

import { useState } from "react"
import Image from "next/image"
import { Mail, MapPin, Phone, Facebook, Instagram, Twitter, AlertCircle, CheckCircle } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    subtitle: "General Inquiries",
    value: " info@aiffa.com.au",
    href: "mailto: info@aiffa.com.au",
  },
  {
    icon: MapPin,
    title: "Office Address",
    subtitle: "Visit Us",
    value: "123 Festival Street, Sydney NSW 2000, Australia",
    href: null,
  },
  {
    icon: Phone,
    title: "Phone",
    subtitle: "Office Hours",
    value: "+61 2 3456 7890",
    href: "tel:+61234567890",
  },
]

const departmentContacts = [
  { title: "Film Submissions", email: "submissions@aiffa.com.au" },
  { title: "Sponsorship & Partnerships", email: "partners@aiffa.com.au" },
  { title: "Media & Press", email: "press@aiffa.com.au" },
  { title: "Volunteers", email: "volunteers@aiffa.com.au" },
  { title: "Tickets & Box Office", email: "tickets@aiffa.com.au" },
  { title: "General Inquiries", email: "info@aiffa.com.au" },
]

const subjectOptions = [
  "General Inquiry",
  "Film Submissions",
  "Sponsorship & Partnerships",
  "Media & Press",
  "Volunteering",
  "Tickets & Box Office",
  "Other",
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await response.json()
      if (response.ok) {
        setMessage({ type: 'success', text: 'Message sent successfully! We\'ll get back to you soon.' })
        setFormData({ fullName: "", email: "", phone: "", subject: "General Inquiry", message: "" })
      } else {
        setMessage({ type: 'error', text: data.error || 'Failed to send message' })
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'An error occurred. Please try again.' })
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/gala-event.jpg"
            alt="Theater audience"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-champagne mb-6">
            Contact Us
          </h1>
          <p className="text-champagne/70 text-lg max-w-2xl mx-auto">
            Get in touch with the International Arab Film Festival of Australia
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-champagne">
              Send Us a Message
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="glass-card p-8">
            {message && (
              <div className={`mb-6 p-4 border rounded-lg flex gap-3 ${
                message.type === 'success' 
                  ? 'bg-green-500/10 border-green-500/30' 
                  : 'bg-red-500/10 border-red-500/30'
              }`}>
                {message.type === 'success' ? (
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                )}
                <p className={message.type === 'success' ? 'text-green-500' : 'text-red-500'}>
                  {message.text}
                </p>
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="fullName" className="block text-foreground text-sm mb-2">
                  Full Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  required
                  disabled={loading}
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-background border border-primary/20 px-4 py-3 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors disabled:opacity-50"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-foreground text-sm mb-2">
                  Email <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  disabled={loading}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-background border border-primary/20 px-4 py-3 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors disabled:opacity-50"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-foreground text-sm mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  disabled={loading}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-background border border-primary/20 px-4 py-3 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors disabled:opacity-50"
                  placeholder="+61 4xx xxx xxx"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-foreground text-sm mb-2">
                Subject <span className="text-primary">*</span>
              </label>
              <select
                id="subject"
                required
                disabled={loading}
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full bg-background border border-primary/20 px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors disabled:opacity-50"
              >
                {subjectOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-foreground text-sm mb-2">
                Message <span className="text-primary">*</span>
              </label>
              <textarea
                id="message"
                rows={6}
                required
                disabled={loading}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-background border border-primary/20 px-4 py-3 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none disabled:opacity-50"
                placeholder="How can we help you?"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full px-8 py-3 bg-eerie-black border border-primary text-primary font-medium tracking-wide hover:bg-primary hover:text-primary-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-secondary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-champagne">
              Contact Information
            </h2>
          </div>
          <div className="flex justify-center">
            <div className="glass-card p-8 text-center">
              <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-lg font-semibold text-champagne mb-1">
                Email
              </h3>
              <p className="text-champagne/50 text-sm mb-3">General Inquiries</p>
              <a href="mailto:info@aiffa.com.au" className="text-primary hover:underline text-sm break-all">
                info@aiffa.com.au
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Follow Us */}
      <section className="py-16 bg-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl font-bold text-champagne mb-6">
            Follow Us
          </h2>
          <div className="flex items-center justify-center gap-6 mb-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/arabfilmfestivalofaustralia?igsh=MWZncHdtYndocmlkaQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
          <p className="text-champagne/60 text-sm">
            Stay connected with us on social media for the latest festival updates, behind-the-scenes content, and Arab cinema news.
          </p>
        </div>
      </section>

    </main>
  )
}

