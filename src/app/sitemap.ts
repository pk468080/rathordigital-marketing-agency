import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const routes = [
  "",
  "/about",
  "/contact",
  "/services",
  "/services/seo",
  "/services/meta-ads",
  "/services/google-ads",
  "/services/web-development",
  "/services/ecommerce",
  "/services/video-editing",
  "/services/consultation",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/services/") ? 0.8 : 0.9,
  }));
}
