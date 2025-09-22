import { Award, Clock, Heart, Shield } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: 'Board-Certified Expertise',
    description: 'Dr. Mostafavi is board-certified with extensive training in gynecology and aesthetic medicine.',
  },
  {
    icon: Heart,
    title: 'Personalized Care',
    description: 'Every treatment plan is tailored to your unique needs, goals, and comfort level.',
  },
  {
    icon: Shield,
    title: 'Minimally Invasive',
    description: 'Advanced techniques that minimize discomfort and recovery time while maximizing results.',
  },
  {
    icon: Clock,
    title: 'Convenient Scheduling',
    description: 'Flexible appointment times that work with your busy schedule, including evening hours.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section-spacing">
      <div className="mx-auto max-w-7xl container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Why Choose Dr. Mostafavi?
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Experience the difference of compassionate, expert care in a comfortable, modern setting.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon
            return (
              <div key={feature.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
                  <IconComponent className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}