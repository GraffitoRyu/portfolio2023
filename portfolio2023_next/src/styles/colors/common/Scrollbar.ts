export interface ScrollBarColorTypes {
  thumb: string;
}

export interface ScrollBarModeTypes {
  [key: string]: ScrollBarColorTypes;
  light: ScrollBarColorTypes;
  dark: ScrollBarColorTypes;
}

export const scrollbar: ScrollBarModeTypes = {
  light: {
    thumb: "rgba(26,26,26,0.6)",
  },
  dark: {
    thumb: "rgba(90,90,90,0.6)",
  },
};
