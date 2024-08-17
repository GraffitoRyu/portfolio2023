interface ProjectsListColorTypes {
  border: string;
  bgHover: string;
  title: string;
  period: string;
  desc: string;
  slideTitle: string;
}

interface ProjectsListModeTypes {
  [index: string]: ProjectsListColorTypes;
  light: ProjectsListColorTypes;
  dark: ProjectsListColorTypes;
}
