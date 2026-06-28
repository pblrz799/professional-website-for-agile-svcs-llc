import { Building2, ClipboardCheck, LayoutPanelTop, HandshakeIcon } from 'lucide-react'

const services = [
  {
    icon: Building2,
    title: 'General Contracting',
    body: 'End-to-end project delivery for commercial and light industrial owners. We manage subcontractors, schedule, safety, and quality from mobilization to substantial completion. Single point of accountability for the entire build.',
  },
  {
    icon: ClipboardCheck,
    title: 'Preconstruction Services',
    body: 'Cost estimating, value engineering, constructability review, and schedule modeling during design. We catch problems on paper before they cost real money in the field.',
  },
  {
    icon: LayoutPanelTop,
    title: 'Tenant Improvements & Interior Buildouts',
    body: 'Class A office, healthcare, hospitality, and retail interior fitouts. Fast-track delivery models for occupied buildings and tight commissioning windows.',
  },
  {
    icon: HandshakeIcon,
    title: "Project Management & Owner's Representation",
    body: "For owners who want construction expertise on their side of the table. Schedule oversight, cost control, and quality assurance through every phase.",
  },
]

export function Services() {
  return (
    <section id="services" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-primary md:text-4xl">
            General Contracting Services
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Full-scope commercial construction delivery, from preconstruction
            through final closeout.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-lg border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex size-12 items-center justify-center rounded-lg bg-primary/5 text-primary">
                <service.icon className="size-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-primary">
                {service.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {service.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
