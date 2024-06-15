import { site } from "@/data/metadata";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.domain,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${site.domain}/projects`,
      lastModified: new Date(),
      priority: 0.9,
    },
  ];
}
