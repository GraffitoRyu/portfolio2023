interface CursorColorTypes {
  basic: string;
  hover: string;
}

interface CursorModeTypes {
  [index: string]: CursorColorTypes;
  light: CursorColorTypes;
  dark: CursorColorTypes;
}

interface PageColorTypes {
  bg: string;
  selectionBg: string;
  selectionText: string;
}

interface PageModeTypes {
  [index: string]: PageColorTypes;
  light: PageColorTypes;
  dark: PageColorTypes;
}

interface ScrollBarColorTypes {
  thumb: string;
}

interface ScrollBarModeTypes {
  [index: string]: ScrollBarColorTypes;
  light: ScrollBarColorTypes;
  dark: ScrollBarColorTypes;
}

interface BtnColorTypes {
  [index: string]: string;
  basic: string;
  hoverBg: string;
  hoverContents: string;
}

interface BtnModeTypes {
  [index: string]: BtnColorTypes;
  light: BtnColorTypes;
  dark: BtnColorTypes;
}

interface TransCoverColorTypes {
  [index: string]: string;
  bg: string;
  title: string;
}

interface TransCoverModeTypes {
  [index: string]: TransCoverColorTypes;
  light: TransCoverColorTypes;
  dark: TransCoverColorTypes;
}

interface InitCoverColorTypes {
  [index: string]: string;
  // bg: string;
  icon: string;
  text: string;
}

interface InitCoverModeTypes {
  [index: string]: InitCoverColorTypes;
  light: InitCoverColorTypes;
  dark: InitCoverColorTypes;
}
