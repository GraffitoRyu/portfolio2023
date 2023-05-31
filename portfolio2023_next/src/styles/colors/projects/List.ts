export interface ListColorTypes {
  border: string;
  bgHover: string;
  title: string;
  period: string;
  desc: string;
  slideTitle: string;
}

export interface ListModeTypes {
  [key: string]: ListColorTypes;
  light: ListColorTypes;
  dark: ListColorTypes;
}

export const list = {
  light: {
    border: "#ccc",
    bgHover: "#efefef",
    title: "#5a5a5a",
    period: "#bfbfbf",
    desc: "#707070",
    slideTitle: "#5a5a5a",
  },
  dark: {
    border: "#3a3a3a",
    bgHover: "#242424",
    title: "#5a5a5a",
    period: "#5a5a5a",
    desc: "#707070",
    slideTitle: "#fff",
  },
};
