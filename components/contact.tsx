'use client'

import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

const inputClass =
  'w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20'
const labelClass = 'mb-1.5 block text-sm font-medium text-foreground'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    setSubmitting(true)
    try {
      await fetch('https://formsubmit.co/ajax/info@agileservices.us', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })
      setSubmitted(true)
      form.reset()
    } catch {
      // Fall back to native submission if the AJAX endpoint is unreachable.
      form.removeEventListener('submit', () => {})
      form.submit()
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-primary md:text-4xl">
            Let&apos;s Build Together
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Tell us about your project. We respond within 24 hours.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-lg border border-border bg-card p-8 shadow-sm md:p-10">
          {submitted ? (
            <div className="flex flex-col items-center gap-4 py-12 text-center">
              <CheckCircle2 className="size-12 text-accent" />
              <p className="max-w-md text-lg leading-relaxed text-foreground">
                Thank you. We&apos;ve received your request and will respond
                within 24 hours.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-primary">
                  Request a Proposal
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  Share your project details and we&apos;ll follow up to discuss
                  scope, schedule, and approach.
                </p>
              </div>

              <form
                action="https://formsubmit.co/info@agileservices.us"
                method="POST"
                onSubmit={handleSubmit}
                className="grid gap-5 sm:grid-cols-2"
              >
                <input
                  type="hidden"
                  name="_subject"
                  value="New Proposal Request - Agile Svcs"
                />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div>
                  <label htmlFor="fullName" className={labelClass}>
                    Full Name <span className="text-accent">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="Full Name"
                    type="text"
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="company" className={labelClass}>
                    Company / Organization <span className="text-accent">*</span>
                  </label>
                  <input
                    id="company"
                    name="Company / Organization"
                    type="text"
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="title" className={labelClass}>
                    Title / Role
                  </label>
                  <input
                    id="title"
                    name="Title / Role"
                    type="text"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email <span className="text-accent">*</span>
                  </label>
                  <input
                    id="email"
                    name="Email"
                    type="email"
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone <span className="text-accent">*</span>
                  </label>
                  <input
                    id="phone"
                    name="Phone"
                    type="tel"
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="location" className={labelClass}>
                    Project Location — City, State{' '}
                    <span className="text-accent">*</span>
                  </label>
                  <input
                    id="location"
                    name="Project Location"
                    type="text"
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className={labelClass}>
                    Project Type <span className="text-accent">*</span>
                  </label>
                  <select
                    id="projectType"
                    name="Project Type"
                    required
                    defaultValue=""
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Select…
                    </option>
                    <option>Office</option>
                    <option>Healthcare</option>
                    <option>Hospitality</option>
                    <option>Multifamily</option>
                    <option>Data Center</option>
                    <option>Industrial</option>
                    <option>Mixed-Use</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="projectSize" className={labelClass}>
                    Estimated Project Size <span className="text-accent">*</span>
                  </label>
                  <select
                    id="projectSize"
                    name="Estimated Project Size"
                    required
                    defaultValue=""
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Select…
                    </option>
                    <option>Under $5M</option>
                    <option>$5M-$15M</option>
                    <option>$15M-$50M</option>
                    <option>$50M+</option>
                    <option>Not yet defined</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="projectStage" className={labelClass}>
                    Project Stage <span className="text-accent">*</span>
                  </label>
                  <select
                    id="projectStage"
                    name="Project Stage"
                    required
                    defaultValue=""
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Select…
                    </option>
                    <option>Concept</option>
                    <option>Design</option>
                    <option>Bidding</option>
                    <option>Ready to Mobilize</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="details" className={labelClass}>
                    Project Details <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="details"
                    name="Project Details"
                    required
                    rows={4}
                    placeholder="Scope, timeline, and key requirements"
                    className={inputClass}
                  />
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full rounded-lg bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
                  >
                    {submitting ? 'Sending…' : 'Request Proposal'}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
