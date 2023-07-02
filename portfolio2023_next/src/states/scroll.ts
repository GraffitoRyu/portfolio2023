import { atom } from "recoil";
import { DetailScrollRefStateTypes, ScrollRefStateTypes } from "@/types/state";

export const scrollRefState = atom<ScrollRefStateTypes>({
  key: "scrollRefStateAtom",
  default: {
    container: null,
    height: 0,
    header: null,
    visual: null,
    career: null,
    experience: null,
    stacks: null,
    projectList: null,
    footer: null,
  },
});

export const detailScrollRefState = atom<DetailScrollRefStateTypes>({
  key: "detailScrollRefAtom",
  default: {
    container: null,
    visual: null,
    visualTitle: null,
  },
});
