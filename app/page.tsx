import HeroVideo from '@/components/HeroVideo'
import ServicesOverview from '@/components/ServicesOverview'
import WhyChooseUs from '@/components/WhyChooseUs'
import Testimonials from '@/components/Testimonials'
import ContactCTA from '@/components/ContactCTA'
import { generateMedicalClinicJsonLd } from '@/lib/structured-data'

export default function Home() {
  const jsonLd = generateMedicalClinicJsonLd()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroVideo />
      <ServicesOverview />
      <WhyChooseUs />
      <Testimonials />
      <ContactCTA />
    </>
  )
}