import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah M.',
    text: 'Dr. Mostafavi made me feel comfortable and heard. Her expertise and caring approach exceeded my expectations.',
    rating: 5,
  },
  {
    name: 'Jennifer L.',
    text: 'Professional, knowledgeable, and compassionate. I finally found a doctor who truly listens and cares.',
    rating: 5,
  },
  {
    name: 'Maria R.',
    text: 'The entire experience was excellent. From booking to follow-up, everything was handled with care and professionalism.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="section-spacing bg-neutral-50">
      <div className="mx-auto max-w-7xl container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-neutral-600">
            Real experiences from women who trust us with their health and wellness.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="text-neutral-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </blockquote>
              <cite className="font-medium text-neutral-900">
                {testimonial.name}
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}