import { Award, CalendarClock, Scale } from 'lucide-react'

const reasons = [
  {
    icon: Award,
    title: 'Class A Delivery Standard',
    body: 'We build to the finish quality and detail that institutional owners require. Punch lists closed. Commissioning complete. Buildings ready to operate from day one.',
  },
  {
    icon: CalendarClock,
    title: 'Schedule Discipline',
    body: 'Commercial construction lives and dies by schedule. Our project teams manage critical path with weekly look-aheads, daily field coordination, and proactive subcontractor management. We hit substantial completion dates.',
  },
  {
    icon: Scale,
    title: 'Owner-Aligned Decision Making',
    body: 'We work for the owner’s interests, not against them. Transparent pricing, open-book change orders when contracted, and constructive value engineering. The kind of contractor relationships that repeat.',
  },
]

export function WhyAgile() {
  return (
    <section className="bg-primary py-20 text-primary-foreground md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          Why Owners Choose Agile
        </h2>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.title}>
              <div className="flex size-12 items-center justify-center rounded-lg bg-accent/20 text-accent">
                <reason.icon className="size-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{reason.title}</h3>
              <p className="mt-3 leading-relaxed text-primary-foreground/75">
                {reason.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
