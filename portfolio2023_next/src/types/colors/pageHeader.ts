export interface TimerColorTypes {
  bar: string;
  text: string;
}

export interface ModeTypes {
  [key: string]: TimerColorTypes;
  light: TimerColorTypes;
  dark: TimerColorTypes;
}

export interface GnbSitemapBtnTypes {
  basic: string;
  hover: string;
  selected: string;
}

export interface SitemapBtnModeTypes {
  [index: string]: GnbSitemapBtnTypes;
  light: GnbSitemapBtnTypes;
  dark: GnbSitemapBtnTypes;
}

export interface GnbUtilTypes {
  bg: string;
  bgHover?: string;
  svg: string;
  svgHover: string;
  svgActive: string;
}

export interface GnbUtilModeTypes {
  [index: string]: GnbUtilTypes;
  light: GnbUtilTypes;
  dark: GnbUtilTypes;
}

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
