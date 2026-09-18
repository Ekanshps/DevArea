import type { MetadataRoute } from "next";
import { BLOG_POSTS, SEO } from "@/lib/constants";

const staticRoutes = [
  "/",
  "/about",
  "/blog",
  "/contact",
  "/faq",
  "/portfolio",
  "/pricing",
  "/services",
  "/services/ai-chatbot",
  "/services/ecommerce",
  "/services/landing-pages",
  "/services/maintenance",
  "/services/seo-websites",
  "/services/uiux-design",
  "/services/web-development",
  "/services/website-redesign",
  "/thank-you",
  "/legal/cookies",
  "/legal/disclaimer",
  "/legal/privacy",
  "/legal/refund",
  "/legal/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${SEO.baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "/" || route === "/services" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route === "/services" ? 0.9 : route.startsWith("/services/") ? 0.8 : 0.6,
  }));

  const blogEntries: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${SEO.baseUrl}/blog/${post.slug}`,
    lastModified: post.publishedAt,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}