import { MetadataRoute } from "next";
import { site } from "@/data/metadata";

/**
 * PWA 활성화를 위한 manifest
 * @manifest
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "류대현의 포트폴리오",
    short_name: "Daehyeon Ryu",
    description: site.desc,
    lang: "ko-KR",
    start_url: site.domain,
    scope: site.domain,
    display: "standalone",
    background_color: "#000",
    theme_color: "#ccc",
    icons: [
      {
        src: "/favicon/favicon.ico",
        sizes: "256x256",
      },
      {
        src: "/favicon/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "/favicon/apple-icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
      },
      {
        src: "/favicon/apple-icon-180x180.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    categories: ["profile", "resume"],
    orientation: "portrait-primary",
    prefer_related_applications: false,
  };
}
