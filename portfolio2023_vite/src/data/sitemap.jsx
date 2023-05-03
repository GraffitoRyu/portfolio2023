// components
import * as Pages from "../templates/routes";
import PageTemplate from "../templates/transPage/pageTemplate";

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

const routerChild = sitemapData
  .filter(d => !d.external)
  .map(d => ({
    index: d.path === getRootPathname(),
    path: d.path === getRootPathname() ? undefined : d.path,
    element: d.components,
  }));

export const routerSet = [
  {
    path: getRootPathname(),
    element: <PageTemplate />,
    children: routerChild,
  },
];

export function getRootPathname() {
  const currentPath = window.location.pathname;
  return currentPath.includes("projects")
    ? currentPath.replace(/projects/gi, "").replace("//", "/")
    : currentPath;
}
