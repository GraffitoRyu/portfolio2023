import { atom } from "recoil";
import { DetailScrollRefStateTypes, ScrollRefStateTypes } from "@/types/state";

// 페이지의 스크롤 관련 요소 참조 상태
export const scrollRefState = atom<ScrollRefStateTypes>({
  key: "scrollRefStateAtom",
  default: {
    container: null, // scroll container
    stickyHeight: 0, // footer를 제외한 스크롤 높이값
    header: null, // page header
    visual: null, // page visual
    career: null, // profile career section
    careerItems: {}, // profile career items
    careerOpen: {}, // profile career 각 아이템 오픈 여부
    experience: null, // profile experience section
    stacks: null, // profile tech stacks section
    projectList: null, // project list section
    footer: null, // page footer
  },
});

// 프로젝트 상세 영역의 스크롤 관련 요소 참조 상태
export const detailScrollRefState = atom<DetailScrollRefStateTypes>({
  key: "detailScrollRefAtom",
  default: {
    container: null, // detail scroll container
    scrollHeight: 0, // 상세 페이지 전체 스크롤 높이
    header: null, // detail header
    visual: null, // detail visual
    visualTitle: null, // detail visual title
  },
});
