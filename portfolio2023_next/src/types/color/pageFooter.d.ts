interface PageFooterTypes {
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

interface PageFooterModeTypes {
  [index: string]: PageFooterTypes;
  light: PageFooterTypes;
  dark: PageFooterTypes;
}
