import { ThemeStateTypes } from "@/types/state";
import { atom } from "recoil";

export const themeState = atom<ThemeStateTypes>({
  key: "themeStateAtom",
  default: {
    isOpen: false, // page header; 테마 메뉴 오픈 여부
    isSystem: true, // 현재 활성화된 테마가 시스템 테마인지의 여부
    theme: "dark", // 테마 값
  },
});
