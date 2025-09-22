export function generateMedicalClinicJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Noreen Kamal-Mostafavi, MD PLLC",
    "description": "Expert OB/GYN & Aesthetics care in Staten Island. Personalized women's health, done right.",
    "url": "https://noreenmostafavimd.com",
    "telephone": "+17184004588",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3860 Victory Blvd, 1st Floor",
      "addressLocality": "Staten Island",
      "addressRegion": "NY",
      "postalCode": "10314",
      "addressCountry": "US"
    },
    "openingHours": [
      "Mo-Fr 10:00-18:00"
    ],
    "medicalSpecialty": ["Gynecology", "Obstetrics", "Aesthetic Medicine"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Medical Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Gynecological Care"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Aesthetic Treatments"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Cosmetic Gynecology"
          }
        }
      ]
    },
    "sameAs": [
      "https://www.instagram.com/drmostafavi",
      "https://www.facebook.com/drmostafavi"
    ]
  }
}

export function generatePhysicianJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dr. Noreen Kamal-Mostafavi",
    "jobTitle": "Gynecologist and Aesthetic Specialist",
    "description": "Board-certified gynecologist specializing in women's health and aesthetic procedures",
    "url": "https://noreenmostafavimd.com",
    "worksFor": {
      "@type": "MedicalBusiness",
      "name": "Noreen Kamal-Mostafavi, MD PLLC"
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Board Certification in Gynecology"
      }
    ]
  }
}

export function generateServiceJsonLd(serviceName: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "MedicalBusiness",
      "name": "Noreen Kamal-Mostafavi, MD PLLC",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3860 Victory Blvd, 1st Floor",
        "addressLocality": "Staten Island",
        "addressRegion": "NY",
        "postalCode": "10314",
        "addressCountry": "US"
      }
    }
  }
}

export function generateFAQJsonLd(faqs: Array<{question: string, answer: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
}