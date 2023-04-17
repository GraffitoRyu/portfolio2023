import { atom } from "recoil";

// components
import * as Pages from "../templates/routes";
import TransContainer from "../templates/pageTransition/transContainer";

export const sitemapData = [
  {
    key: "sitemap/profile",
    code: "profile",
    path: getRootPathname(),
    header: true,
    external: false,
    name: "프로필",
    components: <Pages.Profile />,
    nodeRef: undefined,
  },
  {
    key: "sitemap/projects",
    code: "projects",
    path: getRootPathname() + "projects",
    header: true,
    external: false,
    name: "프로젝트",
    components: <Pages.Projects />,
    nodeRef: undefined,
  },
  {
    key: "sitemap/github",
    code: "github",
    path: "https://github.com/GraffitoRyu",
    header: true,
    external: true,
    name: "Github",
  },
  {
    key: "sitemap/notion",
    code: "notion",
    path: "https://www.notion.so/Ryu-Daehyeon-cc635240ed4f405ab6d27ec603f8b023?pvs=4",
    header: true,
    external: true,
    name: "Notion",
  },
];

export const routerSet = [
  {
    path: "/",
    element: <TransContainer />,
    children: sitemapData
      .filter(d => !d.external)
      .map(d => ({
        index: d.path === "/",
        path: d.path === "/" ? undefined : d.path,
        element: d.components,
      })),
  },
];

function getRootPathname() {
  const currentPath = window.location.pathname;
  return currentPath.includes("projects/")
    ? currentPath.replace("projects/", "")
    : currentPath;
}
