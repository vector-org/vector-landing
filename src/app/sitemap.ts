import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://playonvector.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: "https://playonvector.com/terms-of-service",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5
    },
    {
      url: "https://playonvector.com/data-protection-policy",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5
    }
  ]
}

