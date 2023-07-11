export interface DetailColorTypes {
  bg: string;
  visualBg: string;
  visualTitle: string;
  visualSubtitle: string;
  infoTitle: string;
  infoDesc: string;
  expTitle: string;
  expDesc: string;
  stackBg: string;
  stackBorder: string;
  stackText: string;
  captionTitle: string;
  captionDesc: string;
}

export interface DetailModeTypes {
  [index: string]: DetailColorTypes;
  light: DetailColorTypes;
  dark: DetailColorTypes;
}
