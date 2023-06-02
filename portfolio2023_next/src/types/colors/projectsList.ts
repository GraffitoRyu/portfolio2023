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
