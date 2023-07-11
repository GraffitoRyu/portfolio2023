import { ScreenSizeTypes } from "@/types/state";
import { atom } from "recoil";

export const screenSizeState = atom<ScreenSizeTypes>({
  key: "screenStateAtom",
  default: {
    windowWidth: 0,
    windowHeight: 0,
    headerHeight: 0,
    columnWidth: 0,
    careerExpandHeight: {},
    detailHeaderHeight: 0,
  },
});
