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

export const page = {
  light: {
    bg: "#fff",
    selectionBg: "#44e588",
    selectionText: "#3a3a3a",
  },
  dark: {
    bg: "#141414",
    selectionBg: "#e28f38",
    selectionText: "#fff",
  },
};
