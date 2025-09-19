# 🌐 SEO Strategy

## SEO Implementation (SPA)

Each `<Service />` subcomponent injects SEO tags via `<Helmet>`:

- `<title>`, `<meta description>`, structured data
- Supports OpenGraph + Twitter meta for shareability
- If needed later → migrate to SSR (Next.js) for stronger SEO

## Meta Tags Structure

### Page-Level SEO

```html
<title>
  Dr. Noreen Mastafavi - Gynecology & Aesthetic Specialist | [Location]
</title>
<meta
  name="description"
  content="Expert gynecology and aesthetic services by Dr. Noreen Mastafavi. Specializing in women's health, cosmetic procedures, and personalized care."
/>
<meta
  name="keywords"
  content="gynecology, aesthetic medicine, women's health, cosmetic procedures, [location]"
/>
```

### OpenGraph Tags

```html
<meta
  property="og:title"
  content="Dr. Noreen Mastafavi - Gynecology & Aesthetic Specialist"
/>
<meta
  property="og:description"
  content="Expert gynecology and aesthetic services..."
/>
<meta property="og:image" content="/images/og-image.jpg" />
<meta property="og:url" content="https://drmastafavi.com" />
<meta property="og:type" content="website" />
```

### Twitter Cards

```html
<meta name="twitter:card" content="summary_large_image" />
<meta
  name="twitter:title"
  content="Dr. Noreen Mastafavi - Gynecology & Aesthetic Specialist"
/>
<meta
  name="twitter:description"
  content="Expert gynecology and aesthetic services..."
/>
<meta name="twitter:image" content="/images/twitter-card.jpg" />
```

## Structured Data

### Medical Practice Schema

```json
{
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Dr. Noreen Mastafavi - Gynecology & Aesthetic Specialist",
  "description": "Expert gynecology and aesthetic services",
  "url": "https://drmastafavi.com",
  "telephone": "+1-XXX-XXX-XXXX",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main Street",
    "addressLocality": "City",
    "addressRegion": "State",
    "postalCode": "12345",
    "addressCountry": "US"
  },
  "openingHours": "Mo-Fr 09:00-17:00",
  "medicalSpecialty": ["Gynecology", "Aesthetic Medicine"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Medical Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalProcedure",
          "name": "Gynecological Consultation"
        }
      }
    ]
  }
}
```

### Doctor Profile Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Dr. Noreen Mastafavi",
  "jobTitle": "Gynecologist and Aesthetic Specialist",
  "description": "Board-certified gynecologist specializing in women's health and aesthetic procedures",
  "url": "https://drmastafavi.com/about",
  "image": "https://drmastafavi.com/images/dr-mastafavi.jpg",
  "sameAs": [
    "https://linkedin.com/in/dr-mastafavi",
    "https://twitter.com/dr_mastafavi"
  ],
  "alumniOf": "Medical School Name",
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "name": "Board Certification in Gynecology"
    }
  ]
}
```

## Content Strategy

### Target Keywords

- **Primary:** "gynecologist [location]", "aesthetic medicine [location]"
- **Secondary:** "women's health specialist", "cosmetic gynecology"
- **Long-tail:** "best gynecologist near me", "aesthetic procedures [location]"

### Content Optimization

- **Service Pages:** Detailed descriptions of each service
- **Location Pages:** Location-specific content and local keywords
- **FAQ Section:** Answer common patient questions
- **Blog Content:** Regular health and beauty articles

### Technical SEO

#### URL Structure

- Clean, descriptive URLs: `/services/gynecology`, `/about/dr-mastafavi`
- Consistent URL patterns across the site
- Proper redirects for moved content

#### Site Performance

- **Core Web Vitals:** LCP < 2.5s, FID < 100ms, CLS < 0.1
- **Page Speed:** Optimize images, minify CSS/JS
- **Mobile-First:** Responsive design, mobile-friendly

#### XML Sitemap

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://drmastafavi.com/</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://drmastafavi.com/services</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

## Local SEO

### Google My Business

- Complete business profile with accurate information
- Regular posts and updates
- Patient reviews and responses
- High-quality photos of the practice

### Local Citations

- Consistent NAP (Name, Address, Phone) across all platforms
- Local directory listings
- Medical directory submissions
- Insurance provider directories

### Review Management

- Encourage patient reviews on Google, Healthgrades, Vitals
- Respond to all reviews professionally
- Monitor review platforms regularly
- Address negative feedback constructively

## Analytics & Monitoring

### Key Metrics

- **Organic Traffic:** Monthly organic search traffic
- **Keyword Rankings:** Position for target keywords
- **Click-Through Rate:** CTR from search results
- **Conversion Rate:** Appointments booked from organic traffic

### Tools

- **Google Search Console:** Search performance monitoring
- **Google Analytics:** Traffic and user behavior analysis
- **SEMrush/Ahrefs:** Keyword tracking and competitor analysis
- **Screaming Frog:** Technical SEO auditing
