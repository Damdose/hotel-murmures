import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

const routes = [
  "",
  "/hotel",
  "/cafe",
  "/nos-chambres",
  "/services",
  "/acces",
  "/mentions-legales",
  "/conditions-generales-utilisation",
  "/politique-confidentialite",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : 0.8,
  }));
}
