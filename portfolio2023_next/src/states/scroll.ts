import { atom } from "recoil";
import { ScrollStateTypes } from "@/types/state";

export const scrollState = atom<ScrollStateTypes>({
  key: "scrollStateAtom",
  default: {
    container: null,
    footer: null,
  },
});
