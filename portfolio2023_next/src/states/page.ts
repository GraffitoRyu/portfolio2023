import { atom } from "recoil";

export type pageStateTypes = {
  init: boolean;
  cur: string;
  loaded: boolean;
};

export const pageState = atom<pageStateTypes>({
  key: "pageStateAtom",
  default: {
    init: false, // 첫 진입 여부
    cur: "profile", // 현재페이지
    loaded: false, // 로딩 완료 여부
  },
});
