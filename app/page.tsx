import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Sectors } from '@/components/sectors'
import { Projects } from '@/components/projects'
import { WhyAgile } from '@/components/why-agile'
import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Sectors />
        <Projects />
        <WhyAgile />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
