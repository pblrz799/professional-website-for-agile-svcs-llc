import Image from 'next/image'

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <Image
        src="/hero-commercial-interior.png"
        alt="Class A commercial office interior at the finish stage of construction"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-background/80" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-40">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold tracking-wide text-accent">
            Commercial General Contractor · Since 2020
          </p>
          <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-primary sm:text-5xl md:text-6xl">
            Commercial Construction. Delivered with Precision.
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Agile Svcs is a general contractor specializing in commercial and
            light industrial projects across the Southeast. From Class A office
            buildouts to healthcare expansions, we deliver on schedule, on
            budget, and finished right.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Request a Proposal
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg border border-primary bg-background px-6 py-3 text-base font-medium text-primary transition-colors hover:bg-primary/5"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
