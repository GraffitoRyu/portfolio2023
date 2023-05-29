import { atom } from "recoil";

export type ThemeStateTypes = {
  isOpen: boolean;
  isSystem: boolean;
  theme: string;
};

export const themeState = atom<ThemeStateTypes>({
  key: "themeStateAtom",
  default: {
    isOpen: false,
    isSystem: true,
    theme: "dark",
  },
});
