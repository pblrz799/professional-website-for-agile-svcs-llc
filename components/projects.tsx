import { MapPin } from 'lucide-react'

const projects = [
  { type: 'Class A Office Tower — Interior Buildout', scope: '180,000 sqft', location: 'Charlotte, NC' },
  { type: 'Multifamily Class A Residential', scope: '300 units', location: 'Nashville, TN' },
  { type: 'Data Center — Tier III', scope: '24 MW critical load', location: 'Phoenix, AZ' },
  { type: 'Full-Service Hospitality Resort', scope: '250 keys', location: 'Tampa, FL' },
  { type: 'Acute Care Hospital Expansion', scope: '95,000 sqft', location: 'Dallas, TX' },
  { type: 'Higher Education STEM Facility', scope: '140,000 sqft', location: 'Columbus, OH' },
  { type: 'Industrial Distribution Center', scope: '1.2M sqft', location: 'Joliet, IL' },
  { type: 'Mixed-Use Retail & Residential', scope: '425,000 sqft', location: 'Denver, CO' },
  { type: 'Senior Living / Assisted Living', scope: '165 units', location: 'Atlanta, GA' },
  { type: 'Light Manufacturing / Food Production', scope: '220,000 sqft', location: 'Greenville, SC' },
  { type: 'Corporate HQ Tenant Improvement', scope: '75,000 sqft', location: 'Austin, TX' },
  { type: 'Healthcare Medical Office Building', scope: '110,000 sqft', location: 'Minneapolis, MN' },
]

export function Projects() {
  return (
    <section id="projects" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-primary md:text-4xl">
            Selected Projects
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Representative work across the sectors we serve. Project details
            available on request, subject to client confidentiality.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <div
              key={i}
              className="flex flex-col justify-between rounded-lg border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div>
                <h3 className="text-lg font-semibold leading-snug text-primary">
                  {project.type}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {project.scope}
                </p>
              </div>
              <div className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
                <MapPin className="size-3.5" />
                {project.location}
              </div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-xs leading-relaxed text-muted-foreground">
          Project locations and types reflect sectors and markets we serve.
          Specific client and project identification withheld pursuant to
          contractual confidentiality. References available upon qualification.
        </p>
      </div>
    </section>
  )
}
