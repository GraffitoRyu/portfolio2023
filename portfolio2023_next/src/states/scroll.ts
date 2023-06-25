import { atom } from "recoil";
import { DetailScrollRefStateTypes, ScrollRefStateTypes } from "@/types/state";

export const scrollRefState = atom<ScrollRefStateTypes>({
  key: "scrollRefStateAtom",
  default: {
    container: null,
    header: null,
    career: null,
    experience: null,
    tools: null,
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
