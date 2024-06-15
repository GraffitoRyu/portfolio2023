import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Daehyeon Ryu Portfolio",
    short_name: "Daehyeon Ryu",
    description: "프론트엔드 개발자 류대현의 포트폴리오",
    start_url: "/",
    display: "standalone",
    background_color: "#000",
    theme_color: "#ccc",
    icons: [
      {
        src: "/favicon/favicon.ico",
        sizes: "any",
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
  };
}
