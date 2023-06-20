export interface FooterTypes {
  bg: string;
  titleBorder: string;
  titleFill: string;
  divideLine: string;
  infoDesc: string;
  infoTitle: string;
  btn: string;
  btnHover: string;
  icon: string;
  iconHover: string;
}

export interface FooterModeTypes {
  [index: string]: FooterTypes;
  light: FooterTypes;
  dark: FooterTypes;
}
