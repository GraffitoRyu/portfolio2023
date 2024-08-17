interface PageSectionHeaderTypes {
  title: string;
  desc: string | string[];
  empty: boolean;
  className: string;
}

interface PageSectionHeaderModeTypes {
  [index: string]: Partial<PageSectionHeaderTypes>;
  light: Partial<PageSectionHeaderTypes>;
  dark: Partial<PageSectionHeaderTypes>;
}

interface PageSectionIntroTypes {
  title: (string | React.ReactNode)[];
  desc: (string | React.ReactNode)[];
}

interface PageSectionIntroColorTypes {
  bgFrom: string;
  bgTo: string;
  title: string;
  strong: string;
  desc: string;
}

interface PageSectionIntroModeTypes {
  [index: string]: PageSectionIntroColorTypes;
  light: PageSectionIntroColorTypes;
  dark: PageSectionIntroColorTypes;
}

interface PageSectionVisualTypes {
  border: string;
  fill: string;
}

interface PageSectionVisualModeTypes {
  [index: string]: PageSectionVisualTypes;
  light: PageSectionVisualTypes;
  dark: PageSectionVisualTypes;
}
