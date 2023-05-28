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
  [key: string]: FooterTypes;
  light: FooterTypes;
  dark: FooterTypes;
}

export const footer = {
  light: {
    bg: "#efefef",
    titleBorder: "#a0a0a0",
    titleFill: "#5a5a5a",
    divideLine: "#ccc",
    infoDesc: "#909090",
    infoTitle: "#707070",
    btn: "#b0b0b0",
    btnHover: "#1a1a1a",
    icon: "#707070",
    iconHover: "#1a1a1a",
  },
  dark: {
    bg: "#252525",
    titleBorder: "#707070",
    titleFill: "#707070",
    divideLine: "#3a3a3a",
    infoDesc: "#909090",
    infoTitle: "#707070",
    btn: "#a0a0a0",
    btnHover: "#fff",
    icon: "#ccc",
    iconHover: "#fff",
  },
};
