export interface DetailColorTypes {
  bg: string;
  visualBg: string;
  visualTitle: string;
  visualSubtitle: string;
  infoTitle: string;
  infoDesc: string;
  stackBg: string;
  stackBorder: string;
  stackText: string;
  captionTitle: string;
  captionDesc: string;
}

export interface DetailModeTypes {
  [key: string]: DetailColorTypes;
  light: DetailColorTypes;
  dark: DetailColorTypes;
}
