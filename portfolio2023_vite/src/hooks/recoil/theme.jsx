import { atom, selector, useRecoilValue } from "recoil";

export const themeState = atom({
  key: 'themeStateAtom',
  default: '', // light, dark, ''(system)
})

export const themeStateSelector = selector({
  key: "themeStateSelector",
  get: ({ get }) => {
    return (get(themeState) == "" ? getSystemTheme() : get(themeState));
  },
  set: ({ set }, changeTheme) => set(themeState, changeTheme),
});

export function getSystemTheme() {
    const systemTheme = window.matchMedia(`(prefers-color-scheme: dark)`);
    return (systemTheme.matches ? 'dark' : 'light');
}

export function applyTheme() {
  const theme = useRecoilValue(themeStateSelector);

  document.querySelector("html").classList.remove('light-theme dark-theme');
  document.querySelector("html").classList.add(`${theme}-theme`);
}

// import { useEffect, useState } from "react";

// export default function checkSystemTheme() {
//   const checkDark = window.matchMedia(`(prefers-color-scheme: dark)`);
//   const getCurTheme = () => checkDark.matches;
//   const [isDark, setDark] = useState(getCurTheme());
//   const themeChecker = e => {
//     setDark(e.matches);
//     if (e.matches) document.querySelector("html").classList.add("dark-theme");
//     else document.querySelector("html").classList.remove("dark-theme");
//   }

//   useEffect(() => {
//     checkDark.addListener(themeChecker);
//     return () => checkDark.removeListener(themeChecker);
//   }, [])

//   return isDark;
// }