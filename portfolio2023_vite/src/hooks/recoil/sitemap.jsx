import { atom } from "recoil";

export const rootDirectory = window.location.pathname;

export const sitemap = atom({
  key: "sitemap",
  default: [
    {
      key: "sitemap/profile",
      path: rootDirectory,
      external: false,
      name: "프로필",
    },
    {
      key: "sitemap/projects",
      path: `${rootDirectory}projects`,
      external: false,
      name: "프로젝트",
    },
    {
      key: "sitemap/github",
      path: "https://github.com/GraffitoRyu",
      external: true,
      name: "Github",
    },
    {
      key: "sitemap/notion",
      path: "https://www.notion.so/Ryu-Daehyeon-cc635240ed4f405ab6d27ec603f8b023?pvs=4",
      external: true,
      name: "notion",
    },
  ],
});
