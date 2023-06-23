export interface CursorColorTypes {
  basic: string;
  hover: string;
}

export interface CursorModeTypes {
  [index: string]: CursorColorTypes;
  light: CursorColorTypes;
  dark: CursorColorTypes;
}

export interface PageColorTypes {
  bg: string;
  selectionBg: string;
  selectionText: string;
}

export interface PageModeTypes {
  [index: string]: PageColorTypes;
  light: PageColorTypes;
  dark: PageColorTypes;
}

export interface ScrollBarColorTypes {
  thumb: string;
}

export interface ScrollBarModeTypes {
  [index: string]: ScrollBarColorTypes;
  light: ScrollBarColorTypes;
  dark: ScrollBarColorTypes;
}

export interface BtnColorTypes {
  [index: string]: string;
  basic: string;
  hoverBg: string;
  hoverContents: string;
}

export interface BtnModeTypes {
  [index: string]: BtnColorTypes;
  light: BtnColorTypes;
  dark: BtnColorTypes;
}

export interface TransCoverColorTypes {
  [index: string]: string;
  bg: string;
  title: string;
}

export interface TransCoverModeTypes {
  [index: string]: TransCoverColorTypes;
  light: TransCoverColorTypes;
  dark: TransCoverColorTypes;
}

export interface InitCoverColorTypes {
  [index: string]: string;
  // bg: string;
  icon: string;
  text: string;
}

export interface InitCoverModeTypes {
  [index: string]: InitCoverColorTypes;
  light: InitCoverColorTypes;
  dark: InitCoverColorTypes;
}
