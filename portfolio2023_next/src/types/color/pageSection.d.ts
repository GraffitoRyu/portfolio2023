interface SectionHeaderTypes {
  title?: string;
  desc?: string[];
  empty?: boolean;
  className?: string;
}

interface SectionHeaderModeTypes {
  [index: string]: SectionHeaderTypes;
  light: SectionHeaderTypes;
  dark: SectionHeaderTypes;
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
