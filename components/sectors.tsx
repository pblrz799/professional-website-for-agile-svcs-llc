import {
  Building,
  HeartPulse,
  Hotel,
  Home,
  Server,
  Factory,
} from 'lucide-react'

const sectors = [
  {
    icon: Building,
    name: 'Office & Corporate',
    desc: 'Class A office towers, tenant improvements, corporate HQ buildouts.',
  },
  {
    icon: HeartPulse,
    name: 'Healthcare',
    desc: 'Hospital expansions, medical office buildings, ambulatory surgery centers.',
  },
  {
    icon: Hotel,
    name: 'Hospitality',
    desc: 'Full-service hotels, resort properties, conference and event venues.',
  },
  {
    icon: Home,
    name: 'Multifamily Residential',
    desc: 'Class A apartment communities, mixed-use residential, senior living.',
  },
  {
    icon: Server,
    name: 'Data Centers & Mission Critical',
    desc: 'Tier II/III data centers, switchgear rooms, mission-critical facilities.',
  },
  {
    icon: Factory,
    name: 'Light Industrial & Distribution',
    desc: 'Distribution centers, light manufacturing facilities, logistics hubs.',
  },
]

export function Sectors() {
  return (
    <section id="sectors" className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-primary md:text-4xl">
            Sectors We Build
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Specialized experience across the commercial verticals that demand
            Class A execution.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector) => (
            <div
              key={sector.name}
              className="rounded-lg border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex size-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <sector.icon className="size-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-primary">
                {sector.name}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {sector.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
