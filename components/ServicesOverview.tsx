import Link from 'next/link'
import { ArrowRight, Heart, Sparkles, Flower } from 'lucide-react'

const services = [
  {
    title: 'Gynecology',
    description: 'Comprehensive women\'s health care including routine exams, treatment of conditions, and preventive care.',
    icon: Heart,
    href: '/gynecology',
    color: 'text-rose-600',
    bgColor: 'bg-rose-50',
  },
  {
    title: 'Aesthetics',
    description: 'Advanced aesthetic treatments to help you look and feel your best with minimally invasive procedures.',
    icon: Sparkles,
    href: '/aesthetics',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    title: 'Cosmetic Gynecology',
    description: 'Specialized procedures to enhance comfort, confidence, and intimate wellness for women.',
    icon: Flower,
    href: '/cosmetic-gyn',
    color: 'text-primary-600',
    bgColor: 'bg-primary-50',
  },
]

export default function ServicesOverview() {
  return (
    <section className="section-spacing bg-neutral-50">
      <div className="mx-auto max-w-7xl container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Comprehensive Care for Every Stage of Life
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            From routine gynecological care to advanced aesthetic treatments, we provide personalized solutions for your health and wellness needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <div
                key={service.title}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 group"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${service.bgColor} mb-6`}>
                  <IconComponent className={`h-6 w-6 ${service.color}`} />
                </div>
                
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <Link
                  href={service.href}
                  className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200 group-hover:gap-2 gap-1"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}