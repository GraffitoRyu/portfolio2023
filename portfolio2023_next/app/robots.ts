import { MetadataRoute } from "next";

import { site } from "@/data/metadata";

/**
 * robots.txt 생성 라우트
 * @robots
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${site.domain}/sitemap.xml`,
  };
}
