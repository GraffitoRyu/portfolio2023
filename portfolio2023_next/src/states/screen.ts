import { ScreenSizeTypes } from "@/types/state";
import { atom } from "recoil";

export const screenSizeState = atom<ScreenSizeTypes>({
  key: "screenStateAtom",
  default: {
    windowWidth: 0,
    windowHeight: 0,
    headerHeight: 0,
    columnWidth: 0, // 레이아웃 1 column의 너비값
    careerExpandHeight: {}, // 프로필 페이지 career 섹션의 각 아이템 확장 영역 높이값
    detailHeaderHeight: 0, // 프로젝트 상세 페이지 상단 헤더의 높이값
  },
});
