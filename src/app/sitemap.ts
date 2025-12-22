import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes = [
    "/",
    "/aviso-legal",
    "/politica-privacidad",
    "/politica-cookies",
    "/politica-accesibilidad",
  ];

  return routes.map((route) => ({
    url: absoluteUrl(route),
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "yearly",
    priority: route === "/" ? 1 : 0.3,
  }));
}
