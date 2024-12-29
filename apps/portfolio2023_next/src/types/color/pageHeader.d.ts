interface PageHeaderTimerColorTypes {
  bar: string;
  text: string;
}

interface PageHeaderTimeDisplayModeTypes {
  [index: string]: PageHeaderTimerColorTypes;
  light: PageHeaderTimerColorTypes;
  dark: PageHeaderTimerColorTypes;
}

interface PageHeaderGnbSitemapBtnTypes {
  basic: string;
  hover: string;
  selected: string;
}

interface PageHeaderSitemapBtnModeTypes {
  [index: string]: PageHeaderGnbSitemapBtnTypes;
  light: PageHeaderGnbSitemapBtnTypes;
  dark: PageHeaderGnbSitemapBtnTypes;
}

interface PageHeaderGnbUtilTypes {
  bg: string;
  bgHover?: string;
  svg: string;
  svgHover: string;
  svgActive: string;
  tooltipBox: string;
  tooltipText: string;
}

interface PageHeaderGnbUtilModeTypes {
  [index: string]: PageHeaderGnbUtilTypes;
  light: PageHeaderGnbUtilTypes;
  dark: PageHeaderGnbUtilTypes;
}

interface PageHeaderThemeMenuTypes {
  container: string;
  menu: string;
  hover: string;
  selected: string;
}

interface PageHeaderThemeMenuModeTypes {
  [index: string]: PageHeaderThemeMenuTypes;
  light: PageHeaderThemeMenuTypes;
  dark: PageHeaderThemeMenuTypes;
}
