import { atom, selector } from "recoil";

export const themeStateAtom = atom({
  key: "themeStateAtom",
  default: {
    isSystem: true,
    theme: getSystemTheme(), // light, dark
  },
});

export const themeStateSelector = selector({
  key: "themeStateSelector",
  get: ({ get }) => {
    const theme = get(themeStateAtom).isSystem ? getSystemTheme() : get(themeStateAtom).theme;
    applyTheme(theme);
    return get(themeStateAtom);
  },
  set: ({ set }, changeTheme) => {
    applyTheme(changeTheme.theme);
    return set(themeStateAtom, changeTheme)
  },
});

export function getSystemTheme() {
    const systemTheme = window.matchMedia(`(prefers-color-scheme: dark)`);
    return (systemTheme.matches ? 'dark' : 'light');
}

function applyTheme(theme) {
  const classList = document.querySelector("html").classList;
  classList.remove('dark-theme');
  classList.remove('light-theme');

  if (theme == 'system') classList.add(`${getSystemTheme()}-theme`);
  else classList.add(`${theme}-theme`);
}
