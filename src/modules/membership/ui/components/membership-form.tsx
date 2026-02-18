"use client"

import { useState, type FormEvent } from "react"
import { AlertCircle, CheckCircle } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select"
import { phonePrefixes } from "@/lib/phone-prefixes"
import { countryOptions } from "@/lib/countries"

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
    phonePrefix: "+61",
    phoneNumber: "",
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
      const isOtherPrefix = formData.phonePrefix === "+other"
      const phone = formData.phoneNumber.trim()
        ? isOtherPrefix
          ? formData.phoneNumber.replace(/\s/g, "")
          : `${formData.phonePrefix}${formData.phoneNumber.replace(/\D/g, "")}`
        : ""
      const response = await fetch('/api/membership', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, phone }),
      })
      const data = await response.json()
      if (response.ok) {
        setMessage({ type: 'success', text: 'Membership application submitted! We will contact you soon.' })
        setFormData({ fullName: "", email: "", phonePrefix: "+61", phoneNumber: "", country: "", membershipType: "Individual", organization: "", message: "" })
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
        <div className={`mb-6 p-4 border rounded-lg flex gap-3 ${message.type === 'success'
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
        <div className="sm:col-span-2">
          <label htmlFor="phone" className="block text-foreground text-sm mb-2">
            Phone <span className="text-primary">*</span>
          </label>
          <div className="flex gap-2">
            <Select
              value={formData.phonePrefix}
              onValueChange={(v) => setFormData({ ...formData, phonePrefix: v })}
              disabled={loading}
            >
              <SelectTrigger
                id="phonePrefix"
                aria-label="Country code"
                className="w-24 shrink-0 bg-background border border-primary/20 px-3 py-3 text-foreground focus:border-primary focus:ring-primary/20 disabled:opacity-50 [&>svg]:ml-0"
              >
                <span className="truncate">{formData.phonePrefix}</span>
              </SelectTrigger>
              <SelectContent>
                {phonePrefixes.map((p) => (
                  <SelectItem key={p.value} value={p.value}>
                    {p.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <input
              type="tel"
              id="phone"
              required
              disabled={loading}
              value={formData.phoneNumber}
              onChange={(e) => {
                const raw = e.target.value
                const isOther = formData.phonePrefix === "+other"
                const filtered = isOther ? raw.replace(/[^\d+\s]/g, "").slice(0, 20) : raw.replace(/\D/g, "").slice(0, 15)
                setFormData({ ...formData, phoneNumber: filtered })
              }}
              className="flex-1 min-w-0 bg-background border border-primary/20 px-4 py-3 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors disabled:opacity-50"
              placeholder="412 345 678"
            />
          </div>
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
            {countryOptions.map((c) => (
              <option key={c.value} value={c.value}>{c.label}</option>
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
