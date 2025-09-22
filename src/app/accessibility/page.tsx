import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description: 'Accessibility statement for Dr. Noreen Mostafavi\'s practice website.',
}

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-bg">
      <section className="bg-white section-padding">
        <div className="container max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-ink mb-8">
            Accessibility Statement
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-2xl font-semibold text-ink mb-4">Our Commitment</h2>
            <p className="text-gray-700 mb-6">
              Dr. Noreen Mostafavi is committed to ensuring digital accessibility for people with 
              disabilities. We are continually improving the user experience for everyone and 
              applying the relevant accessibility standards.
            </p>

            <h2 className="text-2xl font-semibold text-ink mb-4">Conformance Status</h2>
            <p className="text-gray-700 mb-6">
              This website aims to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 
              level AA. These guidelines help make web content more accessible to people with 
              disabilities and user-friendly for everyone.
            </p>

            <h2 className="text-2xl font-semibold text-ink mb-4">Accessibility Features</h2>
            <ul className="text-gray-700 mb-6 space-y-2">
              <li>• Keyboard navigation support</li>
              <li>• Screen reader compatibility</li>
              <li>• High contrast color schemes</li>
              <li>• Alternative text for images</li>
              <li>• Semantic HTML structure</li>
              <li>• Focus indicators for interactive elements</li>
            </ul>

            <h2 className="text-2xl font-semibold text-ink mb-4">Feedback</h2>
            <p className="text-gray-700 mb-6">
              We welcome your feedback on the accessibility of our website. Please let us know 
              if you encounter accessibility barriers:
            </p>

            <div className="bg-accent-2 rounded-xl p-6">
              <p className="text-gray-700">
                <strong>Noreen Kamal-Mostafavi, MD PLLC</strong><br />
                3860 Victory Blvd, 1st Floor<br />
                Staten Island, NY 10314<br />
                Phone: (718) 400-4588<br />
                Email: info@noreenmostafavimd.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
