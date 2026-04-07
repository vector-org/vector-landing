export default function StructuredData() {
  const applicationData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "VECTOR",
    applicationCategory: "GameApplication",
    operatingSystem: "Windows, macOS, Linux",
    description:
      "VECTOR brings true ownership to gaming. Fair fees, no gatekeepers. Built for gamers and devs.",
    url: "https://playonvector.com",
    author: {
      "@type": "Organization",
      name: "Vector Team",
      url: "https://playonvector.com"
    },
    offers: {
      "@type": "Offer",
      price: 0
    }
  }

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Vector",
    url: "https://playonvector.com",
    logo: "https://playonvector.com/logo.svg",
    sameAs: ["https://x.com/playonvector"],
    description:
      "Gaming platform bringing true ownership to gamers and developers",
    foundingDate: "2024"
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(applicationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
    </>
  )
}

