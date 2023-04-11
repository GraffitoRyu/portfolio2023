import { createRef } from "react";
import { atom } from "recoil";

import * as Pages from "../../templates/pageContents";

export const sitemap = atom({
  key: "sitemap",
  default: [
    {
      key: "sitemap/profile",
      code: "profile",
      path: "/",
      external: false,
      name: "프로필",
      components: <Pages.Profile />,
      nodeRef: createRef(),
    },
    {
      key: "sitemap/projects",
      code: "projects",
      path: "/projects",
      external: false,
      name: "프로젝트",
      components: <Pages.Projects />,
      nodeRef: createRef(),
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
  ],
});
