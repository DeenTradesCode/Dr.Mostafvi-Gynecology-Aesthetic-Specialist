import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { services } from '@/data/services'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return services
    .filter(service => service.category === 'aesthetics')
    .map((service) => ({
      slug: service.id,
    }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const service = services.find(s => s.id === params.slug && s.category === 'aesthetics')
  
  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }

  return {
    title: service.name,
    description: service.description,
  }
}

export default function ServicePage({ params }: PageProps) {
  const service = services.find(s => s.id === params.slug && s.category === 'aesthetics')

  if (!service) {
    notFound()
  }

  return <ServicePageTemplate service={service} />
}
