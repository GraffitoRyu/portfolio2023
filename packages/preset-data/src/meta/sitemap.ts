import {
  SitemapDataType,
  type SitemapCollectionType,
} from "@graffitoryu/types";

import { assets } from "../assets";

/**
 * 사이트맵; 포트폴리오 라우팅 데이터
 * @type {SitemapDataType[]}
 */
const portfolio: SitemapDataType[] = [
  {
    kind: "route",
    key: "sitemap/portfolio/profile",
    code: "profile",
    name: "프로필",
    path: "/",
  },
  {
    kind: "route",
    key: "sitemap/portfolio/projects",
    code: "projects",
    name: "프로젝트",
    path: "/projects",
  },
  {
    kind: "external",
    key: "sitemap/portfolio/github",
    code: "github",
    name: "Github",
    path: "https://github.com/GraffitoRyu",
  },
  {
    kind: "external",
    key: "sitemap/portfolio/notion",
    code: "notion",
    name: "Notion",
    path: "https://www.notion.so/Ryu-Daehyeon-cc635240ed4f405ab6d27ec603f8b023",
  },
];

/**
 * 사이트맵; 구직사이트
 * @type {SitemapDataType[]}
 */
const recruit: SitemapDataType[] = [
  {
    kind: "external",
    key: "sitemap/recruit/rocketpunch",
    code: "rocketpunch",
    name: "로켓펀치",
    path: "https://www.rocketpunch.com/@23a638d08c154043",
  },
  {
    kind: "external",
    key: "sitemap/recruit/wanted",
    code: "wanted",
    name: "원티드",
    path: "https://www.wanted.co.kr/",
  },
  {
    kind: "external",
    key: "sitemap/recruit/jumpit",
    code: "jumpit",
    name: "점핏",
    path: "https://www.jumpit.co.kr/",
  },
  {
    kind: "external",
    key: "sitemap/recruit/saramin",
    code: "saramin",
    name: "사람인",
    path: "https://www.saramin.co.kr/",
  },
  {
    kind: "external",
    key: "sitemap/recruit/jobkorea",
    code: "jobkorea",
    name: "잡코리아",
    path: "https://www.jobkorea.co.kr/",
  },
];

/**
 * 사이트맵; 연락처
 * @type {SitemapDataType[]}
 */
const contact: SitemapDataType[] = [
  {
    kind: "copy",
    key: "sitemap/contact/email",
    code: "email",
    name: "yth4135@naver.com",
    path: "mailto:yth4135@naver.com",
  },
  {
    kind: "copy",
    key: "sitemap/contact/mobile",
    code: "mobile",
    name: "+82-10-5652-2871",
    path: "tel:+821056522871",
  },
];

/**
 * 사이트맵; 문서
 * @type {SitemapDataType[]}
 */
const download: SitemapDataType[] = [
  {
    kind: "download",
    key: "sitemap/download/resume",
    code: "resume_doc",
    name: "이력서",
    path: assets.public.downloads.resume,
  },
  {
    kind: "download",
    key: "sitemap/download/projects",
    code: "projects_doc",
    name: "경력기술서",
    path: assets.public.downloads.projects,
  },
];

/**
 * 사이트맵; 유형별 데이터 컬렉션
 * @type {SitemapCollectionType}
 */
const sitemap: SitemapCollectionType = {
  portfolio,
  recruit,
  contact,
  download,
};

export default sitemap;
