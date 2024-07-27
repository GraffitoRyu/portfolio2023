interface SectionHeaderTypes {
  title: string;
  desc: string | string[];
  empty: boolean;
  className: string;
}

interface SectionHeaderModeTypes {
  [index: string]: Partial<SectionHeaderTypes>;
  light: Partial<SectionHeaderTypes>;
  dark: Partial<SectionHeaderTypes>;
}

interface IntroTypes {
  title: (string | React.ReactNode)[];
  desc: (string | React.ReactNode)[];
}

interface IntroColorTypes {
  bgFrom: string;
  bgTo: string;
  title: string;
  strong: string;
  desc: string;
}

interface IntroModeTypes {
  [index: string]: IntroColorTypes;
  light: IntroColorTypes;
  dark: IntroColorTypes;
}

interface VisualTypes {
  border: string;
  fill: string;
}

interface VisualModeTypes {
  [index: string]: VisualTypes;
  light: VisualTypes;
  dark: VisualTypes;
}
