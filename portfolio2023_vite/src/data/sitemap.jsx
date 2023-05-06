// components
import * as Pages from "../templates/routes";
import PageTemplate from "../templates/transPage/PageTemplate";

export const sitemapData = [
  {
    key: "sitemap/profile",
    code: "profile",
    path: "/",
    header: true,
    contact: false,
    external: false,
    name: "프로필",
    components: <Pages.Profile />,
    nodeRef: undefined,
  },
  {
    key: "sitemap/projects",
    code: "projects",
    path: "/projects/",
    header: true,
    contact: false,
    external: false,
    name: "프로젝트",
    components: <Pages.Projects details={false} />,
    nodeRef: undefined,
  },
  // {
  //   key: "sitemap/projects",
  //   code: "projects",
  //   path: "/projects/:category",
  //   header: false,
  //   contact: false,
  //   external: false,
  //   name: "프로젝트",
  //   // components: <Pages.Projects details={true} />,
  //   nodeRef: undefined,
  // },
  {
    key: "sitemap/github",
    code: "github",
    path: "https://github.com/GraffitoRyu",
    header: true,
    contact: false,
    external: true,
    name: "Github",
  },
  {
    key: "sitemap/notion",
    code: "notion",
    path: "https://www.notion.so/Ryu-Daehyeon-cc635240ed4f405ab6d27ec603f8b023?pvs=4",
    header: true,
    contact: false,
    external: true,
    name: "Notion",
  },
  {
    key: "contact/jumpit",
    code: "jumpit",
    path: "https://www.jumpit.co.kr/",
    header: false,
    contact: true,
    external: true,
    name: "점핏",
  },
  {
    key: "contact/saramin",
    code: "saramin",
    path: "https://www.saramin.co.kr/",
    header: false,
    contact: true,
    external: true,
    name: "사람인",
  },
  {
    key: "contact/jobkorea",
    code: "jobkorea",
    path: "https://www.jobkorea.co.kr/",
    header: false,
    contact: true,
    external: true,
    name: "잡코리아",
  },
  {
    key: "contact/wanted",
    code: "wanted",
    path: "https://www.wanted.co.kr/",
    header: false,
    contact: true,
    external: true,
    name: "원티드",
  },
  {
    key: "contact/rocketpunch",
    code: "rocketpunch",
    path: "https://www.rocketpunch.com/@23a638d08c154043",
    header: false,
    contact: true,
    external: true,
    name: "로켓펀치",
  },
  {
    key: "contact/kakao",
    code: "kakao",
    path: "https://open.kakao.com/o/s9PfGtif",
    header: false,
    contact: true,
    external: true,
    name: "카카오톡 오픈채팅",
  },
];

const routerChild = sitemapData
  .filter(d => d.components)
  .map(d => ({
    index: d.path === "/",
    exact: d.path === "/",
    path: d.path === "/" ? undefined : d.path,
    end: d.path.endsWith("project/"),
    element: d.components,
  }));

export const routerSet = [
  {
    path: "/",
    element: <PageTemplate />,
    children: routerChild,
  },
];
