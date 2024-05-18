interface TimerColorTypes {
  bar: string;
  text: string;
}

interface ModeTypes {
  [index: string]: TimerColorTypes;
  light: TimerColorTypes;
  dark: TimerColorTypes;
}

interface GnbSitemapBtnTypes {
  basic: string;
  hover: string;
  selected: string;
}

interface SitemapBtnModeTypes {
  [index: string]: GnbSitemapBtnTypes;
  light: GnbSitemapBtnTypes;
  dark: GnbSitemapBtnTypes;
}

interface GnbUtilTypes {
  bg: string;
  bgHover?: string;
  svg: string;
  svgHover: string;
  svgActive: string;
  tooltipBox: string;
  tooltipText: string;
}

interface GnbUtilModeTypes {
  [index: string]: GnbUtilTypes;
  light: GnbUtilTypes;
  dark: GnbUtilTypes;
}

interface ThemeMenuTypes {
  container: string;
  menu: string;
  hover: string;
  selected: string;
}

interface ThemeMenuModeTypes {
  [index: string]: ThemeMenuTypes;
  light: ThemeMenuTypes;
  dark: ThemeMenuTypes;
}
