type SitemapType = {
  code: string;
  name: string;
  path: string;
  header: boolean;
  contact: boolean;
  external: boolean;
};

export const sitemapData: SitemapType[] = [
  {
    code: "profile",
    name: "프로필",
    path: "/",
    header: true,
    contact: false,
    external: false,
  },
  {
    code: "projects",
    name: "프로젝트",
    path: "/projects",
    header: true,
    contact: false,
    external: false,
  },
  {
    code: "github",
    name: "Github",
    path: "https://github.com/GraffitoRyu",
    header: true,
    contact: false,
    external: true,
  },
  {
    code: "notion",
    name: "Notion",
    path: "https://www.notion.so/Ryu-Daehyeon-cc635240ed4f405ab6d27ec603f8b023",
    header: true,
    contact: false,
    external: true,
  },
  {
    code: "jumpit",
    name: "점핏",
    path: "https://www.jumpit.co.kr/",
    header: false,
    contact: true,
    external: true,
  },
  {
    code: "wanted",
    name: "원티드",
    path: "https://www.wanted.co.kr/",
    header: false,
    contact: true,
    external: true,
  },
  {
    code: "saramin",
    name: "사람인",
    path: "https://www.saramin.co.kr/",
    header: false,
    contact: true,
    external: true,
  },
  {
    code: "jobkorea",
    name: "잡코리아",
    path: "https://www.jobkorea.co.kr/",
    header: false,
    contact: true,
    external: true,
  },
  {
    code: "rocketpunch",
    name: "로켓펀치",
    path: "https://www.rocketpunch.com/@23a638d08c154043",
    header: false,
    contact: true,
    external: true,
  },
  {
    code: "kakao",
    name: "카카오톡 오픈채팅",
    path: "https://open.kakao.com/o/s9PfGtif",
    header: false,
    contact: true,
    external: true,
  },
];
