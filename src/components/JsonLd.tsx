import { siteConfig } from "@/lib/data";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "#coach",
        name: siteConfig.coach,
        jobTitle: "Online Fitness Coach",
        email: siteConfig.email,
        telephone: siteConfig.phone,
        url: "https://skfitness-ashen.vercel.app",
        worksFor: { "@id": "#business" },
      },
      {
        "@type": "HealthAndBeautyBusiness",
        "@id": "#business",
        name: siteConfig.name,
        description: siteConfig.description,
        url: "https://skfitness-ashen.vercel.app",
        email: siteConfig.email,
        telephone: siteConfig.phone,
        priceRange: "₹₹",
        areaServed: "IN",
        founder: { "@id": "#coach" },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
