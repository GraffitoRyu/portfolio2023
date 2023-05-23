"use client";

import { atom, selector } from "recoil";

export type ThemeTypes = {
  isOpen: boolean;
  isSystem: boolean;
  theme: string;
};

export const getSystemTheme: () => string = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

export const applyTheme: (theme: string | undefined | null) => void = theme => {
  const rootClassList = document.querySelector("html")?.classList;
  // reset
  rootClassList?.remove("dark-theme", "light-theme");
  // apply
  if (theme === "system" || !theme)
    rootClassList?.add(`${getSystemTheme()}-theme`);
  else rootClassList?.add(`${theme}-theme`);
};

export const themeState = atom<ThemeTypes>({
  key: "themeStateAtom",
  default: {
    isOpen: false,
    isSystem: true,
    theme: getSystemTheme(),
  },
});
