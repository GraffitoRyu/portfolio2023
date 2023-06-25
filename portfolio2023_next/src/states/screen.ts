import { ScreenTypes } from "@/types/state";
import { atom } from "recoil";

export const screenState = atom<ScreenTypes>({
  key: "screenStateAtom",
  default: {
    windowHeight: 0,
  },
});
