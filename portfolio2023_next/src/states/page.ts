import { atom } from "recoil";

export type pageStateTypes = {
  init: boolean;
  cur: string;
};

export const pageState = atom<pageStateTypes>({
  key: "pageStateAtom",
  default: {
    init: true, // 첫 진입 여부
    cur: "profile", // 현재페이지
  },
});
