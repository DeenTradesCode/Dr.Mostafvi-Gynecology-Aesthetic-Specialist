import Link from 'next/link'
import CTAButton from '@/components/CTAButton'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto px-4">
        <h1 className="text-6xl md:text-8xl font-serif font-bold text-accent mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-ink mb-6">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <CTAButton
            variant="primary"
            size="lg"
            href="/"
          >
            Go Home
          </CTAButton>
          <CTAButton
            variant="secondary"
            size="lg"
            href="/contact"
          >
            Contact Us
          </CTAButton>
        </div>
      </div>
    </div>
  )
}
