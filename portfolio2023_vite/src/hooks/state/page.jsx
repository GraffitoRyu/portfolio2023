import { atom } from "recoil";

export const pageState = atom({
  key: "pageState",
  default: {
    init: false,
    cur: "profile", // 현재 페이지
    stay: false,
    transStep: "entered", // 페이지 전환 효과를 위한 단계 구분 상태
    transDuration: 1600, // 페이지 전환 시간 (ms)
    transDelay: 400,
  },
});
