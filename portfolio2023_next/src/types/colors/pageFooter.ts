export interface FooterTypes {
  bg: string;
  titleBorder: string;
  titleFill: string;
  summary: string;
  copyright: string;
  linkCategory: string;
  link: string;
  linkIcon: string;
  linkHover: string;
  tooltipBox: string;
  tooltipText: string;
}

export interface FooterModeTypes {
  [index: string]: FooterTypes;
  light: FooterTypes;
  dark: FooterTypes;
}
