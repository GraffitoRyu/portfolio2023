// 현재 시간 표시기
export type TimerTypes = {
  bar: string;
  text: string;
};
export type ModeTypes = {
  [key: string]: TimerTypes;
  light: TimerTypes;
  dark: TimerTypes;
};

// GNB 버튼 컬러
export type GnbColorTypes = {
  basic: string;
  hover: string;
  selected: string;
};
export type GnbModeTypes = {
  [index: string]: GnbColorTypes;
  light: GnbColorTypes;
  dark: GnbColorTypes;
};

// 유틸 버튼 컬러
export type UtilColorTypes = {
  bg: string;
  bgHover?: string;
  svg: string;
  svgHover: string;
  svgActive?: string;
};
export type UtilModeTypes = {
  [index: string]: UtilColorTypes;
  light: UtilColorTypes;
  dark: UtilColorTypes;
};

// 테마 메뉴 컬러
export type ThemeMenuColorTypes = {
  container: string;
  menu: string;
  hover: string;
  selected: string;
};
export type ThemeMenuModeTypes = {
  [index: string]: ThemeMenuColorTypes;
  light: ThemeMenuColorTypes;
  dark: ThemeMenuColorTypes;
};
