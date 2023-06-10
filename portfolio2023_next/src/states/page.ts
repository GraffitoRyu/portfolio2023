import { atom } from "recoil";
import { pageStateTypes } from "@/types/state";

export const pageState = atom<pageStateTypes>({
  key: "pageStateAtom",
  default: {
    init: false, // 첫 진입 여부
    cur: "profile", // 현재페이지
    cover: "profile", // 페이지 전환 페이지 코드
    loaded: false, // 로딩 완료 여부
    notFound: false, // 404 page
  },
});
