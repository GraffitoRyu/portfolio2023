import { atom } from "recoil";

export type ThemeTypes = {
  isOpen: boolean;
  isSystem: boolean;
  theme: string;
};

export const themeState = atom<ThemeTypes>({
  key: "themeStateAtom",
  default: {
    isOpen: false,
    isSystem: true,
    theme: "dark",
  },
});
