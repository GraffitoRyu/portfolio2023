interface ProjectsDetailColorTypes {
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

interface ProjectsDetailModeTypes {
  [index: string]: ProjectsDetailColorTypes;
  light: ProjectsDetailColorTypes;
  dark: ProjectsDetailColorTypes;
}
