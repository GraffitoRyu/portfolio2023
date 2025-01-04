/**
 * 시스템 테마 추출
 * @util
 * @theme
 * @return {string} "dark", "light"
 */
export const getSystemTheme = (): "dark" | "light" => {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

/**
 * 테마 적용
 * @util
 * @theme
 * @param {string | undefined | null} theme 테마
 * @desc
 * <html />에 className으로 "dark-theme", "light-theme" 적용
 */
export const applyTheme = (theme: string | undefined | null) => {
  if (typeof window === "undefined") return;

  const rootClassList = document.querySelector("html")?.classList;
  // reset
  rootClassList?.remove("dark-theme", "light-theme");
  // apply
  if (theme === "system" || !theme)
    rootClassList?.add(`${getSystemTheme()}-theme`);
  else rootClassList?.add(`${theme}-theme`);
};
