import { atom } from "recoil";

// components
import * as Pages from "../../templates/pageContents";
import ContentsRoot from "../../roots/contentsRoot";

export const sitemapData = [
  {
    key: "sitemap/profile",
    code: "profile",
    path: getRootPathname(),
    external: false,
    name: "프로필",
    components: <Pages.Profile />,
    nodeRef: undefined,
  },
  {
    key: "sitemap/projects",
    code: "projects",
    path: getRootPathname() + "projects",
    external: false,
    name: "프로젝트",
    components: <Pages.Projects />,
    nodeRef: undefined,
  },
  {
    key: "sitemap/github",
    code: "github",
    path: "https://github.com/GraffitoRyu",
    external: true,
    name: "Github",
  },
  {
    key: "sitemap/notion",
    code: "notion",
    path: "https://www.notion.so/Ryu-Daehyeon-cc635240ed4f405ab6d27ec603f8b023?pvs=4",
    external: true,
    name: "Notion",
  },
];

export const sitemap = atom({
  key: "sitemap",
  default: sitemapData,
});

export const routerSet = atom({
  key: "routerData",
  default: [
    {
      path: "/",
      element: <ContentsRoot />,
      children: sitemapData
        .filter(d => !d.external)
        .map(d => ({
          index: d.path === "/",
          path: d.path === "/" ? undefined : d.path,
          element: d.components,
        })),
    },
  ],
});

function getRootPathname() {
  const currentpath = window.location.pathname;
  return currentpath.includes("projects")
    ? currentpath.replace("projects", "")
    : currentpath;
}
