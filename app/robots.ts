import type { MetadataRoute } from "next";
import { SEO } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SEO.baseUrl}/sitemap.xml`,
    host: SEO.baseUrl,
  };
}