import { atom, selector } from "recoil";

type themeTypes = {
  isOpen: boolean;
  isSystem: boolean;
  theme: string;
};

export const getSystemTheme: () => string = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

const applyTheme: (theme: string) => void = theme => {
  const rootClassList = document.querySelector("html")?.classList;

  // reset
  rootClassList?.remove("dark-theme", "light-theme");

  // apply
  if (theme === "system") rootClassList?.add(`${getSystemTheme()}-theme`);
  else rootClassList?.add(`${theme}-theme`);
};

export const themeState = atom<themeTypes>({
  key: "themeState",
  default: {
    isOpen: false,
    isSystem: true,
    theme: getSystemTheme(),
  },
});

export const themeSelector = selector({
  key: "themeSelector",
  get: ({ get }) => {
    const state: themeTypes = get(themeState);
    const theme: string = state.isSystem ? getSystemTheme() : state.theme;
    applyTheme(theme);
    return get(themeState);
  },
  set: ({ set }, changeTheme) => {
    applyTheme(changeTheme.theme);
    return set(themeState, changeTheme);
  },
});
