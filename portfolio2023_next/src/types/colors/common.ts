export interface CursorColorTypes {
  basic: string;
  hover: string;
}

export interface CursorModeTypes {
  [key: string]: CursorColorTypes;
  light: CursorColorTypes;
  dark: CursorColorTypes;
}

export interface PageColorTypes {
  bg: string;
  selectionBg: string;
  selectionText: string;
}

export interface PageModeTypes {
  [key: string]: PageColorTypes;
  light: PageColorTypes;
  dark: PageColorTypes;
}

export interface ScrollBarColorTypes {
  thumb: string;
}

export interface ScrollBarModeTypes {
  [key: string]: ScrollBarColorTypes;
  light: ScrollBarColorTypes;
  dark: ScrollBarColorTypes;
}
