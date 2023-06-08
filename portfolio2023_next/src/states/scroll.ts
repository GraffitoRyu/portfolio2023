import { atom } from "recoil";
import { ScrollRefStateTypes } from "@/types/state";

export const scrollRefState = atom<ScrollRefStateTypes>({
  key: "scrollRefStateAtom",
  default: {
    container: null,
    footer: null,
    detail: null,
  },
});

export const detailScrollState = atom({
  key: "detailScrollState",
  default: {},
});
