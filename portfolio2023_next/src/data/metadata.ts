import type { Metadata, Viewport } from "next";
import type {
  Icons,
  Robots,
} from "next/dist/lib/metadata/types/metadata-types";
import type { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";

export const site: { title: string; desc: string; domain: string } = {
  title: "류대현 포트폴리오 :: Front-end Engineer / UI Engineer",
  desc: "UI 엔지니어, 프론트엔드 엔지니어 류대현의 포트폴리오입니다.",
  domain:
    process.env.NODE_ENV === "production"
      ? "https://www.ryudh.com/"
      : "https://localhost:3000",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  themeColor: [
    { color: "#cccccc" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

// 오픈그래프
const OPEN_GRAPH: OpenGraph = {
  type: "website",
  locale: "ko-KR",
  url: site.domain,
  title: site.title,
  description: site.desc,
  images: [
    {
      url: `${site.domain}/img/common/site_thumb.jpg`,
      alt: "UIUX & Frontend Developer Portfolio by Daehyeon Ryu",
    },
  ],
};

// 파비콘 및 앱 아이콘 컬렉션
const FAVICON: Icons = {
  icon: [
    { url: "/favicon/favicon.ico" },
    { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    {
      url: "/favicon/android-icon-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
  ],
  shortcut: ["/favicon/favicon.ico"],
  apple: [
    {
      url: "/favicon/apple-icon-57x57.png",
      sizes: "57x57",
      type: "image/png",
    },
    {
      url: "/favicon/apple-icon-60x60.png",
      sizes: "60x60",
      type: "image/png",
    },
    {
      url: "/favicon/apple-icon-72x72.png",
      sizes: "72x72",
      type: "image/png",
    },
    {
      url: "/favicon/apple-icon-76x76.png",
      sizes: "76x76",
      type: "image/png",
    },
    {
      url: "/favicon/apple-icon-114x114.png",
      sizes: "114x114",
      type: "image/png",
    },
    {
      url: "/favicon/apple-icon-120x120.png",
      sizes: "120x120",
      type: "image/png",
    },
    {
      url: "/favicon/apple-icon-144x144.png",
      sizes: "144x144",
      type: "image/png",
    },
    {
      url: "/favicon/apple-icon-152x152.png",
      sizes: "152x152",
      type: "image/png",
    },
    {
      url: "/favicon/apple-icon-180x180.png",
      sizes: "180x180",
      type: "image/png",
    },
  ],
};

// 검색 로봇 설정
const SEARCH_ROBOTS: Robots = {
  // 검색 방지
  index: false,
  follow: false,
  nocache: true,
  googleBot: {
    index: false,
    follow: false,
  },
};

const SEO: Metadata = {
  title: {
    default: site.title,
    template: `%s | ${site.title}`,
  },
  description: site.desc,
  keywords: [
    "프론트엔드",
    "퍼블리셔",
    "웹 퍼블리싱",
    "웹 퍼블리셔",
    "front-end",
    "frontend",
    "front-end engineer",
    "front-end developer",
    "frontend engineer",
    "frontend developer",
    "uiux",
    "ui",
    "ux",
    "ui engineer",
    "web publish",
    "web publisher",
    "포트폴리오",
    "portfolio",
  ],
  metadataBase: new URL(site.domain),
  // 대체 접속 경로
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  // favicon
  icons: FAVICON,
  // 오픈그래프
  openGraph: OPEN_GRAPH,
  // 검색엔진 로봇 설정
  robots: SEARCH_ROBOTS,
};

export const metadata: Metadata = {
  ...SEO,
  formatDetection: {
    address: false,
    telephone: false,
  },
};
