interface ListColorTypes {
  border: string;
  bgHover: string;
  title: string;
  period: string;
  desc: string;
  slideTitle: string;
}

interface ListModeTypes {
  [index: string]: ListColorTypes;
  light: ListColorTypes;
  dark: ListColorTypes;
}
