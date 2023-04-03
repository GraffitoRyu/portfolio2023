import { atom, selector, useRecoilValue } from "recoil";

export const themeState = atom({
  key: 'themeStateAtom',
  default: '', // light, dark, ''(system)
})

export const themeStateSelector = selector({
  key: "themeStateSelector",
  get: ({ get }) => {
    const theme = (get(themeState) == "" ? getSystemTheme() : get(themeState));
    applyTheme(theme);
    return theme;
  },
  set: ({ set }, changeTheme) => {
    applyTheme(changeTheme);
    return set(themeState, changeTheme)
  },
});

function getSystemTheme() {
    const systemTheme = window.matchMedia(`(prefers-color-scheme: dark)`);
    return (systemTheme.matches ? 'dark' : 'light');
}

function applyTheme(theme) {
  document.querySelector("html").classList.remove('dark-theme');
  document.querySelector("html").classList.remove('light-theme');
  document.querySelector("html").classList.add(`${theme}-theme`);
}
