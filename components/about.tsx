import { Check } from 'lucide-react'

const commitments = ['The right schedule', 'The right cost', 'The right finish']

export function About() {
  return (
    <section id="about" className="bg-muted py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.4fr_1fr] lg:items-start">
        <div>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-primary md:text-4xl">
            About Agile Svcs
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Agile Svcs LLC was founded in 2020 to deliver commercial
              construction with the precision and discipline that institutional
              owners, developers, and corporate occupants require. We operate
              across the Southeastern United States with project capability
              extending nationwide.
            </p>
            <p>
              Our team brings decades of combined experience in general
              contracting, preconstruction, and project management across the
              most demanding commercial sectors — from Class A office and
              healthcare to data centers and hospitality. We are licensed,
              insured, and structured to deliver projects of meaningful scale.
            </p>
            <p>
              Every project we take on is built around three commitments: the
              right schedule, the right cost, and the right finish. The owners
              we work with come back because we deliver on all three.
            </p>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card p-8 shadow-sm">
          <h3 className="text-lg font-semibold text-primary">
            Our Three Commitments
          </h3>
          <ul className="mt-5 space-y-4">
            {commitments.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Check className="size-4" />
                </span>
                <span className="font-medium text-foreground">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 border-t border-border pt-6">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Headquartered in Miami, Florida. Licensed General Contractor
              serving the Southeastern United States with nationwide project
              capability.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
