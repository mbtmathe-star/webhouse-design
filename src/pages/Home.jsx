import Hero from '../components/sections/Hero'
import AboutSection from '../components/sections/AboutSection'
import ServicesSection from '../components/sections/ServicesSection'
import NotSureSection from '../components/sections/NotSureSection'
import ProcessSection from '../components/sections/ProcessSection'
import TrustSection from '../components/sections/TrustSection'
import ClientJourneyPreview from '../components/sections/ClientJourneyPreview'
import WorkSection from '../components/sections/WorkSection'

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <NotSureSection />
      <ProcessSection />
      <TrustSection />
      <ClientJourneyPreview />
      <WorkSection />
    </>
  )
}
