"use client"

import { useState, type FormEvent } from "react"
import { AlertCircle, CheckCircle } from "lucide-react"

const countries = [
  "Australia",
  "United Arab Emirates",
  "Saudi Arabia",
  "Egypt",
  "Jordan",
  "Lebanon",
  "Morocco",
  "Oman",
  "Qatar",
  "Kuwait",
  "Other",
]

const interests = [
  "Documentary",
  "Short Film",
  "Feature Film",
  "Workshops",
  "Panels",
]

const membershipTypes = [
  "Individual",
  "Student",
  "Professional",
  "Organization",
  "Patron",
]
export function MembershipForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    membershipType: "Individual",
    organization: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)
    try {
      const response = await fetch('/api/membership', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await response.json()
      if (response.ok) {
        setMessage({ type: 'success', text: 'Membership application submitted! We will contact you soon.' })
        setFormData({ fullName: "", email: "", phone: "", country: "", membershipType: "Individual", organization: "", message: "" })
      } else {
        setMessage({ type: 'error', text: data.error || 'Failed to submit application' })
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'An error occurred. Please try again.' })
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
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
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-foreground text-sm mb-2">
            Email Address <span className="text-primary">*</span>
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
            Phone <span className="text-primary">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            required
            disabled={loading}
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full bg-background border border-primary/20 px-4 py-3 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors disabled:opacity-50"
            placeholder="+61 4xx xxx xxx"
          />
        </div>
        <div>
          <label htmlFor="country" className="block text-foreground text-sm mb-2">
            Country <span className="text-primary">*</span>
          </label>
          <select
            id="country"
            required
            disabled={loading}
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            className="w-full bg-background border border-primary/20 px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors disabled:opacity-50"
          >
            <option value="">Select country</option>
            {countries.map((country) => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="membershipType" className="block text-foreground text-sm mb-2">
            Membership Type <span className="text-primary">*</span>
          </label>
          <select
            id="membershipType"
            required
            disabled={loading}
            value={formData.membershipType}
            onChange={(e) => setFormData({ ...formData, membershipType: e.target.value })}
            className="w-full bg-background border border-primary/20 px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors disabled:opacity-50"
          >
            {membershipTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="organization" className="block text-foreground text-sm mb-2">
            Organization / Institution
          </label>
          <input
            type="text"
            id="organization"
            disabled={loading}
            value={formData.organization}
            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
            className="w-full bg-background border border-primary/20 px-4 py-3 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors disabled:opacity-50"
            placeholder="Enter organization name"
          />
        </div>
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-foreground text-sm mb-2">
          Message (Optional)
        </label>
        <textarea
          id="message"
          rows={3}
          disabled={loading}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full bg-background border border-primary/20 px-4 py-3 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none disabled:opacity-50"
          placeholder="Tell us about yourself"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full px-8 py-3 bg-primary text-primary-foreground font-medium tracking-wide hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Joining...' : 'Join AIFFA'}
      </button>
    </form>
  )
}
