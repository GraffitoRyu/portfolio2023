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
  bgFrom: string;
  bgTo: string;
  title: string;
  strong: string;
  desc: string;
}

interface IntroModeTypes {
  [index: string]: IntroTypes;
  light: IntroTypes;
  dark: IntroTypes;
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
