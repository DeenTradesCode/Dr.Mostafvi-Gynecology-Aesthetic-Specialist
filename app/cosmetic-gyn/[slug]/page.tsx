import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { cosmeticGynServices } from '@/data/services'
import { generateServiceJsonLd } from '@/lib/structured-data'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return cosmeticGynServices.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = cosmeticGynServices.find(s => s.slug === slug)
  
  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }

  return {
    title: service.name,
    description: service.description,
    keywords: [service.name.toLowerCase(), 'cosmetic gynecology', 'intimate surgery', 'Staten Island'],
  }
}

export default async function CosmeticGynServicePage({ params }: Props) {
  const { slug } = await params
  const service = cosmeticGynServices.find(s => s.slug === slug)

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
        {...(service.visitTime && { visitTime: service.visitTime })}
      />
    </>
  )
}