'use client'

import React, { useState } from 'react'
import { useForm, useFieldArray } from 'react-hook-form'
import { AlertCircle, Plus, Trash2, Send } from 'lucide-react'

interface SubmissionFormData {
  filmTitle: string
  originalLanguage: string
  englishSubtitles: string
  countryOfProduction: string
  yearOfCompletion: string
  filmDuration: number
  category: string
  genres: string
  actors: Array<{
    fullName: string
    role: string
    other: string
    photoLink: string
    biography: string
  }>
  directors: Array<{
    fullName: string
    role: string
    photoLink: string
    biography: string
  }>
  producers: Array<{
    fullName: string
    role: string
    photoLink: string
    biography: string
  }>
  crew: Array<{
    fullName: string
    department: string
    biography: string
  }>
  email: string
  rightsConfirmation: boolean
  contentCleared: boolean
  termsAgreement: boolean
}

export default function SubmissionsForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [submitError, setSubmitError] = useState('')

  const { register, control, handleSubmit, formState: { errors } } = useForm<SubmissionFormData>({
    defaultValues: {
      actors: [{ fullName: '', role: '', other: '', photoLink: '', biography: '' }],
      directors: [{ fullName: '', role: '', photoLink: '', biography: '' }],
      producers: [{ fullName: '', role: '', photoLink: '', biography: '' }],
      crew: [{ fullName: '', department: '', biography: '' }],
    },
  })

  const { fields: actorFields, append: appendActor, remove: removeActor } = useFieldArray({ control, name: 'actors' })
  const { fields: directorFields, append: appendDirector, remove: removeDirector } = useFieldArray({ control, name: 'directors' })
  const { fields: producerFields, append: appendProducer, remove: removeProducer } = useFieldArray({ control, name: 'producers' })
  const { fields: crewFields, append: appendCrew, remove: removeCrew } = useFieldArray({ control, name: 'crew' })

  const onSubmit = async (data: SubmissionFormData) => {
    if (!data.rightsConfirmation || !data.contentCleared || !data.termsAgreement) {
      setSubmitError('Please confirm all required agreements')
      return
    }

    setIsSubmitting(true)
    setSubmitError('')
    setSubmitMessage('')

    try {
      const response = await fetch('/api/submit-film', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Failed to submit form')
      }

      setSubmitMessage('✓ Your submission has been received!')
      setTimeout(() => setSubmitMessage(''), 5000)
    } catch (error) {
      setSubmitError(`✗ ${error instanceof Error ? error.message : 'Submission failed'}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-background py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 lg:p-12">
          <p className="text-center text-champagne/70 mb-8">Online Submission Form</p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Film Details */}
            <section className="border-b border-champagne/10 pb-8">
              <h2 className="text-primary font-bold text-lg uppercase tracking-wider mb-6">Film Submission Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-champagne mb-2">
                    Film Title <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    {...register('filmTitle', { required: 'Film title is required' })}
                    className="w-full px-4 py-3 bg-white/10 border border-champagne/20 rounded-lg text-champagne placeholder-champagne/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="Enter film title"
                  />
                  {errors.filmTitle && <p className="text-red-400 text-xs mt-1">{errors.filmTitle.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-champagne mb-2">
                    Original Language(s) <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    {...register('originalLanguage', { required: 'Language is required' })}
                    className="w-full px-4 py-3 bg-white/10 border border-champagne/20 rounded-lg text-champagne placeholder-champagne/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="e.g., Arabic, English"
                  />
                  {errors.originalLanguage && <p className="text-red-400 text-xs mt-1">{errors.originalLanguage.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-champagne mb-2">English Subtitles</label>
                  <select
                    {...register('englishSubtitles')}
                    className="w-full px-4 py-3 bg-white/10 border border-champagne/20 rounded-lg text-champagne focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  >
                    <option value="">Select...</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-champagne mb-2">Country of Production</label>
                  <input
                    type="text"
                    {...register('countryOfProduction')}
                    className="w-full px-4 py-3 bg-white/10 border border-champagne/20 rounded-lg text-champagne placeholder-champagne/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="e.g., Oman, UAE"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-champagne mb-2">Year of Completion</label>
                  <select
                    {...register('yearOfCompletion')}
                    className="w-full px-4 py-3 bg-white/10 border border-champagne/20 rounded-lg text-champagne focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  >
                    <option value="">Select year</option>
                    {Array.from({ length: 77 }, (_, i) => 2026 - i).map((year) => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-champagne mb-2">
                    Film Duration (minutes) <span className="text-primary">*</span>
                  </label>
                  <input
                    type="number"
                    {...register('filmDuration', { required: 'Duration is required', min: 1 })}
                    className="w-full px-4 py-3 bg-white/10 border border-champagne/20 rounded-lg text-champagne placeholder-champagne/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="e.g., 120"
                  />
                  {errors.filmDuration && <p className="text-red-400 text-xs mt-1">{errors.filmDuration.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-champagne mb-2">
                    Film Category <span className="text-primary">*</span>
                  </label>
                  <select
                    {...register('category', { required: 'Category is required' })}
                    className="w-full px-4 py-3 bg-white/10 border border-champagne/20 rounded-lg text-champagne focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  >
                    <option value="">Select a category</option>
                    <option value="feature">Feature Film</option>
                    <option value="short">Short Film</option>
                    <option value="documentary">Documentary</option>
                    <option value="animation">Animation</option>
                    <option value="student">Student Film</option>
                    <option value="webseries">Web Series</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.category && <p className="text-red-400 text-xs mt-1">{errors.category.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-champagne mb-2">Genre(s)</label>
                  <input
                    type="text"
                    {...register('genres')}
                    className="w-full px-4 py-3 bg-white/10 border border-champagne/20 rounded-lg text-champagne placeholder-champagne/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="e.g., Drama, Comedy, Thriller"
                  />
                </div>
              </div>
            </section>

            {/* Actors */}
            <section className="border-b border-champagne/10 pb-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-primary font-bold text-lg uppercase tracking-wider">Actors (Lead & Supporting)</h3>
                <button
                  type="button"
                  onClick={() => appendActor({ fullName: '', role: '', other: '', photoLink: '', biography: '' })}
                  className="text-primary text-sm font-medium hover:text-champagne transition-colors flex items-center gap-1"
                >
                  <Plus className="w-4 h-4" /> Add Actor
                </button>
              </div>
              {actorFields.map((field, index) => (
                <div key={field.id} className="bg-eerie-black/30 rounded-lg p-6 mb-4 border border-champagne/10">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-champagne font-medium">Actor {index + 1}</h4>
                    {actorFields.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeActor(index)}
                        className="text-red-400 hover:text-red-300 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-champagne mb-2">
                        Full Name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        {...register(`actors.${index}.fullName`, { required: 'Name is required' })}
                        className="w-full px-4 py-2 bg-white/10 border border-champagne/20 rounded-lg text-champagne placeholder-champagne/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-champagne mb-2">Role</label>
                      <select
                        {...register(`actors.${index}.role`)}
                        className="w-full px-4 py-2 bg-white/10 border border-champagne/20 rounded-lg text-champagne focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                      >
                        <option value="">Select role</option>
                        <option value="lead-actor">Actor in a leading role</option>
                        <option value="lead-actress">Actress in a leading role</option>
                        <option value="supporting-actor">Actor in a supporting role</option>
                        <option value="supporting-actress">Actress in a supporting role</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-champagne mb-2">Photo Link</label>
                      <input
                        type="text"
                        {...register(`actors.${index}.photoLink`)}
                        className="w-full px-4 py-2 bg-white/10 border border-champagne/20 rounded-lg text-champagne placeholder-champagne/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                        placeholder="Enter photo URL"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-champagne mb-2">
                        Short Biography <span className="text-primary">*</span>
                      </label>
                      <textarea
                        rows={3}
                        {...register(`actors.${index}.biography`, { required: 'Biography is required' })}
                        className="w-full px-4 py-2 bg-white/10 border border-champagne/20 rounded-lg text-champagne placeholder-champagne/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors resize-none"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </section>

            {/* Directors */}
            <section className="border-b border-champagne/10 pb-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-primary font-bold text-lg uppercase tracking-wider">Director(s)</h3>
                <button
                  type="button"
                  onClick={() => appendDirector({ fullName: '', role: '', photoLink: '', biography: '' })}
                  className="text-primary text-sm font-medium hover:text-champagne transition-colors flex items-center gap-1"
                >
                  <Plus className="w-4 h-4" /> Add Director
                </button>
              </div>
              {directorFields.map((field, index) => (
                <div key={field.id} className="bg-eerie-black/30 rounded-lg p-6 mb-4 border border-champagne/10">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-champagne font-medium">Director {index + 1}</h4>
                    {directorFields.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeDirector(index)}
                        className="text-red-400 hover:text-red-300 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-champagne mb-2">
                        Full Name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        {...register(`directors.${index}.fullName`, { required: 'Name is required' })}
                        className="w-full px-4 py-2 bg-white/10 border border-champagne/20 rounded-lg text-champagne placeholder-champagne/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-champagne mb-2">Role</label>
                      <select
                        {...register(`directors.${index}.role`)}
                        className="w-full px-4 py-2 bg-white/10 border border-champagne/20 rounded-lg text-champagne focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                      >
                        <option value="">Select role</option>
                        <option value="director">Director</option>
                        <option value="co-director">Co-Director</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-champagne mb-2">Photo Link</label>
                      <input
                        type="text"
                        {...register(`directors.${index}.photoLink`)}
                        className="w-full px-4 py-2 bg-white/10 border border-champagne/20 rounded-lg text-champagne placeholder-champagne/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                        placeholder="Enter photo URL"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-champagne mb-2">
                        Short Biography <span className="text-primary">*</span>
                      </label>
                      <textarea
                        rows={3}
                        {...register(`directors.${index}.biography`, { required: 'Biography is required' })}
                        className="w-full px-4 py-2 bg-white/10 border border-champagne/20 rounded-lg text-champagne placeholder-champagne/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors resize-none"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </section>

            {/* Producers */}
            <section className="border-b border-champagne/10 pb-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-primary font-bold text-lg uppercase tracking-wider">Producer(s)</h3>
                <button
                  type="button"
                  onClick={() => appendProducer({ fullName: '', role: '', photoLink: '', biography: '' })}
                  className="text-primary text-sm font-medium hover:text-champagne transition-colors flex items-center gap-1"
                >
                  <Plus className="w-4 h-4" /> Add Producer
                </button>
              </div>
              {producerFields.map((field, index) => (
                <div key={field.id} className="bg-eerie-black/30 rounded-lg p-6 mb-4 border border-champagne/10">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-champagne font-medium">Producer {index + 1}</h4>
                    {producerFields.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeProducer(index)}
                        className="text-red-400 hover:text-red-300 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-champagne mb-2">
                        Full Name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        {...register(`producers.${index}.fullName`, { required: 'Name is required' })}
                        className="w-full px-4 py-2 bg-white/10 border border-champagne/20 rounded-lg text-champagne placeholder-champagne/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-champagne mb-2">Role</label>
                      <select
                        {...register(`producers.${index}.role`)}
                        className="w-full px-4 py-2 bg-white/10 border border-champagne/20 rounded-lg text-champagne focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                      >
                        <option value="">Select role</option>
                        <option value="producer">Producer</option>
                        <option value="executive">Executive Producer</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-champagne mb-2">Photo Link (optional)</label>
                      <input
                        type="text"
                        {...register(`producers.${index}.photoLink`)}
                        className="w-full px-4 py-2 bg-white/10 border border-champagne/20 rounded-lg text-champagne placeholder-champagne/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                        placeholder="Enter photo URL"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-champagne mb-2">
                        Short Biography <span className="text-primary">*</span>
                      </label>
                      <textarea
                        rows={3}
                        {...register(`producers.${index}.biography`, { required: 'Biography is required' })}
                        className="w-full px-4 py-2 bg-white/10 border border-champagne/20 rounded-lg text-champagne placeholder-champagne/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors resize-none"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </section>

            {/* Crew */}
            <section className="border-b border-champagne/10 pb-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-primary font-bold text-lg uppercase tracking-wider">Crew (Writer, DOP, Editor, Music, etc.)</h3>
                <button
                  type="button"
                  onClick={() => appendCrew({ fullName: '', department: '', biography: '' })}
                  className="text-primary text-sm font-medium hover:text-champagne transition-colors flex items-center gap-1"
                >
                  <Plus className="w-4 h-4" /> Add Crew
                </button>
              </div>
              {crewFields.map((field, index) => (
                <div key={field.id} className="bg-eerie-black/30 rounded-lg p-6 mb-4 border border-champagne/10">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-champagne font-medium">Crew Member {index + 1}</h4>
                    {crewFields.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeCrew(index)}
                        className="text-red-400 hover:text-red-300 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-champagne mb-2">
                        Full Name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        {...register(`crew.${index}.fullName`, { required: 'Name is required' })}
                        className="w-full px-4 py-2 bg-white/10 border border-champagne/20 rounded-lg text-champagne placeholder-champagne/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-champagne mb-2">
                        Department / Role <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        {...register(`crew.${index}.department`, { required: 'Department is required' })}
                        className="w-full px-4 py-2 bg-white/10 border border-champagne/20 rounded-lg text-champagne placeholder-champagne/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                        placeholder="e.g., Writer, DOP, Editor, Music"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-champagne mb-2">
                        Short Biography <span className="text-primary">*</span>
                      </label>
                      <textarea
                        rows={3}
                        {...register(`crew.${index}.biography`, { required: 'Biography is required' })}
                        className="w-full px-4 py-2 bg-white/10 border border-champagne/20 rounded-lg text-champagne placeholder-champagne/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors resize-none"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </section>

            {/* Contact & Agreements */}
            <section>
              <div className="mb-6">
                <label className="block text-sm font-medium text-champagne mb-2">
                  Contact Email <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' }
                  })}
                  className="w-full px-4 py-3 bg-white/10 border border-champagne/20 rounded-lg text-champagne placeholder-champagne/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
              </div>

              <div className="space-y-4 mb-8">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    {...register('rightsConfirmation', { required: 'This confirmation is required' })}
                    className="w-5 h-5 mt-0.5 rounded border-champagne/30 bg-white/10 text-primary focus:ring-2 focus:ring-primary/50 cursor-pointer"
                  />
                  <span className="text-sm text-champagne">
                    I confirm I have rights to submit this film at the Arab International Film Festival of Australia. <span className="text-primary">*</span>
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    {...register('contentCleared', { required: 'This confirmation is required' })}
                    className="w-5 h-5 mt-0.5 rounded border-champagne/30 bg-white/10 text-primary focus:ring-2 focus:ring-primary/50 cursor-pointer"
                  />
                  <span className="text-sm text-champagne">
                    I confirm all music and content in the film has been cleared and are used with full permission. <span className="text-primary">*</span>
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    {...register('termsAgreement', { required: 'This agreement is required' })}
                    className="w-5 h-5 mt-0.5 rounded border-champagne/30 bg-white/10 text-primary focus:ring-2 focus:ring-primary/50 cursor-pointer"
                  />
                  <span className="text-sm text-champagne">
                    I agree to the Festival terms for screening, promotion, and submission rights. <span className="text-primary">*</span>
                  </span>
                </label>
              </div>

              {submitMessage && (
                <div className="mb-6 p-4 bg-green-400/10 border border-green-400/30 rounded-lg text-green-400 text-sm flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  {submitMessage}
                </div>
              )}

              {submitError && (
                <div className="mb-6 p-4 bg-red-400/10 border border-red-400/30 rounded-lg text-red-400 text-sm flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  {submitError}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/50 disabled:cursor-not-allowed text-eerie-black font-semibold py-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-lg"
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? 'Submitting...' : 'Submit Film'}
              </button>
            </section>
          </form>
        </div>
      </div>
    </main>
  )
}