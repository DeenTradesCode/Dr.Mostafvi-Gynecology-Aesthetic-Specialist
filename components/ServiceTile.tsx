import Link from 'next/link'
import { Service } from '@/data/services'

interface ServiceTileProps {
  service: Service
}

export default function ServiceTile({ service }: ServiceTileProps) {
  return (
    <Link
      href={service.slug}
      className="group block bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 hover:border-accent-2"
    >
      <h3 className="text-xl font-semibold text-ink mb-3 group-hover:text-accent transition-colors">
        {service.name}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {service.summary}
      </p>
      <div className="flex items-center text-accent text-sm font-medium group-hover:text-accent/80 transition-colors">
        Learn more
        <svg
          className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </Link>
  )
}
