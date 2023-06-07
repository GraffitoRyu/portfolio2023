import { ThemeStateTypes } from "@/types/state";
import { atom } from "recoil";

export const themeState = atom<ThemeStateTypes>({
  key: "themeStateAtom",
  default: {
    isOpen: false,
    isSystem: true,
    theme: "dark",
  },
});
