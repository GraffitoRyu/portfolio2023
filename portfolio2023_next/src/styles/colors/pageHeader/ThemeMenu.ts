// 테마 메뉴 컬러
export interface ThemeMenuTypes {
  container: string;
  menu: string;
  hover: string;
  selected: string;
}

export interface ThemeMenuModeTypes {
  [index: string]: ThemeMenuTypes;
  light: ThemeMenuTypes;
  dark: ThemeMenuTypes;
}

export const GnbThemeMenu: ThemeMenuModeTypes = {
  light: {
    container: "#efefef",
    menu: "#afafaf",
    hover: "#707070",
    selected: "#3a3a3a",
  },
  dark: {
    container: "#3a3a3a",
    menu: "#707070",
    hover: "#bfbfbf",
    selected: "#dfdfdf",
  },
};
