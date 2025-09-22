import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { aestheticsServices } from '@/data/services'
import { generateServiceJsonLd } from '@/lib/structured-data'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return aestheticsServices.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = aestheticsServices.find(s => s.slug === params.slug)
  
  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }

  return {
    title: service.name,
    description: service.description,
    keywords: [service.name.toLowerCase(), 'aesthetics', 'cosmetic treatments', 'Staten Island'],
  }
}

export default function AestheticsServicePage({ params }: Props) {
  const service = aestheticsServices.find(s => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  const jsonLd = generateServiceJsonLd(service.name, service.description)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicePageTemplate
        title={service.name}
        description={service.description}
        whatItHelps={service.whatItHelps}
        howItWorks={service.howItWorks}
        visitTime={service.visitTime}
      />
    </>
  )
}