import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // L'éditeur de textes et ses routes n'ont rien à faire dans un index.
      disallow: ["/admin", "/api/"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
